import {
  ModelsTableCustomPreview,
  ModelsTableDefaultPreview,
  ModelsTableExpandedErrorPreview,
  ModelsTableExpandedQualityPreview,
} from "@/app/component-examples/models-table-usage"
import { modelsTableCodes } from "@/app/component-examples/models-table-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const modelsTablePage: ComponentVariantPage = {
  name: "models-table",
  title: "Models Table",
  description:
    "Pipeline models table with expandable error logs, quality rules, and status variants.",
  install: modelsTableCodes.install,
  intro:
    "Browse dbt-style models with fail, warn, pass, and not-eval states. Error rows show a red edge indicator and dashes for runtime/rows. Expand rows to reveal warehouse error logs or nested quality rule tables.",
  sections: [
    {
      id: "preview",
      variants: [
        {
          id: "default",
          title: "Models catalog",
          description:
            "Full table with error, warn, pass, and not-eval row variants.",
          body: "Click the chevron on expandable rows to open error or quality detail panels.",
          Preview: ModelsTableDefaultPreview,
          code: modelsTableCodes.default,
          tall: true,
        },
      ],
    },
    {
      id: "expanded",
      title: "Expanded views",
      description: "Error log and quality rules detail panels.",
      variants: [
        {
          id: "expanded-error",
          title: "Error expansion",
          description:
            "Warehouse error badge, copyable log message, and view-more link.",
          Preview: ModelsTableExpandedErrorPreview,
          code: modelsTableCodes.expandedError,
          docLink: { href: "#api-reference", label: "Props reference" },
          tall: true,
        },
        {
          id: "expanded-quality",
          title: "Quality expansion",
          description: "Nested table of column rules with pass, warn, and fail icons.",
          Preview: ModelsTableExpandedQualityPreview,
          code: modelsTableCodes.expandedQuality,
          docLink: { href: "#api-reference", label: "Props reference" },
          tall: true,
        },
      ],
    },
    {
      id: "patterns",
      title: "Usage patterns",
      description: "Custom row data from your pipeline API.",
      variants: [
        {
          id: "custom",
          title: "Custom rows",
          description: "Pass models with errorDetail or qualityRules for expansion.",
          Preview: ModelsTableCustomPreview,
          code: modelsTableCodes.custom,
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
      description: "Full models table with all row variants.",
      Preview: ModelsTableDefaultPreview,
      code: modelsTableCodes.default,
    },
    {
      id: "expanded-error",
      title: "Error expanded",
      description: "Error log panel open by default.",
      Preview: ModelsTableExpandedErrorPreview,
      code: modelsTableCodes.expandedError,
    },
    {
      id: "expanded-quality",
      title: "Quality expanded",
      description: "Quality rules nested table open by default.",
      Preview: ModelsTableExpandedQualityPreview,
      code: modelsTableCodes.expandedQuality,
    },
    {
      id: "custom",
      title: "Custom",
      description: "Custom rows with expansion.",
      Preview: ModelsTableCustomPreview,
      code: modelsTableCodes.custom,
    },
  ],
}
