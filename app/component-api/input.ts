import type { ComponentApiDoc } from "@/app/component-variants/types"

export const inputApi: ComponentApiDoc = {
  features: [
    "Styled native input with focus ring and invalid states.",
    "Supports file inputs with consistent typography.",
    "Works with form libraries and aria-invalid validation.",
  ],
  usage: {
    import: 'import { Input } from "@/components/ui/input"',
    example: '<Input type="email" placeholder="Email" />',
  },
  apiReference: {
    title: "Input Props",
    props: [
      {
        prop: "type",
        type: "string",
        default: '"text"',
        description: "Native input type (text, email, password, file, etc.).",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes to apply to the input.",
      },
      {
        prop: "disabled",
        type: "boolean",
        default: "false",
        description: "When true, disables the input.",
      },
      {
        prop: "placeholder",
        type: "string",
        description: "Placeholder text shown when empty.",
      },
      {
        prop: "aria-invalid",
        type: "boolean",
        description:
          "When true, applies destructive border and ring styling for validation errors.",
      },
    ],
    footnote:
      "Additionally, the Input component accepts all standard HTML input attributes.",
  },
}
