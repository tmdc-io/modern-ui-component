import type { ComponentApiDoc } from "@/app/component-variants/types"

export const nativeSelectApi: ComponentApiDoc = {
  features: [
    "ModernUI Native Select component.",
  ],
  usage: {
    import: "import { NativeSelect } from \"@/components/ui/native-select\"",
    example: "<NativeSelect />",
  },
  apiReference: {
    title: "NativeSelect Components",
    props: [
      {
        prop: "NativeSelectOptGroup",
        type: "component",
        description: "NativeSelectOptGroup subcomponent exported from this module.",
      },
      {
        prop: "NativeSelectOption",
        type: "component",
        description: "NativeSelectOption subcomponent exported from this module.",
      },
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
    footnote: "Additionally, NativeSelect accepts all standard HTML select attributes.",
  },
}
