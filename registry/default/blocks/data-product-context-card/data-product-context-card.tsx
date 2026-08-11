"use client"

import * as React from "react"
import {
  AwardIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  CopyIcon,
  FileTextIcon,
  GlobeIcon,
  LinkIcon,
  PackageIcon,
  ShieldCheckIcon,
  SnowflakeIcon,
  XIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  type ContextCardContact,
  type ContextCardMetric,
  type ContextCardSize,
  type ContextCardUsageStat,
  ContextCardContactList,
  ContextCardDescriptionBlock,
  ContextCardDualFooter,
  ContextCardMetricCell,
  ContextCardMetricChip,
  ContextCardPrimaryFooter,
  ContextCardSectionHeading,
  contextCardColumnPadClassName,
  contextCardSectionPadClassName,
  contextCardUsageValueClassName,
} from "@/registry/default/blocks/context-card/context-card-shared"

export type DataProductContextCardMeta = {
  label: string
  icon?: React.ReactNode
}

export type DataProductContextCardMetric = ContextCardMetric
export type DataProductContextCardContact = ContextCardContact
export type DataProductContextCardSize = ContextCardSize
export type DataProductContextCardUsageStat = ContextCardUsageStat

export type DataProductContextCardTag = {
  label: string
}

export type DataProductContextCardFitTab = "good" | "not-good" | "caveats"

export type DataProductContextCardFitSection = {
  id: DataProductContextCardFitTab
  label: string
  title: string
  items: string[]
}

export type DataProductContextCardResource = {
  label: string
  value: string
  icon?: React.ReactNode
  href?: string
  onClick?: () => void
}

export type DataProductContextCardProps = {
  /** `full` = drawer detail; `sm` = compact card (status chips + Know more). */
  size?: DataProductContextCardSize
  title?: string
  version?: string
  icon?: React.ReactNode
  meta?: DataProductContextCardMeta[]
  metrics?: DataProductContextCardMetric[]
  definesTitle?: string
  description?: string
  descriptionExpanded?: boolean
  onToggleDescription?: () => void
  tags?: DataProductContextCardTag[]
  fitTitle?: string
  fitSections?: DataProductContextCardFitSection[]
  defaultFitTab?: DataProductContextCardFitTab
  fitTab?: DataProductContextCardFitTab
  onFitTabChange?: (tab: DataProductContextCardFitTab) => void
  usageTitle?: string
  usageStats?: DataProductContextCardUsageStat[]
  livesTitle?: string
  gatewayUrl?: string
  onCopyGateway?: () => void
  resources?: DataProductContextCardResource[]
  askTitle?: string
  contacts?: DataProductContextCardContact[]
  moreDetailsLabel?: string
  exploreLabel?: string
  /** Small-view primary CTA label. Defaults to "Know more". */
  knowMoreLabel?: string
  onMoreDetails?: () => void
  onExplore?: () => void
  onClose?: () => void
  className?: string
}

/** Compact usage values omit the baked-in 18px size from the shared class. */
const usageValueClassName =
  "font-serif font-medium tracking-tight text-[#242422] dark:text-foreground"

function GitLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={cn("size-4", className)}
      fill="#F05033"
    >
      <path d="M23.446 11.04 12.96.554a1.896 1.896 0 0 0-2.68 0L8.45 2.384l2.7 2.7a1.79 1.79 0 0 1 2.25 2.27l2.6 2.6a1.79 1.79 0 1 1-1.07 1.03l-2.43-2.43v6.4a1.79 1.79 0 1 1-1.47-.06V8.53a1.79 1.79 0 0 1-.97-2.34L6.95 3.45.554 9.84a1.896 1.896 0 0 0 0 2.68l10.486 10.486a1.896 1.896 0 0 0 2.68 0L23.446 13.72a1.896 1.896 0 0 0 0-2.68Z" />
    </svg>
  )
}

function JiraLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={cn("size-4", className)}
      fill="#2684FF"
    >
      <path d="M12.004 0H4.547a.8.8 0 0 0-.566 1.366l8.24 8.24a1.6 1.6 0 0 1 0 2.262l-8.24 8.24A.8.8 0 0 0 4.547 24h7.457a5.6 5.6 0 0 0 3.96-1.64L23.45 12.87a1.6 1.6 0 0 0 0-2.262L15.964 1.64A5.6 5.6 0 0 0 12.004 0Z" />
    </svg>
  )
}

export const defaultDataProductContextCardFitSections: DataProductContextCardFitSection[] =
  [
    {
      id: "good",
      label: "Good for",
      title: "Funnel Analysis",
      items: [
        "Conversion Funnel Optimization",
        "Cart Abandonment & Revenue Recovery",
        "Digital Experience & Customer Journey Analytics",
      ],
    },
    {
      id: "not-good",
      label: "Not good for",
      title: "Operational Reporting",
      items: [
        "Real-time inventory lookups",
        "Sub-second point lookups by order id",
        "Write-back or transactional workflows",
      ],
    },
    {
      id: "caveats",
      label: "Caveats",
      title: "Known limits",
      items: [
        "Marketing-scoped — excludes wholesale channels",
        "Order lines refresh on a 2-hour SLA",
        "PII columns require approved policy grants",
      ],
    },
  ]

/** Default Orders 360 sample matching the DataOS product detail drawer. */
export const defaultDataProductContextCardProps: Omit<
  DataProductContextCardProps,
  "className" | "onClose" | "onMoreDetails" | "onExplore" | "onCopyGateway" | "onFitTabChange" | "onToggleDescription" | "fitTab" | "descriptionExpanded"
> = {
  title: "Orders 360",
  version: "v0.12.1",
  meta: [
    {
      label: "Snowflake",
      icon: <SnowflakeIcon className="size-3.5 text-[#29B5E8]" strokeWidth={2} />,
    },
    {
      label: "Marketing",
      icon: <GlobeIcon className="size-3.5 text-[#8c8c8c]" strokeWidth={1.75} />,
    },
    { label: "Source-aligned" },
  ],
  metrics: [
    {
      label: "Data quality",
      value: "85%",
      hint: "40/48 rules passed",
      chipIcon: (
        <AwardIcon className="size-3.5 text-[#E8A317]" strokeWidth={1.75} />
      ),
    },
    {
      label: "Freshness",
      value: "2h ago",
      hint: "16/16 models healthy",
      leading: (
        <CheckCircle2Icon
          className="size-[18px] text-dark-teal"
          strokeWidth={1.75}
          aria-hidden
        />
      ),
      chipIcon: (
        <CheckCircle2Icon className="size-3.5 text-dark-teal" strokeWidth={1.75} />
      ),
    },
    {
      label: "Policies",
      value: "3 applied",
      compactValue: "3",
      hint: "2 masking • 1 filter",
      chipIcon: (
        <ShieldCheckIcon className="size-3.5 text-[#595959]" strokeWidth={1.75} />
      ),
    },
  ],
  definesTitle: "What it defines",
  description:
    "Orders360 is a governed customer, order, and product analytics data product for the Postgres example environment. It provides curated gold models, semantic models, business metrics, and data quality checks for analyzing customer segments, order patterns, and product performance across channels.",
  tags: [
    { label: "Customer Analytics" },
    { label: "Product Catalog" },
    { label: "Revenue Trend" },
    { label: "Business Intelligence" },
    { label: "Customer Orders" },
  ],
  fitTitle: "Is it right fit for me?",
  fitSections: defaultDataProductContextCardFitSections,
  defaultFitTab: "good",
  usageTitle: "Who else uses it",
  usageStats: [
    { value: "1,284 queries", label: "last 30 days" },
    { value: "1.3s", label: "query time" },
    { value: "16", label: "active users" },
  ],
  livesTitle: "Where it lives",
  gatewayUrl: "gateway.dataos/orders-360",
  resources: [
    {
      label: "Repository",
      value: "Git",
      icon: <GitLogo />,
    },
    {
      label: "Issue tracker",
      value: "Jira",
      icon: <JiraLogo />,
    },
    {
      label: "References",
      value: "4 links",
      icon: <LinkIcon className="size-4 text-[#8c8c8c]" strokeWidth={1.75} />,
    },
  ],
  askTitle: "Who to ask",
  contacts: [
    {
      name: "Animesh Kumar",
      role: "Owner",
      email: "animesh.kumar@tmdc.io",
      initials: "AK",
      avatarClassName: "bg-[#EDE4FF] text-[#6D28D9]",
    },
    {
      name: "Shubhanshu Jain",
      email: "shubhanshu.jain@tmdc.io",
      initials: "SJ",
      avatarClassName: "bg-[#FFE4E6] text-[#E11D48]",
    },
    {
      name: "Mukul Gupta",
      email: "mukul.gupta@tmdc.io",
      initials: "MG",
      avatarClassName: "bg-[#FFEDD5] text-[#C2410C]",
    },
  ],
  moreDetailsLabel: "More details",
  exploreLabel: "Explore",
  knowMoreLabel: "Know more",
}

