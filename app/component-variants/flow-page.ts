import {
  FlowChromePreview,
  FlowCustomNodePreview,
  FlowDefaultPreview,
} from "@/app/component-examples/flow-usage"
import { flowCodes } from "@/app/component-examples/flow-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const flowPage: ComponentVariantPage = {
  name: "flow",
  title: "Flow",
  description:
    "Node-based canvas built with xyflow / React Flow — pan, zoom, edges, and themed chrome.",
  install: flowCodes.install,
  intro:
    "FlowContainer wraps @xyflow/react with a sized parent, ModernUI tokens, and optional Background, Controls, and MiniMap. Import xyflow styles via the ModernUI theme.",
  variants: [],
  sections: [
    {
      id: "preview",
      variants: [
        {
          id: "default",
          title: "Default",
          description: "Two nodes and a smooth-step edge — pan and zoom the canvas.",
          body: "Pass nodes, edges, and the useNodesState / useEdgesState change handlers. FlowContainer supplies fitView and themed defaults. Open the drawer for a minimal install sample.",
          Preview: FlowDefaultPreview,
          code: flowCodes.default,
          tall: true,
        },
      ],
    },
    {
      id: "chrome",
      title: "Chrome",
      description: "Background grid, zoom controls, and minimap.",
      variants: [
        {
          id: "chrome",
          title: "Background, controls, minimap",
          description:
            "Toggle showBackground, showControls, and showMiniMap. Wire onConnect to draw edges.",
          body: "Controls omit the interactive lock by default. MiniMap is pannable and zoomable. Edge drawing uses addEdge with smoothstep.",
          Preview: FlowChromePreview,
          code: flowCodes.chrome,
          tall: true,
        },
      ],
    },
    {
      id: "custom",
      title: "Custom nodes",
      description: "Register nodeTypes for card-styled pipeline steps.",
      variants: [
        {
          id: "custom-node",
          title: "Custom node",
          description:
            "Card nodes with Handles — the extension point used by Lineage Graph.",
          body: "Define a component that accepts NodeProps, register it in nodeTypes, and set type on each node. For DataOS asset lineage, use the lineage-graph block.",
          Preview: FlowCustomNodePreview,
          code: flowCodes.customNode,
          tall: true,
        },
      ],
    },
  ],
}
