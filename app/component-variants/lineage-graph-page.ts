import {
  LineageGraphDataDrivenPreview,
  LineageGraphDefaultPreview,
  LineageGraphSelectedPreview,
} from "@/app/component-examples/lineage-graph-usage"
import { lineageGraphCodes } from "@/app/component-examples/lineage-graph-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const lineageGraphPage: ComponentVariantPage = {
  name: "lineage-graph",
  title: "Lineage Graph",
  description:
    "DataOS asset lineage canvas with custom nodes, teal selection, and smooth-step edges built on Flow.",
  install: lineageGraphCodes.install,
  intro:
    "A composed lineage view for DataOS shells — kind chips, verified shields, and Assets Tree–aligned teal selection on top of @modernui/flow (xyflow).",
  variants: [],
  sections: [
    {
      id: "preview",
      variants: [
        {
          id: "default",
          title: "Default",
          description:
            "Seeds → Inputs → Outputs → Metrics with CUSTOMER_MASTER selected.",
          body: "Uses defaultLineageNodes / defaultLineageEdges when props are omitted. Nodes are draggable; connect is disabled. Open the drawer for shell wiring.",
          Preview: LineageGraphDefaultPreview,
          code: lineageGraphCodes.default,
          tall: true,
        },
      ],
    },
    {
      id: "selection",
      title: "Selection",
      description: "Control selection and mirror it in surrounding UI.",
      variants: [
        {
          id: "selected",
          title: "Controlled selection",
          description:
            "selectedId + onSelectChange with minimap for large graphs.",
          body: "Click a node to update selection; click the pane to clear. Selected cards use teal-bg-2 and a dark-teal accent bar.",
          Preview: LineageGraphSelectedPreview,
          code: lineageGraphCodes.selected,
          tall: true,
        },
      ],
    },
    {
      id: "data-driven",
      title: "Data-driven",
      description: "Map an API payload into nodes and edges.",
      variants: [
        {
          id: "data-driven",
          title: "From API data",
          description:
            "Transform positional API nodes/links into LineageAssetNode[] and Edge[].",
          body: "mapLineage() maps id, name→label, kind, verified, and x/y→position. Pass the result as nodes and edges. See the drawer for the full mapper.",
          Preview: LineageGraphDataDrivenPreview,
          code: lineageGraphCodes.dataDriven,
          tall: true,
        },
      ],
    },
  ],
}
