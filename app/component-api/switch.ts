import type { ComponentApiDoc } from "@/app/component-variants/types"

export const switchApi: ComponentApiDoc = {
  features: [
    "ModernUI Switch component.",
  ],
  usage: {
    import: "import { Switch } from \"@/components/ui/switch\"",
    example: "<Switch />",
  },
  apiReference: {
    title: "Switch Props",
    props: [
      {
        prop: "size",
        type: "\"sm\" | \"default\"",
        default: "\"default\"",
        description: "size configuration option.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Switch forwards props to the underlying Radix UI primitive.",
  },
}
