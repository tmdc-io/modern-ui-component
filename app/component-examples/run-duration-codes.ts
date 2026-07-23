export const runDurationCodes = {
  install: `npx shadcn@latest add @modernui/run-duration
npx shadcn@latest add tmdc-io/modern-ui-component/run-duration`,

  props: `/**
 * RunDuration types
 * -----------------
 * status:
 * - "normal"   teal bar
 * - "anomaly"  pink / warn bar (duration outliers)
 * - "selected" used when the bar matches selectedId (column highlight)
 *
 * baseline: dashed reference line (minutes). Default 56.
 * Selection: uncontrolled defaultSelectedId, or selectedId + onSelectedChange.
 */
type RunDurationStatus = "normal" | "anomaly" | "selected"

type RunDurationRun = {
  id: string
  date: string
  time: string
  duration: number
  durationLabel: string
  status: RunDurationStatus
}

type RunDurationProps = {
  title?: string
  runs?: RunDurationRun[]
  baseline?: number
  selectedId?: string
  defaultSelectedId?: string
  onSelectedChange?: (id: string) => void
  className?: string
}`,

  default: `"use client"

import { RunDuration, type RunDurationRun } from "@/components/blocks/run-duration"

/**
 * Default run duration chart
 * --------------------------
 * - Click a bar to select a run (uncontrolled via defaultSelectedId)
 * - status "anomaly" paints warn/pink bars for outliers
 * - baseline draws the dashed reference line across the chart
 * - durationLabel is the text above each bar (e.g. "78m")
 *
 * Tip: keep status="selected" on the run you expect to highlight, or rely
 * on selectedId / defaultSelectedId — the chart syncs visual selection.
 */
const runs: RunDurationRun[] = [
  { id: "r1", date: "Mar 15, 2027", time: "11:42", duration: 29, durationLabel: "29m", status: "normal" },
  { id: "r2", date: "Sep 3, 2025", time: "17:30", duration: 20, durationLabel: "20m", status: "normal" },
  { id: "r3", date: "Jun 12, 2025", time: "09:15", duration: 95, durationLabel: "95m", status: "normal" },
  { id: "r4", date: "Feb 28, 2025", time: "14:50", duration: 21, durationLabel: "21m", status: "normal" },
  { id: "r5", date: "Dec 11, 2024", time: "22:05", duration: 94, durationLabel: "94m", status: "normal" },
  { id: "r6", date: "Oct 22, 2024", time: "06:40", duration: 72, durationLabel: "72m", status: "anomaly" },
  { id: "r7", date: "Aug 19, 2024", time: "13:22", duration: 47, durationLabel: "47m", status: "anomaly" },
  { id: "r8", date: "May 30, 2024", time: "19:18", duration: 84, durationLabel: "84m", status: "normal" },
  { id: "r9", date: "Mar 8, 2024", time: "08:55", duration: 38, durationLabel: "38m", status: "normal" },
  { id: "r10", date: "Jul 7, 2026", time: "16:34", duration: 78, durationLabel: "78m", status: "selected" },
]

export function RunHistoryPanel() {
  return (
    <RunDuration
      title="Run duration"
      runs={runs}
      baseline={56}
      defaultSelectedId="r10"
      onSelectedChange={(id) => {
        // e.g. loadRunDetail(id) or sync with RunCard selection
        console.log("selected run", id)
      }}
    />
  )
}`,

  controlled: `"use client"

import * as React from "react"

import { RunDuration, type RunDurationRun } from "@/components/blocks/run-duration"

/**
 * Controlled selection
 * --------------------
 * Parent owns selectedId so you can pair this chart with RunCard,
 * RunMetrics, or a detail drawer. onSelectedChange fires on bar click.
 *
 * Anomaly bars stay warn-colored even when not selected; the selected
 * column gets the elevated highlight treatment.
 */
const runs: RunDurationRun[] = [
  { id: "r1", date: "Mar 15, 2027", time: "11:42", duration: 29, durationLabel: "29m", status: "normal" },
  { id: "r6", date: "Oct 22, 2024", time: "06:40", duration: 72, durationLabel: "72m", status: "anomaly" },
  { id: "r7", date: "Aug 19, 2024", time: "13:22", duration: 47, durationLabel: "47m", status: "anomaly" },
  { id: "r10", date: "Jul 7, 2026", time: "16:34", duration: 78, durationLabel: "78m", status: "selected" },
]

export function ControlledRunDuration() {
  const [selectedId, setSelectedId] = React.useState("r10")
  const selected = runs.find((run) => run.id === selectedId)

  return (
    <div className="flex flex-col gap-3">
      <RunDuration
        title="Run duration"
        runs={runs}
        baseline={56}
        selectedId={selectedId}
        onSelectedChange={setSelectedId}
      />
      <p className="text-muted-foreground text-xs">
        Selected:{" "}
        <span className="text-foreground font-medium">
          {selected
            ? \`\${selected.date} · \${selected.time} · \${selected.durationLabel} (\${selected.status})\`
            : selectedId}
        </span>
      </p>
    </div>
  )
}`,
}
