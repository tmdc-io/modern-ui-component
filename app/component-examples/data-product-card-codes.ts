export const dataProductCardCodes = {
  install: `npx shadcn@latest add @modernui/data-product-card
npx shadcn@latest add tmdc-io/modern-ui-component/data-product-card`,

  props: `type DataProductCardBadgeStatus = "pass" | "warn" | "fail"

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

  default: `import { DataProductCard } from "@/components/blocks/data-product-card"

export function ProductCatalog() {
  return (
    <DataProductCard
      title="Patient Journey Analysis"
      subtitle="Treatment Adherence"
      description="This data product tracks patient compliance with prescribed treatments, offering insights into adherence rates and potential risk factors."
      badge={{ label: "Quality", status: "warn" }}
    />
  )
}`,

  lastRun: `import { DataProductCard } from "@/components/blocks/data-product-card"

export function ProductCatalog() {
  return (
    <DataProductCard
      title="Financial Risk Assessment"
      description="This data product evaluates the creditworthiness of individuals or businesses, assigning scores based on financial history and liabilities."
      badge={{ label: "Last run", status: "fail" }}
    />
  )
}`,

  grid: `"use client"

import { DataProductCard } from "@/components/blocks/data-product-card"

const products = [
  {
    title: "Patient Journey Analysis",
    subtitle: "Treatment Adherence",
    description: "Tracks patient compliance with prescribed treatments and adherence rates.",
    badge: { label: "Quality", status: "warn" as const },
  },
  {
    title: "Financial Risk Assessment",
    description: "Evaluates creditworthiness and assigns risk scores for individuals or businesses.",
    badge: { label: "Last run", status: "fail" as const },
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
          href="#"
        />
      ))}
    </div>
  )
}`,

  density: `import { DataProductCard } from "@/components/blocks/data-product-card"

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

  skeleton: `import { DataProductCardSkeleton } from "@/components/blocks/data-product-card"

export function ProductCardLoading() {
  return (
    <div className="flex flex-col gap-4">
      <DataProductCardSkeleton />
      <DataProductCardSkeleton size="sm" />
    </div>
  )
}`,
}
