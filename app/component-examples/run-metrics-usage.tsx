"use client"

import { RunMetrics } from "@/registry/default/blocks/run-metrics/run-metrics"

export function RunMetricsDefaultPreview() {
  return (
    <div className="bg-card w-full min-w-0 rounded-lg border border-grey-8 p-4 sm:p-8">
      <RunMetrics />
    </div>
  )
}

export function RunMetricsCustomPreview() {
  return (
    <div className="bg-card w-full min-w-0 rounded-lg border border-grey-8 p-4 sm:p-8">
      <RunMetrics
        columns={2}
        metrics={[
          { id: "wall", label: "WALL", value: "2.8s" },
          { id: "models", label: "MODELS", value: "5" },
          {
            id: "quality",
            label: "QUALITY",
            value: "12/12",
            detail: { passed: 12, failed: 0 },
          },
          { id: "eval", label: "EVAL", value: "980ms" },
        ]}
      />
    </div>
  )
}
