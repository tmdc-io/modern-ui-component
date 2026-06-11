import { existsSync, readFileSync } from "node:fs"
import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"

const PACKAGE_JSON_PATH = "package.json"
const OUTPUT_PATH = "app/attributions-data.ts"

const CATEGORY_BY_PACKAGE = {
  react: "Core framework",
  "react-dom": "Core framework",
  next: "Core framework",
  "radix-ui": "UI primitives & accessibility",
  "@radix-ui/react-slot": "UI primitives & accessibility",
  "@radix-ui/react-toast": "UI primitives & accessibility",
  "@base-ui/react": "UI primitives & accessibility",
  vaul: "UI primitives & accessibility",
  clsx: "Styling & class utilities",
  "tailwind-merge": "Styling & class utilities",
  "class-variance-authority": "Styling & class utilities",
  "tw-animate-css": "Styling & class utilities",
  "next-themes": "Styling & class utilities",
  "react-hook-form": "Forms & validation",
  "@hookform/resolvers": "Forms & validation",
  zod: "Forms & validation",
  "@tanstack/react-table": "Data tables & charts",
  "@tanstack/react-virtual": "Data tables & charts",
  recharts: "Data tables & charts",
  "date-fns": "Date & time",
  "react-day-picker": "Date & time",
  "chrono-node": "Date & time",
  "little-date": "Date & time",
  cmdk: "Interaction & components",
  "embla-carousel-react": "Interaction & components",
  "embla-carousel-autoplay": "Interaction & components",
  "input-otp": "Interaction & components",
  "react-resizable-panels": "Interaction & components",
  sonner: "Interaction & components",
  "lucide-react": "Icons",
  shadcn: "Registry & distribution",
  typescript: "Development & tooling",
  tailwindcss: "Development & tooling",
  "@tailwindcss/postcss": "Development & tooling",
  eslint: "Development & tooling",
  "eslint-config-next": "Development & tooling",
  "@eslint/eslintrc": "Development & tooling",
  "@types/node": "Development & tooling",
  "@types/react": "Development & tooling",
  "@types/react-dom": "Development & tooling",
}

const ROLE_BY_PACKAGE = {
  react: "UI runtime",
  "react-dom": "DOM rendering",
  next: "App framework for this registry site",
  "radix-ui": "Accessible unstyled primitives (dialogs, menus, etc.)",
  "@radix-ui/react-slot": "Polymorphic asChild composition",
  "@radix-ui/react-toast": "Toast primitive",
  "@base-ui/react": "Headless React components",
  vaul: "Drawer component",
  clsx: "Conditional className helper",
  "tailwind-merge": "Tailwind class conflict resolution",
  "class-variance-authority": "Variant-based component styling",
  "tw-animate-css": "Tailwind v4 animation utilities",
  "next-themes": "Light/dark theme switching",
  "react-hook-form": "Form state management",
  "@hookform/resolvers": "Schema validation adapters",
  zod: "Schema validation",
  "@tanstack/react-table": "Headless data table engine",
  "@tanstack/react-virtual": "Virtual scrolling for large lists",
  recharts: "Chart components",
  "date-fns": "Date formatting and manipulation",
  "react-day-picker": "Calendar date picker",
  "chrono-node": "Natural language date parsing",
  "little-date": "Relative date range formatting",
  cmdk: "Command palette / combobox",
  "embla-carousel-react": "Carousel component",
  "embla-carousel-autoplay": "Carousel autoplay plugin",
  "input-otp": "One-time password input",
  "react-resizable-panels": "Resizable panel layouts",
  sonner: "Toast notifications",
  "lucide-react": "Icon set",
  shadcn: "Registry CLI and component distribution",
  typescript: "Type checking",
  tailwindcss: "Utility-first CSS framework",
  "@tailwindcss/postcss": "Tailwind PostCSS integration",
  eslint: "Linting",
  "eslint-config-next": "Next.js ESLint rules",
  "@eslint/eslintrc": "Legacy ESLint config support",
  "@types/node": "Node.js type definitions",
  "@types/react": "React type definitions",
  "@types/react-dom": "React DOM type definitions",
}

const ACKNOWLEDGEMENTS = [
  {
    name: "shadcn/ui",
    license: "MIT",
    homepage: "https://ui.shadcn.com",
    description:
      "Component patterns, registry architecture, and CLI that ModernUI extends and distributes.",
  },
  {
    name: "Radix UI",
    license: "MIT",
    homepage: "https://radix-ui.com",
    description:
      "Accessible, unstyled primitives used across dialogs, menus, popovers, and form controls.",
  },
  {
    name: "TanStack",
    license: "MIT",
    homepage: "https://tanstack.com",
    description:
      "Headless Table and Virtual libraries for data grids and performant scrolling.",
  },
  {
    name: "Tailwind CSS",
    license: "MIT",
    homepage: "https://tailwindcss.com",
    description:
      "Utility-first CSS framework and design-token foundation for ModernUI styling.",
  },
  {
    name: "Lucide",
    license: "ISC",
    homepage: "https://lucide.dev",
    description: "Open-source icon set used throughout component examples and docs.",
  },
]

