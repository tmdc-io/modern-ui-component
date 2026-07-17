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

const rows = Array.from({ length: 20 }, (_, index) => ({
  id: String(index + 1).padStart(3, "0"),
  description: \`Invoice line item \${index + 1}\`,
  amount: (120 + index * 17).toFixed(2),
}))

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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium">{row.id}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell className="text-right tabular-nums">
                \${row.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

// noWrapper skips the inner overflow wrapper so the outer div owns vertical scroll.
`,
}
