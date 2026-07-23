import {
  HOSTED_REGISTRY_BASE,
  HOSTED_REGISTRY_ORIGIN,
  REGISTRY_NAMESPACE,
} from "@/lib/registry-constants"

export {
  HOSTED_REGISTRY_BASE,
  HOSTED_REGISTRY_ORIGIN,
  REGISTRY_NAMESPACE,
}

/** Dual add commands: @modernui first, then GitHub. */
export function registryAddCommands(name: string, flags = ""): string {
  const suffix = flags.trim() ? ` ${flags.trim()}` : ""
  return [
    `npx shadcn@latest add @modernui/${name}${suffix}`,
    `npx shadcn@latest add ${REGISTRY_NAMESPACE}/${name}${suffix}`,
  ].join("\n")
}

/** Dual init commands for the ModernUI base item. */
export function registryInitCommands(flags = "-y"): string {
  const suffix = flags.trim() ? ` ${flags.trim()}` : ""
  return [
    `npx shadcn@latest init ${HOSTED_REGISTRY_BASE}/init.json${suffix}`,
    `npx shadcn@latest init ${REGISTRY_NAMESPACE}/init${suffix}`,
  ].join("\n")
}

/**
 * Expand install snippets so consumers always see @modernui and GitHub forms.
 * Idempotent when both are already present.
 */
export function expandRegistryInstallCommand(command: string): string {
  const lines = command.split("\n")
  const out: string[] = []
  const seen = new Set<string>()

  const push = (line: string) => {
    const key = line.trim()
    if (!key) {
      if (out.length === 0 || out[out.length - 1] !== "") out.push("")
      return
    }
    if (seen.has(key)) return
    seen.add(key)
    out.push(line.trimEnd())
  }

  for (const raw of lines) {
    const trimmed = raw.trim()
    if (!trimmed) {
      push("")
      continue
    }

    const addMatch = trimmed.match(
      /^(npx\s+shadcn@latest\s+add)\s+(\S+)(.*)$/i
    )
    if (addMatch) {
      const [, prefix, target, rest] = addMatch
      let name: string | null = null
      if (target.startsWith("@modernui/")) {
        name = target.slice("@modernui/".length)
      } else if (target.startsWith(`${REGISTRY_NAMESPACE}/`)) {
        name = target.slice(REGISTRY_NAMESPACE.length + 1)
      }
      if (name) {
        push(`${prefix} @modernui/${name}${rest}`)
        push(`${prefix} ${REGISTRY_NAMESPACE}/${name}${rest}`)
        continue
      }
    }

    const initMatch = trimmed.match(
      /^(npx\s+shadcn@latest\s+init)\s+(\S+)(.*)$/i
    )
    if (initMatch) {
      const [, prefix, target, rest] = initMatch
      const isHostedInit =
        /\/r\/init\.json$/i.test(target) || target.endsWith("init.json")
      const isGithubInit =
        target === `${REGISTRY_NAMESPACE}/init` ||
        /\/modern-ui-component\/init$/i.test(target)
      if (isHostedInit || isGithubInit) {
        push(`${prefix} ${HOSTED_REGISTRY_BASE}/init.json${rest}`)
        push(`${prefix} ${REGISTRY_NAMESPACE}/init${rest}`)
        continue
      }
    }

    push(raw.trimEnd())
  }

  while (out.length > 0 && out[out.length - 1] === "") out.pop()
  return out.join("\n")
}
