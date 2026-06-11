import type { ComponentApiDoc } from "@/app/component-variants/types"

export const dataTableApi: ComponentApiDoc = {
  features: [
    "Sortable, filterable, and paginated data tables with TanStack Table.",
    "Composed from the Table primitive plus column definitions.",
    "Supports row selection, column visibility, and faceted filtering.",
    "Virtual row scrolling with TanStack Virtual for large client-side datasets.",
  ],
  intro:
    "Data Table is a composition pattern — not a standalone component. Install the Table primitive and @tanstack/react-table, then wire columns and row models with useReactTable. Full TanStack Table documentation: https://tanstack.com/table/latest",
  usage: {
    import: `import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"`,
    example: `const columns: ColumnDef<Payment>[] = [
  { accessorKey: "email", header: "Email" },
  { accessorKey: "status", header: "Status" },
]

const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
})

return (
  <Table>
    <TableHeader>
      {table.getHeaderGroups().map((group) => (
        <TableRow key={group.id}>
          {group.headers.map((header) => (
            <TableHead key={header.id}>
              {flexRender(header.column.columnDef.header, header.getContext())}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>
    <TableBody>{/* render rows with flexRender */}</TableBody>
  </Table>
)`,
  },
  apiReference: {
    title: "useReactTable Options",
    props: [
      {
        prop: "data",
        type: "TData[]",
        description: "Array of row objects displayed in the table.",
      },
      {
        prop: "columns",
        type: "ColumnDef<TData>[]",
        description:
          "Column definitions with accessorKey, header, cell, enableSorting, and enableHiding.",
      },
      {
        prop: "state",
        type: "Partial<TableState>",
        description:
          "Controlled state for sorting, columnFilters, columnVisibility, and rowSelection.",
      },
      {
        prop: "onSortingChange",
        type: "OnChangeFn<SortingState>",
        description: "Updater called when sort order changes.",
      },
      {
        prop: "onColumnFiltersChange",
        type: "OnChangeFn<ColumnFiltersState>",
        description: "Updater called when column filters change.",
      },
      {
        prop: "onColumnVisibilityChange",
        type: "OnChangeFn<VisibilityState>",
        description: "Updater called when column visibility toggles.",
      },
      {
        prop: "onRowSelectionChange",
        type: "OnChangeFn<RowSelectionState>",
        description: "Updater called when row selection changes.",
      },
      {
        prop: "getCoreRowModel",
        type: "() => RowModel<TData>",
        description: "Required row model — provides base rows from data.",
      },
      {
        prop: "getSortedRowModel",
        type: "() => RowModel<TData>",
        description: "Enables client-side sorting.",
      },
      {
        prop: "getFilteredRowModel",
        type: "() => RowModel<TData>",
        description: "Enables client-side column filtering.",
      },
      {
        prop: "getPaginationRowModel",
        type: "() => RowModel<TData>",
        description: "Enables client-side pagination.",
      },
      {
        prop: "useVirtualizer (TanStack Virtual)",
        type: "options",
        description:
          "count — row count from table.getRowModel().rows; getScrollElement — scroll container ref; estimateSize — row height in px; overscan — extra rows rendered above/below viewport.",
      },
    ],
    footnote:
      "Install @tanstack/react-table alongside the Table component. Full documentation: https://tanstack.com/table/latest. For virtual rows, also install @tanstack/react-virtual — see #tanstack-virtual and https://tanstack.com/table/v8/docs/guide/virtualization.",
  },
  cssVariants: [
    {
      title: "Related Components",
      variants: [
        {
          name: "Table",
          description: "Semantic table wrapper used to render header and body rows.",
        },
        {
          name: "Input",
          description: "Commonly used for per-column filter inputs.",
        },
        {
          name: "DropdownMenu",
          description: "Used for column visibility toggles and row actions.",
        },
        {
          name: "Checkbox",
          description: "Used for select-all and per-row selection columns.",
        },
        {
          name: "Button",
          description: "Used for sort toggles and pagination controls.",
        },
        {
          name: "@tanstack/react-virtual",
          description:
            "Optional — virtualize rows for large datasets instead of pagination.",
        },
      ],
    },
  ],
}
