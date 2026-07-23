export const dataosSidebarCodes = {
  install: `npx shadcn@latest add @modernui/dataos-sidebar
npx shadcn@latest add tmdc-io/modern-ui-component/dataos-sidebar`,

  props: `/**
 * DataOsSidebar types
 * -------------------
 * Navigation: items + footerItems (icons required).
 * Pinning: enablePinning (default true), maxPinned (default 3).
 *   Data Products uses pinLocked — always pinned, cannot unpin.
 * Collapse: defaultCollapsed / collapsed + onCollapsedChange.
 * Active: defaultActiveId / activeId + onActiveChange (teal active row).
 */
type DataOsSidebarItem = {
  id: string
  label: string
  icon: React.ReactNode
  href?: string
  onSelect?: () => void
  pinnable?: boolean
  pinLocked?: boolean
}

type DataOsSidebarProps = {
  activeId?: string
  defaultActiveId?: string
  onActiveChange?: (id: string) => void
  collapsed?: boolean
  defaultCollapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
  items?: DataOsSidebarItem[]
  footerItems?: DataOsSidebarItem[]
  enablePinning?: boolean
  maxPinned?: number
  pinnedIds?: string[]
  defaultPinnedIds?: string[]
  onPinnedChange?: (ids: string[]) => void
  className?: string
}`,

  expanded: `"use client"

import { DataOsSidebar } from "@/components/blocks/dataos-sidebar"

/**
 * Expanded shell rail
 * -------------------
 * Full wordmark, labeled nav groups, dividers, and footer actions.
 * defaultActiveId="home" paints the teal active state on Home.
 * Omit items to use the built-in DataOS navigation set.
 */
export function AppShell() {
  return (
    <div className="flex min-h-[28rem] overflow-hidden rounded-lg border">
      <DataOsSidebar defaultActiveId="home" />
      <main className="bg-background flex-1 p-6">
        <h1 className="text-lg font-semibold">Home</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Browse data products, runs, and quality from the sidebar.
        </p>
      </main>
    </div>
  )
}`,

  collapsed: `"use client"

import { DataOsSidebar } from "@/components/blocks/dataos-sidebar"

/**
 * Collapsed icon rail
 * -------------------
 * defaultCollapsed starts in icon-only mode. Users can expand via the
 * footer Close panel / open control. Tooltips show labels while collapsed.
 */
export function CollapsedAppShell() {
  return (
    <div className="flex min-h-[28rem] overflow-hidden rounded-lg border">
      <DataOsSidebar defaultActiveId="home" defaultCollapsed />
      <main className="bg-background flex-1 p-6">
        <h1 className="text-lg font-semibold">Collapsed rail</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Icons stay visible; expand to show labels and pinned apps.
        </p>
      </main>
    </div>
  )
}`,

  controlled: `"use client"

import * as React from "react"

import { DataOsSidebar } from "@/components/blocks/dataos-sidebar"

/**
 * Controlled active + collapse
 * ----------------------------
 * Wire activeId / collapsed from the app shell so the main region and
 * URL stay in sync. onActiveChange fires when a nav row is selected.
 */
export function ControlledAppShell() {
  const [collapsed, setCollapsed] = React.useState(false)
  const [activeId, setActiveId] = React.useState("home")

  return (
    <div className="flex min-h-[28rem] overflow-hidden rounded-lg border">
      <DataOsSidebar
        activeId={activeId}
        onActiveChange={setActiveId}
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
      />
      <main className="bg-background flex-1 p-6">
        <h1 className="text-lg font-semibold capitalize">{activeId}</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Sidebar is {collapsed ? "collapsed" : "expanded"}.
        </p>
      </main>
    </div>
  )
}`,

  pinned: `"use client"

import * as React from "react"

import { DataOsSidebar } from "@/components/blocks/dataos-sidebar"

/**
 * Pin & reorder
 * -------------
 * - Data Products is pinLocked (always pinned; cannot unpin)
 * - Users may pin up to maxPinned (default 3) including locked pins
 * - Hover a row to reveal the pin control; drag pinned rows to reorder
 * - Persist pinnedIds (localStorage shown) across reloads
 */
const STORAGE_KEY = "dataos.pinned"

function readPinnedIds() {
  if (typeof window === "undefined") return ["data-products"]
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return ["data-products"]
    const parsed = JSON.parse(raw) as string[]
    return Array.isArray(parsed) && parsed.length
      ? parsed
      : ["data-products"]
  } catch {
    return ["data-products"]
  }
}

export function PinnedAppsShell() {
  const [pinnedIds, setPinnedIds] = React.useState<string[]>(readPinnedIds)

  return (
    <div className="flex min-h-[28rem] overflow-hidden rounded-lg border">
      <DataOsSidebar
        enablePinning
        maxPinned={3}
        pinnedIds={pinnedIds}
        onPinnedChange={(ids) => {
          setPinnedIds(ids)
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
        }}
      />
      <main className="bg-background flex-1 p-6">
        <h1 className="text-lg font-semibold">Pinned apps</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          {pinnedIds.join(" · ")}
        </p>
      </main>
    </div>
  )
}`,
}
