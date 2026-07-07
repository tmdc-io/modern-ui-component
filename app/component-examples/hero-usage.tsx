"use client"

import * as React from "react"
import {
  AppWindowIcon,
  BarChart3Icon,
  BoxIcon,
  FileTextIcon,
  GaugeIcon,
  LayersIcon,
  LinkIcon,
  PlayCircleIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react"

import {
  Hero,
  HeroMemberStack,
  type HeroMember,
  type HeroProps,
} from "@/registry/default/blocks/hero/hero"
import { DropdownMenuItem } from "@/registry/default/ui/dropdown-menu"

function SnowflakeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden>
      <path
        fill="#29B5E8"
        d="M8 1.2 9.1 3.5l2.5-.4-.6 2.5 2.3 1.1-1.8 1.8 1.8 1.8-2.3 1.1.6 2.5-2.5-.4L8 14.8 6.9 12.5l-2.5.4.6-2.5-2.3-1.1 1.8-1.8-1.8-1.8 2.3-1.1-.6-2.5 2.5.4L8 1.2Z"
      />
    </svg>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M8 1.2a6.8 6.8 0 0 0-2.15 13.26c.34.06.47-.15.47-.33v-1.16c-1.92.42-2.32-.93-2.32-.93-.31-.8-.76-1.01-.76-1.01-.62-.43.05-.42.05-.42.69.05 1.05.71 1.05.71.61 1.05 1.6.75 1.99.57.06-.44.24-.75.44-.92-1.54-.18-3.16-.77-3.16-3.43 0-.76.27-1.38.71-1.87-.07-.18-.31-.9.07-1.87 0 0 .58-.19 1.9.71a6.5 6.5 0 0 1 3.5 0c1.32-.9 1.9-.71 1.9-.71.38.97.14 1.69.07 1.87.44.49.71 1.1.71 1.87 0 2.67-1.63 3.25-3.18 3.42.25.22.47.64.47 1.29v1.91c0 .18.13.39.47.33A6.8 6.8 0 0 0 8 1.2Z"
      />
    </svg>
  )
}

function JiraIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden>
      <path fill="#2684FF" d="M8.1 1.2 1.2 8.1a.55.55 0 0 0 0 .78l6.9 6.9a.55.55 0 0 0 .78 0l6.9-6.9a.55.55 0 0 0 0-.78L8.88 1.2a.55.55 0 0 0-.78 0Z" />
      <path fill="#0052CC" d="M8.1 4.7 4.7 8.1l3.4 3.4 3.4-3.4L8.1 4.7Z" />
    </svg>
  )
}

const members: HeroMember[] = [
  { name: "Sara Fox", initials: "SF", className: "bg-rose-200 text-rose-800" },
  { name: "Amit Shah", initials: "AS", className: "bg-amber-200 text-amber-800" },
  { name: "Kris Meyer", initials: "KM", className: "bg-teal-bg-1 text-primary" },
  { name: "Dana Lee", initials: "DL" },
  { name: "Ravi Nair", initials: "RN" },
]

const description =
  "Our B2B e-commerce platform offers comprehensive analytics that track website behaviour, monitor conversion funnels, and analyze cart abandonment. These insights help optimise the digital customer journey and drive significant growth in online revenue. These insights help optimise the journey."

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
        icon: <SnowflakeIcon className="size-4" />,
      },
      { label: "Domain", value: "Marketing" },
    ],
  },
  {
    title: "Links",
    items: [
      {
        value: "ecommerce-dp-repo",
        icon: <GithubIcon className="size-4 text-foreground" />,
      },
      {
        value: "4 Reference links",
        icon: <LinkIcon className="text-muted-foreground size-3.5" />,
      },
      {
        value: "Jira",
        icon: <JiraIcon className="size-4" />,
      },
    ],
  },
  {
    title: "Governance",
    items: [
      {
        label: "Version",
        value: <span className="text-primary underline">v0.12</span>,
      },
      {
        label: "Members",
        value: <HeroMemberStack members={members} />,
      },
    ],
  },
]

const quality: HeroProps["quality"] = {
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
  href: "#quality",
}

const jumpItems: HeroProps["jumpItems"] = [
  { label: "Assets", icon: <FileTextIcon className="size-3.5" />, hasDropdown: true },
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

const baseProps: HeroProps = {
  title: "E-Commerce & Digital Experience Analytics",
  subtitle: "Conversion Rate",
  subtitleIcon: <BoxIcon className="size-3.5" />,
  icon: <BoxIcon className="size-5" strokeWidth={1.5} />,
}

const exploreMenu = (
  <>
    <DropdownMenuItem>Open in workspace</DropdownMenuItem>
    <DropdownMenuItem>Query data</DropdownMenuItem>
    <DropdownMenuItem>Share</DropdownMenuItem>
  </>
)

function useFollow() {
  const [following, setFollowing] = React.useState(false)
  return { following, onFollowChange: setFollowing }
}

export function HeroFullPreview() {
  const follow = useFollow()
  return (
    <div className="border-grey-8 w-full overflow-hidden rounded-lg border">
      <Hero
        {...baseProps}
        {...follow}
        variant="full"
        description={description}
        metaColumns={metaColumns}
        quality={quality}
        jumpItems={jumpItems}
        exploreMenu={exploreMenu}
      />
    </div>
  )
}

export function HeroStickyPreview() {
  const follow = useFollow()
  return (
    <div className="border-grey-8 w-full overflow-hidden rounded-lg border">
      <Hero {...baseProps} {...follow} variant="sticky" exploreMenu={exploreMenu} />
    </div>
  )
}

export function HeroInternalPreview() {
  const follow = useFollow()
  return (
    <div className="border-grey-8 w-full overflow-hidden rounded-lg border">
      <Hero {...baseProps} {...follow} variant="internal" exploreMenu={exploreMenu} />
    </div>
  )
}

export function HeroInternalJumpPreview() {
  const follow = useFollow()
  return (
    <div className="border-grey-8 w-full overflow-hidden rounded-lg border">
      <Hero
        {...baseProps}
        {...follow}
        variant="internal"
        jumpItems={jumpItems}
        exploreMenu={exploreMenu}
      />
    </div>
  )
}

export function HeroInternalDescriptionPreview() {
  const follow = useFollow()
  return (
    <div className="border-grey-8 w-full overflow-hidden rounded-lg border">
      <Hero
        {...baseProps}
        {...follow}
        variant="internal"
        description={description}
        jumpItems={jumpItems}
        exploreMenu={exploreMenu}
      />
    </div>
  )
}
