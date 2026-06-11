import type { ComponentApiDoc } from "@/app/component-variants/types"

export const themeApi: ComponentApiDoc = {
  features: [
    "Figma Dev-Ready palette as CSS custom properties.",
    "Tailwind v4 @theme inline mappings for bg-*, text-*, and border-* utilities.",
    "Light and dark semantic tokens with class-based dark mode.",
    "Chart, sidebar, and DataOS quality state color ramps.",
  ],
  cssVariants: [
    {
      title: "Figma brand & surfaces",
      variants: [
        { name: "--slate / bg-slate", description: "#242422 — brand slate" },
        { name: "--dark-teal / bg-dark-teal", description: "#009293 — brand teal" },
        { name: "--cream / bg-cream", description: "#EDE9E5 — brand cream" },
        { name: "--cream-bg-1 … --cream-bg-3", description: "Cream surface ramp" },
        { name: "--teal-bg-1 … --teal-bg-2", description: "Teal surface ramp" },
      ],
    },
    {
      title: "Figma blacks & greys",
      variants: [
        { name: "--black-primary … --black-quaternary", description: "Ink text scale" },
        { name: "--grey-16 … --grey-2, --white", description: "Neutral grey ramp" },
      ],
    },
    {
      title: "Semantic surfaces",
      variants: [
        { name: "--background, --foreground", description: "Page background and default text" },
        { name: "--card, --card-foreground", description: "Card surfaces" },
        { name: "--popover, --popover-foreground", description: "Popover surfaces" },
        { name: "--secondary, --muted, --accent", description: "Layered surfaces with foreground pairings" },
      ],
    },
    {
      title: "Semantic actions",
      variants: [
        { name: "--primary, --primary-foreground", description: "Primary actions" },
        { name: "--brand, --brand-foreground", description: "Brand accent actions" },
        { name: "--destructive, --destructive-foreground", description: "Destructive actions" },
        { name: "--cream, --teal-bg", description: "Extended brand surfaces" },
      ],
    },
    {
      title: "Borders & focus",
      variants: [
        { name: "--border, --input, --ring", description: "Borders, inputs, and focus rings" },
      ],
    },
    {
      title: "Text scale",
      variants: [
        { name: "--text-primary … --text-quaternary", description: "Figma text hierarchy" },
      ],
    },
    {
      title: "Charts",
      variants: [
        { name: "--chart-1 … --chart-5", description: "Chart color ramp" },
      ],
    },
    {
      title: "Sidebar",
      variants: [
        { name: "--sidebar, --sidebar-foreground", description: "Sidebar shell" },
        { name: "--sidebar-primary, --sidebar-accent", description: "Active and hover states" },
        { name: "--sidebar-border, --sidebar-ring", description: "Sidebar chrome" },
      ],
    },
    {
      title: "DataOS UI",
      variants: [
        { name: "--dataos-surface", description: "Card surface" },
        { name: "--dataos-success-*, --dataos-warn-*, --dataos-fail-*", description: "Quality state backgrounds and foregrounds" },
      ],
    },
  ],
}
