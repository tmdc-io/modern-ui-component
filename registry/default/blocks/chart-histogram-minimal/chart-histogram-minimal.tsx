"use client"

import { Bar, BarChart, Cell } from "recharts"

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
  { bin: "0-10", count: 4, active: false },
  { bin: "10-20", count: 12, active: false },
  { bin: "20-30", count: 18, active: false },
  { bin: "30-40", count: 24, active: true },
  { bin: "40-50", count: 16, active: false },
  { bin: "50-60", count: 9, active: false },
  { bin: "60-70", count: 5, active: false },
]

const chartConfig = {
  count: {
    label: "Frequency",
    color: "var(--chart-1)",
  },
  muted: {
    label: "Frequency",
    color: "var(--grey-16)",
  },
} satisfies ChartConfig

export function ChartHistogramMinimal() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Minimal Histogram</CardTitle>
        <CardDescription>Axis-free distribution bars for compact panels</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-20 w-full max-w-md">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 4, right: 4, bottom: 4, left: 4 }}
            barCategoryGap="18%"
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" radius={[6, 6, 0, 0]}>
              {chartData.map((entry) => (
                <Cell
                  key={entry.bin}
                  fill={
                    entry.active
                      ? "var(--color-count)"
                      : "var(--color-muted)"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="text-muted-foreground text-sm leading-none">
        No axes or grid — highlight the active bin with primary color
      </CardFooter>
    </Card>
  )
}
