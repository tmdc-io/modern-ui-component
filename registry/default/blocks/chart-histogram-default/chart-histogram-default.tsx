"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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
  { bin: "0-10", count: 4 },
  { bin: "10-20", count: 12 },
  { bin: "20-30", count: 18 },
  { bin: "30-40", count: 24 },
  { bin: "40-50", count: 16 },
  { bin: "50-60", count: 9 },
  { bin: "60-70", count: 5 },
]

const chartConfig = {
  count: {
    label: "Frequency",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartHistogramDefault() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Histogram</CardTitle>
        <CardDescription>Distribution of response times (ms)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData} barCategoryGap={0}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="bin"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickLine={false} axisLine={false} width={32} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="count"
              fill="var(--color-count)"
              radius={0}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Peak around 30-40ms <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Pass pre-binned data with zero gap between bars
        </div>
      </CardFooter>
    </Card>
  )
}
