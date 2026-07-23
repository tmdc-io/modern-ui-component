export const runMetricsCodes = {
  install: `npx shadcn@latest add @modernui/run-metrics
npx shadcn@latest add tmdc-io/modern-ui-component/run-metrics`,

  props: `/**
 * RunMetrics types
 * ----------------
 * - label / value: uppercase metric label + display string (serif value in UI)
 * - detail: optional string subline, or { passed, failed } for QUALITY rows
 *   (failed count uses semantic fail coloring)
 * - columns: 2 | 3 | 4 grid density (default 3)
 */
type RunMetricQualityDetail = {
  passed: number
  failed: number
}

type RunMetric = {
  id: string
  label: string
  value: string
  detail?: string | RunMetricQualityDetail
}

type RunMetricsProps = {
  metrics?: RunMetric[]
  columns?: 2 | 3 | 4
  className?: string
}`,

  default: `"use client"

import { RunMetrics, type RunMetric } from "@/components/blocks/run-metrics"

/**
 * Default run summary grid
 * ------------------------
 * Six-metric layout matching the DataOS run detail rail:
 * WALL · MODELS · PARALLELISM · EVAL · QUALITY · ASSERTIONS
 *
 * QUALITY uses detail: { passed, failed } so the subline renders
 * "9 passed · 5 failed" with fail emphasis on the failed count.
 */
const metrics: RunMetric[] = [
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

export function RunSummaryMetrics() {
  return (
    <RunMetrics
      metrics={metrics}
      columns={3}
      // Omit metrics to use the block's built-in sample set.
    />
  )
}`,

  custom: `"use client"

import { RunMetrics, type RunMetric } from "@/components/blocks/run-metrics"

/**
 * Custom metrics + column count
 * -----------------------------
 * Pass any RunMetric[] from your run API. Use columns={2} for narrower
 * side panels, or columns={4} for wide run dashboards.
 *
 * detail as a string shows a plain subline (e.g. units or timestamps).
 * detail as { passed, failed } unlocks the quality breakdown treatment.
 */
const metrics: RunMetric[] = [
  { id: "wall", label: "WALL", value: "4.1s", detail: "end-to-end" },
  { id: "models", label: "MODELS", value: "3" },
  {
    id: "quality",
    label: "QUALITY",
    value: "14/18",
    detail: { passed: 9, failed: 5 },
  },
]

export function CustomRunMetrics() {
  return <RunMetrics metrics={metrics} columns={2} />
}`,

  dataDriven: `"use client"

import * as React from "react"

import { RunMetrics, type RunMetric } from "@/components/blocks/run-metrics"

/**
 * Data-driven from a run API payload
 * ----------------------------------
 * Map your run summary DTO into RunMetric[], then render.
 * Recompute when the selected run id changes in the parent shell.
 */

type RunSummaryApi = {
  wallMs: number
  modelCount: number
  parallelism: number
  evalMs: number
  qualityLabel: string
  qualityPassed: number
  qualityFailed: number
  assertions: number
}

function formatWall(ms: number) {
  return \`\${(ms / 1000).toFixed(1)}s\`
}

function mapRunMetrics(api: RunSummaryApi): RunMetric[] {
  return [
    { id: "wall", label: "WALL", value: formatWall(api.wallMs) },
    { id: "models", label: "MODELS", value: String(api.modelCount) },
    {
      id: "parallelism",
      label: "PARALLELISM",
      value: \`\${api.parallelism.toFixed(2)}x\`,
    },
    { id: "eval", label: "EVAL", value: \`\${api.evalMs}ms\` },
    {
      id: "quality",
      label: "QUALITY",
      value: api.qualityLabel,
      detail: { passed: api.qualityPassed, failed: api.qualityFailed },
    },
    { id: "assertions", label: "ASSERTIONS", value: String(api.assertions) },
  ]
}

const sampleApi: RunSummaryApi = {
  wallMs: 4100,
  modelCount: 3,
  parallelism: 0.54,
  evalMs: 1363,
  qualityLabel: "14/18",
  qualityPassed: 9,
  qualityFailed: 5,
  assertions: 3,
}

export function DataDrivenRunMetrics({
  api = sampleApi,
}: {
  api?: RunSummaryApi
}) {
  const metrics = React.useMemo(() => mapRunMetrics(api), [api])
  return <RunMetrics metrics={metrics} columns={3} />
}`,
}
