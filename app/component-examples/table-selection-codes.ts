export const tableSelectionCodes = {
  install: `npx shadcn@latest add @modernui/table
npx shadcn@latest add tmdc-io/modern-ui-component/table
npx shadcn@latest add @modernui/checkbox
npx shadcn@latest add tmdc-io/modern-ui-component/checkbox`,
  full: `"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const rows = [
  { id: "1", name: "Sarah Chen", email: "sarah.chen@example.com" },
  { id: "2", name: "Amit Shah", email: "amit.shah@example.com" },
  { id: "3", name: "Kris Meyer", email: "kris.meyer@example.com" },
]

export function TableSelectionDemo() {
  const [selected, setSelected] = React.useState<Set<string>>(new Set(["1"]))
  const allSelected = selected.size === rows.length
  const someSelected = selected.size > 0 && !allSelected

  function toggleAll(checked: boolean) {
    setSelected(checked ? new Set(rows.map((row) => row.id)) : new Set())
  }

  function toggleRow(id: string, checked: boolean) {
    setSelected((current) => {
      const next = new Set(current)
      if (checked) next.add(id)
      else next.delete(id)
      return next
    })
  }

  return (
    <div className="space-y-3">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8">
              <Checkbox
                checked={allSelected || (someSelected && "indeterminate")}
                onCheckedChange={(value) => toggleAll(!!value)}
                aria-label="Select all"
              />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={selected.has(row.id) ? "selected" : undefined}
            >
              <TableCell>
                <Checkbox
                  checked={selected.has(row.id)}
                  onCheckedChange={(value) => toggleRow(row.id, !!value)}
                  aria-label={\`Select \${row.name}\`}
                />
              </TableCell>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="text-muted-foreground text-xs">
        Selected: {Array.from(selected).join(", ") || "none"}
      </p>
    </div>
  )
}
`,
}
