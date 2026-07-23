"use client"

import * as React from "react"
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ListFilterIcon,
  PanelLeftCloseIcon,
  SearchIcon,
  ShieldCheckIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"
import { Input } from "@/registry/default/ui/input"

export type AssetsTreeItem = {
  id: string
  name: string
  /** Shown as `(n)` next to the label. Defaults to descendant leaf count when children exist. */
  count?: number
  /** Shows a verified shield on the row. */
  verified?: boolean
  disabled?: boolean
  children?: AssetsTreeItem[]
}

export type AssetsTreeProps = {
  title?: string
  data?: AssetsTreeItem[]
  selectedId?: string
  defaultSelectedId?: string
  defaultExpandedIds?: string[]
  searchPlaceholder?: string
  searchValue?: string
  defaultSearchValue?: string
  onSearchChange?: (value: string) => void
  onSelectChange?: (item: AssetsTreeItem | undefined) => void
  onCollapseClick?: () => void
  onFilterClick?: () => void
  className?: string
}

function countLeaves(item: AssetsTreeItem): number {
  if (!item.children?.length) return 1
  return item.children.reduce((sum, child) => sum + countLeaves(child), 0)
}

function displayCount(item: AssetsTreeItem): number | undefined {
  if (typeof item.count === "number") return item.count
  if (item.children?.length) return countLeaves(item)
  return undefined
}

function filterTree(
  items: AssetsTreeItem[],
  query: string
): AssetsTreeItem[] {
  const q = query.trim().toLowerCase()
  if (!q) return items

  const walk = (nodes: AssetsTreeItem[]): AssetsTreeItem[] => {
    const next: AssetsTreeItem[] = []
    for (const node of nodes) {
      const childMatches = node.children ? walk(node.children) : []
      const selfMatch = node.name.toLowerCase().includes(q)
      if (selfMatch || childMatches.length) {
        next.push({
          ...node,
          children: childMatches.length
            ? childMatches
            : selfMatch
              ? node.children
              : undefined,
        })
      }
    }
    return next
  }

  return walk(items)
}

