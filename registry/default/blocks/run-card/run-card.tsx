"use client"

import * as React from "react"
import { formatDistanceToNow } from "date-fns"
import {
  BanIcon,
  CircleCheckIcon,
  CircleXIcon,
  ClockIcon,
  Loader2Icon,
  TriangleAlertIcon,
} from "lucide-react"

import {
  useTranslation,
  type Translations,
} from "@/hooks/use-translation"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/registry/default/ui/skeleton"

export type RunCardStatus =
  | "success"
  | "error"
  | "warning"
  | "running"
  | "queued"
  | "cancelled"

export type RunCardMetricStatus = RunCardStatus | "default"

export type RunCardMetric = {
  label: string
  value: string
  status?: RunCardMetricStatus
  href?: string
  onClick?: () => void
}

export type RunCardSize = "default" | "sm"

export type RunCardProps = {
  runId: string
  plan: string
  /** Display text, or pass `startedAt` for relative time. */
  timestamp?: string
  /** When set, the card shows a relative time (for example "2 hours ago"). */
  startedAt?: Date | string
  duration: string
  status?: RunCardStatus
  metrics?: RunCardMetric[]
  /** Cap visible metric chips; overflow renders as "+N more". */
  maxVisibleMetrics?: number
  size?: RunCardSize
  selected?: boolean
  onSelect?: () => void
  href?: string
  onClick?: () => void
  className?: string
}

export const runCardMessages = {
  en: {
    dir: "ltr",
    values: {
      models: "Models",
      dq: "DQ",
      error: "Error",
      moreMetrics: "more",
      noMetrics: "No metrics",
      statusSuccess: "Successful run",
      statusError: "Failed run",
      statusWarning: "Run completed with warnings",
      statusRunning: "Run in progress",
      statusQueued: "Run queued",
      statusCancelled: "Run cancelled",
    },
  },
  es: {
    dir: "ltr",
    values: {
      models: "Modelos",
      dq: "DQ",
      error: "Error",
      moreMetrics: "más",
      noMetrics: "Sin métricas",
      statusSuccess: "Ejecución correcta",
      statusError: "Ejecución fallida",
      statusWarning: "Ejecución con advertencias",
      statusRunning: "Ejecución en curso",
      statusQueued: "Ejecución en cola",
      statusCancelled: "Ejecución cancelada",
    },
  },
} satisfies Translations

function parseStartedAt(value: Date | string) {
  if (value instanceof Date) return value
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? null : parsed
}

function formatRelativeTime(startedAt: Date | string) {
  const date = parseStartedAt(startedAt)
  if (!date) return ""
  return formatDistanceToNow(date, { addSuffix: true })
}

const statusAriaKey: Record<RunCardStatus, keyof typeof runCardMessages.en.values> =
  {
    success: "statusSuccess",
    error: "statusError",
    warning: "statusWarning",
    running: "statusRunning",
    queued: "statusQueued",
    cancelled: "statusCancelled",
  }

function RunCardStatusIcon({ status }: { status: RunCardStatus }) {
  const iconClass = cn(
    "size-5 shrink-0",
    status === "success" && "text-[#239500]",
    status === "error" && "text-dataos-fail-fg",
    status === "warning" && "text-amber-600",
    status === "running" && "text-dark-teal animate-spin",
    status === "queued" && "text-black-tertiary",
    status === "cancelled" && "text-black-tertiary"
  )

  switch (status) {
    case "success":
      return <CircleCheckIcon className={iconClass} strokeWidth={1.8} aria-hidden />
    case "error":
      return <CircleXIcon className={iconClass} strokeWidth={1.8} aria-hidden />
    case "warning":
      return (
        <TriangleAlertIcon className={iconClass} strokeWidth={1.8} aria-hidden />
      )
    case "running":
      return <Loader2Icon className={iconClass} strokeWidth={1.8} aria-hidden />
    case "queued":
      return <ClockIcon className={iconClass} strokeWidth={1.8} aria-hidden />
    case "cancelled":
      return <BanIcon className={iconClass} strokeWidth={1.8} aria-hidden />
    default:
      return null
  }
}

