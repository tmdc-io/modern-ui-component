"use client"

import { ModelsTable } from "@/registry/default/blocks/models-table/models-table"

export function ModelsTableDefaultPreview() {
  return (
    <div className="bg-card w-full min-w-0 rounded-lg border border-grey-8 p-4 sm:p-8">
      <ModelsTable />
    </div>
  )
}

export function ModelsTableExpandedErrorPreview() {
  return (
    <div className="bg-card w-full min-w-0 rounded-lg border border-grey-8 p-4 sm:p-8">
      <ModelsTable defaultExpandedIds={["m1"]} />
    </div>
  )
}

export function ModelsTableExpandedQualityPreview() {
  return (
    <div className="bg-card w-full min-w-0 rounded-lg border border-grey-8 p-4 sm:p-8">
      <ModelsTable defaultExpandedIds={["m3"]} />
    </div>
  )
}

export function ModelsTableCustomPreview() {
  return (
    <div className="bg-card w-full min-w-0 rounded-lg border border-grey-8 p-4 sm:p-8">
      <ModelsTable
        rows={[
          {
            id: "custom-1",
            name: "REVENUE_FORECAST_AGG",
            namespace: "ANALYTICS / FINANCE",
            kind: "FULL",
            type: "SQL",
            runtimeMs: 120,
            rowCount: 8420,
            dataSize: "1.1GB",
            status: "pass",
            statusCount: 6,
            showSparkline: true,
          },
          {
            id: "custom-2",
            name: "CHURN_FEATURES_AGG",
            namespace: "ANALYTICS / ML",
            kind: "INCREMENTAL_BY_TIME_RANGE",
            type: "VIEW",
            runtimeMs: 44,
            rowCount: 22100,
            dataSize: "640mb",
            status: "warn",
            statusCount: 2,
            expansion: "quality",
            qualityRules: [
              { id: "q1", column: "user_id", rule: "not_null", status: "pass" },
              { id: "q2", column: "score", rule: "range", status: "warn" },
            ],
          },
        ]}
        defaultExpandedIds={["custom-2"]}
      />
    </div>
  )
}
