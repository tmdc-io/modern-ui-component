export const modelContextCardCodes = {
  install: `npx shadcn@latest add @modernui/model-context-card
npx shadcn@latest add tmdc-io/modern-ui-component/model-context-card`,

  default: `"use client"

import { ModelContextCard } from "@/components/blocks/model-context-card"

/**
 * Default Model Context Card (full)
 * ---------------------------------
 * Renders the web_events_daily sample when props are omitted:
 * quality / last run / policies, defines + tags, fields, lineage,
 * productized list, usage, schedule, and owner.
 */
export function ModelDrawer() {
  return (
    <ModelContextCard
      className="h-full w-[30rem]"
      onClose={() => console.log("close")}
      onExplore={() => console.log("know more")}
      onSeeAllFields={() => console.log("fields")}
      onViewLineage={() => console.log("lineage")}
    />
  )
}
`,

  small: `"use client"

import { ModelContextCard } from "@/components/blocks/model-context-card"

/**
 * Small view
 * ----------
 * Compact card: chips, description, productized tags, owner, Explore / Know more.
 */
export function ModelPopover() {
  return (
    <ModelContextCard
      size="sm"
      onClose={() => console.log("close")}
      onExplore={() => console.log("know more")}
    />
  )
}
`,

  custom: `"use client"

import { ModelContextCard } from "@/components/blocks/model-context-card"

/**
 * Custom model payload
 * --------------------
 * Override title, path, description, fieldsTotal, and products.
 */
export function OrdersEnrichedCard() {
  return (
    <ModelContextCard
      title="orders_enriched"
      version="v1.4.2"
      path={["acme_wh", "marts", "commerce"]}
      description="Enriched order lines with customer and product attributes for revenue reporting."
      fieldsTotal={42}
      products={[
        { id: "rev", name: "Revenue 360" },
        { id: "ops", name: "Order Operations" },
      ]}
      onClose={() => undefined}
      onExplore={() => undefined}
    />
  )
}
`,
}
