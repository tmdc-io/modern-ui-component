"use client"

import * as React from "react"
import { MinusIcon, PlusIcon, RotateCcwIcon } from "lucide-react"

import {
  DEFAULT_TEXT_SIZE_INDEX,
  clampTextSizeIndex,
  getTextSizeLabel,
  persistTextSizeIndex,
  readStoredTextSizeIndex,
  type TextSizeIndex,
} from "@/app/text-size"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip"

export function TextSizeControl({ className }: { className?: string }) {
  const [index, setIndex] = React.useState<TextSizeIndex>(DEFAULT_TEXT_SIZE_INDEX)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    const stored = readStoredTextSizeIndex()
    setIndex(stored)
    persistTextSizeIndex(stored)
    setMounted(true)
  }, [])

  const updateIndex = React.useCallback((next: number) => {
    const clamped = clampTextSizeIndex(next)
    setIndex(clamped)
    persistTextSizeIndex(clamped)
  }, [])

  const canDecrease = index > 0
  const canIncrease = index < 3
  const label = getTextSizeLabel(index)

  return (
    <div
      className={cn(
        "border-border bg-muted/40 flex items-center rounded-md border p-0.5",
        className
      )}
      aria-label="Text size"
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-8 shrink-0"
            disabled={!mounted || !canDecrease}
            onClick={() => updateIndex(index - 1)}
            aria-label="Decrease text size"
          >
            <MinusIcon className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Decrease text size</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            className="text-muted-foreground hover:text-foreground hidden min-w-14 px-1 text-center text-xs font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 sm:inline"
            disabled={!mounted}
            onClick={() => updateIndex(DEFAULT_TEXT_SIZE_INDEX)}
            aria-label={`Reset text size. Current: ${label}`}
          >
            <span className="text-foreground text-sm leading-none">A</span>
            <span className="mt-0.5 block text-[10px] leading-none">{label}</span>
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          {label} — click to reset
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-8 shrink-0 sm:hidden"
            disabled={!mounted || index === DEFAULT_TEXT_SIZE_INDEX}
            onClick={() => updateIndex(DEFAULT_TEXT_SIZE_INDEX)}
            aria-label="Reset text size"
          >
            <RotateCcwIcon className="size-3.5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Reset text size</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-8 shrink-0"
            disabled={!mounted || !canIncrease}
            onClick={() => updateIndex(index + 1)}
            aria-label="Increase text size"
          >
            <PlusIcon className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Increase text size</TooltipContent>
      </Tooltip>
    </div>
  )
}
