"use client"

import {
  AccordionBasicPreview,
  AccordionBordersPreview,
  AccordionCardPreview,
  AccordionDisabledPreview,
  AccordionMultiplePreview,
} from "@/app/component-examples/accordion-variants"
import { accordionVariantCodes } from "@/app/component-examples/accordion-variant-codes"
import { docVariantPages } from "@/app/component-variants/doc-pages"
import { docVariantSupplements } from "@/app/component-variants/doc-supplements"
import { generatedVariantPages } from "@/app/component-variants/generated-pages"
import {
  LoginVariantPage,
  SignupVariantPage,
} from "@/app/component-variants/auth-block-pages"
import { chartVariantPage } from "@/app/component-variants/chart-page"
import { dataProductTablePage } from "@/app/component-variants/data-product-table-page"
import { heroPage } from "@/app/component-variants/hero-page"
import { qualitySummaryCardPage } from "@/app/component-variants/quality-summary-card-page"
import { attributionsVariantPage } from "@/app/component-variants/attributions-page"
import { projectSetupVariantPage } from "@/app/component-variants/project-setup-page"
import { tableTanStackSupplement } from "@/app/component-variants/table-page"
import { themeVariantPage } from "@/app/component-variants/theme-page"
import { utilsVariantPage } from "@/app/component-variants/utils-page"
import { componentApiDocs, hasComponentApiDoc } from "@/app/component-api"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const accordionVariantPage: ComponentVariantPage = {
  name: "accordion",
  title: "Accordion",
  description: "Expandable sections.",
  install: "npx shadcn@latest add tmdc-io/modern-ui-component/accordion",
  variants: [
    {
      id: "basic",
      title: "Basic",
      description: "Single open item with the first panel expanded by default.",
      Preview: AccordionBasicPreview,
      code: accordionVariantCodes.basic,
    },
    {
      id: "multiple",
      title: "Multiple",
      description: "Allow more than one section to stay open at the same time.",
      Preview: AccordionMultiplePreview,
      code: accordionVariantCodes.multiple,
    },
    {
      id: "disabled",
      title: "Disabled",
      description: "Disable individual items that are not yet available.",
      Preview: AccordionDisabledPreview,
      code: accordionVariantCodes.disabled,
    },
    {
      id: "borders",
      title: "Borders",
      description: "Add borders around the accordion and between each item.",
      Preview: AccordionBordersPreview,
      code: accordionVariantCodes.borders,
    },
    {
      id: "card",
      title: "Card",
      description: "Wrap the accordion in a card with a title and description.",
      Preview: AccordionCardPreview,
      code: accordionVariantCodes.card,
    },
  ],
}

function normalizeVariantId(variantId: string) {
  return variantId.toLowerCase().replace(/[-_]/g, "")
}

function mergeVariantPages(
  ...sources: Record<string, ComponentVariantPage>[]
): Record<string, ComponentVariantPage> {
  const merged: Record<string, ComponentVariantPage> = {}

  for (const source of sources) {
    for (const [name, page] of Object.entries(source)) {
      if (!merged[name]) {
        merged[name] = page
        continue
      }

      const existingIds = new Set(
        merged[name].variants.map((variant) => normalizeVariantId(variant.id))
      )
      merged[name] = {
        ...merged[name],
        variants: [
          ...merged[name].variants,
          ...page.variants.filter(
            (variant) => !existingIds.has(normalizeVariantId(variant.id))
          ),
        ],
      }
    }
  }

  return merged
}

function applyTableTanStackSupplement(
  pages: Record<string, ComponentVariantPage>
): Record<string, ComponentVariantPage> {
  const table = pages.table
  if (!table) return pages

  const existingVariants = table.variants

  return {
    ...pages,
    table: {
      ...table,
      intro: tableTanStackSupplement.intro,
      sections: [
        ...(existingVariants.length > 0
          ? [
              {
                id: "examples",
                title: "Examples",
                description: "Table primitive layouts from shadcn docs.",
                variants: existingVariants,
              },
            ]
          : []),
        ...(tableTanStackSupplement.sections ?? []),
      ],
      variants: [],
    },
  }
}

const generatedWithoutChart = Object.fromEntries(
  Object.entries(generatedVariantPages).filter(([name]) => name !== "chart")
)

export const componentVariantPages: Record<string, ComponentVariantPage> = {
  accordion: accordionVariantPage,
  chart: chartVariantPage,
  login: LoginVariantPage,
  signup: SignupVariantPage,
  "project-setup": projectSetupVariantPage,
  attributions: attributionsVariantPage,
  "quality-summary-card": qualitySummaryCardPage,
  "data-product-table": dataProductTablePage,
  hero: heroPage,
  theme: themeVariantPage,
  utils: utilsVariantPage,
  ...applyTableTanStackSupplement(
    mergeVariantPages(
      generatedWithoutChart,
      docVariantSupplements,
      docVariantPages
    )
  ),
}

const DETAIL_PAGE_LABELS: Record<string, string> = {
  calendar: "Examples",
  chart: "Docs",
  login: "Blocks",
  signup: "Blocks",
  "project-setup": "Details",
  attributions: "Credits",
  "quality-summary-card": "Usage",
  "data-product-table": "Usage",
  hero: "Usage",
  theme: "Palette",
}

export function getDetailPageLabel(name: string) {
  if (hasComponentApiDoc(name)) return "Docs"
  return DETAIL_PAGE_LABELS[name] ?? "Variants"
}

export function hasVariantPage(name: string) {
  return name in componentVariantPages
}

export function getVariantPage(name: string): ComponentVariantPage | undefined {
  const page = componentVariantPages[name]
  if (!page) return undefined

  const api = componentApiDocs[name]
  if (!api) return page

  return { ...page, ...api }
}

export function getVariantPageNames() {
  return Object.keys(componentVariantPages)
}
