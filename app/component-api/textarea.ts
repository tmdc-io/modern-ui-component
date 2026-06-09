import type { ComponentApiDoc } from "@/app/component-variants/types"

export const textareaApi: ComponentApiDoc = {
  features: [
    "ModernUI Textarea component.",
  ],
  usage: {
    import: "import { Textarea } from \"@/components/ui/textarea\"",
    example: "<Textarea />",
  },
  apiReference: {
    title: "Textarea Props",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Textarea accepts all standard HTML textarea attributes.",
  },
}
