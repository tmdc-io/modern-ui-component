import type { ComponentApiDoc } from "@/app/component-variants/types"

export const toggleGroupApi: ComponentApiDoc = {
  features: [
    "ModernUI Toggle Group component.",
  ],
  usage: {
    import: "import { ToggleGroup } from \"@/components/ui/toggle-group\"",
    example: "<ToggleGroup />",
  },
  apiReference: {
    title: "ToggleGroup Components",
    props: [
      {
        prop: "ToggleGroupItem",
        type: "component",
        description: "ToggleGroupItem subcomponent exported from this module.",
      },
      {
        prop: "spacing",
        type: "number",
        default: "0",
        description: "spacing configuration option.",
      },
      {
        prop: "children",
        type: "ReactNode",
        description: "Child content.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, ToggleGroup forwards props to the underlying Radix UI primitive.",
  },
}
