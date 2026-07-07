export const tableColumnDndCodes = {
  install: `# https://tanstack.com/table/latest
pnpm add @tanstack/react-table
npx shadcn@latest add tmdc-io/modern-ui-component/table`,
  full: `"use client"

import {
  ColumnOrderState,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([
  "name",
  "owner",
  "status",
])

const table = useReactTable({
  data,
  columns,
  state: { columnOrder },
  onColumnOrderChange: setColumnOrder,
  getCoreRowModel: getCoreRowModel(),
})

// Drag headers with HTML5 DnD:
// onDragStart -> dataTransfer.setData("text/plain", column.id)
// onDrop -> reorder columnOrder array and call setColumnOrder

// For touch/accessibility, consider @dnd-kit/core with SortableContext.
`,
}
