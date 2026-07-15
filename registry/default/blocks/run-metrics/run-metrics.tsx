"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

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
  className?: string
}

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
  if (typeof detail === "string") {
    return (
      <p className="text-muted-foreground mt-1.5 max-w-full px-1 text-[11px] leading-snug sm:mt-2 sm:text-xs">
        {detail}
      </p>
    )
  }

  return (
    <p className="text-muted-foreground mt-1.5 flex max-w-full flex-wrap items-center justify-center gap-x-1 gap-y-0.5 px-1 text-[11px] leading-snug sm:mt-2 sm:text-xs">
      <span>{detail.passed} passed</span>
      <span aria-hidden="true">•</span>
      <span className="text-dataos-fail-fg">{detail.failed} failed</span>
    </p>
  )
}

function RunMetricCard({ metric }: { metric: RunMetric }) {
  return (
    <article className="bg-dataos-surface flex min-h-[5.5rem] min-w-0 flex-col items-center justify-center rounded-lg px-2.5 py-4 text-center sm:min-h-[7.5rem] sm:px-4 sm:py-6">
      <p className="text-muted-foreground max-w-full text-[10px] font-medium tracking-[0.1em] uppercase sm:text-[11px] sm:tracking-[0.14em]">
        {metric.label}
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
  className,
}: RunMetricsProps) {
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
