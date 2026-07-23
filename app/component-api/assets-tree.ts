import type { ComponentApiDoc } from "@/app/component-variants/types"

export const assetsTreeApi: ComponentApiDoc = {
  features: [
    "DataOS Assets panel with search, filter affordance, and collapse control.",
    "Nested categories with right-aligned counts, chevrons, and verified shields.",
    "Rounded teal selected pill with a rounded dark-teal leading accent bar.",
    "Supports five-level (and deeper) hierarchies with expand/collapse state.",
    "Data-driven: pass AssetsTreeItem[] mapped from your API or store.",
  ],
  usage: {
    import:
      'import { AssetsTree, type AssetsTreeItem } from "@/components/blocks/assets-tree"',
    example: `const data: AssetsTreeItem[] = [
  {
    id: "inputs",
    name: "Inputs",
    count: 3,
    children: [
      { id: "CUSTOMER_MASTER", name: "CUSTOMER_MASTER", verified: true },
    ],
  },
]

<AssetsTree
  data={data}
  defaultSelectedId="CUSTOMER_MASTER"
  defaultExpandedIds={["inputs"]}
/>`,
  },
  apiReference: {
    title: "AssetsTree Props",
    props: [
      {
        prop: "title",
        type: "string",
        default: '"Assets"',
        description: "Panel header title.",
      },
      {
        prop: "data",
        type: "AssetsTreeItem[]",
        description:
          "Tree data. Defaults to defaultAssetsTreeData. Use deepAssetsTreeData for a five-level sample.",
      },
      {
        prop: "selectedId",
        type: "string",
        description:
          "Controlled selected leaf id. Selected rows use rounded-lg + teal-bg-2 + rounded accent bar.",
      },
      {
        prop: "defaultSelectedId",
        type: "string",
        default: '"CUSTOMER_MASTER"',
        description: "Initial selected leaf when uncontrolled.",
      },
      {
        prop: "defaultExpandedIds",
        type: "string[]",
        description:
          "Branch ids open on first render. Defaults to ancestors of the selected item.",
      },
      {
        prop: "searchValue",
        type: "string",
        description: "Controlled search query (filters by name).",
      },
      {
        prop: "defaultSearchValue",
        type: "string",
        description: "Initial search query when uncontrolled.",
      },
      {
        prop: "searchPlaceholder",
        type: "string",
        default: '"Search"',
        description: "Search input placeholder.",
      },
      {
        prop: "onSearchChange",
        type: "(value: string) => void",
        description: "Called when the search query changes.",
      },
      {
        prop: "onSelectChange",
        type: "(item: AssetsTreeItem | undefined) => void",
        description:
          "Called when a leaf is selected. Use to open a detail drawer or update the route.",
      },
      {
        prop: "onCollapseClick",
        type: "() => void",
        description: "Called when the collapse panel control is clicked.",
      },
      {
        prop: "onFilterClick",
        type: "() => void",
        description: "Called when the filter control is clicked.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes on the panel root.",
      },
    ],
    footnote:
      "AssetsTreeItem: id, name, count? (right-aligned), verified? (outline ShieldCheck), disabled?, children?. Selected styling is rounded-lg with bg-teal-bg-2 and a 3px rounded-full dark-teal accent.",
  },
}
