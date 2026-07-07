"use client"

import {
  DataProductTable,
  type DataProductRow,
} from "@/registry/default/blocks/data-product-table/data-product-table"

export type { DataProductRow }
export {
  DataProductDataRow,
  DataProductStaticHeader,
  DataProductTable,
} from "@/registry/default/blocks/data-product-table/data-product-table"

export const sampleRows: DataProductRow[] = [
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
    description:
      "Qualtrics Survey Analytics delivers comprehensive survey response analysis through Qualtri...",
    glossaryTerm: "Survey",
  },
  {
    id: "3",
    title: "Sales Performance & Pipeline Analytics",
    description: "Lower customer acquisition costs improve profitability.",
    glossaryTerm: "Customer",
    showQuality: true,
  },
  {
    id: "4",
    title: "Marketing Attribution & ROI",
    description:
      "Multi-touch attribution models connect campaign spend to revenue outcomes.",
    glossaryTerm: "Campaign",
  },
  {
    id: "5",
    title: "Product Usage & Adoption Metrics",
    description:
      "Feature adoption trends highlight onboarding friction and power-user behavior.",
    glossaryTerm: "Product Analytics",
  },
]

export function TableDataProductPreview() {
  return <DataProductTable rows={sampleRows} />
}
