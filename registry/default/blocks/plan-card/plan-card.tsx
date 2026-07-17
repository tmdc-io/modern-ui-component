"use client"

import * as React from "react"
import { formatDistanceToNow } from "date-fns"
import {
  ArrowRightIcon,
  BanIcon,
  CircleCheckIcon,
  CircleXIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  FilePenLineIcon,
  Loader2Icon,
  TriangleAlertIcon,
} from "lucide-react"

import {
  useTranslation,
  type Translations,
} from "@/hooks/use-translation"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/registry/default/ui/skeleton"

export type PlanCardStatus =
  | "success"
  | "error"
  | "draft"
  | "running"
  | "warning"
  | "cancelled"

export type PlanCardMetricStatus = PlanCardStatus | "default"

export type PlanCardMetric = {
  label: string
  value: string
  status?: PlanCardMetricStatus
  href?: string
  onClick?: () => void
}

export type PlanCardSize = "default" | "sm"

export type PlanCardDetailRow = {
  label: string
  value: string
}

export type PlanCardProps = {
  planId: string
  version: string
  timestamp?: string
  /** When set, renders relative time instead of timestamp. */
  startedAt?: Date | string
  duration: string
  status?: PlanCardStatus
  size?: PlanCardSize
  /** Collapsed summary chips (Changes, Impacts, optional Error). */
  metrics?: PlanCardMetric[]
  /** Expanded key/value rows (Modified, Added, …). */
  detailMetrics?: PlanCardMetric[]
  /** Expanded status lines (Environment statement, Requirements). */
  detailStatuses?: PlanCardDetailRow[]
  expanded?: boolean
  defaultExpanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  /** When set, shows the “Open plan details” footer link. */
  detailsHref?: string
  detailsLabel?: string
  selected?: boolean
  onSelect?: () => void
  href?: string
  onClick?: () => void
  className?: string
}

export const planCardMessages = {
  en: {
    dir: "ltr",
    values: {
      changes: "Changes",
      impacts: "Impacts",
      error: "Error",
      modified: "Modified",
      added: "Added",
      removed: "Removed",
      backfills: "Backfills",
      environmentStatement: "Environment statement",
      requirements: "Requirements",
      changed: "changed",
      openPlanDetails: "Open plan details",
      statusSuccess: "Successful plan",
      statusError: "Failed plan",
      statusDraft: "Draft plan",
      statusRunning: "Plan in progress",
      statusWarning: "Plan completed with warnings",
      statusCancelled: "Plan cancelled",
      expand: "Expand plan details",
      collapse: "Collapse plan details",
      noChanges: "No changes in this plan",
    },
  },
  es: {
    dir: "ltr",
    values: {
      changes: "Cambios",
      impacts: "Impactos",
      error: "Error",
      modified: "Modificados",
      added: "Añadidos",
      removed: "Eliminados",
      backfills: "Backfills",
      environmentStatement: "Declaración de entorno",
      requirements: "Requisitos",
      changed: "cambiado",
      openPlanDetails: "Abrir detalles del plan",
      statusSuccess: "Plan correcto",
      statusError: "Plan fallido",
      statusDraft: "Plan en borrador",
      statusRunning: "Plan en curso",
      statusWarning: "Plan con advertencias",
      statusCancelled: "Plan cancelado",
      expand: "Expandir detalles del plan",
      collapse: "Contraer detalles del plan",
      noChanges: "No hay cambios en este plan",
    },
  },
} satisfies Translations

function PlanCardStatusIcon({ status }: { status: PlanCardStatus }) {
  const iconClass = cn(
    "size-5 shrink-0",
    status === "success" && "text-[#239500]",
    status === "error" && "text-dataos-fail-fg",
    status === "warning" && "text-amber-600",
    status === "running" && "text-dark-teal animate-spin",
    (status === "draft" || status === "cancelled") && "text-black-tertiary"
  )

  const Icon =
    status === "success"
      ? CircleCheckIcon
      : status === "error"
        ? CircleXIcon
        : status === "warning"
          ? TriangleAlertIcon
          : status === "running"
            ? Loader2Icon
            : status === "draft"
              ? FilePenLineIcon
              : BanIcon

  return (
    <Icon
      className={iconClass}
      strokeWidth={1.8}
      aria-hidden
    />
  )
}

function MetricChip({ metric }: { metric: PlanCardMetric }) {
  const label = `${metric.label} (${metric.value})`
  const className = cn(
    "text-black-tertiary rounded-sm text-xs leading-none outline-none transition-colors",
    metric.status === "error" && "text-dataos-fail-fg",
    metric.status === "success" && "text-[#239500]",
    metric.status === "warning" && "text-amber-600",
    (metric.href || metric.onClick) &&
      "pointer-events-auto hover:text-dark-teal focus-visible:text-dark-teal underline-offset-2 hover:underline focus-visible:underline"
  )

  if (metric.href) {
    return (
      <a
        href={metric.href}
        className={className}
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
        className={className}
        onClick={(event) => {
          event.stopPropagation()
          metric.onClick?.()
        }}
      >
        {label}
      </button>
    )
  }

  return <span className={className}>{label}</span>
}

