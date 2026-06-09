import type { ComponentApiDoc } from "@/app/component-variants/types"

export const paginationApi: ComponentApiDoc = {
  features: [
    "ModernUI Pagination component.",
  ],
  usage: {
    import: "import { Pagination } from \"@/components/ui/pagination\"",
    example: "<Pagination />",
  },
  apiReference: {
    title: "Pagination Components",
    props: [
      {
        prop: "PaginationContent",
        type: "component",
        description: "PaginationContent subcomponent exported from this module.",
      },
      {
        prop: "PaginationLink",
        type: "component",
        description: "PaginationLink subcomponent exported from this module.",
      },
      {
        prop: "PaginationItem",
        type: "component",
        description: "PaginationItem subcomponent exported from this module.",
      },
      {
        prop: "PaginationPrevious",
        type: "component",
        description: "PaginationPrevious subcomponent exported from this module.",
      },
      {
        prop: "PaginationNext",
        type: "component",
        description: "PaginationNext subcomponent exported from this module.",
      },
      {
        prop: "PaginationEllipsis",
        type: "component",
        description: "PaginationEllipsis subcomponent exported from this module.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Pagination accepts all standard HTML nav attributes.",
  },
}
