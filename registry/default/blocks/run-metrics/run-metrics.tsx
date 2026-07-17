"use client"

import * as React from "react"

import {
  useTranslation,
  type Translations,
} from "@/hooks/use-translation"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/registry/default/ui/skeleton"

export type RunMetricQualityDetail = {
  passed: number
  failed: number
}

export type RunMetric = {
  id: string
  label: string
  value: string
  detail?: string | RunMetricQualityDetail
}

export type RunMetricsProps = {
  metrics?: RunMetric[]
  columns?: 2 | 3 | 4
  emptyMessage?: string
  className?: string
}

export const runMetricsMessages = {
  en: {
    dir: "ltr",
    values: {
      passed: "passed",
      failed: "failed",
      wall: "WALL",
      models: "MODELS",
      parallelism: "PARALLELISM",
      eval: "EVAL",
      quality: "QUALITY",
      assertions: "ASSERTIONS",
      noMetrics: "No metrics available.",
    },
  },
  es: {
    dir: "ltr",
    values: {
      passed: "aprobadas",
      failed: "fallidas",
      wall: "TIEMPO TOTAL",
      models: "MODELOS",
      parallelism: "PARALELISMO",
      eval: "EVAL",
      quality: "CALIDAD",
      assertions: "ASERCIONES",
      noMetrics: "No hay métricas disponibles.",
    },
  },
} satisfies Translations

const defaultMetrics: RunMetric[] = [
  { id: "wall", label: "WALL", value: "4.1s" },
  { id: "models", label: "MODELS", value: "3" },
  { id: "parallelism", label: "PARALLELISM", value: "0.54x" },
  { id: "eval", label: "EVAL", value: "1363ms" },
  {
    id: "quality",
    label: "QUALITY",
    value: "14/18",
    detail: { passed: 9, failed: 5 },
  },
  { id: "assertions", label: "ASSERTIONS", value: "3" },
]

const columnClass = {
  2: "grid-cols-1 min-[28rem]:grid-cols-2",
  3: "grid-cols-2 md:grid-cols-3",
  4: "grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
} as const

function MetricDetail({ detail }: { detail: string | RunMetricQualityDetail }) {
  const { t } = useTranslation(runMetricsMessages)
  if (typeof detail === "string") {
    return (
      <p className="text-muted-foreground mt-1.5 max-w-full px-1 text-[11px] leading-snug sm:mt-2 sm:text-xs">
        {detail}
      </p>
    )
  }

  return (
    <p className="text-muted-foreground mt-1.5 flex max-w-full flex-wrap items-center justify-center gap-x-1 gap-y-0.5 px-1 text-[11px] leading-snug sm:mt-2 sm:text-xs">
      <span>{detail.passed} {t.passed}</span>
      <span aria-hidden="true">•</span>
      <span className="text-dataos-fail-fg">
        {detail.failed} {t.failed}
      </span>
    </p>
  )
}

function RunMetricCard({ metric }: { metric: RunMetric }) {
  const { t } = useTranslation(runMetricsMessages)
  const translatedLabel =
    metric.id === "wall"
      ? t.wall
      : metric.id === "models"
        ? t.models
        : metric.id === "parallelism"
          ? t.parallelism
          : metric.id === "eval"
            ? t.eval
            : metric.id === "quality"
              ? t.quality
              : metric.id === "assertions"
                ? t.assertions
                : metric.label
  return (
    <article className="bg-dataos-surface flex min-h-[5.5rem] min-w-0 flex-col items-center justify-center rounded-lg px-2.5 py-4 text-center sm:min-h-[7.5rem] sm:px-4 sm:py-6">
      <p className="text-muted-foreground max-w-full text-[10px] font-medium tracking-[0.1em] uppercase sm:text-[11px] sm:tracking-[0.14em]">
        {translatedLabel}
      </p>
      <p className="font-serif mt-1.5 text-[1.375rem] leading-none font-medium tracking-tight text-foreground sm:mt-2 sm:text-[1.75rem] lg:text-[2rem]">
        {metric.value}
      </p>
      {metric.detail ? <MetricDetail detail={metric.detail} /> : null}
    </article>
  )
}

export function RunMetrics({
  metrics = defaultMetrics,
  columns = 3,
  emptyMessage,
  className,
}: RunMetricsProps) {
  const { t } = useTranslation(runMetricsMessages)

  if (metrics.length === 0) {
    return (
      <section
        className={cn(
          "bg-dataos-surface text-muted-foreground flex min-h-[5.5rem] w-full items-center justify-center rounded-lg px-4 py-6 text-sm",
          className
        )}
      >
        {emptyMessage ?? t.noMetrics}
      </section>
    )
  }

  return (
    <section className={cn("w-full min-w-0", className)}>
      <div className={cn("grid w-full gap-2 sm:gap-3", columnClass[columns])}>
        {metrics.map((metric) => (
          <RunMetricCard key={metric.id} metric={metric} />
        ))}
      </div>
    </section>
  )
}

export type RunMetricsSkeletonProps = {
  columns?: 2 | 3 | 4
  count?: number
  className?: string
}

export function RunMetricsSkeleton({
  columns = 3,
  count = 6,
  className,
}: RunMetricsSkeletonProps) {
  return (
    <section
      className={cn("w-full min-w-0", className)}
      aria-busy="true"
      aria-hidden
    >
      <div className={cn("grid w-full gap-2 sm:gap-3", columnClass[columns])}>
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="bg-dataos-surface flex min-h-[5.5rem] flex-col items-center justify-center gap-2 rounded-lg px-4 py-6 sm:min-h-[7.5rem]"
          >
            <Skeleton className="h-2.5 w-16" />
            <Skeleton className="h-7 w-14" />
            <Skeleton className="h-2.5 w-20" />
          </div>
        ))}
      </div>
    </section>
  )
}
