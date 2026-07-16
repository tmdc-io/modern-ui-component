"use client"

import * as React from "react"
import {
  Calendar,
  Home,
  Inbox,
  MenuIcon,
  Search,
  Settings,
} from "lucide-react"

import { ApplicationHeader } from "@/registry/default/blocks/application-header/application-header"
import { DataOsSidebar } from "@/registry/default/blocks/dataos-sidebar/dataos-sidebar"
import { Avatar, AvatarFallback } from "@/registry/default/ui/avatar"
import { Button } from "@/registry/default/ui/button"
import {
  Layout,
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  LayoutSider,
} from "@/registry/default/ui/layout"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/default/ui/sidebar"
import { cn } from "@/lib/utils"

function DemoFrame({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        // Default compact height (Ant-style). Pass h-full when the preview canvas is tall.
        "bg-background h-[280px] w-full overflow-hidden",
        className
      )}
      data-slot="layout-demo-frame"
    >
      {children}
    </div>
  )
}

function Region({
  label,
  className,
}: {
  label: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "text-muted-foreground flex size-full min-h-10 items-center justify-center text-xs font-medium tracking-wide uppercase",
        className
      )}
    >
      {label}
    </div>
  )
}

export function LayoutBasicPreview() {
  return (
    <DemoFrame>
      <Layout className="h-full">
        <LayoutHeader className="bg-muted/60">
          <Region label="Header" />
        </LayoutHeader>
        <Layout hasSider className="min-h-0 flex-1">
          <LayoutSider width={120} className="bg-muted/30">
            <Region label="Sider" className="min-h-full" />
          </LayoutSider>
          <LayoutContent className="bg-muted/20">
            <Region label="Content" />
          </LayoutContent>
        </Layout>
        <LayoutFooter className="bg-muted/60">
          <Region label="Footer" />
        </LayoutFooter>
      </Layout>
    </DemoFrame>
  )
}

export function LayoutHeaderContentFooterPreview() {
  return (
    <DemoFrame>
      <Layout className="h-full">
        <LayoutHeader className="bg-muted/60">
          <Region label="Header" />
        </LayoutHeader>
        <LayoutContent className="bg-muted/20">
          <Region label="Content" />
        </LayoutContent>
        <LayoutFooter className="bg-muted/60">
          <Region label="Footer" />
        </LayoutFooter>
      </Layout>
    </DemoFrame>
  )
}

export function LayoutHeaderSiderPreview() {
  return (
    <DemoFrame>
      <Layout className="h-full">
        <LayoutHeader className="bg-muted/60">
          <Region label="Header" />
        </LayoutHeader>
        <Layout hasSider className="min-h-0 flex-1">
          <LayoutSider width={140} className="bg-muted/30">
            <Region label="Sider" className="min-h-full" />
          </LayoutSider>
          <LayoutContent>
            <Region label="Content" className="min-h-full" />
          </LayoutContent>
        </Layout>
      </Layout>
    </DemoFrame>
  )
}

export function LayoutHeaderSider2Preview() {
  return (
    <DemoFrame>
      <Layout hasSider className="h-full">
        <LayoutSider width={140} className="bg-muted/30">
          <Region label="Sider" className="min-h-full" />
        </LayoutSider>
        <Layout className="min-w-0 flex-1">
          <LayoutHeader className="bg-muted/60">
            <Region label="Header" />
          </LayoutHeader>
          <LayoutContent>
            <Region label="Content" className="min-h-full" />
          </LayoutContent>
          <LayoutFooter className="bg-muted/60">
            <Region label="Footer" />
          </LayoutFooter>
        </Layout>
      </Layout>
    </DemoFrame>
  )
}

export function LayoutSiderOnlyPreview() {
  return (
    <DemoFrame>
      <Layout hasSider className="h-full">
        <LayoutSider width={140} className="bg-muted/30">
          <Region label="Sider" className="min-h-full" />
        </LayoutSider>
        <LayoutContent className="bg-muted/20">
          <Region label="Content" />
        </LayoutContent>
      </Layout>
    </DemoFrame>
  )
}

export function LayoutCustomTriggerPreview() {
  const [collapsed, setCollapsed] = React.useState(false)

  return (
    <DemoFrame>
      <Layout hasSider className="h-full">
        <LayoutSider
          width={160}
          collapsed={collapsed}
          onCollapse={setCollapsed}
          collapsible
          trigger={
            <button
              type="button"
              className="text-muted-foreground hover:bg-muted hover:text-foreground flex h-10 w-full items-center justify-center gap-2 text-xs"
            >
              <MenuIcon className="size-4" />
              {collapsed ? "Open" : "Close"}
            </button>
          }
          className="bg-muted/30"
        >
          <Region label="Sider" className="min-h-full pb-10" />
        </LayoutSider>
        <LayoutContent className="bg-muted/20">
          <Region label="Content" />
        </LayoutContent>
      </Layout>
    </DemoFrame>
  )
}

export function LayoutCollapsiblePreview() {
  return (
    <DemoFrame>
      <Layout hasSider className="h-full">
        <LayoutSider
          collapsible
          width={160}
          collapsedWidth={64}
          className="bg-muted/30"
        >
          <Region label="Sider" className="min-h-full pb-10" />
        </LayoutSider>
        <LayoutContent className="bg-muted/20">
          <Region label="Content" />
        </LayoutContent>
      </Layout>
    </DemoFrame>
  )
}

