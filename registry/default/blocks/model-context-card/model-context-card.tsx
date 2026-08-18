"use client"

import * as React from "react"
import {
  AwardIcon,
  BoxIcon,
  CalendarIcon,
  ChartNoAxesColumnIcon,
  CheckCircle2Icon,
  ClockIcon,
  FileTextIcon,
  FolderIcon,
  HashIcon,
  LineChartIcon,
  Maximize2Icon,
  ShieldCheckIcon,
  SnowflakeIcon,
  TriangleIcon,
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
  ContextCardMetricCell,
  ContextCardMetricChip,
  ContextCardPrimaryFooter,
  ContextCardSectionHeading,
  contextCardColumnPadClassName,
  contextCardFieldIconClassName,
  contextCardLinkActionClassName,
  contextCardSectionLabelClassName,
  contextCardSectionPadClassName,
  contextCardUsageValueClassName,
} from "@/registry/default/blocks/context-card/context-card-shared"

export type ModelContextCardMetric = ContextCardMetric
export type ModelContextCardContact = ContextCardContact
export type ModelContextCardSize = ContextCardSize
export type ModelContextCardUsageStat = ContextCardUsageStat

export type ModelContextCardTag = {
  label: string
  icon?: React.ReactNode
}

export type ModelContextCardField = {
  id: string
  label: string
  icon?: React.ReactNode
}

export type ModelContextCardLineageNode = {
  id: string
  label: string
}

export type ModelContextCardLineage = {
  upstream: ModelContextCardLineageNode[]
  current: ModelContextCardLineageNode
  downstream: ModelContextCardLineageNode[]
  lastUpdated?: string
}

export type ModelContextCardProduct = {
  id: string
  name: string
}

export type ModelContextCardScheduleRow = {
  label: string
  value: React.ReactNode
}

export type ModelContextCardProps = {
  size?: ModelContextCardSize
  title?: string
  version?: string
  icon?: React.ReactNode
  /** Warehouse / namespace path segments shown under the title. */
  path?: string[]
  pathIcon?: React.ReactNode
  metrics?: ModelContextCardMetric[]
  definesTitle?: string
  description?: string
  descriptionExpanded?: boolean
  onToggleDescription?: () => void
  tags?: ModelContextCardTag[]
  composedTitle?: string
  fields?: ModelContextCardField[]
  fieldsTotal?: number
  onSeeAllFields?: () => void
  wiredTitle?: string
  lineage?: ModelContextCardLineage
  onViewLineage?: () => void
  productizedTitle?: string
  products?: ModelContextCardProduct[]
  usageTitle?: string
  usageStats?: ModelContextCardUsageStat[]
  scheduleTitle?: string
  scheduleRows?: ModelContextCardScheduleRow[]
  askTitle?: string
  contacts?: ModelContextCardContact[]
  /** Primary CTA label. Defaults to Explore (full) or Know more (sm). */
  exploreLabel?: string
  /** @deprecated Prefer exploreLabel. Still honored when set. */
  knowMoreLabel?: string
  onExplore?: () => void
  onClose?: () => void
  className?: string
}

/** Table glyph matching the DataOS model context mock: header row over a 2x2 grid. */
function ModelTableIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={cn("size-5", className)}
    >
      <rect
        x="4"
        y="5"
        width="16"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 9.5h16M4 14.5h16M12 9.5V19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const defaultModelContextCardFields: ModelContextCardField[] = [
  {
    id: "session_id",
    label: "session_id",
    icon: (
      <HashIcon className={contextCardFieldIconClassName} strokeWidth={2} />
    ),
  },
  {
    id: "event_date",
    label: "event_date",
    icon: (
      <CalendarIcon
        className={contextCardFieldIconClassName}
        strokeWidth={1.75}
      />
    ),
  },
  {
    id: "funnel_step",
    label: "funnel_step",
    icon: (
      <TriangleIcon
        className={contextCardFieldIconClassName}
        strokeWidth={1.75}
      />
    ),
  },
  {
    id: "channel",
    label: "channel",
    icon: (
      <TriangleIcon
        className={contextCardFieldIconClassName}
        strokeWidth={1.75}
      />
    ),
  },
  {
    id: "attributed_revenue",
    label: "attributed_revenue",
    icon: (
      <HashIcon className={contextCardFieldIconClassName} strokeWidth={2} />
    ),
  },
  {
    id: "user_id",
    label: "user_id",
    icon: (
      <HashIcon className={contextCardFieldIconClassName} strokeWidth={2} />
    ),
  },
  {
    id: "page_url",
    label: "page_url",
    icon: (
      <TriangleIcon
        className={contextCardFieldIconClassName}
        strokeWidth={1.75}
      />
    ),
  },
  {
    id: "referrer_url",
    label: "referrer_url",
    icon: (
      <TriangleIcon
        className={contextCardFieldIconClassName}
        strokeWidth={1.75}
      />
    ),
  },
  {
    id: "timestamp",
    label: "timestamp",
    icon: (
      <ClockIcon
        className={contextCardFieldIconClassName}
        strokeWidth={1.75}
      />
    ),
  },
  {
    id: "user_agent",
    label: "user_agent",
    icon: (
      <TriangleIcon
        className={contextCardFieldIconClassName}
        strokeWidth={1.75}
      />
    ),
  },
]

