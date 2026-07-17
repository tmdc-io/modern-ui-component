/**
 * Extracts compilable snippets from app/component-examples/*-codes.ts
 * and typechecks them under .drawer-check/ (consumer import paths rewritten to registry).
 */
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { spawnSync } from "node:child_process"
import path from "node:path"
import ts from "typescript"

const ROOT = process.cwd()
const OUT_DIR = path.join(ROOT, ".drawer-check")
const SKIP_KEYS = new Set(["install", "props"])
const CODES_SUFFIX = "-codes.ts"

function rewriteConsumerImports(code) {
  return code
    .replace(
      /@\/components\/blocks\/([a-z0-9-]+)/g,
      "@/registry/default/blocks/$1/$1"
    )
    .replace(/@\/components\/ui\/([a-z0-9-]+)/g, "@/registry/default/ui/$1")
}

function isCompilableSnippet(code) {
  if (!/\bexport\s+(function|const|default|class)\b/.test(code)) {
    return false
  }
  if (!/\bimport\s+/.test(code) && !/\bexport\s+function\b/.test(code)) {
    return false
  }
  return true
}

function extractEntries(filePath, sourceText) {
  const sf = ts.createSourceFile(
    filePath,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS
  )
  const entries = []

  function getPropertyCode(initializer) {
    if (ts.isNoSubstitutionTemplateLiteral(initializer)) {
      return initializer.text
    }
    if (ts.isStringLiteral(initializer)) {
      return initializer.text
    }
    return null
  }

  function visit(node) {
    if (
      ts.isVariableStatement(node) &&
      node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)
    ) {
      for (const decl of node.declarationList.declarations) {
        if (
          !ts.isIdentifier(decl.name) ||
          !decl.name.text.endsWith("Codes") ||
          !decl.initializer ||
          !ts.isObjectLiteralExpression(decl.initializer)
        ) {
          continue
        }

        for (const prop of decl.initializer.properties) {
          if (!ts.isPropertyAssignment(prop) || !ts.isIdentifier(prop.name)) {
            continue
          }
          const key = prop.name.text
          if (SKIP_KEYS.has(key)) continue
          const code = getPropertyCode(prop.initializer)
          if (!code) continue
          if (!isCompilableSnippet(code)) continue
          entries.push({ key, code })
        }
      }
    }
    ts.forEachChild(node, visit)
  }

  visit(sf)
  return entries
}

function main() {
  const codesDir = path.join(ROOT, "app/component-examples")
  const files = readdirSync(codesDir)
    .filter((name) => name.endsWith(CODES_SUFFIX))
    .sort()

  rmSync(OUT_DIR, { recursive: true, force: true })
  mkdirSync(OUT_DIR, { recursive: true })

  const manifest = []
  let written = 0

  for (const file of files) {
    const filePath = path.join(codesDir, file)
    const sourceText = readFileSync(filePath, "utf8")
    const base = file.replace(/\.ts$/, "")
    const entries = extractEntries(filePath, sourceText)

    for (const { key, code } of entries) {
      const outName = `${base}__${key}.tsx`
      const outPath = path.join(OUT_DIR, outName)
      const body = rewriteConsumerImports(code.trim())
      writeFileSync(
        outPath,
        `// Generated from ${file} (${key})\n/* eslint-disable */\n${body}\n`,
        "utf8"
      )
      manifest.push({ file, key, outName })
      written += 1
    }
  }

  writeFileSync(
    path.join(OUT_DIR, "manifest.json"),
    JSON.stringify({ count: written, entries: manifest }, null, 2),
    "utf8"
  )

  if (written === 0) {
    console.error("No compilable drawer snippets found.")
    process.exit(1)
  }

  const result = spawnSync(
    "pnpm",
    ["exec", "tsc", "--noEmit", "-p", "tsconfig.drawer-check.json"],
    { cwd: ROOT, encoding: "utf8", stdio: "pipe" }
  )

  if (result.status !== 0) {
    console.error("Code drawer typecheck failed.\n")
    console.error(result.stdout)
    console.error(result.stderr)
    process.exit(result.status ?? 1)
  }

  console.log(
    `Checked ${written} drawer snippets from ${files.length} *-codes.ts files.`
  )
}

main()
