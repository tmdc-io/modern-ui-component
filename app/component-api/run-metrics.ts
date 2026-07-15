import type { ComponentApiDoc } from "@/app/component-variants/types"

export const runMetricsApi: ComponentApiDoc = {
  intro:
    "RunMetrics renders a responsive grid of metric cards for pipeline run summaries. Each card shows an uppercase label, a large serif value, and an optional detail line. Quality metrics can pass a passed/failed object to render semantic coloring on failures.",
  features: [
    "Responsive grid: 2 columns on mobile, scales to columns prop from md/xl.",
    "Uppercase muted labels with wide tracking.",
    "Large serif values aligned to DataOS typography.",
    "Optional detail line as plain text or passed/failed breakdown.",
    "Failed count uses dataos-fail-fg token (light and dark mode).",
    "Built-in demo metrics when metrics prop is omitted.",
  ],
  usage: {
    import: `import {
  RunMetrics,
  type RunMetric,
  type RunMetricQualityDetail,
} from "@/components/blocks/run-metrics"`,
    example: `const metrics: RunMetric[] = [
  { id: "wall", label: "WALL", value: "4.1s" },
  { id: "models", label: "MODELS", value: "3" },
  {
    id: "quality",
    label: "QUALITY",
    value: "14/18",
    detail: { passed: 9, failed: 5 },
  },
]

<RunMetrics metrics={metrics} columns={3} />`,
  },
  apiReference: {
    title: "RunMetrics Props",
    props: [
      {
        prop: "metrics",
        type: "RunMetric[]",
        description:
          "Metric cards with id, label, value, and optional detail. Defaults to six pipeline metrics (WALL, MODELS, PARALLELISM, EVAL, QUALITY, ASSERTIONS).",
      },
      {
        prop: "columns",
        type: "2 | 3 | 4",
        default: "3",
        description:
          "Target column count at md (3 cols) or xl (4 cols). Mobile uses 2 columns for 3/4 layouts; 2-column layout stacks to 1 below 28rem.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes on the outer section element.",
      },
    ],
    footnote:
      "Exported types: RunMetric, RunMetricQualityDetail, RunMetricsProps. Card surfaces use bg-dataos-surface for light and dark mode.",
  },
  cssVariants: [
    {
      title: "RunMetric",
      variants: [
        {
          name: "id",
          description: "Unique key for React list rendering.",
        },
        {
          name: "label",
          description: 'Uppercase metric name (e.g. "WALL", "QUALITY").',
        },
        {
          name: "value",
          description: 'Primary serif display value (e.g. "4.1s", "14/18").',
        },
        {
          name: "detail",
          description:
            'Optional subline — plain string or { passed, failed } for quality breakdown.',
        },
      ],
    },
    {
      title: "RunMetricQualityDetail",
      variants: [
        {
          name: "passed",
          description: "Passed count shown in muted foreground.",
        },
        {
          name: "failed",
          description: "Failed count shown in text-dataos-fail-fg.",
        },
      ],
    },
  ],
  enhancements: [
    {
      enhancement: "Quality breakdown",
      benefit: "Passed/failed subline with semantic fail color on failures",
    },
    {
      enhancement: "Responsive layout",
      benefit: "2-up mobile grid, fluid typography, and wrapping quality detail",
    },
    {
      enhancement: "Default demo data",
      benefit: "Renders a full six-metric grid without passing metrics",
    },
    {
      enhancement: "Theme-aware surfaces",
      benefit: "Cards use dataos-surface token for light and dark backgrounds",
    },
  ],
}
