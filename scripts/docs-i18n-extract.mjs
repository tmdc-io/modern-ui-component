#!/usr/bin/env node
/**
 * Extract English docs strings that flow through docsCopy(),
 * then report which keys are missing from Spanish maps.
 *
 * Usage:
 *   node scripts/docs-i18n-extract.mjs
 *   node scripts/docs-i18n-extract.mjs --write-missing
 *   node scripts/docs-i18n-extract.mjs --check   # exit 1 if any missing
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, "..")

const FIELD =
  /(?:title|description|intro|body|footnote|enhancement|benefit)\s*:\s*(?:"((?:\\.|[^"\\])*)"|'((?:\\.|[^'\\])*)'|`((?:\\.|[^`\\])*)`)/g
const FEATURES_BLOCK = /features\s*:\s*\[([\s\S]*?)\]/g
const FEATURE_STR = /"((?:\\.|[^"\\])*)"|'((?:\\.|[^'\\])*)'/g

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, out)
    else if (/\.(ts|tsx)$/.test(ent.name)) out.push(p)
  }
  return out
}

function unescape(s) {
  return s
    .replace(/\\n/g, "\n")
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\\\/g, "\\")
}

function shouldSkip(s) {
  if (!s || s.length < 2) return true
  if (s.includes("${")) return true
  if (s.startsWith("@")) return true
  if (s.startsWith("--")) return true
  if (s.startsWith("#") && /^#[0-9A-Fa-f]{3,8}\b/.test(s)) return true
  if (s.startsWith("npx ")) return true
  if (s.startsWith("import ")) return true
  if (/^(react|recharts|zod|cmdk|vaul|sonner|lucide-react)/.test(s)) return true
  return false
}

function extractFromFile(file) {
  const src = fs.readFileSync(file, "utf8")
  const found = new Set()
  for (const m of src.matchAll(FIELD)) {
    const raw = m[1] ?? m[2] ?? m[3]
    if (!raw) continue
    const s = unescape(raw)
    if (!shouldSkip(s)) found.add(s)
  }
  for (const block of src.matchAll(FEATURES_BLOCK)) {
    for (const m of block[1].matchAll(FEATURE_STR)) {
      const raw = m[1] ?? m[2]
      if (!raw) continue
      const s = unescape(raw)
      if (!shouldSkip(s)) found.add(s)
    }
  }
  return found
}

/** Collect string keys from a TS object literal (double- or single-quoted). */
function collectQuotedKeys(src, keys) {
  for (const m of src.matchAll(/"((?:\\.|[^"\\])*)"\s*:/g)) {
    keys.add(unescape(m[1]))
  }
  for (const m of src.matchAll(/'((?:\\.|[^'\\])*)'\s*:/g)) {
    keys.add(unescape(m[1]))
  }
  for (const m of src.matchAll(/^\s*([A-Za-z_][\w]*)\s*:/gm)) {
    if (
      ![
        "export",
        "function",
        "const",
        "return",
        "if",
        "import",
        "from",
        "type",
      ].includes(m[1])
    ) {
      keys.add(m[1])
    }
  }
}

function loadExistingEs() {
  const curatedPath = path.join(root, "app/docs-copy-es.ts")
  const generatedPath = path.join(root, "app/docs-copy-es.generated.ts")
  const keys = new Set()

  collectQuotedKeys(fs.readFileSync(curatedPath, "utf8"), keys)

  if (fs.existsSync(generatedPath)) {
    collectQuotedKeys(fs.readFileSync(generatedPath, "utf8"), keys)
  }

  return keys
}

export function getDocsI18nCoverage() {
  const files = [
    ...walk(path.join(root, "app/component-api")),
    ...walk(path.join(root, "app/component-variants")),
  ].filter(
    (f) =>
      !f.endsWith(`${path.sep}types.ts`) &&
      !f.endsWith(`${path.sep}index.ts`) &&
      !f.endsWith(`${path.sep}variant-page-names.ts`)
  )

  const found = new Set()
  for (const file of files) {
    for (const s of extractFromFile(file)) found.add(s)
  }

  const existing = loadExistingEs()
  const missing = [...found]
    .filter((s) => !existing.has(s))
    .sort((a, b) => a.localeCompare(b))

  return {
    files: files.length,
    found: found.size,
    existing: existing.size,
    missing: missing.length,
    missingStrings: missing,
  }
}

function main() {
  const coverage = getDocsI18nCoverage()
  const { missingStrings, ...summary } = coverage
  console.log(JSON.stringify(summary, null, 2))

  if (process.argv.includes("--write-missing")) {
    const out = path.join(root, "scripts/docs-missing-en.json")
    fs.writeFileSync(out, JSON.stringify(missingStrings, null, 2))
    console.log(`wrote ${out}`)
  }

  if (process.argv.includes("--check")) {
    if (missingStrings.length > 0) {
      console.error(
        `\nDocs i18n coverage failed: ${missingStrings.length} English string(s) lack Spanish.\n` +
          `Run: pnpm docs:i18n-translate\n` +
          `Sample:\n  - ${missingStrings.slice(0, 8).join("\n  - ")}\n`
      )
      process.exit(1)
    }
    console.log("docs i18n coverage OK")
  }
}

const isDirect =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)

if (isDirect) {
  main()
}
