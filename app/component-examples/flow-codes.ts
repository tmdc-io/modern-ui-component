export const flowCodes = {
  install: `npx shadcn@latest add @modernui/flow
npx shadcn@latest add tmdc-io/modern-ui-component/flow`,

  default: `"use client"

import {
  FlowContainer,
  useEdgesState,
  useNodesState,
  type Edge,
  type Node,
} from "@/components/ui/flow"

/**
 * Default Flow
 * ------------
 * FlowContainer wraps @xyflow/react with a sized parent, themed chrome,
 * and ModernUI tokens. Pass nodes/edges and change handlers like React Flow.
 *
 * Theme CSS for xyflow is shipped via the ModernUI theme (globals.css).
 */
const initialNodes: Node[] = [
  { id: "n1", position: { x: 40, y: 80 }, data: { label: "Source" } },
  { id: "n2", position: { x: 320, y: 80 }, data: { label: "Target" } },
]

const initialEdges: Edge[] = [
  { id: "e1-2", source: "n1", target: "n2", type: "smoothstep" },
]

export function FlowDemo() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, , onEdgesChange] = useEdgesState(initialEdges)

  return (
    <FlowContainer
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      height="20rem"
      showControls={false}
      fitView
    />
  )
}
`,

  chrome: `"use client"

import * as React from "react"

import {
  FlowContainer,
  addEdge,
  useEdgesState,
  useNodesState,
  type Edge,
  type Node,
  type OnConnect,
} from "@/components/ui/flow"

const initialNodes: Node[] = [
  { id: "n1", position: { x: 40, y: 80 }, data: { label: "Source" } },
  { id: "n2", position: { x: 320, y: 80 }, data: { label: "Target" } },
]

const initialEdges: Edge[] = [
  { id: "e1-2", source: "n1", target: "n2", type: "smoothstep" },
]

/**
 * Chrome
 * ------
 * Enable Background, Controls, and MiniMap. onConnect lets users draw edges.
 */
export function FlowChrome() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect: OnConnect = React.useCallback(
    (connection) =>
      setEdges((eds) => addEdge({ ...connection, type: "smoothstep" }, eds)),
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
`,

  customNode: `"use client"

import { Handle, Position, type Node, type NodeProps } from "@xyflow/react"

import { cn } from "@/lib/utils"
import {
  FlowContainer,
  useEdgesState,
  useNodesState,
  type Edge,
} from "@/components/ui/flow"

type CardNodeData = {
  label: string
  description?: string
}

function CardNode({ data, selected }: NodeProps<Node<CardNodeData>>) {
  return (
    <div
      className={cn(
        "min-w-[10rem] rounded-lg border bg-card px-3 py-2.5",
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

const nodeTypes = { card: CardNode }

const nodes: Node[] = [
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

const edges: Edge[] = [
  { id: "c1", source: "ingest", target: "transform", type: "smoothstep" },
  { id: "c2", source: "transform", target: "serve", type: "smoothstep" },
]

/**
 * Custom node
 * -----------
 * Register nodeTypes and set type on each node. Handles define connection ports.
 * For DataOS lineage cards, install @modernui/lineage-graph.
 */
export function FlowCustomNodes() {
  const [graphNodes, , onNodesChange] = useNodesState(nodes)
  const [graphEdges, , onEdgesChange] = useEdgesState(edges)

  return (
    <FlowContainer
      nodes={graphNodes}
      edges={graphEdges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      height="20rem"
      showControls
      fitView
    />
  )
}
`,
}