/** Default web_events_daily sample matching the DataOS model context card. */
export const defaultModelContextCardProps: Omit<
  ModelContextCardProps,
  | "className"
  | "onClose"
  | "onExplore"
  | "onToggleDescription"
  | "onSeeAllFields"
  | "onViewLineage"
  | "descriptionExpanded"
  | "size"
> = {
  title: "web_events_daily",
  version: "v0.12.1",
  path: ["snowflakehera033", "prod_analytics", "web"],
  pathIcon: (
    <SnowflakeIcon className="size-3.5 shrink-0 text-[#29B5E8]" strokeWidth={2} />
  ),
  metrics: [
    {
      label: "Data quality",
      value: "87%",
      hint: "14/16 rules passed",
      chipIcon: (
        <AwardIcon className="size-3.5 text-[#E8A317]" strokeWidth={1.75} />
      ),
    },
    {
      label: "Last run",
      value: "6h ago",
      hint: "Jul 30, 2026 11:00 AM",
      leading: (
        <CheckCircle2Icon
          className="size-[18px] shrink-0 text-dark-teal"
          strokeWidth={1.75}
          aria-hidden
        />
      ),
      chipIcon: (
        <CheckCircle2Icon
          className="size-3.5 text-dark-teal"
          strokeWidth={1.75}
        />
      ),
    },
    {
      label: "Policies",
      value: "2 applied",
      compactValue: "2",
      hint: "1 masking • 1 filter",
      chipIcon: (
        <ShieldCheckIcon className="size-3.5 text-[#595959]" strokeWidth={1.75} />
      ),
    },
  ],
  definesTitle: "What it defines",
  description:
    "Web Events Daily is a governed daily aggregation of web and app events for the Snowflake analytics environment. It provides curated session, funnel, and channel fields for analyzing engagement and campaign performance.",
  tags: [
    {
      label: "Customer Analytics",
      icon: (
        <ChartNoAxesColumnIcon
          className="size-3.5 shrink-0 text-[#8c8c8c]"
          strokeWidth={1.75}
        />
      ),
    },
    {
      label: "Product Catalog",
      icon: (
        <FolderIcon
          className="size-3.5 shrink-0 text-[#8c8c8c]"
          strokeWidth={1.75}
        />
      ),
    },
    {
      label: "Revenue Trend",
      icon: (
        <LineChartIcon
          className="size-3.5 shrink-0 text-[#8c8c8c]"
          strokeWidth={1.75}
        />
      ),
    },
    {
      label: "Business Intelligence",
      icon: (
        <FileTextIcon
          className="size-3.5 shrink-0 text-[#8c8c8c]"
          strokeWidth={1.75}
        />
      ),
    },
    {
      label: "Customer Orders",
      icon: (
        <FileTextIcon
          className="size-3.5 shrink-0 text-[#8c8c8c]"
          strokeWidth={1.75}
        />
      ),
    },
  ],
  composedTitle: "What it is composed of",
  fields: defaultModelContextCardFields,
  fieldsTotal: 28,
  wiredTitle: "What it is wired to",
  lineage: {
    upstream: [
      { id: "raw_web", label: "raw_web_events" },
      { id: "stg_page", label: "stg_page_views" },
      { id: "dim_camp", label: "dim_campaign" },
    ],
    current: { id: "web_events_daily", label: "web_events_daily" },
    downstream: [
      { id: "fct_sess", label: "fct_sessions" },
      { id: "mart_web", label: "mart_web_kpi" },
      { id: "feat_eng", label: "feat_engagement" },
    ],
    lastUpdated: "2h ago",
  },
  productizedTitle: "Productized in 3 data products",
  products: [
    { id: "enriched", name: "Enriched Web Analytics" },
    { id: "journey", name: "Digital Customer Journey" },
    { id: "marketing", name: "Marketing Analytics 360" },
  ],
  usageTitle: "Who else uses it",
  usageStats: [
    { value: "3,120 queries", label: "last 30 days" },
    { value: "1.3s", label: "query time" },
    { value: "16", label: "active users" },
  ],
  scheduleTitle: "Schedule",
  scheduleRows: [
    {
      label: "Schedule",
      value: (
        <>
          Daily at 02:00 UTC •{" "}
          <span className="font-medium text-dark-teal underline underline-offset-2">
            airflow_workflow_web_d…
          </span>
        </>
      ),
    },
    { label: "Next run", value: "In 9 hours" },
    {
      label: "Service",
      value: (
        <>
          <span className="font-medium text-dark-teal underline underline-offset-2">
            prod_analytics
          </span>
          {" • warehouse "}
          <span className="font-medium text-dark-teal underline underline-offset-2">
            WH_ETL_M
          </span>
        </>
      ),
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
  ],
}

function LineageMini({
  lineage,
  onViewLineage,
}: {
  lineage: ModelContextCardLineage
  onViewLineage?: () => void
}) {
  const Node = ({
    label,
    current = false,
  }: {
    label: string
    current?: boolean
  }) => (
    <div
      className={cn(
        "min-w-0 truncate rounded-md border px-2.5 py-2 text-center text-[11px] leading-4 font-medium",
        current
          ? "border-dark-teal bg-teal-bg-2 text-dark-teal"
          : "border-[#ebebeb] bg-white text-[#595959] dark:border-border dark:bg-card"
      )}
      title={label}
    >
      {label}
    </div>
  )

  const upstreamLabel = `Upstream (${lineage.upstream.length})`
  const downstreamLabel = `Downstream (${lineage.downstream.length})`

  return (
    <div className="overflow-hidden rounded-lg border border-[#ebebeb] dark:border-border">
      <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1.15fr)_auto_minmax(0,1fr)] items-center gap-2 bg-[#fafafa] p-3 dark:bg-muted/30">
        <Node label={upstreamLabel} />
        <span
          className="self-center text-[14px] leading-none text-[#bfbfbf]"
          aria-hidden
        >
          →
        </span>
        <Node label={lineage.current.label} current />
        <span
          className="self-center text-[14px] leading-none text-[#bfbfbf]"
          aria-hidden
        >
          →
        </span>
        <Node label={downstreamLabel} />
      </div>
      <div className="flex items-center justify-between border-t border-[#ebebeb] bg-white px-2.5 py-1.5 dark:border-border dark:bg-card">
        <div className="flex items-center gap-0.5">
          {onViewLineage ? (
            <button
              type="button"
              aria-label="Open full lineage"
              onClick={onViewLineage}
              className="inline-flex size-6 items-center justify-center rounded text-[#8c8c8c] hover:bg-black/5 hover:text-[#242422]"
            >
              <Maximize2Icon className="size-3.5" strokeWidth={1.75} />
            </button>
          ) : null}
        </div>
        {lineage.lastUpdated ? (
          <p className="text-[11px] leading-4 text-[#8c8c8c]">
            Last updated: {lineage.lastUpdated}
          </p>
        ) : null}
      </div>
    </div>
  )
}

