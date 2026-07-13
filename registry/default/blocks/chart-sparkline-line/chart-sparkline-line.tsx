"use client"

import { TrendingUp } from "lucide-react"
import { Line, LineChart } from "recharts"

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
    label: "Sessions",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartSparklineLine() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sparkline</CardTitle>
        <CardDescription>Compact line trend without axes</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-12 w-48">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 4, right: 4, bottom: 4, left: 4 }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="value"
              type="monotone"
              stroke="var(--color-value)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 8.4% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Use in KPI cards, tables, and compact dashboards
        </div>
      </CardFooter>
    </Card>
  )
}
