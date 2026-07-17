export const planStatusCardCodes = {
  install: `npx shadcn@latest add tmdc-io/modern-ui-component/plan-status-card`,

  breakingCollapsed: `import { PlanStatusCard } from "@/components/blocks/plan-status-card"

export function BreakingPlanStatus() {
  return (
    <PlanStatusCard
      title="b2b_saas.users"
      typeLabel="FULL"
      badges={[
        { label: "Breaking", tone: "error" },
        { label: "Backfill", tone: "muted" },
      ]}
    />
  )
}`,

  selected: `import { PlanStatusCard } from "@/components/blocks/plan-status-card"

export function SelectedPlanStatus() {
  return (
    <PlanStatusCard
      title="b2b_saas.users"
      typeLabel="FULL"
      selected
      badges={[
        { label: "Breaking", tone: "error" },
        { label: "Backfill", tone: "muted" },
      ]}
    />
  )
}`,

  breakingExpanded: `import {
  PlanStatusCard,
  PlanStatusDiff,
  PlanStatusImpacts,
} from "@/components/blocks/plan-status-card"

export function ExpandedBreakingPlanStatus() {
  return (
    <PlanStatusCard
      title="b2b_saas.users"
      typeLabel="FULL"
      badges={[
        { label: "Breaking", tone: "error" },
        { label: "Backfill", tone: "muted" },
      ]}
      defaultExpanded
    >
      <PlanStatusDiff
        filePath="models/usage_events.sql"
        lines={[
          { value: "+ event_count AS new_event_count,", kind: "add", newLine: 36 },
          { value: "- event_date >= CURRENT_DATE - INTERVAL '90 DAYS'", kind: "remove", oldLine: 56 },
        ]}
      />
      <PlanStatusImpacts
        impacts={[
          { name: "churn_analysis", type: "metric", kind: "metric" },
        ]}
      />
    </PlanStatusCard>
  )
}`,

  undefinedCollapsed: `import { PlanStatusCard } from "@/components/blocks/plan-status-card"

export function UndefinedTableStatus() {
  return (
    <PlanStatusCard
      title="b2b_saas.users_enriched"
      typeLabel="FULL"
      tone="error"
      badges={[{ label: "Undefined table", tone: "error" }]}
    />
  )
}`,

  undefinedExpanded: `import {
  PlanStatusCard,
  PlanStatusError,
} from "@/components/blocks/plan-status-card"

export function ExpandedUndefinedTableStatus() {
  return (
    <PlanStatusCard
      title="b2b_saas.users_enriched"
      typeLabel="FULL"
      tone="error"
      badges={[{ label: "Undefined table", tone: "error" }]}
      defaultExpanded
    >
      <PlanStatusError>
        {\`relation "b2b_saas.users" does not exist\`}
      </PlanStatusError>
    </PlanStatusCard>
  )
}`,

  environmentCollapsed: `import { PlanStatusCard } from "@/components/blocks/plan-status-card"

export function EnvironmentChangesStatus() {
  return <PlanStatusCard title="Environment changes" />
}`,

  environmentExpanded: `import {
  PlanStatusCard,
  PlanStatusDiff,
} from "@/components/blocks/plan-status-card"

export function ExpandedEnvironmentChangesStatus() {
  return (
    <PlanStatusCard title="Environment changes" defaultExpanded>
      <PlanStatusDiff filePath="models/usage_events.sql" lines={diffLines} />
    </PlanStatusCard>
  )
}`,

  badges: `import { PlanStatusCard } from "@/components/blocks/plan-status-card"

export function BadgeTones() {
  return (
    <PlanStatusCard
      title="b2b_saas.accounts"
      typeLabel="FULL"
      badges={[
        { label: "Non-breaking", tone: "success" },
        { label: "Schema", tone: "info" },
        { label: "Config", tone: "warning" },
      ]}
    />
  )
}`,

  empty: `import {
  PlanStatusCard,
  PlanStatusDiff,
  PlanStatusImpacts,
} from "@/components/blocks/plan-status-card"

export function EmptyPanels() {
  return (
    <PlanStatusCard title="b2b_saas.empty_feature" defaultExpanded>
      <PlanStatusDiff lines={[]} />
      <PlanStatusImpacts impacts={[]} />
    </PlanStatusCard>
  )
}`,

  density: `import { PlanStatusCard } from "@/components/blocks/plan-status-card"

export function CompactStatus() {
  return (
    <PlanStatusCard
      title="b2b_saas.users"
      typeLabel="FULL"
      size="sm"
      badges={[{ label: "Breaking", tone: "error" }]}
    />
  )
}`,

  skeleton: `import { PlanStatusCardSkeleton } from "@/components/blocks/plan-status-card"

export function LoadingStatus() {
  return <PlanStatusCardSkeleton />
}`,

  accordion: `"use client"

import * as React from "react"
import { PlanStatusCard } from "@/components/blocks/plan-status-card"

export function StatusAccordion({ items }) {
  const [expandedId, setExpandedId] = React.useState(items[0]?.id)

  return items.map((item) => (
    <PlanStatusCard
      key={item.id}
      {...item}
      expanded={expandedId === item.id}
      selected={expandedId === item.id}
      onExpandedChange={(open) => setExpandedId(open ? item.id : "")}
    />
  ))
}`,

  filter: `"use client"

import * as React from "react"
import { PlanStatusCard } from "@/components/blocks/plan-status-card"

export function FilteredStatusList({ items }) {
  const [filter, setFilter] = React.useState("all")
  const visible = items.filter((item) => filter === "all" || item.filter === filter)

  return (
    <>
      <button type="button" onClick={() => setFilter("breaking")}>Breaking</button>
      {visible.map((item) => (
        <PlanStatusCard key={item.id} title={item.title} badges={item.badges} />
      ))}
    </>
  )
}`,

  compose: `import { PlanCard } from "@/components/blocks/plan-card"
import { PlanStatusCard } from "@/components/blocks/plan-status-card"

export function PlanWithStatusRows() {
  return (
    <PlanCard planId="#9" version="v0.1.3" timestamp="July 1" duration="4.1s" defaultExpanded>
      <PlanStatusCard
        title="b2b_saas.users"
        typeLabel="FULL"
        size="sm"
        badges={[{ label: "Breaking", tone: "error" }]}
      />
    </PlanCard>
  )
}`,
}
