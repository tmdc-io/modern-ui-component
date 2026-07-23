export const layoutCodes = {
  install: `npx shadcn@latest add @modernui/layout
npx shadcn@latest add tmdc-io/modern-ui-component/layout`,

  basic: `import {
  Layout,
  LayoutHeader,
  LayoutSider,
  LayoutContent,
  LayoutFooter,
} from "@/components/ui/layout"

export function Example() {
  return (
    <Layout>
      <LayoutHeader>Header</LayoutHeader>
      <Layout hasSider>
        <LayoutSider>Sider</LayoutSider>
        <LayoutContent>Content</LayoutContent>
      </Layout>
      <LayoutFooter>Footer</LayoutFooter>
    </Layout>
  )
}`,

  headerContentFooter: `import {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
} from "@/components/ui/layout"

export function Example() {
  return (
    <Layout>
      <LayoutHeader>Header</LayoutHeader>
      <LayoutContent>Content</LayoutContent>
      <LayoutFooter>Footer</LayoutFooter>
    </Layout>
  )
}`,

  headerSider: `import {
  Layout,
  LayoutHeader,
  LayoutSider,
  LayoutContent,
} from "@/components/ui/layout"

export function Example() {
  return (
    <Layout>
      <LayoutHeader>Header</LayoutHeader>
      <Layout hasSider>
        <LayoutSider>Sider</LayoutSider>
        <LayoutContent>Content</LayoutContent>
      </Layout>
    </Layout>
  )
}`,

  headerSider2: `import {
  Layout,
  LayoutHeader,
  LayoutSider,
  LayoutContent,
  LayoutFooter,
} from "@/components/ui/layout"

export function Example() {
  return (
    <Layout hasSider>
      <LayoutSider>Sider</LayoutSider>
      <Layout>
        <LayoutHeader>Header</LayoutHeader>
        <LayoutContent>Content</LayoutContent>
        <LayoutFooter>Footer</LayoutFooter>
      </Layout>
    </Layout>
  )
}`,

  sider: `import { Layout, LayoutSider, LayoutContent } from "@/components/ui/layout"

export function Example() {
  return (
    <Layout hasSider>
      <LayoutSider>Sider</LayoutSider>
      <LayoutContent>Content</LayoutContent>
    </Layout>
  )
}`,

  customTrigger: `"use client"

import * as React from "react"
import { MenuIcon } from "lucide-react"
import { Layout, LayoutSider, LayoutContent } from "@/components/ui/layout"

export function Example() {
  const [collapsed, setCollapsed] = React.useState(false)

  return (
    <Layout hasSider>
      <LayoutSider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        trigger={
          <button type="button" className="flex h-10 w-full items-center justify-center gap-2">
            <MenuIcon className="size-4" />
            {collapsed ? "Open" : "Close"}
          </button>
        }
      >
        Sider
      </LayoutSider>
      <LayoutContent>Content</LayoutContent>
    </Layout>
  )
}`,

  collapsible: `import { Layout, LayoutSider, LayoutContent } from "@/components/ui/layout"

export function Example() {
  return (
    <Layout hasSider>
      <LayoutSider collapsible width={200} collapsedWidth={64}>
        Sider
      </LayoutSider>
      <LayoutContent>Content</LayoutContent>
    </Layout>
  )
}`,

  fixedHeader: `import { Layout, LayoutHeader, LayoutContent } from "@/components/ui/layout"

export function Example() {
  return (
    <Layout className="h-screen overflow-hidden">
      <LayoutHeader className="sticky top-0 z-10">Header</LayoutHeader>
      <LayoutContent className="overflow-y-auto">
        {/* long content */}
      </LayoutContent>
    </Layout>
  )
}`,

  fixedSider: `import { Layout, LayoutSider, LayoutContent } from "@/components/ui/layout"

export function Example() {
  return (
    <Layout hasSider className="h-screen overflow-hidden">
      <LayoutSider className="sticky top-0 h-full self-start">Sider</LayoutSider>
      <LayoutContent className="overflow-y-auto">
        {/* long content */}
      </LayoutContent>
    </Layout>
  )
}`,

  withSidebar: `"use client"

import {
  Layout,
  LayoutHeader,
  LayoutContent,
} from "@/components/ui/layout"
import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function Example() {
  return (
    <SidebarProvider>
      <Sidebar>{/* nav items */}</Sidebar>
      <SidebarInset>
        <Layout>
          <LayoutHeader>
            <SidebarTrigger />
          </LayoutHeader>
          <LayoutContent>{/* page */}</LayoutContent>
        </Layout>
      </SidebarInset>
    </SidebarProvider>
  )
}`,

  dataosShell: `"use client"

import * as React from "react"
import { ApplicationHeader } from "@/components/blocks/application-header"
import { DataOsSidebar } from "@/components/blocks/dataos-sidebar"
import { Layout, LayoutContent } from "@/components/ui/layout"

export function DataOsShellWithHeader() {
  const [collapsed, setCollapsed] = React.useState(true)

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full-height overlay — expand does not shrink header/content */}
      <DataOsSidebar
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
        className="absolute inset-y-0 left-0 z-20 h-full shadow-md"
      />
      {/* pl-14 reserves the collapsed rail (w-14); expanded overlays on top */}
      <Layout className="min-h-screen pl-14">
        <ApplicationHeader variant="l1" />
        <LayoutContent className="p-6">{/* page */}</LayoutContent>
      </Layout>
    </div>
  )
}`,

  dataosHome: `"use client"

import * as React from "react"
import { DataOsSidebar } from "@/components/blocks/dataos-sidebar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Layout, LayoutContent } from "@/components/ui/layout"

const titles: Record<string, string> = {
  home: "Home Page",
  "data-products": "Data Products",
  datasets: "Datasets",
  workbench: "Workbench",
  resources: "Resources",
  more: "More",
}

export function DataOsHomeShell() {
  const [activeId, setActiveId] = React.useState("home")

  return (
    <Layout hasSider className="min-h-screen">
      <DataOsSidebar
        activeId={activeId}
        onActiveChange={setActiveId}
        collapsed={false}
      />
      <LayoutContent className="relative flex flex-col">
        <div className="absolute top-4 right-4">
          <Avatar size="sm" className="size-7">
            <AvatarFallback className="bg-purple-100 text-[11px] font-semibold text-purple-700">
              IS
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <p className="text-muted-foreground/50 text-4xl font-medium">
            {titles[activeId] ?? "Home Page"}
          </p>
        </div>
      </LayoutContent>
    </Layout>
  )
}`,
}
