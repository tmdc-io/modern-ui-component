import type { ComponentApiDoc } from "@/app/component-variants/types"
import { attributionStats } from "@/app/attributions-data"

export const attributionsApi: ComponentApiDoc = {
  features: [
    `${attributionStats.runtimeCount} runtime npm packages power component primitives and examples.`,
    `${attributionStats.developmentCount} development packages build and validate this registry site.`,
    "License and homepage links are sourced from each package's published metadata.",
    "Acknowledgements highlight upstream projects beyond direct npm dependencies.",
  ],
  intro:
    "ModernUI extends shadcn/ui patterns with Modern Data Company design tokens. This page lists every third-party library declared in package.json plus key upstream acknowledgements.",
  apiReference: {
    title: "License notice",
    props: [
      {
        prop: "MIT",
        type: "License",
        description:
          "Most runtime dependencies use the MIT License — permissive use with attribution.",
      },
      {
        prop: "Apache-2.0",
        type: "License",
        description:
          "Used by class-variance-authority and TypeScript among development tooling.",
      },
      {
        prop: "ISC",
        type: "License",
        description: "Used by lucide-react (icon library).",
      },
    ],
    footnote:
      "This page is for attribution and transparency. Always review individual package licenses before redistribution. Full package list: /components/attributions#runtime-dependencies.",
  },
}
