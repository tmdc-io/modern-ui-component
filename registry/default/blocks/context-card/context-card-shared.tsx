"use client"

import * as React from "react"
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CalendarIcon,
  HashIcon,
  Link2Icon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar"
import { Button } from "@/registry/default/ui/button"

export type ContextCardSize = "full" | "sm"

export type ContextCardDelta = {
  direction?: "up" | "down"
  value: string
  label?: string
}

export type ContextCardMetric = {
  label: string
  value: React.ReactNode
  hint?: React.ReactNode
  delta?: ContextCardDelta
  leading?: React.ReactNode
  chipIcon?: React.ReactNode
  compactValue?: React.ReactNode
}

export type ContextCardContact = {
  name: string
  email: string
  role?: string
  initials?: string
  src?: string
  avatarClassName?: string
}

export type ContextCardUsageStat = {
  value: string
  label: string
}

export type ContextCardField = {
  id: string
  label: string
  icon?: React.ReactNode
  trailingIcon?: React.ReactNode
}

export type ContextCardFieldGroup = {
  id: string
  label: string
  fields?: ContextCardField[]
  summary?: React.ReactNode
  summaryIcon?: React.ReactNode
}

export const contextCardSectionLabelClassName =
  "text-[11px] font-medium tracking-[0.08em] text-[#595959] uppercase dark:text-muted-foreground"

export const contextCardMetricLabelClassName = contextCardSectionLabelClassName

export const contextCardBodyTextClassName =
  "text-[13px] leading-[1.5] text-[#595959] dark:text-muted-foreground"

export const contextCardKpiValueClassName =
  "font-serif text-[22px] leading-none font-medium tracking-tight text-[#242422] tabular-nums dark:text-foreground"

export const contextCardUsageValueClassName =
  "font-serif text-[18px] leading-6 font-medium tracking-tight text-[#242422] dark:text-foreground"

export const contextCardSectionPadClassName = "px-6 py-4"

export const contextCardFieldIconClassName = "size-3 shrink-0 text-[#8c8c8c]"

export const contextCardLinkActionClassName =
  "shrink-0 text-[12px] font-medium text-dark-teal hover:underline"

const sharedFieldIcon = (
  <Link2Icon className="size-2.5 shrink-0 text-[#bfbfbf]" strokeWidth={2} />
)

/** Clamp at a word boundary when possible; falls back to a hard cut. */
export function clampContextCardText(text: string, max: number): string {
  if (text.length <= max) return text
  const slice = text.slice(0, max)
  const lastSpace = slice.lastIndexOf(" ")
  const cut = lastSpace > max * 0.6 ? lastSpace : max
  return `${text.slice(0, cut).trimEnd()}…`
}

export function contextCardColumnPadClassName(index: number, total: number) {
  if (total <= 1) return undefined
  if (index === 0) return "pe-4"
  if (index === total - 1) return "ps-4"
  return "px-4"
}

export function createContextCardField(
  id: string,
  label: string,
  options: { calendar?: boolean; shared?: boolean } = {}
): ContextCardField {
  return {
    id,
    label,
    icon: options.calendar ? (
      <CalendarIcon
        className={contextCardFieldIconClassName}
        strokeWidth={1.75}
      />
    ) : (
      <HashIcon className={contextCardFieldIconClassName} strokeWidth={2} />
    ),
    trailingIcon: options.shared ? sharedFieldIcon : undefined,
  }
}

export function ContextCardSectionHeading({
  children,
  action,
}: {
  children: React.ReactNode
  action?: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <h3 className={contextCardSectionLabelClassName}>{children}</h3>
      {action}
    </div>
  )
}

export function ContextCardDeltaLine({ delta }: { delta: ContextCardDelta }) {
  const down = delta.direction === "down"
  const Arrow = down ? ArrowDownIcon : ArrowUpIcon
  return (
    <p className="mt-1.5 flex items-center justify-center gap-1 text-[12px] leading-4">
      <span
        className={cn(
          "inline-flex items-center gap-0.5 font-medium",
          down ? "text-[#cf1322]" : "text-dark-teal"
        )}
      >
        <Arrow className="size-3" strokeWidth={2.25} />
        {delta.value}
      </span>
      {delta.label ? <span className="text-[#8c8c8c]">{delta.label}</span> : null}
    </p>
  )
}

export function ContextCardMetricCell({
  metric,
  className,
}: {
  metric: ContextCardMetric
  className?: string
}) {
  return (
    <div className={cn("min-w-0 text-center", className)}>
      <p className={contextCardMetricLabelClassName}>{metric.label}</p>
      <div className="mt-2 flex items-center justify-center gap-1.5">
        {metric.leading}
        <p className={contextCardKpiValueClassName}>{metric.value}</p>
      </div>
      {metric.delta ? <ContextCardDeltaLine delta={metric.delta} /> : null}
      {metric.hint ? (
        <p className="mt-1.5 text-[12px] leading-4 text-[#8c8c8c]">{metric.hint}</p>
      ) : null}
    </div>
  )
}