function metricStatusClass(status?: RunCardMetricStatus) {
  return cn(
    status === "error" && "text-dataos-fail-fg",
    status === "success" && "text-[#239500]",
    status === "warning" && "text-amber-600",
    (!status || status === "default" || status === "running" || status === "queued" || status === "cancelled") &&
      "text-black-tertiary"
  )
}

function MetricChip({
  metric,
  className,
}: {
  metric: RunCardMetric
  className?: string
}) {
  const label = `${metric.label} (${metric.value})`
  const classes = cn(
    "text-black-tertiary rounded-sm text-xs leading-none transition-colors",
    metricStatusClass(metric.status),
    (metric.href || metric.onClick) &&
      "pointer-events-auto hover:text-dark-teal focus-visible:text-dark-teal underline-offset-2 hover:underline focus-visible:underline outline-none",
    className
  )

  if (metric.href) {
    return (
      <a
        href={metric.href}
        className={classes}
        onClick={(event) => event.stopPropagation()}
      >
        {label}
      </a>
    )
  }

  if (metric.onClick) {
    return (
      <button
        type="button"
        className={classes}
        onClick={(event) => {
          event.stopPropagation()
          metric.onClick?.()
        }}
      >
        {label}
      </button>
    )
  }

  return <span className={classes}>{label}</span>
}

function RunCardMetricList({
  metrics,
  maxVisibleMetrics,
  emptyLabel,
  moreLabel,
}: {
  metrics: RunCardMetric[]
  maxVisibleMetrics?: number
  emptyLabel: string
  moreLabel: string
}) {
  if (metrics.length === 0) {
    return (
      <p className="text-black-tertiary mt-6 text-xs leading-none">{emptyLabel}</p>
    )
  }

  const limit =
    maxVisibleMetrics != null && maxVisibleMetrics >= 0
      ? maxVisibleMetrics
      : metrics.length
  const visible = metrics.slice(0, limit)
  const hiddenCount = metrics.length - visible.length

  return (
    <div className="mt-6 flex min-w-0 flex-wrap items-center gap-y-1 text-xs leading-none">
      {visible.map((metric, index) => (
        <React.Fragment key={`${metric.label}-${metric.value}-${index}`}>
          {index > 0 ? (
            <span className="mx-3 h-3.5 w-px bg-grey-8" aria-hidden />
          ) : null}
          <MetricChip metric={metric} />
        </React.Fragment>
      ))}
      {hiddenCount > 0 ? (
        <>
          <span className="mx-3 h-3.5 w-px bg-grey-8" aria-hidden />
          <span className="text-black-tertiary">
            +{hiddenCount} {moreLabel}
          </span>
        </>
      ) : null}
    </div>
  )
}

function defaultMetricsForLocale(
  t: (typeof runCardMessages)["en"]["values"]
) {
  return [
    { label: t.models, value: "7" },
    { label: t.dq, value: "12/16" },
  ]
}

