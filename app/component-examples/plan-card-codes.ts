export const planCardCodes = {
  install: `npx shadcn@latest add tmdc-io/modern-ui-component/plan-card`,

  success: `import { PlanCard } from "@/components/blocks/plan-card"

export function SuccessPlanCard() {
  return (
    <PlanCard
      planId="#7"
      version="v0.1.3"
      timestamp="July 1, 08:15 AM"
      duration="4.1s"
      status="success"
      metrics={[
        { label: "Changes", value: "3" },
        { label: "Impacts", value: "7" },
      ]}
    />
  )
}`,

  hover: `import { PlanCard } from "@/components/blocks/plan-card"

export function HoverablePlanCard() {
  return (
    <PlanCard
      planId="#10"
      version="v0.1.3"
      timestamp="July 1, 08:15 AM"
      duration="4.1s"
      status="success"
      metrics={[
        { label: "Changes", value: "4" },
        { label: "Impacts", value: "7" },
      ]}
    />
  )
}`,

  selected: `import { PlanCard } from "@/components/blocks/plan-card"

export function SelectedPlanCard() {
  return (
    <PlanCard
      planId="#10"
      version="v0.1.3"
      timestamp="July 1, 08:15 AM"
      duration="4.1s"
      status="success"
      selected
      metrics={[
        { label: "Changes", value: "4" },
        { label: "Impacts", value: "7" },
      ]}
    />
  )
}`,

  error: `import { PlanCard } from "@/components/blocks/plan-card"

export function ErrorPlanCard() {
  return (
    <PlanCard
      planId="#8"
      version="v0.1.3"
      timestamp="July 5, 05:30 AM"
      duration="2.3s"
      status="error"
      metrics={[
        { label: "Error", value: "2", status: "error" },
        { label: "Changes", value: "2" },
        { label: "Impacts", value: "7" },
      ]}
    />
  )
}`,

  expanded: `import { PlanCard } from "@/components/blocks/plan-card"

export function ExpandedPlanCard() {
  return (
    <PlanCard
      planId="#9"
      version="v0.1.3"
      timestamp="July 1, 08:15 AM"
      duration="4.1s"
      status="success"
      defaultExpanded
      detailsHref="/plans/9"
      metrics={[
        { label: "Changes", value: "6" },
        { label: "Impacts", value: "7" },
      ]}
      detailMetrics={[
        { label: "Modified", value: "2" },
        { label: "Added", value: "2" },
        { label: "Removed", value: "2" },
        { label: "Impacts", value: "7" },
        { label: "Backfills", value: "3" },
      ]}
      detailStatuses={[
        { label: "Environment statement", value: "changed" },
        { label: "Requirements", value: "changed" },
      ]}
    />
  )
}`,

  stack: `import { PlanCard } from "@/components/blocks/plan-card"

const plans = [
  {
    planId: "#7",
    version: "v0.1.3",
    timestamp: "July 1, 08:15 AM",
    duration: "4.1s",
    status: "success" as const,
    metrics: [
      { label: "Changes", value: "3" },
      { label: "Impacts", value: "7" },
    ],
  },
  {
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
  },
]

export function PlanCardStack() {
  return (
    <div className="flex flex-col gap-4">
      {plans.map((plan) => (
        <PlanCard key={plan.planId} {...plan} />
      ))}
    </div>
  )
}`,

  statuses: `import { PlanCard } from "@/components/blocks/plan-card"

export function PlanStatuses() {
  return (
    <div className="flex flex-col gap-3">
      <PlanCard
        planId="#11"
        version="v0.1.4"
        timestamp="Draft"
        duration="—"
        status="draft"
        metrics={[]}
      />
      <PlanCard
        planId="#12"
        version="v0.1.4"
        startedAt={new Date()}
        duration="—"
        status="running"
        metrics={[
          { label: "Changes", value: "2" },
          { label: "Impacts", value: "4" },
        ]}
      />
      <PlanCard
        planId="#13"
        version="v0.1.4"
        timestamp="July 8, 02:10 PM"
        duration="3.2s"
        status="warning"
        metrics={[
          { label: "Warning", value: "1", status: "error" },
          { label: "Changes", value: "3" },
          { label: "Impacts", value: "5" },
        ]}
      />
      <PlanCard
        planId="#14"
        version="v0.1.4"
        timestamp="July 8, 04:00 PM"
        duration="—"
        status="cancelled"
        metrics={[]}
      />
    </div>
  )
}`,

  selectable: `"use client"

import * as React from "react"
import { PlanCard } from "@/components/blocks/plan-card"

const plans = [
  {
    planId: "#7",
    version: "v0.1.3",
    timestamp: "July 1, 08:15 AM",
    duration: "4.1s",
    status: "success" as const,
    metrics: [
      { label: "Changes", value: "3" },
      { label: "Impacts", value: "7" },
    ],
  },
  {
    planId: "#10",
    version: "v0.1.3",
    timestamp: "July 1, 08:15 AM",
    duration: "4.1s",
    status: "success" as const,
    metrics: [
      { label: "Changes", value: "4" },
      { label: "Impacts", value: "7" },
    ],
  },
  {
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
  },
]

export function SelectablePlanList() {
  const [selectedId, setSelectedId] = React.useState("#7")

  return (
    <div className="flex flex-col gap-3">
      {plans.map((plan) => (
        <PlanCard
          key={plan.planId}
          {...plan}
          selected={selectedId === plan.planId}
          onSelect={() => setSelectedId(plan.planId)}
        />
      ))}
    </div>
  )
}`,

  accordion: `"use client"

import * as React from "react"
import { PlanCard } from "@/components/blocks/plan-card"

const plans = [
  {
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
    detailsHref: "/plans/9",
  },
  {
    planId: "#7",
    version: "v0.1.3",
    timestamp: "July 1, 08:15 AM",
    duration: "4.1s",
    status: "success" as const,
    metrics: [
      { label: "Changes", value: "3" },
      { label: "Impacts", value: "7" },
    ],
  },
  {
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
  },
]

export function PlanAccordion() {
  const [expandedId, setExpandedId] = React.useState("#9")

  return (
    <div className="flex flex-col gap-3">
      {plans.map((plan) => (
        <PlanCard
          key={plan.planId}
          {...plan}
          expanded={expandedId === plan.planId}
          onExpandedChange={(open) => setExpandedId(open ? plan.planId : "")}
        />
      ))}
    </div>
  )
}`,

  metricActions: `"use client"

import * as React from "react"
import { PlanCard } from "@/components/blocks/plan-card"

export function PlanMetricActions() {
  const [message, setMessage] = React.useState("Choose a metric")

  return (
    <div className="flex flex-col items-center gap-3">
      <PlanCard
        planId="#8"
        version="v0.1.3"
        timestamp="July 5, 05:30 AM"
        duration="2.3s"
        status="error"
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
          { label: "Impacts", value: "7", href: "/plans/8/impacts" },
        ]}
      />
      <p className="text-muted-foreground text-xs">{message}</p>
    </div>
  )
}`,

  density: `import { PlanCard } from "@/components/blocks/plan-card"

export function CompactEmptyPlan() {
  return (
    <div className="flex flex-col gap-3">
      <PlanCard
        planId="#7"
        version="v0.1.3"
        timestamp="July 1, 08:15 AM"
        duration="4.1s"
        metrics={[
          { label: "Changes", value: "3" },
          { label: "Impacts", value: "7" },
        ]}
      />
      <PlanCard
        planId="#15"
        version="v0.1.4"
        timestamp="July 8"
        duration="1.2s"
        size="sm"
        defaultExpanded
        detailMetrics={[]}
        detailStatuses={[]}
      />
    </div>
  )
}`,

  runPairing: `"use client"

import * as React from "react"
import { PlanCard } from "@/components/blocks/plan-card"
import { RunCard } from "@/components/blocks/run-card"

const relatedRuns = {
  "#7": [
    { runId: "#10010", status: "success" as const, duration: "4.1s" },
    { runId: "#10009", status: "error" as const, duration: "3.8s" },
  ],
  "#8": [{ runId: "#10008", status: "error" as const, duration: "2.3s" }],
}

export function PlanWithRelatedRuns() {
  const [selectedPlan, setSelectedPlan] =
    React.useState<keyof typeof relatedRuns>("#7")

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="flex flex-col gap-3">
        <PlanCard
          planId="#7"
          version="v0.1.3"
          timestamp="July 1, 08:15 AM"
          duration="4.1s"
          selected={selectedPlan === "#7"}
          onSelect={() => setSelectedPlan("#7")}
          metrics={[
            { label: "Changes", value: "3" },
            { label: "Impacts", value: "7" },
          ]}
        />
        <PlanCard
          planId="#8"
          version="v0.1.3"
          timestamp="July 5, 05:30 AM"
          duration="2.3s"
          status="error"
          selected={selectedPlan === "#8"}
          onSelect={() => setSelectedPlan("#8")}
          metrics={[
            { label: "Error", value: "2", status: "error" },
            { label: "Changes", value: "2" },
            { label: "Impacts", value: "7" },
          ]}
        />
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
              plan={\`Plan \${selectedPlan}\`}
              timestamp="July 8, 11:30 AM"
              duration={run.duration}
              status={run.status}
              size="sm"
            />
          ))}
        </div>
      </div>
    </div>
  )
}`,

  skeleton: `import { PlanCardSkeleton } from "@/components/blocks/plan-card"

export function PlanCardLoading() {
  return (
    <div className="flex flex-col gap-3">
      <PlanCardSkeleton />
      <PlanCardSkeleton size="sm" />
    </div>
  )
}`,
}
