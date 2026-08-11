"use client"

import * as React from "react"
import {
  CheckCircle2Icon,
  FileTextIcon,
  FilterIcon,
  LockIcon,
  PackageIcon,
  PictureInPicture2Icon,
  ShieldCheckIcon,
  XIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  type ContextCardContact,
  type ContextCardField,
  type ContextCardFieldGroup,
  type ContextCardMetric,
  type ContextCardSize,
  type ContextCardUsageStat,
  ContextCardContactList,
  ContextCardDescriptionBlock,
  ContextCardFieldChip,
  ContextCardMetricCell,
  ContextCardMetricChip,
  ContextCardPrimaryFooter,
  ContextCardSectionHeading,
  contextCardColumnPadClassName,
  contextCardSectionPadClassName,
  contextCardUsageValueClassName,
  createContextCardField,
} from "@/registry/default/blocks/context-card/context-card-shared"

/** Body rendered inside "What it is composed of". */
export type PerspectiveContextCardView =
  | "rest"
  | "graphql"
  | "source-sql"
  | "semantic-sql"

export type PerspectiveContextCardMetric = ContextCardMetric

export type PerspectiveContextCardTag = {
  label: string
  icon?: React.ReactNode
}

export type PerspectiveContextCardField = ContextCardField

export type PerspectiveContextCardFieldGroup = ContextCardFieldGroup

export type PerspectiveContextCardUsageStat = ContextCardUsageStat

export type PerspectiveContextCardContact = ContextCardContact

export type PerspectiveContextCardSize = ContextCardSize

export type PerspectiveContextCardProps = {
  size?: PerspectiveContextCardSize
  /** Composed-of body: REST field groups or a query snippet. */
  view?: PerspectiveContextCardView
  title?: string
  icon?: React.ReactNode
  iconClassName?: string
  visibility?: string
  visibilityIcon?: React.ReactNode
  metrics?: PerspectiveContextCardMetric[]
  definesTitle?: string
  description?: string
  descriptionExpanded?: boolean
  onToggleDescription?: () => void
  tags?: PerspectiveContextCardTag[]
  composedTitle?: string
  fieldGroups?: PerspectiveContextCardFieldGroup[]
  /** Overrides the built-in snippet for the active query view. */
  code?: string
  poweredByTitle?: string
  poweredBy?: string
  poweredByIcon?: React.ReactNode
  usageTitle?: string
  usageStats?: PerspectiveContextCardUsageStat[]
  askTitle?: string
  contacts?: PerspectiveContextCardContact[]
  exploreLabel?: string
  onExplore?: () => void
  onClose?: () => void
  className?: string
}

const field = createContextCardField

export const defaultPerspectiveContextCardFieldGroups: PerspectiveContextCardFieldGroup[] =
  [
    {
      id: "measures",
      label: "Measure(s)",
      fields: [
        field("m-session", "session_id", { shared: true }),
        field("m-event", "event_date", { calendar: true, shared: true }),
        field("m-funnel", "funnel_step"),
      ],
    },
    {
      id: "dimensions",
      label: "Dimension(s)",
      fields: [
        field("d-revenue", "attributed_revenue"),
        field("d-user", "user_id"),
        field("d-event", "event_date", { calendar: true, shared: true }),
        field("d-funnel", "funnel_step"),
        field("d-session", "session_id", { shared: true }),
        field("d-channel", "channel"),
      ],
    },
    {
      id: "segments",
      label: "Segment(s)",
      fields: [
        field("s-session", "session_id", { shared: true }),
        field("s-event", "event_date", { calendar: true, shared: true }),
        field("s-funnel", "funnel_step"),
      ],
    },
    {
      id: "filters",
      label: "Filter(s)",
      summary: "3 filters applied",
      summaryIcon: (
        <FilterIcon className="size-3.5 shrink-0 text-[#8c8c8c]" strokeWidth={1.75} />
      ),
    },
  ]

/** Built-in query snippets per view, matching the DataOS perspective drawer. */
export const defaultPerspectiveContextCardCode: Record<
  Exclude<PerspectiveContextCardView, "rest">,
  string
> = {
  graphql: `query GetPatientJourneyDetails {
  patientJourney(id: "abc123") {
    id
    name
    complianceRate
    treatmentAdherence
    healthOutcomes {
      outcomeType
      value
    }
    interventions {
      id
      description
      status
    }
  }
}`,
  "source-sql": `SELECT pj.id, pj.name, pj.compliance_rate, pj.treatment_adherence,
       ho.outcome_type, ho.value,
       i.id AS intervention_id, i.description, i.status
FROM patient_journeys pj
LEFT JOIN health_outcomes ho ON pj.id = ho.patient_journey_id
LEFT JOIN interventions i ON pj.id = i.patient_journey_id
WHERE pj.id = 'abc123';`,
  "semantic-sql": `FIND patient_journeys
WITH compliance_rate, treatment_adherence, name
INCLUDE health_outcomes (outcome_type, value)
INCLUDE interventions (id AS intervention_id, description, status)
WHERE id = 'abc123';`,
}

