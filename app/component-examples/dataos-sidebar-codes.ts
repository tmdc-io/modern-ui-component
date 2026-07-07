export const dataosSidebarCodes = {
  install: `npx shadcn@latest add tmdc-io/modern-ui-component/dataos-sidebar`,

  props: `type DataOsSidebarItem = {
  id: string
  label: string
  icon: React.ReactNode
  href?: string
  onSelect?: () => void
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
  defaultPinnedIds?: string[]     // uncontrolled initial pins
  onPinnedChange?: (ids: string[]) => void
  className?: string
}`,

  expanded: `"use client"

import { DataOsSidebar } from "@/components/blocks/dataos-sidebar"

export function AppShell() {
  return (
    <div className="flex min-h-screen">
      <DataOsSidebar defaultActiveId="home" />
      <main className="flex-1">{/* page content */}</main>
    </div>
  )
}`,

  collapsed: `"use client"

import { DataOsSidebar } from "@/components/blocks/dataos-sidebar"

export function AppShell() {
  return (
    <div className="flex min-h-screen">
      <DataOsSidebar defaultActiveId="home" defaultCollapsed />
      <main className="flex-1">{/* page content */}</main>
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
    <div className="flex min-h-screen">
      <DataOsSidebar
        activeId={activeId}
        onActiveChange={setActiveId}
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
      />
      <main className="flex-1">{/* page content */}</main>
    </div>
  )
}`,

  pinned: `"use client"

import * as React from "react"
import { DataOsSidebar } from "@/components/blocks/dataos-sidebar"

// Pin: hover a nav item and click the pin icon (max 3, per the design).
// Pinned apps sit in a dedicated area under Home and can be dragged to reorder.
// Persist pinnedIds (e.g. localStorage or a user preferences API) to keep them.
export function AppShell() {
  const [pinnedIds, setPinnedIds] = React.useState<string[]>(["datasets"])

  return (
    <div className="flex min-h-screen">
      <DataOsSidebar
        enablePinning
        maxPinned={3}
        pinnedIds={pinnedIds}
        onPinnedChange={(ids) => {
          setPinnedIds(ids)
          localStorage.setItem("dataos.pinned", JSON.stringify(ids))
        }}
      />
      <main className="flex-1">{/* page content */}</main>
    </div>
  )
}`,
}
