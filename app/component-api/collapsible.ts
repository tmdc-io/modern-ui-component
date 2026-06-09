import type { ComponentApiDoc } from "@/app/component-variants/types"

export const collapsibleApi: ComponentApiDoc = {
  features: [
    "ModernUI Collapsible component.",
  ],
  usage: {
    import: "import { Collapsible } from \"@/components/ui/collapsible\"",
    example: "<Collapsible />",
  },
  apiReference: {
    title: "Collapsible Components",
    props: [
      {
        prop: "CollapsibleTrigger",
        type: "component",
        description: "CollapsibleTrigger subcomponent exported from this module.",
      },
      {
        prop: "CollapsibleContent",
        type: "component",
        description: "CollapsibleContent subcomponent exported from this module.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Collapsible forwards props to the underlying Radix UI primitive.",
  },
}
