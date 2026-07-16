"use client"

import * as React from "react"
import {
  BoxIcon,
  DatabaseIcon,
  EllipsisIcon,
  FileCode2Icon,
  FileTextIcon,
  GripVerticalIcon,
  HomeIcon,
  PanelLeftCloseIcon,
  PanelLeftOpenIcon,
  PinIcon,
  PinOffIcon,
  ShapesIcon,
} from "lucide-react"

import { DataOsLogo, DataOsLogoMark } from "@/registry/default/blocks/dataos-sidebar/brand-logo"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip"
import { cn } from "@/lib/utils"

export type DataOsSidebarItem = {
  id: string
  label: string
  icon: React.ReactNode
  href?: string
  onSelect?: () => void
  /** Set false to exclude from the pinned area. Defaults to true (except home). */
  pinnable?: boolean
  /** When true, the item is always pinned and cannot be unpinned (drag reorder still allowed). */
  pinLocked?: boolean
}

export type DataOsSidebarProps = {
  activeId?: string
  defaultActiveId?: string
  onActiveChange?: (id: string) => void
  collapsed?: boolean
  defaultCollapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
  items?: DataOsSidebarItem[]
  footerItems?: DataOsSidebarItem[]
  /** Enable the pinned area with hover-to-pin and drag-to-reorder. */
  enablePinning?: boolean
  /** Max apps allowed in the pinned area. Defaults to 3. */
  maxPinned?: number
  pinnedIds?: string[]
  defaultPinnedIds?: string[]
  onPinnedChange?: (ids: string[]) => void
  className?: string
}

const defaultMainItems: DataOsSidebarItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <HomeIcon className="size-[18px]" strokeWidth={1.75} />,
    pinnable: false,
  },
  {
    id: "data-products",
    label: "Data Products",
    icon: <BoxIcon className="size-[18px]" strokeWidth={1.75} />,
    pinLocked: true,
  },
  {
    id: "datasets",
    label: "Datasets",
    icon: <DatabaseIcon className="size-[18px]" strokeWidth={1.75} />,
  },
  {
    id: "workbench",
    label: "Workbench",
    icon: <FileCode2Icon className="size-[18px]" strokeWidth={1.75} />,
  },
  {
    id: "resources",
    label: "Resources",
    icon: <ShapesIcon className="size-[18px]" strokeWidth={1.75} />,
  },
  {
    id: "more",
    label: "More",
    icon: <EllipsisIcon className="size-[18px]" strokeWidth={1.75} />,
  },
]

const defaultFooterItems: DataOsSidebarItem[] = [
  {
    id: "close-panel",
    label: "Close panel",
    icon: <PanelLeftCloseIcon className="size-[18px]" strokeWidth={1.75} />,
  },
  {
    id: "documentation",
    label: "Documentation",
    icon: <FileTextIcon className="size-[18px]" strokeWidth={1.75} />,
  },
]

const mainDividersAfter = new Set(["data-products", "workbench"])

function SidebarDivider({ collapsed }: { collapsed: boolean }) {
  return (
    <div
      className={cn("bg-grey-16 my-1.5 h-px", collapsed ? "mx-2" : "mx-3")}
      role="separator"
    />
  )
}

type SidebarRowProps = {
  item: DataOsSidebarItem
  active: boolean
  collapsed: boolean
  onSelect: () => void
  pinned?: boolean
  locked?: boolean
  showPin?: boolean
  atLimit?: boolean
  limitMessage?: string
  onTogglePin?: () => void
  draggable?: boolean
  dragging?: boolean
  dragOver?: boolean
  onDragStart?: (event: React.DragEvent<HTMLDivElement>) => void
  onDragOver?: (event: React.DragEvent<HTMLDivElement>) => void
  onDrop?: (event: React.DragEvent<HTMLDivElement>) => void
  onDragEnd?: () => void
}

