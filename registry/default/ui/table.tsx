"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const tableContainerVariants = cva("relative w-full overflow-x-auto", {
  variants: {
    variant: {
      default: "",
      borderless: cn(
        "[&_[data-slot=table-header]_tr]:border-0",
        "[&_[data-slot=table-row]]:border-0",
        "[&_[data-slot=table-footer]]:border-0"
      ),
      striped:
        "[&_[data-slot=table-body]_tr:nth-child(even)]:bg-muted/50",
      bordered: cn(
        "overflow-hidden rounded-md border",
        "[&_[data-slot=table-head]]:border [&_[data-slot=table-cell]]:border",
        "[&_[data-slot=table-head]]:border-border [&_[data-slot=table-cell]]:border-border"
      ),
      dense: cn(
        "[&_[data-slot=table-head]]:h-8 [&_[data-slot=table-head]]:px-1.5",
        "[&_[data-slot=table-cell]]:px-1.5 [&_[data-slot=table-cell]]:py-1"
      ),
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

type TableProps = React.ComponentProps<"table"> &
  VariantProps<typeof tableContainerVariants> & {
    noWrapper?: boolean
    containerClassName?: string
  }

function Table({
  className,
  variant,
  noWrapper,
  containerClassName,
  ...props
}: TableProps) {
  const table = (
    <table
      data-slot="table"
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  )

  if (noWrapper) {
    return table
  }

  return (
    <div
      data-slot="table-container"
      data-variant={variant ?? "default"}
      className={cn(
        tableContainerVariants({ variant }),
        containerClassName
      )}
    >
      {table}
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  tableContainerVariants,
}
export type TableVariant = NonNullable<
  VariantProps<typeof tableContainerVariants>["variant"]
>
