"use client"

import * as React from "react"
import {
  AlertCircleIcon,
  AlertTriangleIcon,
  BarChart3Icon,
  ChevronDownIcon,
  ChevronRightIcon,
  CircleCheckIcon,
  Columns3Icon,
  CopyIcon,
  FilterIcon,
  ListIcon,
  MoreVerticalIcon,
  SearchIcon,
  TableIcon,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"
import { Input } from "@/registry/default/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"
import { cn } from "@/lib/utils"

export type ModelTableStatus = "fail" | "warn" | "pass" | "none"

export type ModelTableRuleStatus = "pass" | "warn" | "fail"

export type ModelTableQualityRule = {
  id: string
  column: string
  rule: string
  status: ModelTableRuleStatus
}

export type ModelTableErrorDetail = {
  errorType: string
  message: string
  viewMoreLabel?: string
  viewMoreHref?: string
  onViewMore?: () => void
}

export type ModelTableRow = {
  id: string
  name: string
  namespace: string
  kind: string
  type: string
  runtimeMs?: number
  rowCount?: number
  rowCountLabel?: string
  dataSize?: string
  status?: ModelTableStatus
  statusCount?: number
  hasError?: boolean
  showSparkline?: boolean
  expansion?: "error" | "quality"
  errorDetail?: ModelTableErrorDetail
  qualityRules?: ModelTableQualityRule[]
}

export type ModelsTableProps = {
  title?: string
  rows?: ModelTableRow[]
  searchPlaceholder?: string
  searchQuery?: string
  defaultSearchQuery?: string
  onSearchChange?: (query: string) => void
  enableSearch?: boolean
  enableSort?: boolean
  enableExpand?: boolean
  expandedIds?: string[]
  defaultExpandedIds?: string[]
  onExpandedChange?: (ids: string[]) => void
  className?: string
}

const defaultQualityRules: ModelTableQualityRule[] = [
  {
    id: "r1",
    column: "table-level rule",
    rule: "total number of orders ingested today should be within 10% of the 7-day average",
    status: "warn",
  },
  {
    id: "r2",
    column: "contract_id",
    rule: "should be unique and not null",
    status: "pass",
  },
  {
    id: "r3",
    column: "building_id",
    rule: "should not be null",
    status: "warn",
  },
  {
    id: "r4",
    column: "maintenance_cost",
    rule: "should be >= 0",
    status: "pass",
  },
]

const defaultRows: ModelTableRow[] = [
  {
    id: "m1",
    name: "BUILDING_COMPETITORS_AGG",
    namespace: "SFDATAPRODUC... / SALES",
    kind: "INCREMENTAL_BY_UNIQUE_KEY",
    type: "SQL",
    status: "fail",
    statusCount: 1,
    hasError: true,
    expansion: "error",
    errorDetail: {
      errorType: "Py4JJavaError",
      message:
        "Could not establish connection to warehouse 'TRANSFORM_WH': authentication token expired (390114). Retried 3x. at Connection.open (driver.js:64:11)",
      viewMoreLabel: "View more",
    },
  },
  {
    id: "m2",
    name: "CONTRACT_HISTORY",
    namespace: "SFDATAPRODUC... / SALES",
    kind: "FULL",
    type: "ROLLUP",
    status: "fail",
    statusCount: 1,
    hasError: true,
  },
  {
    id: "m3",
    name: "BUILDING_COMPETITORS_AGG",
    namespace: "SFDATAPRODUC... / SALES",
    kind: "INCREMENTAL_BY_UNIQUE_KEY",
    type: "SQL",
    runtimeMs: 142,
    rowCount: 24830,
    dataSize: "1gb",
    status: "warn",
    statusCount: 1,
    showSparkline: true,
    expansion: "quality",
    qualityRules: defaultQualityRules,
  },
  {
    id: "m4",
    name: "CONTRACT_HISTORY",
    namespace: "SFDATAPRODUC... / SALES",
    kind: "EXTERNAL",
    type: "SQL",
    runtimeMs: 28,
    rowCount: 13200,
    dataSize: "750mb",
    status: "warn",
    statusCount: 1,
    showSparkline: true,
  },
  {
    id: "m5",
    name: "MAINT_COST",
    namespace: "SFDATAPRODUC... / SALES",
    kind: "VIEW",
    type: "ROLLUP",
    runtimeMs: 315,
    rowCount: 30110,
    dataSize: "2gb",
    status: "pass",
    statusCount: 8,
    showSparkline: true,
  },
  {
    id: "m6",
    name: "MAINT_COST",
    namespace: "SFDATAPRODUC... / SALES",
    kind: "INCREMENTAL_BY_PARTITION",
    type: "SQL",
    runtimeMs: 67,
    rowCount: 8900,
    dataSize: "400mb",
    status: "pass",
    statusCount: 12,
    showSparkline: true,
  },
  {
    id: "m7",
    name: "MAINT_COST",
    namespace: "SFDATAPRODUC... / SALES",
    kind: "SEED",
    type: "PYTHON",
    runtimeMs: 189,
    rowCount: 22475,
    dataSize: "1.5gb",
    status: "pass",
    statusCount: 6,
    showSparkline: true,
  },
  {
    id: "m8",
    name: "QUOTE_DETAIL",
    namespace: "SFDATAPRODUC... / SALES",
    kind: "FULL",
    type: "ROLLUP",
    runtimeMs: 43,
    rowCount: 17320,
    dataSize: "600mb",
    status: "none",
    showSparkline: true,
  },
  {
    id: "m9",
    name: "QUOTE_DETAIL",
    namespace: "SFDATAPRODUC... / SALES",
    kind: "FULL",
    type: "ROLLUP",
    runtimeMs: 256,
    rowCount: 26700,
    dataSize: "3gb",
    status: "none",
    showSparkline: true,
  },
  {
    id: "m10",
    name: "MAINT_COST",
    namespace: "SFDATAPRODUC... / SALES",
    kind: "VIEW",
    type: "ROLLUP",
    runtimeMs: 94,
    rowCount: 11245,
    dataSize: "850mb",
    status: "none",
    showSparkline: true,
  },
]

const headerIconClassName =
  "text-muted-foreground hover:text-foreground inline-flex size-4 shrink-0 items-center justify-center rounded-sm transition-colors"

function isExpandable(row: ModelTableRow) {
  return Boolean(
    row.expansion &&
      (row.expansion === "error"
        ? row.errorDetail
        : row.qualityRules && row.qualityRules.length > 0)
  )
}

function ColumnSortIcon({
  direction,
}: {
  direction: false | "asc" | "desc"
}) {
  return (
    <span
      className="inline-flex flex-col items-center gap-0.5 leading-none"
      aria-hidden
    >
      <svg
        viewBox="0 0 8 5"
        className={cn(
          "h-1.5 w-3",
          direction === "asc" ? "text-foreground" : "text-muted-foreground/45"
        )}
      >
        <path fill="currentColor" d="M4 0 8 5H0z" />
      </svg>
      <svg
        viewBox="0 0 8 5"
        className={cn(
          "h-1.5 w-3",
          direction === "desc" ? "text-foreground" : "text-muted-foreground/45"
        )}
      >
        <path fill="currentColor" d="M0 0h8L4 5z" />
      </svg>
    </span>
  )
}

function HeaderDivider() {
  return (
    <span
      className="bg-border pointer-events-none absolute top-1/2 left-0 h-4 w-px -translate-y-1/2"
      aria-hidden
    />
  )
}

function HeaderFilterButton({ label }: { label: string }) {
  return (
    <button type="button" className={headerIconClassName} aria-label={`Filter ${label}`}>
      <FilterIcon className="size-3" />
    </button>
  )
}

function KindTypePill({ label }: { label: string }) {
  return (
    <span className="bg-card text-foreground inline-flex max-w-full rounded-full border border-border px-2.5 py-1 text-[10px] font-medium tracking-wide uppercase shadow-sm dark:bg-white dark:text-[#242422]">
      <span className="truncate">{label}</span>
    </span>
  )
}

function RuntimeBar({
  runtimeMs,
  maxRuntimeMs,
}: {
  runtimeMs: number
  maxRuntimeMs: number
}) {
  const width = maxRuntimeMs > 0 ? Math.max(8, (runtimeMs / maxRuntimeMs) * 100) : 0

  return (
    <div className="flex min-w-[6.5rem] items-center gap-2 sm:min-w-[7rem]">
      <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-[#ececec] dark:bg-white/90">
        <div
          className="bg-model-health-healthy h-full rounded-full transition-[width]"
          style={{ width: `${width}%` }}
        />
      </div>
      <span className="text-muted-foreground shrink-0 text-xs tabular-nums">
        {runtimeMs}ms
      </span>
    </div>
  )
}

function RuleStatusIcon({ status }: { status: ModelTableRuleStatus }) {
  if (status === "fail") {
    return <AlertCircleIcon className="text-dataos-fail-fg size-3.5 shrink-0" />
  }
  if (status === "warn") {
    return (
      <AlertTriangleIcon className="text-dataos-warn-fg size-3.5 shrink-0 fill-current" />
    )
  }
  return <CircleCheckIcon className="text-dataos-success-fg size-3.5 shrink-0" />
}

function StatusCell({ row }: { row: ModelTableRow }) {
  if (!row.status || row.status === "none") {
    return <span className="text-muted-foreground text-sm italic">Not eval</span>
  }

  if (row.status === "fail") {
    return (
      <span className="text-dataos-fail-fg inline-flex items-center gap-1 text-sm font-medium">
        <AlertCircleIcon className="size-3.5 shrink-0" />
        {row.statusCount}
      </span>
    )
  }

  if (row.status === "warn") {
    return (
      <span className="text-dataos-warn-fg inline-flex items-center gap-1 text-sm font-medium">
        <AlertTriangleIcon className="size-3.5 shrink-0 fill-current" />
        {row.statusCount}
      </span>
    )
  }

  return (
    <span className="text-dataos-success-fg inline-flex items-center gap-1 text-sm font-medium">
      <CircleCheckIcon className="size-3.5 shrink-0" />
      {row.statusCount}
    </span>
  )
}

function formatRowCount(row: ModelTableRow) {
  if (row.rowCount == null) return "—"
  return row.rowCountLabel ?? row.rowCount.toLocaleString("en-US")
}

function RowActionsMenu({ row }: { row: ModelTableRow }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(headerIconClassName, "size-7")}
          aria-label={`Actions for ${row.name}`}
          onClick={(event) => event.stopPropagation()}
        >
          <MoreVerticalIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem>View run log</DropdownMenuItem>
        <DropdownMenuItem>Open in editor</DropdownMenuItem>
        <DropdownMenuItem>Copy model name</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function ErrorExpansionPanel({ detail }: { detail: ModelTableErrorDetail }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(detail.message)
    } catch {
      // Clipboard unavailable
    }
  }

  return (
    <div className="px-4 pb-4 sm:px-6 sm:pb-5">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="border-destructive/60 text-destructive inline-flex rounded border px-2 py-0.5 text-xs font-medium">
          {detail.errorType}
        </span>
      </div>
      <div className="bg-muted/80 relative rounded-md border border-border/70 p-3 sm:p-4">
        <button
          type="button"
          onClick={handleCopy}
          className="text-muted-foreground hover:text-foreground absolute top-2 right-2 inline-flex size-7 items-center justify-center rounded-sm transition-colors"
          aria-label="Copy error message"
        >
          <CopyIcon className="size-3.5" />
        </button>
        <p className="text-foreground pr-8 font-mono text-xs leading-relaxed">
          {detail.message}
        </p>
        {detail.viewMoreHref || detail.onViewMore ? (
          detail.viewMoreHref ? (
            <a
              href={detail.viewMoreHref}
              className="text-primary mt-3 inline-block text-xs font-medium hover:underline"
            >
              {detail.viewMoreLabel ?? "View more"}
            </a>
          ) : (
            <button
              type="button"
              onClick={detail.onViewMore}
              className="text-primary mt-3 text-xs font-medium hover:underline"
            >
              {detail.viewMoreLabel ?? "View more"}
            </button>
          )
        ) : null}
      </div>
    </div>
  )
}

