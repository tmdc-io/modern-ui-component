import type { ComponentApiDoc } from "@/app/component-variants/types"

export const signupApi: ComponentApiDoc = {
  features: [
    "ModernUI signup.",
  ],
  usage: {
    import: "import { SignupPage } from \"@/components/blocks/signup-01\"",
    example: "<SignupPage />",
  },
  apiReference: {
    title: "Signup Blocks",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Signup blocks are full-page layouts. Install individual blocks such as signup-01 from the registry.",
  },
}
