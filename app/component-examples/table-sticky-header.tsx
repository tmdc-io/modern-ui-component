import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"

const transactions = Array.from({ length: 24 }, (_, index) => ({
  id: `TXN-${String(index + 1).padStart(3, "0")}`,
  description: `Transaction ${index + 1}`,
  amount: `$${(index + 1) * 12.5}.00`,
}))

export function TableStickyHeaderPreview() {
  return (
    <div className="relative max-h-64 w-full overflow-y-auto rounded-md border">
      <Table noWrapper>
        <TableHeader className="bg-background sticky top-0 z-10 shadow-sm">
          <TableRow>
            <TableHead className="bg-background">ID</TableHead>
            <TableHead className="bg-background">Description</TableHead>
            <TableHead className="bg-background text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">{transaction.id}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell className="text-right tabular-nums">
                {transaction.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
