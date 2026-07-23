export const modelHealthRunsCodes = {
  install: `npx shadcn@latest add @modernui/model-health-runs
npx shadcn@latest add tmdc-io/modern-ui-component/model-health-runs`,

  props: `/**
 * ModelHealthRuns types
 * ---------------------
 * Cell status colors use DataOS quality tokens:
 * - healthy  pass / teal
 * - quality  warn
 * - failed   fail
 * - none     not evaluated (empty / muted)
 *
 * runs[] → column headers (label + column health %)
 * models[].cells[] → one cell per runId (must cover every run id)
 */
type ModelHealthStatus = "healthy" | "quality" | "failed" | "none"

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

/**
 * Default model health matrix
 * ---------------------------
 * - runs: column headers (R1…Rn) with aggregate health %
 * - models: rows; each cells[] entry must reference a runs[].id
 * - status per intersection drives the rounded pill color
 *
 * Keep cells.length === runs.length and runId aligned so the heatmap
 * columns line up with the header bars.
 */
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

/**
 * Slim custom matrix
 * ------------------
 * Use a smaller runs[] window (e.g. last 2 runs) for side panels.
 * Map your API: run keys → ModelHealthRun, model × run status → cells.
 */
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

export function CompactModelHealthPanel() {
  return (
    <ModelHealthRuns
      title="Model health across runs"
      runs={runs}
      models={models}
    />
  )
}`,

  dataDriven: `"use client"

import * as React from "react"

import {
  ModelHealthRuns,
  type ModelHealthModel,
  type ModelHealthRun,
  type ModelHealthStatus,
} from "@/components/blocks/model-health-runs"

/**
 * Data-driven from run × model API
 * --------------------------------
 * Flatten a nested API response into runs + models with aligned cells.
 */

type ApiCell = { runKey: string; state: ModelHealthStatus }
type ApiModel = { key: string; name: string; healthPct: number; cells: ApiCell[] }
type ApiPayload = {
  runs: { key: string; label: string; healthPct: number }[]
  models: ApiModel[]
}

function mapMatrix(api: ApiPayload): {
  runs: ModelHealthRun[]
  models: ModelHealthModel[]
} {
  return {
    runs: api.runs.map((run) => ({
      id: run.key,
      label: run.label,
      health: run.healthPct,
    })),
    models: api.models.map((model) => ({
      id: model.key,
      name: model.name,
      health: model.healthPct,
      cells: model.cells.map((cell) => ({
        runId: cell.runKey,
        status: cell.state,
      })),
    })),
  }
}

const api: ApiPayload = {
  runs: [
    { key: "r1", label: "R1", healthPct: 100 },
    { key: "r2", label: "R2", healthPct: 50 },
  ],
  models: [
    {
      key: "churn",
      name: "customer_churn_prediction",
      healthPct: 72,
      cells: [
        { runKey: "r1", state: "healthy" },
        { runKey: "r2", state: "quality" },
      ],
    },
  ],
}

export function DataDrivenModelHealth() {
  const { runs, models } = React.useMemo(() => mapMatrix(api), [])
  return (
    <ModelHealthRuns
      title="Model health across runs"
      runs={runs}
      models={models}
    />
  )
}`,
}
