import type { ComponentApiDoc } from "@/app/component-variants/types"

export const flowApi: ComponentApiDoc = {
  features: [
    "Sized FlowContainer wrapping @xyflow/react (xyflow) with ModernUI tokens.",
    "Optional Background, Controls, and MiniMap chrome.",
    "Re-exports useNodesState, useEdgesState, addEdge, Handle, Position, and core types.",
    "Theme CSS for React Flow ships with the ModernUI theme globals.",
  ],
  usage: {
    import:
      'import { FlowContainer, useNodesState, useEdgesState } from "@/components/ui/flow"',
    example: `const [nodes, , onNodesChange] = useNodesState([
  { id: "n1", position: { x: 0, y: 0 }, data: { label: "A" } },
  { id: "n2", position: { x: 200, y: 0 }, data: { label: "B" } },
])
const [edges, , onEdgesChange] = useEdgesState([
  { id: "e1", source: "n1", target: "n2", type: "smoothstep" },
])

<FlowContainer
  nodes={nodes}
  edges={edges}
  onNodesChange={onNodesChange}
  onEdgesChange={onEdgesChange}
  height="24rem"
  fitView
/>`,
  },
  apiReference: {
    title: "FlowContainer Props",
    props: [
      {
        prop: "height",
        type: "number | string",
        default: '"24rem"',
        description:
          "Outer frame height. React Flow requires a parent with explicit size.",
      },
      {
        prop: "showBackground",
        type: "boolean",
        default: "true",
        description: "Render the dotted Background layer.",
      },
      {
        prop: "showControls",
        type: "boolean",
        default: "true",
        description: "Render zoom / fit Controls (interactive lock off by default).",
      },
      {
        prop: "showMiniMap",
        type: "boolean",
        default: "false",
        description: "Render a pannable MiniMap in the corner.",
      },
      {
        prop: "withProvider",
        type: "boolean",
        default: "true",
        description:
          "Wrap in ReactFlowProvider. Set false when a parent already provides one.",
      },
      {
        prop: "nodes / edges / onNodesChange / …",
        type: "ReactFlowProps",
        description:
          "All remaining props forward to ReactFlow (nodes, edges, nodeTypes, onConnect, fitView, etc.).",
      },
    ],
    footnote:
      "Built on https://xyflow.com/ (@xyflow/react). Theme globals load React Flow CSS under Tailwind 4. For DataOS asset lineage, install @modernui/lineage-graph.",
  },
}
