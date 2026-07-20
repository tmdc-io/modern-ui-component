"use client"

import * as React from "react"
import {
  AlertTriangleIcon,
  BoxIcon,
  FileTextIcon,
  FilterIcon,
} from "lucide-react"

import { Input } from "@/registry/default/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/default/ui/popover"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"
import {
  useTranslation,
  type Translations,
} from "@/hooks/use-translation"
import { cn } from "@/lib/utils"

export type DataProductRow = {
  id: string
  title: string
  description: string
  glossaryTerm?: string
  showQuality?: boolean
}

export type DataProductTableProps = {
  rows: DataProductRow[]
  className?: string
  enableSort?: boolean
  enableGlossaryFilter?: boolean
  emptyMessage?: string
  /** Fires whenever a row is clicked (regardless of selection). */
  onRowClick?: (row: DataProductRow) => void
  /** Fires with the hovered row, or null when the pointer leaves a row. */
  onRowHover?: (row: DataProductRow | null) => void
  /** Enable click-to-select behavior with row highlighting. */
  selectable?: boolean
  /** Allow more than one row to be selected at a time. Defaults to true. */
  multiSelect?: boolean
  /** Controlled selected row ids. Pass with onSelectionChange. */
  selectedIds?: string[]
  /** Initial selected row ids for uncontrolled usage. */
  defaultSelectedIds?: string[]
  /** Fires with the next set of selected row ids when selection changes. */
  onSelectionChange?: (ids: string[]) => void
}

export const dataProductTableMessages = {
  en: {
    dir: "ltr",
    values: {
      dataProduct: "Data Product",
      glossaryTerm: "Glossary term",
      sortDataProducts: "Sort data products",
      filterGlossaryTerms: "Filter glossary terms",
      filterGlossaryTerm: "Filter glossary term",
      searchTerms: "Search terms...",
      quality: "Quality",
      emptyMessage: "No results.",
    },
  },
  es: {
    dir: "ltr",
    values: {
      dataProduct: "Producto de datos",
      glossaryTerm: "Termino del glosario",
      sortDataProducts: "Ordenar productos de datos",
      filterGlossaryTerms: "Filtrar terminos del glosario",
      filterGlossaryTerm: "Filtrar termino del glosario",
      searchTerms: "Buscar terminos...",
      quality: "Calidad",
      emptyMessage: "Sin resultados.",
    },
  },
} satisfies Translations

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

const headerIconClassName =
  "text-muted-foreground hover:text-foreground inline-flex size-4 shrink-0 items-center justify-center rounded-sm transition-colors"

function DataProductInteractiveHeader({
  sortDirection,
  onSort,
  glossaryFilter,
  onGlossaryFilter,
  enableSort,
  enableGlossaryFilter,
}: {
  sortDirection: false | "asc" | "desc"
  onSort: () => void
  glossaryFilter: string
  onGlossaryFilter: (value: string) => void
  enableSort: boolean
  enableGlossaryFilter: boolean
}) {
  const { t } = useTranslation(dataProductTableMessages)
  return (
    <TableHeader className="[&_tr]:border-b-2 [&_tr]:border-border">
      <TableRow className="border-border bg-transparent hover:bg-transparent">
        <TableHead className="text-foreground h-11 px-4 font-bold">
          <div className="flex w-full items-center justify-between gap-2">
            <span>{t.dataProduct}</span>
            {enableSort ? (
              <button
                type="button"
                className={headerIconClassName}
                onClick={onSort}
                aria-label={t.sortDataProducts}
              >
                <ColumnSortIcon direction={sortDirection} />
              </button>
            ) : null}
          </div>
        </TableHead>
        <TableHead className="text-foreground relative h-11 px-4 font-bold">
          <span
            className="bg-border pointer-events-none absolute top-1/2 start-0 h-4 w-px -translate-y-1/2"
            aria-hidden
          />
          <div className="flex w-full items-center justify-between gap-2">
            <span>{t.glossaryTerm}</span>
            {enableGlossaryFilter ? (
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      headerIconClassName,
                      glossaryFilter && "text-primary"
                    )}
                    aria-label={t.filterGlossaryTerms}
                  >
                    <FilterIcon className="size-3" />
                  </button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-56 p-3">
                  <PopoverHeader className="px-0 pt-0">
                    <PopoverTitle className="text-sm">
                      {t.filterGlossaryTerm}
                    </PopoverTitle>
                  </PopoverHeader>
                  <div className="pt-2">
                    <Input
                      placeholder={t.searchTerms}
                      value={glossaryFilter}
                      onChange={(event) => onGlossaryFilter(event.target.value)}
                      className="h-8 text-xs"
                    />
                  </div>
                </PopoverContent>
              </Popover>
            ) : null}
          </div>
        </TableHead>
        <TableHead className="h-11 w-[120px] px-4" />
      </TableRow>
    </TableHeader>
  )
}

