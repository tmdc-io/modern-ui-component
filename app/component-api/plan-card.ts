import type { ComponentApiDoc } from "@/app/component-variants/types"

export const planCardApi: ComponentApiDoc = {
  features: [
    "Success, error, draft, running, warning, and cancelled semantic statuses.",
    "Cream hover surface (cream-bg-3); selected uses teal surface and dark teal border.",
    "Optional selected and onSelect for controlled plan lists with aria-pressed.",
    "Plan id, version, timestamp, and duration header layout.",
    "Summary metric row (Changes, Impacts, optional Error) with expand chevron.",
    "Clickable metrics via per-metric href or onClick.",
    "Controlled accordion lists via expanded and onExpandedChange.",
    'Compact density via size="sm" and relative time via startedAt.',
    "Expandable panel with detail metrics, italic status rows, and Open plan details link.",
    "PlanCardSkeleton loading placeholder.",
    "Built-in en/es message catalog for default labels and status screen-reader text.",
  ],
  usage: {
    import: `import {
  PlanCard,
  PlanCardSkeleton,
  planCardMessages,
  type PlanCardMetric,
  type PlanCardStatus,
} from "@/components/blocks/plan-card"`,
    example: `<PlanCard
  planId="#9"
  version="v0.1.3"
  timestamp="July 1, 08:15 AM"
  duration="4.1s"
  status="success"
  defaultExpanded
  detailsHref="/plans/9"
  metrics={[
    { label: "Changes", value: "6" },
    { label: "Impacts", value: "7" },
  ]}
/>`,
  },
  apiReference: {
    title: "PlanCard Props",
    props: [
      {
        prop: "planId",
        type: "string",
        description: 'Plan identifier shown as the primary label (for example "#7").',
      },
      {
        prop: "version",
        type: "string",
        description: 'Version label in the top-right corner (for example "v0.1.3").',
      },
      {
        prop: "timestamp",
        type: "string",
        description: "Localized plan timestamp text when startedAt is omitted.",
      },
      {
        prop: "startedAt",
        type: "Date | string",
        description: "Renders relative time instead of timestamp.",
      },
      {
        prop: "duration",
        type: "string",
        description: 'Plan duration text (for example "4.1s").',
      },
      {
        prop: "status",
        type: '"success" | "error" | "draft" | "running" | "warning" | "cancelled"',
        default: '"success"',
        description: "Controls the status icon and plan id color.",
      },
      {
        prop: "size",
        type: '"default" | "sm"',
        default: '"default"',
        description: "Card and typography density.",
      },
      {
        prop: "metrics",
        type: "PlanCardMetric[]",
        description:
          'Collapsed summary chips as "Label (value)". Defaults to Changes and Impacts.',
      },
      {
        prop: "detailMetrics",
        type: "PlanCardMetric[]",
        description:
          "Expanded key/value rows (Modified, Added, Removed, Impacts, Backfills).",
      },
      {
        prop: "detailStatuses",
        type: "PlanCardDetailRow[]",
        description:
          'Expanded status lines with italic values (for example Environment statement → "changed").',
      },
      {
        prop: "expanded",
        type: "boolean",
        description: "Controlled expanded state for the detail panel.",
      },
      {
        prop: "defaultExpanded",
        type: "boolean",
        default: "false",
        description: "Initial expanded state when uncontrolled.",
      },
      {
        prop: "onExpandedChange",
        type: "(expanded: boolean) => void",
        description: "Called when the expand chevron toggles the detail panel.",
      },
      {
        prop: "detailsHref",
        type: "string",
        description:
          "When set, shows the Open plan details footer link in the expanded panel.",
      },
      {
        prop: "detailsLabel",
        type: "string",
        description: "Override the Open plan details link label.",
      },
      {
        prop: "selected",
        type: "boolean",
        default: "false",
        description:
          "Pins the teal surface and dark teal border for an active/selected card.",
      },
      {
        prop: "onSelect",
        type: "() => void",
        description:
          "Renders a button and toggles selection UX; use with selected for controlled lists.",
      },
      {
        prop: "href",
        type: "string",
        description: "Renders the card as a link when provided.",
      },
      {
        prop: "onClick",
        type: "() => void",
        description: "Renders the card as a button when provided.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes on the card wrapper.",
      },
    ],
    footnote:
      "Also exported: PlanCardSkeleton, planCardMessages, PlanCardMetric, PlanCardDetailRow, and PlanCardStatus. Wrap the tree in LanguageProvider (i18n registry item) for planCardMessages.",
  },
  cssVariants: [
    {
      title: "PlanCardMetric",
      variants: [
        {
          name: "label",
          description: 'Metric label, such as "Changes", "Impacts", or "Error".',
        },
        {
          name: "value",
          description: 'Metric value rendered inside parentheses, such as "3" or "7".',
        },
        {
          name: "status",
          description:
            "Optional semantic color matching PlanCardStatus.",
        },
        {
          name: "href / onClick",
          description:
            "Optional metric link or action; activation does not trigger card selection.",
        },
      ],
    },
    {
      title: "PlanCardSkeleton",
      variants: [
        {
          name: "className",
          description: "Additional classes on the skeleton wrapper.",
        },
      ],
    },
  ],
}
