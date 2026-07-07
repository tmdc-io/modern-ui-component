export const heroCodes = {
  install: `npx shadcn@latest add tmdc-io/modern-ui-component/hero`,

  props: `type HeroVariant = "full" | "internal" | "sticky"

type HeroProps = {
  title: string
  subtitle?: string
  subtitleIcon?: React.ReactNode
  description?: string
  icon?: React.ReactNode
  variant?: HeroVariant           // default "full"
  quality?: HeroQuality           // right-side Data Quality card (full only)
  metaColumns?: HeroMetaColumn[]  // Source / Links / Governance (full only)
  jumpItems?: HeroJumpItem[]      // "Jump to:" tab bar
  showDescription?: boolean       // default true
  following?: boolean
  onFollowChange?: (next: boolean) => void
  exploreLabel?: string           // default "Explore"
  onExplore?: () => void
  exploreMenu?: React.ReactNode    // dropdown items for the Explore split button
  className?: string
}`,

  full: `"use client"

import { BoxIcon, DatabaseIcon, GaugeIcon } from "lucide-react"
import { Hero, type HeroProps } from "@/components/blocks/hero"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

const metaColumns: HeroProps["metaColumns"] = [
  {
    title: "Source",
    items: [
      { label: "Identifier", value: "digital_experience_analytics" },
      { label: "Gateway", value: "Snowflake", icon: <DatabaseIcon className="size-3.5" /> },
      { label: "Domain", value: "Marketing" },
    ],
  },
  // ...Links, Governance columns
]

const quality: HeroProps["quality"] = {
  percentage: 85,
  passed: 6,
  failed: 2,
  dimensions: [
    { name: "Accuracy", status: "pass" },
    { name: "Timeliness", status: "warn" },
    // ...
  ],
  href: "/quality",
}

const jumpItems: HeroProps["jumpItems"] = [
  { label: "Assets", icon: <GaugeIcon className="size-3.5" />, hasDropdown: true },
  { label: "Quality" },
  // ...
]

export function DataProductHero() {
  return (
    <Hero
      variant="full"
      title="E-Commerce & Digital Experience Analytics"
      subtitle="Conversion Rate"
      icon={<BoxIcon className="size-5" strokeWidth={1.5} />}
      description="Our B2B e-commerce platform offers comprehensive analytics..."
      metaColumns={metaColumns}
      quality={quality}
      jumpItems={jumpItems}
      exploreMenu={
        <>
          <DropdownMenuItem>Open in workspace</DropdownMenuItem>
          <DropdownMenuItem>Query data</DropdownMenuItem>
        </>
      }
    />
  )
}`,

  sticky: `"use client"

import { BoxIcon } from "lucide-react"
import { Hero } from "@/components/blocks/hero"

// Compact bar for scrolled / sticky page headers.
export function StickyHero() {
  return (
    <div className="sticky top-0 z-30">
      <Hero
        variant="sticky"
        title="E-Commerce & Digital Experience Analytics"
        icon={<BoxIcon className="size-4" strokeWidth={1.5} />}
      />
    </div>
  )
}`,

  internal: `"use client"

import { BoxIcon } from "lucide-react"
import { Hero } from "@/components/blocks/hero"

// Internal page header — icon, title, subtitle, and actions only.
export function InternalHero() {
  return (
    <Hero
      variant="internal"
      title="E-Commerce & Digital Experience Analytics"
      subtitle="Conversion Rate"
      icon={<BoxIcon className="size-5" strokeWidth={1.5} />}
    />
  )
}`,

  internalJump: `"use client"

import { BoxIcon, GaugeIcon } from "lucide-react"
import { Hero, type HeroProps } from "@/components/blocks/hero"

const jumpItems: HeroProps["jumpItems"] = [
  { label: "Assets", icon: <GaugeIcon className="size-3.5" />, hasDropdown: true },
  { label: "Quality" },
  { label: "Runs" },
  { label: "Metrics" },
]

export function InternalHeroWithNav() {
  return (
    <Hero
      variant="internal"
      title="E-Commerce & Digital Experience Analytics"
      subtitle="Conversion Rate"
      icon={<BoxIcon className="size-5" strokeWidth={1.5} />}
      jumpItems={jumpItems}
    />
  )
}`,

  internalDescription: `"use client"

import { BoxIcon } from "lucide-react"
import { Hero, type HeroProps } from "@/components/blocks/hero"

const jumpItems: HeroProps["jumpItems"] = [
  { label: "Assets", hasDropdown: true },
  { label: "Quality" },
  { label: "Runs" },
]

export function InternalHeroWithDescription() {
  return (
    <Hero
      variant="internal"
      title="E-Commerce & Digital Experience Analytics"
      subtitle="Conversion Rate"
      icon={<BoxIcon className="size-5" strokeWidth={1.5} />}
      description="Our B2B e-commerce platform offers comprehensive analytics that track website behaviour, monitor conversion funnels, and analyze cart abandonment."
      descriptionExpandLabel="View more"
      jumpItems={jumpItems}
    />
  )
}`,
}
