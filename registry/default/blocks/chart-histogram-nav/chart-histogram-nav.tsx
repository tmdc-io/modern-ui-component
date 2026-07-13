"use client"

import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { Bar, BarChart, Cell } from "recharts"

import { Button } from "@/registry/default/ui/button"
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
import { cn } from "@/lib/utils"

const chartData = [
  { bin: "0-10", count: 4 },
  { bin: "10-20", count: 12 },
  { bin: "20-30", count: 18 },
  { bin: "30-40", count: 24 },
  { bin: "40-50", count: 16 },
  { bin: "50-60", count: 9 },
  { bin: "60-70", count: 5 },
  { bin: "70-80", count: 11 },
  { bin: "80-90", count: 15 },
  { bin: "90-100", count: 8 },
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

const WINDOW_SIZE = 7

export function ChartHistogramNav() {
  const [startIndex, setStartIndex] = React.useState(0)
  const [activeIndex, setActiveIndex] = React.useState(3)

  const maxStart = Math.max(chartData.length - WINDOW_SIZE, 0)
  const windowData = chartData.slice(startIndex, startIndex + WINDOW_SIZE)

  const canGoBack = startIndex > 0
  const canGoForward = startIndex < maxStart

  const shiftWindow = (direction: -1 | 1) => {
    setStartIndex((current) => {
      const next = Math.min(Math.max(current + direction, 0), maxStart)
      return next
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Histogram with navigation</CardTitle>
        <CardDescription>
          Paginate bins with previous and next controls
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label="Previous bins"
            disabled={!canGoBack}
            onClick={() => shiftWindow(-1)}
          >
            <ChevronLeftIcon />
          </Button>

          <ChartContainer config={chartConfig} className="h-20 min-w-0 flex-1">
            <BarChart
              accessibilityLayer
              data={windowData}
              margin={{ top: 4, right: 4, bottom: 4, left: 4 }}
              barCategoryGap="18%"
            >
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar
                dataKey="count"
                radius={[6, 6, 0, 0]}
                onClick={(_, index) => setActiveIndex(startIndex + index)}
              >
                {windowData.map((entry, index) => {
                  const globalIndex = startIndex + index
                  const active = globalIndex === activeIndex
                  return (
                    <Cell
                      key={entry.bin}
                      className={cn(
                        active ? "cursor-pointer" : "cursor-pointer opacity-100"
                      )}
                      fill={
                        active
                          ? "var(--color-count)"
                          : "var(--color-muted)"
                      }
                    />
                  )
                })}
              </Bar>
            </BarChart>
          </ChartContainer>

          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label="Next bins"
            disabled={!canGoForward}
            onClick={() => shiftWindow(1)}
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </CardContent>
      <CardFooter className="text-muted-foreground flex-col items-start gap-1 text-sm leading-none">
        <span>
          Viewing {windowData[0]?.bin} – {windowData[windowData.length - 1]?.bin}
        </span>
        <span>Selected bin: {chartData[activeIndex]?.bin}</span>
      </CardFooter>
    </Card>
  )
}
