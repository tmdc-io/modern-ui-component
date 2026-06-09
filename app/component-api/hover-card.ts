import type { ComponentApiDoc } from "@/app/component-variants/types"

export const hoverCardApi: ComponentApiDoc = {
  features: [
    "ModernUI Hover Card component.",
  ],
  usage: {
    import: "import { HoverCard } from \"@/components/ui/hover-card\"",
    example: "<HoverCard />",
  },
  apiReference: {
    title: "HoverCard Components",
    props: [
      {
        prop: "HoverCardTrigger",
        type: "component",
        description: "HoverCardTrigger subcomponent exported from this module.",
      },
      {
        prop: "HoverCardContent",
        type: "component",
        description: "HoverCardContent subcomponent exported from this module.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, HoverCard forwards props to the underlying Radix UI primitive.",
  },
}
