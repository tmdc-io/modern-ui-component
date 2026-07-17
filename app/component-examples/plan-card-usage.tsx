"use client"

import * as React from "react"

import {
  PlanCard,
  PlanCardSkeleton,
} from "@/registry/default/blocks/plan-card/plan-card"
import { RunCard } from "@/registry/default/blocks/run-card/run-card"

const successPlan = {
  planId: "#7",
  version: "v0.1.3",
  timestamp: "July 1, 08:15 AM",
  duration: "4.1s",
  status: "success" as const,
  metrics: [
    { label: "Changes", value: "3" },
    { label: "Impacts", value: "7" },
  ],
}

const hoverPlan = {
  planId: "#10",
  version: "v0.1.3",
  timestamp: "July 1, 08:15 AM",
  duration: "4.1s",
  status: "success" as const,
  metrics: [
    { label: "Changes", value: "4" },
    { label: "Impacts", value: "7" },
  ],
}

const errorPlan = {
  planId: "#8",
  version: "v0.1.3",
  timestamp: "July 5, 05:30 AM",
  duration: "2.3s",
  status: "error" as const,
  metrics: [
    { label: "Error", value: "2", status: "error" as const },
    { label: "Changes", value: "2" },
    { label: "Impacts", value: "7" },
  ],
}

const expandedPlan = {
  planId: "#9",
  version: "v0.1.3",
  timestamp: "July 1, 08:15 AM",
  duration: "4.1s",
  status: "success" as const,
  metrics: [
    { label: "Changes", value: "6" },
    { label: "Impacts", value: "7" },
  ],
  detailMetrics: [
    { label: "Modified", value: "2" },
    { label: "Added", value: "2" },
    { label: "Removed", value: "2" },
    { label: "Impacts", value: "7" },
    { label: "Backfills", value: "3" },
  ],
  detailStatuses: [
    { label: "Environment statement", value: "changed" },
    { label: "Requirements", value: "changed" },
  ],
  detailsHref: "#plan-details",
}

function PreviewShell({
  children,
  hint,
}: {
  children: React.ReactNode
  hint?: string
}) {
  return (
    <div className="bg-muted/30 flex w-full flex-col items-center gap-3 rounded-lg p-6">
      {children}
      {hint ? (
        <p className="text-muted-foreground text-center text-xs">{hint}</p>
      ) : null}
    </div>
  )
}

export function PlanCardSuccessPreview() {
  return (
    <PreviewShell>
      <PlanCard {...successPlan} />
    </PreviewShell>
  )
}

export function PlanCardHoverPreview() {
  return (
    <PreviewShell hint="Hover the card to see the cream surface (cream-bg-3).">
      <PlanCard {...hoverPlan} />
    </PreviewShell>
  )
}

export function PlanCardSelectedPreview() {
  return (
    <PreviewShell hint="Selected cards keep the teal surface and dark teal border.">
      <PlanCard {...hoverPlan} selected />
    </PreviewShell>
  )
}

export function PlanCardErrorPreview() {
  return (
    <PreviewShell>
      <PlanCard {...errorPlan} />
    </PreviewShell>
  )
}

export function PlanCardExpandedPreview() {
  return (
    <PreviewShell hint="Expanded by default. Use the chevron to collapse.">
      <PlanCard {...expandedPlan} defaultExpanded />
    </PreviewShell>
  )
}

export function PlanCardStackPreview() {
  return (
    <div className="bg-muted/30 flex w-full flex-col items-center gap-4 rounded-lg p-6">
      <PlanCard {...successPlan} />
      <PlanCard {...hoverPlan} />
      <PlanCard {...errorPlan} />
    </div>
  )
}

export function PlanCardSelectablePreview() {
  const plans = [successPlan, hoverPlan, errorPlan]
  const [selectedId, setSelectedId] = React.useState(successPlan.planId)

  return (
    <PreviewShell hint="Click a card to select it. Selected cards use the teal surface and border.">
      <div className="flex w-full max-w-sm flex-col gap-3">
        {plans.map((plan) => (
          <PlanCard
            key={plan.planId}
            {...plan}
            selected={selectedId === plan.planId}
            onSelect={() => setSelectedId(plan.planId)}
          />
        ))}
      </div>
    </PreviewShell>
  )
}

