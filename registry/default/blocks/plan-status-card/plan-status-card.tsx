"use client"

import * as React from "react"
import {
  BoxIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CopyIcon,
  DownloadIcon,
  LineChartIcon,
} from "lucide-react"

import {
  useTranslation,
  type Translations,
} from "@/hooks/use-translation"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/registry/default/ui/skeleton"

export type PlanStatusBadgeTone =
  | "default"
  | "muted"
  | "error"
  | "success"
  | "warning"
  | "info"

export type PlanStatusBadge = {
  label: string
  tone?: PlanStatusBadgeTone
}

export type PlanStatusDiffLine = {
  value: string
  kind?: "context" | "add" | "remove" | "info"
  /** Optional left/right line numbers for richer diff chrome. */
  oldLine?: number | null
  newLine?: number | null
}

export type PlanStatusImpact = {
  name: string
  type: string
  kind?: "metric" | "semantic"
}

export type PlanStatusSize = "default" | "sm"

export type PlanStatusCardProps = {
  title: string
  typeLabel?: string
  badges?: PlanStatusBadge[]
  tone?: "default" | "error"
  size?: PlanStatusSize
  selected?: boolean
  onSelect?: () => void
  expanded?: boolean
  defaultExpanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  children?: React.ReactNode
  className?: string
}

export const planStatusCardMessages = {
  en: {
    dir: "ltr",
    values: {
      full: "FULL",
      impacts: "Impacts",
      noImpacts: "No impacts",
      noDiff: "No diff available",
      noError: "No diagnostic details",
      copy: "Copy",
      copied: "Copied",
      download: "Download",
      expand: "Expand details",
      collapse: "Collapse details",
      breaking: "Breaking",
      nonBreaking: "Non-breaking",
      backfill: "Backfill",
      schema: "Schema",
      config: "Config",
      undefinedTable: "Undefined table",
    },
  },
  es: {
    dir: "ltr",
    values: {
      full: "FULL",
      impacts: "Impactos",
      noImpacts: "Sin impactos",
      noDiff: "No hay diferencias disponibles",
      noError: "Sin detalles de diagnóstico",
      copy: "Copiar",
      copied: "Copiado",
      download: "Descargar",
      expand: "Expandir detalles",
      collapse: "Contraer detalles",
      breaking: "Incompatible",
      nonBreaking: "Compatible",
      backfill: "Backfill",
      schema: "Esquema",
      config: "Config",
      undefinedTable: "Tabla no definida",
    },
  },
} satisfies Translations

const badgeToneClass: Record<PlanStatusBadgeTone, string> = {
  default: "border-grey-8 bg-cream-bg-3 text-black-secondary",
  muted: "border-transparent bg-cream-bg-2 text-black-tertiary",
  error: "border-dataos-fail-fg bg-card text-dataos-fail-fg",
  success: "border-[#239500]/40 bg-card text-[#239500]",
  warning: "border-amber-600/40 bg-card text-amber-700",
  info: "border-dark-teal/40 bg-teal-bg-2 text-dark-teal",
}

async function writeClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

function downloadText(filename: string, text: string) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement("a")
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}

function PanelActions({
  text,
  filename,
}: {
  text: string
  filename: string
}) {
  const { t } = useTranslation(planStatusCardMessages)
  const [copied, setCopied] = React.useState(false)

  return (
    <div className="mb-2 flex items-center justify-end gap-1">
      <button
        type="button"
        className="text-black-tertiary hover:text-black-secondary pointer-events-auto inline-flex items-center gap-1 rounded-sm px-2 py-1 text-[11px] outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        onClick={async () => {
          const ok = await writeClipboard(text)
          if (ok) {
            setCopied(true)
            window.setTimeout(() => setCopied(false), 1500)
          }
        }}
      >
        {copied ? (
          <CheckIcon className="size-3.5" strokeWidth={1.8} aria-hidden />
        ) : (
          <CopyIcon className="size-3.5" strokeWidth={1.8} aria-hidden />
        )}
        {copied ? t.copied : t.copy}
      </button>
      <button
        type="button"
        className="text-black-tertiary hover:text-black-secondary pointer-events-auto inline-flex items-center gap-1 rounded-sm px-2 py-1 text-[11px] outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        onClick={() => downloadText(filename, text)}
      >
        <DownloadIcon className="size-3.5" strokeWidth={1.8} aria-hidden />
        {t.download}
      </button>
    </div>
  )
}

