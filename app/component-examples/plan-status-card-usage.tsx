"use client"

import * as React from "react"

import { PlanCard } from "@/registry/default/blocks/plan-card/plan-card"
import {
  PlanStatusCard,
  PlanStatusCardSkeleton,
  PlanStatusDiff,
  PlanStatusError,
  PlanStatusImpacts,
  type PlanStatusDiffLine,
} from "@/registry/default/blocks/plan-status-card/plan-status-card"

const diffLines: PlanStatusDiffLine[] = [
  {
    value: "--- .../usage_events.sql",
    kind: "info",
    oldLine: null,
    newLine: null,
  },
  {
    value: "+++ .../usage_events.sql",
    kind: "info",
    oldLine: null,
    newLine: null,
  },
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

const errorTrace = `relation "vulcan__b2b_saas.b2b_saas__users__3157246390" does not exist
  at QueryExecutor.execute (/app/services/query-executor.js:142:18)
  at PlanFeaturesService.getPlanFeatures (/app/services/plan-features.js:87:24)
  at async RequestHandler.handle (/app/api/plan-features.js:36:16)`

function PreviewShell({
  children,
  hint,
}: {
  children: React.ReactNode
  hint?: string
}) {
  return (
    <div className="bg-muted/30 flex w-full flex-col items-center gap-3 rounded-lg p-5">
      <div className="w-full max-w-3xl">{children}</div>
      {hint ? (
        <p className="text-muted-foreground text-center text-xs">{hint}</p>
      ) : null}
    </div>
  )
}

export function PlanStatusBreakingCollapsedPreview() {
  return (
    <PreviewShell>
      <PlanStatusCard
        title="b2b_saas.users"
        typeLabel="FULL"
        badges={[
          { label: "Breaking", tone: "error" },
          { label: "Backfill", tone: "muted" },
        ]}
      />
    </PreviewShell>
  )
}

export function PlanStatusSelectedPreview() {
  return (
    <PreviewShell hint="Selected uses teal surface and dark teal border.">
      <PlanStatusCard
        title="b2b_saas.users"
        typeLabel="FULL"
        selected
        badges={[
          { label: "Breaking", tone: "error" },
          { label: "Backfill", tone: "muted" },
        ]}
      />
    </PreviewShell>
  )
}

export function PlanStatusBreakingExpandedPreview() {
  return (
    <PreviewShell>
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
          lines={diffLines}
        />
        <PlanStatusImpacts impacts={impacts} />
      </PlanStatusCard>
    </PreviewShell>
  )
}

export function PlanStatusUndefinedCollapsedPreview() {
  return (
    <PreviewShell>
      <PlanStatusCard
        title="b2b_saas.users_enriched"
        typeLabel="FULL"
        tone="error"
        badges={[{ label: "Undefined table", tone: "error" }]}
      />
    </PreviewShell>
  )
}

export function PlanStatusUndefinedExpandedPreview() {
  return (
    <PreviewShell>
      <PlanStatusCard
        title="b2b_saas.users_enriched"
        typeLabel="FULL"
        tone="error"
        badges={[{ label: "Undefined table", tone: "error" }]}
        defaultExpanded
      >
        <PlanStatusError>{errorTrace}</PlanStatusError>
      </PlanStatusCard>
    </PreviewShell>
  )
}

export function PlanStatusEnvironmentCollapsedPreview() {
  return (
    <PreviewShell>
      <PlanStatusCard title="Environment changes" />
    </PreviewShell>
  )
}

export function PlanStatusEnvironmentExpandedPreview() {
  return (
    <PreviewShell>
      <PlanStatusCard title="Environment changes" defaultExpanded>
        <PlanStatusDiff
          filePath="models/usage_events.sql"
          lines={diffLines}
        />
      </PlanStatusCard>
    </PreviewShell>
  )
}

export function PlanStatusBadgesPreview() {
  return (
    <PreviewShell>
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
    </PreviewShell>
  )
}

export function PlanStatusEmptyPreview() {
  return (
    <PreviewShell>
      <PlanStatusCard
        title="b2b_saas.empty_feature"
        typeLabel="FULL"
        badges={[{ label: "Non-breaking", tone: "success" }]}
        defaultExpanded
      >
        <PlanStatusDiff lines={[]} />
        <PlanStatusImpacts impacts={[]} />
      </PlanStatusCard>
    </PreviewShell>
  )
}

export function PlanStatusDensityPreview() {
  return (
    <PreviewShell>
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
    </PreviewShell>
  )
}

export function PlanStatusSkeletonPreview() {
  return (
    <PreviewShell>
      <div className="flex flex-col gap-3">
        <PlanStatusCardSkeleton />
        <PlanStatusCardSkeleton size="sm" />
      </div>
    </PreviewShell>
  )
}

const accordionItems = [
  {
    id: "users",
    title: "b2b_saas.users",
    badges: [
      { label: "Breaking", tone: "error" as const },
      { label: "Backfill", tone: "muted" as const },
    ],
  },
  {
    id: "accounts",
    title: "b2b_saas.accounts",
    badges: [{ label: "Non-breaking", tone: "success" as const }],
  },
  {
    id: "env",
    title: "Environment changes",
    badges: [] as { label: string; tone: "muted" }[],
  },
]

export function PlanStatusAccordionPreview() {
  const [expandedId, setExpandedId] = React.useState("users")

  return (
    <PreviewShell hint="Only one status card stays expanded.">
      <div className="flex flex-col gap-3">
        {accordionItems.map((item) => (
          <PlanStatusCard
            key={item.id}
            title={item.title}
            typeLabel={item.id === "env" ? undefined : "FULL"}
            badges={item.badges}
            expanded={expandedId === item.id}
            onExpandedChange={(open) => setExpandedId(open ? item.id : "")}
            selected={expandedId === item.id}
          >
            {item.id === "env" ? (
              <PlanStatusDiff filePath="models/usage_events.sql" lines={diffLines} />
            ) : (
              <>
                <PlanStatusDiff filePath="models/usage_events.sql" lines={diffLines} />
                <PlanStatusImpacts impacts={impacts} />
              </>
            )}
          </PlanStatusCard>
        ))}
      </div>
    </PreviewShell>
  )
}

type FilterKey = "all" | "breaking" | "errors" | "environment"

const filterItems = [
  {
    id: "users",
    title: "b2b_saas.users",
    filter: "breaking" as const,
    badges: [
      { label: "Breaking", tone: "error" as const },
      { label: "Backfill", tone: "muted" as const },
    ],
  },
  {
    id: "enriched",
    title: "b2b_saas.users_enriched",
    filter: "errors" as const,
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

export function PlanStatusFilterPreview() {
  const [filter, setFilter] = React.useState<FilterKey>("all")
  const filters: { id: FilterKey; label: string }[] = [
    { id: "all", label: "All" },
    { id: "breaking", label: "Breaking" },
    { id: "errors", label: "Errors" },
    { id: "environment", label: "Environment" },
  ]

  const visible = filterItems.filter(
    (item) => filter === "all" || item.filter === filter
  )

  return (
    <PreviewShell>
      <div className="flex w-full flex-col gap-3">
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
        <div className="flex flex-col gap-3">
          {visible.map((item) => (
            <PlanStatusCard
              key={item.id}
              title={item.title}
              typeLabel={item.id === "env" ? undefined : "FULL"}
              tone={item.tone}
              badges={item.badges}
            />
          ))}
        </div>
      </div>
    </PreviewShell>
  )
}

/** Syncs filter chip state with ?status= in the URL (demo using History API). */
export function PlanStatusUrlFilterPreview() {
  const filters: { id: FilterKey; label: string }[] = [
    { id: "all", label: "All" },
    { id: "breaking", label: "Breaking" },
    { id: "errors", label: "Errors" },
    { id: "environment", label: "Environment" },
  ]

  const readFilter = React.useCallback((): FilterKey => {
    if (typeof window === "undefined") return "all"
    const value = new URLSearchParams(window.location.search).get("status")
    if (
      value === "breaking" ||
      value === "errors" ||
      value === "environment"
    ) {
      return value
    }
    return "all"
  }, [])

  const [filter, setFilter] = React.useState<FilterKey>(readFilter)

  React.useEffect(() => {
    const onPopState = () => setFilter(readFilter())
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [readFilter])

  const setFilterInUrl = (next: FilterKey) => {
    setFilter(next)
    const url = new URL(window.location.href)
    if (next === "all") url.searchParams.delete("status")
    else url.searchParams.set("status", next)
    window.history.replaceState({}, "", url)
  }

  const visible = filterItems.filter(
    (item) => filter === "all" || item.filter === filter
  )

  return (
    <PreviewShell hint='Filter is mirrored to ?status= in the URL (try Back/Forward).'>
      <div className="flex w-full flex-col gap-3">
        <p className="text-muted-foreground text-xs">
          Current query:{" "}
          <code className="bg-muted rounded px-1.5 py-0.5">
            {filter === "all" ? "(none)" : `?status=${filter}`}
          </code>
        </p>
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
        <div className="flex flex-col gap-3">
          {visible.map((item) => (
            <PlanStatusCard
              key={item.id}
              title={item.title}
              typeLabel={item.id === "env" ? undefined : "FULL"}
              tone={item.tone}
              badges={item.badges}
            />
          ))}
        </div>
      </div>
    </PreviewShell>
  )
}

export function PlanStatusComposePreview() {
  return (
    <PreviewShell hint="Status cards nested inside an expanded Plan Card.">
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
          badges={[
            { label: "Breaking", tone: "error" },
            { label: "Backfill", tone: "muted" },
          ]}
        />
        <PlanStatusCard title="Environment changes" size="sm" />
      </PlanCard>
    </PreviewShell>
  )
}
