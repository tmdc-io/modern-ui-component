"use client"

import * as React from "react"

import { RunDuration } from "@/registry/default/blocks/run-duration/run-duration"

export function RunDurationDefaultPreview() {
  return (
    <div className="bg-card w-full rounded-lg border border-grey-8 p-8">
      <RunDuration />
    </div>
  )
}

export function RunDurationInteractivePreview() {
  const [selectedId, setSelectedId] = React.useState("r10")

  return (
    <div className="bg-card w-full rounded-lg border border-grey-8 p-8">
      <RunDuration selectedId={selectedId} onSelectedChange={setSelectedId} />
    </div>
  )
}