export function PlanStatusCard({
  title,
  typeLabel,
  badges = [],
  tone = "default",
  size = "default",
  selected = false,
  onSelect,
  expanded: expandedProp,
  defaultExpanded = false,
  onExpandedChange,
  children,
  className,
}: PlanStatusCardProps) {
  const { t } = useTranslation(planStatusCardMessages)
  const [uncontrolledExpanded, setUncontrolledExpanded] =
    React.useState(defaultExpanded)
  const controlled = expandedProp !== undefined
  const expanded = controlled ? expandedProp : uncontrolledExpanded
  const generatedId = React.useId()
  const panelId = `plan-status-${generatedId.replace(/:/g, "")}`

  const setExpanded = (next: boolean) => {
    if (!controlled) setUncontrolledExpanded(next)
    onExpandedChange?.(next)
  }

  const handleHeaderClick = () => {
    setExpanded(!expanded)
    onSelect?.()
  }

  const handleHeaderKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleHeaderClick()
    }
  }

  return (
    <article
      className={cn(
        "bg-card w-full overflow-hidden rounded-lg border border-grey-8 shadow-sm transition-colors",
        tone === "error" && "border-dataos-fail-fg",
        selected &&
          tone !== "error" &&
          "border-dark-teal bg-teal-bg-2",
        selected && tone === "error" && "bg-card",
        className
      )}
      aria-current={selected ? "true" : undefined}
    >
      <button
        type="button"
        className={cn(
          "flex w-full items-center gap-3 text-left outline-none transition-colors",
          size === "sm" ? "px-3 py-2.5" : "px-4 py-3",
          !selected && "hover:bg-cream-bg-3 focus-visible:bg-cream-bg-3",
          selected &&
            tone !== "error" &&
            "hover:bg-teal-bg-2 focus-visible:bg-teal-bg-2",
          "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/50"
        )}
        aria-expanded={expanded}
        aria-controls={panelId}
        aria-pressed={onSelect ? selected : undefined}
        aria-label={`${title}. ${expanded ? t.collapse : t.expand}`}
        onClick={handleHeaderClick}
        onKeyDown={handleHeaderKeyDown}
      >
        <BoxIcon
          className={cn(
            "text-black-tertiary shrink-0",
            size === "sm" ? "size-3.5" : "size-4"
          )}
          strokeWidth={1.7}
          aria-hidden
        />
        <span
          className={cn(
            "text-black-primary min-w-0 truncate font-medium",
            size === "sm" ? "text-xs" : "text-sm"
          )}
        >
          {title}
        </span>
        {typeLabel ? (
          <span
            className={cn(
              "bg-cream-bg-2 text-black-tertiary shrink-0 rounded px-2 py-1 font-medium uppercase",
              size === "sm" ? "text-[9px]" : "text-[10px]"
            )}
          >
            {typeLabel}
          </span>
        ) : null}
        <span className="ml-auto flex shrink-0 items-center gap-2">
          {badges.map((badge) => (
            <span
              key={`${badge.label}-${badge.tone ?? "default"}`}
              className={cn(
                "rounded border px-2 py-1 font-medium",
                size === "sm" ? "text-[9px]" : "text-[10px]",
                badgeToneClass[badge.tone ?? "default"]
              )}
            >
              {badge.label}
            </span>
          ))}
          {expanded ? (
            <ChevronDownIcon
              className="text-black-tertiary size-4"
              strokeWidth={1.8}
              aria-hidden
            />
          ) : (
            <ChevronRightIcon
              className="text-black-tertiary size-4"
              strokeWidth={1.8}
              aria-hidden
            />
          )}
        </span>
      </button>

      {expanded ? (
        <div
          id={panelId}
          role="region"
          aria-label={`${title} details`}
          className={cn(
            "border-grey-8 border-t",
            size === "sm" ? "px-3 py-3" : "px-4 py-4"
          )}
        >
          {children}
        </div>
      ) : null}
    </article>
  )
}

