"use client"

import * as React from "react"

import { ApplicationHeader } from "@/registry/default/blocks/application-header/application-header"

export function ApplicationHeaderL1Preview() {
  return (
    <div className="border-grey-8 w-full overflow-hidden rounded-lg border">
      <ApplicationHeader variant="l1" />
    </div>
  )
}

export function ApplicationHeaderL2Preview() {
  return (
    <div className="border-grey-8 w-full overflow-hidden rounded-lg border">
      <ApplicationHeader variant="l2" />
    </div>
  )
}

export function ApplicationHeaderInteractivePreview() {
  const [tenantId, setTenantId] = React.useState("pr")
  const [variant, setVariant] = React.useState<"l1" | "l2">("l1")

  return (
    <div className="border-grey-8 flex w-full flex-col overflow-hidden rounded-lg border">
      <ApplicationHeader
        variant={variant}
        tenantId={tenantId}
        onTenantChange={setTenantId}
      />
      <div className="bg-background text-muted-foreground flex flex-wrap items-center justify-center gap-3 p-6 text-sm">
        <span>
          Tenant: <span className="text-foreground font-medium">{tenantId}</span>
        </span>
        <button
          type="button"
          className="border-border hover:bg-muted rounded-md border px-3 py-1 text-xs"
          onClick={() => setVariant((current) => (current === "l1" ? "l2" : "l1"))}
        >
          Switch to {variant === "l1" ? "L2" : "L1"}
        </button>
      </div>
    </div>
  )
}

export function ApplicationHeaderTenantStatesPreview() {
  const tenants = [
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
      className: "border-blue-200 bg-blue-100 text-blue-900",
    },
    {
      id: "qa",
      name: "Qa",
      initials: "QA",
      className: "border-yellow-300 bg-yellow-100 text-yellow-900",
    },
    {
      id: "se",
      name: "Se-Sandbox",
      initials: "SE",
      className: "border-orange-200 bg-orange-100 text-orange-900",
    },
  ]

  return (
    <div className="border-grey-8 flex w-full flex-col gap-4 overflow-hidden rounded-lg border p-4">
      <div className="overflow-hidden rounded-md border">
        <ApplicationHeader variant="l1" tenants={tenants} defaultTenantId="ct" />
      </div>
      <div className="overflow-hidden rounded-md border">
        <ApplicationHeader variant="l2" tenants={tenants} defaultTenantId="de" />
      </div>
    </div>
  )
}
