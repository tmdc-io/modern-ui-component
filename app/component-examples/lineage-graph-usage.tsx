"use client"

import * as React from "react"
import { MarkerType, type Edge } from "@xyflow/react"

import {
  LineageGraph,
  defaultLineageEdges,
  defaultLineageNodes,
  type LineageAssetNode,
} from "@/registry/default/blocks/lineage-graph/lineage-graph"

export function LineageGraphDefaultPreview() {
  return (
    <LineageGraph
      className="border border-[#ebebeb]"
      height="28rem"
      defaultSelectedId="CUSTOMER_MASTER"
    />
  )
}

export function LineageGraphSelectedPreview() {
  const [selected, setSelected] = React.useState<LineageAssetNode>()

  return (
    <div className="flex w-full flex-col gap-3">
      <LineageGraph
        className="border border-[#ebebeb]"
        height="26rem"
        selectedId={selected?.id ?? "CUSTOMER_360"}
        onSelectChange={setSelected}
        showMiniMap
      />
      <p className="text-muted-foreground text-sm">
        Selected: {selected?.data.label ?? "CUSTOMER_360"}
        {selected?.data.kind ? ` · ${selected.data.kind}` : ""}
      </p>
    </div>
  )
}

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

function mapLineage(nodes: LineageApiNode[], links: LineageApiEdge[]) {
  const graphNodes: LineageAssetNode[] = nodes.map((n) => ({
    id: n.id,
    type: "asset",
    position: { x: n.x, y: n.y },
    data: {
      label: n.name,
      kind: n.kind,
      verified: n.verified,
    },
  }))

  const graphEdges: Edge[] = links.map((link) => ({
    id: `e-${link.from}-${link.to}`,
    source: link.from,
    target: link.to,
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16 },
  }))

  return { nodes: graphNodes, edges: graphEdges }
}

export function LineageGraphDataDrivenPreview() {
  const { nodes, edges } = React.useMemo(
    () => mapLineage(apiNodes, apiEdges),
    []
  )

  return (
    <LineageGraph
      nodes={nodes}
      edges={edges}
      className="border border-[#ebebeb]"
      height="22rem"
      defaultSelectedId="stg_orders"
    />
  )
}

export { defaultLineageNodes, defaultLineageEdges }