export function PlanStatusDiff({
  lines,
  filePath,
  showLineNumbers = true,
  className,
}: {
  lines: PlanStatusDiffLine[]
  filePath?: string
  showLineNumbers?: boolean
  className?: string
}) {
  const { t } = useTranslation(planStatusCardMessages)
  const text = lines.map((line) => line.value).join("\n")
  const filename = (filePath ?? "diff.sql").split("/").pop() || "diff.sql"

  if (lines.length === 0) {
    return (
      <p className="text-black-tertiary rounded-md bg-cream-bg-3 px-4 py-6 text-center text-sm">
        {t.noDiff}
      </p>
    )
  }

  return (
    <div>
      <PanelActions text={text} filename={filename} />
      <div
        className={cn(
          "bg-cream-bg-3 overflow-x-auto rounded-md font-mono text-xs leading-5",
          className
        )}
      >
        {filePath ? (
          <div className="border-grey-8 text-black-tertiary border-b px-4 py-2">
            {filePath}
          </div>
        ) : null}
        <pre className="p-0">
          <code>
            {lines.map((line, index) => (
              <span
                key={`${line.value}-${index}`}
                className={cn(
                  "flex min-w-max",
                  line.kind === "add" && "bg-[#239500]/8 text-[#239500]",
                  line.kind === "remove" &&
                    "bg-dataos-fail-fg/8 text-dataos-fail-fg",
                  line.kind === "info" && "text-dark-teal",
                  (!line.kind || line.kind === "context") &&
                    "text-black-secondary"
                )}
              >
                {showLineNumbers ? (
                  <>
                    <span className="text-black-tertiary w-10 shrink-0 select-none px-2 py-0.5 text-right opacity-70">
                      {line.oldLine ?? ""}
                    </span>
                    <span className="text-black-tertiary w-10 shrink-0 select-none px-2 py-0.5 text-right opacity-70">
                      {line.newLine ?? ""}
                    </span>
                  </>
                ) : null}
                <span className="px-3 py-0.5 whitespace-pre">{line.value}</span>
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  )
}

export function PlanStatusError({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  const { t } = useTranslation(planStatusCardMessages)
  const text =
    typeof children === "string"
      ? children
      : children == null
        ? ""
        : String(children)

  if (!text.trim()) {
    return (
      <p className="text-black-tertiary rounded-md bg-cream-bg-3 px-4 py-6 text-center text-sm">
        {t.noError}
      </p>
    )
  }

  return (
    <div>
      <PanelActions text={text} filename="plan-error.log" />
      <pre
        className={cn(
          "bg-cream-bg-3 text-dataos-fail-fg overflow-x-auto whitespace-pre-wrap rounded-md p-4 font-mono text-xs leading-5",
          className
        )}
      >
        {text}
      </pre>
    </div>
  )
}

export function PlanStatusImpacts({
  title,
  impacts,
  className,
}: {
  title?: string
  impacts: PlanStatusImpact[]
  className?: string
}) {
  const { t } = useTranslation(planStatusCardMessages)
  const heading = title ?? `${t.impacts} (${impacts.length})`

  return (
    <section className={cn("mt-5", className)}>
      <h4 className="text-black-tertiary mb-3 text-xs font-medium uppercase">
        {heading}
      </h4>
      {impacts.length === 0 ? (
        <p className="text-black-tertiary rounded-md bg-cream-bg-3 px-4 py-6 text-center text-sm">
          {t.noImpacts}
        </p>
      ) : (
        <ul className="bg-cream-bg-3 flex flex-col gap-3 rounded-md p-4">
          {impacts.map((impact) => {
            const Icon = impact.kind === "semantic" ? BoxIcon : LineChartIcon
            return (
              <li
                key={`${impact.name}-${impact.type}`}
                className="flex items-center gap-2"
              >
                <Icon
                  className="text-black-tertiary size-4 shrink-0"
                  strokeWidth={1.7}
                  aria-hidden
                />
                <span className="text-black-secondary min-w-0 truncate text-sm">
                  {impact.name}
                </span>
                <span className="bg-card text-black-tertiary rounded px-2 py-0.5 text-[9px] font-medium uppercase">
                  {impact.type}
                </span>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}

export type PlanStatusCardSkeletonProps = {
  size?: PlanStatusSize
  className?: string
}

export function PlanStatusCardSkeleton({
  size = "default",
  className,
}: PlanStatusCardSkeletonProps) {
  return (
    <div
      className={cn(
        "bg-card flex w-full items-center gap-3 rounded-lg border border-grey-8 shadow-sm",
        size === "sm" ? "px-3 py-2.5" : "px-4 py-3",
        className
      )}
      aria-busy="true"
      aria-hidden
    >
      <Skeleton className={cn("rounded", size === "sm" ? "size-3.5" : "size-4")} />
      <Skeleton className={cn("h-3", size === "sm" ? "w-32" : "w-40")} />
      <Skeleton className="h-5 w-10 rounded" />
      <div className="ml-auto flex gap-2">
        <Skeleton className="h-5 w-16 rounded" />
        <Skeleton className="h-5 w-14 rounded" />
        <Skeleton className="size-4" />
      </div>
    </div>
  )
}
