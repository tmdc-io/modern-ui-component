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
  type PlanStatusDiffLine,
} from "@/components/blocks/plan-status-card"

const diffLines: PlanStatusDiffLine[] = [
  { value: "--- .../usage_events.sql", kind: "info" },
  { value: "+++ .../usage_events.sql", kind: "info" },
  { value: "@@ -33,6 +33,7 @@", kind: "info" },
  { value: "   feature_name,", oldLine: 33, newLine: 33 },
  { value: "   session_duration,", oldLine: 34, newLine: 34 },
  { value: "   event_count,", oldLine: 35, newLine: 35 },
  {
    value: "+  event_count AS new_event_count,",
    kind: "add",
    oldLine: null,
    newLine: 36,
  },
  { value: "   CASE", oldLine: 36, newLine: 37 },
  { value: "     WHEN event_type = 'api_call'", oldLine: 37, newLine: 38 },
  { value: "       THEN event_count * 20", oldLine: 38, newLine: 39 },
  { value: "@@ -53,4 +54,4 @@", kind: "info" },
  { value: "   END AS feature_category", oldLine: 53, newLine: 54 },
  { value: " FROM b2b_saas.usage_events_seed", oldLine: 54, newLine: 55 },
  { value: " WHERE", oldLine: 55, newLine: 56 },
  {
    value: "-  event_date >= CURRENT_DATE - INTERVAL '90 DAYS'",
    kind: "remove",
    oldLine: 56,
    newLine: null,
  },
  {
    value: "+  event_date >= CURRENT_DATE - INTERVAL '30 DAYS'",
    kind: "add",
    oldLine: null,
    newLine: 57,
  },
]

const impacts = [
  { name: "churn_analysis", type: "metric", kind: "metric" as const },
  { name: "arr_growth", type: "metric", kind: "metric" as const },
  {
    name: "usage_without_subscription",
    type: "semantic",
    kind: "semantic" as const,
  },
]

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
      <PlanStatusDiff filePath="models/usage_events.sql" lines={diffLines} />
      <PlanStatusImpacts impacts={impacts} />
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

