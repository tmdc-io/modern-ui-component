"use client"

import {
  TreeView,
  type TreeDataItem,
} from "@/registry/default/ui/tree-view"

const data: TreeDataItem[] = [
  {
    id: "1",
    name: "Item 1",
    children: [
      {
        id: "2",
        name: "Item 1.1",
        children: [
          { id: "3", name: "Item 1.1.1" },
          { id: "4", name: "Item 1.1.2" },
        ],
      },
      { id: "5", name: "Item 1.2 (disabled)", disabled: true },
    ],
  },
  { id: "6", name: "Item 2" },
]

export function TreeViewDocDemoPreview() {
  return <TreeView data={data} className="w-full max-w-sm" />
}
export default TreeViewDocDemoPreview
