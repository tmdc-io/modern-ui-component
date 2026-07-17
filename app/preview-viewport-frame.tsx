"use client"

import * as React from "react"
import {
  AlignLeftIcon,
  AlignRightIcon,
  MonitorIcon,
  SmartphoneIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"

type PreviewViewport = "desktop" | "narrow"

export function PreviewViewportFrame({
  children,
  defaultViewport = "desktop",
  showToggle = true,
  showRtlToggle = true,
  className,
}: {
  children: React.ReactNode
  defaultViewport?: PreviewViewport
  showToggle?: boolean
  showRtlToggle?: boolean
  className?: string
}) {
  const [viewport, setViewport] =
    React.useState<PreviewViewport>(defaultViewport)
  const [rtl, setRtl] = React.useState(false)

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {showToggle || showRtlToggle ? (
        <div className="flex justify-end gap-1">
          {showToggle ? (
            <>
              <Button
                type="button"
                variant={viewport === "desktop" ? "secondary" : "ghost"}
                size="icon"
                className="size-8"
                aria-label="Desktop preview width"
                aria-pressed={viewport === "desktop"}
                onClick={() => setViewport("desktop")}
              >
                <MonitorIcon className="size-4" />
              </Button>
              <Button
                type="button"
                variant={viewport === "narrow" ? "secondary" : "ghost"}
                size="icon"
                className="size-8"
                aria-label="Narrow mobile preview width"
                aria-pressed={viewport === "narrow"}
                onClick={() => setViewport("narrow")}
              >
                <SmartphoneIcon className="size-4" />
              </Button>
            </>
          ) : null}
          {showRtlToggle ? (
            <Button
              type="button"
              variant={rtl ? "secondary" : "ghost"}
              size="icon"
              className="size-8"
              aria-label={rtl ? "Switch to LTR preview" : "Switch to RTL preview"}
              aria-pressed={rtl}
              onClick={() => setRtl((value) => !value)}
            >
              {rtl ? (
                <AlignRightIcon className="size-4" />
              ) : (
                <AlignLeftIcon className="size-4" />
              )}
            </Button>
          ) : null}
        </div>
      ) : null}
      <div
        className={cn(
          "mx-auto w-full transition-[max-width]",
          viewport === "narrow" ? "max-w-sm" : "max-w-full"
        )}
        dir={rtl ? "rtl" : "ltr"}
      >
        {children}
      </div>
    </div>
  )
}
