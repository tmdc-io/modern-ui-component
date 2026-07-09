"use client"

import * as React from "react"
import { CheckIcon, ChevronDownIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export type ApplicationHeaderTenant = {
  id: string
  name: string
  initials: string
  /** Tailwind classes for the tenant badge background, border, and text. */
  className?: string
}

export type ApplicationHeaderBreadcrumb = {
  label: string
  href?: string
}

export type ApplicationHeaderUser = {
  name?: string
  initials: string
  src?: string
  className?: string
}

export type ApplicationHeaderVariant = "l1" | "l2"

export type ApplicationHeaderProps = {
  /** L1 = tenant label + chevron. L2 = badge-only tenant trigger with breadcrumbs. */
  variant?: ApplicationHeaderVariant
  tenants?: ApplicationHeaderTenant[]
  tenantId?: string
  defaultTenantId?: string
  onTenantChange?: (id: string) => void
  breadcrumbs?: ApplicationHeaderBreadcrumb[]
  user?: ApplicationHeaderUser
  className?: string
}

const defaultTenants: ApplicationHeaderTenant[] = [
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

const defaultBreadcrumbs: ApplicationHeaderBreadcrumb[] = [
  { label: "Data Products", href: "#" },
  { label: "E-Commerce & Digital Experi...", href: "#" },
  { label: "Overview" },
]

const defaultUser: ApplicationHeaderUser = {
  initials: "IS",
  className: "bg-purple-100 text-purple-700",
}

export function ApplicationHeaderTenantBadge({
  tenant,
  size = "default",
  className,
}: {
  tenant: ApplicationHeaderTenant
  size?: "default" | "sm"
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-md border font-semibold",
        size === "sm" ? "size-6 text-[10px]" : "size-7 text-[11px]",
        tenant.className,
        className
      )}
    >
      {tenant.initials}
    </span>
  )
}

function ApplicationHeaderUserAvatar({ user }: { user: ApplicationHeaderUser }) {
  return (
    <Avatar size="sm" className="size-7">
      {user.src ? <AvatarImage src={user.src} alt={user.name ?? user.initials} /> : null}
      <AvatarFallback
        className={cn("text-[11px] font-semibold", user.className)}
      >
        {user.initials}
      </AvatarFallback>
    </Avatar>
  )
}

function TenantSwitcher({
  tenants,
  activeTenant,
  expanded,
  onSelect,
}: {
  tenants: ApplicationHeaderTenant[]
  activeTenant: ApplicationHeaderTenant
  expanded: boolean
  onSelect: (id: string) => void
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "text-foreground hover:bg-muted/60 inline-flex items-center rounded-md outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring/50",
            expanded ? "gap-2 px-1 py-1" : "p-1"
          )}
          aria-label={`Switch tenant, current: ${activeTenant.name}`}
        >
          <ApplicationHeaderTenantBadge tenant={activeTenant} />
          {expanded ? (
            <>
              <span className="max-w-[12rem] truncate text-sm font-medium">
                {activeTenant.name}
              </span>
              <ChevronDownIcon className="text-muted-foreground size-4 shrink-0" />
            </>
          ) : null}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        {tenants.map((tenant) => {
          const selected = tenant.id === activeTenant.id
          return (
            <DropdownMenuItem
              key={tenant.id}
              className="gap-2.5"
              onSelect={() => onSelect(tenant.id)}
            >
              <ApplicationHeaderTenantBadge tenant={tenant} size="sm" />
              <span className="flex-1 truncate">{tenant.name}</span>
              {selected ? (
                <CheckIcon className="text-muted-foreground size-4 shrink-0" />
              ) : (
                <span className="size-4 shrink-0" aria-hidden />
              )}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function ApplicationHeaderBreadcrumbs({
  items,
}: {
  items: ApplicationHeaderBreadcrumb[]
}) {
  return (
    <Breadcrumb className="min-w-0">
      <BreadcrumbList className="flex-nowrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <React.Fragment key={`${item.label}-${index}`}>
              {index > 0 ? <BreadcrumbSeparator /> : null}
              <BreadcrumbItem className="min-w-0">
                {isLast || !item.href ? (
                  <BreadcrumbPage className="max-w-[14rem] truncate text-sm font-normal">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={item.href}
                    className="max-w-[14rem] truncate text-sm font-normal"
                  >
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export function ApplicationHeader({
  variant = "l1",
  tenants = defaultTenants,
  tenantId,
  defaultTenantId = "pr",
  onTenantChange,
  breadcrumbs = defaultBreadcrumbs,
  user = defaultUser,
  className,
}: ApplicationHeaderProps) {
  const isControlled = tenantId !== undefined
  const [internalTenantId, setInternalTenantId] = React.useState(defaultTenantId)
  const resolvedTenantId = isControlled ? tenantId : internalTenantId

  const activeTenant =
    tenants.find((tenant) => tenant.id === resolvedTenantId) ?? tenants[0]

  const handleTenantChange = React.useCallback(
    (id: string) => {
      if (!isControlled) setInternalTenantId(id)
      onTenantChange?.(id)
    },
    [isControlled, onTenantChange]
  )

  const tenantExpanded = variant === "l1"

  return (
    <header
      className={cn(
        "bg-background text-foreground flex h-14 items-center justify-between gap-4 border-b border-border px-4",
        className
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <TenantSwitcher
          tenants={tenants}
          activeTenant={activeTenant}
          expanded={tenantExpanded}
          onSelect={handleTenantChange}
        />
        {variant === "l2" ? (
          <ApplicationHeaderBreadcrumbs items={breadcrumbs} />
        ) : null}
      </div>

      <ApplicationHeaderUserAvatar user={user} />
    </header>
  )
}
