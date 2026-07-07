import type { ComponentApiDoc } from "@/app/component-variants/types"

export const dataProductTableApi: ComponentApiDoc = {
  features: [
    "DataOS catalog layout with teal product icon, title, and description in the first column.",
    "Outline glossary term pills and optional orange Quality warning badges per row.",
    "Bold 2px header border with short column divider and right-aligned sort/filter controls.",
    "Borderless row backgrounds — horizontal dividers only, no vertical column lines in the body.",
  ],
  usage: {
    import:
      'import { DataProductTable, type DataProductRow } from "@/components/blocks/data-product-table"',
    example: `const rows: DataProductRow[] = [
  {
    id: "cust-intel",
    title: "Customer Intelligence & Segmentation",
    description: "High engagement reflects a strong content strategy.",
    glossaryTerm: "Customer Segmentation",
    showQuality: true,
  },
]

<DataProductTable rows={rows} />`,
  },
  apiReference: {
    title: "DataProductTable Props",
    props: [
      {
        prop: "rows",
        type: "DataProductRow[]",
        description: "Catalog rows rendered in the table body.",
      },
      {
        prop: "className",
        type: "string",
        description: "Optional class on the outer bordered wrapper.",
      },
      {
        prop: "enableSort",
        type: "boolean",
        default: "true",
        description: "Show sort control on the Data Product column header.",
      },
      {
        prop: "enableGlossaryFilter",
        type: "boolean",
        default: "true",
        description: "Show popover filter on the Glossary term column header.",
      },
      {
        prop: "emptyMessage",
        type: "string",
        default: '"No results."',
        description: "Message when filtered rows return empty.",
      },
      {
        prop: "onRowClick",
        type: "(row: DataProductRow) => void",
        description:
          "Fires whenever a row is clicked, independent of selection. Rows become keyboard focusable (Enter/Space).",
      },
      {
        prop: "onRowHover",
        type: "(row: DataProductRow | null) => void",
        description:
          "Fires with the hovered row on mouse enter, and null on mouse leave.",
      },
      {
        prop: "selectable",
        type: "boolean",
        default: "false",
        description:
          "Enable click-to-select with highlighted rows and aria-selected.",
      },
      {
        prop: "multiSelect",
        type: "boolean",
        default: "true",
        description: "Allow more than one row selected at a time.",
      },
      {
        prop: "selectedIds",
        type: "string[]",
        description:
          "Controlled selected row ids. Pair with onSelectionChange.",
      },
      {
        prop: "defaultSelectedIds",
        type: "string[]",
        description: "Initial selected ids for uncontrolled selection.",
      },
      {
        prop: "onSelectionChange",
        type: "(ids: string[]) => void",
        description: "Fires with the next selected row ids when selection changes.",
      },
    ],
    footnote:
      "DataProductRow fields: id, title, description, glossaryTerm?, showQuality?. Also exported: DataProductDataRow, DataProductStaticHeader for custom layouts.",
  },
  enhancements: [
    {
      enhancement: "DataProductTable",
      benefit: "One component — pass rows and get the full DataOS catalog layout",
    },
    {
      enhancement: "DataProductRow type",
      benefit: "One typed model for static config, API mapping, and interactive tables",
    },
    {
      enhancement: "DataProductDataRow",
      benefit: "Reusable row cells when composing a custom table shell",
    },
    {
      enhancement: "DataProductStaticHeader",
      benefit: "Bold header with short column divider — no sort/filter wiring",
    },
    {
      enhancement: "enableSort / enableGlossaryFilter",
      benefit: "Toggle client-side column sort and glossary popover filter",
    },
    {
      enhancement: "Row click & hover",
      benefit: "onRowClick and onRowHover callbacks with keyboard-focusable rows",
    },
    {
      enhancement: "Click-to-select",
      benefit: "Controlled or uncontrolled selection with highlighted rows",
    },
  ],
}
