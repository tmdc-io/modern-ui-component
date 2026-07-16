"use client"

import * as React from "react"
import { PanelLeftCloseIcon, PanelLeftOpenIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type LayoutContextValue = {
  registerSider: () => () => void
}

const LayoutContext = React.createContext<LayoutContextValue | null>(null)

function Layout({
  className,
  hasSider,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  /** Force row direction when a Sider is present (useful for SSR). */
  hasSider?: boolean
}) {
  const [siderCount, setSiderCount] = React.useState(0)
  const siderPresent = hasSider ?? siderCount > 0

  const registerSider = React.useCallback(() => {
    setSiderCount((n) => n + 1)
    return () => setSiderCount((n) => Math.max(0, n - 1))
  }, [])

  const contextValue = React.useMemo(
    () => ({ registerSider }),
    [registerSider]
  )

  return (
    <LayoutContext.Provider value={contextValue}>
      <div
        data-slot="layout"
        data-has-sider={siderPresent ? "" : undefined}
        className={cn(
          "bg-background text-foreground flex min-h-0 w-full flex-1",
          siderPresent ? "flex-row" : "flex-col",
          className
        )}
        style={style}
        {...props}
      >
        {children}
      </div>
    </LayoutContext.Provider>
  )
}

function LayoutHeader({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="layout-header"
      className={cn(
        "bg-background flex h-16 shrink-0 items-center border-b px-4",
        className
      )}
      {...props}
    />
  )
}

function LayoutFooter({ className, ...props }: React.ComponentProps<"footer">) {
  return (
    <footer
      data-slot="layout-footer"
      className={cn(
        "bg-background flex h-14 shrink-0 items-center border-t px-4",
        className
      )}
      {...props}
    />
  )
}

function LayoutContent({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="layout-content"
      className={cn("bg-background min-h-0 min-w-0 flex-1", className)}
      {...props}
    />
  )
}

type LayoutSiderProps = React.ComponentProps<"aside"> & {
  collapsed?: boolean
  defaultCollapsed?: boolean
  collapsible?: boolean
  collapsedWidth?: number | string
  width?: number | string
  trigger?: React.ReactNode | null
  side?: "left" | "right"
  onCollapse?: (collapsed: boolean) => void
}

function toCssSize(value: number | string) {
  return typeof value === "number" ? `${value}px` : value
}

function LayoutSider({
  className,
  style,
  children,
  collapsed: collapsedProp,
  defaultCollapsed = false,
  collapsible = false,
  collapsedWidth = 80,
  width = 200,
  trigger,
  side = "left",
  onCollapse,
  ...props
}: LayoutSiderProps) {
  const layout = React.useContext(LayoutContext)
  const [uncontrolledCollapsed, setUncontrolledCollapsed] =
    React.useState(defaultCollapsed)
  const collapsed = collapsedProp ?? uncontrolledCollapsed

  React.useEffect(() => {
    if (!layout) return
    return layout.registerSider()
  }, [layout])

  const setCollapsed = React.useCallback(
    (next: boolean) => {
      if (collapsedProp === undefined) {
        setUncontrolledCollapsed(next)
      }
      onCollapse?.(next)
    },
    [collapsedProp, onCollapse]
  )

  const showDefaultTrigger = collapsible && trigger === undefined
  const customTrigger = collapsible ? trigger : null

  return (
    <aside
      data-slot="layout-sider"
      data-collapsed={collapsed ? "" : undefined}
      data-side={side}
      className={cn(
        "bg-muted/40 relative flex shrink-0 flex-col border-border transition-[width] duration-200 ease-linear",
        side === "left" ? "border-r" : "border-l",
        className
      )}
      style={{
        width: toCssSize(collapsed ? collapsedWidth : width),
        ...style,
      }}
      {...props}
    >
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        {children}
      </div>
      {showDefaultTrigger ? (
        <button
          type="button"
          data-slot="layout-sider-trigger"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="text-muted-foreground hover:bg-muted hover:text-foreground absolute inset-x-0 bottom-0 flex h-10 items-center justify-center border-t"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <PanelLeftOpenIcon className="size-4" />
          ) : (
            <PanelLeftCloseIcon className="size-4" />
          )}
        </button>
      ) : null}
      {customTrigger != null ? (
        <div
          data-slot="layout-sider-trigger"
          className="border-border shrink-0 border-t"
          onClick={() => setCollapsed(!collapsed)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              setCollapsed(!collapsed)
            }
          }}
          role={typeof customTrigger === "string" ? "button" : undefined}
          tabIndex={typeof customTrigger === "string" ? 0 : undefined}
        >
          {customTrigger}
        </div>
      ) : null}
    </aside>
  )
}

export {
  Layout,
  LayoutHeader,
  LayoutFooter,
  LayoutContent,
  LayoutSider,
}
