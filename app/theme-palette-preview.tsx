"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type ColorSwatchProps = {
  label: string
  hex?: string
  className?: string
  style?: React.CSSProperties
}

function ColorSwatch({ label, hex, className, style }: ColorSwatchProps) {
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <div
        className={cn("h-10 rounded-md border border-border/50", className)}
        style={style}
      />
      <span className="truncate text-xs leading-tight">{label}</span>
      {hex ? (
        <span className="text-muted-foreground font-mono text-[10px] uppercase">
          {hex}
        </span>
      ) : null}
    </div>
  )
}

export function PaletteSection({
  title,
  description,
  children,
  compact = false,
}: {
  title: string
  description?: string
  children: React.ReactNode
  compact?: boolean
}) {
  return (
    <section className="flex w-full flex-col gap-3">
      <div>
        <h4 className="text-sm font-medium">{title}</h4>
        {description ? (
          <p className="text-muted-foreground text-xs">{description}</p>
        ) : null}
      </div>
      <div
        className={cn(
          "grid gap-3",
          compact
            ? "grid-cols-3 sm:grid-cols-4 md:grid-cols-6"
            : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        )}
      >
        {children}
      </div>
    </section>
  )
}

function PaletteGrid({
  items,
}: {
  items: readonly (readonly [string, string])[]
}) {
  return (
    <>
      {items.map(([label, cls]) => (
        <ColorSwatch key={label} label={label} className={cls} />
      ))}
    </>
  )
}

const figmaBrand = [
  ["Slate", "bg-slate"],
  ["Dark Teal", "bg-dark-teal"],
  ["Cream", "bg-cream border"],
  ["Cream BG 1", "bg-cream-bg-1 border"],
  ["Cream BG 2", "bg-cream-bg-2 border"],
  ["Cream BG 3", "bg-cream-bg-3 border"],
  ["Teal BG 1", "bg-teal-bg-1 border"],
  ["Teal BG 2", "bg-teal-bg-2 border"],
] as const

const figmaBlacks = [
  ["Black Primary", "bg-black-primary"],
  ["Black Secondary", "bg-black-secondary"],
  ["Black Tertiary", "bg-black-tertiary"],
  ["Black Quaternary", "bg-black-quaternary"],
] as const

const figmaGreys = [
  ["Grey 16", "bg-grey-16 border"],
  ["Grey 8", "bg-grey-8 border"],
  ["Grey 4", "bg-grey-4 border"],
  ["Grey 2", "bg-grey-2 border"],
  ["White", "bg-white border"],
] as const

const semanticSurfaces = [
  ["Background", "bg-background border"],
  ["Foreground", "bg-foreground"],
  ["Card", "bg-card border"],
  ["Card FG", "bg-card-foreground"],
  ["Popover", "bg-popover border"],
  ["Popover FG", "bg-popover-foreground"],
  ["Secondary", "bg-secondary border"],
  ["Secondary FG", "bg-secondary-foreground"],
  ["Muted", "bg-muted border"],
  ["Muted FG", "bg-muted-foreground"],
  ["Accent", "bg-accent border"],
  ["Accent FG", "bg-accent-foreground"],
] as const

const semanticActions = [
  ["Primary", "bg-primary"],
  ["Primary FG", "bg-primary-foreground border"],
  ["Brand", "bg-brand"],
  ["Brand FG", "bg-brand-foreground border"],
  ["Destructive", "bg-destructive"],
  ["Destructive FG", "bg-destructive-foreground border"],
  ["Cream", "bg-cream border"],
  ["Teal BG", "bg-teal-bg border"],
] as const

const semanticBorders = [
  ["Border", "bg-border"],
  ["Input", "bg-input border"],
  ["Ring", "bg-ring"],
] as const

const textScale = [
  ["Text Primary", "bg-text-primary"],
  ["Text Secondary", "bg-text-secondary"],
  ["Text Tertiary", "bg-text-tertiary"],
  ["Text Quaternary", "bg-text-quaternary"],
] as const

const chartColors = [
  ["Chart 1", "bg-chart-1"],
  ["Chart 2", "bg-chart-2"],
  ["Chart 3", "bg-chart-3"],
  ["Chart 4", "bg-chart-4"],
  ["Chart 5", "bg-chart-5"],
] as const

const sidebarColors = [
  ["Sidebar", "bg-sidebar border"],
  ["Sidebar FG", "bg-sidebar-foreground"],
  ["Sidebar Primary", "bg-sidebar-primary"],
  ["Sidebar Primary FG", "bg-sidebar-primary-foreground border"],
  ["Sidebar Accent", "bg-sidebar-accent border"],
  ["Sidebar Accent FG", "bg-sidebar-accent-foreground"],
  ["Sidebar Border", "bg-sidebar-border border"],
  ["Sidebar Ring", "bg-sidebar-ring"],
] as const

