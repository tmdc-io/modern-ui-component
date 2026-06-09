import type { ComponentApiDoc } from "@/app/component-variants/types"

export const tabsApi: ComponentApiDoc = {
  features: [
    "ModernUI Tabs component.",
  ],
  usage: {
    import: "import { Tabs } from \"@/components/ui/tabs\"",
    example: "<Tabs />",
  },
  apiReference: {
    title: "Tabs Components",
    props: [
      {
        prop: "TabsList",
        type: "component",
        description: "TabsList subcomponent exported from this module.",
      },
      {
        prop: "TabsTrigger",
        type: "component",
        description: "TabsTrigger subcomponent exported from this module.",
      },
      {
        prop: "TabsContent",
        type: "component",
        description: "TabsContent subcomponent exported from this module.",
      },
      {
        prop: "orientation",
        type: "unknown",
        default: "\"horizontal\"",
        description: "orientation prop.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Tabs forwards props to the underlying Radix UI primitive.",
  },
  cssVariants: [
    {
      "title": "Variant Classes",
      "variants": [
        {
          "name": "default",
          "description": "default variant styling."
        },
        {
          "name": "line",
          "description": "line variant styling."
        }
      ]
    }
  ],
}
