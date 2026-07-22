import { cn } from "@/lib/utils"

const ADD_COMMAND_RE =
  /^(npx)\s+(shadcn@latest)\s+(add)\s+([^\s]+)(?:\s+(-y|--yes))?(?:\s+(-c)\s+(.+))?$/

function HighlightedAddCommand({ command }: { command: string }) {
  const match = command.match(ADD_COMMAND_RE)
  if (!match) {
    return <span className="text-foreground">{command}</span>
  }

  const [, npx, cli, add, target, yesFlag, cwdFlag, cwdPath] = match

  return (
    <>
      <span className="text-chart-2">{npx}</span>{" "}
      <span className="text-foreground">{cli}</span>{" "}
      <span className="text-muted-foreground">{add}</span>{" "}
      <span className="text-chart-2">{target}</span>
      {yesFlag ? (
        <>
          {" "}
          <span className="text-muted-foreground">{yesFlag}</span>
        </>
      ) : null}
      {cwdFlag && cwdPath ? (
        <>
          {" "}
          <span className="text-muted-foreground">{cwdFlag}</span>{" "}
          <span className="text-chart-2">{cwdPath}</span>
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
      <span className="text-muted-foreground">{list}</span>{" "}
      <span className="text-chart-2">{target}</span>
      {cwdFlag && cwdPath ? (
        <>
          {" "}
          <span className="text-muted-foreground">{cwdFlag}</span>{" "}
          <span className="text-chart-2">{cwdPath}</span>
        </>
      ) : null}
    </>
  )
}

function HighlightedInitCommand({ command }: { command: string }) {
  // init <url|github/item> [-y] [-c <workspace>]
  const withTarget = command.match(
    /^(npx)\s+(shadcn@latest)\s+(init)\s+(\S+)(?:\s+(-y|--yes))?(?:\s+(-c)\s+(\S+))?$/
  )
  if (withTarget && withTarget[4] !== "-c" && withTarget[4] !== "-y" && withTarget[4] !== "--yes") {
    return (
      <>
        <span className="text-chart-2">{withTarget[1]}</span>{" "}
        <span className="text-foreground">{withTarget[2]}</span>{" "}
        <span className="text-muted-foreground">{withTarget[3]}</span>{" "}
        <span className="text-chart-2">{withTarget[4]}</span>
        {withTarget[5] ? (
          <>
            {" "}
            <span className="text-muted-foreground">{withTarget[5]}</span>
          </>
        ) : null}
        {withTarget[6] && withTarget[7] ? (
          <>
            {" "}
            <span className="text-muted-foreground">{withTarget[6]}</span>{" "}
            <span className="text-chart-2">{withTarget[7]}</span>
          </>
        ) : null}
      </>
    )
  }

  // init -y -c <workspace>  |  init -c <workspace>
  const withFlags = command.match(
    /^(npx)\s+(shadcn@latest)\s+(init)(?:\s+(-y|--yes))?\s+(-c)\s+(\S+)$/
  )
  if (withFlags) {
    return (
      <>
        <span className="text-chart-2">{withFlags[1]}</span>{" "}
        <span className="text-foreground">{withFlags[2]}</span>{" "}
        <span className="text-muted-foreground">{withFlags[3]}</span>
        {withFlags[4] ? (
          <>
            {" "}
            <span className="text-muted-foreground">{withFlags[4]}</span>
          </>
        ) : null}{" "}
        <span className="text-muted-foreground">{withFlags[5]}</span>{" "}
        <span className="text-chart-2">{withFlags[6]}</span>
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
      <span className="text-muted-foreground">{match[3]}</span>
      {match[4] ? (
        <>
          {" "}
          <span className="text-chart-2">{match[4]}</span>
        </>
      ) : null}
    </>
  )
}

function HighlightedRegistryCommand({ command }: { command: string }) {
  const match = command.match(
    /^(npx)\s+(shadcn@latest)\s+(registry)\s+(add)\s+(\S+)(?:\s+(-c)\s+(\S+))?$/
  )
  if (!match) {
    return <span className="text-foreground">{command}</span>
  }

  const [, npx, cli, registry, add, target, cwdFlag, cwdPath] = match

  return (
    <>
      <span className="text-chart-2">{npx}</span>{" "}
      <span className="text-foreground">{cli}</span>{" "}
      <span className="text-muted-foreground">{registry}</span>{" "}
      <span className="text-muted-foreground">{add}</span>{" "}
      <span className="text-chart-2">{target}</span>
      {cwdFlag && cwdPath ? (
        <>
          {" "}
          <span className="text-muted-foreground">{cwdFlag}</span>{" "}
          <span className="text-chart-2">{cwdPath}</span>
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

  if (trimmed.includes(" shadcn@latest registry ")) {
    return <HighlightedRegistryCommand command={trimmed} />
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
