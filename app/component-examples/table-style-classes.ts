import { tableContainerVariants, type TableVariant } from "@/registry/default/ui/table"

/** @deprecated Prefer `<Table variant="borderless" />` */
export const borderlessTableClassNames = {
  header: "[&_tr]:border-0",
  row: "border-0",
  footer: "border-0 bg-transparent",
} as const

/** Wrapper for tables with an outer border when not using variant="bordered". */
export const borderedTableWrapperClassName = "overflow-hidden rounded-md border"

export { tableContainerVariants, type TableVariant }

export const tableVariantOptions = [
  "default",
  "borderless",
  "striped",
  "bordered",
  "dense",
] as const satisfies readonly TableVariant[]