const errorTrace = \`relation "vulcan__b2b_saas.b2b_saas__users__3157246390" does not exist
  at QueryExecutor.execute (/app/services/query-executor.js:142:18)
  at PlanFeaturesService.getPlanFeatures (/app/services/plan-features.js:87:24)
  at async RequestHandler.handle (/app/api/plan-features.js:36:16)\`

export function ExpandedUndefinedTableStatus() {
  return (
    <PlanStatusCard
      title="b2b_saas.users_enriched"
      typeLabel="FULL"
      tone="error"
      badges={[{ label: "Undefined table", tone: "error" }]}
      defaultExpanded
    >
      <PlanStatusError>{errorTrace}</PlanStatusError>
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
  type PlanStatusDiffLine,
} from "@/components/blocks/plan-status-card"

const diffLines: PlanStatusDiffLine[] = [
  { value: "--- .../usage_events.sql", kind: "info" },
  { value: "+++ .../usage_events.sql", kind: "info" },
  { value: "@@ -33,6 +33,7 @@", kind: "info" },
  { value: "   feature_name,", oldLine: 33, newLine: 33 },
  { value: "   session_duration,", oldLine: 34, newLine: 34 },
  { value: "   event_count,", oldLine: 35, newLine: 35 },
  {
    value: "+  event_count AS new_event_count,",
    kind: "add",
    oldLine: null,
    newLine: 36,
  },
  { value: "   CASE", oldLine: 36, newLine: 37 },
  { value: "     WHEN event_type = 'api_call'", oldLine: 37, newLine: 38 },
  { value: "       THEN event_count * 20", oldLine: 38, newLine: 39 },
  { value: "@@ -53,4 +54,4 @@", kind: "info" },
  { value: "   END AS feature_category", oldLine: 53, newLine: 54 },
  { value: " FROM b2b_saas.usage_events_seed", oldLine: 54, newLine: 55 },
  { value: " WHERE", oldLine: 55, newLine: 56 },
  {
    value: "-  event_date >= CURRENT_DATE - INTERVAL '90 DAYS'",
    kind: "remove",
    oldLine: 56,
    newLine: null,
  },
  {
    value: "+  event_date >= CURRENT_DATE - INTERVAL '30 DAYS'",
    kind: "add",
    oldLine: null,
    newLine: 57,
  },
]

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
    <div className="flex flex-col gap-3">
      <PlanStatusCard
        title="b2b_saas.accounts"
        typeLabel="FULL"
        badges={[
          { label: "Non-breaking", tone: "success" },
          { label: "Schema", tone: "info" },
        ]}
      />
      <PlanStatusCard
        title="b2b_saas.config"
        typeLabel="VIEW"
        badges={[
          { label: "Config", tone: "warning" },
          { label: "Backfill", tone: "muted" },
        ]}
      />
    </div>
  )
}`,

  empty: `import {
  PlanStatusCard,
  PlanStatusDiff,
  PlanStatusImpacts,
} from "@/components/blocks/plan-status-card"

export function EmptyPanels() {
  return (
    <PlanStatusCard
      title="b2b_saas.empty_feature"
      typeLabel="FULL"
      badges={[{ label: "Non-breaking", tone: "success" }]}
      defaultExpanded
    >
      <PlanStatusDiff lines={[]} />
      <PlanStatusImpacts impacts={[]} />
    </PlanStatusCard>
  )
}`,

  density: `import { PlanStatusCard } from "@/components/blocks/plan-status-card"

export function CompactStatus() {
  return (
    <div className="flex flex-col gap-3">
      <PlanStatusCard
        title="b2b_saas.users"
        typeLabel="FULL"
        badges={[{ label: "Breaking", tone: "error" }]}
      />
      <PlanStatusCard
        title="b2b_saas.users"
        typeLabel="FULL"
        size="sm"
        badges={[{ label: "Breaking", tone: "error" }]}
      />
    </div>
  )
}`,

  skeleton: `import { PlanStatusCardSkeleton } from "@/components/blocks/plan-status-card"

export function LoadingStatus() {
  return (
    <div className="flex flex-col gap-3">
      <PlanStatusCardSkeleton />
      <PlanStatusCardSkeleton size="sm" />
    </div>
  )
}`,

  accordion: `"use client"

import * as React from "react"
import {
  PlanStatusCard,
  PlanStatusDiff,
  PlanStatusImpacts,
  type PlanStatusDiffLine,
} from "@/components/blocks/plan-status-card"

const diffLines: PlanStatusDiffLine[] = [
  { value: "@@ -33,6 +33,7 @@", kind: "info" },
  {
    value: "+  event_count AS new_event_count,",
    kind: "add",
    newLine: 36,
  },
  {
    value: "-  event_date >= CURRENT_DATE - INTERVAL '90 DAYS'",
    kind: "remove",
    oldLine: 56,
  },
]

const impacts = [
  { name: "churn_analysis", type: "metric", kind: "metric" as const },
  { name: "arr_growth", type: "metric", kind: "metric" as const },
]

const items = [
  {
    id: "users",
    title: "b2b_saas.users",
    typeLabel: "FULL",
    badges: [
      { label: "Breaking", tone: "error" as const },
      { label: "Backfill", tone: "muted" as const },
    ],
  },
  {
    id: "accounts",
    title: "b2b_saas.accounts",
    typeLabel: "FULL",
    badges: [{ label: "Non-breaking", tone: "success" as const }],
  },
  {
    id: "env",
    title: "Environment changes",
    badges: [] as { label: string; tone: "muted" }[],
  },
]

export function StatusAccordion() {
  const [expandedId, setExpandedId] = React.useState("users")

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <PlanStatusCard
          key={item.id}
          title={item.title}
          typeLabel={"typeLabel" in item ? item.typeLabel : undefined}
          badges={item.badges}
          expanded={expandedId === item.id}
          selected={expandedId === item.id}
          onExpandedChange={(open) => setExpandedId(open ? item.id : "")}
        >
          {item.id === "env" ? (
            <PlanStatusDiff
              filePath="models/usage_events.sql"
              lines={diffLines}
            />
          ) : (
            <>
              <PlanStatusDiff
                filePath="models/usage_events.sql"
                lines={diffLines}
              />
              <PlanStatusImpacts impacts={impacts} />
            </>
          )}
        </PlanStatusCard>
      ))}
    </div>
  )
}`,

  filter: `"use client"

import * as React from "react"
import { PlanStatusCard } from "@/components/blocks/plan-status-card"

type FilterKey = "all" | "breaking" | "errors" | "environment"

const items = [
  {
    id: "users",
    title: "b2b_saas.users",
    filter: "breaking" as const,
    typeLabel: "FULL",
    badges: [
      { label: "Breaking", tone: "error" as const },
      { label: "Backfill", tone: "muted" as const },
    ],
  },
  {
    id: "enriched",
    title: "b2b_saas.users_enriched",
    filter: "errors" as const,
    typeLabel: "FULL",
    tone: "error" as const,
    badges: [{ label: "Undefined table", tone: "error" as const }],
  },
  {
    id: "env",
    title: "Environment changes",
    filter: "environment" as const,
    badges: [] as { label: string; tone: "muted" }[],
  },
]

const filters: { id: FilterKey; label: string }[] = [
  { id: "all", label: "All" },
  { id: "breaking", label: "Breaking" },
  { id: "errors", label: "Errors" },
  { id: "environment", label: "Environment" },
]

export function FilteredStatusList() {
  const [filter, setFilter] = React.useState<FilterKey>("all")
  const visible = items.filter(
    (item) => filter === "all" || item.filter === filter
  )

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {filters.map((chip) => (
          <button
            key={chip.id}
            type="button"
            className={
              filter === chip.id
                ? "border-dark-teal bg-teal-bg-2 text-dark-teal rounded-full border px-3 py-1 text-xs"
                : "border-grey-8 text-black-secondary hover:bg-cream-bg-3 rounded-full border px-3 py-1 text-xs"
            }
            onClick={() => setFilter(chip.id)}
          >
            {chip.label}
          </button>
        ))}
      </div>
      {visible.map((item) => (
        <PlanStatusCard
          key={item.id}
          title={item.title}
          typeLabel={"typeLabel" in item ? item.typeLabel : undefined}
          tone={"tone" in item ? item.tone : undefined}
          badges={item.badges}
        />
      ))}
    </div>
  )
}`,

  urlFilter: `"use client"

import * as React from "react"
import { PlanStatusCard } from "@/components/blocks/plan-status-card"

type FilterKey = "all" | "breaking" | "errors" | "environment"

const items = [
  {
    id: "users",
    title: "b2b_saas.users",
    filter: "breaking" as const,
    typeLabel: "FULL",
    badges: [
      { label: "Breaking", tone: "error" as const },
      { label: "Backfill", tone: "muted" as const },
    ],
  },
  {
    id: "enriched",
    title: "b2b_saas.users_enriched",
    filter: "errors" as const,
    typeLabel: "FULL",
    tone: "error" as const,
    badges: [{ label: "Undefined table", tone: "error" as const }],
  },
  {
    id: "env",
    title: "Environment changes",
    filter: "environment" as const,
    badges: [] as { label: string; tone: "muted" }[],
  },
]

const filters: { id: FilterKey; label: string }[] = [
  { id: "all", label: "All" },
  { id: "breaking", label: "Breaking" },
  { id: "errors", label: "Errors" },
  { id: "environment", label: "Environment" },
]

function readStatusFilter(): FilterKey {
  const value = new URLSearchParams(window.location.search).get("status")
  if (value === "breaking" || value === "errors" || value === "environment") {
    return value
  }
  return "all"
}

export function UrlFilteredStatusList() {
  const [filter, setFilter] = React.useState<FilterKey>(readStatusFilter)

  React.useEffect(() => {
    const onPopState = () => setFilter(readStatusFilter())
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  const setFilterInUrl = (next: FilterKey) => {
    setFilter(next)
    const url = new URL(window.location.href)
    if (next === "all") url.searchParams.delete("status")
    else url.searchParams.set("status", next)
    window.history.replaceState({}, "", url)
  }

  const visible = items.filter(
    (item) => filter === "all" || item.filter === filter
  )

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {filters.map((chip) => (
          <button
            key={chip.id}
            type="button"
            className={
              filter === chip.id
                ? "border-dark-teal bg-teal-bg-2 text-dark-teal rounded-full border px-3 py-1 text-xs"
                : "border-grey-8 text-black-secondary hover:bg-cream-bg-3 rounded-full border px-3 py-1 text-xs"
            }
            onClick={() => setFilterInUrl(chip.id)}
          >
            {chip.label}
          </button>
        ))}
      </div>
      {visible.map((item) => (
        <PlanStatusCard
          key={item.id}
          title={item.title}
          typeLabel={"typeLabel" in item ? item.typeLabel : undefined}
          tone={"tone" in item ? item.tone : undefined}
          badges={item.badges}
        />
      ))}
    </div>
  )
}`,

  compose: `import { PlanCard } from "@/components/blocks/plan-card"
import {
  PlanStatusCard,
  PlanStatusDiff,
  PlanStatusImpacts,
  type PlanStatusDiffLine,
} from "@/components/blocks/plan-status-card"

const diffLines: PlanStatusDiffLine[] = [
  { value: "@@ -33,6 +33,7 @@", kind: "info" },
  {
    value: "+  event_count AS new_event_count,",
    kind: "add",
    newLine: 36,
  },
  {
    value: "-  event_date >= CURRENT_DATE - INTERVAL '90 DAYS'",
    kind: "remove",
    oldLine: 56,
  },
]

const impacts = [
  { name: "churn_analysis", type: "metric", kind: "metric" as const },
  { name: "arr_growth", type: "metric", kind: "metric" as const },
]

export function PlanWithStatusRows() {
  return (
    <PlanCard
      planId="#9"
      version="v0.1.3"
      timestamp="July 1, 08:15 AM"
      duration="4.1s"
      defaultExpanded
      className="max-w-3xl"
      detailsHref="#plan-details"
      metrics={[
        { label: "Changes", value: "3" },
        { label: "Impacts", value: "7" },
      ]}
      detailMetrics={[
        { label: "Modified", value: "2" },
        { label: "Added", value: "1" },
        { label: "Removed", value: "0" },
        { label: "Impacts", value: "7" },
        { label: "Backfills", value: "1" },
      ]}
    >
      <PlanStatusCard
        title="b2b_saas.users"
        typeLabel="FULL"
        size="sm"
        defaultExpanded
        badges={[
          { label: "Breaking", tone: "error" },
          { label: "Backfill", tone: "muted" },
        ]}
      >
        <PlanStatusDiff filePath="models/usage_events.sql" lines={diffLines} />
        <PlanStatusImpacts impacts={impacts} />
      </PlanStatusCard>
      <PlanStatusCard title="Environment changes" size="sm" />
    </PlanCard>
  )
}`,
}