function ColumnCell({ rule }: { rule: ModelTableQualityRule }) {
  const isTableLevel = rule.column === "—" || rule.column.toLowerCase() === "table-level rule"

  return (
    <span className="text-foreground inline-flex items-center gap-2">
      {isTableLevel ? (
        <TableIcon className="text-muted-foreground size-3.5 shrink-0" />
      ) : (
        <Columns3Icon className="text-muted-foreground size-3.5 shrink-0" />
      )}
      <span className={cn(isTableLevel && "italic")}>
        {isTableLevel ? "table-level rule" : rule.column}
      </span>
    </span>
  )
}

function QualityExpansionPanel({ rules }: { rules: ModelTableQualityRule[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[24rem] text-left text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-muted-foreground px-4 py-2.5 text-xs font-medium sm:px-6">
              Column
            </th>
            <th className="text-muted-foreground px-4 py-2.5 text-xs font-medium sm:px-6">
              Rule
            </th>
            <th className="text-muted-foreground w-24 px-4 py-2.5 text-xs font-medium sm:px-6">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {rules.map((rule) => (
            <tr key={rule.id} className="border-b border-border/70 last:border-0">
              <td className="px-4 py-3 sm:px-6">
                <ColumnCell rule={rule} />
              </td>
              <td className="text-foreground max-w-md truncate px-4 py-3 sm:px-6">
                {rule.rule}
              </td>
              <td className="px-4 py-3 sm:px-6">
                <RuleStatusIcon status={rule.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ExpandButton({
  expanded,
  expandable,
  enableExpand,
  onToggleExpand,
  name,
}: {
  expanded: boolean
  expandable: boolean
  enableExpand: boolean
  onToggleExpand: () => void
  name: string
}) {
  if (!enableExpand || !expandable) {
    return <ChevronRightIcon className="text-muted-foreground mt-0.5 size-4 shrink-0" />
  }

  return (
    <button
      type="button"
      onClick={onToggleExpand}
      className="text-muted-foreground hover:text-foreground mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-sm transition-colors"
      aria-expanded={expanded}
      aria-label={expanded ? `Collapse ${name}` : `Expand ${name}`}
    >
      {expanded ? (
        <ChevronDownIcon className="size-4" />
      ) : (
        <ChevronRightIcon className="size-4" />
      )}
    </button>
  )
}

function ModelTableDataRow({
  row,
  maxRuntimeMs,
  expanded,
  expandable,
  enableExpand,
  onToggleExpand,
}: {
  row: ModelTableRow
  maxRuntimeMs: number
  expanded: boolean
  expandable: boolean
  enableExpand: boolean
  onToggleExpand: () => void
}) {
  const showDash = row.hasError || row.runtimeMs == null

  return (
    <TableRow className="group border-border bg-transparent hover:bg-muted/40">
      <TableCell
        className={cn(
          "whitespace-normal px-3 py-4 align-middle sm:px-4",
          row.hasError && "border-l-2 border-l-destructive"
        )}
      >
        <div className="flex min-w-0 items-start gap-2">
          <ExpandButton
            expanded={expanded}
            expandable={expandable}
            enableExpand={enableExpand}
            onToggleExpand={onToggleExpand}
            name={row.name}
          />
          <div className="min-w-0">
            <p className="text-foreground truncate text-sm font-semibold uppercase">
              {row.name}
            </p>
            <p className="text-muted-foreground mt-0.5 truncate text-xs italic">
              {row.namespace}
            </p>
          </div>
        </div>
      </TableCell>
      <TableCell className="whitespace-normal px-3 py-4 align-middle sm:px-4">
        <div className="flex min-w-0 flex-wrap gap-1.5">
          <KindTypePill label={row.kind} />
          <KindTypePill label={row.type} />
        </div>
      </TableCell>
      <TableCell className="whitespace-normal px-3 py-4 align-middle sm:px-4">
        {showDash ? (
          <span className="text-muted-foreground text-sm">—</span>
        ) : (
          <RuntimeBar runtimeMs={row.runtimeMs!} maxRuntimeMs={maxRuntimeMs} />
        )}
      </TableCell>
      <TableCell className="whitespace-normal px-3 py-4 align-middle sm:px-4">
        <div className="min-w-0">
          {showDash && row.rowCount == null ? (
            <span className="text-muted-foreground text-sm">—</span>
          ) : (
            <>
              <p className="text-foreground text-sm tabular-nums">{formatRowCount(row)}</p>
              {row.dataSize ? (
                <p className="text-muted-foreground text-xs">{row.dataSize}</p>
              ) : null}
            </>
          )}
        </div>
      </TableCell>
      <TableCell className="whitespace-normal px-3 py-4 align-middle sm:px-4">
        <StatusCell row={row} />
      </TableCell>
      <TableCell className="whitespace-normal px-2 py-4 align-middle sm:px-3">
        <div className="flex min-w-[3.5rem] items-center justify-end gap-1">
          {row.showSparkline ? (
            <BarChart3Icon className="text-muted-foreground/60 hidden size-4 shrink-0 sm:block" />
          ) : null}
          <span className="opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
            <RowActionsMenu row={row} />
          </span>
        </div>
      </TableCell>
    </TableRow>
  )
}

function ModelTableExpandedRow({
  row,
  columnCount,
  onToggleExpand,
}: {
  row: ModelTableRow
  columnCount: number
  onToggleExpand: () => void
}) {
  return (
    <TableRow className="border-border bg-muted/25 hover:bg-muted/25">
      <TableCell colSpan={columnCount} className="p-0">
        <div
          className={cn(
            "bg-card",
            row.hasError && "border-l-2 border-l-destructive"
          )}
        >
          <div className="flex items-start justify-between gap-3 px-4 py-4 sm:px-6">
            <div className="flex min-w-0 items-start gap-2">
              <button
                type="button"
                onClick={onToggleExpand}
                className="text-muted-foreground hover:text-foreground mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-sm transition-colors"
                aria-expanded="true"
                aria-label={`Collapse ${row.name}`}
              >
                <ChevronDownIcon className="size-4" />
              </button>
              <div className="min-w-0">
                <p className="text-foreground truncate text-[15px] font-semibold">
                  {row.name}
                </p>
                <p className="text-muted-foreground mt-0.5 truncate text-xs italic">
                  {row.namespace}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              {row.showSparkline ? (
                <BarChart3Icon className="text-muted-foreground/60 size-4 shrink-0" />
              ) : null}
              <RowActionsMenu row={row} />
            </div>
          </div>
          {row.expansion === "error" && row.errorDetail ? (
            <ErrorExpansionPanel detail={row.errorDetail} />
          ) : null}
          {row.expansion === "quality" && row.qualityRules ? (
            <QualityExpansionPanel rules={row.qualityRules} />
          ) : null}
        </div>
      </TableCell>
    </TableRow>
  )
}

export function ModelsTable({
  title = "Models",
  rows = defaultRows,
  searchPlaceholder = "Search by keywords",
  searchQuery,
  defaultSearchQuery = "",
  onSearchChange,
  enableSearch = true,
  enableSort = true,
  enableExpand = true,
  expandedIds,
  defaultExpandedIds,
  onExpandedChange,
  className,
}: ModelsTableProps) {
  const isSearchControlled = searchQuery !== undefined
  const [internalSearch, setInternalSearch] = React.useState(defaultSearchQuery)
  const resolvedSearch = isSearchControlled ? searchQuery : internalSearch

  const isExpandControlled = expandedIds !== undefined
  const [internalExpanded, setInternalExpanded] = React.useState<string[]>(
    defaultExpandedIds ?? []
  )
  const resolvedExpanded = isExpandControlled ? expandedIds : internalExpanded
  const expandedSet = React.useMemo(() => new Set(resolvedExpanded), [resolvedExpanded])

  const [sortDirection, setSortDirection] = React.useState<
    false | "asc" | "desc"
  >(false)

  const handleSearchChange = (value: string) => {
    if (!isSearchControlled) setInternalSearch(value)
    onSearchChange?.(value)
  }

  const commitExpanded = React.useCallback(
    (next: string[]) => {
      if (!isExpandControlled) setInternalExpanded(next)
      onExpandedChange?.(next)
    },
    [isExpandControlled, onExpandedChange]
  )

  const toggleExpanded = React.useCallback(
    (id: string) => {
      const next = expandedSet.has(id)
        ? resolvedExpanded.filter((value) => value !== id)
        : [...resolvedExpanded, id]
      commitExpanded(next)
    },
    [expandedSet, resolvedExpanded, commitExpanded]
  )

  const visibleRows = React.useMemo(() => {
    let next = [...rows]
    const query = resolvedSearch.trim().toLowerCase()

    if (query) {
      next = next.filter(
        (row) =>
          row.name.toLowerCase().includes(query) ||
          row.namespace.toLowerCase().includes(query) ||
          row.kind.toLowerCase().includes(query) ||
          row.type.toLowerCase().includes(query)
      )
    }

    if (enableSort && sortDirection) {
      next.sort((a, b) => {
        const cmp = a.name.localeCompare(b.name)
        return sortDirection === "asc" ? cmp : -cmp
      })
    }

    return next
  }, [rows, resolvedSearch, enableSort, sortDirection])

  const maxRuntimeMs = React.useMemo(
    () =>
      Math.max(
        ...visibleRows
          .filter((row) => row.runtimeMs != null && !row.hasError)
          .map((row) => row.runtimeMs as number),
        1
      ),
    [visibleRows]
  )

  const toggleSort = () => {
    setSortDirection((current) => {
      if (current === false) return "asc"
      if (current === "asc") return "desc"
      return false
    })
  }

  const columnCount = 6

  return (
    <section className={cn("w-full min-w-0", className)}>
      <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-muted-foreground text-[11px] font-semibold tracking-[0.14em] uppercase">
          {title}
        </h3>
        {enableSearch ? (
          <div className="relative w-full sm:max-w-[15rem]">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#8c8c8c]" />
            <Input
              value={resolvedSearch}
              onChange={(event) => handleSearchChange(event.target.value)}
              placeholder={searchPlaceholder}
              className="h-9 rounded-full border border-black/10 bg-white pl-9 text-sm text-[#242422] shadow-sm placeholder:text-[#8c8c8c] dark:border-transparent dark:bg-white dark:text-[#242422]"
            />
          </div>
        ) : null}
      </div>

      <div className="overflow-x-auto rounded-lg border border-grey-8">
        <Table
          noWrapper
          className="w-full min-w-[56rem] table-fixed [&_[data-slot=table-row]]:bg-transparent"
        >
          <colgroup>
            <col className="w-[33%]" />
            <col className="w-[20%]" />
            <col className="w-[15%]" />
            <col className="w-[11%]" />
            <col className="w-[13%]" />
            <col className="w-[8%]" />
          </colgroup>
          <TableHeader className="[&_tr]:border-b-2 [&_tr]:border-border">
            <TableRow className="border-border bg-transparent hover:bg-transparent">
              <TableHead className="text-foreground h-11 w-[33%] px-3 font-semibold sm:px-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <ListIcon className="text-muted-foreground size-4 shrink-0" />
                    <span>
                      Model
                      <span className="text-muted-foreground ml-1 font-normal">
                        ({rows.length})
                      </span>
                    </span>
                  </div>
                  {enableSort ? (
                    <button
                      type="button"
                      className={headerIconClassName}
                      onClick={toggleSort}
                      aria-label="Sort models"
                    >
                      <ColumnSortIcon direction={sortDirection} />
                    </button>
                  ) : null}
                </div>
              </TableHead>
              <TableHead className="text-foreground relative h-11 w-[20%] px-3 font-semibold sm:px-4">
                <HeaderDivider />
                <div className="flex items-center justify-between gap-2">
                  <span className="whitespace-nowrap">Kind / Type</span>
                  <HeaderFilterButton label="kind and type" />
                </div>
              </TableHead>
              <TableHead className="text-foreground relative h-11 w-[15%] px-3 font-semibold sm:px-4">
                <HeaderDivider />
                <div className="flex items-center justify-between gap-2">
                  <span>Runtime</span>
                  <HeaderFilterButton label="runtime" />
                </div>
              </TableHead>
              <TableHead className="text-foreground relative h-11 w-[11%] px-3 font-semibold sm:px-4">
                <HeaderDivider />
                <div className="flex items-center justify-between gap-2">
                  <span>Rows</span>
                  <HeaderFilterButton label="rows" />
                </div>
              </TableHead>
              <TableHead className="text-foreground relative h-11 w-[13%] px-3 font-semibold sm:px-4">
                <HeaderDivider />
                <div className="flex items-center justify-between gap-2">
                  <span>Status</span>
                  <HeaderFilterButton label="status" />
                </div>
              </TableHead>
              <TableHead className="relative h-11 w-[8%] px-2 sm:px-3">
                <HeaderDivider />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visibleRows.length ? (
              visibleRows.map((row) => {
                const expandable = isExpandable(row)
                const expanded = enableExpand && expandable && expandedSet.has(row.id)

                if (expanded) {
                  return (
                    <ModelTableExpandedRow
                      key={row.id}
                      row={row}
                      columnCount={columnCount}
                      onToggleExpand={() => toggleExpanded(row.id)}
                    />
                  )
                }

                return (
                  <ModelTableDataRow
                    key={row.id}
                    row={row}
                    maxRuntimeMs={maxRuntimeMs}
                    expanded={expanded}
                    expandable={expandable}
                    enableExpand={enableExpand}
                    onToggleExpand={() => toggleExpanded(row.id)}
                  />
                )
              })
            ) : (
              <TableRow>
                <TableCell colSpan={columnCount} className="h-24 text-center">
                  No models found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
