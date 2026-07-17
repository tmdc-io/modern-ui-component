export const tableSortFilterCodes = {
  install: `# https://tanstack.com/table/latest
pnpm add @tanstack/react-table
npx shadcn@latest add tmdc-io/modern-ui-component/table
npx shadcn@latest add tmdc-io/modern-ui-component/popover
npx shadcn@latest add tmdc-io/modern-ui-component/checkbox
npx shadcn@latest add tmdc-io/modern-ui-component/label
npx shadcn@latest add tmdc-io/modern-ui-component/button`,
  full: `"use client"

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

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

type Status = "active" | "review" | "shipped"

type Project = {
  id: string
  name: string
  status: Status
  owner: string
}

const data: Project[] = [
  { id: "1", name: "Customer 360", status: "active", owner: "Analytics" },
  { id: "2", name: "Billing Mart", status: "review", owner: "Finance" },
  { id: "3", name: "Churn Model", status: "shipped", owner: "ML" },
  { id: "4", name: "Fraud Scores", status: "active", owner: "Risk" },
]

const statuses: Status[] = ["active", "review", "shipped"]

function ColumnSortIcon({
  direction,
}: {
  direction: false | "asc" | "desc"
}) {
  return (
    <span className="inline-flex flex-col items-center gap-px leading-none" aria-hidden>
      <svg width="8" height="5" viewBox="0 0 8 5" className={direction === "asc" ? "text-foreground" : "text-muted-foreground/45"}>
        <path fill="currentColor" d="M4 0 8 5H0z" />
      </svg>
      <svg width="8" height="5" viewBox="0 0 8 5" className={direction === "desc" ? "text-foreground" : "text-muted-foreground/45"}>
        <path fill="currentColor" d="M0 0h8L4 5z" />
      </svg>
    </span>
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
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={cn("size-7", active && "text-primary bg-primary/10")}
          aria-label={\`Filter \${label}\`}
        >
          <FilterIcon className="size-3.5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-56 p-3">
        <PopoverHeader className="px-0 pt-0">
          <PopoverTitle className="text-sm">Filter {label}</PopoverTitle>
        </PopoverHeader>
        <div className="space-y-2 pt-2">{children}</div>
      </PopoverContent>
    </Popover>
  )
}

function SortableColumnHeader<TData>({
  column,
  label,
}: {
  column: Column<TData, unknown>
  label: string
}) {
  const sorted = column.getIsSorted()

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="size-7"
      onClick={() => column.toggleSorting(sorted === "asc")}
      aria-label={\`Sort \${label}\`}
    >
      <ColumnSortIcon direction={sorted} />
    </Button>
  )
}

const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <div className="flex w-full items-center justify-between gap-2">
        <span>Project</span>
        <SortableColumnHeader column={column} label="Project" />
      </div>
    ),
  },
  {
    accessorKey: "status",
    filterFn: (row, columnId, value) => {
      const selected = value as Status[] | undefined
      if (!selected?.length) return true
      return selected.includes(row.getValue(columnId) as Status)
    },
    header: ({ column }) => {
      const selected = (column.getFilterValue() as Status[] | undefined) ?? []
      return (
        <div className="flex w-full items-center justify-between gap-2">
          <span>Status</span>
          <div className="flex shrink-0 items-center">
            <SortableColumnHeader column={column} label="Status" />
            <ColumnFilterButton label="Status" active={selected.length > 0}>
              {statuses.map((status) => (
                <div key={status} className="flex items-center gap-2">
                  <Checkbox
                    id={\`status-\${status}\`}
                    checked={selected.includes(status)}
                    onCheckedChange={(checked) => {
                      const next = checked
                        ? [...selected, status]
                        : selected.filter((item) => item !== status)
                      column.setFilterValue(next.length ? next : undefined)
                    }}
                  />
                  <Label htmlFor={\`status-\${status}\`} className="capitalize">
                    {status}
                  </Label>
                </div>
              ))}
            </ColumnFilterButton>
          </div>
        </div>
      )
    },
  },
  { accessorKey: "owner", header: "Owner" },
]

export function TableSortFilterDemo() {
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

  return (
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
`,
}
