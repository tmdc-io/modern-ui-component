import type { ComponentApiDoc } from "@/app/component-variants/types"

export const sonnerApi: ComponentApiDoc = {
  features: [
    "ModernUI Sonner component.",
  ],
  usage: {
    import: "import { Toaster } from \"@/components/ui/sonner\"",
    example: "<Toaster />",
  },
  apiReference: {
    title: "Toaster Props",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "See TypeScript types for the full Toaster prop interface.",
  },
}
