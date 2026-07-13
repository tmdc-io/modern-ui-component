"use client"

import * as React from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ReferenceArea,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/default/ui/chart"
import { cn } from "@/lib/utils"

export type RunDurationStatus = "normal" | "anomaly" | "selected"

export type RunDurationRun = {
  id: string
  date: string
  time: string
  duration: number
  durationLabel: string
  status: RunDurationStatus
}

export type RunDurationProps = {
  title?: string
  runs?: RunDurationRun[]
  baseline?: number
  selectedId?: string
  defaultSelectedId?: string
  onSelectedChange?: (id: string) => void
  className?: string
}

const defaultRuns: RunDurationRun[] = [
  { id: "r1", date: "Mar 15, 2027", time: "11:42", duration: 29, durationLabel: "29m", status: "normal" },
  { id: "r2", date: "Sep 3, 2025", time: "17:30", duration: 20, durationLabel: "20m", status: "normal" },
  { id: "r3", date: "Jun 12, 2025", time: "09:15", duration: 95, durationLabel: "95m", status: "normal" },
  { id: "r4", date: "Feb 28, 2025", time: "14:50", duration: 21, durationLabel: "21m", status: "normal" },
  { id: "r5", date: "Dec 11, 2024", time: "22:05", duration: 94, durationLabel: "94m", status: "normal" },
  { id: "r6", date: "Oct 22, 2024", time: "06:40", duration: 72, durationLabel: "72m", status: "anomaly" },
  { id: "r7", date: "Aug 19, 2024", time: "13:22", duration: 47, durationLabel: "47m", status: "anomaly" },
  { id: "r8", date: "May 30, 2024", time: "19:18", duration: 84, durationLabel: "84m", status: "normal" },
  { id: "r9", date: "Mar 8, 2024", time: "08:55", duration: 38, durationLabel: "38m", status: "normal" },
  { id: "r10", date: "Jul 7, 2026", time: "16:34", duration: 78, durationLabel: "78m", status: "selected" },
]

const chartConfig = {
  duration: {
    label: "Duration",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

const statusFill: Record<RunDurationStatus, string> = {
  normal: "var(--run-duration-normal)",
  anomaly: "var(--run-duration-anomaly)",
  selected: "var(--run-duration-selected)",
}

const statusLabelClass: Record<RunDurationStatus, string> = {
  normal: "fill-[var(--run-duration-normal-label)]",
  anomaly: "fill-[var(--run-duration-anomaly-label)]",
  selected: "fill-[var(--run-duration-selected-label)]",
}

function RunDurationLegend() {
  const items = [
    { label: "Normal", swatchClass: "bg-run-duration-normal" },
    { label: "Anomaly", swatchClass: "bg-run-duration-anomaly" },
    { label: "Selected", swatchClass: "bg-run-duration-selected" },
    {
      label: "baseline",
      swatchClass:
        "h-0 w-4 border-t border-dashed border-muted-foreground/70 bg-transparent",
    },
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

function RunDurationTick({
  x,
  y,
  payload,
  runs,
}: {
  x?: number
  y?: number
  payload?: { value: string }
  runs: RunDurationRun[]
}) {
  const run = runs.find((item) => item.id === payload?.value)
  if (!run || x == null || y == null) return null

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={12}
        textAnchor="middle"
        className="fill-muted-foreground text-[10px]"
      >
        {run.date}
      </text>
      <text
        x={0}
        y={0}
        dy={24}
        textAnchor="middle"
        className="fill-muted-foreground text-[10px]"
      >
        {run.time}
      </text>
    </g>
  )
}

function DurationLabel(props: {
  x?: string | number
  y?: string | number
  width?: string | number
  value?: string | number
  index?: number
  runs: RunDurationRun[]
}) {
  const { x, y, width, value, index, runs } = props
  const run = index == null ? undefined : runs[index]
  if (x == null || y == null || !run) return null

  const xPos = typeof x === "number" ? x : Number(x)
  const yPos = typeof y === "number" ? y : Number(y)
  const barWidth = typeof width === "number" ? width : Number(width ?? 0)
  if (Number.isNaN(xPos) || Number.isNaN(yPos)) return null

  return (
    <text
      x={xPos + barWidth / 2}
      y={yPos - 8}
      textAnchor="middle"
      className={cn("text-xs font-medium", statusLabelClass[run.status])}
    >
      {value}
    </text>
  )
}

export function RunDuration({
  title = "Run duration",
  runs = defaultRuns,
  baseline = 56,
  selectedId,
  defaultSelectedId = "r10",
  onSelectedChange,
  className,
}: RunDurationProps) {
  const isControlled = selectedId !== undefined
  const [internalSelectedId, setInternalSelectedId] = React.useState(defaultSelectedId)
  const resolvedSelectedId = isControlled ? selectedId : internalSelectedId

  const resolvedRuns = runs.map((run) => ({
    ...run,
    status:
      run.id === resolvedSelectedId
        ? ("selected" as const)
        : run.status === "selected"
          ? ("normal" as const)
          : run.status,
  }))

  const selectedRun = resolvedRuns.find((run) => run.id === resolvedSelectedId)

  const handleSelect = (id: string) => {
    if (!isControlled) setInternalSelectedId(id)
    onSelectedChange?.(id)
  }

  return (
    <section className={cn("bg-card w-full", className)}>
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-muted-foreground text-[11px] font-semibold tracking-[0.16em] uppercase">
          {title}
        </h3>
        <RunDurationLegend />
      </div>

      <ChartContainer config={chartConfig} className="h-[18rem] w-full">
        <BarChart
          accessibilityLayer
          data={resolvedRuns}
          margin={{ top: 24, right: 8, left: 0, bottom: 28 }}
          barCategoryGap="22%"
        >
          <CartesianGrid vertical={false} strokeDasharray="4 4" className="stroke-border/70" />
          <XAxis
            dataKey="id"
            tickLine={false}
            axisLine={false}
            interval={0}
            tick={<RunDurationTick runs={resolvedRuns} />}
            height={48}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={28}
            domain={[0, 100]}
            ticks={[0, 20, 40, 60, 80, 100]}
            className="text-muted-foreground text-[11px]"
          />
          {selectedRun ? (
            <ReferenceArea
              x1={selectedRun.id}
              x2={selectedRun.id}
              fill="var(--run-duration-selection)"
              fillOpacity={0.12}
              strokeOpacity={0}
            />
          ) : null}
          <ReferenceLine
            y={baseline}
            stroke="var(--run-duration-baseline)"
            strokeDasharray="4 4"
            strokeOpacity={0.45}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                labelFormatter={(_, payload) => {
                  const run = payload?.[0]?.payload as RunDurationRun | undefined
                  return run ? `${run.date} ${run.time}` : ""
                }}
              />
            }
          />
          <Bar
            dataKey="duration"
            radius={[8, 8, 0, 0]}
            onClick={(_, index) => {
              const run = resolvedRuns[index]
              if (run) handleSelect(run.id)
            }}
          >
            <LabelList
              dataKey="durationLabel"
              content={(props) => (
                <DurationLabel
                  x={props.x}
                  y={props.y}
                  width={props.width}
                  value={
                    typeof props.value === "string" || typeof props.value === "number"
                      ? props.value
                      : undefined
                  }
                  index={props.index}
                  runs={resolvedRuns}
                />
              )}
            />
            {resolvedRuns.map((run) => (
              <Cell
                key={run.id}
                fill={statusFill[run.status]}
                className="cursor-pointer"
              />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </section>
  )
}