function DataProductContextCard({
  size = "full",
  title = defaultDataProductContextCardProps.title!,
  version = defaultDataProductContextCardProps.version,
  icon = <PackageIcon className="size-5 text-[#242422] dark:text-foreground" strokeWidth={1.5} />,
  meta = defaultDataProductContextCardProps.meta,
  metrics = defaultDataProductContextCardProps.metrics,
  definesTitle = defaultDataProductContextCardProps.definesTitle,
  description = defaultDataProductContextCardProps.description,
  descriptionExpanded: descriptionExpandedProp,
  onToggleDescription,
  tags = defaultDataProductContextCardProps.tags,
  fitTitle = defaultDataProductContextCardProps.fitTitle,
  fitSections = defaultDataProductContextCardProps.fitSections,
  defaultFitTab = "good",
  fitTab: fitTabProp,
  onFitTabChange,
  usageTitle = defaultDataProductContextCardProps.usageTitle,
  usageStats = defaultDataProductContextCardProps.usageStats,
  livesTitle = defaultDataProductContextCardProps.livesTitle,
  gatewayUrl = defaultDataProductContextCardProps.gatewayUrl,
  onCopyGateway,
  resources = defaultDataProductContextCardProps.resources,
  askTitle = defaultDataProductContextCardProps.askTitle,
  contacts = defaultDataProductContextCardProps.contacts,
  moreDetailsLabel = defaultDataProductContextCardProps.moreDetailsLabel,
  exploreLabel = defaultDataProductContextCardProps.exploreLabel,
  knowMoreLabel = defaultDataProductContextCardProps.knowMoreLabel,
  onMoreDetails,
  onExplore,
  onClose,
  className,
}: DataProductContextCardProps) {
  const compact = size === "sm"

  const [uncontrolledFitTab, setUncontrolledFitTab] =
    React.useState<DataProductContextCardFitTab>(defaultFitTab)
  const fitTab = fitTabProp ?? uncontrolledFitTab

  const [uncontrolledExpanded, setUncontrolledExpanded] = React.useState(false)
  const descriptionExpanded = descriptionExpandedProp ?? uncontrolledExpanded

  const [copied, setCopied] = React.useState(false)
  const [fitExpanded, setFitExpanded] = React.useState(false)

  const activeFit =
    fitSections?.find((section) => section.id === fitTab) ?? fitSections?.[0]

  const handleFitTab = (tab: DataProductContextCardFitTab) => {
    if (fitTabProp === undefined) setUncontrolledFitTab(tab)
    onFitTabChange?.(tab)
    setFitExpanded(false)
  }

  const handleToggleDescription = () => {
    if (descriptionExpandedProp === undefined) {
      setUncontrolledExpanded((value) => !value)
    }
    onToggleDescription?.()
  }

  const handleCopy = async () => {
    if (gatewayUrl && typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(gatewayUrl)
        setCopied(true)
        window.setTimeout(() => setCopied(false), 1500)
      } catch {
        /* ignore */
      }
    }
    onCopyGateway?.()
  }

  const visibleFitItems = fitExpanded
    ? activeFit?.items ?? []
    : (activeFit?.items ?? []).slice(0, 3)

  return (
    <aside
      data-slot="data-product-context-card"
      data-size={size}
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-xl border border-[#ebebeb] bg-white text-[#242422] dark:border-border dark:bg-card dark:text-foreground",
        compact
          ? "max-w-[22.5rem] shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
          : "w-[30rem] shadow-sm",
        className
      )}
    >
      <div className="min-h-0 flex-1 overflow-y-auto">
        {/* Header */}
        <div
          className={cn(
            "flex items-start gap-3 px-6 pt-5",
            compact ? "pb-3" : "pb-4"
          )}
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#f5f5f5] dark:bg-muted">
            {icon}
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <h2
                className={cn(
                  "font-semibold tracking-tight text-[#242422] dark:text-foreground",
                  compact ? "text-[17px] leading-6" : "text-[18px] leading-6"
                )}
              >
                {title}
              </h2>
              {version ? (
                compact ? (
                  <span className="shrink-0 rounded-full bg-[#f0f0f0] px-2 py-0.5 text-[11px] leading-4 font-medium text-[#8c8c8c] dark:bg-muted dark:text-muted-foreground">
                    {version}
                  </span>
                ) : (
                  <span className="shrink-0 text-[12px] leading-4 font-medium text-[#8c8c8c]">
                    {version}
                  </span>
                )
              ) : null}
            </div>
            {meta?.length ? (
              <div className="mt-1 flex flex-wrap items-center text-[12px] leading-4 text-[#8c8c8c]">
                {meta.map((item, index) => (
                  <React.Fragment key={`${item.label}-${index}`}>
                    {index > 0 ? (
                      <span aria-hidden className="mx-1.5 text-[#d6d6d6]">
                        ·
                      </span>
                    ) : null}
                    <span className="inline-flex items-center gap-1">
                      {item.icon}
                      {item.label}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            ) : null}
          </div>
          {onClose ? (
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="-me-1 -mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md text-[#8c8c8c] transition-colors hover:bg-black/5 hover:text-[#242422] focus-visible:ring-2 focus-visible:ring-dark-teal/30 focus-visible:outline-none dark:hover:bg-white/10 dark:hover:text-foreground"
            >
              <XIcon className="size-4" strokeWidth={1.75} />
            </button>
          ) : null}
        </div>

        {/* Metrics — chips (sm) or strip (full) */}
        {metrics?.length ? (
          compact ? (
            <div className="flex flex-wrap gap-2 px-6 pb-3">
              {metrics.map((metric, index) => (
                <ContextCardMetricChip key={`${metric.label}-${index}`} metric={metric} />
              ))}
            </div>
          ) : (
            <div
              className={cn(
                "grid border-y border-[#ebebeb] px-6 py-4 dark:border-border",
                metrics.length === 2 ? "grid-cols-2" : "grid-cols-3"
              )}
            >
              {metrics.map((metric, index) => (
                <ContextCardMetricCell
                  key={`${metric.label}-${index}`}
                  metric={metric}
                  className={cn(
                    contextCardColumnPadClassName(index, metrics.length),
                    index > 0 && "border-s border-[#ebebeb] dark:border-border"
                  )}
                />
              ))}
            </div>
          )
        ) : null}

        {/* Description */}
        {description || (!compact && tags?.length) ? (
          <section
            className={cn(
              "border-b border-[#ebebeb] text-start dark:border-border",
              compact ? "space-y-0 px-6 pb-4" : cn("space-y-3", contextCardSectionPadClassName)
            )}
          >
            {!compact && definesTitle ? (
              <ContextCardSectionHeading>{definesTitle}</ContextCardSectionHeading>
            ) : null}
            {description ? (
              <ContextCardDescriptionBlock
                description={description}
                expanded={descriptionExpanded}
                onToggle={handleToggleDescription}
                clamp={compact ? 175 : 120}
                mutedLink={compact}
              />
            ) : null}
            {!compact && tags?.length ? (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag.label}
                    className="inline-flex items-center gap-1.5 rounded border border-[#ebebeb] bg-[#fafafa] px-2.5 py-1 text-[12px] text-[#595959] dark:border-border dark:bg-muted/40 dark:text-muted-foreground"
                  >
                    <FileTextIcon
                      className="size-3.5 shrink-0 text-[#8c8c8c]"
                      strokeWidth={1.75}
                    />
                    {tag.label}
                  </span>
                ))}
              </div>
            ) : null}
          </section>
        ) : null}

        {/* Fit tabs — full only */}
        {!compact && fitSections?.length ? (
          <section className={cn("space-y-3 border-b border-[#ebebeb] dark:border-border", contextCardSectionPadClassName)}>
            {fitTitle ? <ContextCardSectionHeading>{fitTitle}</ContextCardSectionHeading> : null}
            <div className="flex min-h-[9.5rem] overflow-hidden rounded-lg border border-[#ebebeb] dark:border-border">
              <div
                role="tablist"
                aria-label={fitTitle}
                className="flex w-[7.75rem] shrink-0 flex-col gap-0.5 border-e border-[#ebebeb] bg-[#fafafa] p-1.5 dark:border-border dark:bg-muted/40"
              >
                {fitSections.map((section) => {
                  const selected = section.id === fitTab
                  const tabId = `fit-tab-${section.id}`
                  const panelId = `fit-panel-${section.id}`
                  return (
                    <button
                      key={section.id}
                      id={tabId}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-controls={panelId}
                      tabIndex={selected ? 0 : -1}
                      onClick={() => handleFitTab(section.id)}
                      className={cn(
                        "rounded-md px-2.5 py-2 text-start text-[13px] transition-colors",
                        selected
                          ? "bg-teal-bg-2 font-medium text-dark-teal"
                          : "text-[#595959] hover:bg-black/5 dark:text-muted-foreground dark:hover:bg-white/5"
                      )}
                    >
                      {section.label}
                    </button>
                  )
                })}
              </div>
              <div
                id={activeFit ? `fit-panel-${activeFit.id}` : undefined}
                role="tabpanel"
                aria-labelledby={activeFit ? `fit-tab-${activeFit.id}` : undefined}
                className="min-w-0 flex-1 px-3.5 py-3"
              >
                {activeFit ? (
                  <>
                    <p className="text-[13px] font-semibold text-[#242422] dark:text-foreground">
                      {activeFit.title}
                    </p>
                    <ol className="mt-2 space-y-1.5 text-[13px] leading-5 text-[#595959] dark:text-muted-foreground">
                      {visibleFitItems.map((item, index) => (
                        <li key={item} className="flex gap-2">
                          <span className="shrink-0 tabular-nums text-[#8c8c8c]">
                            {index + 1}.
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                    {(activeFit.items.length > 3 || fitExpanded) &&
                    activeFit.items.length > 0 ? (
                      <button
                        type="button"
                        onClick={() => setFitExpanded((value) => !value)}
                        aria-expanded={fitExpanded}
                        className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-dark-teal hover:underline"
                      >
                        {fitExpanded ? "View less" : "View more"}
                        <ChevronDownIcon
                          className={cn(
                            "size-3.5 transition-transform",
                            fitExpanded && "rotate-180"
                          )}
                          strokeWidth={2}
                        />
                      </button>
                    ) : null}
                  </>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}

        {/* Usage */}
        {usageStats?.length ? (
          <section
            className={cn(
              "border-b border-[#ebebeb] dark:border-border",
              compact ? "px-6 py-3.5" : cn("space-y-3", contextCardSectionPadClassName)
            )}
          >
            {!compact && usageTitle ? (
              <ContextCardSectionHeading>{usageTitle}</ContextCardSectionHeading>
            ) : null}
            <div className="grid grid-cols-3 gap-0">
              {usageStats.map((stat, index) => (
                <div
                  key={`${stat.label}-${index}`}
                  className={cn(
                    "min-w-0 text-start",
                    contextCardColumnPadClassName(index, usageStats.length),
                    index > 0 && "border-s border-[#ebebeb] dark:border-border"
                  )}
                >
                  {compact ? (
                    <div className="flex flex-wrap items-baseline gap-x-1.5">
                      <p className={cn(usageValueClassName, "text-[14px] leading-5")}>
                        {stat.value}
                      </p>
                      <p className="text-[12px] leading-4 text-[#8c8c8c]">
                        {stat.label}
                      </p>
                    </div>
                  ) : (
                    <>
                      <p className={contextCardUsageValueClassName}>{stat.value}</p>
                      <p className="mt-0.5 text-[12px] leading-4 text-[#8c8c8c]">
                        {stat.label}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* Where it lives — full only */}
        {!compact && (gatewayUrl || resources?.length) ? (
          <section className={cn("space-y-3 border-b border-[#ebebeb] dark:border-border", contextCardSectionPadClassName)}>
            {livesTitle ? <ContextCardSectionHeading>{livesTitle}</ContextCardSectionHeading> : null}
            {gatewayUrl ? (
              <div className="flex items-center gap-2 rounded-md border border-[#ebebeb] bg-[#f7f7f7] px-3 py-2.5 dark:border-border dark:bg-muted/40">
                <LinkIcon
                  className="size-4 shrink-0 text-[#8c8c8c]"
                  strokeWidth={1.75}
                />
                <code className="min-w-0 flex-1 truncate font-mono text-[12px] text-[#595959] dark:text-muted-foreground">
                  {gatewayUrl}
                </code>
                <button
                  type="button"
                  aria-label={copied ? "Copied" : "Copy gateway URL"}
                  onClick={handleCopy}
                  className="inline-flex size-7 shrink-0 items-center justify-center rounded-md text-[#8c8c8c] transition-colors hover:bg-black/5 hover:text-[#242422] focus-visible:ring-2 focus-visible:ring-dark-teal/30 focus-visible:outline-none dark:hover:bg-white/10"
                >
                  <CopyIcon className="size-3.5" strokeWidth={1.75} />
                </button>
              </div>
            ) : null}
            {resources?.length ? (
              <div className="grid grid-cols-3 gap-3 pt-1">
                {resources.map((resource) => {
                  const content = (
                    <>
                      <p className="text-[11px] text-[#8c8c8c]">{resource.label}</p>
                      <span className="mt-1.5 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#242422] dark:text-foreground">
                        {resource.icon}
                        {resource.value}
                      </span>
                    </>
                  )

                  if (resource.href) {
                    return (
                      <a
                        key={resource.label}
                        href={resource.href}
                        className="min-w-0 rounded-md outline-none hover:opacity-80 focus-visible:ring-2 focus-visible:ring-dark-teal/30"
                      >
                        {content}
                      </a>
                    )
                  }

                  if (resource.onClick) {
                    return (
                      <button
                        key={resource.label}
                        type="button"
                        onClick={resource.onClick}
                        className="min-w-0 rounded-md text-start outline-none hover:opacity-80 focus-visible:ring-2 focus-visible:ring-dark-teal/30"
                      >
                        {content}
                      </button>
                    )
                  }

                  return (
                    <div key={resource.label} className="min-w-0">
                      {content}
                    </div>
                  )
                })}
              </div>
            ) : null}
          </section>
        ) : null}

        {/* Who to ask — full only */}
        {!compact && contacts?.length ? (
          <section className={cn("space-y-3", contextCardSectionPadClassName)}>
            {askTitle ? <ContextCardSectionHeading>{askTitle}</ContextCardSectionHeading> : null}
            <ContextCardContactList contacts={contacts} />
          </section>
        ) : null}
      </div>

      {/* Footer */}
      {compact ? (
        <ContextCardPrimaryFooter
          label={knowMoreLabel ?? "Know more"}
          onClick={onExplore ?? onMoreDetails}
        />
      ) : (
        <ContextCardDualFooter
          moreDetailsLabel={moreDetailsLabel ?? "More details"}
          exploreLabel={exploreLabel ?? "Explore"}
          onMoreDetails={onMoreDetails}
          onExplore={onExplore}
        />
      )}
    </aside>
  )
}

export { DataProductContextCard }
