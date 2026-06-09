import type { ComponentApiDoc } from "@/app/component-variants/types"

export const emptyApi: ComponentApiDoc = {
  features: [
    "ModernUI Empty component.",
  ],
  usage: {
    import: "import { Empty } from \"@/components/ui/empty\"",
    example: "<Empty />",
  },
  apiReference: {
    title: "Empty Components",
    props: [
      {
        prop: "EmptyHeader",
        type: "component",
        description: "EmptyHeader subcomponent exported from this module.",
      },
      {
        prop: "EmptyTitle",
        type: "component",
        description: "EmptyTitle subcomponent exported from this module.",
      },
      {
        prop: "EmptyDescription",
        type: "component",
        description: "EmptyDescription subcomponent exported from this module.",
      },
      {
        prop: "EmptyContent",
        type: "component",
        description: "EmptyContent subcomponent exported from this module.",
      },
      {
        prop: "EmptyMedia",
        type: "component",
        description: "EmptyMedia subcomponent exported from this module.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Empty accepts all standard HTML div attributes.",
  },
  cssVariants: [
    {
      "title": "Variant Classes",
      "variants": [
        {
          "name": "default",
          "description": "default variant styling."
        },
        {
          "name": "icon",
          "description": "icon variant styling."
        }
      ]
    }
  ],
}
