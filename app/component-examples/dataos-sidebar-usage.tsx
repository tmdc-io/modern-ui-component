"use client"

import * as React from "react"

import { DataOsSidebar } from "@/registry/default/blocks/dataos-sidebar/dataos-sidebar"

export function DataOsSidebarExpandedPreview() {
  return (
    <div className="border-grey-8 h-[36rem] w-full overflow-hidden rounded-lg border">
      <DataOsSidebar defaultActiveId="home" />
    </div>
  )
}

export function DataOsSidebarCollapsedPreview() {
  return (
    <div className="border-grey-8 h-[36rem] w-full overflow-hidden rounded-lg border">
      <DataOsSidebar defaultActiveId="home" defaultCollapsed />
    </div>
  )
}

export function DataOsSidebarInteractivePreview() {
  const [collapsed, setCollapsed] = React.useState(false)
  const [activeId, setActiveId] = React.useState("home")

  return (
    <div className="border-grey-8 flex h-[36rem] w-full overflow-hidden rounded-lg border">
      <DataOsSidebar
        activeId={activeId}
        onActiveChange={setActiveId}
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
      />
      <div className="bg-background text-muted-foreground flex flex-1 items-center justify-center p-6 text-sm">
        Active: <span className="text-foreground ml-1 font-medium">{activeId}</span>
        <span className="mx-2">•</span>
        {collapsed ? "Collapsed" : "Expanded"}
      </div>
    </div>
  )
}

export function DataOsSidebarPinnedPreview() {
  const [pinnedIds, setPinnedIds] = React.useState<string[]>(["data-products"])
  const [activeId, setActiveId] = React.useState("home")

  return (
    <div className="border-grey-8 flex h-[36rem] w-full overflow-hidden rounded-lg border">
      <DataOsSidebar
        activeId={activeId}
        onActiveChange={setActiveId}
        pinnedIds={pinnedIds}
        onPinnedChange={setPinnedIds}
      />
      <div className="bg-background text-muted-foreground flex flex-1 flex-col items-center justify-center gap-1 p-6 text-sm">
        <p>
          Data Products is pinned by default and cannot be unpinned. Pin up to two
          more apps, then drag pinned rows to reorder.
        </p>
        <p>
          Pinned:{" "}
          <span className="text-foreground font-medium">
            {pinnedIds.length ? pinnedIds.join(" → ") : "none"}
          </span>
        </p>
      </div>
    </div>
  )
}
