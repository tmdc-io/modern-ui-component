import {
  ModelHealthRunsCustomPreview,
  ModelHealthRunsDefaultPreview,
} from "@/app/component-examples/model-health-runs-usage"
import { modelHealthRunsCodes } from "@/app/component-examples/model-health-runs-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const modelHealthRunsPage: ComponentVariantPage = {
  name: "model-health-runs",
  title: "Model Health Across Runs",
  description:
    "Recharts heatmap of model health status across runs with row and column health summaries.",
  install: modelHealthRunsCodes.install,
  intro:
    "Track model health across R1–R10 runs — rounded status pills per model/run intersection, column run-health bars, and row-level health percentages.",
  sections: [
    {
      id: "preview",
      variants: [
        {
          id: "default",
          title: "Model health grid",
          description:
            "Heatmap grid with healthy, quality, failed, and not-evaluated states.",
          body: "Pass runs for column headers and models with cells keyed by runId. Status colors use DataOS quality tokens.",
          Preview: ModelHealthRunsDefaultPreview,
          code: modelHealthRunsCodes.default,
          fitContent: true,
        },
      ],
    },
    {
      id: "patterns",
      title: "Usage patterns",
      description: "Custom runs and models data.",
      variants: [
        {
          id: "custom",
          title: "Custom data",
          description: "Pass runs for columns and models with cells keyed by runId.",
          Preview: ModelHealthRunsCustomPreview,
          code: modelHealthRunsCodes.custom,
          docLink: { href: "#api-reference", label: "Props reference" },
          fitContent: true,
        },
      ],
    },
  ],
  variants: [
    {
      id: "default",
      title: "Default",
      description: "Model health grid across ten runs.",
      Preview: ModelHealthRunsDefaultPreview,
      code: modelHealthRunsCodes.default,
      fitContent: true,
    },
  ],
}
