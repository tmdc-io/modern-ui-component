"use client"

import * as React from "react"

import {
  TreeView,
  type TreeDataItem,
} from "@/registry/default/ui/tree-view"

const data: TreeDataItem[] = [
  {
    id: "docs",
    name: "Docs",
    children: [
      {
        id: "guides",
        name: "Guides",
        children: [
          { id: "install", name: "Installation" },
          { id: "theming", name: "Theming" },
        ],
      },
      { id: "api", name: "API Reference" },
    ],
  },
]

export function TreeViewDocSelectedPreview() {
  const [selected, setSelected] = React.useState<TreeDataItem>()

  return (
    <div className="w-full max-w-sm space-y-3">
      <TreeView
        data={data}
        initialSelectedItemId="install"
        onSelectChange={setSelected}
      />
      <p className="text-muted-foreground text-sm">
        Selected: {selected?.name ?? "Installation"}
      </p>
    </div>
  )
}
export default TreeViewDocSelectedPreview
