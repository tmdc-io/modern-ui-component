export const qualitySummaryCardCodes = {
  install: `npx shadcn@latest add ashishsahu/ModernUIComponent/quality-summary-card`,

  props: `type DimensionStatus = "pass" | "warn" | "fail"

type QualityDimension = {
  name: string
  status: DimensionStatus
  detail?: string   // e.g. "3 issues" for warn/fail rows
}

type QualitySummary = {
  title?: string
  passed: number
  total: number
  updatedAt: string
  dimensions: QualityDimension[]
  statusLabel?: string   // optional override; auto-derived when omitted
}

type QualitySummaryCardProps = {
  summary?: QualitySummary   // single API object
  title?: string
  statusLabel?: string       // badge: "Healthy", "At Risk", "Failed"
  passed?: number
  total?: number
  dimensionCount?: number    // auto-derived from dimensions.length when omitted
  updatedAt?: string
  dimensions?: QualityDimension[]
  href?: string              // footer link (no client handler)
  onViewAll?: () => void
}`,

  summary: `import { QualitySummaryCard } from "@/components/blocks/quality-summary-card"
import type { QualitySummary } from "@/components/blocks/quality-summary-card"

const apiResponse: QualitySummary = {
  title: "Quality",
  passed: 47,
  total: 100,
  updatedAt: "3m ago",
  dimensions: [
    { name: "Accuracy", status: "pass" },
    { name: "Completeness", status: "pass" },
    { name: "Freshness", status: "pass" },
    { name: "Schema", status: "pass" },
    { name: "Uniqueness", status: "warn", detail: "3 issues" },
    { name: "Validity", status: "pass" },
  ],
}

export function QualityPanel() {
  return (
    <QualitySummaryCard
      summary={apiResponse}
      href="/quality/rules"
    />
  )
}`,

  static: `import { QualitySummaryCard } from "@/components/blocks/quality-summary-card"

export function QualityPanel() {
  return (
    <QualitySummaryCard
      title="Quality"
      passed={47}
      total={100}
      updatedAt="3m ago"
      dimensions={[
        { name: "Accuracy", status: "pass" },
        { name: "Completeness", status: "pass" },
        { name: "Freshness", status: "pass" },
        { name: "Schema", status: "pass" },
        { name: "Uniqueness", status: "warn", detail: "3 issues" },
        { name: "Validity", status: "pass" },
      ]}
      href="/quality/rules"
    />
  )
}`,

  api: `import useSWR from "swr"
import { QualitySummaryCard } from "@/components/blocks/quality-summary-card"
import type { QualityDimension } from "@/components/blocks/quality-summary-card"
import { Skeleton } from "@/components/ui/skeleton"

type QualityApiResponse = {
  rulesPassed: number
  rulesTotal: number
  lastCheckedAt: string
  dimensions: Array<{
    id: string
    label: string
    status: "PASS" | "WARN" | "FAIL"
    issueCount?: number
  }>
}

function mapApiToSummary(data: QualityApiResponse) {
  const dimensions: QualityDimension[] = data.dimensions.map((d) => ({
    name: d.label,
    status:
      d.status === "FAIL"
        ? "fail"
        : d.status === "WARN"
          ? "warn"
          : "pass",
    detail:
      d.issueCount && d.status !== "PASS"
        ? \`\${d.issueCount} issues\`
        : undefined,
  }))

  return {
    passed: data.rulesPassed,
    total: data.rulesTotal,
    updatedAt: formatRelativeTime(data.lastCheckedAt),
    dimensions,
  }
}

export function QualityDashboard() {
  const { data, isLoading } = useSWR("/api/quality/summary", fetcher)

  if (isLoading || !data) return <Skeleton className="h-64 w-80" />

  return (
    <QualitySummaryCard
      summary={mapApiToSummary(data)}
      href="/quality/rules"
    />
  )
}`,

  derived: `import { QualitySummaryCard } from "@/components/blocks/quality-summary-card"

// dimensionCount and statusLabel are derived inside the card.
// Pass dimensions only — badge shows "Healthy", "At Risk", or "Failed".

export function QualitySummary() {
  return (
    <QualitySummaryCard
      passed={apiData.rulesPassed}
      total={apiData.rulesTotal}
      updatedAt="3m ago"
      dimensions={apiData.dimensions.map(/* map to QualityDimension */)}
      href="/quality/rules"
    />
  )
}`,

  multiple: `import { QualitySummaryCard } from "@/components/blocks/quality-summary-card"

const datasets = [
  {
    id: "customers",
    name: "Customers",
    passed: 47,
    total: 100,
    updatedAt: "3m ago",
    dimensions: [/* ... */],
  },
  {
    id: "orders",
    name: "Orders",
    passed: 32,
    total: 100,
    updatedAt: "12m ago",
    dimensions: [/* ... */],
  },
]

export function QualityGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {datasets.map((dataset) => (
        <QualitySummaryCard
          key={dataset.id}
          title={dataset.name}
          passed={dataset.passed}
          total={dataset.total}
          dimensions={dataset.dimensions}
          updatedAt={dataset.updatedAt}
          href={\`/quality/rules?dataset=\${dataset.id}\`}
        />
      ))}
    </div>
  )
}`,

  enhancements: `import { QualitySummaryCard } from "@/components/blocks/quality-summary-card"

// Auto statusLabel: "Healthy" | "At Risk" | "Failed" from dimension statuses
// Auto dimensionCount: dimensions.length
// status "fail": destructive badge + row styling
// href: server-friendly footer link

<QualitySummaryCard
  summary={{
    title: "Orders",
    passed: 18,
    total: 100,
    updatedAt: "1h ago",
    dimensions: [
      { name: "Accuracy", status: "pass" },
      { name: "Completeness", status: "fail", detail: "8 issues" },
      { name: "Freshness", status: "warn", detail: "2 issues" },
      { name: "Schema", status: "pass" },
    ],
  }}
  href="/quality/rules/orders"
/>`,
}
