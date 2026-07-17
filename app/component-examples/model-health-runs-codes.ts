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

import {
  ModelHealthRuns,
  type ModelHealthModel,
  type ModelHealthRun,
} from "@/components/blocks/model-health-runs"

const runs: ModelHealthRun[] = [
  { id: "r1", label: "R1", health: 100 },
  { id: "r2", label: "R2", health: 50 },
  { id: "r3", label: "R3", health: 25 },
  { id: "r4", label: "R4", health: 80 },
  { id: "r5", label: "R5", health: 100 },
]

const models: ModelHealthModel[] = [
  {
    id: "churn",
    name: "customer_churn_prediction",
    health: 72,
    cells: [
      { runId: "r1", status: "none" },
      { runId: "r2", status: "quality" },
      { runId: "r3", status: "none" },
      { runId: "r4", status: "healthy" },
      { runId: "r5", status: "none" },
    ],
  },
  {
    id: "forecast",
    name: "sales_forecasting",
    health: 85,
    cells: [
      { runId: "r1", status: "healthy" },
      { runId: "r2", status: "none" },
      { runId: "r3", status: "failed" },
      { runId: "r4", status: "healthy" },
      { runId: "r5", status: "healthy" },
    ],
  },
  {
    id: "inventory",
    name: "inventory_optimization",
    health: 90,
    cells: [
      { runId: "r1", status: "none" },
      { runId: "r2", status: "healthy" },
      { runId: "r3", status: "none" },
      { runId: "r4", status: "quality" },
      { runId: "r5", status: "failed" },
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
