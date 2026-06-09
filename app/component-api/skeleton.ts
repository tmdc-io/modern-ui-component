import type { ComponentApiDoc } from "@/app/component-variants/types"

export const skeletonApi: ComponentApiDoc = {
  features: [
    "ModernUI Skeleton component.",
  ],
  usage: {
    import: "import { Skeleton } from \"@/components/ui/skeleton\"",
    example: "<Skeleton />",
  },
  apiReference: {
    title: "Skeleton Props",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Skeleton accepts all standard HTML div attributes.",
  },
}
