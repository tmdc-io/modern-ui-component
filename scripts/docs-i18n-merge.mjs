#!/usr/bin/env node
/**
 * Merge scripts/docs-es-batch-*.json into app/docs-copy-es.generated.ts
 *
 * Workflow to finish / refresh all docs Spanish:
 *   1. node scripts/docs-i18n-extract.mjs --write-missing
 *   2. Translate scripts/docs-missing-en.json → scripts/docs-es-batch-*.json
 *   3. node scripts/docs-i18n-merge.mjs
 *   4. pnpm typecheck
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, "..")

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n")
}

function shouldSkipKey(k) {
  if (!k || !k.trim()) return true
  if (k.startsWith("@") || k.startsWith("--")) return true
  return false
}

const merged = {}
const batchFiles = fs
  .readdirSync(path.join(root, "scripts"))
  .filter((f) => /^docs-es-batch-(?:\d+|auto)\.json$/.test(f))
  .sort()

for (const file of batchFiles) {
  const data = JSON.parse(
    fs.readFileSync(path.join(root, "scripts", file), "utf8")
  )
  for (const [k, v] of Object.entries(data)) {
    if (typeof k !== "string" || typeof v !== "string") continue
    if (shouldSkipKey(k)) continue
    merged[k] = v
  }
}

const lines = [
  "/** Auto-generated Spanish docs copy. Prefer curated keys in docs-copy-es.ts. */",
  "export const docsCopyEsGenerated: Record<string, string> = {",
]
for (const k of Object.keys(merged).sort((a, b) => a.localeCompare(b))) {
  lines.push(`  "${esc(k)}": "${esc(merged[k])}",`)
}
lines.push("}")
lines.push("")

const out = path.join(root, "app/docs-copy-es.generated.ts")
fs.writeFileSync(out, lines.join("\n"))
console.log(
  JSON.stringify(
    { batches: batchFiles.length, keys: Object.keys(merged).length, out },
    null,
    2
  )
)
