import type { ComponentApiDoc } from "@/app/component-variants/types"

export const kbdApi: ComponentApiDoc = {
  features: [
    "ModernUI Kbd component.",
  ],
  usage: {
    import: "import { Kbd } from \"@/components/ui/kbd\"",
    example: "<Kbd />",
  },
  apiReference: {
    title: "Kbd Components",
    props: [
      {
        prop: "KbdGroup",
        type: "component",
        description: "KbdGroup subcomponent exported from this module.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Kbd accepts all standard HTML kbd attributes.",
  },
}
