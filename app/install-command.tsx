import { cn } from "@/lib/utils"

const ADD_COMMAND_RE =
  /^(npx)\s+(shadcn@latest)\s+(add)\s+([^\s]+)(?:\s+(-c)\s+(.+))?$/

function HighlightedAddCommand({ command }: { command: string }) {
  const match = command.match(ADD_COMMAND_RE)
  if (!match) {
    return <span className="text-foreground">{command}</span>
  }

  const [, npx, cli, add, target, cwdFlag, cwdPath] = match

  return (
    <>
      <span className="text-chart-2">{npx}</span>{" "}
      <span className="text-foreground">{cli}</span>{" "}
      <span className="text-chart-4">{add}</span>{" "}
      <span className="text-brand">{target}</span>
      {cwdFlag && cwdPath ? (
        <>
          {" "}
          <span className="text-muted-foreground">{cwdFlag}</span>{" "}
          <span className="text-brand">{cwdPath}</span>
        </>
      ) : null}
    </>
  )
}

function HighlightedListCommand({ command }: { command: string }) {
  const match = command.match(
    /^(npx)\s+(shadcn@latest)\s+(list)\s+([^\s]+)(?:\s+(-c)\s+(.+))?$/
  )
  if (!match) {
    return <span className="text-foreground">{command}</span>
  }

  const [, npx, cli, list, target, cwdFlag, cwdPath] = match

  return (
    <>
      <span className="text-chart-2">{npx}</span>{" "}
      <span className="text-foreground">{cli}</span>{" "}
      <span className="text-chart-4">{list}</span>{" "}
      <span className="text-brand">{target}</span>
      {cwdFlag && cwdPath ? (
        <>
          {" "}
          <span className="text-muted-foreground">{cwdFlag}</span>{" "}
          <span className="text-brand">{cwdPath}</span>
        </>
      ) : null}
    </>
  )
}

function HighlightedInitCommand({ command }: { command: string }) {
  const withCwd = command.match(
    /^(npx)\s+(shadcn@latest)\s+(init)\s+(-c)\s+(.+)$/
  )
  if (withCwd) {
    return (
      <>
        <span className="text-chart-2">{withCwd[1]}</span>{" "}
        <span className="text-foreground">{withCwd[2]}</span>{" "}
        <span className="text-chart-4">{withCwd[3]}</span>{" "}
        <span className="text-muted-foreground">{withCwd[4]}</span>{" "}
        <span className="text-brand">{withCwd[5]}</span>
      </>
    )
  }

  const match = command.match(/^(npx)\s+(shadcn@latest)\s+(init)(?:\s+(--monorepo))?$/)
  if (!match) {
    return <span className="text-foreground">{command}</span>
  }

  return (
    <>
      <span className="text-chart-2">{match[1]}</span>{" "}
      <span className="text-foreground">{match[2]}</span>{" "}
      <span className="text-chart-4">{match[3]}</span>
      {match[4] ? (
        <>
          {" "}
          <span className="text-chart-1">{match[4]}</span>
        </>
      ) : null}
    </>
  )
}

function HighlightedLine({ line }: { line: string }) {
  const trimmed = line.trim()
  if (!trimmed) return null

  if (trimmed.includes(" shadcn@latest list ")) {
    return <HighlightedListCommand command={trimmed} />
  }

  if (trimmed.includes(" shadcn@latest init")) {
    return <HighlightedInitCommand command={trimmed} />
  }

  if (trimmed.includes(" shadcn@latest add ")) {
    return <HighlightedAddCommand command={trimmed} />
  }

  return <span className="text-foreground">{trimmed}</span>
}

export function InstallCommand({
  command,
  className,
}: {
  command: string
  className?: string
}) {
  const lines = command.split("\n")

  return (
    <pre
      className={cn(
        "bg-muted/50 overflow-x-auto rounded-md border px-3 py-2.5 font-mono text-xs leading-relaxed",
        className
      )}
    >
      <code>
        {lines.map((line, index) => (
          <span key={index} className="block">
            <HighlightedLine line={line} />
          </span>
        ))}
      </code>
    </pre>
  )
}
