import type { ComponentApiDoc } from "@/app/component-variants/types"

export const dataProductContextCardApi: ComponentApiDoc = {
  features: [
    "DataOS product context card with header, version, and platform meta.",
    "Full and small (size=\"sm\") views — chips + Know more for compact cards.",
    "Quality / freshness / policies metric strip or status chips.",
    "Defines description with glossary tags and View more.",
    "Fit guidance tabs: Good for, Not good for, Caveats (full only).",
    "Usage stats, gateway URL with copy, resources, and contacts.",
    "Footer More details + Explore (full) or Know more (small).",
  ],
  usage: {
    import:
      'import { DataProductContextCard } from "@/components/blocks/data-product-context-card"',
    example: `<DataProductContextCard
  onClose={() => setOpen(false)}
  onExplore={() => router.push("/explore")}
/>

{/* Compact card */}
<DataProductContextCard size="sm" onExplore={() => openFull()} />`,
  },
  apiReference: {
    title: "DataProductContextCard Props",
    props: [
      {
        prop: "size",
        type: '"full" | "sm"',
        default: '"full"',
        description:
          "full = drawer detail; sm = compact card with status chips and Know more CTA.",
      },
      {
        prop: "title",
        type: "string",
        default: '"Orders 360"',
        description: "Product title in the header.",
      },
      {
        prop: "version",
        type: "string",
        default: '"v0.12.1"',
        description: "Version pill next to the title.",
      },
      {
        prop: "meta",
        type: "DataProductContextCardMeta[]",
        description: "Header chips (platform, domain, alignment).",
      },
      {
        prop: "metrics",
        type: "DataProductContextCardMetric[]",
        description:
          "Full strip or small chips. Supports chipIcon and compactValue for sm.",
      },
      {
        prop: "description / tags",
        type: "string / DataProductContextCardTag[]",
        description: "What it defines copy and glossary pills (tags full only).",
      },
      {
        prop: "fitSections / fitTab",
        type: "DataProductContextCardFitSection[] / FitTab",
        description: "Fit guidance panels (full only); controlled via fitTab.",
      },
      {
        prop: "usageStats",
        type: "DataProductContextCardUsageStat[]",
        description: "Who else uses it — queries, latency, active users.",
      },
      {
        prop: "gatewayUrl / resources",
        type: "string / DataProductContextCardResource[]",
        description: "Where it lives (full only).",
      },
      {
        prop: "contacts",
        type: "DataProductContextCardContact[]",
        description: "Who to ask (full only).",
      },
      {
        prop: "knowMoreLabel",
        type: "string",
        default: '"Know more"',
        description: "Small-view primary CTA label (fires onExplore).",
      },
      {
        prop: "onClose / onMoreDetails / onExplore",
        type: "() => void",
        description: "Header close and footer CTA handlers.",
      },
    ],
    footnote:
      "Defaults export as defaultDataProductContextCardProps / defaultDataProductContextCardFitSections for demos and tests.",
  },
}
