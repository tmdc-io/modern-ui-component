export const runCardCodes = {
  install: `npx shadcn@latest add @modernui/run-card
npx shadcn@latest add tmdc-io/modern-ui-component/run-card`,

  success: `import { RunCard } from "@/components/blocks/run-card"

export function SuccessRunCard() {
  return (
    <RunCard
      runId="#10010"
      plan="Plan #01"
      timestamp="Jul 01, 09:15 AM"
      duration="4.1s"
      status="success"
      metrics={[
        { label: "Models", value: "7" },
        { label: "DQ", value: "12/16" },
      ]}
    />
  )
}`,

  hover: `import { RunCard } from "@/components/blocks/run-card"

export function HoverableRunCard() {
  return (
    <RunCard
      runId="#10009"
      plan="Plan #02"
      timestamp="Jul 02, 12:22 PM"
      duration="3.8s"
      status="error"
      metrics={[
        { label: "Error", value: "3", status: "error" },
        { label: "Models", value: "5" },
        { label: "DQ", value: "13/17" },
      ]}
    />
  )
}`,

  selected: `import { RunCard } from "@/components/blocks/run-card"

export function SelectedRunCard() {
  return (
    <RunCard
      runId="#10010"
      plan="Plan #01"
      timestamp="Jul 01, 09:15 AM"
      duration="4.1s"
      status="success"
      selected
      metrics={[
        { label: "Models", value: "7" },
        { label: "DQ", value: "12/16" },
      ]}
    />
  )
}`,

  error: `import { RunCard } from "@/components/blocks/run-card"

export function ErrorRunCard() {
  return (
    <RunCard
      runId="#10005"
      plan="Plan #06"
      timestamp="Jul 06, 06:11 PM"
      duration="3.6s"
      status="error"
      metrics={[
        { label: "Error", value: "2", status: "error" },
        { label: "Models", value: "5" },
        { label: "DQ", value: "12/16" },
      ]}
    />
  )
}`,

  stack: `import { RunCard } from "@/components/blocks/run-card"

const runs = [
  {
    runId: "#10010",
    plan: "Plan #01",
    timestamp: "Jul 01, 09:15 AM",
    duration: "4.1s",
    status: "success" as const,
    metrics: [
      { label: "Models", value: "7" },
      { label: "DQ", value: "12/16" },
    ],
  },
  {
    runId: "#10009",
    plan: "Plan #02",
    timestamp: "Jul 02, 12:22 PM",
    duration: "3.8s",
    status: "error" as const,
    metrics: [
      { label: "Error", value: "3", status: "error" as const },
      { label: "Models", value: "5" },
      { label: "DQ", value: "13/17" },
    ],
  },
]

export function RunCardStack() {
  return (
    <div className="flex flex-col gap-4">
      {runs.map((run) => (
        <RunCard key={run.runId} {...run} />
      ))}
    </div>
  )
}`,

  statuses: `import { RunCard } from "@/components/blocks/run-card"

export function RunCardStatuses() {
  return (
    <div className="flex flex-col gap-3">
      <RunCard
        runId="#10011"
        plan="Plan #03"
        startedAt={new Date(Date.now() - 2 * 60 * 60 * 1000)}
        duration="—"
        status="running"
        metrics={[
          { label: "Models", value: "4" },
          { label: "DQ", value: "8/12" },
        ]}
      />
      <RunCard
        runId="#10012"
        plan="Plan #04"
        timestamp="Queued"
        duration="—"
        status="queued"
        metrics={[]}
      />
      <RunCard
        runId="#10013"
        plan="Plan #05"
        timestamp="Jul 03, 03:40 PM"
        duration="2.1s"
        status="warning"
        metrics={[
          { label: "Warning", value: "1", status: "error" },
          { label: "Models", value: "6" },
          { label: "DQ", value: "11/14" },
        ]}
      />
      <RunCard
        runId="#10014"
        plan="Plan #07"
        timestamp="Jul 04, 09:00 AM"
        duration="—"
        status="cancelled"
        metrics={[]}
      />
    </div>
  )
}`,

  selectable: `"use client"

import * as React from "react"
import { RunCard } from "@/components/blocks/run-card"

const runs = [
  {
    runId: "#10010",
    plan: "Plan #01",
    timestamp: "Jul 01, 09:15 AM",
    duration: "4.1s",
    status: "success" as const,
    metrics: [
      { label: "Models", value: "7" },
      { label: "DQ", value: "12/16" },
    ],
  },
  {
    runId: "#10009",
    plan: "Plan #02",
    timestamp: "Jul 02, 12:22 PM",
    duration: "3.8s",
    status: "error" as const,
    metrics: [
      { label: "Error", value: "3", status: "error" as const },
      { label: "Models", value: "5" },
      { label: "DQ", value: "13/17" },
    ],
  },
  {
    runId: "#10005",
    plan: "Plan #06",
    timestamp: "Jul 06, 06:11 PM",
    duration: "3.6s",
    status: "error" as const,
    metrics: [
      { label: "Error", value: "2", status: "error" as const },
      { label: "Models", value: "5" },
    ],
  },
]

export function SelectableRunList() {
  const [selectedId, setSelectedId] = React.useState("#10010")

  return (
    <div className="flex flex-col gap-3">
      {runs.map((run) => (
        <RunCard
          key={run.runId}
          {...run}
          selected={selectedId === run.runId}
          onSelect={() => setSelectedId(run.runId)}
        />
      ))}
    </div>
  )
}`,

  metrics: `"use client"

import * as React from "react"
import { RunCard } from "@/components/blocks/run-card"

export function RunCardWithMetricActions() {
  const [message, setMessage] = React.useState("Choose a metric")

  return (
    <div className="flex flex-col items-center gap-3">
      <RunCard
        runId="#10005"
        plan="Plan #06"
        timestamp="Jul 06, 06:11 PM"
        duration="3.6s"
        status="error"
        metrics={[
          {
            label: "Error",
            value: "2",
            status: "error",
            onClick: () => setMessage("Showing errors"),
          },
          { label: "Models", value: "5", href: "/models" },
          {
            label: "DQ",
            value: "12/16",
            onClick: () => setMessage("Showing DQ checks"),
          },
        ]}
      />
      <p className="text-muted-foreground text-xs">{message}</p>
    </div>
  )
}`,

  density: `import { RunCard } from "@/components/blocks/run-card"

export function CompactRunCard() {
  return (
    <div className="flex flex-col gap-3">
      <RunCard
        runId="#10010"
        plan="Plan #01"
        timestamp="Jul 01, 09:15 AM"
        duration="4.1s"
        metrics={[
          { label: "Models", value: "7" },
          { label: "DQ", value: "12/16" },
        ]}
      />
      <RunCard
        runId="#10010"
        plan="Plan #01"
        timestamp="Jul 01, 09:15 AM"
        duration="4.1s"
        size="sm"
        metrics={[
          { label: "Models", value: "7" },
          { label: "DQ", value: "12/16" },
        ]}
      />
    </div>
  )
}`,

  overflow: `import { RunCard } from "@/components/blocks/run-card"

export function RunCardWithOverflow() {
  return (
    <RunCard
      runId="#10020"
      plan="Enterprise customer onboarding validation pipeline (prod-east)"
      timestamp="Jul 07, 02:15 PM"
      duration="12.4s"
      maxVisibleMetrics={3}
      metrics={[
        { label: "Models", value: "12" },
        { label: "DQ", value: "48/52" },
        { label: "Assertions", value: "9" },
        { label: "Eval", value: "2100ms" },
        { label: "Latency", value: "180ms" },
      ]}
    />
  )
}`,

  skeleton: `import { RunCardSkeleton } from "@/components/blocks/run-card"

export function RunCardLoading() {
  return (
    <div className="flex flex-col gap-3">
      <RunCardSkeleton />
      <RunCardSkeleton size="sm" />
    </div>
  )
}`,

  compose: `"use client"

import * as React from "react"
import { RunCard } from "@/components/blocks/run-card"
import { RunMetrics } from "@/components/blocks/run-metrics"

const runs = [
  {
    runId: "#10010",
    plan: "Plan #01",
    timestamp: "Jul 01, 09:15 AM",
    duration: "4.1s",
    status: "success" as const,
    metrics: [
      { label: "Models", value: "7" },
      { label: "DQ", value: "12/16" },
    ],
  },
  {
    runId: "#10009",
    plan: "Plan #02",
    timestamp: "Jul 02, 12:22 PM",
    duration: "3.8s",
    status: "error" as const,
    metrics: [
      { label: "Error", value: "3", status: "error" as const },
      { label: "Models", value: "5" },
      { label: "DQ", value: "13/17" },
    ],
  },
]

export function RunListWithMetrics() {
  const [selectedId, setSelectedId] = React.useState("#10010")

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        {runs.map((run) => (
          <RunCard
            key={run.runId}
            {...run}
            selected={selectedId === run.runId}
            onSelect={() => setSelectedId(run.runId)}
          />
        ))}
      </div>
      <div className="min-w-0 flex-1 rounded-lg border bg-card p-4">
        <p className="text-muted-foreground mb-3 text-xs">
          Metrics for {selectedId}
        </p>
        <RunMetrics columns={3} />
      </div>
    </div>
  )
}`,
}
