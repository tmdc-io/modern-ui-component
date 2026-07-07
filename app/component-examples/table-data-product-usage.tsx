"use client"

import * as React from "react"

import {
  DataProductTable,
  sampleRows,
  type DataProductRow,
} from "@/app/component-examples/table-data-product"

export { TableDataProductPreview } from "@/app/component-examples/table-data-product"

export function TableDataProductStaticPreview() {
  return (
    <DataProductTable
      rows={sampleRows.slice(0, 3)}
      enableSort={false}
      enableGlossaryFilter={false}
    />
  )
}

type CatalogApiProduct = {
  id: string
  name: string
  summary: string
  glossaryLabel?: string
  qualityAlert?: boolean
}

const catalogApiResponse: CatalogApiProduct[] = [
  {
    id: "cust-intel",
    name: "Customer Intelligence & Segmentation",
    summary: "High engagement reflects a strong content strategy.",
    glossaryLabel: "Customer Segmentation",
    qualityAlert: true,
  },
  {
    id: "qualtrics",
    name: "Qualtrics Survey Analytics",
    summary:
      "Qualtrics Survey Analytics delivers comprehensive survey response analysis.",
    glossaryLabel: "Survey",
  },
  {
    id: "sales-pipeline",
    name: "Sales Performance & Pipeline Analytics",
    summary: "Lower customer acquisition costs improve profitability.",
    glossaryLabel: "Customer",
    qualityAlert: true,
  },
]

function mapCatalogApiToRows(products: CatalogApiProduct[]): DataProductRow[] {
  return products.map((product) => ({
    id: product.id,
    title: product.name,
    description: product.summary,
    glossaryTerm: product.glossaryLabel,
    showQuality: product.qualityAlert,
  }))
}

export function TableDataProductDataDrivenPreview() {
  const rows = React.useMemo(
    () => mapCatalogApiToRows(catalogApiResponse),
    []
  )

  return (
    <DataProductTable
      rows={rows}
      enableSort={false}
      enableGlossaryFilter={false}
    />
  )
}

export function TableDataProductSelectablePreview() {
  const [selectedIds, setSelectedIds] = React.useState<string[]>(["1"])
  const [hoveredId, setHoveredId] = React.useState<string | null>(null)

  return (
    <div className="flex w-full flex-col gap-3">
      <DataProductTable
        rows={sampleRows.slice(0, 4)}
        enableSort={false}
        enableGlossaryFilter={false}
        selectable
        selectedIds={selectedIds}
        onSelectionChange={setSelectedIds}
        onRowClick={(row) => console.log("clicked", row.id)}
        onRowHover={(row) => setHoveredId(row?.id ?? null)}
      />
      <p className="text-muted-foreground text-xs">
        Selected: {selectedIds.length ? selectedIds.join(", ") : "none"}
        {hoveredId ? ` • Hovering ${hoveredId}` : ""}
      </p>
    </div>
  )
}
