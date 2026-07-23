export const tableLoadingCodes = {
  install: `npx shadcn@latest add @modernui/table
npx shadcn@latest add tmdc-io/modern-ui-component/table
npx shadcn@latest add @modernui/skeleton
npx shadcn@latest add tmdc-io/modern-ui-component/skeleton`,
  full: `import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableLoadingDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 5 }).map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <Skeleton className="h-4 w-32 bg-cream" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-20 bg-cream" />
            </TableCell>
            <TableCell className="text-right">
              <Skeleton className="ml-auto h-4 w-16 bg-cream" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
`,
}
