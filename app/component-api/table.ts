import type { ComponentApiDoc } from "@/app/component-variants/types"

export const tableApi: ComponentApiDoc = {
  features: [
    "ModernUI Table component.",
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
    footnote: "Additionally, Table accepts all standard HTML table attributes.",
  },
}
