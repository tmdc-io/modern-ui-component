import {
  DataProductContextCardCustomPreview,
  DataProductContextCardDefaultPreview,
  DataProductContextCardFitPreview,
  DataProductContextCardSmallPreview,
} from "@/app/component-examples/data-product-context-card-usage"
import { dataProductContextCardCodes } from "@/app/component-examples/data-product-context-card-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const dataProductContextCardPage: ComponentVariantPage = {
  name: "data-product-context-card",
  title: "Data Product Context Card",
  description:
    "DataOS product context card with quality metrics, fit guidance, usage, gateway link, and contacts — plus a compact small view.",
  install: dataProductContextCardCodes.install,
  intro:
    "A composed context card for DataOS catalog drawers — header + version, quality/freshness/policies, defines + glossary tags, fit tabs, usage, where it lives, and who to ask. Use size=\"sm\" for the compact card.",
  variants: [],
  sections: [
    {
      id: "preview",
      variants: [
        {
          id: "default",
          title: "Full",
          description:
            "Orders 360 sample with metrics, fit tabs, gateway URL, and contacts.",
          body: "Omit props to use the built-in Orders 360 defaults (size=\"full\"). Wire onClose for the header X and onMoreDetails / onExplore for footer CTAs. Open the drawer for shell wiring.",
          Preview: DataProductContextCardDefaultPreview,
          code: dataProductContextCardCodes.default,
          tall: true,
          fitContent: true,
        },
        {
          id: "small",
          title: "Small",
          description:
            "Compact card with status chips, truncated description, usage, and Know more.",
          body: "Pass size=\"sm\" for lineage popovers and dense catalog peeks. Metrics render as chips (chipIcon / compactValue). Fit, tags, gateway, and contacts are hidden. Primary CTA uses knowMoreLabel (default \"Know more\") via onExplore.",
          Preview: DataProductContextCardSmallPreview,
          code: dataProductContextCardCodes.small,
          tall: true,
          fitContent: true,
        },
      ],
    },
    {
      id: "fit",
      title: "Fit guidance",
      description: "Control Good for / Not good for / Caveats.",
      variants: [
        {
          id: "fit",
          title: "Controlled fit tab",
          description: "fitTab + onFitTabChange sync the left rail selection.",
          body: "Each fit section has a title and numbered items. View more expands beyond three items. See the drawer for controlled state.",
          Preview: DataProductContextCardFitPreview,
          code: dataProductContextCardCodes.fit,
          tall: true,
          fitContent: true,
        },
      ],
    },
    {
      id: "custom",
      title: "Custom product",
      description: "Override title, metrics, tags, and gateway.",
      variants: [
        {
          id: "custom",
          title: "From product data",
          description:
            "Map a catalog API payload into DataProductContextCard props.",
          body: "Pass title, version, description, metrics, tags, usageStats, gatewayUrl, resources, and contacts. Defaults fill any omitted sections.",
          Preview: DataProductContextCardCustomPreview,
          code: dataProductContextCardCodes.custom,
          tall: true,
          fitContent: true,
        },
      ],
    },
  ],
}
