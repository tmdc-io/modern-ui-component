"use client"

import * as React from "react"
import {
  AlertTriangleIcon,
  BoxIcon,
  CircleXIcon,
  FileTextIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/registry/default/ui/skeleton"

export type DataProductCardBadgeStatus = "pass" | "warn" | "fail"

export type DataProductCardBadge = {
  label: string
  status: DataProductCardBadgeStatus
}

export type DataProductCardSize = "default" | "sm"

export type DataProductCardProps = {
  title: string
  subtitle?: string
  description: string
  icon?: React.ReactNode
  /** Tailwind classes for the icon container background. */
  iconClassName?: string
  badge?: DataProductCardBadge
  href?: string
  onClick?: () => void
  size?: DataProductCardSize
  className?: string
}

const badgeClassName: Record<DataProductCardBadgeStatus, string> = {
  pass: "bg-dataos-success-bg text-dataos-success-fg",
  warn: "bg-dataos-warn-bg text-dataos-warn-fg",
  fail: "bg-dataos-fail-bg text-dataos-fail-fg",
}

function DataProductCardBadgeIcon({ status }: { status: DataProductCardBadgeStatus }) {
  if (status === "warn") {
    return (
      <AlertTriangleIcon className="size-3.5 shrink-0" strokeWidth={2.25} />
    )
  }

  if (status === "fail") {
    return <CircleXIcon className="size-3.5 shrink-0" strokeWidth={2} />
  }

  return null
}

export function DataProductCardBadgePill({ badge }: { badge: DataProductCardBadge }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        badgeClassName[badge.status]
      )}
    >
      <DataProductCardBadgeIcon status={badge.status} />
      {badge.label}
    </span>
  )
}

export function DataProductCard({
  title,
  subtitle,
  description,
  icon = <BoxIcon className="size-5" strokeWidth={1.75} />,
  iconClassName = "bg-teal-bg-2 text-foreground",
  badge,
  href,
  onClick,
  size = "default",
  className,
}: DataProductCardProps) {
  const interactive = Boolean(href || onClick)
  const compact = size === "sm"

  const content = (
    <>
      <div className="flex items-start gap-3">
        <span
          className={cn(
            "flex shrink-0 items-center justify-center rounded-lg",
            compact ? "size-8" : "size-10",
            iconClassName
          )}
        >
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <h3
            className={cn(
              "leading-snug font-semibold break-words text-foreground",
              compact ? "text-sm" : "text-base"
            )}
          >
            {title}
          </h3>
          {subtitle ? (
            <p className="text-muted-foreground mt-1 flex items-center gap-1.5 text-sm">
              <FileTextIcon className="size-3.5 shrink-0" strokeWidth={1.75} />
              <span className="truncate">{subtitle}</span>
            </p>
          ) : null}
        </div>
      </div>

      <p
        className={cn(
          "text-foreground line-clamp-3 leading-relaxed",
          compact ? "mt-3 text-xs" : "mt-4 text-sm"
        )}
      >
        {description}
      </p>

      {badge ? (
        <div className={compact ? "mt-3" : "mt-4"}>
          <DataProductCardBadgePill badge={badge} />
        </div>
      ) : null}
    </>
  )

  const cardClassName = cn(
    "bg-card flex w-full min-w-0 max-w-[22rem] flex-col rounded-xl border border-border/70 text-card-foreground shadow-sm",
    compact ? "p-4" : "p-5",
    interactive && "hover:border-border transition-colors",
    className
  )

  if (href) {
    return (
      <a href={href} className={cn(cardClassName, "outline-none focus-visible:ring-2 focus-visible:ring-ring/50")}>
        {content}
      </a>
    )
  }

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={cn(cardClassName, "text-left outline-none focus-visible:ring-2 focus-visible:ring-ring/50")}
      >
        {content}
      </button>
    )
  }

  return <article className={cardClassName}>{content}</article>
}

export type DataProductCardSkeletonProps = {
  size?: DataProductCardSize
  className?: string
}

export function DataProductCardSkeleton({
  size = "default",
  className,
}: DataProductCardSkeletonProps) {
  const compact = size === "sm"
  return (
    <div
      className={cn(
        "bg-card flex w-full min-w-0 max-w-[22rem] flex-col rounded-xl border border-border/70 shadow-sm",
        compact ? "gap-3 p-4" : "gap-4 p-5",
        className
      )}
      aria-busy="true"
      aria-hidden
    >
      <div className="flex items-start gap-3">
        <Skeleton className={cn("rounded-lg", compact ? "size-8" : "size-10")} />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className={cn("h-4", compact ? "w-32" : "w-40")} />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <Skeleton className={cn("w-full", compact ? "h-10" : "h-14")} />
      <Skeleton className="h-6 w-20 rounded-full" />
    </div>
  )
}
