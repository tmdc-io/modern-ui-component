import type { ComponentApiDoc } from "@/app/component-variants/types"

export const dataProductCardApi: ComponentApiDoc = {
  features: [
    "Product icon in a rounded teal container with customizable icon and colors.",
    "Title and optional subtitle with document icon for glossary or category.",
    "Description truncated to three lines with line-clamp.",
    "Status badge pill for Quality (warn) or Last run (fail) states.",
    "Optional href or onClick for clickable catalog cards.",
  ],
  usage: {
    import: 'import { DataProductCard } from "@/components/blocks/data-product-card"',
    example: `<DataProductCard
  title="Patient Journey Analysis"
  subtitle="Treatment Adherence"
  description="This data product tracks patient compliance with prescribed treatments."
  badge={{ label: "Quality", status: "warn" }}
/>`,
  },
  apiReference: {
    title: "DataProductCard Props",
    props: [
      {
        prop: "title",
        type: "string",
        description: "Product name shown in the card header.",
      },
      {
        prop: "subtitle",
        type: "string",
        description: "Optional glossary or category label below the title.",
      },
      {
        prop: "description",
        type: "string",
        description: "Product summary. Truncated to three lines in the card.",
      },
      {
        prop: "icon",
        type: "React.ReactNode",
        description: "Icon inside the rounded container. Defaults to a box icon.",
      },
      {
        prop: "iconClassName",
        type: "string",
        default: '"bg-teal-bg-2 text-foreground"',
        description: "Tailwind classes for the icon container background.",
      },
      {
        prop: "badge",
        type: "DataProductCardBadge",
        description: 'Status pill with label and status: "pass" | "warn" | "fail".',
      },
      {
        prop: "href",
        type: "string",
        description: "Renders the card as a link when provided.",
      },
      {
        prop: "onClick",
        type: "() => void",
        description: "Renders the card as a button when provided.",
      },
      {
        prop: "size",
        type: '"default" | "sm"',
        default: '"default"',
        description: "Card density. Use sm for compact catalog grids.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes on the card wrapper.",
      },
    ],
    footnote:
      "Also exported: DataProductCardBadgePill, DataProductCardSkeleton. Badge colors use DataOS quality tokens (dataos-warn-bg, dataos-fail-bg).",
  },
  enhancements: [
    {
      enhancement: "Status badges",
      benefit: "Quality warn and last-run fail states from the design system",
    },
    {
      enhancement: "Truncated description",
      benefit: "Consistent card height in catalog grids",
    },
    {
      enhancement: "Clickable",
      benefit: "Use href or onClick for navigation to product detail pages",
    },
    {
      enhancement: "Skeleton + density",
      benefit: "Loading and compact size match Plan/Run card patterns",
    },
  ],
}
