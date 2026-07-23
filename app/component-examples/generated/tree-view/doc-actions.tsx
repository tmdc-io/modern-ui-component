"use client"

import { MoreHorizontalIcon, PlusIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  TreeView,
  type TreeDataItem,
} from "@/registry/default/ui/tree-view"

const data: TreeDataItem[] = [
  {
    id: "team",
    name: "Engineering",
    actions: (
      <Button size="icon-sm" variant="ghost" className="size-6">
        <PlusIcon className="size-3.5" />
      </Button>
    ),
    children: [
      {
        id: "frontend",
        name: "Frontend",
        actions: (
          <Button size="icon-sm" variant="ghost" className="size-6">
            <MoreHorizontalIcon className="size-3.5" />
          </Button>
        ),
        children: [
          { id: "alice", name: "Alice Chen" },
          { id: "bob", name: "Bob Patel" },
        ],
      },
      {
        id: "backend",
        name: "Backend",
        children: [
          { id: "cara", name: "Cara Ruiz" },
          { id: "dan", name: "Dan Kim", disabled: true },
        ],
      },
    ],
  },
]

export function TreeViewDocActionsPreview() {
  return <TreeView data={data} className="w-full max-w-sm" expandAll />
}
export default TreeViewDocActionsPreview
