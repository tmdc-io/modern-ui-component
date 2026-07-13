"use client"

import { TrendingUp } from "lucide-react"
import {
  CartesianGrid,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/default/ui/chart"

const chartData = [
  { latency: 12, throughput: 220, size: 120 },
  { latency: 18, throughput: 180, size: 200 },
  { latency: 24, throughput: 260, size: 160 },
  { latency: 30, throughput: 210, size: 240 },
  { latency: 36, throughput: 290, size: 180 },
  { latency: 42, throughput: 250, size: 220 },
  { latency: 48, throughput: 320, size: 260 },
  { latency: 54, throughput: 280, size: 300 },
]

const chartConfig = {
  latency: {
    label: "Latency",
    color: "var(--chart-1)",
  },
  throughput: {
    label: "Throughput",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartScatterDefault() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Scatter Chart</CardTitle>
        <CardDescription>Latency vs throughput by workload size</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ScatterChart accessibilityLayer data={chartData}>
            <CartesianGrid />
            <XAxis
              type="number"
              dataKey="latency"
              name="Latency"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              type="number"
              dataKey="throughput"
              name="Throughput"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ZAxis type="number" dataKey="size" range={[80, 400]} />
            <ChartTooltip
              cursor={{ strokeDasharray: "3 3" }}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Scatter
              dataKey="throughput"
              fill="var(--color-latency)"
            />
          </ScatterChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Correlation visible across workloads <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Bubble size encodes a third metric via ZAxis
        </div>
      </CardFooter>
    </Card>
  )
}
