export const modelsTableCodes = {
  install: `npx shadcn@latest add tmdc-io/modern-ui-component/models-table`,

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

import { ModelsTable } from "@/components/blocks/models-table"

export function PipelineModelsPanel() {
  return <ModelsTable title="Models" />
}`,

  expandedError: `"use client"

import { ModelsTable } from "@/components/blocks/models-table"

export function PipelineModelsPanel() {
  return <ModelsTable defaultExpandedIds={["m1"]} />
}`,

  expandedQuality: `"use client"

import { ModelsTable } from "@/components/blocks/models-table"

export function PipelineModelsPanel() {
  return <ModelsTable defaultExpandedIds={["m3"]} />
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
    },
  },
]

export function PipelineModelsPanel() {
  return <ModelsTable rows={rows} defaultExpandedIds={["m1"]} />
}`,
}
