"use client"

import * as React from "react"

import { ApplicationHeader } from "@/registry/default/blocks/application-header/application-header"
import { DataOsSidebar } from "@/registry/default/blocks/dataos-sidebar/dataos-sidebar"

export function DataOsShellComposePreview() {
  const [activeId, setActiveId] = React.useState("home")
  const [collapsed, setCollapsed] = React.useState(false)

  return (
    <div className="flex min-h-[28rem] flex-col overflow-hidden rounded-lg border">
      <ApplicationHeader
        variant="l1"
        user={{ name: "Sara Fox", initials: "SF" }}
      />
      <div className="flex min-h-0 flex-1">
        <DataOsSidebar
          activeId={activeId}
          onActiveChange={setActiveId}
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
        />
        <main className="bg-background flex-1 p-6">
          <h1 className="text-lg font-semibold capitalize">{activeId}</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Composed shell: header + sidebar + main content area.
          </p>
        </main>
      </div>
    </div>
  )
}
