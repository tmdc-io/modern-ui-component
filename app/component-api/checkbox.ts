import type { ComponentApiDoc } from "@/app/component-variants/types"

export const checkboxApi: ComponentApiDoc = {
  features: [
    "ModernUI Checkbox component.",
  ],
  usage: {
    import: "import { Checkbox } from \"@/components/ui/checkbox\"",
    example: "<Checkbox />",
  },
  apiReference: {
    title: "Checkbox Props",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Checkbox forwards props to the underlying Radix UI primitive.",
  },
}
