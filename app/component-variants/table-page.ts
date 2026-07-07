import { tableHeaderBorderCodes } from "@/app/component-examples/table-header-border-codes"
import { TableHeaderBorderPreview } from "@/app/component-examples/table-header-border"
import { tableColumnDndCodes } from "@/app/component-examples/table-column-dnd-codes"
import { TableColumnDndPreview } from "@/app/component-examples/table-column-dnd"
import { tableInlineEditCodes } from "@/app/component-examples/table-inline-edit-codes"
import { TableInlineEditPreview } from "@/app/component-examples/table-inline-edit"
import { tableServerAsyncCodes } from "@/app/component-examples/table-server-async-codes"
import { TableServerAsyncPreview } from "@/app/component-examples/table-server-async"
import { tableBorderedCodes } from "@/app/component-examples/table-bordered-codes"
import { TableBorderedPreview } from "@/app/component-examples/table-bordered"
import { tableDenseCodes } from "@/app/component-examples/table-dense-codes"
import { TableDensePreview } from "@/app/component-examples/table-dense"
import { tableEmptyCodes } from "@/app/component-examples/table-empty-codes"
import { TableEmptyPreview } from "@/app/component-examples/table-empty"
import { tableExpandableCodes } from "@/app/component-examples/table-expandable-codes"
import { TableExpandablePreview } from "@/app/component-examples/table-expandable"
import { tableLoadingCodes } from "@/app/component-examples/table-loading-codes"
import { TableLoadingPreview } from "@/app/component-examples/table-loading"
import { tablePaginationSelectionCodes } from "@/app/component-examples/table-pagination-selection-codes"
import { TablePaginationSelectionPreview } from "@/app/component-examples/table-pagination-selection"
import { tableSelectionCodes } from "@/app/component-examples/table-selection-codes"
import { TableSelectionPreview } from "@/app/component-examples/table-selection"
import { tableSortFilterCodes } from "@/app/component-examples/table-sort-filter-codes"
import { TableSortFilterPreview } from "@/app/component-examples/table-sort-filter"
import { tableStickyHeaderCodes } from "@/app/component-examples/table-sticky-header-codes"
import { TableStickyHeaderPreview } from "@/app/component-examples/table-sticky-header"
import { tableStripedCodes } from "@/app/component-examples/table-striped-codes"
import { TableStripedPreview } from "@/app/component-examples/table-striped"
import { tableVirtualCodes } from "@/app/component-examples/table-virtual-codes"
import { TableVirtualPreview } from "@/app/component-examples/table-virtual"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const tableTanStackSupplement: Pick<
  ComponentVariantPage,
  "intro" | "sections" | "variants"
