import type { ComponentApiDoc } from "@/app/component-variants/types"

export const perspectiveContextCardApi: ComponentApiDoc = {
  features: [
    "DataOS perspective context card with icon tile, title, and visibility.",
    'Full and small (size="sm") views.',
    "Freshness / policies metric strip or status chips.",
    "Defines copy with View more plus concept tags.",
    'Composed-of body switches on view: "rest" field chips, or "graphql" / "source-sql" / "semantic-sql" snippets.',
    "Syntax highlighting for SQL keywords, entities, and string literals.",
    "Powered-by source, usage stats, and owner contact.",
    "Single CTA — Explore in full, Know more in sm.",
  ],
  usage: {
    import:
      'import { PerspectiveContextCard } from "@/components/blocks/perspective-context-card"',
    example: `<PerspectiveContextCard
  view="source-sql"
  onClose={() => setOpen(false)}
  onExplore={() => openPerspective()}
/>

{/* Compact */}
<PerspectiveContextCard size="sm" onExplore={() => openFull()} />`,
  },
  apiReference: {
    title: "PerspectiveContextCard Props",
    props: [
      {
        prop: "size",
        type: '"full" | "sm"',
        default: '"full"',
        description: "full = drawer; sm = compact popover card.",
      },
      {
        prop: "view",
        type: '"rest" | "graphql" | "source-sql" | "semantic-sql"',
        default: '"rest"',
        description: "Body rendered inside What it is composed of.",
      },
      {
        prop: "title / visibility",
        type: "string / string",
        description: "Header identity and access label.",
      },
      {
        prop: "metrics",
        type: "PerspectiveContextCardMetric[]",
        description:
          "Freshness and policies (chipIcon / compactValue drive the sm chips).",
      },
      {
        prop: "description / tags",
        type: "string / PerspectiveContextCardTag[]",
        description: "What it defines copy with View more, plus concept tags.",
      },
      {
        prop: "fieldGroups",
        type: "PerspectiveContextCardFieldGroup[]",
        description:
          'Measure / dimension / segment / filter rows for view="rest" (full only).',
      },
      {
        prop: "code",
        type: "string",
        description: "Overrides the built-in snippet for the active query view.",
      },
      {
        prop: "poweredBy / usageStats",
        type: "string / PerspectiveContextCardUsageStat[]",
        description: "Backing data product and usage columns (full only).",
      },
      {
        prop: "contacts",
        type: "PerspectiveContextCardContact[]",
        description: "Who to ask — avatar, name, role, email.",
      },
      {
        prop: "exploreLabel / onExplore / onClose",
        type: "string / () => void / () => void",
        description:
          'CTA label and handlers. Defaults to Explore, or Know more when size="sm".',
      },
    ],
    footnote:
      "Defaults export as defaultPerspectiveContextCardProps / defaultPerspectiveContextCardFieldGroups / defaultPerspectiveContextCardCode.",
  },
}
