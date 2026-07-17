import type { ComponentApiDoc } from "@/app/component-variants/types"

export const modelHealthRunsApi: ComponentApiDoc = {
  intro:
    "ModelHealthRuns renders a Recharts scatter heatmap of model health across pipeline runs. Pass column definitions in runs and row definitions in models; each model carries a cells array keyed by runId. Column headers show run labels, health bars, and percentages; rows show truncated model names and trailing health percentages.",
  features: [
    "Recharts ScatterChart heatmap with rounded status cells (8px radius).",
    "Four status states: healthy, quality issues, failed, not evaluated.",
    "Light and dark mode via --model-health-* theme tokens.",
    "Column run-health progress bars and percentages (R1–R10).",
    "Row model names with ellipsis truncation and per-row health %.",
    "Responsive cell width from plot area; horizontal scroll on narrow viewports.",
    "Hover tooltips with model name, run label, and status label.",
    "Built-in demo data for ten runs and ten models when props are omitted.",
  ],
  usage: {
    import: `import {
  ModelHealthRuns,
  type ModelHealthModel,
  type ModelHealthRun,
  type ModelHealthStatus,
} from "@/components/blocks/model-health-runs"`,
    example: `const runs: ModelHealthRun[] = [
  { id: "r1", label: "R1", health: 100 },
  { id: "r2", label: "R2", health: 50 },
]

const models: ModelHealthModel[] = [
  {
    id: "churn",
    name: "customer_churn_prediction",
    health: 72,
    cells: [
      { runId: "r1", status: "healthy" },
      { runId: "r2", status: "quality" },
    ],
  },
]

<ModelHealthRuns
  title="Model health across runs"
  runs={runs}
  models={models}
/>`,
  },
  apiReference: {
    title: "ModelHealthRuns Props",
    props: [
      {
        prop: "title",
        type: "string",
        default: '"Model health across runs"',
        description: "Panel heading in uppercase tracking above the legend.",
      },
      {
        prop: "runs",
        type: "ModelHealthRun[]",
        description:
          "Column definitions. Each run supplies id (matches cell runId), label (e.g. R1), and health (0–100 for the column header bar and %). Defaults to ten demo runs.",
      },
      {
        prop: "models",
        type: "ModelHealthModel[]",
        description:
          "Row definitions with model name, row-level health %, and cells per run. Defaults to ten demo models.",
      },
      {
        prop: "emptyMessage",
        type: "string",
        description:
          "Copy shown when runs or models is empty. Defaults to localized empty text.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes on the outer section element.",
      },
    ],
    footnote:
      "Exported types: ModelHealthStatus, ModelHealthCell, ModelHealthRun, ModelHealthModel, ModelHealthRunsProps. Cell runId must match a run.id. Missing cells render as not evaluated (#f2f4f7). Requires chart and recharts (installed by shadcn add).",
  },
  cssVariants: [
    {
      title: "ModelHealthStatus",
      variants: [
        {
          name: '"healthy"',
          description: "Model passed quality checks. Light #94d2c9, dark #6ec4b8 (--model-health-healthy).",
        },
        {
          name: '"quality"',
          description: "Quality issues detected. Light #f9cb8d, dark #d4a55c (--model-health-quality).",
        },
        {
          name: '"failed"',
          description: "Run or evaluation failed. Light #f9bdc2, dark #d98a94 (--model-health-failed).",
        },
        {
          name: '"none"',
          description: "Not evaluated or no data. Light #f2f4f7, dark #3a3a38 (--model-health-none).",
        },
      ],
    },
    {
      title: "ModelHealthRun",
      variants: [
        {
          name: "id",
          description: "Unique run key referenced by ModelHealthCell.runId.",
        },
        {
          name: "label",
          description: 'Column header text (e.g. "R1", "R2").',
        },
        {
          name: "health",
          description: "0–100 value for the column header progress bar and % label.",
        },
      ],
    },
    {
      title: "ModelHealthModel",
      variants: [
        {
          name: "id",
          description: "Unique model key for React list rendering.",
        },
        {
          name: "name",
          description:
            "Left-axis label. Long names truncate with ellipsis; full name in SVG title tooltip.",
        },
        {
          name: "health",
          description: "0–100 row summary shown in the trailing health column.",
        },
        {
          name: "cells",
          description: "Array of { runId, status } pairs for each run intersection.",
        },
      ],
    },
    {
      title: "Dependencies",
      variants: [
        {
          name: "chart",
          description: "ChartContainer, ChartTooltip, ChartTooltipContent from @/components/ui/chart.",
        },
        {
          name: "recharts",
          description: "ScatterChart, Scatter, XAxis, YAxis — registered in registry.json.",
        },
      ],
    },
  ],
  enhancements: [
    {
      enhancement: "Column run summaries",
      benefit: "Header bars and % show aggregate health per run at a glance",
    },
    {
      enhancement: "Row health column",
      benefit: "Trailing % summarizes each model across all runs",
    },
    {
      enhancement: "Responsive cell sizing",
      benefit: "Cell width scales with container; gaps stay consistent",
    },
    {
      enhancement: "Figma-aligned palette",
      benefit: "Fixed hex tokens for healthy, quality, failed, and none states",
    },
    {
      enhancement: "Default demo dataset",
      benefit: "Renders a full 10×10 grid without passing runs or models",
    },
  ],
}