function SidebarRow({
  item,
  active,
  collapsed,
  onSelect,
  pinned = false,
  locked = false,
  showPin = false,
  atLimit = false,
  limitMessage,
  onTogglePin,
  draggable = false,
  dragging = false,
  dragOver = false,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
}: SidebarRowProps) {
  const buttonClassName = cn(
    "flex items-center rounded-md text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
    collapsed ? "mx-auto size-9 justify-center p-0" : "w-full gap-2.5 px-3 py-2",
    active
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "text-foreground hover:bg-teal-bg-2",
    !collapsed && showPin && (pinned ? "pr-14" : "pr-9")
  )

  const iconWrap = (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center",
        collapsed ? "size-8" : "size-[18px]"
      )}
    >
      {item.icon}
    </span>
  )

  const navButton = item.href ? (
    <a
      href={item.href}
      className={buttonClassName}
      aria-current={active ? "page" : undefined}
    >
      {iconWrap}
      {!collapsed ? (
        <span className="truncate text-sm font-medium">{item.label}</span>
      ) : null}
    </a>
  ) : (
    <button
      type="button"
      className={buttonClassName}
      aria-current={active ? "page" : undefined}
      onClick={onSelect}
    >
      {iconWrap}
      {!collapsed ? (
        <span className="truncate text-sm font-medium">{item.label}</span>
      ) : null}
    </button>
  )

  if (collapsed) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{navButton}</TooltipTrigger>
        <TooltipContent side="right" align="center" sideOffset={8}>
          {item.label}
        </TooltipContent>
      </Tooltip>
    )
  }

  if (!showPin) {
    return navButton
  }

  return (
    <div
      className={cn(
        "group relative rounded-md",
        !active && "hover:bg-teal-bg-2",
        dragging && "opacity-50",
        dragOver && "ring-2 ring-primary/40"
      )}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
    >
      {navButton}
      <div className="absolute inset-y-0 right-1.5 flex items-center gap-0.5">
        {pinned ? (
          <span
            className={cn(
              "flex size-6 cursor-grab items-center justify-center rounded opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 active:cursor-grabbing",
              active ? "text-primary-foreground/70" : "text-muted-foreground"
            )}
            aria-hidden
          >
            <GripVerticalIcon className="size-3.5" />
          </span>
        ) : null}
        {locked ? (
          <span
            className={cn(
              "flex size-6 items-center justify-center rounded opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100",
              active ? "text-primary-foreground/70" : "text-muted-foreground"
            )}
            aria-label={`${item.label} is always pinned`}
            title={`${item.label} is always pinned`}
          >
            <PinIcon className="size-3.5 fill-current" />
          </span>
        ) : !pinned && atLimit ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  onTogglePin?.()
                }}
                aria-label={limitMessage ?? `Pin ${item.label}`}
                aria-disabled
                className="text-muted-foreground flex size-6 cursor-not-allowed items-center justify-center rounded opacity-0 transition-opacity group-hover:opacity-60 focus-visible:opacity-60"
              >
                <PinIcon className="size-3.5" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" align="center" sideOffset={6}>
              {limitMessage ?? "Pin limit reached"}
            </TooltipContent>
          </Tooltip>
        ) : (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              onTogglePin?.()
            }}
            aria-label={pinned ? `Unpin ${item.label}` : `Pin ${item.label}`}
            aria-pressed={pinned}
            className={cn(
              "flex size-6 items-center justify-center rounded opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100",
              active
                ? "text-primary-foreground/80 hover:bg-primary-foreground/15"
                : "text-muted-foreground hover:bg-teal-bg-1 hover:text-primary"
            )}
          >
            {pinned ? (
              <PinOffIcon className="size-3.5" />
            ) : (
              <PinIcon className="size-3.5" />
            )}
          </button>
        )}
      </div>
    </div>
  )
}

