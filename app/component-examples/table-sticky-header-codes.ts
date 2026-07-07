export const tableStickyHeaderCodes = {
  install: `npx shadcn@latest add tmdc-io/modern-ui-component/table`,
  full: `import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableStickyHeaderDemo() {
  return (
    <div className="relative max-h-64 w-full overflow-y-auto rounded-md border">
      <Table noWrapper>
        <TableHeader className="bg-background sticky top-0 z-10">
          <TableRow>
            <TableHead className="bg-background">ID</TableHead>
            <TableHead className="bg-background">Description</TableHead>
            <TableHead className="bg-background text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* rows */}
        </TableBody>
      </Table>
    </div>
  )
}

// noWrapper skips the inner overflow wrapper so the outer div owns vertical scroll.
`,
}
