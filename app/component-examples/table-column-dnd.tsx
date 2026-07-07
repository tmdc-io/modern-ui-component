"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnOrderState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { GripVerticalIcon } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"
import { cn } from "@/lib/utils"

type ProjectRow = {
  id: string
  name: string
  owner: string
  status: string
}

const data: ProjectRow[] = [
  { id: "1", name: "Router docs", owner: "Sarah", status: "Active" },
  { id: "2", name: "Query cache", owner: "Marcus", status: "Review" },
  { id: "3", name: "Table filters", owner: "Priya", status: "Shipped" },
  { id: "4", name: "Theme tokens", owner: "David", status: "Active" },
]

const columns: ColumnDef<ProjectRow>[] = [
  { accessorKey: "name", header: "Project" },
  { accessorKey: "owner", header: "Owner" },
  { accessorKey: "status", header: "Status" },
]

const defaultColumnOrder = ["name", "owner", "status"]

function reorderColumns(order: string[], sourceId: string, targetId: string) {
  const next = order.filter((id) => id !== sourceId)
  const targetIndex = next.indexOf(targetId)
  next.splice(targetIndex, 0, sourceId)
  return next
}

export function TableColumnDndPreview() {
  const [columnOrder, setColumnOrder] =
    React.useState<ColumnOrderState>(defaultColumnOrder)
  const [draggingId, setDraggingId] = React.useState<string | null>(null)

  const table = useReactTable({
    data,
    columns,
    state: { columnOrder },
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="flex w-full flex-col gap-2">
      <span className="text-muted-foreground text-xs">
        Drag column headers to reorder — order: {columnOrder.join(" → ")}
      </span>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    draggable
                    className={cn(
                      "select-none",
                      draggingId === header.column.id && "opacity-50"
                    )}
                    onDragStart={(event) => {
                      setDraggingId(header.column.id)
                      event.dataTransfer.effectAllowed = "move"
                      event.dataTransfer.setData(
                        "text/plain",
                        header.column.id
                      )
                    }}
                    onDragOver={(event) => event.preventDefault()}
                    onDrop={(event) => {
                      event.preventDefault()
                      const sourceId = event.dataTransfer.getData("text/plain")
                      if (!sourceId || sourceId === header.column.id) return
                      setColumnOrder((current) =>
                        reorderColumns(current, sourceId, header.column.id)
                      )
                      setDraggingId(null)
                    }}
                    onDragEnd={() => setDraggingId(null)}
                  >
                    <div className="flex items-center gap-1.5">
                      <GripVerticalIcon className="text-muted-foreground size-3.5 shrink-0 cursor-grab active:cursor-grabbing" />
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </div>
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
      </div>
    </div>
  )
}
