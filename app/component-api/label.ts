import type { ComponentApiDoc } from "@/app/component-variants/types"

export const labelApi: ComponentApiDoc = {
  features: [
    "ModernUI Label component.",
  ],
  usage: {
    import: "import { Label } from \"@/components/ui/label\"",
    example: "<Label />",
  },
  apiReference: {
    title: "Label Props",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Label forwards props to the underlying Radix UI primitive.",
  },
}
