export const applicationHeaderCodes = {
  install: `npx shadcn@latest add @modernui/application-header
npx shadcn@latest add tmdc-io/modern-ui-component/application-header`,

  props: `/**
 * ApplicationHeader types
 * -----------------------
 * variant "l1" — expanded tenant switcher (home / top-level routes)
 * variant "l2" — badge-only tenant + breadcrumbs (nested routes)
 * tenants[].className — pastel badge colors per environment
 * Last breadcrumb typically has no href (current page)
 */
type ApplicationHeaderTenant = {
  id: string
  name: string
  initials: string
  className?: string
}

type ApplicationHeaderBreadcrumb = {
  label: string
  href?: string
}

type ApplicationHeaderUser = {
  name?: string
  initials: string
  src?: string
  className?: string
}

type ApplicationHeaderProps = {
  variant?: "l1" | "l2"
  tenants?: ApplicationHeaderTenant[]
  tenantId?: string
  defaultTenantId?: string
  onTenantChange?: (id: string) => void
  breadcrumbs?: ApplicationHeaderBreadcrumb[]
  user?: ApplicationHeaderUser
  className?: string
}`,

  l1: `"use client"

import { ApplicationHeader } from "@/components/blocks/application-header"

/**
 * Level 1 — tenant switch
 * -----------------------
 * Shows colored badge + tenant name + chevron. Click opens the tenant
 * list with a check on the active item. Pair with DataOsSidebar below.
 */
const tenants = [
  {
    id: "pr",
    name: "Product-Sandbox",
    initials: "PR",
    className: "border-pink-200 bg-pink-100 text-pink-900",
  },
  {
    id: "ct",
    name: "Ct-Sandbox",
    initials: "CT",
    className: "border-green-200 bg-green-100 text-green-900",
  },
  {
    id: "de",
    name: "Demo",
    initials: "DE",
    className: "border-sky-200 bg-sky-100 text-sky-900",
  },
]

export function L1AppShell() {
  return (
    <div className="flex min-h-[12rem] flex-col overflow-hidden rounded-lg border">
      <ApplicationHeader
        variant="l1"
        tenants={tenants}
        defaultTenantId="pr"
        user={{ name: "Sara Fox", initials: "SF" }}
      />
      <main className="bg-background flex-1 p-6">
        <h1 className="text-lg font-semibold">Home</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          L1 header with tenant switcher and user avatar.
        </p>
      </main>
    </div>
  )
}`,

  l2: `"use client"

import { ApplicationHeader } from "@/components/blocks/application-header"

/**
 * Level 2 — breadcrumbs
 * ---------------------
 * Tenant collapses to initials badge; breadcrumbs fill the center.
 * On narrow widths, parent crumbs collapse into an ellipsis dropdown.
 * Final crumb has no href (current page).
 */
const breadcrumbs = [
  { label: "Data Products", href: "/data-products" },
  { label: "E-Commerce & Digital Experi...", href: "/data-products/ecommerce" },
  { label: "Overview" },
]

export function L2AppShell() {
  return (
    <div className="flex min-h-[12rem] flex-col overflow-hidden rounded-lg border">
      <ApplicationHeader
        variant="l2"
        breadcrumbs={breadcrumbs}
        user={{ name: "Sara Fox", initials: "SF" }}
      />
      <main className="bg-background flex-1 p-6">
        <h1 className="text-lg font-semibold">Overview</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          L2 header with breadcrumb trail for nested routes.
        </p>
      </main>
    </div>
  )
}`,

  tenantStates: `"use client"

import { ApplicationHeader } from "@/components/blocks/application-header"

/**
 * Tenant badge palette
 * --------------------
 * Each tenant uses a two-letter badge + pastel className. Override the
 * tenants array for your environments (sandbox, prod, demo, …).
 */
const tenants = [
  {
    id: "pr",
    name: "Product-Sandbox",
    initials: "PR",
    className: "border-pink-200 bg-pink-100 text-pink-900",
  },
  {
    id: "ct",
    name: "Ct-Sandbox",
    initials: "CT",
    className: "border-green-200 bg-green-100 text-green-900",
  },
  {
    id: "de",
    name: "Demo",
    initials: "DE",
    className: "border-sky-200 bg-sky-100 text-sky-900",
  },
  {
    id: "st",
    name: "Staging",
    initials: "ST",
    className: "border-amber-200 bg-amber-100 text-amber-900",
  },
]

export function TenantPaletteHeader() {
  return (
    <ApplicationHeader
      variant="l1"
      tenants={tenants}
      defaultTenantId="pr"
      user={{ name: "Sara Fox", initials: "SF" }}
    />
  )
}`,

  controlled: `"use client"

import * as React from "react"

import { ApplicationHeader } from "@/components/blocks/application-header"

/**
 * Controlled tenant
 * -----------------
 * Parent owns tenantId so route loaders / feature flags can react to
 * sandbox switches. onTenantChange updates shell state.
 */
const tenants = [
  {
    id: "pr",
    name: "Product-Sandbox",
    initials: "PR",
    className: "border-pink-200 bg-pink-100 text-pink-900",
  },
  {
    id: "ct",
    name: "Ct-Sandbox",
    initials: "CT",
    className: "border-green-200 bg-green-100 text-green-900",
  },
]

export function ControlledTenantShell() {
  const [tenantId, setTenantId] = React.useState("pr")
  const active = tenants.find((tenant) => tenant.id === tenantId)

  return (
    <div className="flex min-h-[12rem] flex-col overflow-hidden rounded-lg border">
      <ApplicationHeader
        variant="l1"
        tenants={tenants}
        tenantId={tenantId}
        onTenantChange={setTenantId}
        user={{ name: "Sara Fox", initials: "SF" }}
      />
      <main className="bg-background flex-1 p-6">
        <h1 className="text-lg font-semibold">{active?.name}</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Controlled tenant id: {tenantId}
        </p>
      </main>
    </div>
  )
}`,

  compose: `"use client"

import * as React from "react"

import { ApplicationHeader } from "@/components/blocks/application-header"
import { DataOsSidebar } from "@/components/blocks/dataos-sidebar"

/**
 * Full DataOS shell
 * -----------------
 * Stack L1 ApplicationHeader above DataOsSidebar + main.
 * Keep activeId / collapsed in the shell so header and sidebar stay aligned.
 */
export function DataOsAppShell() {
  const [activeId, setActiveId] = React.useState("home")
  const [collapsed, setCollapsed] = React.useState(false)

  return (
    <div className="flex min-h-screen flex-col">
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
        <main className="flex-1 p-6">{/* route content for \${activeId} */}</main>
      </div>
    </div>
  )
}`,
}
