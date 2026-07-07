import type { ComponentApiDoc } from "@/app/component-variants/types"

export const tableApi: ComponentApiDoc = {
  features: [
    "Semantic table markup with ModernUI styling for headers, rows, and cells.",
    "variant prop for borderless, striped, bordered, and dense layouts.",
    "noWrapper skips the inner overflow container for sticky-header scroll patterns.",
    "Row selection, expandable rows, empty states, and loading skeletons — see Row patterns.",
    "Composable with TanStack Table for sortable, filterable, paginated data grids.",
    "Pair with TanStack Virtual for large datasets — see the virtual rows example.",
  ],
  usage: {
    import: `import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"`,
    example: `<Table variant="striped">
  <TableHeader>...</TableHeader>
  <TableBody>...</TableBody>
</Table>`,
  },
  apiReference: {
    title: "Table Components",
    props: [
      {
        prop: "variant",
        type: '"default" | "borderless" | "striped" | "bordered" | "dense"',
        default: "default",
        description:
          "Visual style applied on the table container. borderless removes row dividers; striped adds zebra backgrounds; bordered adds outer and cell borders; dense reduces padding.",
      },
      {
        prop: "noWrapper",
        type: "boolean",
        default: "false",
        description:
          "When true, renders only the <table> element without the inner overflow wrapper. Use with an outer scroll container for sticky headers.",
      },
      {
        prop: "containerClassName",
        type: "string",
        description:
          "Additional classes on the table container wrapper (ignored when noWrapper is true).",
      },
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
        description:
          "TableRow subcomponent. Supports data-state=\"selected\" for selection highlight.",
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
        description: "Additional CSS classes on the <table> element.",
      },
    ],
    footnote:
      "For data grids, install @tanstack/react-table and compose with flexRender. Full API reference: https://tanstack.com/table/latest. See /components/table#tanstack-sort-filter for sorting and filtering, /components/table#tanstack-pagination-selection for pagination and selection, /components/table#server-async for server-side async data with TanStack Query, /components/table#column-dnd for column reordering, /components/table#inline-edit for inline editing, /components/table#tanstack-virtual for virtual scrolling with @tanstack/react-virtual.",
  },
  cssVariants: [
    {
      title: "Table variants",
      variants: [
        {
          name: "default",
          description: "Standard row dividers and default cell padding.",
        },
        {
          name: "borderless",
          description: "No horizontal row or footer dividers.",
        },
        {
          name: "striped",
          description: "Alternating muted background on even body rows.",
        },
        {
          name: "bordered",
          description: "Rounded outer border plus borders on every cell.",
        },
        {
          name: "dense",
          description: "Compact header height and tighter cell padding.",
        },
        {
          name: "Header border (2px)",
          description:
            "Stronger header divider and bold labels — TableHeader className=\"[&_tr]:border-b-2 [&_[data-slot=table-head]]:font-bold\" — /components/table#header-border",
        },
      ],
    },
    {
      title: "Related patterns",
      variants: [
        {
          name: "Row selection",
          description: "Checkbox column with data-state=\"selected\" — /components/table#selection",
        },
        {
          name: "Expandable rows",
          description: "Detail row with colSpan — /components/table#expandable",
        },
        {
          name: "Sticky header",
          description: "noWrapper + outer scroll — /components/table#sticky-header",
        },
        {
          name: "Data Table",
          description: "Full TanStack composition — /components/data-table",
        },
        {
          name: "Data Product Table",
          description: "DataOS catalog rows — /components/data-product-table",
        },
        {
          name: "Checkbox",
          description: "Selection checkboxes — /components/checkbox#table",
        },
        {
          name: "Skeleton",
          description: "Loading placeholders — /components/skeleton#table",
        },
        {
          name: "Server-side async",
          description: "TanStack Query + manualPagination — /components/table#server-async",
        },
        {
          name: "Column reordering",
          description: "columnOrder + drag headers — /components/table#column-dnd",
        },
        {
          name: "Inline editing",
          description: "Click-to-edit cells — /components/table#inline-edit",
        },
      ],
    },
  ],
  enhancements: [
    {
      enhancement: "@tanstack/react-table",
      benefit:
        "Headless columns, row models, sorting, filtering, pagination, column ordering, and selection. Docs: https://tanstack.com/table/latest",
    },
    {
      enhancement: "@tanstack/react-query",
      benefit:
        "Fetch server-side pages and cache results while manualPagination handles table state. Docs: https://tanstack.com/query/latest",
    },
    {
      enhancement: "@tanstack/react-virtual",
      benefit:
        "Render only visible rows in a fixed-height scroll container for large datasets.",
    },
  ],
}