export function LayoutFixedHeaderPreview() {
  return (
    <DemoFrame className="h-full">
      <Layout className="h-full overflow-hidden">
        <LayoutHeader className="bg-background/95 sticky top-0 z-10 backdrop-blur">
          <Region label="Fixed Header" />
        </LayoutHeader>
        <LayoutContent className="overflow-y-auto">
          <div className="space-y-3 p-4">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="bg-muted/40 text-muted-foreground rounded-md px-3 py-6 text-center text-xs"
              >
                Scroll section {i + 1}
              </div>
            ))}
          </div>
        </LayoutContent>
      </Layout>
    </DemoFrame>
  )
}

export function LayoutFixedSiderPreview() {
  return (
    <DemoFrame className="h-full">
      <Layout hasSider className="h-full overflow-hidden">
        <LayoutSider
          width={140}
          className="bg-muted/30 sticky top-0 h-full self-start"
        >
          <Region label="Fixed Sider" className="min-h-full" />
        </LayoutSider>
        <LayoutContent className="overflow-y-auto">
          <div className="space-y-3 p-4">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="bg-muted/40 text-muted-foreground rounded-md px-3 py-6 text-center text-xs"
              >
                Scroll section {i + 1}
              </div>
            ))}
          </div>
        </LayoutContent>
      </Layout>
    </DemoFrame>
  )
}

const sidebarItems = [
  { title: "Home", icon: Home },
  { title: "Inbox", icon: Inbox },
  { title: "Calendar", icon: Calendar },
  { title: "Search", icon: Search },
  { title: "Settings", icon: Settings },
]

export function LayoutWithSidebarPreview() {
  return (
    <DemoFrame className="h-full">
      <SidebarProvider className="h-full !min-h-0">
        <Sidebar collapsible="icon" className="border-r">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton>
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <Layout className="h-full">
            <LayoutHeader className="gap-2">
              <SidebarTrigger />
              <span className="text-sm font-medium">App</span>
            </LayoutHeader>
            <LayoutContent className="p-4">
              <p className="text-muted-foreground text-sm">
                Layout + Sidebar — rich nav from{" "}
                <code className="text-foreground">sidebar</code>, chrome from{" "}
                <code className="text-foreground">layout</code>.
              </p>
            </LayoutContent>
          </Layout>
        </SidebarInset>
      </SidebarProvider>
    </DemoFrame>
  )
}

export function LayoutDataOsShellPreview() {
  const [activeId, setActiveId] = React.useState("home")
  const [collapsed, setCollapsed] = React.useState(true)

  return (
    <DemoFrame className="h-full">
      <div className="relative h-full overflow-hidden">
        {/* Full-height overlay sidebar — expand/collapse does not resize header/content */}
        <DataOsSidebar
          activeId={activeId}
          onActiveChange={setActiveId}
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
          className={cn(
            "absolute inset-y-0 left-0 z-20 !min-h-0 h-full shadow-md",
            !collapsed && "shadow-lg"
          )}
        />
        {/* Fixed left gutter = collapsed rail width (3.5rem / w-14) */}
        <Layout className="h-full min-w-0 pl-14">
          <ApplicationHeader variant="l1" className="shrink-0" />
          <LayoutContent className="min-h-0 flex-1 overflow-auto p-4">
            <p className="text-muted-foreground text-sm">
              Full-height sidebar overlays header and content. Expand/collapse
              keeps the header and content width stable.
            </p>
            <p className="text-muted-foreground mt-2 text-sm">
              Active:{" "}
              <span className="text-foreground font-medium">{activeId}</span>
              <span className="mx-2">·</span>
              {collapsed ? "Collapsed" : "Expanded"}
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Primary action
            </Button>
          </LayoutContent>
        </Layout>
      </div>
    </DemoFrame>
  )
}

const dataOsPageTitles: Record<string, string> = {
  home: "Home Page",
  "data-products": "Data Products",
  datasets: "Datasets",
  workbench: "Workbench",
  resources: "Resources",
  more: "More",
}

/** Matches the DataOS home shell: sidebar + avatar + centered page title. */
export function LayoutDataOsHomePreview() {
  const [activeId, setActiveId] = React.useState("home")
  const title = dataOsPageTitles[activeId] ?? "Home Page"

  return (
    <DemoFrame className="h-full">
      <Layout hasSider className="h-full overflow-hidden">
        <DataOsSidebar
          activeId={activeId}
          onActiveChange={setActiveId}
          collapsed={false}
          className="h-full !min-h-0"
        />
        <LayoutContent className="bg-background relative flex min-h-0 flex-col">
          <div className="absolute top-4 right-4 z-10">
            <Avatar size="sm" className="size-7">
              <AvatarFallback className="bg-purple-100 text-[11px] font-semibold text-purple-700">
                IS
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-1 items-center justify-center p-6">
            <p className="text-muted-foreground/50 text-4xl font-medium tracking-tight select-none">
              {title}
            </p>
          </div>
        </LayoutContent>
      </Layout>
    </DemoFrame>
  )
}

/** Compact catalog / home thumbnail. */
export function LayoutCatalogPreview() {
  return (
    <div className="border-border h-28 w-full max-w-sm overflow-hidden rounded-lg border">
      <Layout className="h-full text-[10px]">
        <LayoutHeader className="bg-muted/60 h-7 px-2">
          <Region label="Header" />
        </LayoutHeader>
        <Layout hasSider className="min-h-0 flex-1">
          <LayoutSider width={56} className="bg-muted/30">
            <Region label="Sider" className="min-h-full" />
          </LayoutSider>
          <LayoutContent>
            <Region label="Content" className="min-h-full" />
          </LayoutContent>
        </Layout>
        <LayoutFooter className="bg-muted/60 h-7 px-2">
          <Region label="Footer" />
        </LayoutFooter>
      </Layout>
    </div>
  )
}
