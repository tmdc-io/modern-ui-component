import type { ComponentApiDoc } from "@/app/component-variants/types"

export const separatorApi: ComponentApiDoc = {
  features: [
    "ModernUI Separator component.",
  ],
  usage: {
    import: "import { Separator } from \"@/components/ui/separator\"",
    example: "<Separator />",
  },
  apiReference: {
    title: "Separator Props",
    props: [
      {
        prop: "orientation",
        type: "unknown",
        default: "\"horizontal\"",
        description: "orientation prop.",
      },
      {
        prop: "decorative",
        type: "unknown",
        default: "true",
        description: "decorative prop.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Separator forwards props to the underlying Radix UI primitive.",
  },
}
