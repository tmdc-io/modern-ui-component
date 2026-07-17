"use client"

import * as React from "react"
import { Scatter, ScatterChart, XAxis, YAxis } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/default/ui/chart"
import {
  useTranslation,
  type Translations,
} from "@/hooks/use-translation"
import { cn } from "@/lib/utils"

export type ModelHealthStatus = "healthy" | "quality" | "failed" | "none"

export type ModelHealthCell = {
  runId: string
  status: ModelHealthStatus
}

export type ModelHealthRun = {
  id: string
  label: string
  health: number
}

export type ModelHealthModel = {
  id: string
  name: string
  health: number
  cells: ModelHealthCell[]
}

export type ModelHealthRunsProps = {
  title?: string
  runs?: ModelHealthRun[]
  models?: ModelHealthModel[]
  emptyMessage?: string
  className?: string
}

export const modelHealthRunsMessages = {
  en: {
    dir: "ltr",
    values: {
      title: "Model health across runs",
      healthy: "Healthy",
      qualityIssues: "Quality issues",
      failed: "Failed",
      notEvaluated: "Not evaluated",
      models: "Models",
      health: "Health",
      noData: "No model health data yet.",
    },
  },
  es: {
    dir: "ltr",
    values: {
      title: "Estado del modelo en todas las ejecuciones",
      healthy: "Saludable",
      qualityIssues: "Problemas de calidad",
      failed: "Fallido",
      notEvaluated: "No evaluado",
      models: "Modelos",
      health: "Salud",
      noData: "Aún no hay datos de salud del modelo.",
    },
  },
} satisfies Translations

/** Figma heatmap palette — adapts via --model-health-* theme tokens */
const STATUS_COLOR: Record<ModelHealthStatus, string> = {
  healthy: "var(--model-health-healthy)",
  quality: "var(--model-health-quality)",
  failed: "var(--model-health-failed)",
  none: "var(--model-health-none)",
}

const CELL_HEIGHT = 32
const CELL_RADIUS = 8
const COLUMN_GAP = 8
const ROW_GAP = 8
const MIN_CELL_WIDTH = 40
const TOP_HEADER_HEIGHT = 52
const BOTTOM_MARGIN = 8
const LEFT_MARGIN = 188
const RIGHT_MARGIN = 56

const chartConfig = {
  healthy: { label: "Healthy", color: STATUS_COLOR.healthy },
  quality: { label: "Quality issues", color: STATUS_COLOR.quality },
  failed: { label: "Failed", color: STATUS_COLOR.failed },
  none: { label: "Not evaluated", color: STATUS_COLOR.none },
} satisfies ChartConfig

const defaultRuns: ModelHealthRun[] = [
  { id: "r1", label: "R1", health: 100 },
  { id: "r2", label: "R2", health: 50 },
  { id: "r3", label: "R3", health: 25 },
  { id: "r4", label: "R4", health: 80 },
  { id: "r5", label: "R5", health: 100 },
  { id: "r6", label: "R6", health: 50 },
  { id: "r7", label: "R7", health: 60 },
  { id: "r8", label: "R8", health: 40 },
  { id: "r9", label: "R9", health: 100 },
  { id: "r10", label: "R10", health: 75 },
]

