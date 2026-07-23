export const heroCodes = {
  install: `npx shadcn@latest add @modernui/hero
npx shadcn@latest add tmdc-io/modern-ui-component/hero`,

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

import {
  AppWindowIcon,
  BarChart3Icon,
  BoxIcon,
  DatabaseIcon,
  FileTextIcon,
  GaugeIcon,
  LayersIcon,
  LinkIcon,
  PlayCircleIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react"
import { Hero, type HeroProps } from "@/components/blocks/hero"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

/**
 * Full data product hero
 * ----------------------
 * variant="full" with metaColumns (Source / Links / Governance),
 * quality card (percentage + dimensions), jumpItems tab bar,
 * and exploreMenu split-button dropdown.
 */
const metaColumns: HeroProps["metaColumns"] = [
  {
    title: "Source",
    items: [
      {
        label: "Identifier",
        value: "digital_experience_analytics",
        mono: true,
      },
      {
        label: "Gateway",
        value: "Snowflake",
        icon: <DatabaseIcon className="size-3.5" />,
      },
      { label: "Domain", value: "Marketing" },
    ],
  },
  {
    title: "Links",
    items: [
      {
        value: "ecommerce-dp-repo",
        icon: <LinkIcon className="text-muted-foreground size-3.5" />,
      },
      {
        value: "4 Reference links",
        icon: <FileTextIcon className="text-muted-foreground size-3.5" />,
      },
      { value: "Jira", icon: <LayersIcon className="size-3.5" /> },
    ],
  },
  {
    title: "Governance",
    items: [
      {
        label: "Version",
        value: <span className="text-primary underline">v0.12</span>,
      },
      { label: "Members", value: "5 owners" },
    ],
  },
]

const quality: HeroProps["quality"] = {
  title: "Data Quality",
  percentage: 85,
  passed: 6,
  failed: 2,
  dimensions: [
    { name: "Accuracy", status: "pass" },
    { name: "Coverage", status: "pass" },
    { name: "Completeness", status: "pass" },
    { name: "Timeliness", status: "warn" },
    { name: "Conformity", status: "pass" },
    { name: "Uniqueness", status: "pass" },
    { name: "Consistency", status: "warn" },
    { name: "Validity", status: "pass" },
  ],
  href: "/quality",
}

const jumpItems: HeroProps["jumpItems"] = [
  {
    label: "Assets",
    icon: <FileTextIcon className="size-3.5" />,
    hasDropdown: true,
  },
  { label: "Quality", icon: <GaugeIcon className="size-3.5" /> },
  { label: "Runs", icon: <PlayCircleIcon className="size-3.5" /> },
  { label: "Metrics", icon: <BarChart3Icon className="size-3.5" /> },
  { label: "Perspectives", icon: <LayersIcon className="size-3.5" /> },
  { label: "Apps", icon: <AppWindowIcon className="size-3.5" /> },
  { label: "Usage", icon: <UsersIcon className="size-3.5" /> },
  {
    label: "Activate",
    icon: <SparklesIcon className="size-3.5" />,
    hasDropdown: true,
  },
]

export function DataProductHero() {
  return (
    <Hero
      variant="full"
      title="E-Commerce & Digital Experience Analytics"
      subtitle="Conversion Rate"
      icon={<BoxIcon className="size-5" strokeWidth={1.5} />}
      description="Our B2B e-commerce platform offers comprehensive analytics that track website behaviour, monitor conversion funnels, and analyze cart abandonment."
      metaColumns={metaColumns}
      quality={quality}
      jumpItems={jumpItems}
      exploreMenu={
        <>
          <DropdownMenuItem>Open in workspace</DropdownMenuItem>
          <DropdownMenuItem>Query data</DropdownMenuItem>
          <DropdownMenuItem>Share</DropdownMenuItem>
        </>
      }
    />
  )
}`,

  sticky: `"use client"

import { BoxIcon } from "lucide-react"
import { Hero } from "@/components/blocks/hero"

/**
 * Sticky scrolled header
 * ----------------------
 * variant="sticky" — compact icon + title bar for scroll state.
 * Wrap in a sticky container (top-0 z-30) in your shell.
 */
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

/**
 * Internal page header
 * --------------------
 * variant="internal" — title, subtitle, icon, and actions only.
 * No metaColumns, quality card, or jump navigation.
 */
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

import { BoxIcon, GaugeIcon, PlayCircleIcon, BarChart3Icon } from "lucide-react"
import { Hero, type HeroProps } from "@/components/blocks/hero"

/**
 * Internal header + jump nav
 * --------------------------
 * variant="internal" with jumpItems — Assets, Quality, Runs, Metrics tabs.
 * Dropdown chevrons render when hasDropdown is true.
 */
const jumpItems: HeroProps["jumpItems"] = [
  { label: "Assets", icon: <GaugeIcon className="size-3.5" />, hasDropdown: true },
  { label: "Quality", icon: <GaugeIcon className="size-3.5" /> },
  { label: "Runs", icon: <PlayCircleIcon className="size-3.5" /> },
  { label: "Metrics", icon: <BarChart3Icon className="size-3.5" /> },
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

/**
 * Internal header + description
 * -----------------------------
 * variant="internal" with truncated description and descriptionExpandLabel.
 * jumpItems adds the tab bar below the description.
 */
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
