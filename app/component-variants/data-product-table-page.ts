import {
  TableDataProductDataDrivenPreview,
  TableDataProductPreview,
  TableDataProductSelectablePreview,
  TableDataProductStaticPreview,
} from "@/app/component-examples/table-data-product-usage"
import { tableDataProductCodes } from "@/app/component-examples/table-data-product-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const dataProductTablePage: ComponentVariantPage = {
  name: "data-product-table",
  title: "Data Product Table",
  description:
    "DataOS catalog table with product icon, glossary term pills, quality badges, and sort/filter headers.",
  install: tableDataProductCodes.install,
  sections: [
    {
      id: "preview",
      variants: [
        {
          id: "preview",
          title: "Preview",
          description:
            "Interactive catalog with sort on Data Product and filter on Glossary term.",
          body: "Compose Table, Popover, and Input primitives — map your catalog API into typed rows and wire header controls in client state.",
          Preview: TableDataProductPreview,
          code: tableDataProductCodes.sortFilter,
          tall: true,
        },
      ],
    },
    {
      id: "row-data",
      title: "Row data shape",
      description:
        "Pass an array of DataProductRow objects — each row drives product, glossary, and quality cells.",
      body: "Define a typed row model and map API fields once. Reuse DataProductDataRow for consistent cell markup across pages.",
      variants: [
        {
          id: "row-data",
          title: "Row data prop",
          description: "One array from your API or static config.",
          body: "Map catalog API fields into DataProductRow[] once and reuse across table variants.",
          Preview: TableDataProductDataDrivenPreview,
          code: tableDataProductCodes.rows,
          docLink: { href: "#api-reference", label: "Props reference" },
          tall: true,
        },
      ],
    },
    {
      id: "patterns",
      title: "Usage patterns",
      description: "Common ways to build the DataOS catalog table.",
      variants: [
        {
          id: "static",
          title: "1. Static data",
          description:
            "Simplest approach — define a rows array and map it into table cells.",
          body: "Use when catalog entries are known at build time or come from a local config file.",
          Preview: TableDataProductStaticPreview,
          code: tableDataProductCodes.static,
          docLink: { href: "#api-reference", label: "Props reference" },
        },
        {
          id: "api",
          title: "2. From an API response",
          description: "Map your API shape into DataProductRow at runtime.",
          body: "Transform catalog API fields in one mapper function, then pass the result to your table body.",
          Preview: TableDataProductDataDrivenPreview,
          code: tableDataProductCodes.api,
          docLink: { href: "#api-reference", label: "Props reference" },
        },
        {
          id: "sort-filter",
          title: "3. Sort and filter headers",
          description:
            "Add column sort and a popover filter on glossary terms.",
          body: "Keep sort direction and filter query in React state; derive visibleRows with useMemo before rendering.",
          Preview: TableDataProductPreview,
          code: tableDataProductCodes.sortFilter,
          docLink: { href: "#api-reference", label: "Props reference" },
        },
        {
          id: "selectable",
          title: "4. Row click, hover & selection",
          description:
            "Bind onRowClick, onRowHover, and click-to-select with row highlighting.",
          body: "Set selectable for click-to-select (controlled via selectedIds / onSelectionChange). onRowClick and onRowHover fire independently — rows are keyboard focusable when clickable.",
          Preview: TableDataProductSelectablePreview,
          code: tableDataProductCodes.selectable,
          docLink: { href: "#api-reference", label: "Props reference" },
        },
        {
          id: "row-markup",
          title: "5. Row cell markup",
          description:
            "Product icon tile, glossary pill, and optional quality badge.",
          body: "Extract DataProductDataRow so the same row layout works in static, API-driven, and interactive tables.",
          code: tableDataProductCodes.rowMarkup,
          codeOnly: true,
          docLink: { href: "#api-reference", label: "Props reference" },
        },
      ],
    },
  ],
  variants: [
    {
      id: "preview",
      title: "Preview",
      description: "Interactive catalog with sort and filter headers.",
      Preview: TableDataProductPreview,
      code: tableDataProductCodes.sortFilter,
    },
    {
      id: "row-data",
      title: "Row data prop",
      description: "One array from your API.",
      Preview: TableDataProductDataDrivenPreview,
      code: tableDataProductCodes.rows,
    },
    {
      id: "static",
      title: "Static data",
      description: "Define a rows array and map it into table cells.",
      Preview: TableDataProductStaticPreview,
      code: tableDataProductCodes.static,
    },
    {
      id: "api",
      title: "API response",
      description: "Map API fields into DataProductRow at runtime.",
      Preview: TableDataProductDataDrivenPreview,
      code: tableDataProductCodes.api,
    },
    {
      id: "sort-filter",
      title: "Sort and filter",
      description: "Column sort and glossary popover filter.",
      Preview: TableDataProductPreview,
      code: tableDataProductCodes.sortFilter,
    },
    {
      id: "selectable",
      title: "Click, hover & select",
      description: "Row click, hover callback, and click-to-select highlighting.",
      Preview: TableDataProductSelectablePreview,
      code: tableDataProductCodes.selectable,
    },
    {
      id: "row-markup",
      title: "Row cell markup",
      description: "Product tile, glossary pill, and quality badge cells.",
      code: tableDataProductCodes.rowMarkup,
      codeOnly: true,
    },
  ],
}
