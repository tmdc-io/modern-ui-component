import type { ComponentApiDoc } from "@/app/component-variants/types"

export const aspectRatioApi: ComponentApiDoc = {
  features: [
    "ModernUI Aspect Ratio component.",
  ],
  usage: {
    import: "import { AspectRatio } from \"@/components/ui/aspect-ratio\"",
    example: "<AspectRatio />",
  },
  apiReference: {
    title: "AspectRatio Props",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, AspectRatio forwards props to the underlying Radix UI primitive.",
  },
}
