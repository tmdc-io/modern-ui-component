export const assetsTreeCodes = {
  install: `npx shadcn@latest add @modernui/assets-tree
npx shadcn@latest add tmdc-io/modern-ui-component/assets-tree`,

  default: `"use client"

import * as React from "react"

import {
  AssetsTree,
  type AssetsTreeItem,
} from "@/components/blocks/assets-tree"

/**
 * Default Assets rail
 * --------------------
 * Renders the built-in DataOS catalog when \`data\` is omitted:
 * Overview · Seeds (5) · Inputs (3) · Outputs (4) · Semantics (2) · Metrics (6)
 *
 * Visual behavior
 * - Category counts are right-aligned before the chevron: Seeds …… (5) ›
 * - Selected leaf uses a rounded teal pill (bg-teal-bg-2) with a rounded
 *   dark-teal accent bar on the leading edge
 * - Verified leaves show an outline ShieldCheck in dark teal
 *
 * Interaction
 * - Clicking a category toggles expand/collapse only
 * - Clicking a leaf selects it (rounded highlight)
 */
export function AssetsPanel() {
  const [selected, setSelected] = React.useState<AssetsTreeItem>()

  return (
    <aside className="h-full w-[17.5rem] border-e border-[#ebebeb] bg-white">
      <AssetsTree
        title="Assets"
        // Keep Inputs open so the selected leaf is visible on first paint.
        defaultExpandedIds={["inputs"]}
        defaultSelectedId="CUSTOMER_MASTER"
        searchPlaceholder="Search"
        onCollapseClick={() => {
          // Close the Assets column in your app shell.
        }}
        onFilterClick={() => {
          // Open filters for the current catalog query.
        }}
        onSelectChange={(item) => {
          setSelected(item)
          // Sync with a detail drawer / route, e.g. openAssetDrawer(item)
        }}
      />
      {/* Optional: mirror selection in a sibling detail drawer */}
      {selected ? (
        <p className="text-muted-foreground border-t border-[#ebebeb] px-4 py-2 text-xs">
          Selected: {selected.name}
        </p>
      ) : null}
    </aside>
  )
}`,

  deep: `"use client"

import {
  AssetsTree,
  deepAssetsTreeData,
  type AssetsTreeItem,
} from "@/components/blocks/assets-tree"

/**
 * Five-level nesting
 * ------------------
 * Uses the exported \`deepAssetsTreeData\` sample. Inputs expands like:
 *
 * Inputs
 * ├─ Batch
 * │  └─ CRM
 * │     └─ Profiles
 * │        ├─ CUSTOMER_MASTER   ← verified + selected (rounded teal pill)
 * │        └─ ACCOUNT_DIM
 * └─ Stream
 *    └─ Web
 *       └─ Events
 *          ├─ WEB_CLICKSTREAM
 *          └─ UTM_CAMPAIGNS     ← verified
 *
 * \`defaultExpandedIds\` must include every ancestor id you want open on load.
 * Selection still uses the rounded pill: light teal fill + rounded accent bar.
 */
export function DeepAssetsPanel() {
  return (
    <AssetsTree
      data={deepAssetsTreeData}
      title="Assets"
      defaultSelectedId="CUSTOMER_MASTER"
      defaultExpandedIds={[
        // Level 1
        "inputs",
        // Batch path → Profiles
        "inputs-batch",
        "inputs-crm",
        "inputs-profiles",
        // Stream path → Events
        "inputs-stream",
        "inputs-web",
        "inputs-events",
      ]}
      onSelectChange={(item: AssetsTreeItem | undefined) => {
        // item?.id is the leaf key, e.g. "CUSTOMER_MASTER"
      }}
    />
  )
}`,

  search: `"use client"

import * as React from "react"

import {
  AssetsTree,
  type AssetsTreeItem,
} from "@/components/blocks/assets-tree"

/**
 * Controlled search
 * -----------------
 * - \`searchValue\` / \`onSearchChange\` filter by name (case-insensitive)
 * - Matching branches expand automatically while a query is set
 * - \`onSelectChange\` fires for leaf clicks only (rounded selected state)
 * - Category clicks never change selection — they only toggle open state
 */
export function SearchableAssetsPanel() {
  const [query, setQuery] = React.useState("customer")
  const [selected, setSelected] = React.useState<AssetsTreeItem>()

  return (
    <div className="flex w-[17.5rem] flex-col gap-3">
      <AssetsTree
        title="Assets"
        searchValue={query}
        onSearchChange={setQuery}
        onSelectChange={setSelected}
        searchPlaceholder="Search"
        defaultSelectedId="CUSTOMER_MASTER"
      />
      <div className="text-muted-foreground space-y-1 px-1 text-xs">
        <p>
          Query: <span className="text-foreground">{query || "—"}</span>
        </p>
        <p>
          Selected:{" "}
          <span className="text-foreground">
            {selected
              ? \`\${selected.name} (\${selected.id})\${selected.verified ? " · verified" : ""}\`
              : "—"}
          </span>
        </p>
      </div>
    </div>
  )
}`,

  dataDriven: `"use client"

import * as React from "react"

import {
  AssetsTree,
  type AssetsTreeItem,
} from "@/components/blocks/assets-tree"

/**
 * Data-driven AssetsTree
 * ----------------------
 * Map your API / store payload into AssetsTreeItem[], then bind selection.
 *
 * AssetsTreeItem
 * - id        string                 Stable key (selection + expand state)
 * - name      string                 Visible label
 * - count?    number                 Right-aligned "(n)" before chevron
 *                                    (auto = leaf total when omitted on branches)
 * - verified? boolean                Outline ShieldCheck in dark teal
 * - disabled? boolean                Non-interactive
 * - children? AssetsTreeItem[]       Nested nodes (any depth)
 *
 * Selected leaf styling (built-in)
 * - rounded-lg container
 * - bg-teal-bg-2 fill
 * - 3px rounded-full dark-teal accent on the leading edge
 */

/** Shape returned by your catalog API (example). */
type AssetApiNode = {
  key: string
  label: string
  assetCount?: number
  isVerified?: boolean
  nodes?: AssetApiNode[]
}

const apiResponse: AssetApiNode[] = [
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

/** Recursively convert API nodes → AssetsTreeItem. */
function mapAssets(nodes: AssetApiNode[]): AssetsTreeItem[] {
  return nodes.map((node) => ({
    id: node.key,
    name: node.label,
    count: node.assetCount,
    verified: node.isVerified,
    children: node.nodes?.length ? mapAssets(node.nodes) : undefined,
  }))
}

export function DataDrivenAssetsPanel() {
  // Controlled selection — keep in sync with a detail drawer or URL.
  const [selectedId, setSelectedId] = React.useState("CUSTOMER_MASTER")
  const [drawerItem, setDrawerItem] = React.useState<AssetsTreeItem>()

  const data = React.useMemo(() => mapAssets(apiResponse), [])

  return (
    <div className="flex min-h-[28rem] gap-4">
      <AssetsTree
        className="w-[17.5rem] shrink-0 border border-[#ebebeb]"
        data={data}
        title="Assets"
        selectedId={selectedId}
        onSelectChange={(item) => {
          if (!item) return
          setSelectedId(item.id)
          setDrawerItem(item)
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
        onCollapseClick={() => {
          /* collapse Assets column */
        }}
        onFilterClick={() => {
          /* open catalog filters */
        }}
      />

      {/* Example detail drawer content driven by the selected leaf */}
      <section className="bg-cream-bg-3 min-w-0 flex-1 rounded-lg border border-[#ebebeb] p-4">
        {drawerItem || selectedId ? (
          <>
            <h3 className="text-sm font-semibold tracking-tight">
              {drawerItem?.name ?? selectedId}
            </h3>
            <dl className="text-muted-foreground mt-3 space-y-2 text-xs">
              <div className="flex justify-between gap-4">
                <dt>Id</dt>
                <dd className="text-foreground font-mono">
                  {drawerItem?.id ?? selectedId}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Verified</dt>
                <dd className="text-foreground">
                  {drawerItem?.verified ? "Yes" : "No"}
                </dd>
              </div>
            </dl>
            <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
              The tree row for this asset uses the rounded selected style:
              teal-bg-2 fill, rounded-lg corners, and a rounded dark-teal
              accent bar. Wire this panel to your real asset detail API.
            </p>
          </>
        ) : (
          <p className="text-muted-foreground text-sm">
            Select an asset to inspect details.
          </p>
        )}
      </section>
    </div>
  )
}`,
}
