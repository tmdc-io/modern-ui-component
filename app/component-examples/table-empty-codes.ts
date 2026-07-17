export const tableEmptyCodes = {
  install: `npx shadcn@latest add tmdc-io/modern-ui-component/table
npx shadcn@latest add tmdc-io/modern-ui-component/input`,
  full: `"use client"

import * as React from "react"

import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const allRows = [
  { id: "1", name: "Customer 360", owner: "Analytics" },
  { id: "2", name: "Billing Mart", owner: "Finance" },
  { id: "3", name: "Churn Model", owner: "ML" },
]

const columns = [
  { id: "name", header: "Name" },
  { id: "owner", header: "Owner" },
]

export function TableEmptyDemo() {
  const [query, setQuery] = React.useState("zzz")
  const rows = allRows.filter((row) =>
    row.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="space-y-3">
      <Input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Filter projects…"
        className="max-w-xs"
      />
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.id}>{column.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.length ? (
            rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.owner}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
`,
}
