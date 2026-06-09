import type { ComponentApiDoc } from "@/app/component-variants/types"

export const chartApi: ComponentApiDoc = {
  features: [
    "ModernUI Chart component.",
  ],
  usage: {
    import: "import { ChartContainer } from \"@/components/ui/chart\"",
    example: "<ChartContainer />",
  },
  apiReference: {
    title: "Chart Components",
    props: [
      {
        prop: "ChartTooltip",
        type: "component",
        description: "ChartTooltip subcomponent exported from this module.",
      },
      {
        prop: "ChartTooltipContent",
        type: "component",
        description: "ChartTooltipContent subcomponent exported from this module.",
      },
      {
        prop: "ChartLegend",
        type: "component",
        description: "ChartLegend subcomponent exported from this module.",
      },
      {
        prop: "ChartLegendContent",
        type: "component",
        description: "ChartLegendContent subcomponent exported from this module.",
      },
      {
        prop: "ChartStyle",
        type: "component",
        description: "ChartStyle subcomponent exported from this module.",
      },
      {
        prop: "config",
        type: "ChartConfig",
        description: "config configuration option.",
      },
      {
        prop: "children",
        type: "React.ComponentProps< typeof RechartsPrimitive.ResponsiveContainer >[\"children\"]",
        description: "children configuration option.",
      },
      {
        prop: "initialDimension",
        type: "{ width: number height: number }",
        default: "\"INITIAL_DIMENSION\"",
        description: "initialDimension configuration option.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, ChartContainer accepts all standard HTML div attributes.",
  },
}
