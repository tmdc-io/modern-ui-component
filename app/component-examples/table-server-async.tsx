"use client"

import * as React from "react"
import {
  ColumnDef,
  PaginationState,
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
import { ArrowUpDown, Loader2Icon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"

type UserRow = {
  id: string
  name: string
  email: string
  role: string
}

const ALL_USERS: UserRow[] = Array.from({ length: 47 }, (_, index) => ({
  id: `user-${index + 1}`,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  role: index % 3 === 0 ? "Admin" : index % 2 === 0 ? "Editor" : "Viewer",
}))

async function fetchUsers({
  pageIndex,
  pageSize,
  sorting,
}: {
  pageIndex: number
  pageSize: number
  sorting: SortingState
}) {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const rows = [...ALL_USERS]

  if (sorting[0]) {
    const { id, desc } = sorting[0]
    rows.sort((a, b) => {
      const left = String(a[id as keyof UserRow] ?? "")
      const right = String(b[id as keyof UserRow] ?? "")
      return desc ? right.localeCompare(left) : left.localeCompare(right)
    })
  }

  const start = pageIndex * pageSize

  return {
    rows: rows.slice(start, start + pageSize),
    pageCount: Math.ceil(rows.length / pageSize),
    total: rows.length,
  }
}

const columns: ColumnDef<UserRow>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        size="sm"
        className="-ml-2 h-8"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ArrowUpDown className="size-3.5" />
      </Button>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <span className="lowercase">{row.getValue("email")}</span>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
  },
]

function TableServerAsyncInner() {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })
  const [sorting, setSorting] = React.useState<SortingState>([])

  const query = useQuery({
    queryKey: ["table-users", pagination, sorting],
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
    <div className="flex w-full flex-col gap-2">
      <div className="text-muted-foreground flex items-center gap-2 text-xs">
        {query.isFetching ? (
          <>
            <Loader2Icon className="size-3 animate-spin" />
            Fetching page…
          </>
        ) : (
          <span>
            {query.data?.total ?? 0} total rows — server-side pagination &
            sorting via TanStack Query
          </span>
        )}
      </div>
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
                  {query.isLoading ? "Loading…" : "No results."}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between gap-2 py-2">
        <span className="text-muted-foreground text-sm">
          Page {pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage() || query.isFetching}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage() || query.isFetching}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export function TableServerAsyncPreview() {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: 30_000, retry: false },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <TableServerAsyncInner />
    </QueryClientProvider>
  )
}
