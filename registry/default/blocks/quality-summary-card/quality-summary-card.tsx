"use client"

import {
  AlertTriangleIcon,
  ArrowRightIcon,
  AwardIcon,
  CircleCheckIcon,
  CircleXIcon,
} from "lucide-react"

import { Badge } from "@/registry/default/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"
import {
  useTranslation,
  type Translations,
} from "@/hooks/use-translation"
import { cn } from "@/lib/utils"

export type DimensionStatus = "pass" | "warn" | "fail"

export type QualityDimension = {
  name: string
  status: DimensionStatus
  detail?: string
}

export type QualitySummary = {
  title?: string
  passed: number
  total: number
  updatedAt: string
  dimensions: QualityDimension[]
  statusLabel?: string
}

export type QualitySummaryCardProps = {
  summary?: QualitySummary
  title?: string
  statusLabel?: string
  passed?: number
  total?: number
  dimensionCount?: number
  updatedAt?: string
  dimensions?: QualityDimension[]
  href?: string
  onViewAll?: () => void
}

export const qualitySummaryCardMessages = {
  en: {
    dir: "ltr",
    values: {
      title: "Quality",
      failed: "Failed",
      atRisk: "At Risk",
      healthy: "Healthy",
      rules: "rules",
      across: "across",
      dimensions: "dimensions",
      viewAllPrefix: "View all",
      viewAllSuffix: "quality rules",
    },
  },
  es: {
    dir: "ltr",
    values: {
      title: "Calidad",
      failed: "Fallido",
      atRisk: "En riesgo",
      healthy: "Saludable",
      rules: "reglas",
      across: "en",
      dimensions: "dimensiones",
      viewAllPrefix: "Ver las",
      viewAllSuffix: "reglas de calidad",
    },
  },
} satisfies Translations

const defaultDimensions: QualityDimension[] = [
  { name: "Accuracy", status: "pass" },
  { name: "Completeness", status: "pass" },
  { name: "Conformity", status: "pass" },
  { name: "Consistency", status: "pass" },
  { name: "Coverage", status: "pass" },
  { name: "Timeliness", status: "pass" },
  { name: "Uniqueness", status: "warn", detail: "3 issues" },
  { name: "Validity", status: "pass" },
]

const labelLineClass = "text-[13px] leading-[18px] text-foreground"

const badgeVariantClass = {
  success:
    "border-0 bg-dataos-success-bg text-dataos-success-fg hover:bg-dataos-success-bg",
  warn: "border-0 bg-dataos-warn-bg text-dataos-warn-fg hover:bg-dataos-warn-bg",
  fail: "border-0 bg-dataos-fail-bg text-dataos-fail-fg hover:bg-dataos-fail-bg",
} as const

type BadgeVariant = keyof typeof badgeVariantClass
type StatusLabels = { failed: string; atRisk: string; healthy: string }
type ResolveCardPropsArgs = QualitySummaryCardProps & {
  fallbackTitle: string
  statusLabels: StatusLabels
}

export function deriveStatusLabel(
  dimensions: QualityDimension[],
  labels?: StatusLabels
): string {
  if (dimensions.some((dimension) => dimension.status === "fail")) {
    return labels?.failed ?? "Failed"
  }
  if (dimensions.some((dimension) => dimension.status === "warn")) {
    return labels?.atRisk ?? "At Risk"
  }
  return labels?.healthy ?? "Healthy"
}

function deriveBadgeVariant(dimensions: QualityDimension[]): BadgeVariant {
  if (dimensions.some((dimension) => dimension.status === "fail")) {
    return "fail"
  }
  if (dimensions.some((dimension) => dimension.status === "warn")) {
    return "warn"
  }
  return "success"
}

function resolveCardProps({
  summary,
  title,
  statusLabel,
  passed,
  total,
  dimensionCount,
  updatedAt,
  dimensions,
  fallbackTitle,
  statusLabels,
}: ResolveCardPropsArgs) {
  const resolvedDimensions = dimensions ?? summary?.dimensions ?? defaultDimensions
  const resolvedPassed = passed ?? summary?.passed ?? 47
  const resolvedTotal = total ?? summary?.total ?? 100
  const resolvedTitle = title ?? summary?.title ?? fallbackTitle
  const resolvedUpdatedAt = updatedAt ?? summary?.updatedAt ?? "3m ago"
  const resolvedDimensionCount = dimensionCount ?? resolvedDimensions.length
  const resolvedStatusLabel =
    statusLabel ??
    summary?.statusLabel ??
    deriveStatusLabel(resolvedDimensions, statusLabels)
  const badgeVariant = deriveBadgeVariant(resolvedDimensions)

  return {
    title: resolvedTitle,
    statusLabel: resolvedStatusLabel,
    passed: resolvedPassed,
    total: resolvedTotal,
    dimensionCount: resolvedDimensionCount,
    updatedAt: resolvedUpdatedAt,
    dimensions: resolvedDimensions,
    badgeVariant,
  }
}