/** Default Patient Journey Analysis sample. */
export const defaultPerspectiveContextCardProps: Omit<
  PerspectiveContextCardProps,
  | "className"
  | "onClose"
  | "onExplore"
  | "onToggleDescription"
  | "descriptionExpanded"
  | "size"
  | "view"
  | "code"
> = {
  title: "Patient Journey Analysis",
  visibility: "Private",
  visibilityIcon: (
    <LockIcon className="size-3 shrink-0 text-[#8c8c8c]" strokeWidth={1.75} />
  ),
  metrics: [
    {
      label: "Freshness",
      value: "3h ago",
      hint: "Jul 30, 2026 11:00 AM",
      leading: (
        <CheckCircle2Icon
          className="size-[18px] shrink-0 text-dark-teal"
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
      value: "1 applied",
      compactValue: "1",
      hint: "1 masking",
      chipIcon: (
        <ShieldCheckIcon className="size-3.5 text-[#595959]" strokeWidth={1.75} />
      ),
    },
  ],
  definesTitle: "What it defines",
  description:
    "Tracks patient compliance with prescribed treatments, offering insights into adherence rates and potential barriers. It enables healthcare providers to tailor interventions, improve patient outcomes, and optimize treatment plans for better health management.",
  tags: [
    { label: "Patient Compliance" },
    { label: "Treatment Adherence" },
    { label: "Health Outcomes" },
  ],
  composedTitle: "What it is composed of",
  fieldGroups: defaultPerspectiveContextCardFieldGroups,
  poweredByTitle: "Powered by",
  poweredBy: "Patient Journey 360",
  usageTitle: "Who else uses it",
  usageStats: [
    { value: "3,120 queries", label: "last 30 days" },
    { value: "1.3s", label: "query time" },
    { value: "16", label: "active users" },
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

type CodeTheme = {
  keywords: string[]
  /** Keywords that take the entity colour instead of the keyword colour. */
  secondaryKeywords?: string[]
  /** Keywords whose next identifier is highlighted as an entity. */
  entityAfter: string[]
  keywordClassName: string
  entityClassName: string
  stringClassName: string
}

const CODE_THEMES: Record<
  Exclude<PerspectiveContextCardView, "rest">,
  CodeTheme | null
> = {
  graphql: null,
  "source-sql": {
    keywords: [
      "SELECT",
      "FROM",
      "LEFT",
      "RIGHT",
      "INNER",
      "OUTER",
      "JOIN",
      "ON",
      "AS",
      "WHERE",
      "GROUP",
      "ORDER",
      "BY",
      "LIMIT",
      "AND",
      "OR",
    ],
    entityAfter: ["FROM", "JOIN", "AS"],
    keywordClassName: "text-[#2f54eb]",
    entityClassName: "text-[#16a34a]",
    stringClassName: "text-[#d4380d]",
  },
  "semantic-sql": {
    keywords: ["FIND", "WITH", "INCLUDE", "WHERE", "AND", "OR", "ORDER", "BY"],
    secondaryKeywords: ["AS"],
    entityAfter: ["FIND", "INCLUDE"],
    keywordClassName: "text-[#c41d7f]",
    entityClassName: "text-[#2f54eb]",
    stringClassName: "text-[#d4380d]",
  },
}

function highlightCode(code: string, theme: CodeTheme) {
  const parts = code.split(/('[^']*'|[A-Za-z_][A-Za-z0-9_.]*)/g)
  let previousKeyword = ""

  return parts.map((part, index) => {
    if (!part) return null

    if (part.startsWith("'")) {
      return (
        <span key={index} className={theme.stringClassName}>
          {part}
        </span>
      )
    }

    if (!/^[A-Za-z_]/.test(part)) return part

    const upper = part.toUpperCase()

    if (theme.keywords.includes(upper)) {
      previousKeyword = upper
      return (
        <span key={index} className={theme.keywordClassName}>
          {part}
        </span>
      )
    }

    if (theme.secondaryKeywords?.includes(upper)) {
      previousKeyword = upper
      return (
        <span key={index} className={theme.entityClassName}>
          {part}
        </span>
      )
    }

    const isEntity = theme.entityAfter.includes(previousKeyword)
    previousKeyword = ""

    return isEntity ? (
      <span key={index} className={theme.entityClassName}>
        {part}
      </span>
    ) : (
      part
    )
  })
}

function CodeBlock({
  code,
  view,
}: {
  code: string
  view: Exclude<PerspectiveContextCardView, "rest">
}) {
  const theme = CODE_THEMES[view]
  return (
    <pre className="overflow-x-auto rounded-md bg-[#f5f5f5] p-3 font-mono text-[10px] leading-[1.8] text-[#595959] dark:bg-muted/40 dark:text-muted-foreground">
      <code>{theme ? highlightCode(code, theme) : code}</code>
    </pre>
  )
}

function PerspectiveContextCard({
  size = "full",
  view = "rest",
  title = defaultPerspectiveContextCardProps.title!,
  icon = <PictureInPicture2Icon className="size-5" strokeWidth={1.5} />,
  iconClassName,
  visibility = defaultPerspectiveContextCardProps.visibility,
  visibilityIcon = defaultPerspectiveContextCardProps.visibilityIcon,
  metrics = defaultPerspectiveContextCardProps.metrics,
  definesTitle = defaultPerspectiveContextCardProps.definesTitle,
  description = defaultPerspectiveContextCardProps.description,
  descriptionExpanded: descriptionExpandedProp,
  onToggleDescription,
  tags = defaultPerspectiveContextCardProps.tags,
  composedTitle = defaultPerspectiveContextCardProps.composedTitle,
  fieldGroups = defaultPerspectiveContextCardProps.fieldGroups,
  code,
  poweredByTitle = defaultPerspectiveContextCardProps.poweredByTitle,
  poweredBy = defaultPerspectiveContextCardProps.poweredBy,
  poweredByIcon = (
    <PackageIcon
      className="size-4 shrink-0 text-[#242422] dark:text-foreground"
      strokeWidth={1.75}
    />
  ),
  usageTitle = defaultPerspectiveContextCardProps.usageTitle,
  usageStats = defaultPerspectiveContextCardProps.usageStats,
  askTitle = defaultPerspectiveContextCardProps.askTitle,
  contacts = defaultPerspectiveContextCardProps.contacts,
  exploreLabel,
  onExplore,
  onClose,
  className,
}: PerspectiveContextCardProps) {
  const compact = size === "sm"
  const [uncontrolledExpanded, setUncontrolledExpanded] = React.useState(false)
  const descriptionExpanded = descriptionExpandedProp ?? uncontrolledExpanded
  const ctaLabel = exploreLabel ?? (compact ? "Know more" : "Explore")

  const handleToggleDescription = () => {
    if (descriptionExpandedProp === undefined) {
      setUncontrolledExpanded((value) => !value)
    }
    onToggleDescription?.()
  }

  const snippet =
    view === "rest" ? undefined : code ?? defaultPerspectiveContextCardCode[view]

  const hasComposed =
    view === "rest" ? Boolean(fieldGroups?.length) : Boolean(snippet)

  return (
    <aside
      data-slot="perspective-context-card"
      data-size={size}
      data-view={view}
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
          <span
            className={cn(
              "flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#fbe4e4] text-[#242422] dark:bg-muted dark:text-foreground",
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
            {visibility ? (
              <div className="mt-1 flex min-w-0 items-center gap-1.5 text-[12px] leading-4 text-[#8c8c8c]">
                {visibilityIcon}
                <span className="truncate">{visibility}</span>
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
              "text-start",
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
                clamp={compact ? 190 : 185}
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
        {!compact && hasComposed ? (
          <section
            className={cn(
              "space-y-3 text-start",
              contextCardSectionPadClassName
            )}
          >
            <ContextCardSectionHeading>{composedTitle}</ContextCardSectionHeading>
            {view === "rest" ? (
              <dl className="space-y-2">
                {fieldGroups?.map((group) => (
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
                            <ContextCardFieldChip key={item.id} item={item} />
                          ))}
                        </div>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <CodeBlock
                code={snippet!}
                view={view as Exclude<PerspectiveContextCardView, "rest">}
              />
            )}
          </section>
        ) : null}

        {/* Powered by */}
        {poweredBy ? (
          <section
            className={cn(
              "text-start",
              compact
                ? "space-y-2 px-6 pb-4"
                : cn("space-y-3", contextCardSectionPadClassName)
            )}
          >
            {poweredByTitle ? (
              compact ? (
                <p className="text-[13px] leading-5 text-[#595959] dark:text-muted-foreground">
                  {poweredByTitle}
                </p>
              ) : (
                <ContextCardSectionHeading>{poweredByTitle}</ContextCardSectionHeading>
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

        {/* Usage — full only */}
        {!compact && usageStats?.length ? (
          <section
            className={cn(
              "space-y-3 text-start",
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

        {/* Who to ask */}
        {contacts?.length ? (
          <section
            className={cn(
              "text-start",
              compact ? "px-6 pb-4" : cn("space-y-3", contextCardSectionPadClassName)
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

export { PerspectiveContextCard }
