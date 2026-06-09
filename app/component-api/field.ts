import type { ComponentApiDoc } from "@/app/component-variants/types"

export const fieldApi: ComponentApiDoc = {
  features: [
    "ModernUI Field component.",
  ],
  usage: {
    import: "import { Field } from \"@/components/ui/field\"",
    example: "<Field />",
  },
  apiReference: {
    title: "Field Components",
    props: [
      {
        prop: "FieldLabel",
        type: "component",
        description: "FieldLabel subcomponent exported from this module.",
      },
      {
        prop: "FieldDescription",
        type: "component",
        description: "FieldDescription subcomponent exported from this module.",
      },
      {
        prop: "FieldError",
        type: "component",
        description: "FieldError subcomponent exported from this module.",
      },
      {
        prop: "FieldGroup",
        type: "component",
        description: "FieldGroup subcomponent exported from this module.",
      },
      {
        prop: "FieldLegend",
        type: "component",
        description: "FieldLegend subcomponent exported from this module.",
      },
      {
        prop: "FieldSeparator",
        type: "component",
        description: "FieldSeparator subcomponent exported from this module.",
      },
      {
        prop: "FieldSet",
        type: "component",
        description: "FieldSet subcomponent exported from this module.",
      },
      {
        prop: "FieldContent",
        type: "component",
        description: "FieldContent subcomponent exported from this module.",
      },
      {
        prop: "FieldTitle",
        type: "component",
        description: "FieldTitle subcomponent exported from this module.",
      },
      {
        prop: "orientation",
        type: "'vertical' | 'horizontal' | 'responsive'",
        default: "'vertical'",
        description: "Controls the orientation styling via CVA variants.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Field accepts all standard HTML div attributes.",
  },
  cssVariants: [
    {
      "title": "Orientation Classes",
      "variants": [
        {
          "name": "vertical",
          "description": "vertical orientation styling."
        },
        {
          "name": "horizontal",
          "description": "horizontal orientation styling."
        },
        {
          "name": "responsive",
          "description": "responsive orientation styling."
        }
      ]
    }
  ],
}
