"use client"

import {
  ModelHealthRuns,
  type ModelHealthModel,
  type ModelHealthRun,
} from "@/registry/default/blocks/model-health-runs/model-health-runs"

const customRuns: ModelHealthRun[] = [
  { id: "r1", label: "R1", health: 100 },
  { id: "r2", label: "R2", health: 50 },
]

const customModels: ModelHealthModel[] = [
  {
    id: "churn",
    name: "customer_churn_prediction",
    health: 72,
    cells: [
      { runId: "r1", status: "healthy" },
      { runId: "r2", status: "quality" },
    ],
  },
  {
    id: "sales",
    name: "sales_forecasting",
    health: 85,
    cells: [
      { runId: "r1", status: "healthy" },
      { runId: "r2", status: "failed" },
    ],
  },
]

export function ModelHealthRunsDefaultPreview() {
  return (
    <div className="bg-card w-full rounded-lg border border-grey-8 p-8">
      <ModelHealthRuns />
    </div>
  )
}

export function ModelHealthRunsCustomPreview() {
  return (
    <div className="bg-card w-full rounded-lg border border-grey-8 p-8">
      <ModelHealthRuns runs={customRuns} models={customModels} />
    </div>
  )
}
