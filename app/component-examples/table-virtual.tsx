"use client"

import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { useVirtualizer } from "@tanstack/react-virtual"

import { Badge } from "@/registry/default/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"

type ProjectRow = {
  id: string
  name: string
  status: "active" | "review" | "shipped"
  score: number
}

const statuses: ProjectRow["status"][] = ["active", "review", "shipped"]

function makeData(count: number): ProjectRow[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `row-${index + 1}`,
    name: `Project ${index + 1}`,
    status: statuses[index % statuses.length]!,
    score: 60 + ((index * 7) % 40),
  }))
}

const columns: ColumnDef<ProjectRow>[] = [
  {
    accessorKey: "name",
    header: "Project",
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue("name")}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as ProjectRow["status"]
      return (
        <Badge variant="secondary" className="capitalize">
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "score",
    header: () => <div className="text-right">Score</div>,
    cell: ({ row }) => (
      <div className="text-right tabular-nums">{row.getValue("score")}</div>
    ),
  },
]

const data = makeData(800)

export function TableVirtualPreview() {
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
    <div className="flex w-full flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <Badge variant="outline">{data.length.toLocaleString()} rows</Badge>
        <Badge variant="secondary">TanStack Virtual</Badge>
        <span className="text-muted-foreground text-xs">
          Only visible rows are rendered in the DOM.{" "}
          <a
            href="https://tanstack.com/table/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            TanStack Table docs
          </a>
        </span>
      </div>
      <div
        ref={parentRef}
        className="h-[400px] overflow-auto rounded-md border"
      >
        <Table>
          <TableHeader className="bg-background sticky top-0 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
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
                <TableRow key={row.id} data-index={virtualRow.index}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
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
    </div>
  )
}
