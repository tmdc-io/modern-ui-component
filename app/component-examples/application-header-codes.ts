export const applicationHeaderCodes = {
  install: `npx shadcn@latest add tmdc-io/modern-ui-component/application-header`,

  props: `type ApplicationHeaderTenant = {
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
  variant?: "l1" | "l2"        // default "l1"
  tenants?: ApplicationHeaderTenant[]
  tenantId?: string
  defaultTenantId?: string     // default "pr"
  onTenantChange?: (id: string) => void
  breadcrumbs?: ApplicationHeaderBreadcrumb[]
  user?: ApplicationHeaderUser
  className?: string
}`,

  l1: `"use client"

import { ApplicationHeader } from "@/components/blocks/application-header"

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

export function AppShell() {
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

const breadcrumbs = [
  { label: "Data Products", href: "/data-products" },
  { label: "E-Commerce & Digital Experi...", href: "/data-products/ecommerce" },
  { label: "Overview" },
]

export function AppShell() {
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

  controlled: `"use client"

import * as React from "react"
import { ApplicationHeader } from "@/components/blocks/application-header"

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

export function AppShell() {
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
}
