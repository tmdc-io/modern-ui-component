export const tableServerAsyncCodes = {
  install: `# https://tanstack.com/table/latest
pnpm add @tanstack/react-table @tanstack/react-query
npx shadcn@latest add tmdc-io/modern-ui-component/table
npx shadcn@latest add tmdc-io/modern-ui-component/button`,
  full: `"use client"

import {
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  QueryClient,
  QueryClientProvider,
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query"

async function fetchUsers({ pageIndex, pageSize, sorting }) {
  const response = await fetch(
    \`/api/users?page=\${pageIndex}&size=\${pageSize}&sort=\${sorting[0]?.id}\`
  )
  return response.json() // { rows, pageCount, total }
}

function DataTable() {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 })
  const [sorting, setSorting] = useState([])

  const query = useQuery({
    queryKey: ["users", pagination, sorting],
    queryFn: () => fetchUsers({ pageIndex: pagination.pageIndex, pageSize: pagination.pageSize, sorting }),
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

  // Render with flexRender; disable pagination buttons while query.isFetching
}

export function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <DataTable />
    </QueryClientProvider>
  )
}
`,
}
