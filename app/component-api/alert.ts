import type { ComponentApiDoc } from "@/app/component-variants/types"

export const alertApi: ComponentApiDoc = {
  features: [
    "ModernUI Alert component.",
  ],
  usage: {
    import: "import { Alert } from \"@/components/ui/alert\"",
    example: "<Alert />",
  },
  apiReference: {
    title: "Alert Components",
    props: [
      {
        prop: "AlertTitle",
        type: "component",
        description: "AlertTitle subcomponent exported from this module.",
      },
      {
        prop: "AlertDescription",
        type: "component",
        description: "AlertDescription subcomponent exported from this module.",
      },
      {
        prop: "AlertAction",
        type: "component",
        description: "AlertAction subcomponent exported from this module.",
      },
      {
        prop: "variant",
        type: "'default' | 'destructive'",
        default: "'default'",
        description: "Controls the variant styling via CVA variants.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Alert accepts all standard HTML div attributes.",
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
          "name": "destructive",
          "description": "destructive variant styling."
        }
      ]
    }
  ],
}
