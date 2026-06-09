import type { ComponentApiDoc } from "@/app/component-variants/types"

export const buttonGroupApi: ComponentApiDoc = {
  features: [
    "ModernUI Button Group component.",
  ],
  usage: {
    import: "import { ButtonGroup } from \"@/components/ui/button-group\"",
    example: "<ButtonGroup />",
  },
  apiReference: {
    title: "ButtonGroup Components",
    props: [
      {
        prop: "ButtonGroupSeparator",
        type: "component",
        description: "ButtonGroupSeparator subcomponent exported from this module.",
      },
      {
        prop: "ButtonGroupText",
        type: "component",
        description: "ButtonGroupText subcomponent exported from this module.",
      },
      {
        prop: "orientation",
        type: "'horizontal' | 'vertical'",
        default: "'horizontal'",
        description: "Controls the orientation styling via CVA variants.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, ButtonGroup accepts all standard HTML div attributes.",
  },
  cssVariants: [
    {
      "title": "Orientation Classes",
      "variants": [
        {
          "name": "horizontal",
          "description": "horizontal orientation styling."
        },
        {
          "name": "vertical",
          "description": "vertical orientation styling."
        }
      ]
    }
  ],
}
