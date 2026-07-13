import {
  RunDurationDefaultPreview,
  RunDurationInteractivePreview,
} from "@/app/component-examples/run-duration-usage"
import { runDurationCodes } from "@/app/component-examples/run-duration-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const runDurationPage: ComponentVariantPage = {
  name: "run-duration",
  title: "Run Duration",
  description:
    "Run duration bar chart with normal, anomaly, and selected states plus a baseline reference line.",
  install: runDurationCodes.install,
  intro:
    "Visualize pipeline run durations across time — teal bars for normal runs, pink for anomalies, and a selected run with column highlight. Includes dashed baseline and per-run date/time labels.",
  sections: [
    {
      id: "preview",
      variants: [
        {
          id: "default",
          title: "Run duration chart",
          description:
            "Bar chart with legend, baseline, and selected run highlight.",
          body: "Click a bar to select a run. Duration labels appear above each bar in the status color.",
          Preview: RunDurationDefaultPreview,
          code: runDurationCodes.default,
          tall: true,
        },
      ],
    },
    {
      id: "patterns",
      title: "Usage patterns",
      description: "Controlled selected run state.",
      variants: [
        {
          id: "controlled",
          title: "Controlled selection",
          description: "Wire selectedId and onSelectedChange from your shell.",
          Preview: RunDurationInteractivePreview,
          code: runDurationCodes.controlled,
          docLink: { href: "#api-reference", label: "Props reference" },
          tall: true,
        },
      ],
    },
  ],
  variants: [
    {
      id: "default",
      title: "Default",
      description: "Run duration with baseline and legend.",
      Preview: RunDurationDefaultPreview,
      code: runDurationCodes.default,
    },
    {
      id: "controlled",
      title: "Controlled",
      description: "Selected run driven by parent state.",
      Preview: RunDurationInteractivePreview,
      code: runDurationCodes.controlled,
    },
  ],
}
