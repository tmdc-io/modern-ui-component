export const lineageGraphCodes = {
  install: `npx shadcn@latest add @modernui/lineage-graph
npx shadcn@latest add tmdc-io/modern-ui-component/lineage-graph`,

  default: `"use client"

import { LineageGraph } from "@/components/blocks/lineage-graph"

/**
 * Default Lineage Graph
 * ---------------------
 * Renders the built-in DataOS sample when nodes/edges are omitted:
 * Seeds → Inputs → Outputs → Metrics (CUSTOMER_MASTER selected).
 *
 * Visual behavior
 * - Asset cards with kind chip, optional verified shield
 * - Selected node uses teal-bg-2 + dark-teal leading accent (Assets Tree language)
 * - Smooth-step edges with arrow markers
 *
 * Built on @modernui/flow (@xyflow/react). Theme CSS comes from ModernUI globals.
 */
export function LineagePanel() {
  return (
    <LineageGraph
      className="h-full w-full border border-[#ebebeb]"
      height="28rem"
      defaultSelectedId="CUSTOMER_MASTER"
    />
  )
}
`,

  selected: `"use client"

import * as React from "react"

import {
  LineageGraph,
  type LineageAssetNode,
} from "@/components/blocks/lineage-graph"

/**
 * Controlled selection
 * --------------------
 * Pass selectedId + onSelectChange to mirror the active asset in a detail panel.
 * showMiniMap adds an overview map in the corner.
 */
export function LineageSelected() {
  const [selected, setSelected] = React.useState<LineageAssetNode>()

  return (
    <div className="flex flex-col gap-3">
      <LineageGraph
        className="border border-[#ebebeb]"
        height="26rem"
        selectedId={selected?.id ?? "CUSTOMER_360"}
        onSelectChange={setSelected}
        showMiniMap
      />
      <p className="text-muted-foreground text-sm">
        Selected: {selected?.data.label ?? "CUSTOMER_360"}
      </p>
    </div>
  )
}
`,

  dataDriven: `"use client"

import * as React from "react"
import { MarkerType, type Edge } from "@xyflow/react"

import {
  LineageGraph,
  type LineageAssetNode,
} from "@/components/blocks/lineage-graph"

type LineageApiNode = {
  id: string
  name: string
  kind: LineageAssetNode["data"]["kind"]
  verified?: boolean
  x: number
  y: number
}

type LineageApiEdge = {
  from: string
  to: string
}

/** Map API payload → LineageAssetNode[] + Edge[]. */
function mapLineage(nodes: LineageApiNode[], links: LineageApiEdge[]) {
  const graphNodes: LineageAssetNode[] = nodes.map((n) => ({
    id: n.id,
    type: "asset" as const,
    position: { x: n.x, y: n.y },
    data: {
      label: n.name,
      kind: n.kind,
      verified: n.verified,
    },
  }))

  const graphEdges: Edge[] = links.map((link) => ({
    id: \`e-\${link.from}-\${link.to}\`,
    source: link.from,
    target: link.to,
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16 },
  }))

  return { nodes: graphNodes, edges: graphEdges }
}

const apiNodes: LineageApiNode[] = [
  { id: "raw_orders", name: "RAW_ORDERS", kind: "input", x: 0, y: 80 },
  {
    id: "stg_orders",
    name: "STG_ORDERS",
    kind: "model",
    verified: true,
    x: 280,
    y: 80,
  },
  {
    id: "fct_orders",
    name: "FCT_ORDERS",
    kind: "output",
    verified: true,
    x: 560,
    y: 80,
  },
]

const apiEdges: LineageApiEdge[] = [
  { from: "raw_orders", to: "stg_orders" },
  { from: "stg_orders", to: "fct_orders" },
]

/**
 * From API data
 * -------------
 * Transform a positional API payload into nodes/edges and pass them in.
 */
export function LineageFromApi() {
  const { nodes, edges } = React.useMemo(
    () => mapLineage(apiNodes, apiEdges),
    []
  )

  return (
    <LineageGraph
      nodes={nodes}
      edges={edges}
      height="22rem"
      defaultSelectedId="stg_orders"
      className="border border-[#ebebeb]"
    />
  )
}
`,
}
