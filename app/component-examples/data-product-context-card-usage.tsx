"use client"

import * as React from "react"

import {
  DataProductContextCard,
  defaultDataProductContextCardProps,
  type DataProductContextCardFitTab,
} from "@/registry/default/blocks/data-product-context-card/data-product-context-card"

export function DataProductContextCardDefaultPreview() {
  return (
    <div className="flex w-full justify-center bg-[#f5f5f5] p-6 dark:bg-background">
      <DataProductContextCard onClose={() => undefined} />
    </div>
  )
}

export function DataProductContextCardSmallPreview() {
  return (
    <div className="flex w-full justify-center bg-[#f5f5f5] p-6 dark:bg-background">
      <DataProductContextCard
        size="sm"
        onClose={() => undefined}
        onExplore={() => undefined}
      />
    </div>
  )
}

export function DataProductContextCardFitPreview() {
  const [tab, setTab] = React.useState<DataProductContextCardFitTab>("not-good")

  return (
    <div className="flex w-full flex-col items-center gap-3 bg-[#f5f5f5] p-6 dark:bg-background">
      <DataProductContextCard
        fitTab={tab}
        onFitTabChange={setTab}
        onClose={() => undefined}
      />
      <p className="text-muted-foreground text-sm">Active tab: {tab}</p>
    </div>
  )
}

export function DataProductContextCardCustomPreview() {
  return (
    <div className="flex w-full justify-center bg-[#f5f5f5] p-6 dark:bg-background">
      <DataProductContextCard
        title="Customer 360"
        version="v2.4.0"
        description="Unified customer identity and engagement signals for CRM activation and lifecycle analytics."
        gatewayUrl="gateway.dataos/customer-360"
        tags={[
          { label: "Identity" },
          { label: "CRM" },
          { label: "Lifecycle" },
        ]}
        metrics={[
          {
            label: "Data Quality",
            value: "92%",
            hint: "44/48 rules passed",
          },
          {
            label: "Freshness",
            value: "45m ago",
            hint: "12/12 models healthy",
          },
          {
            label: "Policies",
            value: "5 applied",
            hint: "3 masking • 2 filter",
          },
        ]}
        usageStats={[
          { value: "3,410 queries", label: "last 30 days" },
          { value: "0.9s", label: "query time" },
          { value: "28", label: "active users" },
        ]}
        contacts={defaultDataProductContextCardProps.contacts}
        onClose={() => undefined}
      />
    </div>
  )
}
