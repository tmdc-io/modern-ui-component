import { tableVirtualCodes } from "@/app/component-examples/table-virtual-codes"
import { TableVirtualPreview } from "@/app/component-examples/table-virtual"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const tableTanStackSupplement: Pick<
  ComponentVariantPage,
  "intro" | "sections" | "variants"
> = {
  intro:
    "Table is a presentational primitive — semantic markup and ModernUI styles. For sortable, filterable, or virtualized data grids, compose it with TanStack Table and optionally TanStack Virtual.",
  sections: [
    {
      id: "tanstack-table",
      title: "TanStack Table",
      description:
        "Headless table engine for columns, row models, sorting, filtering, and selection.",
      body: "Install @tanstack/react-table alongside the Table primitive. TanStack Table owns data logic; ModernUI Table components render the markup. See the Data Table catalog entry for a full sortable/filterable example.",
      docLink: {
        href: "https://tanstack.com/table/latest",
        label: "TanStack Table documentation",
      },
      variants: [
        {
          id: "tanstack-virtual",
          title: "Virtual rows",
          description:
            "Large datasets with TanStack Virtual — only visible rows render in the DOM.",
          Preview: TableVirtualPreview,
          code: tableVirtualCodes.full,
          tall: true,
          docLinks: [
            {
              href: "https://tanstack.com/table/v8/docs/guide/virtualization",
              label: "Virtualization guide",
            },
            {
              href: "/components/data-table#tanstack-virtual",
              label: "Also on Data Table",
            },
          ],
        },
      ],
    },
  ],
  variants: [],
}
