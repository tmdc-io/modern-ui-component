"use client"

import * as React from "react"

import {
  TreeView,
  type TreeDataItem,
} from "@/registry/default/ui/tree-view"

const data: TreeDataItem[] = [
  {
    id: "inbox",
    name: "Inbox",
    children: [
      { id: "msg-1", name: "Welcome email", draggable: true },
      { id: "msg-2", name: "Weekly digest", draggable: true },
    ],
  },
  {
    id: "archive",
    name: "Archive",
    droppable: true,
    children: [{ id: "old", name: "Old newsletter", draggable: true }],
  },
  { id: "trash", name: "Trash", droppable: true },
]

export function TreeViewDocDragDropPreview() {
  const [lastMove, setLastMove] = React.useState(
    "Drag a message onto Archive or Trash."
  )

  return (
    <div className="w-full max-w-sm space-y-3">
      <TreeView
        data={data}
        expandAll
        onDocumentDrag={(source, target) => {
          if (!target.id) return
          setLastMove(`Moved "${source.name}" → "${target.name}"`)
        }}
      />
      <p className="text-muted-foreground text-sm">{lastMove}</p>
    </div>
  )
}
export default TreeViewDocDragDropPreview
