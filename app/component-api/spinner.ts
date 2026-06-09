import type { ComponentApiDoc } from "@/app/component-variants/types"

export const spinnerApi: ComponentApiDoc = {
  features: [
    "ModernUI Spinner component.",
  ],
  usage: {
    import: "import { Spinner } from \"@/components/ui/spinner\"",
    example: "<Spinner />",
  },
  apiReference: {
    title: "Spinner Props",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Spinner accepts all standard HTML svg attributes.",
  },
}
