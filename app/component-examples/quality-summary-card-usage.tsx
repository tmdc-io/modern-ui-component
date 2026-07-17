"use client"

import {
  QualitySummaryCard,
  QualitySummaryCardSkeleton,
} from "@/registry/default/blocks/quality-summary-card/quality-summary-card"

const defaultDimensions = [
  { name: "Accuracy", status: "pass" as const },
  { name: "Completeness", status: "pass" as const },
  { name: "Conformity", status: "pass" as const },
  { name: "Consistency", status: "pass" as const },
  { name: "Coverage", status: "pass" as const },
  { name: "Timeliness", status: "pass" as const },
  { name: "Uniqueness", status: "warn" as const, detail: "3 issues" },
  { name: "Validity", status: "pass" as const },
]

export function QualitySummaryCardDefaultPreview() {
  return (
    <div className="flex w-full justify-center">
      <QualitySummaryCard
        title="Quality"
        passed={47}
        total={100}
        updatedAt="3m ago"
        dimensions={defaultDimensions}
      />
    </div>
  )
}

const atRiskDimensions = [
  { name: "Accuracy", status: "pass" as const },
  { name: "Completeness", status: "pass" as const },
  { name: "Conformity", status: "pass" as const },
  { name: "Consistency", status: "pass" as const },
  { name: "Coverage", status: "pass" as const },
  { name: "Timeliness", status: "warn" as const, detail: "12 issues" },
  { name: "Uniqueness", status: "warn" as const, detail: "3 issues" },
  { name: "Validity", status: "pass" as const },
]

export function QualitySummaryCardDataDrivenPreview() {
  return (
    <div className="flex w-full justify-center">
      <QualitySummaryCard
        passed={32}
        total={100}
        updatedAt="12m ago"
        dimensions={atRiskDimensions}
      />
    </div>
  )
}

const failedDimensions = [
  { name: "Accuracy", status: "pass" as const },
  { name: "Completeness", status: "fail" as const, detail: "8 issues" },
  { name: "Conformity", status: "pass" as const },
  { name: "Consistency", status: "warn" as const, detail: "2 issues" },
  { name: "Coverage", status: "pass" as const },
  { name: "Timeliness", status: "pass" as const },
  { name: "Uniqueness", status: "pass" as const },
  { name: "Validity", status: "pass" as const },
]

export function QualitySummaryCardSummaryPreview() {
  return (
    <div className="flex w-full justify-center">
      <QualitySummaryCard
        summary={{
          title: "Orders",
          passed: 18,
          total: 100,
          updatedAt: "1h ago",
          dimensions: failedDimensions,
        }}
        href="/quality/rules/orders"
      />
    </div>
  )
}

export function QualitySummaryCardMultiplePreview() {
  return (
    <div className="grid w-full gap-4 md:grid-cols-2">
      <QualitySummaryCard
        title="Customers"
        passed={47}
        total={100}
        updatedAt="3m ago"
        dimensions={defaultDimensions}
        href="/quality/rules/customers"
      />
      <QualitySummaryCard
        title="Orders"
        passed={32}
        total={100}
        updatedAt="12m ago"
        dimensions={atRiskDimensions}
        href="/quality/rules/orders"
      />
    </div>
  )
}

export function QualitySummaryCardEmptyPreview() {
  return (
    <div className="flex w-full justify-center">
      <QualitySummaryCard
        title="Quality"
        passed={0}
        total={0}
        updatedAt="—"
        dimensions={[]}
        emptyMessage="No quality dimensions yet."
      />
    </div>
  )
}

export function QualitySummaryCardSkeletonPreview() {
  return (
    <div className="flex w-full justify-center">
      <QualitySummaryCardSkeleton />
    </div>
  )
}