function SummaryMetrics({ metrics }: { metrics: PlanCardMetric[] }) {
  return (
    <div className="flex min-w-0 flex-wrap items-center gap-y-1 text-xs leading-none">
      {metrics.map((metric, index) => (
        <React.Fragment key={`${metric.label}-${metric.value}-${index}`}>
          {index > 0 ? (
            <span className="mx-3 h-3.5 w-px bg-grey-8" aria-hidden />
          ) : null}
          <MetricChip metric={metric} />
        </React.Fragment>
      ))}
    </div>
  )
}

function defaultMetrics(t: Record<string, string>): PlanCardMetric[] {
  return [
    { label: t.changes, value: "3" },
    { label: t.impacts, value: "7" },
  ]
}

function defaultDetailMetrics(t: Record<string, string>): PlanCardMetric[] {
  return [
    { label: t.modified, value: "2" },
    { label: t.added, value: "2" },
    { label: t.removed, value: "2" },
    { label: t.impacts, value: "7" },
    { label: t.backfills, value: "3" },
  ]
}

function defaultDetailStatuses(t: Record<string, string>): PlanCardDetailRow[] {
  return [
    { label: t.environmentStatement, value: t.changed },
    { label: t.requirements, value: t.changed },
  ]
}

const statusMessageKey: Record<
  PlanCardStatus,
  keyof (typeof planCardMessages)["en"]["values"]
> = {
  success: "statusSuccess",
  error: "statusError",
  draft: "statusDraft",
  running: "statusRunning",
  warning: "statusWarning",
  cancelled: "statusCancelled",
}

function parseStartedAt(value: Date | string) {
  if (value instanceof Date) return value
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? null : parsed
}

