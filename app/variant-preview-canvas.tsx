"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function LazyVariantPreview({
  Preview,
  fill,
}: {
  Preview: React.ComponentType
  fill?: boolean
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "240px 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn("w-full", fill ? "h-full min-h-0" : "min-h-[12rem]")}
    >
      {visible ? <Preview /> : null}
    </div>
  )
}

export function VariantPreviewCanvas({
  Preview,
  tall = false,
  fitContent = false,
  blockLayout = false,
  containSidebar = false,
  popoverPreview = false,
  flushPreview = false,
}: {
  Preview: React.ComponentType
  tall?: boolean
  fitContent?: boolean
  blockLayout?: boolean
  containSidebar?: boolean
  popoverPreview?: boolean
  /** Edge-to-edge demos (no padding); child should use h-full when tall. */
  flushPreview?: boolean
}) {
  const fillHeight =
    flushPreview && (tall || blockLayout)

  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-muted/50",
        flushPreview ? "overflow-hidden p-0" : "p-1.5"
      )}
    >
      <div
        className={cn(
          "relative isolate w-full bg-card",
          "[transform:translateZ(0)]",
          flushPreview
            ? "rounded-lg"
            : "rounded-md shadow-sm ring-1 ring-border/40",
          popoverPreview || fitContent ? "overflow-visible" : "overflow-hidden",
          blockLayout
            ? "h-[min(720px,80vh)]"
            : fitContent
              ? undefined
              : popoverPreview
                ? "min-h-80"
                : tall
                  ? flushPreview
                    ? "h-[min(36rem,75vh)]"
                    : "h-[min(520px,70vh)]"
                  : flushPreview
                    ? undefined
                    : "min-h-48",
          containSidebar &&
            "[&_[data-slot=sidebar-wrapper]]:!min-h-0 [&_[data-slot=sidebar-wrapper]]:h-full [&_[data-slot=sidebar-container]]:!absolute [&_[data-slot=sidebar-container]]:top-0 [&_[data-slot=sidebar-container]]:!h-full"
        )}
      >
        <div
          className={cn(
            fitContent ? "w-full" : "size-full",
            fitContent
              ? "overflow-visible p-4"
              : popoverPreview
                ? "overflow-visible p-4 pb-52"
                : flushPreview
                  ? cn(
                      "min-h-0 overflow-hidden p-0",
                      fillHeight ? "h-full" : "h-auto"
                    )
                  : cn(
                      "overflow-auto",
                      blockLayout ? "overflow-x-hidden" : "p-4"
                    )
          )}
        >
          <LazyVariantPreview Preview={Preview} fill={fillHeight} />
        </div>
      </div>
    </div>
  )
}

export function BlockPreviewFrame({
  Block,
}: {
  Block: React.ComponentType
}) {
  return (
    <div
      className={cn(
        "relative w-full min-h-[min(720px,80vh)]",
        "[&_[data-slot=sidebar-wrapper]]:flex [&_[data-slot=sidebar-wrapper]]:!min-h-[min(720px,80vh)]",
        "[&_[data-slot=sidebar-container]]:!absolute [&_[data-slot=sidebar-container]]:inset-y-0 [&_[data-slot=sidebar-container]]:!h-full",
        "[&_[data-slot=sidebar-inner]]:h-full",
        "[&_[class*='min-h-\\[100vh\\]']]:!min-h-48"
      )}
    >
      <Block />
    </div>
  )
}

export function BlockLayoutPlaceholder({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="text-muted-foreground flex min-h-[16rem] flex-col items-center justify-center gap-2 p-8 text-center text-sm">
      <p className="text-foreground font-medium">{title}</p>
      <p>{description}</p>
      <p>Use the Code button to copy the full block into your project.</p>
    </div>
  )
}
