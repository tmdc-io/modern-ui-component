import type { ComponentApiDoc } from "@/app/component-variants/types"

export const sliderApi: ComponentApiDoc = {
  features: [
    "ModernUI Slider component.",
  ],
  usage: {
    import: "import { Slider } from \"@/components/ui/slider\"",
    example: "<Slider />",
  },
  apiReference: {
    title: "Slider Props",
    props: [
      {
        prop: "defaultValue",
        type: "unknown",
        description: "defaultValue prop.",
      },
      {
        prop: "value",
        type: "unknown",
        description: "value prop.",
      },
      {
        prop: "min",
        type: "unknown",
        default: "0",
        description: "min prop.",
      },
      {
        prop: "max",
        type: "unknown",
        default: "100",
        description: "max prop.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Slider forwards props to the underlying Radix UI primitive.",
  },
}
