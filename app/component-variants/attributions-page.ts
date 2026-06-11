import type { ComponentVariantPage } from "@/app/component-variants/types"
import {
  AttributionsAcknowledgementsPreview,
  AttributionsDevelopmentPreview,
  AttributionsRuntimePreview,
  AttributionsSummaryPreview,
} from "@/app/attributions-preview"

export const attributionsVariantPage: ComponentVariantPage = {
  name: "attributions",
  title: "Attributions",
  description:
    "Open-source libraries, npm packages, and upstream projects used to build and distribute ModernUI.",
  install: "",
  sections: [
    {
      id: "overview",
      title: "Overview",
      description: "Third-party software that powers this component registry.",
      variants: [
        {
          id: "summary",
          title: "Summary",
          description: "Runtime and development dependencies at a glance.",
          Preview: AttributionsSummaryPreview,
          code: "",
          tall: true,
        },
      ],
    },
    {
      id: "runtime-dependencies",
      title: "Runtime dependencies",
      description:
        "Packages installed in consumer projects when adding ModernUI components.",
      variants: [
        {
          id: "runtime-table",
          title: "Production packages",
          description: "Grouped by role — UI primitives, forms, charts, and utilities.",
          Preview: AttributionsRuntimePreview,
          code: "",
          tall: true,
        },
      ],
    },
    {
      id: "development-dependencies",
      title: "Development dependencies",
      description: "Tooling used to build, lint, and type-check this registry site.",
      variants: [
        {
          id: "development-table",
          title: "Dev packages",
          description: "TypeScript, Tailwind CSS, ESLint, and related tooling.",
          Preview: AttributionsDevelopmentPreview,
          code: "",
          tall: true,
        },
      ],
    },
    {
      id: "acknowledgements",
      title: "Acknowledgements",
      description:
        "Upstream projects and communities whose work ModernUI builds upon.",
      variants: [
        {
          id: "acknowledgements-table",
          title: "Upstream projects",
          description:
            "These projects may overlap with npm dependencies but are called out for their foundational role.",
          Preview: AttributionsAcknowledgementsPreview,
          code: "",
          tall: true,
        },
      ],
    },
  ],
  variants: [],
}
