"use client"

import * as React from "react"

import { ModelContextCard } from "@/registry/default/blocks/model-context-card/model-context-card"

export function ModelContextCardDefaultPreview() {
  return (
    <div className="flex w-full justify-center bg-[#f5f5f5] p-6 dark:bg-background">
      <ModelContextCard onClose={() => undefined} onExplore={() => undefined} />
    </div>
  )
}

export function ModelContextCardSmallPreview() {
  return (
    <div className="flex w-full justify-center bg-[#f5f5f5] p-6 dark:bg-background">
      <ModelContextCard
        size="sm"
        onClose={() => undefined}
        onExplore={() => undefined}
      />
    </div>
  )
}

export function ModelContextCardCustomPreview() {
  return (
    <div className="flex w-full justify-center bg-[#f5f5f5] p-6 dark:bg-background">
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
    </div>
  )
}
