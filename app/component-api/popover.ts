import type { ComponentApiDoc } from "@/app/component-variants/types"

export const popoverApi: ComponentApiDoc = {
  features: [
    "ModernUI Popover component.",
  ],
  usage: {
    import: "import { Popover } from \"@/components/ui/popover\"",
    example: "<Popover />",
  },
  apiReference: {
    title: "Popover Components",
    props: [
      {
        prop: "PopoverTrigger",
        type: "component",
        description: "PopoverTrigger subcomponent exported from this module.",
      },
      {
        prop: "PopoverContent",
        type: "component",
        description: "PopoverContent subcomponent exported from this module.",
      },
      {
        prop: "PopoverAnchor",
        type: "component",
        description: "PopoverAnchor subcomponent exported from this module.",
      },
      {
        prop: "PopoverHeader",
        type: "component",
        description: "PopoverHeader subcomponent exported from this module.",
      },
      {
        prop: "PopoverTitle",
        type: "component",
        description: "PopoverTitle subcomponent exported from this module.",
      },
      {
        prop: "PopoverDescription",
        type: "component",
        description: "PopoverDescription subcomponent exported from this module.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Popover forwards props to the underlying Radix UI primitive.",
  },
}
