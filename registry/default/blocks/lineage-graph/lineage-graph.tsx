"use client"

import * as React from "react"
import { ShieldCheckIcon } from "lucide-react"
import {
  type Edge,
  type Node,
  type NodeProps,
  MarkerType,
  Position,
} from "@xyflow/react"

import { cn } from "@/lib/utils"
import {
  FlowContainer,
  Handle,
  useEdgesState,
  useNodesState,
} from "@/registry/default/ui/flow"

export type LineageAssetKind = "seed" | "input" | "output" | "model" | "metric"

export type LineageAssetData = {
  label: string
  kind: LineageAssetKind
  verified?: boolean
  subtitle?: string
}

export type LineageAssetNode = Node<LineageAssetData, "asset">

export type LineageGraphProps = {
  nodes?: LineageAssetNode[]
  edges?: Edge[]
  selectedId?: string
  defaultSelectedId?: string
  onSelectChange?: (node: LineageAssetNode | undefined) => void
  height?: number | string
  showMiniMap?: boolean
  className?: string
}

const KIND_LABEL: Record<LineageAssetKind, string> = {
  seed: "Seed",
  input: "Input",
  output: "Output",
  model: "Model",
  metric: "Metric",
}

function AssetNode({ data, selected }: NodeProps<LineageAssetNode>) {
  return (
    <div
      className={cn(
        "relative min-w-[11rem] max-w-[14rem] rounded-lg border bg-white px-3 py-2.5 text-start shadow-none transition-colors dark:bg-card",
        selected
          ? "border-transparent bg-teal-bg-2 ring-1 ring-dark-teal/30"
          : "border-[#ebebeb] hover:border-dark-teal/40 dark:border-border"
      )}
    >
      {selected ? (
        <span
          aria-hidden
          className="absolute start-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-dark-teal"
        />
      ) : null}

      <Handle
        type="target"
        position={Position.Left}
        className="!size-2.5 !border-border !bg-background"
      />

      <div className="flex items-start justify-between gap-2 ps-1">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-medium tracking-wide text-[#8c8c8c] uppercase">
            {KIND_LABEL[data.kind]}
          </p>
          <p className="mt-0.5 truncate text-[13px] leading-5 font-medium text-[#242422] dark:text-foreground">
            {data.label}
          </p>
          {data.subtitle ? (
            <p className="mt-0.5 truncate text-[11px] text-[#8c8c8c]">
              {data.subtitle}
            </p>
          ) : null}
        </div>
        {data.verified ? (
          <ShieldCheckIcon
            aria-label="Verified"
            className="mt-0.5 size-4 shrink-0 text-dark-teal"
            strokeWidth={1.75}
          />
        ) : null}
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="!size-2.5 !border-border !bg-background"
      />
    </div>
  )
}

const nodeTypes = { asset: AssetNode }

/** Default DataOS-style lineage sample (seeds → inputs → outputs → metrics). */
export const defaultLineageNodes: LineageAssetNode[] = [
  {
    id: "SEED_REGIONS",
    type: "asset",
    position: { x: 0, y: 40 },
    data: { label: "SEED_REGIONS", kind: "seed", verified: true },
  },
  {
    id: "SEED_CHANNELS",
    type: "asset",
    position: { x: 0, y: 140 },
    data: { label: "SEED_CHANNELS", kind: "seed", verified: true },
  },
  {
    id: "CUSTOMER_MASTER",
    type: "asset",
    position: { x: 260, y: 40 },
    data: {
      label: "CUSTOMER_MASTER",
      kind: "input",
      verified: true,
      subtitle: "CRM profiles",
    },
  },
  {
    id: "WEB_CLICKSTREAM",
    type: "asset",
    position: { x: 260, y: 160 },
    data: {
      label: "WEB_CLICKSTREAM",
      kind: "input",
      subtitle: "Stream events",
    },
  },
  {
    id: "CUSTOMER_360",
    type: "asset",
    position: { x: 540, y: 40 },
    data: {
      label: "CUSTOMER_360",
      kind: "output",
      verified: true,
      subtitle: "Customer mart",
    },
  },
  {
    id: "SEGMENT_SCORES",
    type: "asset",
    position: { x: 540, y: 160 },
    data: { label: "SEGMENT_SCORES", kind: "output" },
  },
  {
    id: "SIGNUP_RATE",
    type: "asset",
    position: { x: 820, y: 100 },
    data: {
      label: "SIGNUP_RATE",
      kind: "metric",
      verified: true,
      subtitle: "Growth funnel",
    },
  },
]

export const defaultLineageEdges: Edge[] = [
  {
    id: "e-regions-master",
    source: "SEED_REGIONS",
    target: "CUSTOMER_MASTER",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16 },
  },
  {
    id: "e-channels-click",
    source: "SEED_CHANNELS",
    target: "WEB_CLICKSTREAM",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16 },
  },
  {
    id: "e-master-360",
    source: "CUSTOMER_MASTER",
    target: "CUSTOMER_360",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16 },
  },
  {
    id: "e-click-scores",
    source: "WEB_CLICKSTREAM",
    target: "SEGMENT_SCORES",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16 },
  },
  {
    id: "e-360-signup",
    source: "CUSTOMER_360",
    target: "SIGNUP_RATE",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16 },
  },
  {
    id: "e-scores-signup",
    source: "SEGMENT_SCORES",
    target: "SIGNUP_RATE",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16 },
  },
]

function LineageGraph({
  nodes: nodesProp,
  edges: edgesProp,
  selectedId: selectedIdProp,
  defaultSelectedId = "CUSTOMER_MASTER",
  onSelectChange,
  height = "28rem",
  showMiniMap = false,
  className,
}: LineageGraphProps) {
  const initialNodes = nodesProp ?? defaultLineageNodes
  const initialEdges = edgesProp ?? defaultLineageEdges

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, , onEdgesChange] = useEdgesState(initialEdges)

  const [uncontrolledSelectedId, setUncontrolledSelectedId] = React.useState(
    defaultSelectedId
  )
  const selectedId = selectedIdProp ?? uncontrolledSelectedId

  React.useEffect(() => {
    if (nodesProp) setNodes(nodesProp)
  }, [nodesProp, setNodes])

  React.useEffect(() => {
    setNodes((prev) =>
      prev.map((node) => ({
        ...node,
        selected: node.id === selectedId,
      }))
    )
  }, [selectedId, setNodes])

  const handleNodeClick = React.useCallback(
    (_event: React.MouseEvent, node: Node) => {
      const asset = node as LineageAssetNode
      if (selectedIdProp === undefined) setUncontrolledSelectedId(asset.id)
      onSelectChange?.(asset)
    },
    [onSelectChange, selectedIdProp]
  )

  const handlePaneClick = React.useCallback(() => {
    if (selectedIdProp === undefined) setUncontrolledSelectedId("")
    onSelectChange?.(undefined)
  }, [onSelectChange, selectedIdProp])

  return (
    <FlowContainer<LineageAssetNode>
      className={cn("bg-white dark:bg-background", className)}
      height={height}
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onNodeClick={handleNodeClick}
      onPaneClick={handlePaneClick}
      nodesConnectable={false}
      nodesDraggable
      elementsSelectable
      panOnScroll
      showBackground
      showControls
      showMiniMap={showMiniMap}
      fitView
      minZoom={0.35}
      maxZoom={1.5}
      defaultEdgeOptions={{
        type: "smoothstep",
        style: { stroke: "#bfbfbf", strokeWidth: 1.5 },
      }}
    />
  )
}

export { LineageGraph, AssetNode }
