import { readFile, writeFile } from "node:fs/promises"
import { pathToFileURL } from "node:url"

const README_PATH = "README.md"

const MARKERS = {
  items: {
    start: "<!-- catalog-count:items -->",
    end: "<!-- /catalog-count:items -->",
  },
  categories: {
    start: "<!-- catalog-count:categories -->",
    end: "<!-- /catalog-count:categories -->",
  },
}

function replaceBetweenMarkers(source, marker, value) {
  const pattern = new RegExp(
    `${escapeRegExp(marker.start)}\\d+${escapeRegExp(marker.end)}`,
    "g"
  )

  if (!pattern.test(source)) {
    throw new Error(
      `Missing README marker pair: ${marker.start} … ${marker.end}`
    )
  }

  return source.replace(
    pattern,
    `${marker.start}${value}${marker.end}`
  )
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

export async function getCatalogStatsFromSource() {
  const catalogSource = await readFile("app/catalog.ts", "utf8")
  const chartSource = await readFile("app/chart-catalog.ts", "utf8")

  const catalogItems = (catalogSource.match(/\bitem\s*\(/g) ?? []).length
  const chartItems = (chartSource.match(/^\s+name:\s+"/gm) ?? []).length

  const catalogCategories = (
    catalogSource.match(/^\s+id:\s+"[^"]+",$/gm) ?? []
  ).filter((line) => !line.includes("string")).length
  const chartCategories = (chartSource.match(/^\s+id:\s+"charts-/gm) ?? [])
    .length

  return {
    items: catalogItems + chartItems,
    categories: catalogCategories + chartCategories,
  }
}

export async function syncReadmeCatalogCount(options = {}) {
  const { write = true } = options
  const stats = await getCatalogStatsFromSource()
  const readme = await readFile(README_PATH, "utf8")

  let next = replaceBetweenMarkers(readme, MARKERS.items, stats.items)
  next = replaceBetweenMarkers(next, MARKERS.categories, stats.categories)

  if (write && next !== readme) {
    await writeFile(README_PATH, next)
  }

  return { ...stats, changed: next !== readme, readme: next }
}

async function main() {
  const { items, categories, changed } = await syncReadmeCatalogCount()

  if (changed) {
    console.log(`Updated README catalog counts: ${items} items, ${categories} categories.`)
    return
  }

  console.log(`README catalog counts already up to date: ${items} items, ${categories} categories.`)
}

const isDirectRun =
  import.meta.url === pathToFileURL(process.argv[1]).href

if (isDirectRun) {
  main().catch((error) => {
    console.error(error)
    process.exit(1)
  })
}