export function PlanCardAccordionPreview() {
  const plans = [expandedPlan, successPlan, errorPlan]
  const [expandedId, setExpandedId] = React.useState(expandedPlan.planId)

  return (
    <PreviewShell hint="Only one plan stays expanded at a time.">
      <div className="flex w-full max-w-sm flex-col gap-3">
        {plans.map((plan) => (
          <PlanCard
            key={plan.planId}
            {...plan}
            expanded={expandedId === plan.planId}
            onExpandedChange={(expanded) =>
              setExpandedId(expanded ? plan.planId : "")
            }
          />
        ))}
      </div>
    </PreviewShell>
  )
}

export function PlanCardMetricActionsPreview() {
  const [message, setMessage] = React.useState("Choose a metric")

  return (
    <PreviewShell hint={message}>
      <PlanCard
        {...errorPlan}
        metrics={[
          {
            label: "Error",
            value: "2",
            status: "error",
            onClick: () => setMessage("Showing errors"),
          },
          {
            label: "Changes",
            value: "2",
            onClick: () => setMessage("Showing changes"),
          },
          { label: "Impacts", value: "7", href: "#impacts" },
        ]}
      />
    </PreviewShell>
  )
}

export function PlanCardStatusesPreview() {
  const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()

  return (
    <div className="bg-muted/30 flex w-full max-w-sm flex-col gap-3 rounded-lg p-6">
      <PlanCard
        planId="#11"
        version="v0.1.4"
        timestamp="Draft"
        duration="—"
        status="draft"
      />
      <PlanCard
        planId="#12"
        version="v0.1.4"
        startedAt={twoHoursAgo}
        duration="—"
        status="running"
      />
      <PlanCard
        planId="#13"
        version="v0.1.4"
        timestamp="July 8, 10:30 AM"
        duration="3.2s"
        status="warning"
      />
      <PlanCard
        planId="#14"
        version="v0.1.4"
        timestamp="July 8, 11:00 AM"
        duration="—"
        status="cancelled"
      />
    </div>
  )
}

export function PlanCardDensityPreview() {
  return (
    <div className="bg-muted/30 flex w-full max-w-sm flex-col gap-3 rounded-lg p-6">
      <PlanCard {...successPlan} />
      <PlanCard {...successPlan} planId="#7-sm" size="sm" />
      <PlanCard
        {...successPlan}
        planId="#empty"
        size="sm"
        defaultExpanded
        detailMetrics={[]}
        detailStatuses={[]}
      />
    </div>
  )
}

const relatedRuns = {
  "#7": [
    { runId: "#10010", status: "success" as const, duration: "4.1s" },
    { runId: "#10009", status: "error" as const, duration: "3.8s" },
  ],
  "#8": [{ runId: "#10008", status: "error" as const, duration: "2.3s" }],
}

export function PlanCardRunPairingPreview() {
  const [selectedPlan, setSelectedPlan] =
    React.useState<keyof typeof relatedRuns>("#7")

  return (
    <div className="bg-muted/30 w-full rounded-lg p-4">
      <div className="mx-auto grid w-full max-w-4xl gap-4 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          {[successPlan, errorPlan].map((plan) => (
            <PlanCard
              key={plan.planId}
              {...plan}
              selected={selectedPlan === plan.planId}
              onSelect={() =>
                setSelectedPlan(plan.planId as keyof typeof relatedRuns)
              }
            />
          ))}
        </div>
        <div className="rounded-lg border bg-card p-4">
          <p className="text-muted-foreground mb-3 text-xs">
            Runs for plan {selectedPlan}
          </p>
          <div className="flex flex-col gap-3">
            {relatedRuns[selectedPlan].map((run) => (
              <RunCard
                key={run.runId}
                runId={run.runId}
                plan={`Plan ${selectedPlan}`}
                timestamp="July 8, 11:30 AM"
                duration={run.duration}
                status={run.status}
                size="sm"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function PlanCardSkeletonPreview() {
  return (
    <PreviewShell>
      <PlanCardSkeleton />
      <PlanCardSkeleton size="sm" />
    </PreviewShell>
  )
}
