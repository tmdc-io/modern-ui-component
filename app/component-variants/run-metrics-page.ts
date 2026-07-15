import {
  RunMetricsCustomPreview,
  RunMetricsDefaultPreview,
} from "@/app/component-examples/run-metrics-usage"
import { runMetricsCodes } from "@/app/component-examples/run-metrics-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const runMetricsPage: ComponentVariantPage = {
  name: "run-metrics",
  title: "Run Metrics",
  description:
    "Pipeline run metrics grid with uppercase labels, serif values, and optional quality breakdown.",
  install: runMetricsCodes.install,
  intro:
    "Display wall time, model count, parallelism, eval latency, quality score, and assertions in a compact grid. The quality metric supports a passed/failed subline with semantic fail coloring.",
  sections: [
    {
      id: "preview",
      variants: [
        {
          id: "default",
          title: "Run metrics grid",
          description: "Six-metric pipeline summary in a 3-column grid.",
          body: "Defaults match the standard run summary: WALL, MODELS, PARALLELISM, EVAL, QUALITY, and ASSERTIONS.",
          Preview: RunMetricsDefaultPreview,
          code: runMetricsCodes.default,
        },
      ],
    },
    {
      id: "patterns",
      title: "Usage patterns",
      description: "Custom metrics and column layout.",
      variants: [
        {
          id: "custom",
          title: "Custom metrics",
          description: "Pass your own metrics array and column count.",
          Preview: RunMetricsCustomPreview,
          code: runMetricsCodes.custom,
          docLink: { href: "#api-reference", label: "Props reference" },
        },
      ],
    },
  ],
  variants: [
    {
      id: "default",
      title: "Default",
      description: "Six-metric run summary grid.",
      Preview: RunMetricsDefaultPreview,
      code: runMetricsCodes.default,
    },
    {
      id: "custom",
      title: "Custom",
      description: "Custom metrics with two columns.",
      Preview: RunMetricsCustomPreview,
      code: runMetricsCodes.custom,
    },
  ],
}
