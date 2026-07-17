import type { ComponentApiDoc } from "@/app/component-variants/types"

export const runCardApi: ComponentApiDoc = {
  features: [
    "Success, error, warning, running, queued, and cancelled status icons with DataOS semantic colors.",
    "Cream hover surface (cream-bg-3); selected uses teal surface and dark teal border.",
    "Optional selected and onSelect for controlled run lists with aria-pressed.",
    "Relative timestamps via startedAt (date-fns) or explicit timestamp text.",
    'Density via size="sm" | "default".',
    "Metric row with per-metric coloring, href, onClick, and maxVisibleMetrics overflow.",
    "RunCardSkeleton loading placeholder matching card density.",
    "Built-in en/es message catalog for default metric labels and status screen-reader text.",
    "Optional href or onClick for clickable run navigation.",
  ],
  usage: {
    import: `import {
  RunCard,
  RunCardSkeleton,
  runCardMessages,
  type RunCardMetric,
  type RunCardStatus,
} from "@/components/blocks/run-card"`,
    example: `<RunCard
  runId="#10009"
  plan="Plan #02"
  startedAt="2026-07-02T12:22:00Z"
  duration="3.8s"
  status="error"
  selected={activeId === "#10009"}
  onSelect={() => setActiveId("#10009")}
  metrics={[
    { label: "Error", value: "3", status: "error", onClick: openErrors },
    { label: "Models", value: "5" },
  ]}
/>`,
  },
  apiReference: {
    title: "RunCard Props",
    props: [
      {
        prop: "runId",
        type: "string",
        description: 'Run identifier shown as the primary label (for example "#10010").',
      },
      {
        prop: "plan",
        type: "string",
        description:
          'Plan label in the top-right corner; truncates with a title tooltip when long.',
      },
      {
        prop: "timestamp",
        type: "string",
        description:
          "Localized run timestamp text when startedAt is not used.",
      },
      {
        prop: "startedAt",
        type: "Date | string",
        description:
          'When set, renders relative time (for example "about 2 hours ago") instead of timestamp.',
      },
      {
        prop: "duration",
        type: "string",
        description: 'Run duration text (for example "4.1s").',
      },
      {
        prop: "status",
        type: '"success" | "error" | "warning" | "running" | "queued" | "cancelled"',
        default: '"success"',
        description: "Status icon, run id emphasis, and screen-reader status label.",
      },
      {
        prop: "metrics",
        type: "RunCardMetric[]",
        description:
          "Footer metrics as Label (value) segments. Omit to use localized default Models and DQ samples.",
      },
      {
        prop: "maxVisibleMetrics",
        type: "number",
        description:
          "When set, shows only the first N metrics plus a +M more overflow chip.",
      },
      {
        prop: "size",
        type: '"default" | "sm"',
        default: '"default"',
        description: "Card and typography density.",
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
      'Also exported: RunCardSkeleton, runCardMessages, RunCardMetric, and RunCardStatus. Metric status supports semantic colors. Wrap the tree in LanguageProvider (i18n registry item) for runCardMessages.',
  },
  cssVariants: [
    {
      title: "RunCardMetric",
      variants: [
        {
          name: "label",
          description: 'Metric label, such as "Error", "Models", or "DQ".',
        },
        {
          name: "value",
          description: 'Metric value rendered inside parentheses, such as "3" or "12/16".',
        },
        {
          name: "status",
          description:
            'Optional semantic color: "success", "error", "warning", or "default".',
        },
        {
          name: "href / onClick",
          description: "Optional per-metric link or button; clicks do not bubble to the card.",
        },
      ],
    },
    {
      title: "RunCardSkeleton",
      variants: [
        {
          name: "size",
          description: 'Matches RunCard size: "default" or "sm".',
        },
      ],
    },
  ],
}
