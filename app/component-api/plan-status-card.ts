import type { ComponentApiDoc } from "@/app/component-variants/types"

export const planStatusCardApi: ComponentApiDoc = {
  features: [
    "Controlled or uncontrolled collapsed and expanded states.",
    "Cream hover (cream-bg-3) and teal selected surface with dark teal border.",
    "Default and error card borders.",
    "Breaking, Non-breaking, Backfill, Schema, Config, Undefined table, and custom badges.",
    "SQL diff panel with file path, line numbers, copy, and download.",
    "Localized empty states for missing diffs and impacts.",
    "Diagnostic error panel with copy and download.",
    'Compact density via size="sm".',
    "PlanStatusCardSkeleton loading placeholder.",
    "Built-in en/es message catalog for panel labels and actions.",
    "Accessible header button with aria-expanded, aria-controls, and keyboard activation.",
  ],
  usage: {
    import: `import {
  PlanStatusCard,
  PlanStatusCardSkeleton,
  PlanStatusDiff,
  PlanStatusError,
  PlanStatusImpacts,
  planStatusCardMessages,
} from "@/components/blocks/plan-status-card"`,
    example: `<PlanStatusCard
  title="b2b_saas.users"
  typeLabel="FULL"
  selected
  badges={[
    { label: "Breaking", tone: "error" },
    { label: "Backfill", tone: "muted" },
  ]}
  defaultExpanded
>
  <PlanStatusDiff filePath="models/usage_events.sql" lines={diffLines} />
  <PlanStatusImpacts impacts={impacts} />
</PlanStatusCard>`,
  },
  apiReference: {
    title: "PlanStatusCard Props",
    props: [
      {
        prop: "title",
        type: "string",
        description: "Model, feature, or environment label.",
      },
      {
        prop: "typeLabel",
        type: "string",
        description: 'Optional model type label, such as "FULL".',
      },
      {
        prop: "badges",
        type: "PlanStatusBadge[]",
        description: "Status badges shown on the right side of the header.",
      },
      {
        prop: "tone",
        type: '"default" | "error"',
        default: '"default"',
        description: "Controls the card border treatment.",
      },
      {
        prop: "size",
        type: '"default" | "sm"',
        default: '"default"',
        description: "Header and badge density.",
      },
      {
        prop: "selected",
        type: "boolean",
        default: "false",
        description:
          "Pins teal surface and dark teal border when tone is default.",
      },
      {
        prop: "onSelect",
        type: "() => void",
        description: "Called when the header is activated; sets aria-pressed.",
      },
      {
        prop: "expanded",
        type: "boolean",
        description: "Controlled expanded state.",
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
        description: "Called when the header toggles expansion.",
      },
      {
        prop: "children",
        type: "React.ReactNode",
        description: "Expanded content, usually diff, error, and impact panels.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes on the card wrapper.",
      },
    ],
    footnote:
      "Also exported: PlanStatusCardSkeleton, PlanStatusDiff, PlanStatusError, PlanStatusImpacts, planStatusCardMessages, and related types. Wrap the tree in LanguageProvider for message catalogs.",
  },
  cssVariants: [
    {
      title: "PlanStatusBadge",
      variants: [
        {
          name: "tone",
          description:
            '"default", "muted", "error", "success", "warning", or "info".',
        },
      ],
    },
    {
      title: "PlanStatusDiff",
      variants: [
        {
          name: "filePath",
          description: "Optional path shown above the diff lines.",
        },
        {
          name: "showLineNumbers",
          description: "Renders old/new line number gutters when true.",
        },
        {
          name: "kind",
          description: 'Line kind: "context", "info", "add", or "remove".',
        },
      ],
    },
  ],
}
