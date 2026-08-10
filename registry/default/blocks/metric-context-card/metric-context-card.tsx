"use client"

import * as React from "react"
import {
  ActivityIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CalendarIcon,
  CheckCircle2Icon,
  FileTextIcon,
  HashIcon,
  Link2Icon,
  PackageIcon,
  ShieldCheckIcon,
  XIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar"
import { Button } from "@/registry/default/ui/button"

export type MetricContextCardDelta = {
  direction?: "up" | "down"
  value: string
  label?: string
}

export type MetricContextCardMetric = {
  label: string
  value: React.ReactNode
  hint?: React.ReactNode
  delta?: MetricContextCardDelta
  leading?: React.ReactNode
  chipIcon?: React.ReactNode
  compactValue?: React.ReactNode
}

export type MetricContextCardTag = {
  label: string
  icon?: React.ReactNode
}

export type MetricContextCardField = {
  id: string
  label: string
  icon?: React.ReactNode
  /** Trailing marker, e.g. a shared/linked indicator. */
  trailingIcon?: React.ReactNode
}

export type MetricContextCardFieldGroup = {
  id: string
  label: string
  fields?: MetricContextCardField[]
  /** Summary row instead of chips, e.g. "3 filters applied". */
  summary?: React.ReactNode
  summaryIcon?: React.ReactNode
}

export type MetricContextCardContact = {
  name: string
  email: string
  role?: string
  initials?: string
  src?: string
  avatarClassName?: string
}

export type MetricContextCardSize = "full" | "sm"

export type MetricContextCardProps = {
  size?: MetricContextCardSize
  title?: string
  subtitle?: string
  subtitleIcon?: React.ReactNode
  icon?: React.ReactNode
  iconClassName?: string
  metrics?: MetricContextCardMetric[]
  /** Chips shown in the sm view; falls back to metrics. */
  compactMetrics?: MetricContextCardMetric[]
  definesTitle?: string
  description?: string
  descriptionExpanded?: boolean
  onToggleDescription?: () => void
  tags?: MetricContextCardTag[]
  composedTitle?: string
  fieldGroups?: MetricContextCardFieldGroup[]
  formulaTitle?: string
  formula?: string
  poweredByTitle?: string
  poweredBy?: string
  poweredByIcon?: React.ReactNode
  askTitle?: string
  contacts?: MetricContextCardContact[]
  exploreLabel?: string
  onExplore?: () => void
  onClose?: () => void
  className?: string
}

const sectionLabelClassName =
  "text-[11px] font-medium tracking-[0.08em] text-[#595959] uppercase dark:text-muted-foreground"

const metricLabelClassName = sectionLabelClassName

const bodyTextClassName =
  "text-[13px] leading-[1.5] text-[#595959] dark:text-muted-foreground"

const kpiValueClassName =
  "font-serif text-[22px] leading-none font-medium tracking-tight text-[#242422] tabular-nums dark:text-foreground"

const sectionPadClassName = "px-6 py-4"

const fieldIconClassName = "size-3 shrink-0 text-[#8c8c8c]"

const sharedFieldIcon = (
  <Link2Icon className="size-2.5 shrink-0 text-[#bfbfbf]" strokeWidth={2} />
)

function field(
  id: string,
  label: string,
  options: { calendar?: boolean; shared?: boolean } = {}
): MetricContextCardField {
  return {
    id,
    label,
    icon: options.calendar ? (
      <CalendarIcon className={fieldIconClassName} strokeWidth={1.75} />
    ) : (
      <HashIcon className={fieldIconClassName} strokeWidth={2} />
    ),
    trailingIcon: options.shared ? sharedFieldIcon : undefined,
  }
}

export const defaultMetricContextCardFieldGroups: MetricContextCardFieldGroup[] = [
  {
    id: "measure",
    label: "Measure",
    fields: [field("m-session", "session_id", { shared: true })],
  },
  {
    id: "dimensions",
    label: "Dimension(s)",
    fields: [
      field("d-event", "event_date", { calendar: true, shared: true }),
      field("d-funnel", "funnel_step"),
      field("d-channel", "channel"),
      field("d-revenue", "attributed_revenue"),
      field("d-user", "user_id"),
    ],
  },
]

/** Default Medication Adherence Monitoring sample. */
export const defaultMetricContextCardProps: Omit<
  MetricContextCardProps,
  | "className"
  | "onClose"
  | "onExplore"
  | "onToggleDescription"
  | "descriptionExpanded"
  | "size"
> = {
  title: "Medication Adherence Monitoring",
  metrics: [
    {
      label: "Current value",
      value: "4m 37s",
      delta: { direction: "up", value: "12.5%", label: "MoM" },
    },
    {
      label: "Policies",
      value: "1 applied",
      compactValue: "1",
      hint: "1 masking",
      chipIcon: (
        <ShieldCheckIcon className="size-3.5 text-[#595959]" strokeWidth={1.75} />
      ),
    },
  ],
  compactMetrics: [
    {
      label: "Freshness",
      value: "3h ago",
      chipIcon: (
        <CheckCircle2Icon className="size-3.5 text-dark-teal" strokeWidth={1.75} />
      ),
    },
    {
      label: "Policies",
      value: "1",
      chipIcon: (
        <ShieldCheckIcon className="size-3.5 text-[#595959]" strokeWidth={1.75} />
      ),
    },
  ],
  definesTitle: "What it defines",
  description:
    "Monitors patient medication intake patterns, identifying missed doses and enabling proactive reminders to enhance adherence and reduce hospitalization risks.",
  tags: [
    { label: "Patient Compliance" },
    { label: "Treatment Adherence" },
    { label: "Health Outcomes" },
  ],
  composedTitle: "What it is composed of",
  fieldGroups: defaultMetricContextCardFieldGroups,
  formulaTitle: "Formula",
  formula: "Conversion Rate (%) = (Orders / Total Sessions) * 100",
  poweredByTitle: "Powered by",
  poweredBy: "Patient Journey 360",
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

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h3 className={sectionLabelClassName}>{children}</h3>
}

function DeltaLine({ delta }: { delta: MetricContextCardDelta }) {
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

function MetricCell({
  metric,
  className,
}: {
  metric: MetricContextCardMetric
  className?: string
}) {
  return (
    <div className={cn("min-w-0 text-center", className)}>
      <p className={metricLabelClassName}>{metric.label}</p>
      <div className="mt-2 flex items-center justify-center gap-1.5">
        {metric.leading}
        <p className={kpiValueClassName}>{metric.value}</p>
      </div>
      {metric.delta ? <DeltaLine delta={metric.delta} /> : null}
      {metric.hint ? (
        <p className="mt-1.5 text-[12px] leading-4 text-[#8c8c8c]">{metric.hint}</p>
      ) : null}
    </div>
  )
}

function MetricChip({ metric }: { metric: MetricContextCardMetric }) {
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

function FieldChip({ item }: { item: MetricContextCardField }) {
  return (
    <span className="inline-flex items-center gap-1 rounded border border-[#ebebeb] bg-white px-1.5 py-0.5 font-mono text-[10px] leading-4 text-[#595959] dark:border-border dark:bg-card">
      {item.icon}
      {item.label}
      {item.trailingIcon}
    </span>
  )
}

function DescriptionBlock({
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
      : `${description.slice(0, clamp).trimEnd()}…`

  return (
    <div className="text-start">
      <p className={bodyTextClassName}>{body}</p>
      {needsClamp ? (
        <button
          type="button"
          onClick={onToggle}
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

function columnPadClassName(index: number, total: number) {
  if (total <= 1) return undefined
  if (index === 0) return "pe-4"
  if (index === total - 1) return "ps-4"
  return "px-4"
}

function MetricContextCard({
  size = "full",
  title = defaultMetricContextCardProps.title!,
  subtitle,
  subtitleIcon,
  icon = <ActivityIcon className="size-5" strokeWidth={1.75} />,
  iconClassName,
  metrics = defaultMetricContextCardProps.metrics,
  compactMetrics = defaultMetricContextCardProps.compactMetrics,
  definesTitle = defaultMetricContextCardProps.definesTitle,
  description = defaultMetricContextCardProps.description,
  descriptionExpanded: descriptionExpandedProp,
  onToggleDescription,
  tags = defaultMetricContextCardProps.tags,
  composedTitle = defaultMetricContextCardProps.composedTitle,
  fieldGroups = defaultMetricContextCardProps.fieldGroups,
  formulaTitle = defaultMetricContextCardProps.formulaTitle,
  formula = defaultMetricContextCardProps.formula,
  poweredByTitle = defaultMetricContextCardProps.poweredByTitle,
  poweredBy = defaultMetricContextCardProps.poweredBy,
  poweredByIcon = (
    <PackageIcon
      className="size-4 shrink-0 text-[#242422] dark:text-foreground"
      strokeWidth={1.75}
    />
  ),
  askTitle = defaultMetricContextCardProps.askTitle,
  contacts = defaultMetricContextCardProps.contacts,
  exploreLabel,
  onExplore,
  onClose,
  className,
}: MetricContextCardProps) {
  const compact = size === "sm"
  const [uncontrolledExpanded, setUncontrolledExpanded] = React.useState(false)
  const descriptionExpanded = descriptionExpandedProp ?? uncontrolledExpanded

  const handleToggleDescription = () => {
    if (descriptionExpandedProp === undefined) {
      setUncontrolledExpanded((value) => !value)
    }
    onToggleDescription?.()
  }

  const shownMetrics = compact ? compactMetrics ?? metrics : metrics
  const ctaLabel = exploreLabel ?? (compact ? "Know more" : "Explore")

  return (
    <aside
      data-slot="metric-context-card"
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
            "flex gap-3 px-6 pt-5",
            subtitle ? "items-start" : "items-center",
            compact ? "pb-3" : "pb-4"
          )}
        >
          <span
            className={cn(
              "flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#f5f5f5] text-[#242422] dark:bg-muted dark:text-foreground",
              iconClassName
            )}
          >
            {icon}
          </span>
          <div className="min-w-0 flex-1">
            <h2
              className={cn(
                "truncate font-semibold tracking-tight text-[#242422] dark:text-foreground",
                compact ? "text-[17px] leading-6" : "text-[18px] leading-6"
              )}
            >
              {title}
            </h2>
            {subtitle ? (
              <div className="mt-1 flex min-w-0 items-center gap-1.5 text-[12px] leading-4 text-[#8c8c8c]">
                {subtitleIcon}
                <span className="truncate">{subtitle}</span>
              </div>
            ) : null}
          </div>
          {onClose ? (
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="-me-1 inline-flex size-8 shrink-0 items-center justify-center rounded-md text-[#8c8c8c] transition-colors hover:bg-black/5 hover:text-[#242422] focus-visible:ring-2 focus-visible:ring-dark-teal/30 focus-visible:outline-none dark:hover:bg-white/10 dark:hover:text-foreground"
            >
              <XIcon className="size-4" strokeWidth={1.75} />
            </button>
          ) : null}
        </div>

        {/* Metrics */}
        {shownMetrics?.length ? (
          compact ? (
            <div className="flex flex-wrap gap-2 px-6 pb-3">
              {shownMetrics.map((metric, index) => (
                <MetricChip key={`${metric.label}-${index}`} metric={metric} />
              ))}
            </div>
          ) : (
            <div
              className={cn(
                "grid border-y border-[#ebebeb] px-6 py-4 dark:border-border",
                shownMetrics.length === 2 ? "grid-cols-2" : "grid-cols-3"
              )}
            >
              {shownMetrics.map((metric, index) => (
                <MetricCell
                  key={`${metric.label}-${index}`}
                  metric={metric}
                  className={cn(
                    columnPadClassName(index, shownMetrics.length),
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
              "text-start",
              compact ? "space-y-0 px-6 pb-4" : cn("space-y-3", sectionPadClassName)
            )}
          >
            {!compact && definesTitle ? (
              <SectionHeading>{definesTitle}</SectionHeading>
            ) : null}
            {description ? (
              <DescriptionBlock
                description={description}
                expanded={descriptionExpanded}
                onToggle={handleToggleDescription}
                clamp={compact ? 190 : 200}
                mutedLink={compact}
              />
            ) : null}
            {!compact && tags?.length ? (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag.label}
                    className="inline-flex items-center gap-1.5 rounded border border-[#ebebeb] bg-[#fafafa] px-2 py-1 text-[11px] leading-4 text-[#595959] dark:border-border dark:bg-muted/40 dark:text-muted-foreground"
                  >
                    {tag.icon ?? (
                      <FileTextIcon
                        className="size-3 shrink-0 text-[#8c8c8c]"
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
        {!compact && fieldGroups?.length ? (
          <section className={cn("space-y-3 text-start", sectionPadClassName)}>
            <SectionHeading>{composedTitle}</SectionHeading>
            <dl className="space-y-2">
              {fieldGroups.map((group) => (
                <div
                  key={group.id}
                  className="grid grid-cols-[4.75rem_minmax(0,1fr)] gap-x-3"
                >
                  <dt className="text-[13px] leading-6 text-[#595959] dark:text-muted-foreground">
                    {group.label}
                  </dt>
                  <dd className="min-w-0">
                    {group.summary ? (
                      <span className="inline-flex items-center gap-1.5 py-1 text-[12px] leading-4 text-[#595959] dark:text-muted-foreground">
                        {group.summaryIcon}
                        {group.summary}
                      </span>
                    ) : (
                      <div className="flex flex-wrap gap-1.5">
                        {group.fields?.map((item) => (
                          <FieldChip key={item.id} item={item} />
                        ))}
                      </div>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        {/* Formula — full only */}
        {!compact && formula ? (
          <section className={cn("space-y-3 text-start", sectionPadClassName)}>
            {formulaTitle ? <SectionHeading>{formulaTitle}</SectionHeading> : null}
            <pre className="overflow-x-auto rounded-md bg-[#f5f5f5] px-3 py-2.5 font-mono text-[11px] leading-[1.6] text-[#595959] dark:bg-muted/40 dark:text-muted-foreground">
              <code>{formula}</code>
            </pre>
          </section>
        ) : null}

        {/* Powered by */}
        {poweredBy ? (
          <section
            className={cn(
              "text-start",
              compact ? "space-y-2 px-6 pb-4" : cn("space-y-3", sectionPadClassName)
            )}
          >
            {poweredByTitle ? (
              compact ? (
                <p className="text-[13px] leading-5 text-[#595959] dark:text-muted-foreground">
                  {poweredByTitle}
                </p>
              ) : (
                <SectionHeading>{poweredByTitle}</SectionHeading>
              )
            ) : null}
            <div className="flex items-center gap-2.5">
              {poweredByIcon}
              <span className="truncate text-[13px] leading-5 text-[#242422] dark:text-foreground">
                {poweredBy}
              </span>
            </div>
          </section>
        ) : null}

        {/* Who to ask */}
        {contacts?.length ? (
          <section
            className={cn(
              "text-start",
              compact ? "px-6 pb-4" : cn("space-y-3", sectionPadClassName)
            )}
          >
            {!compact && askTitle ? (
              <SectionHeading>{askTitle}</SectionHeading>
            ) : null}
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
          </section>
        ) : null}
      </div>

      <div className="border-t border-[#ebebeb] bg-white px-6 py-4 dark:border-border dark:bg-card">
        <Button
          type="button"
          size="lg"
          className="h-9 w-full rounded-md bg-dark-teal text-[13px] font-medium text-white shadow-none hover:bg-dark-teal/90"
          onClick={onExplore}
        >
          {ctaLabel}
          <ArrowRightIcon className="size-4" strokeWidth={2} />
        </Button>
      </div>
    </aside>
  )
}

export { MetricContextCard }
