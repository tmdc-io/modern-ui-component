"use client"

import {
  TreeView,
  type TreeDataItem,
} from "@/registry/default/ui/tree-view"

const data: TreeDataItem[] = [
  {
    id: "active",
    name: "Active projects",
    children: [
      { id: "alpha", name: "Project Alpha" },
      { id: "beta", name: "Project Beta (archived)", disabled: true },
    ],
  },
  {
    id: "locked",
    name: "Restricted (disabled)",
    disabled: true,
    children: [{ id: "secret", name: "Confidential" }],
  },
  { id: "draft", name: "Draft notes", disabled: true },
]

export function TreeViewDocDisabledPreview() {
  return (
    <TreeView
      data={data}
      className="w-full max-w-sm"
      expandAll
      initialSelectedItemId="alpha"
    />
  )
}
export default TreeViewDocDisabledPreview
