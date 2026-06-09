import type { ComponentApiDoc } from "@/app/component-variants/types"

export const sheetApi: ComponentApiDoc = {
  features: [
    "ModernUI Sheet component.",
  ],
  usage: {
    import: "import { Sheet } from \"@/components/ui/sheet\"",
    example: "<Sheet />",
  },
  apiReference: {
    title: "Sheet Components",
    props: [
      {
        prop: "SheetTrigger",
        type: "component",
        description: "SheetTrigger subcomponent exported from this module.",
      },
      {
        prop: "SheetClose",
        type: "component",
        description: "SheetClose subcomponent exported from this module.",
      },
      {
        prop: "SheetContent",
        type: "component",
        description: "SheetContent subcomponent exported from this module.",
      },
      {
        prop: "SheetHeader",
        type: "component",
        description: "SheetHeader subcomponent exported from this module.",
      },
      {
        prop: "SheetFooter",
        type: "component",
        description: "SheetFooter subcomponent exported from this module.",
      },
      {
        prop: "SheetTitle",
        type: "component",
        description: "SheetTitle subcomponent exported from this module.",
      },
      {
        prop: "SheetDescription",
        type: "component",
        description: "SheetDescription subcomponent exported from this module.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Sheet forwards props to the underlying Radix UI primitive.",
  },
}