function cleanVersion(version) {
  return version.replace(/^[\^~>=<]+/, "")
}

function normalizeHomepage(homepage, repository) {
  let url = homepage || ""

  if (!url && repository) {
    url = typeof repository === "object" ? repository.url : repository
  }

  if (!url) return ""

  if (url.startsWith("git+")) {
    url = url.replace(/^git+/, "").replace(/\.git$/, "")
  }

  if (url.startsWith("git@github.com:")) {
    url = `https://github.com/${url.slice("git@github.com:".length).replace(/\.git$/, "")}`
  }

  if (url.startsWith("github:")) {
    url = `https://github.com/${url.slice("github:".length).replace(/\.git$/, "")}`
  }

  if (!url.startsWith("http")) {
    url = `https://github.com/${url.replace(/^\/+/, "").replace(/\.git$/, "")}`
  }

  return url.replace(/\.git$/, "").replace(/#readme$/, "")
}

function readPackageMeta(name) {
  const directPath = path.join("node_modules", name, "package.json")
  const scopedPath = name.startsWith("@")
    ? path.join("node_modules", name.split("/")[0], name, "package.json")
    : null

  const packagePath = existsSync(directPath)
    ? directPath
    : scopedPath && existsSync(scopedPath)
      ? scopedPath
      : null

  if (!packagePath) {
    return {
      license: "Unknown",
      homepage: "",
      description: "",
    }
  }

  const meta = JSON.parse(readFileSync(packagePath, "utf8"))
  return {
    license:
      meta.license ||
      (Array.isArray(meta.licenses) && meta.licenses[0]?.type) ||
      "Unknown",
    homepage: normalizeHomepage(meta.homepage, meta.repository),
    description: meta.description || "",
  }
}

function groupPackages(packages) {
  const groups = new Map()

  for (const pkg of packages) {
    const title = pkg.category
    if (!groups.has(title)) {
      groups.set(title, [])
    }
    groups.get(title).push(pkg)
  }

  return [...groups.entries()].map(([title, items]) => ({
    title,
    packages: items.sort((a, b) => a.name.localeCompare(b.name)),
  }))
}

async function main() {
  const pkg = JSON.parse(await readFile(PACKAGE_JSON_PATH, "utf8"))
  const runtimeNames = Object.keys(pkg.dependencies ?? {})
  const devNames = Object.keys(pkg.devDependencies ?? {})

  function buildPackage(name, version, kind) {
    const meta = readPackageMeta(name)
    return {
      name,
      version: cleanVersion(version),
      license: meta.license,
      homepage: meta.homepage,
      description: meta.description,
      role: ROLE_BY_PACKAGE[name] || meta.description || "Project dependency",
      category: CATEGORY_BY_PACKAGE[name] || "Other",
      kind,
    }
  }

  const runtimePackages = runtimeNames.map((name) =>
    buildPackage(name, pkg.dependencies[name], "runtime")
  )
  const devPackages = devNames.map((name) =>
    buildPackage(name, pkg.devDependencies[name], "development")
  )

  const output = `// Generated by scripts/generate-attributions.mjs — do not edit manually.
// Run: pnpm docs:sync-attributions

export type AttributionPackage = {
  name: string
  version: string
  license: string
  homepage: string
  description: string
  role: string
  category: string
  kind: "runtime" | "development"
}

export type AttributionGroup = {
  title: string
  packages: AttributionPackage[]
}

export type Acknowledgement = {
  name: string
  license: string
  homepage: string
  description: string
}

export const attributionGeneratedAt = ${JSON.stringify(new Date().toISOString().slice(0, 10))}

export const runtimeAttributionGroups: AttributionGroup[] = ${JSON.stringify(
    groupPackages(runtimePackages),
    null,
    2
  )}

export const developmentAttributionGroups: AttributionGroup[] = ${JSON.stringify(
    groupPackages(devPackages),
    null,
    2
  )}

export const acknowledgements: Acknowledgement[] = ${JSON.stringify(
    ACKNOWLEDGEMENTS,
    null,
    2
  )}

export const attributionStats = {
  runtimeCount: ${runtimePackages.length},
  developmentCount: ${devPackages.length},
  totalCount: ${runtimePackages.length + devPackages.length},
}
`

  await writeFile(OUTPUT_PATH, output)
  console.log(
    `Wrote ${OUTPUT_PATH} (${runtimePackages.length} runtime + ${devPackages.length} dev packages)`
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
