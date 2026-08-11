import {
  ModelContextCardCustomPreview,
  ModelContextCardDefaultPreview,
  ModelContextCardSmallPreview,
} from "@/app/component-examples/model-context-card-usage"
import { modelContextCardCodes } from "@/app/component-examples/model-context-card-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const modelContextCardPage: ComponentVariantPage = {
  name: "model-context-card",
  title: "Model Context Card",
  description:
    "DataOS model context card with quality, last run, fields, lineage preview, productized list, schedule, and contacts.",
  install: modelContextCardCodes.install,
  intro:
    "A composed context card for warehouse / dbt models — path, quality & last run, defines, composed fields, lineage preview, productized list, usage, schedule, and owner. Use size=\"sm\" for compact peeks.",
  variants: [],
  sections: [
    {
      id: "preview",
      variants: [
        {
          id: "default",
          title: "Full",
          description:
            "web_events_daily sample with fields, lineage, schedule, and owner.",
          body: "Omit props for the built-in sample (size=\"full\"). Wire onClose, onExplore, onSeeAllFields, and onViewLineage for drawer actions.",
          Preview: ModelContextCardDefaultPreview,
          code: modelContextCardCodes.default,
          tall: true,
          fitContent: true,
        },
        {
          id: "small",
          title: "Small",
          description:
            "Compact card with status chips, productized tags, owner, and Know more.",
          body: "Pass size=\"sm\" for lineage popovers. Hides fields, lineage, usage, and schedule. Metrics render as chips. CTA defaults to Know more.",
          Preview: ModelContextCardSmallPreview,
          code: modelContextCardCodes.small,
          tall: true,
          fitContent: true,
        },
      ],
    },
    {
      id: "custom",
      title: "Custom model",
      description: "Override title, path, and productized list.",
      variants: [
        {
          id: "custom",
          title: "From model data",
          description: "Map a catalog API payload into ModelContextCard props.",
          body: "Pass title, path, description, fieldsTotal, products, metrics, and contacts. Defaults fill omitted sections.",
          Preview: ModelContextCardCustomPreview,
          code: modelContextCardCodes.custom,
          tall: true,
          fitContent: true,
        },
      ],
    },
  ],
}
