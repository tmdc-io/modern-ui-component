export const tableServerAsyncCodes = {
  install: `# https://tanstack.com/table/latest
pnpm add @tanstack/react-table @tanstack/react-query
npx shadcn@latest add @modernui/table
npx shadcn@latest add tmdc-io/modern-ui-component/table
npx shadcn@latest add @modernui/button
npx shadcn@latest add tmdc-io/modern-ui-component/button`,
  full: `"use client"

import * as React from "react"
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  QueryClient,
  QueryClientProvider,
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type User = {
  id: string
  name: string
  email: string
}

type UsersResponse = {
  rows: User[]
  pageCount: number
  total: number
}

const columns: ColumnDef<User>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
]

async function fetchUsers({
  pageIndex,
  pageSize,
  sorting,
}: {
  pageIndex: number
  pageSize: number
  sorting: SortingState
}): Promise<UsersResponse> {
  const sort = sorting[0]
  const response = await fetch(
    \`/api/users?page=\${pageIndex}&size=\${pageSize}&sort=\${sort?.id ?? ""}&desc=\${sort?.desc ? "1" : "0"}\`
  )
  if (!response.ok) throw new Error("Failed to load users")
  return response.json()
}

function DataTable() {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const [sorting, setSorting] = React.useState<SortingState>([])

  const query = useQuery({
    queryKey: ["users", pagination, sorting],
    queryFn: () =>
      fetchUsers({
        pageIndex: pagination.pageIndex,
        pageSize: pagination.pageSize,
        sorting,
      }),
    placeholderData: keepPreviousData,
  })

  const table = useReactTable({
    data: query.data?.rows ?? [],
    columns,
    pageCount: query.data?.pageCount ?? -1,
    manualPagination: true,
    manualSorting: true,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    state: { pagination, sorting },
  })

  return (
    <div className="space-y-3">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="cursor-pointer"
                  onClick={header.column.getToggleSortingHandler()}
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
      <div className="flex items-center justify-between gap-2">
        <p className="text-muted-foreground text-xs">
          {query.data?.total ?? 0} users
          {query.isFetching ? " · refreshing…" : ""}
        </p>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={!table.getCanPreviousPage() || query.isFetching}
            onClick={() => table.previousPage()}
          >
            Previous
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={!table.getCanNextPage() || query.isFetching}
            onClick={() => table.nextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export function App() {
  const [client] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={client}>
      <DataTable />
    </QueryClientProvider>
  )
}
`,
}
