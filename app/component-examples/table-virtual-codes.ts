export const tableVirtualCodes = {
  install: `# https://tanstack.com/table/latest
pnpm add @tanstack/react-table @tanstack/react-virtual
npx shadcn@latest add @modernui/table
npx shadcn@latest add tmdc-io/modern-ui-component/table`,

  full: `"use client"

import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { useVirtualizer } from "@tanstack/react-virtual"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type ProjectRow = {
  id: string
  name: string
  status: "active" | "review" | "shipped"
  score: number
}

const statuses = ["active", "review", "shipped"] as const

const sampleData: ProjectRow[] = Array.from({ length: 1000 }, (_, index) => ({
  id: String(index + 1),
  name: \`Project \${index + 1}\`,
  status: statuses[index % statuses.length]!,
  score: 40 + ((index * 17) % 60),
}))

const columns: ColumnDef<ProjectRow>[] = [
  { accessorKey: "name", header: "Project" },
  { accessorKey: "status", header: "Status" },
  {
    accessorKey: "score",
    header: () => <div className="text-right">Score</div>,
    cell: ({ row }) => (
      <div className="text-right tabular-nums">{row.getValue("score")}</div>
    ),
  },
]

export function VirtualizedTable({
  data = sampleData,
}: {
  data?: ProjectRow[]
}) {
  const parentRef = React.useRef<HTMLDivElement>(null)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const { rows } = table.getRowModel()

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 40,
    overscan: 10,
  })

  const virtualRows = rowVirtualizer.getVirtualItems()
  const paddingTop = virtualRows.length > 0 ? virtualRows[0]!.start : 0
  const paddingBottom =
    virtualRows.length > 0
      ? rowVirtualizer.getTotalSize() - virtualRows[virtualRows.length - 1]!.end
      : 0

  return (
    <div ref={parentRef} className="h-[400px] overflow-auto rounded-md border">
      <Table>
        <TableHeader className="bg-background sticky top-0 z-10">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
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
          {paddingTop > 0 ? (
            <TableRow aria-hidden>
              <TableCell
                colSpan={columns.length}
                style={{ height: paddingTop }}
              />
            </TableRow>
          ) : null}
          {virtualRows.map((virtualRow) => {
            const row = rows[virtualRow.index]!
            return (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            )
          })}
          {paddingBottom > 0 ? (
            <TableRow aria-hidden>
              <TableCell
                colSpan={columns.length}
                style={{ height: paddingBottom }}
              />
            </TableRow>
          ) : null}
        </TableBody>
      </Table>
    </div>
  )
}

export function TableVirtualDemo() {
  return <VirtualizedTable />
}`,
} as const
