import type { ComponentApiDoc } from "@/app/component-variants/types"

export const lineageGraphApi: ComponentApiDoc = {
  features: [
    "DataOS lineage canvas on FlowContainer (@xyflow/react).",
    "Custom asset nodes with kind chip, optional verified shield, and teal selection.",
    "Smooth-step edges with arrow markers; connect disabled by default.",
    "Sample defaultLineageNodes / defaultLineageEdges matching Assets Tree names.",
  ],
  usage: {
    import:
      'import { LineageGraph, type LineageAssetNode } from "@/components/blocks/lineage-graph"',
    example: `<LineageGraph
  defaultSelectedId="CUSTOMER_MASTER"
  height="28rem"
  onSelectChange={(node) => console.log(node?.data.label)}
/>`,
  },
  apiReference: {
    title: "LineageGraph Props",
    props: [
      {
        prop: "nodes",
        type: "LineageAssetNode[]",
        description:
          'Graph nodes (type: "asset"). Defaults to defaultLineageNodes.',
      },
      {
        prop: "edges",
        type: "Edge[]",
        description: "Graph edges. Defaults to defaultLineageEdges.",
      },
      {
        prop: "selectedId",
        type: "string",
        description: "Controlled selected node id.",
      },
      {
        prop: "defaultSelectedId",
        type: "string",
        default: '"CUSTOMER_MASTER"',
        description: "Initial selection when uncontrolled.",
      },
      {
        prop: "onSelectChange",
        type: "(node: LineageAssetNode | undefined) => void",
        description: "Fires when a node is clicked or selection is cleared.",
      },
      {
        prop: "height",
        type: "number | string",
        default: '"28rem"',
        description: "Canvas height passed to FlowContainer.",
      },
      {
        prop: "showMiniMap",
        type: "boolean",
        default: "false",
        description: "Show the Flow MiniMap overview.",
      },
      {
        prop: "className",
        type: "string",
        description: "Classes on the FlowContainer frame.",
      },
    ],
    footnote:
      "LineageAssetData: label, kind (seed | input | output | model | metric), verified?, subtitle?. Depends on registry item flow (@xyflow/react).",
  },
}
