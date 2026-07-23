import {
  DataProductCardDefaultPreview,
  DataProductCardDensityPreview,
  DataProductCardGridPreview,
  DataProductCardInteractivePreview,
  DataProductCardLastRunPreview,
  DataProductCardSkeletonPreview,
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
          body: "Use badge.status=\"warn\" for at-risk quality. The subtitle row shows a glossary or category label with a document icon. Drawer includes href wiring and copy guidance.",
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
          body: "badge.label=\"Last run\" + status=\"fail\". Prefer href for product detail navigation.",
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
      description: "Grid layout, interaction, density, and loading.",
      variants: [
        {
          id: "grid",
          title: "Product grid",
          description: "Render multiple cards in a responsive grid.",
          body: "Map a catalog array into cards. @container + @md:grid-cols-2 responds to panel width. See drawer for the products array.",
          Preview: DataProductCardGridPreview,
          code: dataProductCardCodes.grid,
          docLink: { href: "#api-reference", label: "Props reference" },
          tall: true,
        },
        {
          id: "interactive",
          title: "Clickable card",
          description: "Wire onClick or href for navigation.",
          body: "Prefer href for navigation. Use onClick to open a detail drawer without leaving the catalog. Drawer shows both patterns.",
          Preview: DataProductCardInteractivePreview,
          code: dataProductCardCodes.interactive,
          docLink: { href: "#api-reference", label: "Props reference" },
        },
        {
          id: "density",
          title: "Density",
          description: 'Compact cards with size="sm".',
          body: "size=\"sm\" tightens padding for dense rails; keep default for featured slots.",
          Preview: DataProductCardDensityPreview,
          code: dataProductCardCodes.density,
        },
        {
          id: "skeleton",
          title: "Loading",
          description: "DataProductCardSkeleton while catalog rows load.",
          body: "Mirror the size prop of real cards so layout does not jump when data resolves.",
          Preview: DataProductCardSkeletonPreview,
          code: dataProductCardCodes.skeleton,
        },
      ],
    },
  ],
  variants: [
    {
      id: "quality",
      title: "Quality badge",
      description: "Subtitle + quality warning badge.",
      body: "warn badge + glossary subtitle.",
      Preview: DataProductCardDefaultPreview,
      code: dataProductCardCodes.default,
    },
    {
      id: "last-run",
      title: "Last run",
      description: "Failed last-run badge.",
      body: "fail badge without subtitle.",
      Preview: DataProductCardLastRunPreview,
      code: dataProductCardCodes.lastRun,
    },
    {
      id: "grid",
      title: "Grid",
      description: "Multiple cards in a grid.",
      body: "Responsive @container product grid.",
      Preview: DataProductCardGridPreview,
      code: dataProductCardCodes.grid,
    },
    {
      id: "density",
      title: "Density",
      description: "Default and compact sizes.",
      body: "default vs size=\"sm\".",
      Preview: DataProductCardDensityPreview,
      code: dataProductCardCodes.density,
    },
    {
      id: "skeleton",
      title: "Loading",
      description: "Skeleton placeholders.",
      body: "DataProductCardSkeleton for default and sm.",
      Preview: DataProductCardSkeletonPreview,
      code: dataProductCardCodes.skeleton,
    },
  ],
}
