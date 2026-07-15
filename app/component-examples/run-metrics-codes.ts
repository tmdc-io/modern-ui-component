export const runMetricsCodes = {
  install: `npx shadcn@latest add tmdc-io/modern-ui-component/run-metrics`,

  props: `type RunMetricQualityDetail = {
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

import { RunMetrics } from "@/components/blocks/run-metrics"

export function RunSummaryMetrics() {
  return <RunMetrics />
}`,

  custom: `"use client"

import { RunMetrics, type RunMetric } from "@/components/blocks/run-metrics"

const metrics: RunMetric[] = [
  { id: "wall", label: "WALL", value: "4.1s" },
  { id: "models", label: "MODELS", value: "3" },
  {
    id: "quality",
    label: "QUALITY",
    value: "14/18",
    detail: { passed: 9, failed: 5 },
  },
]

export function RunSummaryMetrics() {
  return <RunMetrics metrics={metrics} columns={3} />
}`,
}
