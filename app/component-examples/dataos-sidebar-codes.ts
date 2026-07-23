export const dataosSidebarCodes = {
  install: `npx shadcn@latest add @modernui/dataos-sidebar
npx shadcn@latest add tmdc-io/modern-ui-component/dataos-sidebar`,

  props: `type DataOsSidebarItem = {
  id: string
  label: string
  icon: React.ReactNode
  href?: string
  onSelect?: () => void
  pinnable?: boolean
  pinLocked?: boolean           // always pinned; cannot be unpinned
}

type DataOsSidebarProps = {
  activeId?: string
  defaultActiveId?: string        // default "home"
  onActiveChange?: (id: string) => void
  collapsed?: boolean
  defaultCollapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
  items?: DataOsSidebarItem[]
  footerItems?: DataOsSidebarItem[]
  enablePinning?: boolean         // default true
  maxPinned?: number              // default 3
  pinnedIds?: string[]            // controlled pinned order
  defaultPinnedIds?: string[]     // default ["data-products"]
  onPinnedChange?: (ids: string[]) => void
  className?: string
}`,

  expanded: `"use client"

import { DataOsSidebar } from "@/components/blocks/dataos-sidebar"

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

export function AppShell() {
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

export function AppShell() {
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

// Data Products is pinned by default (pinLocked) and cannot be unpinned.
// Users can pin two more apps (max 3 total). Persist pinnedIds across reloads.
export function AppShell() {
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
