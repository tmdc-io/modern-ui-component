"use client"

import * as React from "react"
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  BoxIcon,
  ChevronDownIcon,
  CircleCheckIcon,
  CircleXIcon,
  TagIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar"
import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"
import {
  useTranslation,
  type Translations,
} from "@/hooks/use-translation"
import { cn } from "@/lib/utils"

export type HeroVariant = "full" | "internal" | "sticky"

export type HeroDimensionStatus = "pass" | "warn" | "fail"

export type HeroQualityDimension = {
  name: string
  status: HeroDimensionStatus
}

export type HeroQuality = {
  title?: string
  percentage: number
  passed: number
  failed: number
  dimensions: HeroQualityDimension[]
  href?: string
  onKnowMore?: () => void
}

export type HeroMetaItem = {
  label?: string
  value: React.ReactNode
  icon?: React.ReactNode
  /** Render string values in monospace (e.g. Identifier). */
  mono?: boolean
}

export type HeroMetaColumn = {
  title: string
  items: HeroMetaItem[]
}

export type HeroMember = {
  name: string
  src?: string
  initials?: string
  className?: string
}

export type HeroJumpItem = {
  label: string
  icon?: React.ReactNode
  hasDropdown?: boolean
  onSelect?: () => void
}

export type HeroProps = {
  title: string
  subtitle?: string
  subtitleIcon?: React.ReactNode
  description?: string
  icon?: React.ReactNode
  variant?: HeroVariant
  quality?: HeroQuality
  metaColumns?: HeroMetaColumn[]
  jumpItems?: HeroJumpItem[]
  members?: HeroMember[]
  showDescription?: boolean
  descriptionExpandLabel?: string
  onDescriptionExpand?: () => void
  following?: boolean
  followLabel?: string
  onFollowChange?: (next: boolean) => void
  exploreLabel?: string
  onExplore?: () => void
  exploreMenu?: React.ReactNode
  className?: string
}

export const heroMessages = {
  en: {
    dir: "ltr",
    values: {
      follow: "Follow",
      following: "Following",
      explore: "Explore",
      exploreOptions: "{label} options",
      dataQuality: "Data Quality",
      rulesPassed: "rules passed",
      passed: "passed",
      failed: "failed",
      knowMore: "Know more",
      jumpTo: "Jump to:",
      viewMore: "View more",
      members: "+{count} more",
    },
  },
  es: {
    dir: "ltr",
    values: {
      follow: "Seguir",
      following: "Siguiendo",
      explore: "Explorar",
      exploreOptions: "Opciones de {label}",
      dataQuality: "Calidad de datos",
      rulesPassed: "reglas aprobadas",
      passed: "aprobadas",
      failed: "fallidas",
      knowMore: "Saber más",
      jumpTo: "Ir a:",
      viewMore: "Ver más",
      members: "+{count} más",
    },
  },
} satisfies Translations

function HeroIconTile({
  icon,
  size = "default",
}: {
  icon?: React.ReactNode
  size?: "default" | "sm"
}) {
  return (
    <div
      className={cn(
        "border-grey-8 bg-muted/60 text-muted-foreground flex shrink-0 items-center justify-center rounded-lg border",
        size === "sm" ? "size-7" : "size-11"
      )}
    >
      {icon ?? (
        <BoxIcon
          className={size === "sm" ? "size-4" : "size-5"}
          strokeWidth={1.5}
        />
      )}
    </div>
  )
}