const defaultModels: ModelHealthModel[] = [
  {
    id: "m1",
    name: "customer_churn_predi...",
    health: 72,
    cells: [
      { runId: "r1", status: "none" },
      { runId: "r2", status: "quality" },
      { runId: "r3", status: "none" },
      { runId: "r4", status: "healthy" },
      { runId: "r5", status: "none" },
      { runId: "r6", status: "none" },
      { runId: "r7", status: "none" },
      { runId: "r8", status: "none" },
      { runId: "r9", status: "none" },
      { runId: "r10", status: "none" },
    ],
  },
  {
    id: "m2",
    name: "sales_forecasting",
    health: 85,
    cells: [
      { runId: "r1", status: "healthy" },
      { runId: "r2", status: "none" },
      { runId: "r3", status: "failed" },
      { runId: "r4", status: "healthy" },
      { runId: "r5", status: "none" },
      { runId: "r6", status: "healthy" },
      { runId: "r7", status: "healthy" },
      { runId: "r8", status: "none" },
      { runId: "r9", status: "healthy" },
      { runId: "r10", status: "healthy" },
    ],
  },
  {
    id: "m3",
    name: "inventory_optimizati...",
    health: 90,
    cells: [
      { runId: "r1", status: "none" },
      { runId: "r2", status: "healthy" },
      { runId: "r3", status: "none" },
      { runId: "r4", status: "none" },
      { runId: "r5", status: "none" },
      { runId: "r6", status: "quality" },
      { runId: "r7", status: "failed" },
      { runId: "r8", status: "failed" },
      { runId: "r9", status: "none" },
      { runId: "r10", status: "none" },
    ],
  },
  {
    id: "m4",
    name: "fraud_detection",
    health: 65,
    cells: [
      { runId: "r1", status: "none" },
      { runId: "r2", status: "healthy" },
      { runId: "r3", status: "none" },
      { runId: "r4", status: "none" },
      { runId: "r5", status: "healthy" },
      { runId: "r6", status: "none" },
      { runId: "r7", status: "none" },
      { runId: "r8", status: "failed" },
      { runId: "r9", status: "none" },
      { runId: "r10", status: "none" },
    ],
  },
  {
    id: "m5",
    name: "credit_risk_scoring",
    health: 78,
    cells: [
      { runId: "r1", status: "healthy" },
      { runId: "r2", status: "none" },
      { runId: "r3", status: "failed" },
      { runId: "r4", status: "healthy" },
      { runId: "r5", status: "healthy" },
      { runId: "r6", status: "none" },
      { runId: "r7", status: "healthy" },
      { runId: "r8", status: "quality" },
      { runId: "r9", status: "none" },
      { runId: "r10", status: "none" },
    ],
  },
  {
    id: "m6",
    name: "product_recommendati...",
    health: 82,
    cells: [
      { runId: "r1", status: "none" },
      { runId: "r2", status: "none" },
      { runId: "r3", status: "failed" },
      { runId: "r4", status: "none" },
      { runId: "r5", status: "none" },
      { runId: "r6", status: "none" },
      { runId: "r7", status: "quality" },
      { runId: "r8", status: "none" },
      { runId: "r9", status: "none" },
      { runId: "r10", status: "none" },
    ],
  },
  {
    id: "m7",
    name: "sentiment_analysis",
    health: 95,
    cells: [
      { runId: "r1", status: "none" },
      { runId: "r2", status: "none" },
      { runId: "r3", status: "none" },
      { runId: "r4", status: "none" },
      { runId: "r5", status: "none" },
      { runId: "r6", status: "none" },
      { runId: "r7", status: "none" },
      { runId: "r8", status: "none" },
      { runId: "r9", status: "none" },
      { runId: "r10", status: "quality" },
    ],
  },
  {
    id: "m8",
    name: "demand_prediction",
    health: 58,
    cells: [
      { runId: "r1", status: "healthy" },
      { runId: "r2", status: "none" },
      { runId: "r3", status: "none" },
      { runId: "r4", status: "quality" },
      { runId: "r5", status: "none" },
      { runId: "r6", status: "none" },
      { runId: "r7", status: "none" },
      { runId: "r8", status: "none" },
      { runId: "r9", status: "none" },
      { runId: "r10", status: "none" },
    ],
  },
  {
    id: "m9",
    name: "supply_chain_optimiz...",
    health: 88,
    cells: [
      { runId: "r1", status: "none" },
      { runId: "r2", status: "none" },
      { runId: "r3", status: "healthy" },
      { runId: "r4", status: "healthy" },
      { runId: "r5", status: "healthy" },
      { runId: "r6", status: "none" },
      { runId: "r7", status: "healthy" },
      { runId: "r8", status: "none" },
      { runId: "r9", status: "healthy" },
      { runId: "r10", status: "none" },
    ],
  },
  {
    id: "m10",
    name: "marketing_attribution",
    health: 73,
    cells: [
      { runId: "r1", status: "none" },
      { runId: "r2", status: "quality" },
      { runId: "r3", status: "none" },
      { runId: "r4", status: "none" },
      { runId: "r5", status: "healthy" },
      { runId: "r6", status: "none" },
      { runId: "r7", status: "none" },
      { runId: "r8", status: "failed" },
      { runId: "r9", status: "none" },
      { runId: "r10", status: "none" },
    ],
  },
]

type HeatmapPoint = {
  runIndex: number
  modelIndex: number
  status: ModelHealthStatus
  runLabel: string
  modelName: string
  modelHealth: number
}

