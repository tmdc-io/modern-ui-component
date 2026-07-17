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

  selectable: `"use client"

import * as React from "react"
import { PlanCard } from "@/components/blocks/plan-card"

export function SelectablePlanList() {
  const [selectedId, setSelectedId] = React.useState("#7")

  return (
    <PlanCard
      planId="#7"
      version="v0.1.3"
      timestamp="July 1, 08:15 AM"
      duration="4.1s"
      selected={selectedId === "#7"}
      onSelect={() => setSelectedId("#7")}
    />
  )
}`,

  statuses: `import { PlanCard } from "@/components/blocks/plan-card"

export function PlanStatuses() {
  return (
    <div className="flex flex-col gap-3">
      <PlanCard planId="#11" version="v0.1.4" timestamp="Draft" duration="—" status="draft" />
      <PlanCard planId="#12" version="v0.1.4" startedAt={new Date()} duration="—" status="running" />
      <PlanCard planId="#13" version="v0.1.4" timestamp="July 8" duration="3.2s" status="warning" />
      <PlanCard planId="#14" version="v0.1.4" timestamp="July 8" duration="—" status="cancelled" />
    </div>
  )
}`,

  accordion: `"use client"

import * as React from "react"
import { PlanCard } from "@/components/blocks/plan-card"

export function PlanAccordion({ plans }) {
  const [expandedId, setExpandedId] = React.useState("")

  return plans.map((plan) => (
    <PlanCard
      key={plan.planId}
      {...plan}
      expanded={expandedId === plan.planId}
      onExpandedChange={(open) => setExpandedId(open ? plan.planId : "")}
    />
  ))
}`,

  metricActions: `import { PlanCard } from "@/components/blocks/plan-card"

export function PlanMetricActions() {
  return (
    <PlanCard
      planId="#8"
      version="v0.1.3"
      timestamp="July 5, 05:30 AM"
      duration="2.3s"
      status="error"
      metrics={[
        { label: "Error", value: "2", status: "error", onClick: openErrors },
        { label: "Changes", value: "2", onClick: openChanges },
        { label: "Impacts", value: "7", href: "/plans/8/impacts" },
      ]}
    />
  )
}`,

  density: `import { PlanCard } from "@/components/blocks/plan-card"

export function CompactEmptyPlan() {
  return (
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
  )
}`,

  runPairing: `"use client"

import * as React from "react"
import { PlanCard } from "@/components/blocks/plan-card"
import { RunCard } from "@/components/blocks/run-card"

export function PlanWithRelatedRuns() {
  const [selectedPlan, setSelectedPlan] = React.useState("#7")

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <PlanCard
        planId="#7"
        version="v0.1.3"
        timestamp="July 1"
        duration="4.1s"
        selected={selectedPlan === "#7"}
        onSelect={() => setSelectedPlan("#7")}
      />
      <RunCard
        runId="#10010"
        plan={\`Plan \${selectedPlan}\`}
        timestamp="July 8"
        duration="4.1s"
        size="sm"
      />
    </div>
  )
}`,

  skeleton: `import { PlanCardSkeleton } from "@/components/blocks/plan-card"

export function PlanCardLoading() {
  return <PlanCardSkeleton />
}`,
}