export function ContextCardMetricChip({ metric }: { metric: ContextCardMetric }) {
  const value = metric.compactValue ?? metric.value
  return (
    <span className="inline-flex max-w-full items-center gap-1.5 rounded-md border border-[#e5e5e5] bg-white px-2.5 py-[5px] text-[12px] leading-4 text-[#595959] dark:border-border dark:bg-card dark:text-muted-foreground">
      <span className="shrink-0">{metric.chipIcon}</span>
      <span className="truncate">
        <span className="text-[#595959]">{metric.label}:</span>{" "}
        <span className="font-semibold text-[#242422] dark:text-foreground">
          {value}
        </span>
      </span>
    </span>
  )
}

export function ContextCardDescriptionBlock({
  description,
  expanded,
  onToggle,
  clamp = 160,
  mutedLink = false,
}: {
  description: string
  expanded: boolean
  onToggle: () => void
  clamp?: number
  mutedLink?: boolean
}) {
  const needsClamp = description.length > clamp
  const body =
    expanded || !needsClamp
      ? description
      : clampContextCardText(description, clamp)

  return (
    <div className="text-start">
      <p className={contextCardBodyTextClassName}>{body}</p>
      {needsClamp ? (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          className={cn(
            "mt-1.5 inline-block text-[13px] font-medium underline underline-offset-2 hover:opacity-80",
            mutedLink ? "text-[#8c8c8c]" : "text-dark-teal"
          )}
        >
          {expanded ? "View less" : "View more"}
        </button>
      ) : null}
    </div>
  )
}

export function ContextCardFieldChip({ item }: { item: ContextCardField }) {
  return (
    <span className="inline-flex items-center gap-1 rounded border border-[#ebebeb] bg-white px-1.5 py-0.5 font-mono text-[10px] leading-4 text-[#595959] dark:border-border dark:bg-card">
      {item.icon}
      {item.label}
      {item.trailingIcon}
    </span>
  )
}

export function ContextCardContactList({
  contacts,
}: {
  contacts: ContextCardContact[]
}) {
  return (
    <ul className="space-y-3.5">
      {contacts.map((contact) => (
        <li key={contact.email} className="flex items-center gap-3">
          <Avatar className="size-9 shrink-0">
            {contact.src ? <AvatarImage src={contact.src} alt="" /> : null}
            <AvatarFallback
              className={cn(
                "text-[12px] font-semibold",
                contact.avatarClassName ?? "bg-muted text-foreground"
              )}
            >
              {contact.initials ??
                contact.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate text-[13px] leading-5 font-medium text-[#242422] dark:text-foreground">
              {contact.name}
              {contact.role ? ` (${contact.role})` : null}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="block truncate text-[12px] leading-4 text-[#8c8c8c] hover:text-dark-teal hover:underline"
            >
              {contact.email}
            </a>
          </div>
        </li>
      ))}
    </ul>
  )
}

export function ContextCardPrimaryFooter({
  label,
  onClick,
}: {
  label: string
  onClick?: () => void
}) {
  return (
    <div className="border-t border-[#ebebeb] bg-white px-6 py-4 dark:border-border dark:bg-card">
      <Button
        type="button"
        size="lg"
        className="h-9 w-full rounded-md bg-dark-teal text-[13px] font-medium text-white shadow-none hover:bg-dark-teal/90"
        onClick={onClick}
      >
        {label}
        <ArrowRightIcon className="size-4" strokeWidth={2} />
      </Button>
    </div>
  )
}

export function ContextCardDualFooter({
  moreDetailsLabel,
  exploreLabel,
  onMoreDetails,
  onExplore,
}: {
  moreDetailsLabel: string
  exploreLabel: string
  onMoreDetails?: () => void
  onExplore?: () => void
}) {
  return (
    <div className="flex gap-3 border-t border-[#ebebeb] bg-white px-6 py-4 dark:border-border dark:bg-card">
      <Button
        type="button"
        variant="outline"
        size="lg"
        className="h-9 flex-1 rounded-md border-[#d6d6d6] bg-white text-[13px] font-medium text-[#242422] shadow-none hover:bg-[#fafafa] dark:border-border dark:bg-card dark:text-foreground"
        onClick={onMoreDetails}
      >
        {moreDetailsLabel}
      </Button>
      <Button
        type="button"
        size="lg"
        className="h-9 flex-1 rounded-md bg-dark-teal text-[13px] font-medium text-white shadow-none hover:bg-dark-teal/90"
        onClick={onExplore}
      >
        {exploreLabel}
        <ArrowRightIcon className="size-4" strokeWidth={2} />
      </Button>
    </div>
  )
}
