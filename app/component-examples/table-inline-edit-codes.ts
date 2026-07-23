export const tableInlineEditCodes = {
  install: `npx shadcn@latest add @modernui/table
npx shadcn@latest add tmdc-io/modern-ui-component/table
npx shadcn@latest add @modernui/input
npx shadcn@latest add tmdc-io/modern-ui-component/input
npx shadcn@latest add @modernui/button
npx shadcn@latest add tmdc-io/modern-ui-component/button`,
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

export function TableInlineEditDemo() {
  const [editingId, setEditingId] = React.useState<string | null>(null)
  const [draft, setDraft] = React.useState("")
  const [rows, setRows] = React.useState([{ id: "1", title: "Update docs" }])

  const save = (id: string) => {
    setRows((current) =>
      current.map((row) =>
        row.id === id ? { ...row, title: draft.trim() || row.title } : row
      )
    )
    setEditingId(null)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>
              {editingId === row.id ? (
                <Input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") save(row.id)
                    if (e.key === "Escape") setEditingId(null)
                  }}
                  autoFocus
                />
              ) : (
                <button type="button" onClick={() => { setEditingId(row.id); setDraft(row.title) }}>
                  {row.title}
                </button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
`,
}
