"use client"

import { TrendingUp } from "lucide-react"
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/default/ui/chart"

const chartData = [
  { month: "Jan", revenue: 186, growth: 4.2 },
  { month: "Feb", revenue: 305, growth: 5.1 },
  { month: "Mar", revenue: 237, growth: 3.8 },
  { month: "Apr", revenue: 273, growth: 6.4 },
  { month: "May", revenue: 209, growth: 4.9 },
  { month: "Jun", revenue: 314, growth: 7.2 },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  growth: {
    label: "Growth %",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartComposedDefault() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Composed Chart</CardTitle>
        <CardDescription>Revenue bars with growth line overlay</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ComposedChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              yAxisId="left"
              tickLine={false}
              axisLine={false}
              width={32}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              width={32}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              yAxisId="left"
              dataKey="revenue"
              fill="var(--color-revenue)"
              radius={6}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="growth"
              stroke="var(--color-growth)"
              strokeWidth={2}
              dot={false}
            />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Growth accelerating in June <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Combine bars and lines on dual axes in one chart
        </div>
      </CardFooter>
    </Card>
  )
}
