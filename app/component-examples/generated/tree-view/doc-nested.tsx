"use client"

import {
  FileIcon,
  FolderIcon,
  FolderOpenIcon,
} from "lucide-react"

import {
  TreeView,
  type TreeDataItem,
} from "@/registry/default/ui/tree-view"

const data: TreeDataItem[] = [
  {
    id: "workspace",
    name: "workspace",
    icon: FolderIcon,
    openIcon: FolderOpenIcon,
    children: [
      {
        id: "apps",
        name: "apps",
        icon: FolderIcon,
        openIcon: FolderOpenIcon,
        children: [
          {
            id: "web",
            name: "web",
            icon: FolderIcon,
            openIcon: FolderOpenIcon,
            children: [
              {
                id: "src",
                name: "src",
                icon: FolderIcon,
                openIcon: FolderOpenIcon,
                children: [
                  {
                    id: "features",
                    name: "features",
                    icon: FolderIcon,
                    openIcon: FolderOpenIcon,
                    children: [
                      { id: "dashboard", name: "dashboard.tsx", icon: FileIcon },
                      { id: "settings", name: "settings.tsx", icon: FileIcon },
                    ],
                  },
                  { id: "app", name: "app.tsx", icon: FileIcon },
                ],
              },
              { id: "package-web", name: "package.json", icon: FileIcon },
            ],
          },
          {
            id: "api",
            name: "api",
            icon: FolderIcon,
            openIcon: FolderOpenIcon,
            children: [
              {
                id: "routes",
                name: "routes",
                icon: FolderIcon,
                openIcon: FolderOpenIcon,
                children: [
                  {
                    id: "v1",
                    name: "v1",
                    icon: FolderIcon,
                    openIcon: FolderOpenIcon,
                    children: [
                      { id: "users", name: "users.ts", icon: FileIcon },
                      { id: "auth", name: "auth.ts", icon: FileIcon },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "packages",
        name: "packages",
        icon: FolderIcon,
        openIcon: FolderOpenIcon,
        children: [
          {
            id: "ui",
            name: "ui",
            icon: FolderIcon,
            openIcon: FolderOpenIcon,
            children: [
              {
                id: "components",
                name: "components",
                icon: FolderIcon,
                openIcon: FolderOpenIcon,
                children: [
                  {
                    id: "primitives",
                    name: "primitives",
                    icon: FolderIcon,
                    openIcon: FolderOpenIcon,
                    children: [
                      { id: "button", name: "button.tsx", icon: FileIcon },
                      { id: "tree-view", name: "tree-view.tsx", icon: FileIcon },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

export function TreeViewDocNestedPreview() {
  return (
    <TreeView
      data={data}
      className="w-full max-w-md"
      expandAll
      initialSelectedItemId="tree-view"
      defaultNodeIcon={FolderIcon}
      defaultLeafIcon={FileIcon}
    />
  )
}
export default TreeViewDocNestedPreview
