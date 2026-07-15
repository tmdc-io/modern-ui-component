import type { ComponentApiDoc } from "@/app/component-variants/types"

export const modelsTableApi: ComponentApiDoc = {
  intro:
    "ModelsTable renders a searchable pipeline models catalog with fail, warn, pass, and not-eval status variants. Error rows use a red edge indicator and em dashes for runtime and rows. Expandable rows reveal either an error log panel (errorType badge, copyable message) or a nested quality rules table.",
  features: [
    "Row status variants: fail (red), warn (orange), pass (green), not eval.",
    "Error rows with left-edge indicator and dashed metrics.",
    "Expandable error panel with copy and view-more affordances.",
    "Expandable quality panel with column, rule, and status nested table.",
    "Kind / Type combined column with uppercase pills.",
    "Row actions menu and optional sparkline icon.",
    "Controlled or uncontrolled expandedIds for open rows.",
    "Horizontal scroll and stacked search on narrow viewports.",
  ],
  usage: {
    import: `import {
  ModelsTable,
  type ModelTableRow,
  type ModelTableErrorDetail,
  type ModelTableQualityRule,
} from "@/components/blocks/models-table"`,
    example: `<ModelsTable
  defaultExpandedIds={["m1"]}
  rows={[
    {
      id: "m1",
      name: "BUILDING_COMPETITORS_AGG",
      namespace: "SFDATAPRODUC... / SALES",
      kind: "INCREMENTAL_BY_TIME_RANGE",
      type: "SQL",
      status: "fail",
      statusCount: 1,
      hasError: true,
      expansion: "error",
      errorDetail: {
        errorType: "Py4JJavaError",
        message: "Connection to warehouse failed.",
      },
    },
    {
      id: "m3",
      name: "CONTRACT_HISTORY",
      namespace: "SFDATAPRODUC... / SALES",
      kind: "FULL",
      type: "ROLLUP",
      runtimeMs: 142,
      rowCount: 24830,
      dataSize: "1gb",
      status: "pass",
      statusCount: 8,
      expansion: "quality",
      qualityRules: [
        { id: "r1", column: "contract_id", rule: "not_null", status: "pass" },
      ],
    },
  ]}
/>`,
  },
  apiReference: {
    title: "ModelsTable Props",
    props: [
      {
        prop: "title",
        type: "string",
        default: '"Models"',
        description: "Section heading with total model count.",
      },
      {
        prop: "rows",
        type: "ModelTableRow[]",
        description:
          "Table rows. Defaults to ten models including error, quality-expandable, warn, pass, and not-eval variants.",
      },
      {
        prop: "enableExpand",
        type: "boolean",
        default: "true",
        description: "Allow chevron toggle on rows with errorDetail or qualityRules.",
      },
      {
        prop: "expandedIds",
        type: "string[]",
        description: "Controlled list of expanded row ids.",
      },
      {
        prop: "defaultExpandedIds",
        type: "string[]",
        description: "Initially expanded rows when expandedIds is not provided.",
      },
      {
        prop: "onExpandedChange",
        type: "(ids: string[]) => void",
        description: "Fires when expanded rows change.",
      },
      {
        prop: "searchPlaceholder",
        type: "string",
        default: '"Search by keywords"',
        description: "Search input placeholder.",
      },
      {
        prop: "searchQuery",
        type: "string",
        description: "Controlled search query.",
      },
      {
        prop: "onSearchChange",
        type: "(query: string) => void",
        description: "Fires when search changes.",
      },
      {
        prop: "enableSearch",
        type: "boolean",
        default: "true",
        description: "Show or hide search input.",
      },
      {
        prop: "enableSort",
        type: "boolean",
        default: "true",
        description: "Enable sort on Model column.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes on the outer section.",
      },
    ],
    footnote:
      "Set expansion to \"error\" with errorDetail, or \"quality\" with qualityRules. hasError hides runtime/row metrics. Requires table, input, and dropdown-menu.",
  },
  cssVariants: [
    {
      title: "ModelTableStatus",
      variants: [
        { name: '"fail"', description: "Red AlertCircle icon with count." },
        { name: '"warn"', description: "Orange AlertTriangle icon with count." },
        { name: '"pass"', description: "Green CircleCheck icon with count." },
        { name: '"none"', description: "Italic Not eval label." },
      ],
    },
    {
      title: "ModelTableRow expansion",
      variants: [
        {
          name: 'expansion: "error"',
          description: "Peach fail-bg panel with errorType badge and log box.",
        },
        {
          name: 'expansion: "quality"',
          description: "Muted panel with nested Column / Rule / Status table.",
        },
        {
          name: "hasError",
          description: "Red left edge; runtime and rows render as em dash.",
        },
      ],
    },
    {
      title: "Dependencies",
      variants: [
        { name: "table", description: "Table primitives." },
        { name: "input", description: "Search input." },
        { name: "dropdown-menu", description: "Per-row actions menu." },
      ],
    },
  ],
  enhancements: [
    {
      enhancement: "Error expansion",
      benefit: "Surface warehouse failures with copyable stack traces",
    },
    {
      enhancement: "Quality expansion",
      benefit: "Drill into column-level rule pass/warn/fail without leaving the table",
    },
    {
      enhancement: "Status variants",
      benefit: "Fail, warn, pass, and not-eval states match pipeline monitoring UI",
    },
    {
      enhancement: "Controlled expansion",
      benefit: "Sync open rows with routing or parent shell state",
    },
  ],
}
