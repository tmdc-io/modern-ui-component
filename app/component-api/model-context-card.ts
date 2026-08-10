import type { ComponentApiDoc } from "@/app/component-variants/types"

export const modelContextCardApi: ComponentApiDoc = {
  features: [
    "DataOS model context card with table icon, version, and warehouse path.",
    "Full and small (size=\"sm\") views.",
    "Quality / last run / policies metric strip or status chips.",
    "Defines copy + tags; composed-of field chips with See all.",
    "Mini lineage preview (upstream → current → downstream).",
    "Productized-in list, usage stats, schedule rows, and owner contact.",
    "Single Know more CTA.",
  ],
  usage: {
    import:
      'import { ModelContextCard } from "@/components/blocks/model-context-card"',
    example: `<ModelContextCard
  onClose={() => setOpen(false)}
  onExplore={() => openDocs()}
  onViewLineage={() => openLineage()}
/>

{/* Compact */}
<ModelContextCard size="sm" onExplore={() => openFull()} />`,
  },
  apiReference: {
    title: "ModelContextCard Props",
    props: [
      {
        prop: "size",
        type: '"full" | "sm"',
        default: '"full"',
        description: "full = drawer; sm = compact popover card.",
      },
      {
        prop: "title / version / path",
        type: "string / string / string[]",
        description: "Header identity and warehouse path segments.",
      },
      {
        prop: "metrics",
        type: "ModelContextCardMetric[]",
        description: "Quality, last run, policies (chipIcon / compactValue for sm).",
      },
      {
        prop: "fields / fieldsTotal",
        type: "ModelContextCardField[] / number",
        description: "Composed-of field chips (full only).",
      },
      {
        prop: "lineage",
        type: "ModelContextCardLineage",
        description: "Upstream / current / downstream mini graph (full only).",
      },
      {
        prop: "products",
        type: "ModelContextCardProduct[]",
        description: "Productized-in data products.",
      },
      {
        prop: "scheduleRows",
        type: "ModelContextCardScheduleRow[]",
        description: "Schedule key/value rows (full only).",
      },
      {
        prop: "contacts",
        type: "ModelContextCardContact[]",
        description: "Who to ask — avatar, name, role, email.",
      },
      {
        prop: "onExplore / onSeeAllFields / onViewLineage / onClose",
        type: "() => void",
        description: "CTA and chrome handlers.",
      },
    ],
    footnote:
      "Defaults export as defaultModelContextCardProps / defaultModelContextCardFields.",
  },
}
