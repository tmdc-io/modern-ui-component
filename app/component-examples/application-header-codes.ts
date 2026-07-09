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

export function AppShell() {
  return (
    <div className="flex min-h-screen flex-col">
      <ApplicationHeader variant="l1" />
      <main className="flex-1">{/* page content */}</main>
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
    <div className="flex min-h-screen flex-col">
      <ApplicationHeader variant="l2" breadcrumbs={breadcrumbs} />
      <main className="flex-1">{/* page content */}</main>
    </div>
  )
}`,

  controlled: `"use client"

import * as React from "react"
import { ApplicationHeader } from "@/components/blocks/application-header"

export function AppShell() {
  const [tenantId, setTenantId] = React.useState("pr")

  return (
    <div className="flex min-h-screen flex-col">
      <ApplicationHeader
        variant="l1"
        tenantId={tenantId}
        onTenantChange={setTenantId}
      />
      <main className="flex-1">{/* page content */}</main>
    </div>
  )
}`,
}