function HeroActions({
  following,
  followLabel,
  onFollowChange,
  exploreLabel,
  onExplore,
  exploreMenu,
  size = "default",
}: {
  following?: boolean
  followLabel?: string
  onFollowChange?: (next: boolean) => void
  exploreLabel?: string
  onExplore?: () => void
  exploreMenu?: React.ReactNode
  size?: "default" | "sm"
}) {
  const { t } = useTranslation(heroMessages)
  const resolvedFollowLabel = followLabel ?? t.follow
  const resolvedExploreLabel = exploreLabel ?? t.explore
  const exploreOptionsLabel = t.exploreOptions.replace(
    "{label}",
    resolvedExploreLabel
  )
  const buttonSize = size === "sm" ? "sm" : "default"

  return (
    <div className="flex shrink-0 flex-wrap items-center gap-2">
      <Button
        variant="outline"
        size={buttonSize}
        aria-pressed={following}
        onClick={() => onFollowChange?.(!following)}
      >
        {following ? t.following : resolvedFollowLabel}
      </Button>
      {/* Keep label → chevron order in both LTR and RTL. */}
      <div className="flex items-center" dir="ltr">
        <Button
          size={buttonSize}
          className="rounded-r-none"
          onClick={onExplore}
        >
          {resolvedExploreLabel}
        </Button>
        {exploreMenu ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size={size === "sm" ? "icon-sm" : "icon"}
                className="border-primary-foreground/20 rounded-l-none border-l"
                aria-label={exploreOptionsLabel}
              >
                <ChevronDownIcon className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {exploreMenu}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            size={size === "sm" ? "icon-sm" : "icon"}
            className="border-primary-foreground/20 rounded-l-none border-l"
            aria-label={exploreOptionsLabel}
            onClick={onExplore}
          >
            <ChevronDownIcon className="size-4" />
          </Button>
        )}
      </div>
    </div>
  )
}