const dataosColors = [
  ["DataOS Surface", "bg-dataos-surface border"],
  ["Success BG", "bg-dataos-success-bg border"],
  ["Success FG", "bg-dataos-success-fg"],
  ["Warn BG", "bg-dataos-warn-bg border"],
  ["Warn FG", "bg-dataos-warn-fg"],
  ["Fail BG", "bg-dataos-fail-bg border"],
  ["Fail FG", "bg-dataos-fail-fg"],
] as const

const compactBrand = [
  ["Slate", "bg-slate"],
  ["Dark Teal", "bg-dark-teal"],
  ["Cream", "bg-cream border"],
  ["Teal BG 1", "bg-teal-bg-1 border"],
] as const

const compactSemantic = [
  ["Primary", "bg-primary"],
  ["Background", "bg-background border"],
  ["Accent", "bg-accent border"],
  ["Destructive", "bg-destructive"],
] as const

export function ThemeFigmaBrandPreview() {
  return (
    <PaletteSection
      title="Brand & surfaces"
      description="Slate, teal, and cream ramps from Figma Dev-Ready Designs."
    >
      <PaletteGrid items={figmaBrand} />
    </PaletteSection>
  )
}

export function ThemeFigmaBlacksPreview() {
  return (
    <PaletteSection title="Blacks" description="Ink scale for text hierarchy.">
      <PaletteGrid items={figmaBlacks} />
    </PaletteSection>
  )
}

export function ThemeFigmaGreysPreview() {
  return (
    <PaletteSection title="Greys" description="Neutral grey ramp and white.">
      <PaletteGrid items={figmaGreys} />
    </PaletteSection>
  )
}

export function ThemeSemanticSurfacesPreview() {
  return (
    <PaletteSection
      title="Surfaces"
      description="Backgrounds, cards, popovers, and muted layers."
    >
      <PaletteGrid items={semanticSurfaces} />
    </PaletteSection>
  )
}

export function ThemeSemanticActionsPreview() {
  return (
    <PaletteSection
      title="Actions & brand"
      description="Primary, brand, destructive, and accent pairings."
    >
      <PaletteGrid items={semanticActions} />
    </PaletteSection>
  )
}

export function ThemeSemanticBordersPreview() {
  return (
    <PaletteSection
      title="Borders & focus"
      description="Border, input, and ring tokens."
    >
      <PaletteGrid items={semanticBorders} />
    </PaletteSection>
  )
}

export function ThemeTextScalePreview() {
  return (
    <PaletteSection title="Text scale" description="Figma text color tokens.">
      <PaletteGrid items={textScale} />
    </PaletteSection>
  )
}

export function ThemeChartsPreview() {
  return (
    <PaletteSection title="Charts" description="Data visualization ramp.">
      <PaletteGrid items={chartColors} />
    </PaletteSection>
  )
}

export function ThemeSidebarPreview() {
  return (
    <PaletteSection title="Sidebar" description="Navigation surface tokens.">
      <PaletteGrid items={sidebarColors} />
    </PaletteSection>
  )
}

export function ThemeDataOsPreview() {
  return (
    <PaletteSection
      title="DataOS UI"
      description="Quality summary card state colors."
    >
      <PaletteGrid items={dataosColors} />
    </PaletteSection>
  )
}

export function ThemePaletteOverviewPreview() {
  return (
    <div className="flex w-full flex-col gap-4">
      <p className="text-muted-foreground text-sm leading-relaxed">
        ModernUI ships Figma-aligned CSS variables and Tailwind v4{" "}
        <code className="text-foreground text-xs">@theme</code> mappings. Toggle
        light/dark mode in the header to compare semantic tokens.
      </p>
      <PaletteSection title="Brand highlights" compact>
        <PaletteGrid items={compactBrand} />
      </PaletteSection>
      <PaletteSection
        title="Semantic highlights"
        description="Primary actions and surfaces."
        compact
      >
        <PaletteGrid items={compactSemantic} />
      </PaletteSection>
    </div>
  )
}

/** Compact preview for the registry homepage card at /#theme */
export function ThemePalettePreview() {
  return (
    <div className="flex w-full flex-col gap-5">
      <ThemePaletteOverviewPreview />
      <p className="text-muted-foreground text-xs">
        Open the palette docs for the full Figma foundation, semantic groups,
        charts, sidebar, and DataOS tokens.
      </p>
    </div>
  )
}

/** Full palette — all sections in documentation order */
export function ThemePaletteFullPreview() {
  return (
    <div className="flex w-full flex-col gap-6">
      <ThemeFigmaBrandPreview />
      <ThemeFigmaBlacksPreview />
      <ThemeFigmaGreysPreview />
      <ThemeSemanticSurfacesPreview />
      <ThemeSemanticActionsPreview />
      <ThemeSemanticBordersPreview />
      <ThemeTextScalePreview />
      <ThemeChartsPreview />
      <ThemeSidebarPreview />
      <ThemeDataOsPreview />
    </div>
  )
}
