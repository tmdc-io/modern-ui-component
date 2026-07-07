import * as React from "react"
import { MoreHorizontalIcon } from "lucide-react"

import { borderedTableWrapperClassName } from "@/app/component-examples/table-style-classes"
import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
]

function ExampleLabel({
  title,
  bordered,
}: {
  title: string
  bordered?: boolean
}) {
  return (
    <p className="text-muted-foreground mb-2 text-xs font-medium">
      {title}
      {bordered ? " — bordered" : " — borderless"}
    </p>
  )
}

function DefaultTable({ variant }: { variant?: "borderless" }) {
  return (
    <Table variant={variant}>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$850.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

function ActionsTable({ variant }: { variant?: "borderless" }) {
  return (
    <Table variant={variant}>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { name: "Wireless Mouse", price: "$29.99" },
          { name: "Mechanical Keyboard", price: "$129.99" },
        ].map((product) => (
          <TableRow key={product.name}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="size-8">
                    <MoreHorizontalIcon />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

function BorderedWrapper({ children }: { children: React.ReactNode }) {
  return <div className={borderedTableWrapperClassName}>{children}</div>
}

export function TableBorderlessPreview() {
  return (
    <div className="flex w-full flex-col gap-10">
      <section className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Default</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <ExampleLabel title="Default" bordered />
            <BorderedWrapper>
              <DefaultTable />
            </BorderedWrapper>
          </div>
          <div>
            <ExampleLabel title="Default" />
            <DefaultTable variant="borderless" />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Actions</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <ExampleLabel title="Actions" bordered />
            <BorderedWrapper>
              <ActionsTable />
            </BorderedWrapper>
          </div>
          <div>
            <ExampleLabel title="Actions" />
            <ActionsTable variant="borderless" />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Footer</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <ExampleLabel title="Footer" bordered />
            <BorderedWrapper>
              <DefaultTable />
            </BorderedWrapper>
          </div>
          <div>
            <ExampleLabel title="Footer" />
            <DefaultTable variant="borderless" />
          </div>
        </div>
      </section>
    </div>
  )
}
