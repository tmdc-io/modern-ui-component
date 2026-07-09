"use client"

import * as React from "react"
import {
  AlertTriangleIcon,
  BoxIcon,
  CircleXIcon,
  FileTextIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"

export type DataProductCardBadgeStatus = "pass" | "warn" | "fail"

export type DataProductCardBadge = {
  label: string
  status: DataProductCardBadgeStatus
}

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
  className,
}: DataProductCardProps) {
  const interactive = Boolean(href || onClick)

  const content = (
    <>
      <div className="flex items-start gap-3">
        <span
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-lg",
            iconClassName
          )}
        >
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-base leading-snug font-semibold text-foreground">
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

      <p className="text-foreground mt-4 line-clamp-3 text-sm leading-relaxed">
        {description}
      </p>

      {badge ? (
        <div className="mt-4">
          <DataProductCardBadgePill badge={badge} />
        </div>
      ) : null}
    </>
  )

  const cardClassName = cn(
    "bg-card flex w-full max-w-[22rem] flex-col rounded-xl border border-border/70 p-5 text-card-foreground shadow-sm",
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