export function DataProductStaticHeader() {
  const { t } = useTranslation(dataProductTableMessages)
  return (
    <TableHeader className="[&_tr]:border-b-2 [&_tr]:border-border">
      <TableRow className="border-border bg-transparent hover:bg-transparent">
        <TableHead className="text-foreground h-11 px-4 font-bold">
          {t.dataProduct}
        </TableHead>
        <TableHead className="text-foreground relative h-11 px-4 font-bold">
          <span
            className="bg-border pointer-events-none absolute top-1/2 start-0 h-4 w-px -translate-y-1/2"
            aria-hidden
          />
          {t.glossaryTerm}
        </TableHead>
        <TableHead className="h-11 w-[120px] px-4" />
      </TableRow>
    </TableHeader>
  )
}

function GlossaryPill({ label }: { label: string }) {
  return (
    <span className="border-grey-8 text-foreground inline-flex max-w-full items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs">
      <FileTextIcon className="text-muted-foreground size-3.5 shrink-0" />
      <span className="truncate">{label}</span>
    </span>
  )
}

function QualityBadge() {
  const { t } = useTranslation(dataProductTableMessages)
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-[#FFF0E6] px-2.5 py-1 text-xs font-medium text-[#242422]">
      <AlertTriangleIcon className="size-3.5 fill-[#E68600] text-[#E68600]" />
      {t.quality}
    </span>
  )
}

export type DataProductDataRowProps = {
  row: DataProductRow
  selected?: boolean
  interactive?: boolean
  onClick?: (row: DataProductRow) => void
  onMouseEnter?: (row: DataProductRow) => void
  onMouseLeave?: (row: DataProductRow) => void
}

export function DataProductDataRow({
  row,
  selected = false,
  interactive = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: DataProductDataRowProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTableRowElement>) => {
    if (!onClick) return
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      onClick(row)
    }
  }

  return (
    <TableRow
      data-selected={selected ? "" : undefined}
      aria-selected={interactive ? selected : undefined}
      role={interactive ? "row" : undefined}
      tabIndex={interactive && onClick ? 0 : undefined}
      onClick={onClick ? () => onClick(row) : undefined}
      onMouseEnter={onMouseEnter ? () => onMouseEnter(row) : undefined}
      onMouseLeave={onMouseLeave ? () => onMouseLeave(row) : undefined}
      onKeyDown={onClick ? handleKeyDown : undefined}
      className={cn(
        "border-border bg-transparent transition-colors",
        interactive &&
          "hover:bg-muted/60 focus-visible:ring-ring/50 cursor-pointer outline-none focus-visible:ring-2",
        selected && "bg-teal-bg-2/70 hover:bg-teal-bg-2/70"
      )}
    >
      <TableCell className="whitespace-normal px-4 py-5 align-top">
        <div className="flex gap-3">
          <div className="border-teal-bg-1 bg-teal-bg-2 flex size-10 shrink-0 items-center justify-center rounded-lg border">
            <BoxIcon
              className="text-foreground size-[18px]"
              strokeWidth={1.5}
            />
          </div>
          <div className="min-w-0 space-y-1">
            <p className="text-foreground text-sm leading-snug font-semibold break-words">
              {row.title}
            </p>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {row.description}
            </p>
          </div>
        </div>
      </TableCell>
      <TableCell className="max-w-[10rem] whitespace-normal px-4 py-5 align-middle">
        {row.glossaryTerm ? <GlossaryPill label={row.glossaryTerm} /> : null}
      </TableCell>
      <TableCell className="whitespace-normal px-4 py-5 text-end align-middle">
        {row.showQuality ? <QualityBadge /> : null}
      </TableCell>
    </TableRow>
  )
}

