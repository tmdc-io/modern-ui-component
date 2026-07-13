export const modelHealthRunsCodes = {
  install: `npx shadcn@latest add tmdc-io/modern-ui-component/model-health-runs`,

  props: `type ModelHealthStatus = "healthy" | "quality" | "failed" | "none"

type ModelHealthCell = {
  runId: string
  status: ModelHealthStatus
}

type ModelHealthRun = {
  id: string
  label: string
  health: number
}

type ModelHealthModel = {
  id: string
  name: string
  health: number
  cells: ModelHealthCell[]
}

type ModelHealthRunsProps = {
  title?: string
  runs?: ModelHealthRun[]
  models?: ModelHealthModel[]
  className?: string
}`,

  default: `"use client"

import { ModelHealthRuns } from "@/components/blocks/model-health-runs"

export function ModelHealthPanel() {
  return <ModelHealthRuns title="Model health across runs" />
}`,

  custom: `"use client"

import {
  ModelHealthRuns,
  type ModelHealthModel,
  type ModelHealthRun,
} from "@/components/blocks/model-health-runs"

const runs: ModelHealthRun[] = [
  { id: "r1", label: "R1", health: 100 },
  { id: "r2", label: "R2", health: 50 },
]

const models: ModelHealthModel[] = [
  {
    id: "churn",
    name: "customer_churn_prediction",
    health: 72,
    cells: [
      { runId: "r1", status: "healthy" },
      { runId: "r2", status: "quality" },
    ],
  },
]

export function ModelHealthPanel() {
  return (
    <ModelHealthRuns
      title="Model health across runs"
      runs={runs}
      models={models}
    />
  )
}`,
}
