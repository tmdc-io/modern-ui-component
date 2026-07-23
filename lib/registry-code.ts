import { readFile } from "node:fs/promises"
import path from "node:path"

import {
  HOSTED_REGISTRY_BASE,
  HOSTED_REGISTRY_ORIGIN,
  REGISTRY_NAMESPACE,
} from "@/lib/registry-constants"

export type RegistryCodeFile = {
  path: string
  content: string
}

export type RegistryCodeResult = {
  name: string
  title: string
  description: string
  install: string
  files: RegistryCodeFile[]
}

type BuiltRegistryFile = {
  path?: string
  content?: string
}

type BuiltRegistryItem = {
  name: string
  title?: string
  description?: string
  files?: BuiltRegistryFile[]
}

type RegistryFile = {
  path: string
}

type RegistryItem = {
  name: string
  title?: string
  description?: string
  files?: RegistryFile[]
}

type Registry = {
  items: RegistryItem[]
}

const ROOT = process.cwd()

export function isValidRegistryName(name: string) {
  return /^[a-z0-9-]+$/.test(name)
}

function installFor(name: string) {
  if (name === "init") {
    return [
      `npx shadcn@latest init ${HOSTED_REGISTRY_BASE}/init.json -y`,
      `npx shadcn@latest init ${REGISTRY_NAMESPACE}/init -y`,
    ].join("\n")
  }
  return [
    `npx shadcn@latest add @modernui/${name}`,
    `npx shadcn@latest add ${REGISTRY_NAMESPACE}/${name}`,
  ].join("\n")
}

function fromBuiltItem(item: BuiltRegistryItem): RegistryCodeResult | null {
  const files = (item.files ?? [])
    .filter((file): file is BuiltRegistryFile & { path: string; content: string } =>
      Boolean(file.path && typeof file.content === "string" && file.content.length > 0)
    )
    .map((file) => ({
      path: file.path,
      content: file.content,
    }))

  if (!files.length) return null

  return {
    name: item.name,
    title: item.title ?? item.name,
    description: item.description ?? "",
    install: installFor(item.name),
    files,
  }
}

/** Prefer built public/r JSON (embedded content) — works locally and when traced on Vercel. */
async function readBuiltRegistryItem(
  name: string
): Promise<RegistryCodeResult | null> {
  const builtPath = path.join(ROOT, "public", "r", `${name}.json`)
  try {
    const raw = await readFile(builtPath, "utf8")
    const item = JSON.parse(raw) as BuiltRegistryItem
    if (item.name !== name) return null
    return fromBuiltItem(item)
  } catch {
    return null
  }
}

/** Local/dev fallback: registry.json + raw source files. */
async function readFromSourceTree(
  name: string
): Promise<RegistryCodeResult | null> {
  const registryPath = path.join(ROOT, "registry.json")
  const registry = JSON.parse(await readFile(registryPath, "utf8")) as Registry
  const item = registry.items.find((entry) => entry.name === name)

  if (!item?.files?.length) return null

  const rootResolved = path.resolve(ROOT)
  const files = await Promise.all(
    item.files.map(async (file) => {
      const filePath = path.join(ROOT, file.path)
      const resolved = path.resolve(filePath)
      if (
        resolved !== rootResolved &&
        !resolved.startsWith(rootResolved + path.sep)
      ) {
        throw new Error("Invalid registry file path")
      }

      return {
        path: file.path,
        content: await readFile(resolved, "utf8"),
      }
    })
  )

  return {
    name: item.name,
    title: item.title ?? item.name,
    description: item.description ?? "",
    install: installFor(item.name),
    files,
  }
}

/**
 * Fetch built JSON over HTTP (reliable on Vercel: public/ is CDN-served, not always on disk).
 */
async function fetchBuiltRegistryItem(
  name: string,
  requestUrl?: string
): Promise<RegistryCodeResult | null> {
  const candidates: string[] = []

  if (requestUrl) {
    try {
      const origin = new URL(requestUrl).origin
      candidates.push(`${origin}/r/${name}.json`)
    } catch {
      // ignore
    }
  }

  if (process.env.VERCEL_URL) {
    candidates.push(`https://${process.env.VERCEL_URL}/r/${name}.json`)
  }

  candidates.push(`${HOSTED_REGISTRY_ORIGIN}/r/${name}.json`)

  for (const url of candidates) {
    try {
      const response = await fetch(url, {
        headers: { Accept: "application/json" },
        next: { revalidate: 60 },
      })
      if (!response.ok) continue
      const item = (await response.json()) as BuiltRegistryItem
      if (item.name !== name) continue
      const result = fromBuiltItem(item)
      if (result) return result
    } catch {
      // try next candidate
    }
  }

  return null
}

export async function getRegistryComponentCode(
  name: string,
  requestUrl?: string
): Promise<RegistryCodeResult | null> {
  if (!isValidRegistryName(name)) return null

  const fromPublic = await readBuiltRegistryItem(name)
  if (fromPublic) return fromPublic

  const fromFetch = await fetchBuiltRegistryItem(name, requestUrl)
  if (fromFetch) return fromFetch

  try {
    return await readFromSourceTree(name)
  } catch {
    return null
  }
}
