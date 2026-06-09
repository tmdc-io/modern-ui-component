import type { ComponentApiDoc } from "@/app/component-variants/types"

export const itemApi: ComponentApiDoc = {
  features: [
    "ModernUI Item component.",
  ],
  usage: {
    import: "import { Item } from \"@/components/ui/item\"",
    example: "<Item />",
  },
  apiReference: {
    title: "Item Components",
    props: [
      {
        prop: "ItemMedia",
        type: "component",
        description: "ItemMedia subcomponent exported from this module.",
      },
      {
        prop: "ItemContent",
        type: "component",
        description: "ItemContent subcomponent exported from this module.",
      },
      {
        prop: "ItemActions",
        type: "component",
        description: "ItemActions subcomponent exported from this module.",
      },
      {
        prop: "ItemGroup",
        type: "component",
        description: "ItemGroup subcomponent exported from this module.",
      },
      {
        prop: "ItemSeparator",
        type: "component",
        description: "ItemSeparator subcomponent exported from this module.",
      },
      {
        prop: "ItemTitle",
        type: "component",
        description: "ItemTitle subcomponent exported from this module.",
      },
      {
        prop: "ItemDescription",
        type: "component",
        description: "ItemDescription subcomponent exported from this module.",
      },
      {
        prop: "ItemHeader",
        type: "component",
        description: "ItemHeader subcomponent exported from this module.",
      },
      {
        prop: "ItemFooter",
        type: "component",
        description: "ItemFooter subcomponent exported from this module.",
      },
      {
        prop: "variant",
        type: "'default' | 'outline' | 'muted'",
        default: "'default'",
        description: "Controls the variant styling via CVA variants.",
      },
      {
        prop: "size",
        type: "'default' | 'sm'",
        default: "'default'",
        description: "Controls the size styling via CVA variants.",
      },
      {
        prop: "asChild",
        type: "boolean",
        default: "false",
        description: "asChild configuration option.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Item accepts all standard HTML div attributes.",
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
        },
        {
          "name": "muted",
          "description": "muted variant styling."
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
        }
      ]
    }
  ],
}
