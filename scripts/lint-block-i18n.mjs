#!/usr/bin/env node
/**
 * Lint ModernUI block message catalogs: every `en.values` key must exist in `es.values`.
 *
 * Usage:
 *   node scripts/lint-block-i18n.mjs
 *   pnpm docs:i18n-lint-blocks
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, "..")
const blocksRoot = path.join(root, "registry/default/blocks")

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, out)
    else if (/\.tsx?$/.test(ent.name)) out.push(p)
  }
  return out
}

/** Find the index of the matching `}` for `{` at `openIdx`, skipping string literals. */
function matchingBrace(src, openIdx) {
  let depth = 0
  let inStr = null
  let escape = false
  for (let i = openIdx; i < src.length; i++) {
    const ch = src[i]
    if (inStr) {
      if (escape) {
        escape = false
        continue
      }
      if (ch === "\\") {
        escape = true
        continue
      }
      if (ch === inStr) inStr = null
      continue
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      inStr = ch
      continue
    }
    if (ch === "{") depth++
    else if (ch === "}") {
      depth--
      if (depth === 0) return i
    }
  }
  return -1
}

function extractLangValuesKeys(src, lang) {
  const startRe = new RegExp(`(?:^|[\\n,{])\\s*${lang}\\s*:\\s*\\{`)
  const start = startRe.exec(src)
  if (!start) return null

  const openIdx = start.index + start[0].lastIndexOf("{")
  const closeIdx = matchingBrace(src, openIdx)
  if (closeIdx < 0) return null

  const block = src.slice(openIdx + 1, closeIdx)
  const valuesMatch = /values\s*:\s*\{/.exec(block)
  if (!valuesMatch) return null

  const valuesOpen = valuesMatch.index + valuesMatch[0].lastIndexOf("{")
  const valuesClose = matchingBrace(block, valuesOpen)
  if (valuesClose < 0) return null

  const valuesBody = block.slice(valuesOpen + 1, valuesClose)
  const keys = new Set()
  for (const m of valuesBody.matchAll(/^\s*(?:["']([\w.-]+)["']|([\w]+))\s*:/gm)) {
    keys.add(m[1] ?? m[2])
  }
  return keys
}

function main() {
  const files = walk(blocksRoot).filter((f) => {
    const src = fs.readFileSync(f, "utf8")
    return (
      src.includes("satisfies Translations") ||
      /export const \w+Messages\s*=/.test(src)
    )
  })

  const problems = []

  for (const file of files) {
    const src = fs.readFileSync(file, "utf8")
    const rel = path.relative(root, file)
    const enKeys = extractLangValuesKeys(src, "en")
    const esKeys = extractLangValuesKeys(src, "es")

    if (!enKeys) {
      problems.push({ file: rel, issue: "missing en.values catalog" })
      continue
    }
    if (!esKeys) {
      problems.push({ file: rel, issue: "missing es.values catalog" })
      continue
    }

    const missingInEs = [...enKeys].filter((k) => !esKeys.has(k)).sort()
    const extraInEs = [...esKeys].filter((k) => !enKeys.has(k)).sort()

    if (missingInEs.length || extraInEs.length) {
      problems.push({
        file: rel,
        missingInEs,
        extraInEs,
      })
    }
  }

  console.log(
    JSON.stringify(
      { filesChecked: files.length, problemCount: problems.length },
      null,
      2
    )
  )

  if (problems.length) {
    for (const p of problems) {
      console.error(`\n${p.file}`)
      if (p.issue) console.error(`  ${p.issue}`)
      if (p.missingInEs?.length) {
        console.error(`  missing in es: ${p.missingInEs.join(", ")}`)
      }
      if (p.extraInEs?.length) {
        console.error(`  extra in es (not in en): ${p.extraInEs.join(", ")}`)
      }
    }
    process.exit(1)
  }

  console.log("block i18n key parity OK")
}

main()
