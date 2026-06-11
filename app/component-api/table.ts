import type { ComponentApiDoc } from "@/app/component-variants/types"

export const tableApi: ComponentApiDoc = {
  features: [
    "Semantic table markup with ModernUI styling for headers, rows, and cells.",
    "Composable with TanStack Table for sortable, filterable data grids.",
    "Pair with TanStack Virtual for large datasets — see the virtual rows example.",
  ],
  usage: {
    import: "import { Table } from \"@/components/ui/table\"",
    example: "<Table />",
  },
  apiReference: {
    title: "Table Components",
    props: [
      {
        prop: "TableHeader",
        type: "component",
        description: "TableHeader subcomponent exported from this module.",
      },
      {
        prop: "TableBody",
        type: "component",
        description: "TableBody subcomponent exported from this module.",
      },
      {
        prop: "TableFooter",
        type: "component",
        description: "TableFooter subcomponent exported from this module.",
      },
      {
        prop: "TableHead",
        type: "component",
        description: "TableHead subcomponent exported from this module.",
      },
      {
        prop: "TableRow",
        type: "component",
        description: "TableRow subcomponent exported from this module.",
      },
      {
        prop: "TableCell",
        type: "component",
        description: "TableCell subcomponent exported from this module.",
      },
      {
        prop: "TableCaption",
        type: "component",
        description: "TableCaption subcomponent exported from this module.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote:
      "For data grids, install @tanstack/react-table and compose with flexRender. Full API reference: https://tanstack.com/table/latest. For virtual scrolling, add @tanstack/react-virtual — see /components/table#tanstack-virtual and https://tanstack.com/table/v8/docs/guide/virtualization.",
  },
  enhancements: [
    {
      enhancement: "@tanstack/react-table",
      benefit:
        "Headless columns, row models, sorting, filtering, and selection. Docs: https://tanstack.com/table/latest",
    },
    {
      enhancement: "@tanstack/react-virtual",
      benefit:
        "Render only visible rows in a fixed-height scroll container for large datasets.",
    },
  ],
}
