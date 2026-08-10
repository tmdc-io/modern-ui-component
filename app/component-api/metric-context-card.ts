import type { ComponentApiDoc } from "@/app/component-variants/types"

export const metricContextCardApi: ComponentApiDoc = {
  features: [
    "DataOS metric context card with activity icon tile and title.",
    'Full and small (size="sm") views.',
    "Current value with an up / down trend delta, plus policies.",
    "Defines copy with optional View more and concept tags.",
    "Composed-of measure and dimension chips.",
    "Formula snippet block.",
    "Powered-by source and owner contact.",
    "Single CTA — Explore in full, Know more in sm.",
  ],
  usage: {
    import:
      'import { MetricContextCard } from "@/components/blocks/metric-context-card"',
    example: `<MetricContextCard
  onClose={() => setOpen(false)}
  onExplore={() => openMetric()}
/>

{/* Compact */}
<MetricContextCard size="sm" onExplore={() => openFull()} />`,
  },
  apiReference: {
    title: "MetricContextCard Props",
    props: [
      {
        prop: "size",
        type: '"full" | "sm"',
        default: '"full"',
        description: "full = drawer; sm = compact popover card.",
      },
      {
        prop: "title / subtitle",
        type: "string / string",
        description:
          "Header identity. The icon centres against the title when subtitle is omitted.",
      },
      {
        prop: "metrics",
        type: "MetricContextCardMetric[]",
        description:
          "Current value and policies columns; delta renders the trend line.",
      },
      {
        prop: "compactMetrics",
        type: "MetricContextCardMetric[]",
        description: "Chips shown in the sm view; falls back to metrics.",
      },
      {
        prop: "description / tags",
        type: "string / MetricContextCardTag[]",
        description: "What it defines copy plus concept tags.",
      },
      {
        prop: "fieldGroups",
        type: "MetricContextCardFieldGroup[]",
        description: "Measure / dimension chip rows (full only).",
      },
      {
        prop: "formula",
        type: "string",
        description: "Formula snippet rendered in a mono block (full only).",
      },
      {
        prop: "poweredBy",
        type: "string",
        description: "Backing data product.",
      },
      {
        prop: "contacts",
        type: "MetricContextCardContact[]",
        description: "Who to ask — avatar, name, role, email.",
      },
      {
        prop: "exploreLabel / onExplore / onClose",
        type: "string / () => void / () => void",
        description: 'CTA label and handlers. Defaults to Explore, or Know more when size="sm".',
      },
    ],
    footnote:
      "Defaults export as defaultMetricContextCardProps / defaultMetricContextCardFieldGroups.",
  },
}
