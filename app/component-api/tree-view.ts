import type { ComponentApiDoc } from "@/app/component-variants/types"

export const treeViewApi: ComponentApiDoc = {
  features: [
    "Expand, collapse, and select hierarchical items.",
    "Custom icons per item (default, open, selected).",
    "Default node and leaf icons for the whole tree.",
    "Optional action buttons and custom item renderers.",
    "Drag and drop support with disabled items.",
  ],
  usage: {
    import:
      'import { TreeView, type TreeDataItem } from "@/components/ui/tree-view"',
    example: `<TreeView
  data={[
    {
      id: "1",
      name: "Item 1",
      children: [{ id: "2", name: "Item 1.1" }],
    },
  ]}
/>`,
  },
  apiReference: {
    title: "TreeView Props",
    props: [
      {
        prop: "data",
        type: "TreeDataItem[] | TreeDataItem",
        description: "Tree data to render.",
      },
      {
        prop: "initialSelectedItemId",
        type: "string",
        description: "Item id selected on first render; also expands ancestors.",
      },
      {
        prop: "onSelectChange",
        type: "(item: TreeDataItem | undefined) => void",
        description: "Called when the selected item changes.",
      },
      {
        prop: "expandAll",
        type: "boolean",
        description: "Expand every branch on first render.",
      },
      {
        prop: "defaultNodeIcon",
        type: "React.ComponentType<{ className?: string }>",
        description: "Fallback icon for branch nodes.",
      },
      {
        prop: "defaultLeafIcon",
        type: "React.ComponentType<{ className?: string }>",
        description: "Fallback icon for leaf nodes.",
      },
      {
        prop: "onDocumentDrag",
        type: "(source: TreeDataItem, target: TreeDataItem) => void",
        description: "Called when a draggable item is dropped onto a target.",
      },
      {
        prop: "renderItem",
        type: "(params: TreeRenderItemParams) => React.ReactNode",
        description: "Custom renderer for each row.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes on the root container.",
      },
    ],
    footnote:
      "Based on the MrLightful shadcn tree-view pattern. Each TreeDataItem supports id, name, icons, children, actions, onClick, draggable, droppable, disabled, and className.",
  },
}