function useVisibleRows(
  rows: DataProductRow[],
  {
    enableSort,
    enableGlossaryFilter,
    sortDirection,
    glossaryFilter,
  }: {
    enableSort: boolean
    enableGlossaryFilter: boolean
    sortDirection: false | "asc" | "desc"
    glossaryFilter: string
  }
) {
  return React.useMemo(() => {
    let next = [...rows]

    if (enableGlossaryFilter && glossaryFilter.trim()) {
      const query = glossaryFilter.trim().toLowerCase()
      next = next.filter((row) =>
        row.glossaryTerm?.toLowerCase().includes(query)
      )
    }

    if (enableSort && sortDirection) {
      next.sort((a, b) => {
        const cmp = a.title.localeCompare(b.title)
        return sortDirection === "asc" ? cmp : -cmp
      })
    }

    return next
  }, [rows, enableSort, enableGlossaryFilter, sortDirection, glossaryFilter])
}

export function DataProductTable({
  rows,
  className,
  enableSort = true,
  enableGlossaryFilter = true,
  emptyMessage,
  onRowClick,
  onRowHover,
  selectable = false,
  multiSelect = true,
  selectedIds,
  defaultSelectedIds,
  onSelectionChange,
}: DataProductTableProps) {
  const { t } = useTranslation(dataProductTableMessages)
  const [sortDirection, setSortDirection] = React.useState<
    false | "asc" | "desc"
  >(false)
  const [glossaryFilter, setGlossaryFilter] = React.useState("")
  const resolvedEmptyMessage = emptyMessage ?? t.emptyMessage

  const isControlled = selectedIds !== undefined
  const [internalSelected, setInternalSelected] = React.useState<string[]>(
    defaultSelectedIds ?? []
  )
  const selected = isControlled ? selectedIds : internalSelected
  const selectedSet = React.useMemo(() => new Set(selected), [selected])

  const commitSelection = React.useCallback(
    (next: string[]) => {
      if (!isControlled) setInternalSelected(next)
      onSelectionChange?.(next)
    },
    [isControlled, onSelectionChange]
  )

  const toggleSelection = React.useCallback(
    (id: string) => {
      const isSelected = selectedSet.has(id)
      if (multiSelect) {
        commitSelection(
          isSelected
            ? selected.filter((value) => value !== id)
            : [...selected, id]
        )
      } else {
        commitSelection(isSelected ? [] : [id])
      }
    },
    [selectedSet, multiSelect, commitSelection, selected]
  )

  const visibleRows = useVisibleRows(rows, {
    enableSort,
    enableGlossaryFilter,
    sortDirection,
    glossaryFilter,
  })

  const toggleSort = () => {
    setSortDirection((current) => {
      if (current === false) return "asc"
      if (current === "asc") return "desc"
      return false
    })
  }

  const showInteractiveHeader = enableSort || enableGlossaryFilter
  const rowsAreInteractive = selectable || Boolean(onRowClick)

  const handleRowClick = React.useCallback(
    (row: DataProductRow) => {
      if (selectable) toggleSelection(row.id)
      onRowClick?.(row)
    },
    [selectable, toggleSelection, onRowClick]
  )

  return (
    <div
      className={cn(
        "@container overflow-x-auto rounded-lg border border-grey-8",
        className
      )}
    >
      <Table
        className={cn(
          !rowsAreInteractive &&
            "[&_[data-slot=table-row]]:bg-transparent [&_[data-slot=table-row]:hover]:bg-transparent"
        )}
      >
        {showInteractiveHeader ? (
          <DataProductInteractiveHeader
            sortDirection={sortDirection}
            onSort={toggleSort}
            glossaryFilter={glossaryFilter}
            onGlossaryFilter={setGlossaryFilter}
            enableSort={enableSort}
            enableGlossaryFilter={enableGlossaryFilter}
          />
        ) : (
          <DataProductStaticHeader />
        )}
        <TableBody>
          {visibleRows.length ? (
            visibleRows.map((row) => (
              <DataProductDataRow
                key={row.id}
                row={row}
                interactive={rowsAreInteractive}
                selected={selectedSet.has(row.id)}
                onClick={
                  rowsAreInteractive ? handleRowClick : undefined
                }
                onMouseEnter={onRowHover ? onRowHover : undefined}
                onMouseLeave={onRowHover ? () => onRowHover(null) : undefined}
              />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="h-24 text-center">
                {resolvedEmptyMessage}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