export function RunCard({
  runId,
  plan,
  timestamp,
  startedAt,
  duration,
  status = "success",
  metrics,
  maxVisibleMetrics,
  size = "default",
  selected = false,
  onSelect,
  href,
  onClick,
  className,
}: RunCardProps) {
  const { t } = useTranslation(runCardMessages)
  const resolvedMetrics =
    metrics ?? defaultMetricsForLocale(t as (typeof runCardMessages)["en"]["values"])
  const failed = status === "error"
  const interactive = Boolean(href || onClick || onSelect)
  const statusLabel = t[statusAriaKey[status]]
  const timeLabel = startedAt
    ? formatRelativeTime(startedAt)
    : (timestamp ?? "")

  const handleActivate = () => {
    onClick?.()
    onSelect?.()
  }

  const content = (
    <div className="pointer-events-none relative z-10">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <RunCardStatusIcon status={status} />
          <h3
            className={cn(
              "truncate font-medium tracking-tight text-black-primary leading-none",
              size === "sm" ? "text-sm" : "text-base",
              failed && "text-dataos-fail-fg"
            )}
          >
            {runId}
          </h3>
        </div>
        <p
          className={cn(
            "text-black-tertiary min-w-0 shrink truncate text-end leading-none",
            size === "sm" ? "max-w-[40%] text-[11px]" : "max-w-[45%] text-xs"
          )}
          title={plan}
        >
          {plan}
        </p>
      </div>

      <div
        className={cn(
          "text-black-secondary mt-3 flex min-w-0 flex-wrap items-center gap-2 leading-none",
          size === "sm" ? "text-xs" : "text-sm"
        )}
      >
        <time dateTime={startedAt ? parseStartedAt(startedAt)?.toISOString() : undefined}>
          {timeLabel}
        </time>
        <span className="bg-black-quaternary size-1 rounded-full" aria-hidden />
        <span>{duration}</span>
      </div>

      <RunCardMetricList
        metrics={resolvedMetrics}
        maxVisibleMetrics={maxVisibleMetrics}
        emptyLabel={t.noMetrics}
        moreLabel={t.moreMetrics}
      />
    </div>
  )

  const cardClassName = cn(
    "bg-card relative flex w-full max-w-sm flex-col rounded-lg border border-grey-8 text-card-foreground shadow-sm",
    size === "sm" ? "px-3 py-3" : "px-4 py-4",
    "transition-colors outline-none",
    "hover:bg-cream-bg-3",
    interactive &&
      "has-[:focus-visible]:bg-cream-bg-3 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/50",
    selected &&
      "border-dark-teal bg-teal-bg-2 hover:border-dark-teal hover:bg-teal-bg-2 has-[:focus-visible]:border-dark-teal has-[:focus-visible]:bg-teal-bg-2",
    interactive && "cursor-pointer",
    className
  )

  const ariaLabel = `${runId}, ${plan}, ${statusLabel}`

  return (
    <article className={cardClassName} aria-label={ariaLabel}>
      {href ? (
        <a
          href={href}
          className="absolute inset-0 z-0 rounded-lg outline-none"
          aria-label={ariaLabel}
          aria-current={selected ? "true" : undefined}
          onClick={() => onSelect?.()}
        />
      ) : onClick || onSelect ? (
        <button
          type="button"
          className="absolute inset-0 z-0 rounded-lg outline-none"
          onClick={handleActivate}
          aria-label={ariaLabel}
          aria-pressed={onSelect ? selected : undefined}
        />
      ) : null}
      {content}
    </article>
  )
}

export type RunCardSkeletonProps = {
  size?: RunCardSize
  className?: string
}

export function RunCardSkeleton({
  size = "default",
  className,
}: RunCardSkeletonProps) {
  return (
    <div
      className={cn(
        "bg-card flex w-full max-w-sm flex-col gap-3 rounded-lg border border-grey-8 px-4 py-4 shadow-sm",
        size === "sm" && "gap-2 px-3 py-3",
        className
      )}
      aria-busy="true"
      aria-hidden
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-1 items-center gap-2">
          <Skeleton className={cn("rounded-full", size === "sm" ? "size-4" : "size-5")} />
          <Skeleton className={cn("h-4", size === "sm" ? "w-20" : "w-24")} />
        </div>
        <Skeleton className="h-3 w-16" />
      </div>
      <Skeleton className={cn("h-3", size === "sm" ? "w-32" : "w-40")} />
      <div className="flex gap-4 pt-2">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-3 w-16" />
      </div>
    </div>
  )
}

export { RunCardStatusIcon, RunCardMetricList }
