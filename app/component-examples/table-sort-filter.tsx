"use client"

import * as React from "react"
import {
  Column,
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { FilterIcon } from "lucide-react"

import { Badge } from "@/registry/default/ui/badge"
import { Checkbox } from "@/registry/default/ui/checkbox"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/default/ui/popover"
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
  status: "active" | "review" | "shipped"
  score: number
}

const statuses: ProjectRow["status"][] = ["active", "review", "shipped"]

const data: ProjectRow[] = [
  { id: "1", name: "Router docs", status: "active", score: 98 },
  { id: "2", name: "Query cache", status: "review", score: 94 },
  { id: "3", name: "Table filters", status: "shipped", score: 91 },
  { id: "4", name: "Virtual lists", status: "active", score: 88 },
  { id: "5", name: "Form validation", status: "review", score: 85 },
  { id: "6", name: "Theme tokens", status: "shipped", score: 92 },
]

function ColumnSortIcon({
  direction,
}: {
  direction: false | "asc" | "desc"
}) {
  return (
    <span
      className="inline-flex flex-col items-center gap-0.5 leading-none"
      aria-hidden
    >
      <svg
        viewBox="0 0 8 5"
        className={cn(
          "h-1.5 w-3",
          direction === "asc" ? "text-foreground" : "text-muted-foreground/45"
        )}
      >
        <path fill="currentColor" d="M4 0 8 5H0z" />
      </svg>
      <svg
        viewBox="0 0 8 5"
        className={cn(
          "h-1.5 w-3",
          direction === "desc" ? "text-foreground" : "text-muted-foreground/45"
        )}
      >
        <path fill="currentColor" d="M0 0h8L4 5z" />
      </svg>
    </span>
  )
}

const columnHeaderIconClassName =
  "text-muted-foreground hover:text-foreground inline-flex size-4 shrink-0 items-center justify-center rounded-sm transition-colors hover:bg-muted/60"

function ColumnSortButton<TData>({
  column,
  label,
}: {
  column: Column<TData, unknown>
  label: string
}) {
  const sorted = column.getIsSorted()

  return (
    <button
      type="button"
      className={columnHeaderIconClassName}
      onClick={() => column.toggleSorting(sorted === "asc")}
      aria-label={`Sort ${label}`}
    >
      <ColumnSortIcon direction={sorted} />
    </button>
  )
}

function ColumnFilterButton({
  label,
  active,
  children,
}: {
  label: string
  active?: boolean
  children: React.ReactNode
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            columnHeaderIconClassName,
            active && "text-primary bg-primary/10 hover:bg-primary/10"
          )}
          aria-label={`Filter ${label}`}
        >
          <FilterIcon className="size-3" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-56 p-3">
        <PopoverHeader className="px-0 pt-0">
          <PopoverTitle className="text-sm">Filter {label}</PopoverTitle>
        </PopoverHeader>
        <div className="pt-2">{children}</div>
      </PopoverContent>
    </Popover>
  )
}

function ColumnHeader({
  label,
  actions,
}: {
  label: string
  actions?: React.ReactNode
}) {
  return (
    <div className="flex w-full min-w-0 items-center justify-between gap-2">
      <span className="truncate text-sm font-medium">{label}</span>
      {actions ? (
        <div className="flex shrink-0 items-center">{actions}</div>
      ) : null}
    </div>
  )
}

function NameColumnHeader({ column }: { column: Column<ProjectRow, unknown> }) {
  const filterValue = (column.getFilterValue() as string | undefined) ?? ""

  return (
    <ColumnHeader
      label="Project"
      actions={
        <>
          <ColumnSortButton column={column} label="Project" />
          <ColumnFilterButton label="Project" active={Boolean(filterValue)}>
            <Input
              placeholder="Search projects..."
              value={filterValue}
              onChange={(event) => column.setFilterValue(event.target.value)}
              className="h-8 text-xs"
            />
          </ColumnFilterButton>
        </>
      }
    />
  )
}

function StatusFilterCheckboxes({
  column,
}: {
  column: Column<ProjectRow, unknown>
}) {
  const selected =
    (column.getFilterValue() as ProjectRow["status"][] | undefined) ?? []

  const toggleStatus = (status: ProjectRow["status"], checked: boolean) => {
    const next = checked
      ? [...selected, status]
      : selected.filter((value) => value !== status)

    column.setFilterValue(next.length ? next : undefined)
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        {statuses.map((status) => {
          const checked = selected.includes(status)

          return (
            <div key={status} className="flex items-center gap-2">
              <Checkbox
                id={`status-filter-${status}`}
                checked={checked}
                onCheckedChange={(value) =>
                  toggleStatus(status, value === true)
                }
              />
              <Label
                htmlFor={`status-filter-${status}`}
                className="cursor-pointer text-sm font-normal capitalize"
              >
                {status}
              </Label>
            </div>
          )
        })}
      </div>
      {selected.length > 0 ? (
        <button
          type="button"
          className="text-muted-foreground hover:text-foreground text-left text-xs transition-colors"
          onClick={() => column.setFilterValue(undefined)}
        >
          Clear filter
        </button>
      ) : null}
    </div>
  )
}

function StatusColumnHeader({ column }: { column: Column<ProjectRow, unknown> }) {
  const selected =
    (column.getFilterValue() as ProjectRow["status"][] | undefined) ?? []
  const active = selected.length > 0

  return (
    <ColumnHeader
      label="Status"
      actions={
        <ColumnFilterButton label="Status" active={active}>
          <StatusFilterCheckboxes column={column} />
        </ColumnFilterButton>
      }
    />
  )
}

function ScoreColumnHeader({ column }: { column: Column<ProjectRow, unknown> }) {
  const filterValue = (column.getFilterValue() as string | undefined) ?? ""

  return (
    <ColumnHeader
      label="Score"
      actions={
        <>
          <ColumnSortButton column={column} label="Score" />
          <ColumnFilterButton label="Score" active={Boolean(filterValue)}>
            <Input
              type="number"
              min={0}
              max={100}
              placeholder="Minimum score"
              value={filterValue}
              onChange={(event) => column.setFilterValue(event.target.value)}
              className="h-8 text-xs"
            />
          </ColumnFilterButton>
        </>
      }
    />
  )
}

const columns: ColumnDef<ProjectRow>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <NameColumnHeader column={column} />,
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue("name")}</span>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => <StatusColumnHeader column={column} />,
    filterFn: (row, columnId, value) => {
      const selected = value as ProjectRow["status"][] | undefined
      if (!selected?.length) return true
      return selected.includes(row.getValue(columnId) as ProjectRow["status"])
    },
    cell: ({ row }) => (
      <Badge variant="secondary" className="capitalize">
        {row.getValue("status")}
      </Badge>
    ),
  },
  {
    accessorKey: "score",
    header: ({ column }) => <ScoreColumnHeader column={column} />,
    filterFn: (row, columnId, value) => {
      if (!value) return true
      return Number(row.getValue(columnId)) >= Number(value)
    },
    cell: ({ row }) => (
      <div className="text-right tabular-nums">{row.getValue("score")}</div>
    ),
  },
]

export function TableSortFilterPreview() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )

  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnFilters },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  const filteredCount = table.getFilteredRowModel().rows.length

  return (
    <div className="flex w-full flex-col gap-3">
      <span className="text-muted-foreground text-xs">
        {filteredCount} of {data.length} rows — column labels on the left, sort
        and filter icons on the right
      </span>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
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
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
