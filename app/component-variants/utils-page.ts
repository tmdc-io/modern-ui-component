import { utilsCodes } from "@/app/component-examples/utils-codes"
import {
  UtilsBasicPreview,
  UtilsComponentPreview,
  UtilsConditionalPreview,
  UtilsMergePreview,
  UtilsOverviewPreview,
} from "@/app/utils-preview"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const utilsVariantPage: ComponentVariantPage = {
  name: "utils",
  title: "Utils",
  description:
    "The cn() classname helper — clsx for conditional classes and tailwind-merge for conflict resolution. Install after theme; required by every ModernUI component.",
  install: utilsCodes.install,
  usage: {
    import: 'import { cn } from "@/lib/utils"',
    example: utilsCodes.basic,
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      description: "What gets installed and why every component depends on it.",
      variants: [
        {
          id: "overview",
          title: "cn() helper",
          description: "Single export from lib/utils.ts.",
          Preview: UtilsOverviewPreview,
          code: utilsCodes.source,
          tall: true,
        },
      ],
    },
    {
      id: "usage",
      title: "Usage patterns",
      description: "Common ways to compose class names in ModernUI projects.",
      variants: [
        {
          id: "basic",
          title: "Base classes",
          description: "Spread a className prop into a fixed set of utilities.",
          Preview: UtilsBasicPreview,
          code: utilsCodes.basic,
        },
        {
          id: "conditional",
          title: "Conditional classes",
          description: "Toggle states with boolean expressions.",
          Preview: UtilsConditionalPreview,
          code: utilsCodes.conditional,
          tall: true,
        },
        {
          id: "merge",
          title: "Tailwind merge",
          description:
            "Later conflicting utilities win — px-2 overrides px-4, destructive overrides muted.",
          Preview: UtilsMergePreview,
          code: utilsCodes.merge,
        },
        {
          id: "component",
          title: "In components",
          description: "Variant props combined with consumer className overrides.",
          Preview: UtilsComponentPreview,
          code: utilsCodes.component,
          tall: true,
        },
      ],
    },
    {
      id: "install",
      title: "Install",
      description: "Adds lib/utils.ts and peer dependencies clsx + tailwind-merge.",
      variants: [
        {
          id: "install",
          title: "CLI",
          description: "Run after theme, before primitives.",
          code: utilsCodes.install,
          codeOnly: true,
        },
      ],
    },
  ],
  variants: [],
}
