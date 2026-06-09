import type { ComponentApiDoc } from "@/app/component-variants/types"

export const radioGroupApi: ComponentApiDoc = {
  features: [
    "ModernUI Radio Group component.",
  ],
  usage: {
    import: "import { RadioGroup } from \"@/components/ui/radio-group\"",
    example: "<RadioGroup />",
  },
  apiReference: {
    title: "RadioGroup Components",
    props: [
      {
        prop: "RadioGroupItem",
        type: "component",
        description: "RadioGroupItem subcomponent exported from this module.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, RadioGroup forwards props to the underlying Radix UI primitive.",
  },
}
