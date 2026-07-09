import {
  DataProductCardDefaultPreview,
  DataProductCardGridPreview,
  DataProductCardInteractivePreview,
  DataProductCardLastRunPreview,
} from "@/app/component-examples/data-product-card-usage"
import { dataProductCardCodes } from "@/app/component-examples/data-product-card-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const dataProductCardPage: ComponentVariantPage = {
  name: "data-product-card",
  title: "Data Product Card",
  description:
    "Catalog card for data products with icon, title, subtitle, truncated description, and status badge.",
  install: dataProductCardCodes.install,
  intro:
    "A composed card for browsing data products — shows a product icon, title, optional glossary subtitle, truncated description, and a quality or last-run status badge.",
  sections: [
    {
      id: "preview",
      variants: [
        {
          id: "quality",
          title: "Quality badge",
          description:
            "Card with subtitle and a Quality warning badge.",
          body: "Use badge.status=\"warn\" for at-risk quality. The subtitle row shows a glossary or category label with a document icon.",
          Preview: DataProductCardDefaultPreview,
          code: dataProductCardCodes.default,
          tall: true,
        },
      ],
    },
    {
      id: "last-run",
      title: "Last run badge",
      description: "Card with a failed last-run status badge.",
      body: "Use badge.status=\"fail\" when the most recent pipeline run failed. Omit subtitle for simpler product cards.",
      variants: [
        {
          id: "last-run",
          title: "Last run failed",
          description: "Financial risk card with fail badge.",
          Preview: DataProductCardLastRunPreview,
          code: dataProductCardCodes.lastRun,
          docLink: { href: "#api-reference", label: "Props reference" },
          tall: true,
        },
      ],
    },
    {
      id: "patterns",
      title: "Usage patterns",
      description: "Grid layout and interactive cards.",
      variants: [
        {
          id: "grid",
          title: "Product grid",
          description: "Render multiple cards in a responsive grid.",
          Preview: DataProductCardGridPreview,
          code: dataProductCardCodes.grid,
          docLink: { href: "#api-reference", label: "Props reference" },
          tall: true,
        },
        {
          id: "interactive",
          title: "Clickable card",
          description: "Wire onClick or href for navigation.",
          Preview: DataProductCardInteractivePreview,
          code: dataProductCardCodes.props,
          docLink: { href: "#api-reference", label: "Props reference" },
        },
      ],
    },
  ],
  variants: [
    {
      id: "quality",
      title: "Quality badge",
      description: "Subtitle + quality warning badge.",
      Preview: DataProductCardDefaultPreview,
      code: dataProductCardCodes.default,
    },
    {
      id: "last-run",
      title: "Last run",
      description: "Failed last-run badge.",
      Preview: DataProductCardLastRunPreview,
      code: dataProductCardCodes.lastRun,
    },
    {
      id: "grid",
      title: "Grid",
      description: "Multiple cards in a grid.",
      Preview: DataProductCardGridPreview,
      code: dataProductCardCodes.grid,
    },
  ],
}
