import type { ComponentApiDoc } from "@/app/component-variants/types"

export const heroApi: ComponentApiDoc = {
  features: [
    "Prop-driven data product header with full, internal, and sticky variants.",
    "Optional Data Quality card with a percentage donut and pass/warn/fail dimension grid.",
    "Source / Links / Governance metadata columns and a Jump to navigation bar.",
    "Follow toggle and an Explore split button with an optional dropdown menu.",
  ],
  usage: {
    import: 'import { Hero, type HeroProps } from "@/components/blocks/hero"',
    example: `<Hero
  variant="full"
  title="E-Commerce & Digital Experience Analytics"
  subtitle="Conversion Rate"
  icon={<BoxIcon className="size-5" strokeWidth={1.5} />}
  description="Our B2B e-commerce platform offers comprehensive analytics..."
  metaColumns={metaColumns}
  quality={quality}
  jumpItems={jumpItems}
/>`,
  },
  apiReference: {
    title: "Hero Props",
    props: [
      {
        prop: "title",
        type: "string",
        description: "Data product name shown in the serif header.",
      },
      {
        prop: "subtitle",
        type: "string",
        description: "Secondary label under the title (hidden in sticky variant).",
      },
      {
        prop: "subtitleIcon",
        type: "React.ReactNode",
        description: "Optional icon rendered before the subtitle.",
      },
      {
        prop: "description",
        type: "string",
        description: "Overview copy, line-clamped to two lines with a View more action.",
      },
      {
        prop: "icon",
        type: "React.ReactNode",
        description: "Icon rendered in the leading tile. Defaults to a box icon.",
      },
      {
        prop: "variant",
        type: '"full" | "internal" | "sticky"',
        default: '"full"',
        description:
          "full shows metadata + quality card; internal trims them; sticky is a compact bar.",
      },
      {
        prop: "quality",
        type: "HeroQuality",
        description:
          "Data Quality card data (percentage, passed, failed, dimensions, href). Full variant only.",
      },
      {
        prop: "metaColumns",
        type: "HeroMetaColumn[]",
        description:
          "Source / Links / Governance columns of label-value rows. Full variant only.",
      },
      {
        prop: "jumpItems",
        type: "HeroJumpItem[]",
        description: "Jump to navigation items with optional icon and dropdown affordance.",
      },
      {
        prop: "showDescription",
        type: "boolean",
        default: "true",
        description: "Toggle the description block without removing the prop.",
      },
      {
        prop: "following",
        type: "boolean",
        description: "Controlled follow state; label switches to Following.",
      },
      {
        prop: "onFollowChange",
        type: "(next: boolean) => void",
        description: "Fires with the next follow state on click.",
      },
      {
        prop: "exploreLabel",
        type: "string",
        default: '"Explore"',
        description: "Primary action button label.",
      },
      {
        prop: "onExplore",
        type: "() => void",
        description: "Primary action click handler.",
      },
      {
        prop: "exploreMenu",
        type: "React.ReactNode",
        description:
          "Dropdown menu items for the Explore split button. Renders a chevron menu when provided.",
      },
    ],
    footnote:
      "Also exported: HeroQualityCard, HeroJumpBar, HeroMemberStack for composing custom layouts. Types: HeroQuality, HeroMetaColumn, HeroMetaItem, HeroJumpItem, HeroMember.",
  },
  enhancements: [
    {
      enhancement: "Single variant prop",
      benefit: "Full, internal, and sticky headers from one component",
    },
    {
      enhancement: "Data-conditional sections",
      benefit: "Description, metadata, quality, and jump bar render only when passed",
    },
    {
      enhancement: "Quality donut",
      benefit: "Percentage ring with pass/warn/fail dimension grid",
    },
    {
      enhancement: "Explore split button",
      benefit: "Primary action with an optional dropdown menu",
    },
  ],
}