function ModelContextCard({
  size = "full",
  title = defaultModelContextCardProps.title!,
  version = defaultModelContextCardProps.version,
  icon = <ModelTableIcon className="text-[#242422]" />,
  path = defaultModelContextCardProps.path,
  pathIcon = defaultModelContextCardProps.pathIcon,
  metrics = defaultModelContextCardProps.metrics,
  definesTitle = defaultModelContextCardProps.definesTitle,
  description = defaultModelContextCardProps.description,
  descriptionExpanded: descriptionExpandedProp,
  onToggleDescription,
  tags = defaultModelContextCardProps.tags,
  composedTitle = defaultModelContextCardProps.composedTitle,
  fields = defaultModelContextCardProps.fields,
  fieldsTotal = defaultModelContextCardProps.fieldsTotal,
  onSeeAllFields,
  wiredTitle = defaultModelContextCardProps.wiredTitle,
  lineage = defaultModelContextCardProps.lineage,
  onViewLineage,
  productizedTitle = defaultModelContextCardProps.productizedTitle,
  products = defaultModelContextCardProps.products,
  usageTitle = defaultModelContextCardProps.usageTitle,
  usageStats = defaultModelContextCardProps.usageStats,
  scheduleTitle = defaultModelContextCardProps.scheduleTitle,
  scheduleRows = defaultModelContextCardProps.scheduleRows,
  askTitle = defaultModelContextCardProps.askTitle,
  contacts = defaultModelContextCardProps.contacts,
  exploreLabel,
  knowMoreLabel,
  onExplore,
  onClose,
  className,
}: ModelContextCardProps) {
  const compact = size === "sm"
  const [uncontrolledExpanded, setUncontrolledExpanded] = React.useState(false)
  const descriptionExpanded = descriptionExpandedProp ?? uncontrolledExpanded
  const ctaLabel =
    exploreLabel ?? knowMoreLabel ?? (compact ? "Know more" : "Explore")

  const handleToggleDescription = () => {
    if (descriptionExpandedProp === undefined) {
      setUncontrolledExpanded((value) => !value)
    }
    onToggleDescription?.()
  }

  const visibleFields = (fields ?? []).slice(0, compact ? 0 : 10)
  const remainingFields = Math.max(
    0,
    (fieldsTotal ?? fields?.length ?? 0) - visibleFields.length
  )

  return (
    <aside
      data-slot="model-context-card"
      data-size={size}
      className={cn(
        "flex flex-col overflow-hidden rounded-xl border border-[#ebebeb] bg-white text-[#242422] dark:border-border dark:bg-card dark:text-foreground",
        compact
          ? "w-full max-w-[22.5rem] shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
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
            {path?.length ? (
              <div className="mt-1 flex min-w-0 items-center gap-1.5 text-[12px] leading-4 text-[#8c8c8c]">
                {pathIcon}
                <p className="min-w-0 truncate italic">
                  {path.map((segment, index) => (
                    <React.Fragment key={`${segment}-${index}`}>
                      {index > 0 ? (
                        <span className="not-italic text-[#bfbfbf]"> / </span>
                      ) : null}
                      {segment}
                    </React.Fragment>
                  ))}
                </p>
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

        {/* Metrics */}
        {metrics?.length ? (
          compact ? (
            <div className="flex flex-wrap gap-2 px-6 pb-3">
              {metrics.map((metric, index) => (
                <ContextCardMetricChip
                  key={`${metric.label}-${index}`}
                  metric={metric}
                />
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

        {/* Description / defines */}
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
                    className="inline-flex items-center gap-1.5 rounded border border-[#ebebeb] bg-[#fafafa] px-2.5 py-1 text-[12px] leading-4 text-[#595959] dark:border-border dark:bg-muted/40 dark:text-muted-foreground"
                  >
                    {tag.icon ?? (
                      <FileTextIcon
                        className="size-3.5 shrink-0 text-[#8c8c8c]"
                        strokeWidth={1.75}
                      />
                    )}
                    {tag.label}
                  </span>
                ))}
              </div>
            ) : null}
          </section>
        ) : null}

        {/* Composed of — full only */}
        {!compact && fields?.length ? (
          <section
            className={cn(
              "space-y-3 border-b border-[#ebebeb] text-start dark:border-border",
              contextCardSectionPadClassName
            )}
          >
            <ContextCardSectionHeading
              action={
                onSeeAllFields ? (
                  <button
                    type="button"
                    onClick={onSeeAllFields}
                    className={contextCardLinkActionClassName}
                  >
                    See all ({fieldsTotal ?? fields.length})
                  </button>
                ) : undefined
              }
            >
              {composedTitle}
            </ContextCardSectionHeading>
            <div className="flex flex-wrap gap-1.5">
              {visibleFields.map((field) => (
                <span
                  key={field.id}
                  className="inline-flex items-center gap-1 rounded border border-[#ebebeb] bg-white px-2 py-1 font-mono text-[11px] leading-4 text-[#595959] dark:border-border dark:bg-card"
                >
                  {field.icon}
                  {field.label}
                </span>
              ))}
              {remainingFields > 0 ? (
                <span className="inline-flex items-center px-1.5 py-1 text-[11px] leading-4 font-medium text-[#8c8c8c]">
                  +{remainingFields} more
                </span>
              ) : null}
            </div>
          </section>
        ) : null}

        {/* Lineage — full only */}
        {!compact && lineage ? (
          <section
            className={cn(
              "space-y-3 border-b border-[#ebebeb] text-start dark:border-border",
              contextCardSectionPadClassName
            )}
          >
            <ContextCardSectionHeading
              action={
                onViewLineage ? (
                  <button
                    type="button"
                    onClick={onViewLineage}
                    className={contextCardLinkActionClassName}
                  >
                    View full lineage
                  </button>
                ) : undefined
              }
            >
              {wiredTitle}
            </ContextCardSectionHeading>
            <LineageMini lineage={lineage} onViewLineage={onViewLineage} />
          </section>
        ) : null}

        {/* Productized */}
        {products?.length ? (
          <section
            className={cn(
              "border-b border-[#ebebeb] text-start dark:border-border",
              compact ? "space-y-2.5 px-6 py-4" : contextCardSectionPadClassName
            )}
          >
            <div className="flex items-center gap-2.5">
              <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-dark-teal text-white">
                <CheckCircle2Icon className="size-2.5" strokeWidth={3} />
              </span>
              <h3
                className={cn(
                  compact
                    ? "text-[13px] leading-4 font-medium text-[#595959] dark:text-muted-foreground"
                    : contextCardSectionLabelClassName
                )}
              >
                {productizedTitle}
              </h3>
            </div>
            {compact ? (
              <div className="flex flex-wrap gap-2">
                {products.map((product) => (
                  <span
                    key={product.id}
                    className="inline-flex items-center gap-1.5 rounded border border-[#ebebeb] bg-white px-2.5 py-1 text-[12px] leading-4 text-[#595959] dark:border-border dark:bg-card"
                  >
                    <BoxIcon
                      className="size-3.5 shrink-0 text-[#8c8c8c]"
                      strokeWidth={1.75}
                    />
                    {product.name}
                  </span>
                ))}
              </div>
            ) : (
              <ul className="mt-3 border-b border-[#ebebeb] divide-y divide-[#ebebeb] dark:border-border dark:divide-border">
                {products.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-center gap-2.5 py-2.5"
                  >
                    <BoxIcon
                      className="size-4 shrink-0 text-[#242422] dark:text-foreground"
                      strokeWidth={1.75}
                    />
                    <span className="text-[13px] leading-5 text-[#242422] dark:text-foreground">
                      {product.name}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ) : null}

        {/* Usage — full only */}
        {!compact && usageStats?.length ? (
          <section
            className={cn(
              "space-y-3 border-b border-[#ebebeb] text-start dark:border-border",
              contextCardSectionPadClassName
            )}
          >
            {usageTitle ? (
              <ContextCardSectionHeading>{usageTitle}</ContextCardSectionHeading>
            ) : null}
            <div className="grid grid-cols-3">
              {usageStats.map((stat, index) => (
                <div
                  key={`${stat.label}-${index}`}
                  className={cn(
                    "min-w-0 text-start",
                    contextCardColumnPadClassName(index, usageStats.length),
                    index > 0 && "border-s border-[#ebebeb] dark:border-border"
                  )}
                >
                  <p className={contextCardUsageValueClassName}>{stat.value}</p>
                  <p className="mt-0.5 text-[12px] leading-4 text-[#8c8c8c]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* Schedule — full only */}
        {!compact && scheduleRows?.length ? (
          <section
            className={cn(
              "space-y-3 border-b border-[#ebebeb] text-start dark:border-border",
              contextCardSectionPadClassName
            )}
          >
            {scheduleTitle ? (
              <ContextCardSectionHeading>{scheduleTitle}</ContextCardSectionHeading>
            ) : null}
            <dl className="space-y-2.5">
              {scheduleRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[5.25rem_minmax(0,1fr)] items-baseline gap-x-3 text-[13px] leading-5"
                >
                  <dt className="text-[#8c8c8c]">{row.label}</dt>
                  <dd className="min-w-0 text-[#242422] dark:text-foreground">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        {/* Who to ask */}
        {contacts?.length ? (
          <section
            className={cn(
              "text-start",
              compact ? "px-6 py-4" : cn("space-y-3", contextCardSectionPadClassName)
            )}
          >
            {!compact && askTitle ? (
              <ContextCardSectionHeading>{askTitle}</ContextCardSectionHeading>
            ) : null}
            <ContextCardContactList contacts={contacts} />
          </section>
        ) : null}
      </div>

      <ContextCardPrimaryFooter label={ctaLabel} onClick={onExplore} />
    </aside>
  )
}

export { ModelContextCard }
