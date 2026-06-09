import type { ComponentApiDoc } from "@/app/component-variants/types"

export const inputGroupApi: ComponentApiDoc = {
  features: [
    "ModernUI Input Group component.",
  ],
  usage: {
    import: "import { InputGroup } from \"@/components/ui/input-group\"",
    example: "<InputGroup />",
  },
  apiReference: {
    title: "InputGroup Components",
    props: [
      {
        prop: "InputGroupAddon",
        type: "component",
        description: "InputGroupAddon subcomponent exported from this module.",
      },
      {
        prop: "InputGroupButton",
        type: "component",
        description: "InputGroupButton subcomponent exported from this module.",
      },
      {
        prop: "InputGroupText",
        type: "component",
        description: "InputGroupText subcomponent exported from this module.",
      },
      {
        prop: "InputGroupInput",
        type: "component",
        description: "InputGroupInput subcomponent exported from this module.",
      },
      {
        prop: "InputGroupTextarea",
        type: "component",
        description: "InputGroupTextarea subcomponent exported from this module.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, InputGroup accepts all standard HTML div attributes.",
  },
  cssVariants: [
    {
      "title": "Align Classes",
      "variants": [
        {
          "name": "inline-start",
          "description": "inline-start align styling."
        },
        {
          "name": "inline-end",
          "description": "inline-end align styling."
        },
        {
          "name": "block-start",
          "description": "block-start align styling."
        },
        {
          "name": "block-end",
          "description": "block-end align styling."
        }
      ]
    }
  ],
}
