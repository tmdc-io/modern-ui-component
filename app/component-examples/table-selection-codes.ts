export const tableSelectionCodes = {
  install: `npx shadcn@latest add tmdc-io/modern-ui-component/table
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

export function TableSelectionDemo() {
  const [selected, setSelected] = React.useState<Set<string>>(new Set(["1"]))

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-8">
            <Checkbox aria-label="Select all" />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow data-state={selected.has("1") ? "selected" : undefined}>
          <TableCell>
            <Checkbox checked={selected.has("1")} aria-label="Select row" />
          </TableCell>
          <TableCell className="font-medium">Sarah Chen</TableCell>
          <TableCell>sarah.chen@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
`,
}
