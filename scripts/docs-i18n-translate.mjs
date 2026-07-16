#!/usr/bin/env node
/**
 * Translate missing docs English strings to Spanish and merge into generated map.
 *
 * Uses MyMemory free API (no API key). Rate-limited; for large gaps prefer
 * manual batches or set DOCS_I18N_TRANSLATE_EMAIL for a higher quota.
 *
 * Usage:
 *   pnpm docs:i18n-translate
 *   node scripts/docs-i18n-translate.mjs --dry-run
 *   node scripts/docs-i18n-translate.mjs --limit 20
 */
import fs from "fs"
import path from "path"
import { fileURLToPath, pathToFileURL } from "url"
import { spawnSync } from "child_process"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, "..")

const DELAY_MS = Number(process.env.DOCS_I18N_DELAY_MS ?? 350)
const email = process.env.DOCS_I18N_TRANSLATE_EMAIL

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

function shouldKeepEnglish(text) {
  // Pure identifiers / code-like tokens
  if (!/\s/.test(text) && /^[\w./`"':|<>=\[\]{}()+*,#-]+$/.test(text)) {
    return true
  }
  if (text.length <= 3) return true
  return false
}

async function translateEnToEs(text) {
  if (shouldKeepEnglish(text)) return text

  const url = new URL("https://api.mymemory.translated.net/get")
  url.searchParams.set("q", text.slice(0, 450))
  url.searchParams.set("langpair", "en|es")
  if (email) url.searchParams.set("de", email)

  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`MyMemory HTTP ${res.status}`)
  }
  const data = await res.json()
  const translated = data?.responseData?.translatedText
  if (!translated || typeof translated !== "string") {
    throw new Error(`MyMemory empty response for: ${text.slice(0, 60)}`)
  }
  // API sometimes echoes the query on failure / quota
  if (translated === text && text.length > 40) {
    const details = data?.responseDetails ?? data?.quotaFinished
    if (details) {
      console.warn(`warn: possible quota/limit — keeping English for long string`)
    }
  }
  return translated
}

async function main() {
  const dryRun = process.argv.includes("--dry-run")
  const limitArg = process.argv.find((a) => a.startsWith("--limit="))
  const limit = limitArg ? Number(limitArg.split("=")[1]) : Infinity

  const { getDocsI18nCoverage } = await import(
    pathToFileURL(path.join(__dirname, "docs-i18n-extract.mjs")).href
  )

  let { missingStrings, ...summary } = getDocsI18nCoverage()
  console.log("coverage before:", JSON.stringify(summary))

  if (missingStrings.length === 0) {
    console.log("Nothing to translate.")
    return
  }

  if (Number.isFinite(limit)) {
    missingStrings = missingStrings.slice(0, limit)
    console.log(`Translating first ${missingStrings.length} ( --limit=${limit} )`)
  } else {
    console.log(`Translating ${missingStrings.length} string(s)…`)
  }

  const batch = {}
  let ok = 0
  let failed = 0

  for (let i = 0; i < missingStrings.length; i++) {
    const en = missingStrings[i]
    process.stdout.write(`[${i + 1}/${missingStrings.length}] `)
    try {
      const es = await translateEnToEs(en)
      batch[en] = es
      ok++
      console.log(es.slice(0, 72) + (es.length > 72 ? "…" : ""))
    } catch (err) {
      failed++
      batch[en] = en
      console.log(`FAIL → keep EN (${err.message})`)
    }
    if (i < missingStrings.length - 1) await sleep(DELAY_MS)
  }

  const outBatch = path.join(root, "scripts/docs-es-batch-auto.json")
  if (dryRun) {
    console.log(
      JSON.stringify({ dryRun: true, ok, failed, sample: Object.entries(batch).slice(0, 3) }, null, 2)
    )
    return
  }

  fs.writeFileSync(outBatch, JSON.stringify(batch, null, 2) + "\n")
  console.log(`wrote ${outBatch} (${ok} translated, ${failed} fallback)`)

  const merge = spawnSync(
    process.execPath,
    [path.join(__dirname, "docs-i18n-merge.mjs")],
    { cwd: root, stdio: "inherit" }
  )
  if (merge.status !== 0) process.exit(merge.status ?? 1)

  const after = getDocsI18nCoverage()
  console.log(
    "coverage after:",
    JSON.stringify({
      found: after.found,
      existing: after.existing,
      missing: after.missing,
    })
  )
  if (after.missing > 0) {
    console.warn(
      `Still ${after.missing} missing — re-run or fix key-parse edge cases.`
    )
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