export function DataOsSidebar({
  activeId,
  defaultActiveId = "home",
  onActiveChange,
  collapsed,
  defaultCollapsed = false,
  onCollapsedChange,
  items = defaultMainItems,
  footerItems = defaultFooterItems,
  enablePinning = true,
  maxPinned = 3,
  pinnedIds,
  defaultPinnedIds = ["data-products"],
  onPinnedChange,
  className,
}: DataOsSidebarProps) {
  const isCollapsedControlled = collapsed !== undefined
  const [internalCollapsed, setInternalCollapsed] = React.useState(defaultCollapsed)
  const isActiveControlled = activeId !== undefined
  const [internalActiveId, setInternalActiveId] = React.useState(defaultActiveId)
  const isPinnedControlled = pinnedIds !== undefined
  const [internalPinned, setInternalPinned] = React.useState(defaultPinnedIds)

  const [draggingId, setDraggingId] = React.useState<string | null>(null)
  const [dragOverId, setDragOverId] = React.useState<string | null>(null)

  const resolvedCollapsed = isCollapsedControlled ? collapsed : internalCollapsed
  const resolvedActiveId = isActiveControlled ? activeId : internalActiveId
  const rawPinned = isPinnedControlled ? pinnedIds : internalPinned

  const lockedIds = React.useMemo(
    () =>
      items
        .filter((item) => item.pinLocked && item.id !== "home")
        .map((item) => item.id),
    [items]
  )

  // Locked items are always pinned, even if a consumer omits them.
  const resolvedPinned = React.useMemo(() => {
    const missing = lockedIds.filter((id) => !rawPinned.includes(id))
    return missing.length ? [...missing, ...rawPinned] : rawPinned
  }, [rawPinned, lockedIds])

  const setCollapsed = React.useCallback(
    (next: boolean) => {
      if (!isCollapsedControlled) setInternalCollapsed(next)
      onCollapsedChange?.(next)
    },
    [isCollapsedControlled, onCollapsedChange]
  )

  const commitPinned = React.useCallback(
    (next: string[]) => {
      if (!isPinnedControlled) setInternalPinned(next)
      onPinnedChange?.(next)
    },
    [isPinnedControlled, onPinnedChange]
  )

  const handleSelect = React.useCallback(
    (item: DataOsSidebarItem) => {
      if (item.id === "close-panel") {
        setCollapsed(!resolvedCollapsed)
        item.onSelect?.()
        return
      }

      if (!isActiveControlled) setInternalActiveId(item.id)
      onActiveChange?.(item.id)
      item.onSelect?.()
    },
    [isActiveControlled, onActiveChange, resolvedCollapsed, setCollapsed]
  )

  const togglePin = React.useCallback(
    (item: DataOsSidebarItem) => {
      if (resolvedPinned.includes(item.id)) {
        if (item.pinLocked) return
        commitPinned(resolvedPinned.filter((value) => value !== item.id))
      } else if (resolvedPinned.length < maxPinned) {
        commitPinned([...resolvedPinned, item.id])
      }
    },
    [resolvedPinned, maxPinned, commitPinned]
  )

  const reorderPinned = React.useCallback(
    (sourceId: string, targetId: string) => {
      if (sourceId === targetId) return
      const next = resolvedPinned.filter((value) => value !== sourceId)
      const targetIndex = next.indexOf(targetId)
      if (targetIndex === -1) return
      next.splice(targetIndex, 0, sourceId)
      commitPinned(next)
    },
    [resolvedPinned, commitPinned]
  )

  const isPinnable = (item: DataOsSidebarItem) =>
    enablePinning && item.id !== "home" && item.pinnable !== false

  const homeItems = items.filter((item) => item.id === "home")
  const rest = items.filter((item) => item.id !== "home")
  const pinnedSet = new Set(resolvedPinned)

  const pinnedItems = resolvedPinned
    .map((id) => rest.find((item) => item.id === id))
    .filter((item): item is DataOsSidebarItem => Boolean(item))

  const mainItems = rest.filter((item) => !pinnedSet.has(item.id))
  const atPinLimit = resolvedPinned.length >= maxPinned
  const pinLimitMessage = `Only ${maxPinned} allow`

  return (
    <TooltipProvider delayDuration={0}>
      <aside
          className={cn(
          "bg-cream-bg-1 text-foreground flex h-full min-h-[32rem] flex-col border-r border-grey-8/80 transition-[width] duration-200",
          resolvedCollapsed ? "w-14" : "w-56",
          className
        )}
      >
      <div
        className={cn(
          "flex items-center",
          resolvedCollapsed ? "justify-center px-2 py-5" : "px-4 py-5"
        )}
      >
        {resolvedCollapsed ? (
          <DataOsLogoMark className="size-8 text-foreground" />
        ) : (
          <DataOsLogo className="h-7" />
        )}
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-2">
        {homeItems.map((item) => (
          <SidebarRow
            key={item.id}
            item={item}
            active={resolvedActiveId === item.id}
            collapsed={resolvedCollapsed}
            onSelect={() => handleSelect(item)}
          />
        ))}

        {pinnedItems.length > 0 ? (
          <>
            {pinnedItems.map((item) => (
              <SidebarRow
                key={item.id}
                item={item}
                active={resolvedActiveId === item.id}
                collapsed={resolvedCollapsed}
                onSelect={() => handleSelect(item)}
                pinned
                locked={item.pinLocked}
                showPin={!resolvedCollapsed}
                onTogglePin={() => togglePin(item)}
                draggable={!resolvedCollapsed}
                dragging={draggingId === item.id}
                dragOver={dragOverId === item.id && draggingId !== item.id}
                onDragStart={(event) => {
                  setDraggingId(item.id)
                  event.dataTransfer.effectAllowed = "move"
                  event.dataTransfer.setData("text/plain", item.id)
                }}
                onDragOver={(event) => {
                  event.preventDefault()
                  event.dataTransfer.dropEffect = "move"
                  setDragOverId(item.id)
                }}
                onDrop={(event) => {
                  event.preventDefault()
                  const sourceId = event.dataTransfer.getData("text/plain")
                  if (sourceId) reorderPinned(sourceId, item.id)
                  setDraggingId(null)
                  setDragOverId(null)
                }}
                onDragEnd={() => {
                  setDraggingId(null)
                  setDragOverId(null)
                }}
              />
            ))}
          </>
        ) : null}

        {pinnedItems.length > 0 ? (
          <SidebarDivider collapsed={resolvedCollapsed} />
        ) : null}

        {mainItems.map((item, index) => {
          const pinnable = isPinnable(item)
          return (
            <React.Fragment key={item.id}>
              <SidebarRow
                item={item}
                active={resolvedActiveId === item.id}
                collapsed={resolvedCollapsed}
                onSelect={() => handleSelect(item)}
                showPin={pinnable && !resolvedCollapsed}
                atLimit={atPinLimit}
                limitMessage={pinLimitMessage}
                onTogglePin={() => togglePin(item)}
              />
              {mainDividersAfter.has(item.id) && index < mainItems.length - 1 ? (
                <SidebarDivider collapsed={resolvedCollapsed} />
              ) : null}
            </React.Fragment>
          )
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-1 px-2 pb-4">
        {footerItems.map((item, index) => {
          const footerItem =
            item.id === "close-panel"
              ? {
                  ...item,
                  label: resolvedCollapsed ? "Open panel" : "Close panel",
                  icon: resolvedCollapsed ? (
                    <PanelLeftOpenIcon className="size-[18px]" strokeWidth={1.75} />
                  ) : (
                    <PanelLeftCloseIcon className="size-[18px]" strokeWidth={1.75} />
                  ),
                }
              : item

          return (
            <React.Fragment key={item.id}>
              <SidebarRow
                item={footerItem}
                active={resolvedActiveId === item.id}
                collapsed={resolvedCollapsed}
                onSelect={() => handleSelect(item)}
              />
              {index === 0 ? (
                <SidebarDivider collapsed={resolvedCollapsed} />
              ) : null}
            </React.Fragment>
          )
        })}
      </div>
    </aside>
    </TooltipProvider>
  )
}
