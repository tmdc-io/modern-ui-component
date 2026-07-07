export const tablePaginationSelectionCodes = {
  install: `# https://tanstack.com/table/latest
pnpm add @tanstack/react-table
npx shadcn@latest add tmdc-io/modern-ui-component/table
npx shadcn@latest add tmdc-io/modern-ui-component/checkbox
npx shadcn@latest add tmdc-io/modern-ui-component/input
npx shadcn@latest add tmdc-io/modern-ui-component/dropdown-menu
npx shadcn@latest add tmdc-io/modern-ui-component/button`,
  full: `"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
  },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "status", header: "Status" },
]

const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  onRowSelectionChange: setRowSelection,
  onColumnVisibilityChange: setColumnVisibility,
  state: { rowSelection, columnVisibility },
})

// Render with flexRender; add Previous/Next buttons via table.previousPage() / nextPage().
// See /components/data-table for the full reference implementation.
`,
}
