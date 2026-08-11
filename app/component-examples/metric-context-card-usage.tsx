"use client"

import * as React from "react"

import { MetricContextCard } from "@/registry/default/blocks/metric-context-card/metric-context-card"

export function MetricContextCardDefaultPreview() {
  return (
    <div className="flex w-full justify-center bg-[#f5f5f5] p-6 dark:bg-background">
      <MetricContextCard onClose={() => undefined} onExplore={() => undefined} />
    </div>
  )
}

export function MetricContextCardSmallPreview() {
  return (
    <div className="flex w-full justify-center bg-[#f5f5f5] p-6 dark:bg-background">
      <MetricContextCard
        size="sm"
        onClose={() => undefined}
        onExplore={() => undefined}
      />
    </div>
  )
}

export function MetricContextCardCustomPreview() {
  return (
    <div className="flex w-full justify-center bg-[#f5f5f5] p-6 dark:bg-background">
      <MetricContextCard
        title="Checkout Conversion Rate"
        metrics={[
          {
            label: "Current value",
            value: "3.8%",
            delta: { direction: "down", value: "0.4%", label: "WoW" },
          },
          { label: "Policies", value: "None", hint: "no masking" },
        ]}
        description="Share of checkout sessions that complete an order, used to track funnel health across storefronts."
      formula="Conversion Rate (%) = (Orders / Checkout Sessions) * 100"
      poweredBy="Commerce 360"
        onClose={() => undefined}
        onExplore={() => undefined}
      />
    </div>
  )
}
