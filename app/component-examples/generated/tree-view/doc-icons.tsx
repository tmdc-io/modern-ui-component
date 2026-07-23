"use client"

import { FileIcon, FolderIcon } from "lucide-react"

import {
  TreeView,
  type TreeDataItem,
} from "@/registry/default/ui/tree-view"

const data: TreeDataItem[] = [
  {
    id: "src",
    name: "src",
    children: [
      {
        id: "components",
        name: "components",
        children: [
          { id: "button", name: "button.tsx" },
          { id: "tree-view", name: "tree-view.tsx" },
        ],
      },
      { id: "lib", name: "lib", children: [{ id: "utils", name: "utils.ts" }] },
    ],
  },
  { id: "readme", name: "README.md" },
]

export function TreeViewDocIconsPreview() {
  return (
    <TreeView
      data={data}
      className="w-full max-w-sm"
      expandAll
      defaultNodeIcon={FolderIcon}
      defaultLeafIcon={FileIcon}
      initialSelectedItemId="button"
    />
  )
}
export default TreeViewDocIconsPreview
