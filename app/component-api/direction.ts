import type { ComponentApiDoc } from "@/app/component-variants/types"

export const directionApi: ComponentApiDoc = {
  features: [
    "ModernUI Direction component.",
  ],
  usage: {
    import: "import { DirectionProvider } from \"@/components/ui/direction\"",
    example: "<DirectionProvider />",
  },
  apiReference: {
    title: "DirectionProvider Props",
    props: [
      {
        prop: "direction",
        type: "React.ComponentProps<typeof Direction.DirectionProvider>[\"dir\"]",
        description: "direction configuration option.",
      },
      {
        prop: "dir",
        type: "unknown",
        description: "dir prop.",
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
    footnote: "Additionally, DirectionProvider forwards props to the underlying Radix UI primitive.",
  },
}
