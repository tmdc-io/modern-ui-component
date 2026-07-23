export const tableExpandableCodes = {
  install: `npx shadcn@latest add @modernui/table
npx shadcn@latest add tmdc-io/modern-ui-component/table
npx shadcn@latest add @modernui/button
npx shadcn@latest add tmdc-io/modern-ui-component/button`,
  full: `"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableExpandableDemo() {
  const [expanded, setExpanded] = React.useState(false)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-8" />
          <TableHead>Project</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setExpanded((open) => !open)}
              aria-expanded={expanded}
            >
              <ChevronDownIcon />
            </Button>
          </TableCell>
          <TableCell className="font-medium">Router docs</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        {expanded ? (
          <TableRow>
            <TableCell colSpan={3} className="bg-muted/30 text-sm">
              Expanded row detail content spans all columns.
            </TableCell>
          </TableRow>
        ) : null}
      </TableBody>
    </Table>
  )
}
`,
}
