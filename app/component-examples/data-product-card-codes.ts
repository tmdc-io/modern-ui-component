export const dataProductCardCodes = {
  install: `npx shadcn@latest add @modernui/data-product-card
npx shadcn@latest add tmdc-io/modern-ui-component/data-product-card`,

  props: `/**
 * DataProductCard types
 * ---------------------
 * badge.status: "pass" | "warn" | "fail" — quality or last-run tone
 * size: "default" | "sm" — compact catalog density
 * href / onClick: navigation (prefer href for progressive enhancement)
 */
type DataProductCardBadgeStatus = "pass" | "warn" | "fail"

type DataProductCardBadge = {
  label: string
  status: DataProductCardBadgeStatus
}

type DataProductCardProps = {
  title: string
  subtitle?: string
  description: string
  icon?: React.ReactNode
  iconClassName?: string
  badge?: DataProductCardBadge
  href?: string
  onClick?: () => void
  size?: "default" | "sm"
  className?: string
}`,

  default: `"use client"

import { DataProductCard } from "@/components/blocks/data-product-card"

/**
 * Quality badge card
 * ------------------
 * subtitle → glossary / category row with document icon
 * badge.status="warn" → at-risk quality (amber treatment)
 * Description truncates in the card body; keep copy to ~1–2 sentences.
 */
export function ProductCatalog() {
  return (
    <DataProductCard
      title="Patient Journey Analysis"
      subtitle="Treatment Adherence"
      description="This data product tracks patient compliance with prescribed treatments, offering insights into adherence rates and potential risk factors."
      badge={{ label: "Quality", status: "warn" }}
      href="/data-products/patient-journey"
    />
  )
}`,

  lastRun: `"use client"

import { DataProductCard } from "@/components/blocks/data-product-card"

/**
 * Last-run fail badge
 * -------------------
 * Use badge.label="Last run" with status="fail" when the newest pipeline
 * run failed. Omit subtitle for a simpler title + description layout.
 */
export function FailedLastRunCard() {
  return (
    <DataProductCard
      title="Financial Risk Assessment"
      description="This data product evaluates the creditworthiness of individuals or businesses, assigning scores based on financial history and liabilities."
      badge={{ label: "Last run", status: "fail" }}
      href="/data-products/financial-risk"
    />
  )
}`,

  grid: `"use client"

import { DataProductCard } from "@/components/blocks/data-product-card"

/**
 * Responsive product grid
 * -----------------------
 * Map a catalog array into cards. Use @container + @md:grid-cols-2 so the
 * grid responds to the panel width, not only the viewport.
 * className="max-w-none" lets each card fill its grid cell.
 */
const products = [
  {
    title: "Patient Journey Analysis",
    subtitle: "Treatment Adherence",
    description:
      "Tracks patient compliance with prescribed treatments and adherence rates.",
    badge: { label: "Quality", status: "warn" as const },
    href: "/data-products/patient-journey",
  },
  {
    title: "Financial Risk Assessment",
    description:
      "Evaluates creditworthiness and assigns risk scores for individuals or businesses.",
    badge: { label: "Last run", status: "fail" as const },
    href: "/data-products/financial-risk",
  },
]

export function ProductGrid() {
  return (
    <div className="@container grid gap-4 @md:grid-cols-2">
      {products.map((product) => (
        <DataProductCard
          key={product.title}
          className="max-w-none"
          {...product}
        />
      ))}
    </div>
  )
}`,

  interactive: `"use client"

import * as React from "react"

import { DataProductCard } from "@/components/blocks/data-product-card"

/**
 * Clickable card
 * --------------
 * Prefer href for navigation. Use onClick when you need client-side
 * selection (e.g. open a detail drawer without leaving the catalog).
 */
export function ClickableProductCard() {
  const [selected, setSelected] = React.useState<string>()

  return (
    <div className="space-y-3">
      <DataProductCard
        title="Patient Journey Analysis"
        subtitle="Treatment Adherence"
        description="Tracks patient compliance with prescribed treatments."
        badge={{ label: "Quality", status: "warn" }}
        onClick={() => setSelected("patient-journey")}
      />
      <p className="text-muted-foreground text-xs">
        Selected: {selected ?? "—"}
      </p>
    </div>
  )
}`,

  density: `"use client"

import { DataProductCard } from "@/components/blocks/data-product-card"

/**
 * Density
 * -------
 * size="sm" tightens padding and type for dense catalog rails.
 * Keep default size for hero / featured product slots.
 */
export function CompactProductCard() {
  return (
    <div className="flex flex-col gap-4">
      <DataProductCard
        title="Patient Journey Analysis"
        subtitle="Treatment Adherence"
        description="Tracks patient compliance with prescribed treatments."
        badge={{ label: "Quality", status: "warn" }}
      />
      <DataProductCard
        title="Patient Journey Analysis"
        subtitle="Treatment Adherence"
        description="Tracks patient compliance with prescribed treatments."
        badge={{ label: "Quality", status: "warn" }}
        size="sm"
      />
    </div>
  )
}`,

  skeleton: `"use client"

import { DataProductCardSkeleton } from "@/components/blocks/data-product-card"

/**
 * Loading placeholders
 * --------------------
 * Mirror the size prop of the real cards so layout does not jump when
 * catalog rows resolve.
 */
export function ProductCardLoading() {
  return (
    <div className="flex flex-col gap-4">
      <DataProductCardSkeleton />
      <DataProductCardSkeleton size="sm" />
    </div>
  )
}`,

  dataDriven: `"use client"

import * as React from "react"

import {
  DataProductCard,
  type DataProductCardBadgeStatus,
} from "@/components/blocks/data-product-card"

/**
 * Data-driven catalog
 * -------------------
 * Map API rows → card props. badgeTone from your quality / last-run service.
 */

type CatalogApiRow = {
  id: string
  name: string
  glossary?: string
  summary: string
  badgeLabel: string
  badgeTone: DataProductCardBadgeStatus
}

function mapCards(rows: CatalogApiRow[]) {
  return rows.map((row) => ({
    key: row.id,
    title: row.name,
    subtitle: row.glossary,
    description: row.summary,
    badge: { label: row.badgeLabel, status: row.badgeTone },
    href: \`/data-products/\${row.id}\`,
  }))
}

const apiRows: CatalogApiRow[] = [
  {
    id: "patient-journey",
    name: "Patient Journey Analysis",
    glossary: "Treatment Adherence",
    summary: "Tracks patient compliance with prescribed treatments.",
    badgeLabel: "Quality",
    badgeTone: "warn",
  },
  {
    id: "financial-risk",
    name: "Financial Risk Assessment",
    summary: "Evaluates creditworthiness and assigns risk scores.",
    badgeLabel: "Last run",
    badgeTone: "fail",
  },
]

export function DataDrivenProductGrid() {
  const cards = React.useMemo(() => mapCards(apiRows), [])

  return (
    <div className="@container grid gap-4 @md:grid-cols-2">
      {cards.map(({ key, ...props }) => (
        <DataProductCard key={key} className="max-w-none" {...props} />
      ))}
    </div>
  )
}`,
}
