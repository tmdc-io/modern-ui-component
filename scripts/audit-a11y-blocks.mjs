/**
 * Lightweight a11y heuristics for DataOS blocks (registry/default/blocks).
 * Fails on common issues: icon-only buttons without aria-label, images without alt.
 */
import { readFileSync, readdirSync, statSync } from "node:fs"
import path from "node:path"

const SCAN_DIRS = [
  path.join(process.cwd(), "registry/default/blocks"),
  path.join(process.cwd(), "registry/default/ui"),
]

function walkTsx(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name)
    const stat = statSync(full)
    if (stat.isDirectory()) {
      walkTsx(full, files)
    } else if (name.endsWith(".tsx")) {
      files.push(full)
    }
  }
  return files
}

function lineOf(source, index) {
  return source.slice(0, index).split("\n").length
}

function auditFile(filePath) {
  const source = readFileSync(filePath, "utf8")
  const rel = path.relative(process.cwd(), filePath)
  const issues = []

  const iconButtonRe =
    /<button\b[^>]*className=\{?[^>]*size-[^>]*\}?\s*[^>]*>(?!\s*<span[^>]*sr-only)/g
  let match
  while ((match = iconButtonRe.exec(source))) {
  }

  const buttonTagRe = /<button\b([^>]*)>/g
  while ((match = buttonTagRe.exec(source))) {
    const attrs = match[1]
    const hasAriaLabel = /\baria-label=/.test(attrs)
    const hasAriaLabelledby = /\baria-labelledby=/.test(attrs)
    const isHidden = /\baria-hidden/.test(attrs)
    if (isHidden) continue

    const snippetStart = Math.max(0, match.index - 120)
    const context = source.slice(snippetStart, match.index + match[0].length)
    const looksIconOnly =
      /size-7|size-8|size-9|size-10|shrink-0/.test(context) &&
      !/<span[^>]*>[^<]+<\/span>/.test(
        source.slice(match.index, match.index + 400)
      )

    if (looksIconOnly && !hasAriaLabel && !hasAriaLabelledby) {
      issues.push({
        rel,
        line: lineOf(source, match.index),
        rule: "icon-button-needs-label",
        message: "Suspected icon-only <button> without aria-label.",
      })
    }
  }

  const imgRe = /<img\b([^>]*)\/?>/g
  while ((match = imgRe.exec(source))) {
    const attrs = match[1]
    if (!/\balt=/.test(attrs)) {
      issues.push({
        rel,
        line: lineOf(source, match.index),
        rule: "img-needs-alt",
        message: "<img> without alt attribute.",
      })
    }
  }

  return issues
}

function main() {
  const files = SCAN_DIRS.flatMap((dir) => walkTsx(dir))
  const all = files.flatMap(auditFile)

  const byRule = all.reduce((acc, item) => {
    acc[item.rule] = (acc[item.rule] ?? 0) + 1
    return acc
  }, {})

  if (all.length > 0) {
    console.error("Registry a11y audit found issues:\n")
    for (const issue of all.slice(0, 40)) {
      console.error(
        `  ${issue.rel}:${issue.line} [${issue.rule}] ${issue.message}`
      )
    }
    if (all.length > 40) {
      console.error(`  … and ${all.length - 40} more`)
    }
    console.error("\nSummary:", byRule)
    process.exit(1)
  }

  console.log(
    `Registry a11y audit passed (${files.length} files under blocks + ui).`
  )
}

main()