> = {
  intro:
    "Table is a presentational primitive with optional styling variants. For sortable, filterable, or virtualized data grids, compose it with TanStack Table and optionally TanStack Virtual.",
  sections: [
    {
      id: "styling",
      title: "Styling",
      description: "Visual variants applied via the Table variant prop.",
      body: 'Pass variant="borderless", variant="striped", variant="bordered", or variant="dense" on the Table root. The default variant preserves standard row dividers and spacing.',
      variants: [
        {
          id: "striped",
          title: "Striped",
          description: "Alternating row backgrounds for easier scanning.",
          Preview: TableStripedPreview,
          code: tableStripedCodes.full,
        },
        {
          id: "bordered",
          title: "Bordered",
          description: "Outer container border plus cell borders.",
          Preview: TableBorderedPreview,
          code: tableBorderedCodes.full,
        },
        {
          id: "dense",
          title: "Dense",
          description: "Reduced header height and cell padding.",
          Preview: TableDensePreview,
          code: tableDenseCodes.full,
        },
        {
          id: "header-border",
          title: "Header border",
          description:
            "2px header bottom border and bold header text via TableHeader className.",
          Preview: TableHeaderBorderPreview,
          code: tableHeaderBorderCodes.full,
        },
      ],
    },
    {
      id: "row-patterns",
      title: "Row patterns",
      description:
        "Common interaction and state patterns built on the Table primitive.",
      variants: [
        {
          id: "selection",
          title: "Row selection",
          description:
            "Checkbox column with select-all and data-state=\"selected\" highlight.",
          Preview: TableSelectionPreview,
          code: tableSelectionCodes.full,
          docLinks: [
            {
              href: "/components/checkbox#table",
              label: "Checkbox table example",
            },
          ],
        },
        {
          id: "expandable",
          title: "Expandable rows",
          description:
            "Toggle a detail row with colSpan spanning all columns.",
          Preview: TableExpandablePreview,
          code: tableExpandableCodes.full,
        },
        {
          id: "sticky-header",
          title: "Sticky header",
          description:
            "Fixed header while scrolling — use Table noWrapper and an outer scroll container.",
          Preview: TableStickyHeaderPreview,
          code: tableStickyHeaderCodes.full,
        },
        {
          id: "empty",
          title: "Empty state",
          description: "Centered “No results.” row when filters match nothing.",
          Preview: TableEmptyPreview,
          code: tableEmptyCodes.full,
        },
        {
          id: "loading",
          title: "Loading",
          description: "Skeleton placeholders inside Table markup.",
          Preview: TableLoadingPreview,
          code: tableLoadingCodes.full,
          docLinks: [
            {
              href: "/components/skeleton#table",
              label: "Skeleton table example",
            },
          ],
        },
      ],
    },
    {
      id: "tanstack-table",
      title: "TanStack Table",
      description:
        "Headless table engine for columns, row models, sorting, filtering, and selection.",
      body: "Install @tanstack/react-table alongside the Table primitive. TanStack Table owns data logic; ModernUI Table components render the markup. See the patterns below, or the Data Table catalog entry for the full reference implementation.",
      docLink: {
        href: "https://tanstack.com/table/latest",
        label: "TanStack Table documentation",
      },
      variants: [
        {
          id: "tanstack-sort-filter",
          title: "Sorting & filtering",
          description:
            "Stacked sort icons on headers and filter icons that open popover controls per column.",
          Preview: TableSortFilterPreview,
          code: tableSortFilterCodes.full,
          docLinks: [
            {
              href: "/components/data-table",
              label: "Full Data Table example",
            },
          ],
        },
        {
          id: "tanstack-pagination-selection",
          title: "Pagination & selection",
          description:
            "Row selection, column visibility, email filter, and page controls with TanStack Table.",
          Preview: TablePaginationSelectionPreview,
          code: tablePaginationSelectionCodes.full,
          docLinks: [
            {
              href: "/components/data-table",
              label: "Full Data Table example",
            },
          ],
        },
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
    {
      id: "advanced",
      title: "Advanced",
      description:
        "Server-driven data, column reordering, and inline editing patterns.",
      body: "These patterns extend TanStack Table for production data grids. Server-side pagination uses manualPagination with TanStack Query (or any fetch layer). Column order is controlled via columnOrder state and drag-and-drop on headers.",
      variants: [
        {
          id: "server-async",
          title: "Server-side & async",
          description:
            "manualPagination and manualSorting with TanStack Query fetching each page.",
          Preview: TableServerAsyncPreview,
          code: tableServerAsyncCodes.full,
          docLinks: [
            {
              href: "https://tanstack.com/table/latest/docs/guide/pagination#manual-pagination",
              label: "Manual pagination guide",
            },
            {
              href: "https://tanstack.com/query/latest",
              label: "TanStack Query docs",
            },
            {
              href: "/components/data-table#server-async",
              label: "Also on Data Table",
            },
          ],
        },
        {
          id: "column-dnd",
          title: "Column reordering",
          description:
            "Drag column headers to reorder via columnOrder state and HTML5 DnD.",
          Preview: TableColumnDndPreview,
          code: tableColumnDndCodes.full,
        },
        {
          id: "inline-edit",
          title: "Inline editing",
          description:
            "Click-to-edit cells with Input, Save/Cancel, and keyboard shortcuts.",
          Preview: TableInlineEditPreview,
          code: tableInlineEditCodes.full,
        },
      ],
    },
  ],
  variants: [],
}