function cellStatus(model: ModelHealthModel, runId: string): ModelHealthStatus {
  return model.cells.find((cell) => cell.runId === runId)?.status ?? "none"
}

function ModelHealthLegend() {
  const { t } = useTranslation(modelHealthRunsMessages)
  const items: Array<{ label: string; swatchClass: string }> = [
    { label: t.healthy, swatchClass: "bg-model-health-healthy" },
    { label: t.qualityIssues, swatchClass: "bg-model-health-quality" },
    { label: t.failed, swatchClass: "bg-model-health-failed" },
    { label: t.notEvaluated, swatchClass: "bg-model-health-none" },
  ]

  return (
    <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-1.5">
          <span className={cn("size-3 shrink-0 rounded-[2px]", item.swatchClass)} />
          <span className="text-muted-foreground text-xs leading-none">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

function RunHeaderTick({
  x = 0,
  y = 0,
  payload,
  runs,
  cellWidth,
}: {
  x?: number
  y?: number
  payload?: { value: number }
  runs: ModelHealthRun[]
  cellWidth: number
}) {
  const run = runs[payload?.value ?? -1]
  if (!run) return null

  const barWidth = cellWidth

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        y={-38}
        textAnchor="middle"
        className="fill-foreground text-sm font-semibold"
      >
        {run.label}
      </text>
      <rect
        x={-barWidth / 2}
        y={-26}
        width={barWidth}
        height={4}
        rx={2}
        fill={STATUS_COLOR.none}
      />
      <rect
        x={-barWidth / 2}
        y={-26}
        width={(barWidth * run.health) / 100}
        height={4}
        rx={2}
        fill={STATUS_COLOR.healthy}
      />
      <text y={-10} textAnchor="middle" className="fill-muted-foreground text-xs">
        {run.health}%
      </text>
    </g>
  )
}

function ModelNameTick({
  x = 0,
  y = 0,
  payload,
  models,
}: {
  x?: number
  y?: number
  payload?: { value: number }
  models: ModelHealthModel[]
}) {
  const model = models[payload?.value ?? -1]
  if (!model) return null

  return (
    <text
      x={x - 10}
      y={y + 4}
      textAnchor="end"
      className="fill-foreground text-[15px]"
    >
      <title>{model.name}</title>
      {model.name}
    </text>
  )
}

function HeatmapCellShape(props: {
  cx?: number
  cy?: number
  payload?: HeatmapPoint
  cellWidth: number
  cellHeight: number
}) {
  const { t } = useTranslation(modelHealthRunsMessages)
  const { cx = 0, cy = 0, payload, cellWidth, cellHeight } = props
  const color = STATUS_COLOR[payload?.status ?? "none"]
  const statusLabel = payload
    ? {
        healthy: t.healthy,
        quality: t.qualityIssues,
        failed: t.failed,
        none: t.notEvaluated,
      }[payload.status]
    : undefined

  return (
    <rect
      x={cx - cellWidth / 2}
      y={cy - cellHeight / 2}
      width={cellWidth}
      height={cellHeight}
      rx={CELL_RADIUS}
      ry={CELL_RADIUS}
      fill={color}
      focusable="false"
      style={{ outline: "none" }}
      aria-label={
        payload
          ? `${payload.modelName} ${payload.runLabel}: ${statusLabel}`
          : undefined
      }
    />
  )
}

export function ModelHealthRuns({
  title,
  runs = defaultRuns,
  models = defaultModels,
  emptyMessage,
  className,
}: ModelHealthRunsProps) {
  const { t } = useTranslation(modelHealthRunsMessages)
  const chartRef = React.useRef<HTMLDivElement>(null)
  const [plotWidth, setPlotWidth] = React.useState(656)
  const resolvedTitle = title ?? t.title
  const statusLabel = React.useMemo(
    () => ({
      healthy: t.healthy,
      quality: t.qualityIssues,
      failed: t.failed,
      none: t.notEvaluated,
    }),
    [t]
  )

  React.useEffect(() => {
    const node = chartRef.current
    if (!node) return

    const updateWidth = () => {
      setPlotWidth(
        Math.max(0, node.getBoundingClientRect().width - LEFT_MARGIN - RIGHT_MARGIN)
      )
    }

    updateWidth()
    const observer = new ResizeObserver(updateWidth)
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const isEmpty = runs.length === 0 || models.length === 0

  const cellWidth = Math.max(
    MIN_CELL_WIDTH,
    isEmpty ? MIN_CELL_WIDTH : plotWidth / runs.length - COLUMN_GAP
  )
  const rowHeight = CELL_HEIGHT + ROW_GAP

  const heatmapData = React.useMemo<HeatmapPoint[]>(
    () =>
      models.flatMap((model, modelIndex) =>
        runs.map((run, runIndex) => ({
          runIndex,
          modelIndex,
          status: cellStatus(model, run.id),
          runLabel: run.label,
          modelName: model.name,
          modelHealth: model.health,
        }))
      ),
    [models, runs]
  )

  const modelTicks = React.useMemo(
    () => models.map((_, index) => index),
    [models]
  )
  const runTicks = React.useMemo(() => runs.map((_, index) => index), [runs])

  const chartHeight =
    TOP_HEADER_HEIGHT + models.length * rowHeight + BOTTOM_MARGIN

  if (isEmpty) {
    return (
      <section className={cn("bg-card w-full", className)}>
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="text-muted-foreground text-[11px] font-semibold tracking-[0.16em] uppercase">
            {resolvedTitle}
          </h3>
          <ModelHealthLegend />
        </div>
        <p className="text-muted-foreground flex h-[12rem] items-center justify-center text-sm">
          {emptyMessage ?? t.noData}
        </p>
      </section>
    )
  }

  return (
    <section className={cn("bg-card w-full overflow-x-auto", className)}>
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-muted-foreground text-[11px] font-semibold tracking-[0.16em] uppercase">
          {resolvedTitle}
        </h3>
        <ModelHealthLegend />
      </div>

      <div className="relative min-w-[52rem]" ref={chartRef}>
        <div
          className="pointer-events-none absolute right-0 flex flex-col items-center text-center"
          style={{ width: RIGHT_MARGIN }}
        >
          <span
            className="text-muted-foreground text-xs leading-none"
            style={{ marginTop: TOP_HEADER_HEIGHT - 16 }}
          >
            {t.health}
          </span>
          <div
            className="flex w-full flex-col items-center"
            style={{
              marginTop: 4,
              height: models.length * rowHeight,
            }}
          >
            {models.map((model) => (
              <div
                key={model.id}
                className="text-muted-foreground flex w-full items-center justify-center text-xs leading-none"
                style={{ height: rowHeight }}
              >
                {model.health}%
              </div>
            ))}
          </div>
        </div>

        <ChartContainer
          config={chartConfig}
          className="aspect-auto w-full [&_.recharts-surface]:overflow-visible [&_.recharts-tooltip-cursor]:hidden"
          style={{ height: chartHeight }}
          initialDimension={{ width: 900, height: chartHeight }}
        >
          <ScatterChart
            accessibilityLayer={false}
            tabIndex={-1}
            margin={{
              top: 0,
              right: RIGHT_MARGIN,
              left: 0,
              bottom: BOTTOM_MARGIN,
            }}
          >
            <XAxis
              type="number"
              dataKey="runIndex"
              domain={[-0.5, runs.length - 0.5]}
              ticks={runTicks}
              tick={<RunHeaderTick runs={runs} cellWidth={cellWidth} />}
              axisLine={false}
              tickLine={false}
              orientation="top"
              height={TOP_HEADER_HEIGHT}
            />
            <YAxis
              yAxisId="models"
              type="number"
              dataKey="modelIndex"
              domain={[-0.5, models.length - 0.5]}
              ticks={modelTicks}
              tick={<ModelNameTick models={models} />}
              axisLine={false}
              tickLine={false}
              width={LEFT_MARGIN}
              reversed
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideIndicator
                  labelFormatter={(_, payload) => {
                    const point = payload?.[0]?.payload as HeatmapPoint | undefined
                    return point ? `${point.modelName} · ${point.runLabel}` : ""
                  }}
                  formatter={(_, __, item) => {
                    const point = item.payload as HeatmapPoint
                    return statusLabel[point.status]
                  }}
                />
              }
            />
            <Scatter
              yAxisId="models"
              data={heatmapData}
              shape={(props) => (
                <HeatmapCellShape
                  {...props}
                  payload={props.payload}
                  cellWidth={cellWidth}
                  cellHeight={CELL_HEIGHT}
                />
              )}
              isAnimationActive={false}
            />
          </ScatterChart>
        </ChartContainer>
      </div>
    </section>
  )
}
