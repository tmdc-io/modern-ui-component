"use client"

import * as React from "react"

import {
  AssetsTree,
  deepAssetsTreeData,
  defaultAssetsTreeData,
  type AssetsTreeItem,
} from "@/registry/default/blocks/assets-tree/assets-tree"

export function AssetsTreeDefaultPreview() {
  return (
    <div className="flex w-full justify-center bg-white dark:bg-background">
      <AssetsTree className="min-h-[32rem] border border-[#ebebeb]" />
    </div>
  )
}

export function AssetsTreeDeepPreview() {
  return (
    <div className="flex w-full justify-center bg-white dark:bg-background">
      <AssetsTree
        data={deepAssetsTreeData}
        className="min-h-[36rem] max-w-sm border border-[#ebebeb]"
        defaultSelectedId="CUSTOMER_MASTER"
        defaultExpandedIds={[
          "inputs",
          "inputs-batch",
          "inputs-crm",
          "inputs-profiles",
          "inputs-stream",
          "inputs-web",
          "inputs-events",
        ]}
      />
    </div>
  )
}

export function AssetsTreeSearchPreview() {
  const [query, setQuery] = React.useState("customer")
  const [selected, setSelected] = React.useState<AssetsTreeItem>()

  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div className="w-full max-w-[17.5rem] border border-[#ebebeb] bg-white dark:bg-background">
        <AssetsTree
          className="min-h-[28rem] border-0"
          searchValue={query}
          onSearchChange={setQuery}
          onSelectChange={setSelected}
          defaultExpandedIds={collectAllIds(defaultAssetsTreeData)}
        />
      </div>
      <p className="text-muted-foreground text-sm">
        Selected: {selected?.name ?? "—"}
      </p>
    </div>
  )
}

type AssetApiNode = {
  key: string
  label: string
  assetCount?: number
  isVerified?: boolean
  nodes?: AssetApiNode[]
}

const demoApiResponse: AssetApiNode[] = [
  { key: "overview", label: "Overview" },
  {
    key: "inputs",
    label: "Inputs",
    assetCount: 3,
    nodes: [
      {
        key: "batch",
        label: "Batch",
        nodes: [
          {
            key: "crm",
            label: "CRM",
            nodes: [
              {
                key: "profiles",
                label: "Profiles",
                nodes: [
                  {
                    key: "CUSTOMER_MASTER",
                    label: "CUSTOMER_MASTER",
                    isVerified: true,
                  },
                  { key: "ACCOUNT_DIM", label: "ACCOUNT_DIM" },
                  {
                    key: "UTM_CAMPAIGNS",
                    label: "UTM_CAMPAIGNS",
                    isVerified: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "outputs",
    label: "Outputs",
    assetCount: 2,
    nodes: [
      {
        key: "marts",
        label: "Marts",
        nodes: [
          {
            key: "customer",
            label: "Customer",
            nodes: [
              {
                key: "views",
                label: "Views",
                nodes: [
                  {
                    key: "CUSTOMER_360",
                    label: "CUSTOMER_360",
                    isVerified: true,
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

function mapAssets(nodes: AssetApiNode[]): AssetsTreeItem[] {
  return nodes.map((node) => ({
    id: node.key,
    name: node.label,
    count: node.assetCount,
    verified: node.isVerified,
    children: node.nodes?.length ? mapAssets(node.nodes) : undefined,
  }))
}

export function AssetsTreeDataDrivenPreview() {
  const [selectedId, setSelectedId] = React.useState("CUSTOMER_MASTER")
  const data = React.useMemo(() => mapAssets(demoApiResponse), [])

  return (
    <div className="flex w-full justify-center bg-white dark:bg-background">
      <AssetsTree
        data={data}
        className="min-h-[36rem] max-w-sm border border-[#ebebeb]"
        selectedId={selectedId}
        onSelectChange={(item) => {
          if (item) setSelectedId(item.id)
        }}
        defaultExpandedIds={[
          "inputs",
          "batch",
          "crm",
          "profiles",
          "outputs",
          "marts",
          "customer",
          "views",
        ]}
      />
    </div>
  )
}

function collectAllIds(items: AssetsTreeItem[]): string[] {
  const ids: string[] = []
  const walk = (nodes: AssetsTreeItem[]) => {
    for (const node of nodes) {
      if (node.children?.length) {
        ids.push(node.id)
        walk(node.children)
      }
    }
  }
  walk(items)
  return ids
}
