import type { ComponentApiDoc } from "@/app/component-variants/types"

export const loginApi: ComponentApiDoc = {
  features: [
    "ModernUI login.",
  ],
  usage: {
    import: "import { LoginPage } from \"@/components/blocks/login-01\"",
    example: "<LoginPage />",
  },
  apiReference: {
    title: "Login Blocks",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Login blocks are full-page layouts. Install individual blocks such as login-01 from the registry.",
  },
}