function HeroTitleBlock({
  title,
  subtitle,
  subtitleIcon,
  size = "default",
}: {
  title: string
  subtitle?: string
  subtitleIcon?: React.ReactNode
  size?: "default" | "sm"
}) {
  return (
    <div className="min-w-0 space-y-1">
      <h1
        className={cn(
          "text-foreground tracking-tight",
          size === "sm"
            ? "truncate text-sm font-medium"
            : "font-serif text-[22px] font-bold break-words @md:text-[26px]"
        )}
      >
        {title}
      </h1>
      {subtitle && size !== "sm" ? (
        <p className="text-muted-foreground flex items-center gap-1.5 text-sm">
          {subtitleIcon ?? <TagIcon className="size-3.5" />}
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

function HeroDescription({
  description,
  expandLabel,
  onExpand,
}: {
  description: string
  expandLabel: string
  onExpand?: () => void
}) {
  return (
    <div className="max-w-3xl space-y-1">
      <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
        {description}
      </p>
      <button
        type="button"
        className="text-foreground text-sm font-medium underline underline-offset-2 hover:text-foreground/80"
        onClick={onExpand}
      >
        {expandLabel}
      </button>
    </div>
  )
}

function HeroMetaColumns({ columns }: { columns: HeroMetaColumn[] }) {
  return (
    <div className="border-grey-8 grid gap-8 border-b pb-5 @sm:grid-cols-2 @lg:grid-cols-3">
      {columns.map((column) => (
        <div key={column.title} className="space-y-3">
          <p className="text-muted-foreground text-[11px] font-medium tracking-[0.08em] uppercase">
            {column.title}
          </p>
          <dl className="space-y-2.5">
            {column.items.map((item, index) =>
              item.label ? (
                <div
                  key={`${column.title}-${index}`}
                  className="flex items-center gap-1.5 text-sm leading-snug"
                >
                  <dt className="text-muted-foreground w-[4.75rem] shrink-0">
                    {item.label}
                  </dt>
                  <span className="text-muted-foreground shrink-0" aria-hidden>
                    :
                  </span>
                  <dd className="text-foreground flex min-w-0 items-center gap-1.5 font-normal">
                    {item.icon ? (
                      <span className="flex size-4 shrink-0 items-center justify-center">
                        {item.icon}
                      </span>
                    ) : null}
                    {typeof item.value === "string" ? (
                      <span
                        className={cn(
                          "min-w-0 truncate",
                          item.mono && "font-mono text-[13px] break-all"
                        )}
                      >
                        {item.value}
                      </span>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ) : (
                <div
                  key={`${column.title}-${index}`}
                  className="flex items-center gap-1.5 text-sm leading-snug"
                >
                  {item.icon ? (
                    <span className="flex size-4 shrink-0 items-center justify-center">
                      {item.icon}
                    </span>
                  ) : null}
                  <span className="text-foreground font-normal">{item.value}</span>
                </div>
              )
            )}
          </dl>
        </div>
      ))}
    </div>
  )
}

export function HeroMemberStack({
  members,
  max = 3,
}: {
  members: HeroMember[]
  max?: number
}) {
  const { t } = useTranslation(heroMessages)
  const visible = members.slice(0, max)
  const overflow = members.length - visible.length

  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-1.5 rtl:space-x-reverse">
        {visible.map((member) => (
          <Avatar
            key={member.name}
            className="ring-background size-5 ring-2"
          >
            {member.src ? (
              <AvatarImage src={member.src} alt={member.name} />
            ) : null}
            <AvatarFallback
              className={cn(
                "bg-teal-bg-2 text-[9px] font-medium uppercase",
                member.className
              )}
            >
              {member.initials ?? member.name.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
      {overflow > 0 ? (
        <span className="text-muted-foreground text-xs">
          {t.members.replace("{count}", String(overflow))}
        </span>
      ) : null}
    </div>
  )
}

function QualityStatusIcon({ status }: { status: HeroDimensionStatus }) {
  if (status === "warn") {
    return (
      <span className="bg-dataos-warn-bg flex size-[18px] shrink-0 items-center justify-center rounded-[5px]">
        <AlertTriangleIcon className="text-dataos-warn-fg size-3" strokeWidth={2.25} />
      </span>
    )
  }
  if (status === "fail") {
    return (
      <span className="bg-dataos-fail-bg flex size-[18px] shrink-0 items-center justify-center rounded-[5px]">
        <CircleXIcon className="text-dataos-fail-fg size-3.5" strokeWidth={2} />
      </span>
    )
  }
  return (
    <span className="bg-dataos-success-bg flex size-[18px] shrink-0 items-center justify-center rounded-[5px]">
      <CircleCheckIcon className="text-dataos-success-fg size-3.5" strokeWidth={2} />
    </span>
  )
}

function HeroQualityDonut({ percentage }: { percentage: number }) {
  const { t } = useTranslation(heroMessages)
  const radius = 26
  const circumference = 2 * Math.PI * radius
  const dash = (Math.min(Math.max(percentage, 0), 100) / 100) * circumference

  return (
    <div className="relative size-16 shrink-0">
      <svg viewBox="0 0 64 64" className="size-full -rotate-90">
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          strokeWidth="6"
          className="stroke-grey-8"
        />
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
          className="stroke-primary"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
        <span className="text-foreground text-sm font-semibold">
          {percentage}%
        </span>
        <span className="text-muted-foreground text-[8px]">{t.rulesPassed}</span>
      </div>
    </div>
  )
}

export function HeroQualityCard({
  quality,
  className,
}: {
  quality: HeroQuality
  className?: string
}) {
  const { t } = useTranslation(heroMessages)
  const {
    title,
    percentage,
    passed,
    failed,
    dimensions,
    href,
    onKnowMore,
  } = quality
  const resolvedTitle = title ?? t.dataQuality

  return (
    <div
      className={cn(
        "border-grey-8 bg-card flex w-full max-w-[20rem] flex-col gap-4 rounded-xl border p-4 shadow-sm",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <HeroQualityDonut percentage={percentage} />
        <div className="min-w-0 space-y-0.5">
          <p className="text-foreground text-sm font-semibold">{resolvedTitle}</p>
          <p className="text-xs font-medium">
            <span className="text-dataos-success-fg">
              {passed} {t.passed}
            </span>
            <span className="text-muted-foreground"> • </span>
            <span className="text-dataos-fail-fg">
              {failed} {t.failed}
            </span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 @sm:gap-x-8">
        {dimensions.map((dimension) => (
          <div
            key={dimension.name}
            className="flex min-w-0 items-center gap-2 text-[13px] leading-none"
          >
            <QualityStatusIcon status={dimension.status} />
            <span className="text-foreground truncate">{dimension.name}</span>
          </div>
        ))}
      </div>
      <div className="border-grey-8 border-t pt-3 text-center">
        {href ? (
          <a
            href={href}
            className="text-primary inline-flex items-center gap-1 text-sm font-medium hover:text-primary/80"
          >
            {t.knowMore} <ArrowRightIcon className="size-3.5 rtl:rotate-180" />
          </a>
        ) : (
          <button
            type="button"
            onClick={onKnowMore}
            className="text-primary inline-flex items-center gap-1 text-sm font-medium hover:text-primary/80"
          >
            {t.knowMore} <ArrowRightIcon className="size-3.5 rtl:rotate-180" />
          </button>
        )}
      </div>
    </div>
  )
}

export function HeroJumpBar({ items }: { items: HeroJumpItem[] }) {
  const { t } = useTranslation(heroMessages)
  return (
    <div className="border-grey-8 flex flex-wrap items-center gap-1 border-t pt-3">
      <span className="text-muted-foreground me-1 text-xs">{t.jumpTo}</span>
      {items.map((item) => (
        <button
          key={item.label}
          type="button"
          onClick={item.onSelect}
          className="text-foreground hover:bg-muted inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors"
        >
          {item.icon ? (
            <span className="text-muted-foreground flex size-4 items-center justify-center">
              {item.icon}
            </span>
          ) : null}
          {item.label}
          {item.hasDropdown ? (
            <ChevronDownIcon className="text-muted-foreground size-3.5" />
          ) : null}
        </button>
      ))}
    </div>
  )
}

export function Hero({
  title,
  subtitle,
  subtitleIcon,
  description,
  icon,
  variant = "full",
  quality,
  metaColumns,
  jumpItems,
  members: _members,
  showDescription = true,
  descriptionExpandLabel,
  onDescriptionExpand,
  following = false,
  followLabel,
  onFollowChange,
  exploreLabel,
  onExplore,
  exploreMenu,
  className,
}: HeroProps) {
  const { t } = useTranslation(heroMessages)
  const resolvedExpandLabel = descriptionExpandLabel ?? t.viewMore

  if (variant === "sticky") {
    return (
      <div
        className={cn(
          "@container border-grey-8 bg-dataos-surface flex flex-col gap-3 border-b px-5 py-2.5 @md:flex-row @md:items-center @md:justify-between @md:gap-4",
          className
        )}
      >
        <div className="flex min-w-0 items-center gap-2.5">
          <HeroIconTile icon={icon} size="sm" />
          <HeroTitleBlock title={title} size="sm" />
        </div>
        <HeroActions
          following={following}
          followLabel={followLabel}
          onFollowChange={onFollowChange}
          exploreLabel={exploreLabel}
          onExplore={onExplore}
          exploreMenu={exploreMenu}
          size="sm"
        />
      </div>
    )
  }

  const isFull = variant === "full"
  const showQuality = isFull && Boolean(quality)
  const showMeta = isFull && metaColumns && metaColumns.length > 0

  const hasBody = (description && showDescription) || showMeta

  return (
    <div
      className={cn(
        "@container flex w-full flex-col gap-4 px-5 py-4",
        isFull ? "bg-background" : "bg-dataos-surface",
        className
      )}
    >
      <div className="flex flex-col gap-3 @md:flex-row @md:items-start @md:justify-between @md:gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <HeroIconTile icon={icon} />
          <HeroTitleBlock
            title={title}
            subtitle={subtitle}
            subtitleIcon={subtitleIcon}
          />
        </div>
        <HeroActions
          following={following}
          followLabel={followLabel}
          onFollowChange={onFollowChange}
          exploreLabel={exploreLabel}
          onExplore={onExplore}
          exploreMenu={exploreMenu}
        />
      </div>

      {hasBody || showQuality ? (
        <div className="flex flex-col gap-5 @lg:flex-row @lg:items-start @lg:gap-6">
          <div className="flex min-w-0 flex-1 flex-col gap-5">
            {description && showDescription ? (
              <HeroDescription
                description={description}
                expandLabel={resolvedExpandLabel}
                onExpand={onDescriptionExpand}
              />
            ) : null}

            {showMeta ? <HeroMetaColumns columns={metaColumns} /> : null}
          </div>

          {showQuality && quality ? (
            <div className="w-full shrink-0 @lg:w-auto">
              <HeroQualityCard
                quality={quality}
                className="mx-auto max-w-none @sm:mx-0 @lg:max-w-[20rem]"
              />
            </div>
          ) : null}
        </div>
      ) : null}

      {jumpItems && jumpItems.length > 0 ? (
        <HeroJumpBar items={jumpItems} />
      ) : null}
    </div>
  )
}
