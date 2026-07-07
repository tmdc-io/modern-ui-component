export const TableBorderlessCode = `"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableBorderlessDemo() {
  return (
    <Table variant="borderless">
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

// Bordered wrapper (optional):
// <div className="overflow-hidden rounded-md border">
//   <Table>...</Table>
// </div>
`
