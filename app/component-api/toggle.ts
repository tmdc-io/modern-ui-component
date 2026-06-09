import type { ComponentApiDoc } from "@/app/component-variants/types"

export const toggleApi: ComponentApiDoc = {
  features: [
    "ModernUI Toggle component.",
  ],
  usage: {
    import: "import { Toggle } from \"@/components/ui/toggle\"",
    example: "<Toggle />",
  },
  apiReference: {
    title: "Toggle Props",
    props: [
      {
        prop: "variant",
        type: "'default' | 'outline'",
        default: "'default'",
        description: "Controls the variant styling via CVA variants.",
      },
      {
        prop: "size",
        type: "'default' | 'sm' | 'lg'",
        default: "'default'",
        description: "Controls the size styling via CVA variants.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Toggle forwards props to the underlying Radix UI primitive.",
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
          "name": "outline",
          "description": "outline variant styling."
        }
      ]
    },
    {
      "title": "Size Classes",
      "variants": [
        {
          "name": "default",
          "description": "default size styling."
        },
        {
          "name": "sm",
          "description": "sm size styling."
        },
        {
          "name": "lg",
          "description": "lg size styling."
        }
      ]
    }
  ],
}
