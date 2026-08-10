"use client"

import * as React from "react"
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
  type BackgroundProps,
  type ControlProps,
  type DefaultEdgeOptions,
  type MiniMapProps,
  type Node,
  type ReactFlowProps,
} from "@xyflow/react"

import { cn } from "@/lib/utils"

const DEFAULT_EDGE_OPTIONS: DefaultEdgeOptions = {
  type: "smoothstep",
  animated: false,
  style: { strokeWidth: 1.5 },
}

export type FlowContainerProps<NodeType extends Node = Node> = Omit<
  ReactFlowProps<NodeType>,
  "height" | "children"
> & {
  children?: React.ReactNode
  className?: string
  /** Outer frame height. React Flow requires a sized parent. */
  height?: number | string
  showBackground?: boolean
  showControls?: boolean
  showMiniMap?: boolean
  backgroundProps?: BackgroundProps
  controlsProps?: ControlProps
  miniMapProps?: MiniMapProps
  /** Wrap in ReactFlowProvider (default true). Set false if a parent already provides one. */
  withProvider?: boolean
}

function FlowCanvas<NodeType extends Node = Node>({
  children,
  className,
  height = "24rem",
  showBackground = true,
  showControls = true,
  showMiniMap = false,
  backgroundProps,
  controlsProps,
  miniMapProps,
  defaultEdgeOptions,
  fitView = true,
  proOptions,
  ...props
}: FlowContainerProps<NodeType>) {
  return (
    <div
      data-slot="flow"
      className={cn(
        "relative w-full overflow-hidden rounded-lg border border-border bg-card",
        className
      )}
      style={{ height }}
    >
      <ReactFlow<NodeType>
        fitView={fitView}
        defaultEdgeOptions={defaultEdgeOptions ?? DEFAULT_EDGE_OPTIONS}
        proOptions={proOptions ?? { hideAttribution: true }}
        className="bg-card"
        {...props}
      >
        {showBackground ? (
          <Background gap={16} size={1} color="var(--border)" {...backgroundProps} />
        ) : null}
        {showControls ? (
          <Controls showInteractive={false} {...controlsProps} />
        ) : null}
        {showMiniMap ? (
          <MiniMap pannable zoomable {...miniMapProps} />
        ) : null}
        {children}
      </ReactFlow>
    </div>
  )
}

function FlowContainer<NodeType extends Node = Node>({
  withProvider = true,
  ...props
}: FlowContainerProps<NodeType>) {
  if (!withProvider) {
    return <FlowCanvas<NodeType> {...props} />
  }

  return (
    <ReactFlowProvider>
      <FlowCanvas<NodeType> {...props} />
    </ReactFlowProvider>
  )
}

export {
  FlowContainer,
  // Re-exports for consumer convenience
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
}

export {
  Handle,
  Panel,
  Position,
  MarkerType,
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  getSmoothStepPath,
  getStraightPath,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  useEdgesState,
  useNodesState,
  useReactFlow,
  useUpdateNodeInternals,
} from "@xyflow/react"

export type {
  Node,
  Edge,
  NodeProps,
  EdgeProps,
  Connection,
  OnConnect,
  OnNodesChange,
  OnEdgesChange,
  NodeTypes,
  EdgeTypes,
  DefaultEdgeOptions,
  ReactFlowInstance,
  BackgroundProps,
  ControlProps,
  MiniMapProps,
} from "@xyflow/react"
