import type { ComponentApiDoc } from "@/app/component-variants/types"

export const scrollAreaApi: ComponentApiDoc = {
  features: [
    "ModernUI Scroll Area component.",
  ],
  usage: {
    import: "import { ScrollArea } from \"@/components/ui/scroll-area\"",
    example: "<ScrollArea />",
  },
  apiReference: {
    title: "ScrollArea Components",
    props: [
      {
        prop: "ScrollBar",
        type: "component",
        description: "ScrollBar subcomponent exported from this module.",
      },
      {
        prop: "children",
        type: "ReactNode",
        description: "Child content.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, ScrollArea forwards props to the underlying Radix UI primitive.",
  },
}
