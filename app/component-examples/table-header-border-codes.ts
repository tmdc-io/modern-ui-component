export const tableHeaderBorderCodes = {
  install: `npx shadcn@latest add tmdc-io/modern-ui-component/table`,
  full: `import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableHeaderBorderDemo() {
  return (
    <Table>
      <TableHeader className="[&_tr]:border-b-2 [&_[data-slot=table-head]]:font-bold">
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell className="text-right tabular-nums">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

// TableHeader defaults to [&_tr]:border-b (1px) and TableHead uses font-medium.
// Use border-b-2 for a stronger divider and font-bold on header cells.
`,
}
