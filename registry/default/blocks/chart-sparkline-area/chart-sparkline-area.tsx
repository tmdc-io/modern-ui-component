"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart } from "recharts"

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
  { value: 12 },
  { value: 18 },
  { value: 14 },
  { value: 22 },
  { value: 19 },
  { value: 26 },
  { value: 24 },
  { value: 31 },
  { value: 28 },
  { value: 35 },
]

const chartConfig = {
  value: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartSparklineArea() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Sparkline</CardTitle>
        <CardDescription>Filled micro-trend for KPI tiles</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-12 w-48">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 4, right: 4, bottom: 4, left: 4 }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Area
              dataKey="value"
              type="monotone"
              stroke="var(--color-value)"
              fill="var(--color-value)"
              fillOpacity={0.2}
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 8.4% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Subtle fill highlights direction without chart chrome
        </div>
      </CardFooter>
    </Card>
  )
}
