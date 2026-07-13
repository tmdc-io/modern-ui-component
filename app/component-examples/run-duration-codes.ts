export const runDurationCodes = {
  install: `npx shadcn@latest add tmdc-io/modern-ui-component/run-duration`,

  props: `type RunDurationStatus = "normal" | "anomaly" | "selected"

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
  baseline?: number              // default 56
  selectedId?: string
  defaultSelectedId?: string
  onSelectedChange?: (id: string) => void
  className?: string
}`,

  default: `"use client"

import { RunDuration } from "@/components/blocks/run-duration"

export function RunHistoryPanel() {
  return (
    <RunDuration
      title="Run duration"
      baseline={56}
      defaultSelectedId="r10"
    />
  )
}`,

  controlled: `"use client"

import * as React from "react"
import { RunDuration } from "@/components/blocks/run-duration"

export function RunHistoryPanel() {
  const [selectedId, setSelectedId] = React.useState("r10")

  return (
    <RunDuration
      selectedId={selectedId}
      onSelectedChange={setSelectedId}
      baseline={56}
    />
  )
}`,
}
