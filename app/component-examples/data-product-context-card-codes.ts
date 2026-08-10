export const dataProductContextCardCodes = {
  install: `npx shadcn@latest add @modernui/data-product-context-card
npx shadcn@latest add tmdc-io/modern-ui-component/data-product-context-card`,

  default: `"use client"

import { DataProductContextCard } from "@/components/blocks/data-product-context-card"

/**
 * Default Data Product Context Card
 * ---------------------------
 * Renders the Orders 360 sample when props are omitted:
 * quality / freshness / policies, defines + tags, fit tabs,
 * usage stats, gateway link, resources, and contacts.
 *
 * Wire onClose / onMoreDetails / onExplore for drawer chrome and CTAs.
 * Copy uses navigator.clipboard when available; onCopyGateway still fires.
 */
export function ProductDetailDrawer() {
  return (
    <DataProductContextCard
      className="h-full max-w-[26rem]"
      onClose={() => console.log("close")}
      onMoreDetails={() => console.log("more")}
      onExplore={() => console.log("explore")}
    />
  )
}
`,

  fit: `"use client"

import * as React from "react"

import {
  DataProductContextCard,
  type DataProductContextCardFitTab,
} from "@/components/blocks/data-product-context-card"

/**
 * Controlled fit tabs
 * -------------------
 * Pass fitTab + onFitTabChange to sync Good for / Not good for / Caveats
 * with surrounding UI (e.g. analytics).
 */
export function ProductDetailFit() {
  const [tab, setTab] = React.useState<DataProductContextCardFitTab>("not-good")

  return (
    <DataProductContextCard
      fitTab={tab}
      onFitTabChange={setTab}
      onClose={() => undefined}
    />
  )
}
`,

  custom: `"use client"

import { DataProductContextCard } from "@/components/blocks/data-product-context-card"

/**
 * Custom product payload
 * ----------------------
 * Override title, metrics, tags, gateway, and usage while keeping
 * default fit sections and contacts (or pass your own).
 */
export function Customer360Detail() {
  return (
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
        { label: "Data Quality", value: "92%", hint: "44/48 rules passed" },
        { label: "Freshness", value: "45m ago", hint: "12/12 models healthy" },
        { label: "Policies", value: "5 applied", hint: "3 masking • 2 filter" },
      ]}
      usageStats={[
        { value: "3,410 queries", label: "last 30 days" },
        { value: "0.9s", label: "query time" },
        { value: "28", label: "active users" },
      ]}
      onClose={() => undefined}
    />
  )
}
`,

  small: `"use client"

import { DataProductContextCard } from "@/components/blocks/data-product-context-card"

/**
 * Small view
 * ----------
 * Compact card for lineage nodes / popovers:
 * header + meta, status chips, truncated description, usage, Know more CTA.
 * Hides fit tabs, tags, gateway, contacts, and the dual footer.
 */
export function ProductDetailSmall() {
  return (
    <DataProductContextCard
      size="sm"
      onClose={() => console.log("close")}
      onExplore={() => console.log("know more")}
    />
  )
}
`,
}