function collectExpandableIds(items: AssetsTreeItem[]): string[] {
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

function collectAncestorIds(
  items: AssetsTreeItem[],
  targetId: string
): string[] {
  const path: string[] = []

  const walk = (nodes: AssetsTreeItem[]): boolean => {
    for (const node of nodes) {
      if (node.id === targetId) return true
      if (node.children?.length) {
        path.push(node.id)
        if (walk(node.children)) return true
        path.pop()
      }
    }
    return false
  }

  walk(items)
  return path
}

/** Default Assets catalog matching the DataOS Assets rail. */
export const defaultAssetsTreeData: AssetsTreeItem[] = [
  { id: "overview", name: "Overview" },
  {
    id: "seeds",
    name: "Seeds",
    count: 5,
    children: [
      { id: "SEED_REGIONS", name: "SEED_REGIONS", verified: true },
      { id: "SEED_CALENDAR", name: "SEED_CALENDAR" },
      { id: "SEED_CURRENCY", name: "SEED_CURRENCY" },
      { id: "SEED_CHANNELS", name: "SEED_CHANNELS", verified: true },
      { id: "SEED_STATUS", name: "SEED_STATUS" },
    ],
  },
  {
    id: "inputs",
    name: "Inputs",
    count: 3,
    children: [
      {
        id: "CUSTOMER_MASTER",
        name: "CUSTOMER_MASTER",
        verified: true,
      },
      { id: "WEB_CLICKSTREAM", name: "WEB_CLICKSTREAM" },
      {
        id: "UTM_CAMPAIGNS",
        name: "UTM_CAMPAIGNS",
        verified: true,
      },
    ],
  },
  {
    id: "outputs",
    name: "Outputs",
    count: 4,
    children: [
      { id: "CUSTOMER_360", name: "CUSTOMER_360", verified: true },
      { id: "SEGMENT_SCORES", name: "SEGMENT_SCORES" },
      { id: "REVENUE_DAILY", name: "REVENUE_DAILY" },
      { id: "CHURN_FEATURES", name: "CHURN_FEATURES", verified: true },
    ],
  },
  {
    id: "semantics",
    name: "Semantics",
    count: 2,
    children: [
      { id: "ENTITY_CUSTOMER", name: "ENTITY_CUSTOMER" },
      { id: "ENTITY_PRODUCT", name: "ENTITY_PRODUCT", verified: true },
    ],
  },
  {
    id: "metrics",
    name: "Metrics",
    count: 6,
    children: [
      { id: "SIGNUP_RATE", name: "SIGNUP_RATE", verified: true },
      { id: "ACTIVATION_RATE", name: "ACTIVATION_RATE" },
      { id: "RETENTION_28D", name: "RETENTION_28D" },
      { id: "ARPU", name: "ARPU", verified: true },
      { id: "NPS_SCORE", name: "NPS_SCORE" },
      { id: "TIME_TO_VALUE", name: "TIME_TO_VALUE" },
    ],
  },
]

/** Five-level nested sample for deep hierarchy demos. */
export const deepAssetsTreeData: AssetsTreeItem[] = [
  { id: "overview", name: "Overview" },
  {
    id: "seeds",
    name: "Seeds",
    count: 5,
    children: [
      {
        id: "seeds-ref",
        name: "Reference",
        children: [
          {
            id: "seeds-geo",
            name: "Geography",
            children: [
              {
                id: "seeds-regions",
                name: "Regions",
                children: [
                  { id: "REGION_CODES", name: "REGION_CODES", verified: true },
                  { id: "COUNTRY_LOOKUP", name: "COUNTRY_LOOKUP" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "inputs",
    name: "Inputs",
    count: 3,
    children: [
      {
        id: "inputs-batch",
        name: "Batch",
        children: [
          {
            id: "inputs-crm",
            name: "CRM",
            children: [
              {
                id: "inputs-profiles",
                name: "Profiles",
                children: [
                  {
                    id: "CUSTOMER_MASTER",
                    name: "CUSTOMER_MASTER",
                    verified: true,
                  },
                  { id: "ACCOUNT_DIM", name: "ACCOUNT_DIM" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "inputs-stream",
        name: "Stream",
        children: [
          {
            id: "inputs-web",
            name: "Web",
            children: [
              {
                id: "inputs-events",
                name: "Events",
                children: [
                  { id: "WEB_CLICKSTREAM", name: "WEB_CLICKSTREAM" },
                  {
                    id: "UTM_CAMPAIGNS",
                    name: "UTM_CAMPAIGNS",
                    verified: true,
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
    id: "outputs",
    name: "Outputs",
    count: 4,
    children: [
      {
        id: "outputs-marts",
        name: "Marts",
        children: [
          {
            id: "outputs-customer",
            name: "Customer",
            children: [
              {
                id: "outputs-360",
                name: "360",
                children: [
                  {
                    id: "CUSTOMER_360",
                    name: "CUSTOMER_360",
                    verified: true,
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
    id: "semantics",
    name: "Semantics",
    count: 2,
    children: [
      {
        id: "semantics-entities",
        name: "Entities",
        children: [
          {
            id: "semantics-core",
            name: "Core",
            children: [
              {
                id: "semantics-defs",
                name: "Definitions",
                children: [
                  { id: "ENTITY_CUSTOMER", name: "ENTITY_CUSTOMER" },
                  {
                    id: "ENTITY_PRODUCT",
                    name: "ENTITY_PRODUCT",
                    verified: true,
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
    id: "metrics",
    name: "Metrics",
    count: 6,
    children: [
      {
        id: "metrics-growth",
        name: "Growth",
        children: [
          {
            id: "metrics-acquisition",
            name: "Acquisition",
            children: [
              {
                id: "metrics-funnel",
                name: "Funnel",
                children: [
                  { id: "SIGNUP_RATE", name: "SIGNUP_RATE", verified: true },
                  { id: "ACTIVATION_RATE", name: "ACTIVATION_RATE" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

function VerifiedBadge() {
  return (
    <ShieldCheckIcon
      aria-label="Verified"
      className="size-4 shrink-0 text-dark-teal"
      strokeWidth={1.75}
    />
  )
}

function AssetsTreeRow({
  item,
  level,
  selectedId,
  expandedIds,
  onToggle,
  onSelect,
  isTopLevel,
}: {
  item: AssetsTreeItem
  level: number
  selectedId?: string
  expandedIds: Set<string>
  onToggle: (id: string) => void
  onSelect: (item: AssetsTreeItem) => void
  isTopLevel: boolean
}) {
  const hasChildren = !!item.children?.length
  const isExpanded = expandedIds.has(item.id)
  const isSelected = selectedId === item.id
  const count = displayCount(item)
  const indent = isTopLevel ? 8 : 8 + level * 20

  return (
    <div
      className={cn(isTopLevel && "border-b border-[#ebebeb] last:border-b-0")}
    >
      <div className="py-0.5 pe-2" style={{ paddingInlineStart: indent }}>
        <button
          type="button"
          disabled={item.disabled}
          aria-expanded={hasChildren ? isExpanded : undefined}
          onClick={() => {
            if (item.disabled) return
            if (hasChildren) {
              onToggle(item.id)
              return
            }
            onSelect(item)
          }}
          className={cn(
            "relative flex w-full items-center gap-2 rounded-lg px-3 text-start text-[13px] leading-5 outline-none transition-colors",
            "focus-visible:ring-2 focus-visible:ring-dark-teal/25 focus-visible:ring-offset-0",
            "disabled:pointer-events-none disabled:opacity-50",
            isTopLevel ? "h-10" : "h-9",
            isSelected
              ? "bg-teal-bg-2 text-[#242422]"
              : "text-[#242422] hover:bg-teal-bg-2/40"
          )}
        >
          {isSelected ? (
            <span
              aria-hidden
              className="absolute start-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-dark-teal"
            />
          ) : null}

          <span className="min-w-0 flex-1 truncate text-start font-normal tracking-tight">
            {item.name}
          </span>

          <span className="flex shrink-0 items-center gap-2">
            {typeof count === "number" ? (
              <span className="text-[#8c8c8c] tabular-nums">({count})</span>
            ) : null}
            {item.verified ? <VerifiedBadge /> : null}
            {hasChildren ? (
              isExpanded ? (
                <ChevronDownIcon
                  className="size-4 text-[#8c8c8c]"
                  strokeWidth={1.75}
                />
              ) : (
                <ChevronRightIcon
                  className="size-4 text-[#8c8c8c] rtl:rotate-180"
                  strokeWidth={1.75}
                />
              )
            ) : null}
          </span>
        </button>
      </div>

      {hasChildren && isExpanded ? (
        <div role="group">
          {item.children!.map((child) => (
            <AssetsTreeRow
              key={child.id}
              item={child}
              level={level + 1}
              selectedId={selectedId}
              expandedIds={expandedIds}
              onToggle={onToggle}
              onSelect={onSelect}
              isTopLevel={false}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

function AssetsTree({
  title = "Assets",
  data = defaultAssetsTreeData,
  selectedId: selectedIdProp,
  defaultSelectedId = "CUSTOMER_MASTER",
  defaultExpandedIds,
  searchPlaceholder = "Search",
  searchValue: searchValueProp,
  defaultSearchValue = "",
  onSearchChange,
  onSelectChange,
  onCollapseClick,
  onFilterClick,
  className,
}: AssetsTreeProps) {
  const [uncontrolledSelectedId, setUncontrolledSelectedId] = React.useState(
    defaultSelectedId
  )
  const selectedId = selectedIdProp ?? uncontrolledSelectedId

  const [uncontrolledSearch, setUncontrolledSearch] =
    React.useState(defaultSearchValue)
  const searchValue = searchValueProp ?? uncontrolledSearch

  const filteredData = React.useMemo(
    () => filterTree(data, searchValue),
    [data, searchValue]
  )

  const initialExpanded = React.useMemo(() => {
    if (defaultExpandedIds?.length) return defaultExpandedIds
    if (searchValue.trim()) return collectExpandableIds(filteredData)
    const ancestors = selectedId
      ? collectAncestorIds(data, selectedId)
      : []
    return ancestors.length ? ancestors : ["inputs"]
  }, [data, defaultExpandedIds, filteredData, searchValue, selectedId])

  const [expandedIds, setExpandedIds] = React.useState(
    () => new Set(initialExpanded)
  )

  React.useEffect(() => {
    if (searchValue.trim()) {
      setExpandedIds(new Set(collectExpandableIds(filteredData)))
    }
  }, [filteredData, searchValue])

  const handleSearchChange = (value: string) => {
    if (searchValueProp === undefined) setUncontrolledSearch(value)
    onSearchChange?.(value)
  }

  const handleSelect = (item: AssetsTreeItem) => {
    if (selectedIdProp === undefined) setUncontrolledSelectedId(item.id)
    onSelectChange?.(item)
  }

  const handleToggle = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <aside
      data-slot="assets-tree"
      className={cn(
        "flex h-full min-h-[28rem] w-full max-w-[17.5rem] flex-col bg-white text-[#242422] dark:bg-background dark:text-foreground",
        className
      )}
    >
      <div className="flex items-center justify-between gap-2 px-4 pt-4 pb-3">
        <h2 className="text-[15px] leading-none font-semibold tracking-tight text-[#242422] dark:text-foreground">
          {title}
        </h2>
        <button
          type="button"
          className="inline-flex size-8 items-center justify-center rounded-md text-[#8c8c8c] transition-colors hover:bg-black/5 hover:text-[#242422] focus-visible:ring-2 focus-visible:ring-dark-teal/30 focus-visible:outline-none dark:hover:bg-white/10 dark:hover:text-foreground"
          aria-label="Collapse panel"
          onClick={onCollapseClick}
        >
          <PanelLeftCloseIcon
            className="size-[18px] rtl:rotate-180"
            strokeWidth={1.75}
          />
        </button>
      </div>

      <div className="flex items-center gap-2 px-4 pb-3">
        <div className="relative min-w-0 flex-1">
          <SearchIcon className="pointer-events-none absolute top-1/2 start-3 size-4 -translate-y-1/2 text-[#8c8c8c]" />
          <Input
            value={searchValue}
            onChange={(event) => handleSearchChange(event.target.value)}
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            className="h-9 rounded-full border border-black/10 bg-white ps-9 text-[13px] text-[#242422] shadow-none placeholder:text-[#8c8c8c] focus-visible:border-dark-teal/40 focus-visible:ring-dark-teal/20 dark:bg-background dark:text-foreground"
          />
        </div>
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          className="size-9 shrink-0 rounded-full border-black/10 bg-white text-[#242422] shadow-none hover:bg-black/[0.03] dark:bg-background dark:text-foreground"
          aria-label="Filter assets"
          onClick={onFilterClick}
        >
          <ListFilterIcon className="size-4" strokeWidth={1.75} />
        </Button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto" role="tree">
        {filteredData.length ? (
          filteredData.map((item) => (
            <AssetsTreeRow
              key={item.id}
              item={item}
              level={0}
              selectedId={selectedId}
              expandedIds={expandedIds}
              onToggle={handleToggle}
              onSelect={handleSelect}
              isTopLevel
            />
          ))
        ) : (
          <p className="px-4 py-6 text-start text-[13px] text-[#8c8c8c]">
            No assets match “{searchValue.trim()}”.
          </p>
        )}
      </div>
    </aside>
  )
}

export { AssetsTree }
