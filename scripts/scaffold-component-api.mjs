#!/usr/bin/env node

import { access, mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"

const ROOT = process.cwd()
const UI_DIR = path.join(ROOT, "registry/default/ui")
const BLOCKS_DIR = path.join(ROOT, "registry/default/blocks")
const API_DIR = path.join(ROOT, "app/component-api")
const VARIANT_NAMES_FILE = path.join(
  ROOT,
  "app/component-variants/variant-page-names.ts"
)
const REGISTRY_FILE = path.join(ROOT, "registry.json")
const INDEX_FILE = path.join(API_DIR, "index.ts")

const CURATED = new Set([
  "badge",
  "button",
  "card",
  "data-table",
  "date-picker",
  "dialog",
  "form",
  "input",
  "quality-summary-card",
  "data-product-table",
  "data-product-card",
  "hero",
  "dataos-sidebar",
  "application-header",
  "run-duration",
  "model-health-runs",
  "run-metrics",
  "models-table",
  "run-metrics",
  "select",
  "toast",
  "typography",
])

const SPECIAL_PAGES = {
  login: {
    importPath: "@/components/blocks/login-01",
    exportName: "LoginPage",
    example: "<LoginPage />",
    title: "Login Blocks",
    footnote:
      "Login blocks are full-page layouts. Install individual blocks such as login-01 from the registry.",
    props: [],
  },
  signup: {
    importPath: "@/components/blocks/signup-01",
    exportName: "SignupPage",
    example: "<SignupPage />",
    title: "Signup Blocks",
    footnote:
      "Signup blocks are full-page layouts. Install individual blocks such as signup-01 from the registry.",
    props: [],
  },
  "project-setup": {
    importPath: "@/components/project-setup",
    exportName: "ProjectSetup",
    example: "npx shadcn@latest add @modernui/project-setup\\nnpx shadcn@latest add tmdc-io/modern-ui-component/project-setup",
    title: "Project Setup",
    footnote:
      "Installs AGENTS.md and docs/modernui-setup.md into consumer projects.",
    props: [],
  },
}

function toExportName(name) {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")
}

function toCamelExport(name) {
  const parts = name.split("-")
  return (
    parts[0] +
    parts
      .slice(1)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("")
  )
}

async function fileExists(filePath) {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

async function readVariantPageNames() {
  const content = await readFile(VARIANT_NAMES_FILE, "utf8")
  const names = [...content.matchAll(/"([^"]+)"/g)].map((match) => match[1])
  return [...new Set(names)]
}

async function readRegistryDescriptions() {
  const registry = JSON.parse(await readFile(REGISTRY_FILE, "utf8"))
  const descriptions = {}

  for (const item of registry.items) {
    descriptions[item.name] =
      item.description ?? `ModernUI ${item.name} component.`
  }

  return descriptions
}

function findMatchingBrace(source, openIndex, open = "{", close = "}") {
  let depth = 0
  for (let i = openIndex; i < source.length; i++) {
    if (source[i] === open) depth++
    if (source[i] === close) {
      depth--
      if (depth === 0) return i
    }
  }
  return -1
}

function parseDestructuredParams(paramBlock) {
  const params = []

  for (const rawLine of paramBlock.split("\n")) {
    const line = rawLine.trim().replace(/,$/, "")
    if (!line || line.startsWith("//")) continue

    const match = line.match(/^(\w+)\s*(?:=\s*(.+))?$/)
    if (match) {
      params.push({
        name: match[1],
        default: match[2]?.trim(),
      })
    }
  }

  return params
}

function extractExportedTypes(source) {
  const types = {}
  const typeRegex = /export\s+type\s+(\w+)\s*=\s*\{/g

  for (const match of source.matchAll(typeRegex)) {
    const name = match[1]
    const openBrace = match.index + match[0].length - 1
    const closeBrace = findMatchingBrace(source, openBrace)
    if (closeBrace === -1) continue

    const body = source.slice(openBrace + 1, closeBrace)
    const props = []

    for (const rawLine of body.split("\n")) {
      const line = rawLine.trim()
      if (!line || line.startsWith("//")) continue

      const propMatch = line.match(/^(\w+)(\?)?:\s*(.+?)(?:,)?$/)
      if (propMatch) {
        props.push({
          name: propMatch[1],
          optional: Boolean(propMatch[2]),
          type: propMatch[3].replace(/,$/, "").trim(),
        })
      }
    }

    types[name] = props
  }

  return types
}

function extractFunctionComponents(source) {
  const components = []
  const fnRegex = /(?:export\s+)?function\s+(\w+)\s*\(/g

  for (const match of source.matchAll(fnRegex)) {
    const name = match[1]
    const paramsStart = match.index + match[0].length
    const slice = source.slice(paramsStart)

    if (slice.startsWith("{")) {
      const closeBrace = findMatchingBrace(source, paramsStart)
      const paramBlock = source.slice(paramsStart + 1, closeBrace)
      let afterParams = closeBrace + 1
      let typeStr = ""

      const typedDestructured = source.slice(afterParams).match(/^\s*:\s*/)
      if (typedDestructured) {
        const typeStart = afterParams + typedDestructured[0].length
        const bodyMatch = source.slice(typeStart).match(/^([\s\S]*?)\)\s*\{/)
        if (!bodyMatch) continue
        typeStr = bodyMatch[1].trim()
      } else {
        const restMatch = source.slice(afterParams).match(/^\s*,\s*\.\.\.(\w+)?/)
        if (restMatch) afterParams += restMatch[0].length
        if (source[afterParams] !== ")") continue
        const typeStart = source.indexOf(":", afterParams) + 1
        const bodyStart = source.indexOf("{", typeStart)
        if (typeStart <= 0 || bodyStart === -1) continue
        typeStr = source.slice(typeStart, bodyStart).trim()
      }

      components.push({
        name,
        params: parseDestructuredParams(paramBlock),
        typeStr,
        propsTypeName: null,
      })
      continue
    }

    const propsMatch = slice.match(/^props\s*:\s*(\w+)/)
    if (propsMatch) {
      components.push({
        name,
        params: [],
        typeStr: "",
        propsTypeName: propsMatch[1],
      })
    }
  }

  return components
}

function extractCvaMaps(source) {
  const maps = {}
  const cvaRegex =
    /(?:const|let|var)\s+(\w+)\s*=\s*cva\([\s\S]*?variants:\s*\{([\s\S]*?)\n\s*\},\s*\n\s*defaultVariants:\s*\{([\s\S]*?)\n\s*\}/g

  for (const match of source.matchAll(cvaRegex)) {
    const cvaName = match[1]
    const variantsBlock = match[2]
    const defaultsBlock = match[3]
    const groups = {}
    const defaults = {}

    for (const defaultMatch of defaultsBlock.matchAll(
      /(\w+):\s*(?:"([^"]+)"|'([^']+)'|(\w+))/g
    )) {
      defaults[defaultMatch[1]] =
        defaultMatch[2] ?? defaultMatch[3] ?? defaultMatch[4]
    }

    const groupRegex = /^\s*(\w+):\s*\{([\s\S]*?)\n\s*\},?\s*$/gm
    for (const groupMatch of variantsBlock.matchAll(
      /(\w+):\s*\{\n([\s\S]*?)\n\s*\}/g
    )) {
      const groupName = groupMatch[1]
      const keysBlock = groupMatch[2]
      const keys = []

      for (const keyMatch of keysBlock.matchAll(/^\s*(?:"([^"]+)"|(\w+)):/gm)) {
        const key = keyMatch[1] ?? keyMatch[2]
        if (key) keys.push(key)
      }

      if (keys.length > 0) {
        groups[groupName] = { keys, default: defaults[groupName] }
      }
    }

    maps[cvaName] = groups
  }

  return maps
}

function extractCvaGroupsForDoc(cvaMaps, primaryCvaName) {
  const groups = []
  const groupMap = primaryCvaName ? cvaMaps[primaryCvaName] : null
  const sourceMap = groupMap ?? Object.values(cvaMaps)[0]
  if (!sourceMap) return groups

  for (const [groupName, { keys }] of Object.entries(sourceMap)) {
    groups.push({
      title: `${groupName.charAt(0).toUpperCase()}${groupName.slice(1)} Classes`,
      variants: keys.map((key) => ({
        name: key,
        description: `${key} ${groupName} styling.`,
      })),
    })
  }

  return groups
}

function getVariantPropsFromType(typeStr) {
  const match = typeStr.match(/VariantProps<typeof\s+(\w+)>/)
  return match?.[1] ?? null
}

function parseTypeBodyProps(body) {
  const props = []
  let i = 0

  while (i < body.length) {
    while (i < body.length && /\s/.test(body[i])) i++
    if (i >= body.length) break

    const nameMatch = body.slice(i).match(/^(\w+)(\?)?:\s*/)
    if (!nameMatch) break

    const name = nameMatch[1]
    i += nameMatch[0].length
    const typeStart = i

    if (body[i] === "{") {
      const close = findMatchingBrace(body, i)
      if (close === -1) break
      i = close + 1
      props.push({
        name,
        type: body.slice(typeStart, close + 1).replace(/\s+/g, " ").trim(),
      })
      continue
    }

    const typeLines = []
    while (i < body.length) {
      if (typeLines.length > 0) {
        const upcoming = body.slice(i).match(/^\s*\w+\??:/)
        if (upcoming) break
      }

      const lineEnd = body.indexOf("\n", i)
      const end = lineEnd === -1 ? body.length : lineEnd
      const line = body.slice(i, end).trim()
      if (line) typeLines.push(line)
      i = lineEnd === -1 ? body.length : lineEnd + 1
    }

    props.push({
      name,
      type: typeLines.join(" ").replace(/\s+/g, " ").trim(),
    })
  }

  return props
}

function extractInlineTypeProps(typeStr) {
  const props = []
  const anchor = typeStr.indexOf("& {")
  if (anchor === -1) return props

  const openBrace = typeStr.indexOf("{", anchor)
  const closeBrace = findMatchingBrace(typeStr, openBrace)
  if (closeBrace === -1) return props

  return parseTypeBodyProps(typeStr.slice(openBrace + 1, closeBrace))
}

function buildFootnote(typeStr, exportName) {
  if (!typeStr) {
    return `See TypeScript types for the full ${exportName} prop interface.`
  }

  const htmlMatch = typeStr.match(/ComponentProps<"(\w+)"/)
  if (htmlMatch) {
    return `Additionally, ${exportName} accepts all standard HTML ${htmlMatch[1]} attributes.`
  }

  if (typeStr.includes("ComponentProps<typeof")) {
    return `Additionally, ${exportName} forwards props to the underlying Radix UI primitive.`
  }

  return `Additionally, ${exportName} accepts props forwarded from its underlying element or primitive.`
}

function formatDefault(value) {
  if (!value) return undefined
  const cleaned = value.replace(/,$/, "").trim()
  if (/^["']/.test(cleaned)) return cleaned
  if (/^\d+$/.test(cleaned)) return cleaned
  if (cleaned === "true" || cleaned === "false") return cleaned
  return JSON.stringify(cleaned)
}

function buildPropsForComponent({
  component,
  cvaMaps,
  exportedTypes,
  allExports,
  primaryExport,
}) {
  const rows = []
  const seen = new Set()

  function addRow(row) {
    if (seen.has(row.prop)) return
    seen.add(row.prop)
    rows.push(row)
  }

  if (allExports.length > 1) {
    for (const exportName of allExports) {
      if (exportName === primaryExport) continue
      if (!/^[A-Z]/.test(exportName)) continue
      addRow({
        prop: exportName,
        type: "component",
        description: `${exportName} subcomponent exported from this module.`,
      })
    }
  }

  if (component?.propsTypeName && exportedTypes[component.propsTypeName]) {
    for (const prop of exportedTypes[component.propsTypeName]) {
      addRow({
        prop: prop.name,
        type: prop.type,
        description: `${prop.name} prop on ${component.name}.`,
      })
    }
  }

  if (component?.typeStr) {
    const cvaName = getVariantPropsFromType(component.typeStr)
    if (cvaName && cvaMaps[cvaName]) {
      for (const [groupName, { keys, default: defaultValue }] of Object.entries(
        cvaMaps[cvaName]
      )) {
        addRow({
          prop: groupName,
          type: keys.map((key) => `'${key}'`).join(" | "),
          default: defaultValue ? `'${defaultValue}'` : undefined,
          description: `Controls the ${groupName} styling via CVA variants.`,
        })
      }
    }

    for (const prop of extractInlineTypeProps(component.typeStr)) {
      const paramDefault = component.params.find((p) => p.name === prop.name)?.default
      addRow({
        prop: prop.name,
        type: prop.type,
        default: formatDefault(paramDefault),
        description: `${prop.name} configuration option.`,
      })
    }
  }

  for (const param of component?.params ?? []) {
    if (["className", "children", "variant", "size"].includes(param.name)) continue
    if (seen.has(param.name)) continue
    if (param.name === "id") continue

    addRow({
      prop: param.name,
      type: "unknown",
      default: formatDefault(param.default),
      description: `${param.name} prop.`,
    })
  }

  if (component?.params.some((p) => p.name === "children")) {
    addRow({
      prop: "children",
      type: "ReactNode",
      description: "Child content.",
    })
  }

  addRow({
    prop: "className",
    type: "string",
    description: "Additional CSS classes.",
  })

  return rows
}

function buildApiFromSource(source, primaryExport, allExports, componentName) {
  const components = extractFunctionComponents(source)
  const exportedTypes = extractExportedTypes(source)
  const cvaMaps = extractCvaMaps(source)
  const primary =
    components.find((c) => c.name === primaryExport) ?? components[0]

  const props = buildPropsForComponent({
    component: primary,
    cvaMaps,
    exportedTypes,
    allExports: allExports.filter((name) => /^[A-Z]/.test(name)),
    primaryExport,
  })

  const primaryCvaName = primary ? getVariantPropsFromType(primary.typeStr) : null
  const cssVariants = extractCvaGroupsForDoc(cvaMaps, primaryCvaName)
  const namedExports = allExports.filter((exportName) => /^[A-Z]/.test(exportName))
  const apiTitle =
    namedExports.length > 1
      ? `${toExportName(componentName)} Components`
      : `${primaryExport} Props`

  return {
    props,
    cssVariants,
    apiTitle,
    footnote: buildFootnote(primary?.typeStr, primaryExport),
  }
}

function extractExportedNames(source) {
  const exportMatch = source.match(/export\s*\{([^}]+)\}/)
  if (!exportMatch) return [null]

  return exportMatch[1]
    .split(",")
    .map((part) => part.trim().split(/\s+/).pop())
    .filter(Boolean)
}

async function resolveSource(name) {
  const uiPath = path.join(UI_DIR, `${name}.tsx`)
  if (await fileExists(uiPath)) {
    return { path: uiPath, kind: "ui" }
  }

  const blockPath = path.join(BLOCKS_DIR, name, `${name}.tsx`)
  if (await fileExists(blockPath)) {
    return { path: blockPath, kind: "block" }
  }

  return null
}

function renderPropsBlock(props) {
  return props
    .map((row) => {
      const lines = [
        "      {",
        `        prop: ${JSON.stringify(row.prop)},`,
        `        type: ${JSON.stringify(row.type)},`,
      ]
      if (row.default) lines.push(`        default: ${JSON.stringify(row.default)},`)
      lines.push(`        description: ${JSON.stringify(row.description)},`)
      lines.push("      },")
      return lines.join("\n")
    })
    .join("\n")
}

function renderCssVariantsBlock(cssVariants) {
  if (cssVariants.length === 0) return ""

  return `  cssVariants: ${JSON.stringify(cssVariants, null, 2)
    .split("\n")
    .map((line, index) => (index === 0 ? line : `  ${line}`))
    .join("\n")},\n`
}

function renderApiFile({
  componentName,
  description,
  importLine,
  example,
  apiTitle,
  props,
  cssVariants,
  footnote,
}) {
  const apiExport = `${toCamelExport(componentName)}Api`

  return `import type { ComponentApiDoc } from "@/app/component-variants/types"

export const ${apiExport}: ComponentApiDoc = {
  features: [
    ${JSON.stringify(description)},
  ],
  usage: {
    import: ${JSON.stringify(importLine)},
    example: ${JSON.stringify(example)},
  },
  apiReference: {
    title: ${JSON.stringify(apiTitle)},
    props: [
${renderPropsBlock(props)}
    ],
    footnote: ${JSON.stringify(footnote)},
  },
${renderCssVariantsBlock(cssVariants)}}
`
}

function renderSpecialApi(name, special, description) {
  return renderApiFile({
    componentName: name,
    description,
    importLine: `import { ${special.exportName} } from "${special.importPath}"`,
    example: special.example,
    apiTitle: special.title,
    props: special.props?.length
      ? special.props
      : [
          {
            prop: "className",
            type: "string",
            description: "Additional CSS classes.",
          },
        ],
    cssVariants: [],
    footnote: special.footnote,
  })
}

function renderIndexFile(names) {
  const sorted = [...names].sort()
  const imports = sorted
    .map(
      (name) =>
        `import { ${toCamelExport(name)}Api } from "@/app/component-api/${name}"`
    )
    .join("\n")

  const entries = sorted
    .map((name) => {
      const key = name.includes("-") ? `"${name}"` : name
      return `  ${key}: ${toCamelExport(name)}Api,`
    })
    .join("\n")

  return `${imports}
import type { ComponentApiDoc } from "@/app/component-variants/types"

export const componentApiDocs: Record<string, ComponentApiDoc> = {
${entries}
}

export function hasComponentApiDoc(name: string) {
  return name in componentApiDocs
}

export function getComponentApiDoc(name: string) {
  return componentApiDocs[name]
}
`
}

async function main() {
  const args = process.argv.slice(2)
  const force = args.includes("--force")
  const flagsOnly = args.length === 0 || args.every((arg) => arg.startsWith("--"))
  const writeIndex = args.includes("--write-index") || flagsOnly
  const targetName = args.find((arg) => !arg.startsWith("--"))

  await mkdir(API_DIR, { recursive: true })

  const descriptions = await readRegistryDescriptions()
  const variantNames = targetName ? [targetName] : await readVariantPageNames()
  const written = []

  for (const name of variantNames) {
    if (CURATED.has(name) && !force) {
      written.push(name)
      continue
    }

    let content

    if (SPECIAL_PAGES[name]) {
      content = renderSpecialApi(
        name,
        SPECIAL_PAGES[name],
        descriptions[name] ?? `ModernUI ${name}.`
      )
    } else {
      const sourceInfo = await resolveSource(name)
      if (!sourceInfo) {
        console.warn(`Skipping ${name}: no registry source found`)
        continue
      }

      const sourceCode = await readFile(sourceInfo.path, "utf8")
      const exported = extractExportedNames(sourceCode)
      const primaryExport = exported[0] ?? toExportName(name)
      const importBase =
        sourceInfo.kind === "block"
          ? `@/components/blocks/${name}`
          : `@/components/ui/${name}`

      const { props, cssVariants, apiTitle, footnote } = buildApiFromSource(
        sourceCode,
        primaryExport,
        exported,
        name
      )

      content = renderApiFile({
        componentName: name,
        description: descriptions[name] ?? `ModernUI ${name} component.`,
        importLine: `import { ${primaryExport} } from "${importBase}"`,
        example: `<${primaryExport} />`,
        apiTitle,
        props,
        cssVariants,
        footnote,
      })
    }

    const outputPath = path.join(API_DIR, `${name}.ts`)
    await writeFile(outputPath, content, "utf8")
    written.push(name)
    console.log(`Wrote ${path.relative(ROOT, outputPath)}`)
  }

  if (writeIndex) {
    const indexNames = []
    for (const name of await readVariantPageNames()) {
      if (await fileExists(path.join(API_DIR, `${name}.ts`))) {
        indexNames.push(name)
      }
    }
    const indexContent = renderIndexFile(indexNames.sort())
    await writeFile(INDEX_FILE, indexContent, "utf8")
    console.log(
      `Wrote ${path.relative(ROOT, INDEX_FILE)} (${indexNames.length} entries)`
    )
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
