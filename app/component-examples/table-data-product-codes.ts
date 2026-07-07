export const tableDataProductCodes = {
  install: `npx shadcn@latest add tmdc-io/modern-ui-component/data-product-table`,

  props: `type DataProductRow = {
  id: string
  title: string
  description: string
  glossaryTerm?: string
  showQuality?: boolean   // when true, render the orange Quality badge
}

type DataProductTableProps = {
  rows: DataProductRow[]
  className?: string
  enableSort?: boolean              // default true
  enableGlossaryFilter?: boolean    // default true
  emptyMessage?: string
  onRowClick?: (row: DataProductRow) => void
  onRowHover?: (row: DataProductRow | null) => void
  selectable?: boolean              // click-to-select + highlight
  multiSelect?: boolean             // default true
  selectedIds?: string[]            // controlled selection
  defaultSelectedIds?: string[]     // uncontrolled initial selection
  onSelectionChange?: (ids: string[]) => void
}`,

  static: `"use client"

import {
  DataProductTable,
  type DataProductRow,
} from "@/components/blocks/data-product-table"

const rows: DataProductRow[] = [
  {
    id: "1",
    title: "Customer Intelligence & Segmentation",
    description: "High engagement reflects a strong content strategy.",
    glossaryTerm: "Customer Segmentation",
    showQuality: true,
  },
  {
    id: "2",
    title: "Qualtrics Survey Analytics",
    description: "Comprehensive survey response analysis.",
    glossaryTerm: "Survey",
  },
]

export function DataProductCatalog() {
  return (
    <DataProductTable
      rows={rows}
      enableSort={false}
      enableGlossaryFilter={false}
    />
  )
}`,

  rows: `"use client"

import {
  DataProductTable,
  type DataProductRow,
} from "@/components/blocks/data-product-table"

const rows: DataProductRow[] = [
  {
    id: "cust-intel",
    title: "Customer Intelligence & Segmentation",
    description: "High engagement reflects a strong content strategy.",
    glossaryTerm: "Customer Segmentation",
    showQuality: true,
  },
  {
    id: "qualtrics",
    title: "Qualtrics Survey Analytics",
    description: "Comprehensive survey response analysis.",
    glossaryTerm: "Survey",
  },
]

export function DataProductCatalog({ data }: { data: DataProductRow[] }) {
  return (
    <DataProductTable
      rows={data}
      enableSort={false}
      enableGlossaryFilter={false}
    />
  )
}

// Usage
<DataProductCatalog data={rows} />`,

  api: `"use client"

import * as React from "react"
import useSWR from "swr"
import {
  DataProductTable,
  type DataProductRow,
} from "@/components/blocks/data-product-table"
import { Skeleton } from "@/components/ui/skeleton"

type CatalogApiProduct = {
  id: string
  name: string
  summary: string
  glossaryLabel?: string
  qualityAlert?: boolean
}

function mapCatalogApiToRows(products: CatalogApiProduct[]): DataProductRow[] {
  return products.map((product) => ({
    id: product.id,
    title: product.name,
    description: product.summary,
    glossaryTerm: product.glossaryLabel,
    showQuality: product.qualityAlert,
  }))
}

export function DataProductCatalogPage() {
  const { data, isLoading } = useSWR<CatalogApiProduct[]>("/api/catalog/products", fetcher)
  const rows = React.useMemo(
    () => (data ? mapCatalogApiToRows(data) : []),
    [data]
  )

  if (isLoading) return <Skeleton className="h-96 w-full" />

  return <DataProductTable rows={rows} />
}`,

  sortFilter: `"use client"

import {
  DataProductTable,
  type DataProductRow,
} from "@/components/blocks/data-product-table"

const rows: DataProductRow[] = [
  {
    id: "1",
    title: "Customer Intelligence & Segmentation",
    description: "High engagement reflects a strong content strategy.",
    glossaryTerm: "Customer Segmentation",
    showQuality: true,
  },
  {
    id: "2",
    title: "Qualtrics Survey Analytics",
    description: "Comprehensive survey response analysis.",
    glossaryTerm: "Survey",
  },
]

export function DataProductCatalogInteractive() {
  return (
    <DataProductTable
      rows={rows}
      enableSort
      enableGlossaryFilter
    />
  )
}`,

  selectable: `"use client"

import * as React from "react"
import {
  DataProductTable,
  type DataProductRow,
} from "@/components/blocks/data-product-table"

export function DataProductCatalogSelectable({ rows }: { rows: DataProductRow[] }) {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([])
  const [hovered, setHovered] = React.useState<DataProductRow | null>(null)

  return (
    <DataProductTable
      rows={rows}
      // click-to-select with row highlighting (controlled)
      selectable
      selectedIds={selectedIds}
      onSelectionChange={setSelectedIds}
      // single-select instead of multi: add multiSelect={false}
      // fires on every row click, independent of selection
      onRowClick={(row) => {
        console.log("row clicked:", row.id)
      }}
      // fires with the hovered row, or null on mouse leave
      onRowHover={(row) => setHovered(row)}
    />
  )
}

// Uncontrolled variant — let the table own selection state:
// <DataProductTable rows={rows} selectable defaultSelectedIds={["1"]} />`,

  rowMarkup: `import { AlertTriangleIcon, BoxIcon, FileTextIcon } from "lucide-react"
import { TableCell, TableRow } from "@/components/ui/table"
import type { DataProductRow } from "@/components/blocks/data-product-table"

// Exported from the block for custom table layouts:
import { DataProductDataRow } from "@/components/blocks/data-product-table"

export function CustomCatalogRow({ row }: { row: DataProductRow }) {
  return <DataProductDataRow row={row} />
}

// Or copy the cell markup directly:
export function DataProductDataRow({ row }: { row: DataProductRow }) {
  return (
    <TableRow className="border-border bg-transparent">
      <TableCell className="px-4 py-5 align-top">
        <div className="flex gap-3">
          <div className="border-teal-bg-1 bg-teal-bg-2 flex size-10 shrink-0 items-center justify-center rounded-lg border">
            <BoxIcon className="size-[18px]" strokeWidth={1.5} />
          </div>
          <div className="min-w-0 space-y-1">
            <p className="text-sm font-semibold">{row.title}</p>
            <p className="text-muted-foreground line-clamp-2 text-sm">{row.description}</p>
          </div>
        </div>
      </TableCell>
      <TableCell className="px-4 py-5 align-middle">
        {row.glossaryTerm ? (
          <span className="border-grey-8 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs">
            <FileTextIcon className="text-muted-foreground size-3.5" />
            {row.glossaryTerm}
          </span>
        ) : null}
      </TableCell>
      <TableCell className="px-4 py-5 text-right align-middle">
        {row.showQuality ? (
          <span className="inline-flex items-center gap-1 rounded-md bg-[#FFF0E6] px-2.5 py-1 text-xs font-medium">
            <AlertTriangleIcon className="size-3.5 fill-[#E68600] text-[#E68600]" />
            Quality
          </span>
        ) : null}
      </TableCell>
    </TableRow>
  )
}`,

  full: `"use client"

import {
  DataProductTable,
  type DataProductRow,
} from "@/components/blocks/data-product-table"

const rows: DataProductRow[] = [
  {
    id: "1",
    title: "Customer Intelligence & Segmentation",
    description: "High engagement reflects a strong content strategy.",
    glossaryTerm: "Customer Segmentation",
    showQuality: true,
  },
]

export function TableDataProductDemo() {
  return <DataProductTable rows={rows} />
}
`,
}
