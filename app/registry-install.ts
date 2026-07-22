/** GitHub shadcn registry path (works without a hosted deploy). */
export const REGISTRY_NAMESPACE = "tmdc-io/modern-ui-component"

/** Hosted registry JSON base (requires Vercel deploy + @modernui in components.json). */
export const HOSTED_REGISTRY_BASE = "https://modern-ui-component.vercel.app/r"

const MODERNUI_NS = "@modernui"

/** Dual add commands: @modernui first, then GitHub. */
export function registryAddCommands(name: string, flags = ""): string {
  const suffix = flags.trim() ? ` ${flags.trim()}` : ""
  return [
    `npx shadcn@latest add ${MODERNUI_NS}/${name}${suffix}`,
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
      if (target.startsWith(`${MODERNUI_NS}/`)) {
        name = target.slice(MODERNUI_NS.length + 1)
      } else if (target.startsWith(`${REGISTRY_NAMESPACE}/`)) {
        name = target.slice(REGISTRY_NAMESPACE.length + 1)
      }
      if (name) {
        push(`${prefix} ${MODERNUI_NS}/${name}${rest}`)
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