export function PlanCard({
  planId,
  version,
  timestamp,
  startedAt,
  duration,
  status = "success",
  size = "default",
  metrics,
  detailMetrics,
  detailStatuses,
  expanded: expandedProp,
  defaultExpanded = false,
  onExpandedChange,
  detailsHref,
  detailsLabel,
  selected = false,
  onSelect,
  href,
  onClick,
  className,
}: PlanCardProps) {
  const { t } = useTranslation(planCardMessages)
  const [uncontrolledExpanded, setUncontrolledExpanded] =
    React.useState(defaultExpanded)
  const generatedId = React.useId()
  const detailPanelId = `plan-card-details-${generatedId.replace(/:/g, "")}`
  const isExpandedControlled = expandedProp !== undefined
  const expanded = isExpandedControlled ? expandedProp : uncontrolledExpanded

  const resolvedMetrics = metrics ?? defaultMetrics(t)
  const resolvedDetailMetrics = detailMetrics ?? defaultDetailMetrics(t)
  const resolvedDetailStatuses = detailStatuses ?? defaultDetailStatuses(t)
  const failed = status === "error"
  const statusLabel = t[statusMessageKey[status]]
  const openDetailsLabel = detailsLabel ?? t.openPlanDetails
  const startedAtDate = startedAt ? parseStartedAt(startedAt) : null
  const timeLabel = startedAtDate
    ? formatDistanceToNow(startedAtDate, { addSuffix: true })
    : (timestamp ?? "")

  const setExpanded = (next: boolean) => {
    if (!isExpandedControlled) setUncontrolledExpanded(next)
    onExpandedChange?.(next)
  }

  const toggleExpanded = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    setExpanded(!expanded)
  }

  const handleActivate = () => {
    onClick?.()
    onSelect?.()
  }

  const cardClassName = cn(
    "bg-card flex w-full max-w-sm flex-col rounded-lg border border-grey-8 text-card-foreground shadow-sm",
    size === "sm" ? "px-3 py-3" : "px-4 py-4",
    "transition-colors outline-none",
    "hover:bg-cream-bg-3",
    "has-[:focus-visible]:bg-cream-bg-3 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/50",
    selected &&
      "border-dark-teal bg-teal-bg-2 hover:border-dark-teal hover:bg-teal-bg-2 has-[:focus-visible]:border-dark-teal has-[:focus-visible]:bg-teal-bg-2",
    className
  )

  const header = (
    <>
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <PlanCardStatusIcon status={status} />
          <h3
            className={cn(
              "truncate leading-none font-medium tracking-tight text-black-primary",
              size === "sm" ? "text-sm" : "text-base",
              failed && "text-dataos-fail-fg"
            )}
          >
            {planId}
          </h3>
        </div>
        <p
          className={cn(
            "text-black-tertiary shrink-0 leading-none",
            size === "sm" ? "text-[11px]" : "text-xs"
          )}
        >
          {version}
        </p>
      </div>

      <div
        className={cn(
          "text-black-secondary mt-3 flex min-w-0 flex-wrap items-center gap-2 leading-none",
          size === "sm" ? "text-xs" : "text-sm"
        )}
      >
        <time dateTime={startedAtDate?.toISOString()}>{timeLabel}</time>
        <span className="bg-black-quaternary size-1 rounded-full" aria-hidden />
        <span>{duration}</span>
      </div>
    </>
  )

  const summaryRow = (
    <div className="mt-6 flex items-center justify-between gap-3">
      <SummaryMetrics metrics={resolvedMetrics} />
      <button
        type="button"
        className="text-black-tertiary hover:text-black-secondary pointer-events-auto shrink-0 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        aria-expanded={expanded}
        aria-controls={detailPanelId}
        aria-label={expanded ? t.collapse : t.expand}
        onClick={toggleExpanded}
      >
        {expanded ? (
          <ChevronDownIcon className="size-4" strokeWidth={1.8} />
        ) : (
          <ChevronRightIcon className="size-4" strokeWidth={1.8} />
        )}
      </button>
    </div>
  )

  const expandedBody = expanded ? (
    <div
      id={detailPanelId}
      className="mt-3 flex flex-col"
      role="region"
      aria-label={`${planId} details`}
    >
      <div className="border-grey-8 border-t" />
      {resolvedDetailMetrics.length > 0 ? (
        <ul className="flex flex-col gap-3 py-4">
          {resolvedDetailMetrics.map((row) => (
          <li
            key={`${row.label}-${row.value}`}
            className="flex items-center justify-between gap-3 text-sm leading-none"
          >
            <span className="text-black-primary">{row.label}</span>
            <span className="text-black-tertiary">({row.value})</span>
          </li>
          ))}
        </ul>
      ) : (
        <p className="text-black-tertiary py-4 text-sm">{t.noChanges}</p>
      )}
      <div className="border-grey-8 border-t" />
      <ul className="flex flex-col gap-3 py-4">
        {resolvedDetailStatuses.map((row) => (
          <li
            key={`${row.label}-${row.value}`}
            className="flex items-center justify-between gap-3 text-sm leading-none"
          >
            <span className="text-black-primary">{row.label}</span>
            <span className="text-black-tertiary italic">{row.value}</span>
          </li>
        ))}
      </ul>
      {detailsHref ? (
        <a
          href={detailsHref}
          className="text-dark-teal hover:text-dark-teal/90 pointer-events-auto inline-flex items-center gap-1.5 text-sm font-medium outline-none focus-visible:underline"
          onClick={(event) => event.stopPropagation()}
        >
          {openDetailsLabel}
          <ArrowRightIcon className="size-4" strokeWidth={1.8} />
        </a>
      ) : null}
    </div>
  ) : null

  const content = (
    <div className="pointer-events-none relative z-10">
      {header}
      {summaryRow}
      {expandedBody}
    </div>
  )

  const ariaLabel = `${planId}, ${version}, ${statusLabel}`
  const interactive = Boolean(href || onClick || onSelect)

  return (
    <article
      className={cn(cardClassName, "relative", interactive && "cursor-pointer")}
      aria-label={ariaLabel}
    >
      {href ? (
        <a
          href={href}
          className="absolute inset-0 z-0 rounded-lg outline-none"
          aria-label={ariaLabel}
          aria-current={selected ? "true" : undefined}
          onClick={() => onSelect?.()}
        />
      ) : interactive ? (
        <button
          type="button"
          className="absolute inset-0 z-0 rounded-lg outline-none"
          aria-label={ariaLabel}
          aria-pressed={onSelect ? selected : undefined}
          onClick={handleActivate}
        />
      ) : null}
      {content}
    </article>
  )
}

export type PlanCardSkeletonProps = {
  size?: PlanCardSize
  className?: string
}

export function PlanCardSkeleton({
  size = "default",
  className,
}: PlanCardSkeletonProps) {
  return (
    <div
      className={cn(
        "bg-card flex w-full max-w-sm flex-col rounded-lg border border-grey-8 shadow-sm",
        size === "sm" ? "gap-2 px-3 py-3" : "gap-3 px-4 py-4",
        className
      )}
      aria-busy="true"
      aria-hidden
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-1 items-center gap-2">
          <Skeleton className="size-5 rounded-full" />
          <Skeleton className="h-4 w-10" />
        </div>
        <Skeleton className="h-3 w-12" />
      </div>
      <Skeleton className="h-3 w-40" />
      <div className="flex items-center justify-between gap-3 pt-2">
        <div className="flex gap-4">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-16" />
        </div>
        <Skeleton className="size-4" />
      </div>
    </div>
  )
}
