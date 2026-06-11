import { themeCodes } from "@/app/component-examples/theme-codes"
import {
  ThemeChartsPreview,
  ThemeDataOsPreview,
  ThemeFigmaBlacksPreview,
  ThemeFigmaBrandPreview,
  ThemeFigmaGreysPreview,
  ThemePaletteOverviewPreview,
  ThemeSemanticActionsPreview,
  ThemeSemanticBordersPreview,
  ThemeSemanticSurfacesPreview,
  ThemeSidebarPreview,
  ThemeTextScalePreview,
} from "@/app/theme-palette-preview"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const themeVariantPage: ComponentVariantPage = {
  name: "theme",
  title: "Theme",
  description:
    "Figma Dev-Ready design tokens as CSS variables with Tailwind v4 @theme mappings. Install first — every other component depends on these colors.",
  install: themeCodes.install,
  usage: {
    import: themeCodes.import,
    example: themeCodes.tokens,
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      description:
        "Source palette from Figma, semantic tokens for components, and domain-specific ramps.",
      body: "Use the mode toggle in the site header to preview light and dark semantic values. Foundation colors stay fixed; semantic tokens adapt per mode.",
      variants: [
        {
          id: "overview",
          title: "At a glance",
          description: "Brand and semantic highlights.",
          Preview: ThemePaletteOverviewPreview,
          code: themeCodes.install,
          tall: true,
        },
      ],
    },
    {
      id: "figma-foundation",
      title: "Figma foundation",
      description:
        "Fixed source colors from Dev-Ready Designs — mapped to --slate, --dark-teal, --cream-bg-*, --black-*, and --grey-* variables.",
      variants: [
        {
          id: "brand",
          title: "Brand & surfaces",
          description: "Slate, teal, and cream ramps.",
          Preview: ThemeFigmaBrandPreview,
          code: themeCodes.tokens,
        },
        {
          id: "blacks",
          title: "Blacks",
          description: "Ink scale for text hierarchy.",
          Preview: ThemeFigmaBlacksPreview,
          code: themeCodes.tokens,
        },
        {
          id: "greys",
          title: "Greys",
          description: "Neutral grey ramp and white.",
          Preview: ThemeFigmaGreysPreview,
          code: themeCodes.tokens,
        },
      ],
    },
    {
      id: "semantic",
      title: "Semantic tokens",
      description:
        "Component theme variables — surfaces, actions, and borders. Values change between :root and .dark.",
      variants: [
        {
          id: "surfaces",
          title: "Surfaces",
          description: "Backgrounds, cards, popovers, and muted layers.",
          Preview: ThemeSemanticSurfacesPreview,
          code: themeCodes.tokens,
        },
        {
          id: "actions",
          title: "Actions & brand",
          description: "Primary, brand, destructive, and accent pairings.",
          Preview: ThemeSemanticActionsPreview,
          code: themeCodes.tokens,
        },
        {
          id: "borders",
          title: "Borders & focus",
          description: "Border, input, and ring tokens.",
          Preview: ThemeSemanticBordersPreview,
          code: themeCodes.tokens,
        },
      ],
    },
    {
      id: "typography",
      title: "Typography",
      description: "Figma text color scale mapped to --text-* variables.",
      variants: [
        {
          id: "text-scale",
          title: "Text scale",
          description: "Primary through quaternary text colors.",
          Preview: ThemeTextScalePreview,
          code: themeCodes.tokens,
        },
      ],
    },
    {
      id: "application",
      title: "Application tokens",
      description: "Charts, sidebar navigation, and DataOS quality states.",
      variants: [
        {
          id: "charts",
          title: "Charts",
          description: "Five-color visualization ramp.",
          Preview: ThemeChartsPreview,
          code: themeCodes.tokens,
        },
        {
          id: "sidebar",
          title: "Sidebar",
          description: "Navigation surface and accent tokens.",
          Preview: ThemeSidebarPreview,
          code: themeCodes.tokens,
        },
        {
          id: "dataos",
          title: "DataOS UI",
          description: "Quality summary pass, warn, and fail colors.",
          Preview: ThemeDataOsPreview,
          code: themeCodes.tokens,
        },
      ],
    },
    {
      id: "dark-mode",
      title: "Dark mode",
      description: "Class-based dark mode with next-themes.",
      variants: [
        {
          id: "dark-mode",
          title: "Setup",
          description: "Enable .dark on html and toggle with ThemeProvider.",
          code: themeCodes.darkMode,
          codeOnly: true,
        },
      ],
    },
  ],
  variants: [],
}
