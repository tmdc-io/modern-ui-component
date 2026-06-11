import type { ComponentApiDoc } from "@/app/component-variants/types"

export const utilsApi: ComponentApiDoc = {
  features: [
    "clsx for conditional, array, and object class values.",
    "tailwind-merge resolves conflicting Tailwind utilities intelligently.",
    "Installed to lib/utils.ts — import as @/lib/utils in consumer projects.",
    "Peer dependencies: clsx, tailwind-merge (installed by shadcn add).",
  ],
  apiReference: {
    title: "cn",
    props: [
      {
        prop: "...inputs",
        type: "ClassValue[]",
        description:
          "Any clsx-compatible value — strings, arrays, objects, booleans, undefined.",
      },
    ],
    footnote:
      "Returns a single merged class string. Used across all registry components for className composition.",
  },
  enhancements: [
    {
      enhancement: "tailwind-merge",
      benefit: "Prevents invalid combinations like px-4 and px-2 both applying.",
    },
    {
      enhancement: "clsx",
      benefit: "Clean conditional syntax without template literal noise.",
    },
  ],
}
