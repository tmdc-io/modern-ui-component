export const tableColumnDndCodes = {
  install: `# https://tanstack.com/table/latest
pnpm add @tanstack/react-table
npx shadcn@latest add @modernui/table
npx shadcn@latest add tmdc-io/modern-ui-component/table`,
  full: `"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnOrderState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Person = {
  id: string
  name: string
  owner: string
  status: string
}

const data: Person[] = [
  { id: "1", name: "Customer 360", owner: "Analytics", status: "Active" },
  { id: "2", name: "Billing Mart", owner: "Finance", status: "Review" },
  { id: "3", name: "Churn Model", owner: "ML", status: "Active" },
]

const columns: ColumnDef<Person>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "owner", header: "Owner" },
  { accessorKey: "status", header: "Status" },
]

export function TableColumnDndDemo() {
  const [columnOrder, setColumnOrder] = React.useState<ColumnOrderState>([
    "name",
    "owner",
    "status",
  ])
  const dragCol = React.useRef<string | null>(null)

  const table = useReactTable({
    data,
    columns,
    state: { columnOrder },
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead
                key={header.id}
                draggable
                onDragStart={() => {
                  dragCol.current = header.column.id
                }}
                onDragOver={(event) => event.preventDefault()}
                onDrop={() => {
                  const from = dragCol.current
                  const to = header.column.id
                  if (!from || from === to) return
                  setColumnOrder((order) => {
                    const next = [...order]
                    const fromIndex = next.indexOf(from)
                    const toIndex = next.indexOf(to)
                    next.splice(fromIndex, 1)
                    next.splice(toIndex, 0, from)
                    return next
                  })
                  dragCol.current = null
                }}
                className="cursor-grab select-none"
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

// For touch/accessibility, consider @dnd-kit/core with SortableContext.
`,
}