function StatusIcon({ status }: { status: DimensionStatus }) {
  if (status === "pass") {
    return (
      <span className="flex size-[18px] shrink-0 items-center justify-center rounded-[5px] bg-dataos-success-bg">
        <CircleCheckIcon
          className="size-3.5 text-dataos-success-fg"
          strokeWidth={2}
        />
      </span>
    )
  }

  if (status === "warn") {
    return (
      <span className="flex size-[18px] shrink-0 items-center justify-center rounded-[5px] bg-dataos-warn-bg">
        <AlertTriangleIcon
          className="size-3 text-dataos-warn-fg"
          strokeWidth={2.25}
        />
      </span>
    )
  }

  return (
    <span className="flex size-[18px] shrink-0 items-center justify-center rounded-[5px] bg-dataos-fail-bg">
      <CircleXIcon
        className="size-3.5 text-dataos-fail-fg"
        strokeWidth={2}
      />
    </span>
  )
}

const footerLinkClass =
  "inline-flex items-center gap-1 text-[13px] font-medium text-primary transition-colors hover:text-primary/80"

export function QualitySummaryCard(props: QualitySummaryCardProps) {
  const { t } = useTranslation(qualitySummaryCardMessages)
  const { href, onViewAll } = props
  const {
    title,
    statusLabel,
    passed,
    total,
    dimensionCount,
    updatedAt,
    dimensions,
    badgeVariant,
  } = resolveCardProps({
    ...props,
    fallbackTitle: t.title,
    statusLabels: {
      failed: t.failed,
      atRisk: t.atRisk,
      healthy: t.healthy,
    },
  })

  return (
    <Card className="w-full max-w-[22rem] gap-0 border border-border/60 bg-dataos-surface py-5 text-card-foreground shadow-sm">
      <CardHeader className="grid-rows-1 items-center gap-0 px-5 pb-4">
        <CardTitle className="flex items-center gap-2 text-[15px] font-medium text-foreground">
          <AwardIcon className="size-4 stroke-[1.75] text-muted-foreground" />
          {title}
        </CardTitle>
        <CardAction>
          <Badge
            className={cn(
              "rounded-full px-2.5 py-0.5 text-xs font-medium",
              badgeVariantClass[badgeVariant]
            )}
          >
            {statusLabel}
          </Badge>
        </CardAction>
      </CardHeader>

      <CardContent className="space-y-1 px-5 pb-4">
        <p className="font-serif leading-none text-foreground">
          <span className="text-[2rem] font-semibold tracking-tight">
            {passed}
          </span>
          <span className="text-base font-normal text-muted-foreground">
            /{total} {t.rules}
          </span>
        </p>
        <p className="text-[13px] text-muted-foreground">
          {t.across} {dimensionCount} {t.dimensions} • {updatedAt}
        </p>
      </CardContent>

      <CardContent className="px-5 pb-5 pt-0">
        <div className="grid grid-cols-2 gap-x-8 gap-y-3.5">
          {dimensions.map((dimension) => (
            <div
              key={dimension.name}
              className={
                dimension.detail
                  ? "flex gap-3"
                  : "flex items-center gap-3"
              }
            >
              <div className="flex h-[18px] shrink-0 items-center">
                <StatusIcon status={dimension.status} />
              </div>
              <div className="min-w-0">
                <p className={labelLineClass}>{dimension.name}</p>
                {dimension.detail ? (
                  <p
                    className={cn(
                      "mt-0.5 text-[11px] leading-none",
                      dimension.status === "fail"
                        ? "text-dataos-fail-fg"
                        : "text-dataos-warn-fg"
                    )}
                  >
                    {dimension.detail}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="border-t border-border/80 px-5 pt-4 pb-0">
        {href ? (
          <a href={href} className={footerLinkClass}>
            {t.viewAllPrefix} {passed} {t.viewAllSuffix}
            <ArrowRightIcon className="size-3.5" />
          </a>
        ) : (
          <button
            type="button"
            className={footerLinkClass}
            onClick={onViewAll}
          >
            {t.viewAllPrefix} {passed} {t.viewAllSuffix}
            <ArrowRightIcon className="size-3.5" />
          </button>
        )}
      </CardFooter>
    </Card>
  )
}
