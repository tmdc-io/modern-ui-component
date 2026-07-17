"use client"

import {
  DataProductCard,
  DataProductCardSkeleton,
} from "@/registry/default/blocks/data-product-card/data-product-card"

const patientJourneyCard = {
  title: "Patient Journey Analysis",
  subtitle: "Treatment Adherence",
  description:
    "This data product tracks patient compliance with prescribed treatments, offering insights into adherence rates and potential risk factors across care pathways.",
  badge: { label: "Quality", status: "warn" as const },
}

const financialRiskCard = {
  title: "Financial Risk Assessment",
  description:
    "This data product evaluates the creditworthiness of individuals or businesses, assigning scores based on financial history, liabilities, and market indicators.",
  badge: { label: "Last run", status: "fail" as const },
}

export function DataProductCardDefaultPreview() {
  return (
    <div className="bg-muted/30 flex w-full justify-center rounded-lg p-6">
      <DataProductCard {...patientJourneyCard} />
    </div>
  )
}

export function DataProductCardLastRunPreview() {
  return (
    <div className="bg-muted/30 flex w-full justify-center rounded-lg p-6">
      <DataProductCard {...financialRiskCard} />
    </div>
  )
}

export function DataProductCardGridPreview() {
  return (
    <div className="bg-muted/30 grid w-full gap-4 rounded-lg p-6 sm:grid-cols-2">
      <DataProductCard {...patientJourneyCard} />
      <DataProductCard {...financialRiskCard} />
    </div>
  )
}

export function DataProductCardInteractivePreview() {
  return (
    <div className="bg-muted/30 flex w-full justify-center rounded-lg p-6">
      <DataProductCard
        {...patientJourneyCard}
        onClick={() => {
          // demo handler
        }}
      />
    </div>
  )
}

export function DataProductCardDensityPreview() {
  return (
    <div className="bg-muted/30 flex w-full flex-col items-center gap-4 rounded-lg p-6">
      <DataProductCard {...patientJourneyCard} />
      <DataProductCard {...patientJourneyCard} size="sm" />
    </div>
  )
}

export function DataProductCardSkeletonPreview() {
  return (
    <div className="bg-muted/30 flex w-full flex-col items-center gap-4 rounded-lg p-6">
      <DataProductCardSkeleton />
      <DataProductCardSkeleton size="sm" />
    </div>
  )
}
