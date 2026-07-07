export const tableSortFilterCodes = {
  install: `# https://tanstack.com/table/latest
pnpm add @tanstack/react-table
npx shadcn@latest add tmdc-io/modern-ui-component/table
npx shadcn@latest add tmdc-io/modern-ui-component/popover
npx shadcn@latest add tmdc-io/modern-ui-component/checkbox
npx shadcn@latest add tmdc-io/modern-ui-component/label`,
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
import { Input } from "@/components/ui/input"
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

// ColumnHeader: label left, sort + filter icon buttons right
// <div className="flex w-full items-center justify-between gap-2">
//   <span>{label}</span>
//   <div className="flex shrink-0 items-center">
//     <ColumnSortButton />  // icon-only, stacked triangles
//     <ColumnFilterButton />  // funnel icon opens Popover
//   </div>
// </div>

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
        <div className="pt-2">{children}</div>
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

// Compose column headers with SortableColumnHeader + ColumnFilterButton.
// Status filter example: checkbox multi-select in the popover.
//
// filterFn: (row, columnId, value) => {
//   const selected = value as Status[] | undefined
//   if (!selected?.length) return true
//   return selected.includes(row.getValue(columnId) as Status)
// }
//
// <ColumnFilterButton label="Status" active={selected.length > 0}>
//   {statuses.map((status) => (
//     <div key={status} className="flex items-center gap-2">
//       <Checkbox checked={selected.includes(status)} onCheckedChange={...} />
//       <Label className="capitalize">{status}</Label>
//     </div>
//   ))}
// </ColumnFilterButton>
//
// Wire getSortedRowModel() and getFilteredRowModel() in useReactTable.
`,
}
