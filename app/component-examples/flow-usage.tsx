"use client"

import * as React from "react"
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react"

import { cn } from "@/lib/utils"
import {
  FlowContainer,
  addEdge,
  useEdgesState,
  useNodesState,
  type Edge,
  type OnConnect,
} from "@/registry/default/ui/flow"

const defaultNodes: Node[] = [
  {
    id: "n1",
    position: { x: 40, y: 80 },
    data: { label: "Source" },
  },
  {
    id: "n2",
    position: { x: 320, y: 80 },
    data: { label: "Target" },
  },
]

const defaultEdges: Edge[] = [
  { id: "e1-2", source: "n1", target: "n2", type: "smoothstep" },
]

export function FlowDefaultPreview() {
  const [nodes, , onNodesChange] = useNodesState(defaultNodes)
  const [edges, , onEdgesChange] = useEdgesState(defaultEdges)

  return (
    <FlowContainer
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      height="20rem"
      showControls={false}
      showMiniMap={false}
      fitView
    />
  )
}

export function FlowChromePreview() {
  const [nodes, , onNodesChange] = useNodesState(defaultNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(defaultEdges)

  const onConnect: OnConnect = React.useCallback(
    (connection) => setEdges((eds) => addEdge({ ...connection, type: "smoothstep" }, eds)),
    [setEdges]
  )

  return (
    <FlowContainer
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      height="22rem"
      showBackground
      showControls
      showMiniMap
      fitView
    />
  )
}

type CardNodeData = {
  label: string
  description?: string
}

function CardNode({ data, selected }: NodeProps<Node<CardNodeData>>) {
  return (
    <div
      className={cn(
        "min-w-[10rem] rounded-lg border bg-card px-3 py-2.5 shadow-none",
        selected ? "border-dark-teal ring-1 ring-dark-teal/25" : "border-border"
      )}
    >
      <Handle type="target" position={Position.Left} className="!size-2.5" />
      <p className="text-[13px] font-medium">{data.label}</p>
      {data.description ? (
        <p className="text-muted-foreground mt-0.5 text-[11px]">
          {data.description}
        </p>
      ) : null}
      <Handle type="source" position={Position.Right} className="!size-2.5" />
    </div>
  )
}

const cardNodeTypes = { card: CardNode }

const customNodes: Node[] = [
  {
    id: "ingest",
    type: "card",
    position: { x: 20, y: 60 },
    data: { label: "Ingest", description: "Landing zone" },
  },
  {
    id: "transform",
    type: "card",
    position: { x: 260, y: 60 },
    data: { label: "Transform", description: "dbt models" },
  },
  {
    id: "serve",
    type: "card",
    position: { x: 500, y: 60 },
    data: { label: "Serve", description: "Marts / APIs" },
  },
]

const customEdges: Edge[] = [
  { id: "c1", source: "ingest", target: "transform", type: "smoothstep" },
  { id: "c2", source: "transform", target: "serve", type: "smoothstep" },
]

export function FlowCustomNodePreview() {
  const [nodes, , onNodesChange] = useNodesState(customNodes)
  const [edges, , onEdgesChange] = useEdgesState(customEdges)

  return (
    <FlowContainer
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={cardNodeTypes}
      height="20rem"
      showControls
      fitView
    />
  )
}
