import type { ComponentApiDoc } from "@/app/component-variants/types"

export const progressApi: ComponentApiDoc = {
  features: [
    "ModernUI Progress component.",
  ],
  usage: {
    import: "import { Progress } from \"@/components/ui/progress\"",
    example: "<Progress />",
  },
  apiReference: {
    title: "Progress Props",
    props: [
      {
        prop: "value",
        type: "unknown",
        description: "value prop.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Progress forwards props to the underlying Radix UI primitive.",
  },
}
