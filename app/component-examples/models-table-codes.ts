export const modelsTableCodes = {
  install: `npx shadcn@latest add @modernui/models-table
npx shadcn@latest add tmdc-io/modern-ui-component/models-table`,

  props: `type ModelTableStatus = "fail" | "warn" | "pass" | "none"

type ModelTableQualityRule = {
  id: string
  column: string
  rule: string
  status: "pass" | "warn" | "fail"
}

type ModelTableErrorDetail = {
  errorType: string
  message: string
  viewMoreLabel?: string
  viewMoreHref?: string
  onViewMore?: () => void
}

type ModelTableRow = {
  id: string
  name: string
  namespace: string
  kind: string
  type: string
  runtimeMs?: number
  rowCount?: number
  dataSize?: string
  status?: ModelTableStatus
  statusCount?: number
  hasError?: boolean
  showSparkline?: boolean
  expansion?: "error" | "quality"
  errorDetail?: ModelTableErrorDetail
  qualityRules?: ModelTableQualityRule[]
}

type ModelsTableProps = {
  title?: string
  rows?: ModelTableRow[]
  enableExpand?: boolean
  expandedIds?: string[]
  defaultExpandedIds?: string[]
  onExpandedChange?: (ids: string[]) => void
  // ...search and sort props
}`,

  default: `"use client"

import { ModelsTable, type ModelTableRow } from "@/components/blocks/models-table"

const rows: ModelTableRow[] = [
  {
    id: "m3",
    name: "BUILDING_COMPETITORS_AGG",
    namespace: "SFDATAPRODUC... / SALES",
    kind: "INCREMENTAL_BY_UNIQUE_KEY",
    type: "SQL",
    runtimeMs: 142,
    rowCount: 24830,
    dataSize: "1gb",
    status: "warn",
    statusCount: 1,
    showSparkline: true,
    expansion: "quality",
    qualityRules: [
      { id: "q1", column: "account_id", rule: "not_null", status: "pass" },
      { id: "q2", column: "amount", rule: "accepted_values", status: "warn" },
    ],
  },
  {
    id: "m5",
    name: "MAINT_COST",
    namespace: "SFDATAPRODUC... / SALES",
    kind: "VIEW",
    type: "ROLLUP",
    runtimeMs: 315,
    rowCount: 30110,
    dataSize: "2gb",
    status: "pass",
    statusCount: 8,
    showSparkline: true,
  },
  {
    id: "m1",
    name: "BUILDING_COMPETITORS_AGG",
    namespace: "SFDATAPRODUC... / SALES",
    kind: "INCREMENTAL_BY_UNIQUE_KEY",
    type: "SQL",
    status: "fail",
    statusCount: 1,
    hasError: true,
    showSparkline: true,
    expansion: "error",
    errorDetail: {
      errorType: "Py4JJavaError",
      message:
        "Could not establish connection to warehouse 'TRANSFORM_WH': authentication token expired (390114).",
      viewMoreLabel: "View more",
    },
  },
]

export function PipelineModelsPanel() {
  return <ModelsTable title="Models" rows={rows} />
}`,

  expandedError: `"use client"

import { ModelsTable, type ModelTableRow } from "@/components/blocks/models-table"

const rows: ModelTableRow[] = [
  {
    id: "m1",
    name: "BUILDING_COMPETITORS_AGG",
    namespace: "SFDATAPRODUC... / SALES",
    kind: "INCREMENTAL_BY_UNIQUE_KEY",
    type: "SQL",
    status: "fail",
    statusCount: 1,
    hasError: true,
    showSparkline: true,
    expansion: "error",
    errorDetail: {
      errorType: "Py4JJavaError",
      message:
        "Could not establish connection to warehouse 'TRANSFORM_WH': authentication token expired (390114). Retried 3x.\\n    at Connection.open (driver.js:64:11)",
      viewMoreLabel: "View more",
      viewMoreHref: "/runs/errors/m1",
    },
  },
  {
    id: "m5",
    name: "MAINT_COST",
    namespace: "SFDATAPRODUC... / SALES",
    kind: "VIEW",
    type: "ROLLUP",
    runtimeMs: 315,
    rowCount: 30110,
    dataSize: "2gb",
    status: "pass",
    statusCount: 8,
    showSparkline: true,
  },
]

export function PipelineModelsPanel() {
  return <ModelsTable rows={rows} defaultExpandedIds={["m1"]} />
}`,

  expandedQuality: `"use client"

import { ModelsTable, type ModelTableRow } from "@/components/blocks/models-table"

const rows: ModelTableRow[] = [
  {
    id: "m3",
    name: "BUILDING_COMPETITORS_AGG",
    namespace: "SFDATAPRODUC... / SALES",
    kind: "INCREMENTAL_BY_UNIQUE_KEY",
    type: "SQL",
    runtimeMs: 142,
    rowCount: 24830,
    dataSize: "1gb",
    status: "warn",
    statusCount: 1,
    showSparkline: true,
    expansion: "quality",
    qualityRules: [
      { id: "q1", column: "account_id", rule: "not_null", status: "pass" },
      { id: "q2", column: "amount", rule: "accepted_values", status: "warn" },
      { id: "q3", column: "updated_at", rule: "freshness", status: "fail" },
    ],
  },
  {
    id: "m5",
    name: "MAINT_COST",
    namespace: "SFDATAPRODUC... / SALES",
    kind: "VIEW",
    type: "ROLLUP",
    runtimeMs: 315,
    rowCount: 30110,
    dataSize: "2gb",
    status: "pass",
    statusCount: 8,
    showSparkline: true,
  },
]

export function PipelineModelsPanel() {
  return <ModelsTable rows={rows} defaultExpandedIds={["m3"]} />
}`,

  custom: `"use client"

import { ModelsTable, type ModelTableRow } from "@/components/blocks/models-table"

const rows: ModelTableRow[] = [
  {
    id: "m1",
    name: "BUILDING_COMPETITORS_AGG",
    namespace: "SFDATAPRODUC... / SALES",
    kind: "INCREMENTAL_BY_TIME_RANGE",
    type: "SQL",
    status: "fail",
    statusCount: 1,
    hasError: true,
    expansion: "error",
    errorDetail: {
      errorType: "Py4JJavaError",
      message: "Connection to warehouse failed.",
      viewMoreHref: "/runs/errors/m1",
    },
  },
]

export function PipelineModelsPanel() {
  return <ModelsTable rows={rows} defaultExpandedIds={["m1"]} />
}`,
}
