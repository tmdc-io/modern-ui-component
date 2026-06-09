import type { ComponentApiDoc } from "@/app/component-variants/types"

export const tooltipApi: ComponentApiDoc = {
  features: [
    "ModernUI Tooltip component.",
  ],
  usage: {
    import: "import { Tooltip } from \"@/components/ui/tooltip\"",
    example: "<Tooltip />",
  },
  apiReference: {
    title: "Tooltip Components",
    props: [
      {
        prop: "TooltipTrigger",
        type: "component",
        description: "TooltipTrigger subcomponent exported from this module.",
      },
      {
        prop: "TooltipContent",
        type: "component",
        description: "TooltipContent subcomponent exported from this module.",
      },
      {
        prop: "TooltipProvider",
        type: "component",
        description: "TooltipProvider subcomponent exported from this module.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Tooltip forwards props to the underlying Radix UI primitive.",
  },
}
