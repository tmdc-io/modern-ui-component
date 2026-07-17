"use client"

import * as React from "react"

import {
  demoErrorRun,
  demoHoverRun,
  demoRuns,
  demoSuccessRun,
} from "@/app/component-examples/shared/dataos-demo-data"
import { RunMetrics } from "@/registry/default/blocks/run-metrics/run-metrics"
import {
  RunCard,
  RunCardSkeleton,
} from "@/registry/default/blocks/run-card/run-card"

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

export function RunCardSuccessPreview() {
  return (
    <PreviewShell>
      <RunCard {...demoSuccessRun} />
    </PreviewShell>
  )
}

/** One card — hover for cream surface. */
export function RunCardHoverPreview() {
  return (
    <PreviewShell hint="Hover the card to see the cream surface (cream-bg-3).">
      <RunCard {...demoHoverRun} />
    </PreviewShell>
  )
}

export function RunCardSelectedPreview() {
  return (
    <PreviewShell hint="Selected cards keep the teal surface and dark teal border.">
      <RunCard {...demoSuccessRun} selected />
    </PreviewShell>
  )
}

export function RunCardErrorPreview() {
  return (
    <PreviewShell>
      <RunCard {...demoErrorRun} />
    </PreviewShell>
  )
}

export function RunCardStackPreview() {
  return (
    <div className="bg-muted/30 flex w-full flex-col items-center gap-4 rounded-lg p-6">
      <RunCard {...demoSuccessRun} />
      <RunCard {...demoHoverRun} />
      <RunCard {...demoErrorRun} />
    </div>
  )
}

export function RunCardStatusesPreview() {
  const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
  return (
    <div className="bg-muted/30 flex w-full max-w-sm flex-col gap-3 rounded-lg p-6">
      <RunCard
        runId="#10011"
        plan="Plan #03"
        startedAt={twoHoursAgo}
        duration="—"
        status="running"
        metrics={[{ label: "Models", value: "4" }]}
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
        timestamp="Jul 03, 08:00 AM"
        duration="2.1s"
        status="warning"
        metrics={[{ label: "DQ", value: "10/16", status: "warning" }]}
      />
      <RunCard
        runId="#10014"
        plan="Plan #07"
        timestamp="Jul 04, 10:00 AM"
        duration="—"
        status="cancelled"
      />
    </div>
  )
}

export function RunCardSelectablePreview() {
  const runs = [demoSuccessRun, demoHoverRun, demoErrorRun]
  const [selectedId, setSelectedId] = React.useState(demoSuccessRun.runId)

  return (
    <PreviewShell hint="Click a card to select it. Selected cards use the teal surface and border.">
      <div className="flex w-full max-w-sm flex-col gap-3">
        {runs.map((run) => (
          <RunCard
            key={run.runId}
            {...run}
            selected={selectedId === run.runId}
            onSelect={() => setSelectedId(run.runId)}
          />
        ))}
      </div>
    </PreviewShell>
  )
}

export function RunCardMetricLinksPreview() {
  return (
    <PreviewShell hint="Metric chips with onClick do not activate the card.">
      <RunCard
        {...demoErrorRun}
        onSelect={() => {}}
        selected
        metrics={[
          {
            label: "Error",
            value: "2",
            status: "error",
            onClick: () => {},
          },
          { label: "Models", value: "5", href: "#models" },
          { label: "DQ", value: "12/16" },
        ]}
      />
    </PreviewShell>
  )
}

export function RunCardDensityPreview() {
  return (
    <div className="bg-muted/30 flex w-full max-w-sm flex-col gap-3 rounded-lg p-6">
      <RunCard {...demoSuccessRun} size="default" />
      <RunCard {...demoSuccessRun} runId="#10010-sm" size="sm" />
    </div>
  )
}

export function RunCardOverflowPreview() {
  return (
    <PreviewShell>
      <RunCard
        runId="#10020"
        plan="Enterprise customer onboarding validation pipeline (prod-east)"
        timestamp="Jul 07, 02:15 PM"
        duration="12.4s"
        status="success"
        maxVisibleMetrics={3}
        metrics={[
          { label: "Models", value: "12" },
          { label: "DQ", value: "48/52" },
          { label: "Assertions", value: "9" },
          { label: "Eval", value: "2100ms" },
          { label: "Parallelism", value: "0.82x" },
        ]}
      />
    </PreviewShell>
  )
}

export function RunCardSkeletonPreview() {
  return (
    <div className="bg-muted/30 flex w-full max-w-sm flex-col gap-3 rounded-lg p-6">
      <RunCardSkeleton />
      <RunCardSkeleton size="sm" />
    </div>
  )
}

export function RunCardComposePreview() {
  const [selectedId, setSelectedId] = React.useState(demoSuccessRun.runId)

  return (
    <div className="bg-muted/30 w-full rounded-lg p-4">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 lg:flex-row lg:items-start">
        <div className="flex w-full shrink-0 flex-col gap-3 lg:max-w-xs">
          {demoRuns.map((run) => (
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
    </div>
  )
}
