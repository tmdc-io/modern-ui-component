export const tableStripedCodes = {
  install: `npx shadcn@latest add tmdc-io/modern-ui-component/table`,
  full: `import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableStripedDemo() {
  return (
    <Table variant="striped">
      <TableHeader>
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
`,
}
