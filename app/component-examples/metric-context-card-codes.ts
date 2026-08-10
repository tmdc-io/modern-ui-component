export const metricContextCardCodes = {
  install: `npx shadcn@latest add @modernui/metric-context-card
npx shadcn@latest add tmdc-io/modern-ui-component/metric-context-card`,

  default: `"use client"

import { MetricContextCard } from "@/components/blocks/metric-context-card"

/**
 * Default Metric Context Card (full)
 * ----------------------------------
 * Renders the Medication Adherence Monitoring sample when props are
 * omitted: current value + trend, policies, defines + tags, composed
 * fields, formula, powered by, and owner.
 */
export function MetricDrawer() {
  return (
    <MetricContextCard
      className="h-full w-[30rem]"
      onClose={() => console.log("close")}
      onExplore={() => console.log("explore")}
    />
  )
}
`,

  small: `"use client"

import { MetricContextCard } from "@/components/blocks/metric-context-card"

/**
 * Small view
 * ----------
 * Compact card: freshness / policies chips, description, powered by,
 * owner, and a Know more CTA. Composed-of and formula are hidden.
 */
export function MetricPopover() {
  return (
    <MetricContextCard
      size="sm"
      onClose={() => console.log("close")}
      onExplore={() => console.log("know more")}
    />
  )
}
`,

  custom: `"use client"

import { MetricContextCard } from "@/components/blocks/metric-context-card"

/**
 * Custom metric payload
 * ---------------------
 * Override the headline value, trend direction, formula, and source.
 */
export function CheckoutConversionCard() {
  return (
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
  )
}
`,
}
