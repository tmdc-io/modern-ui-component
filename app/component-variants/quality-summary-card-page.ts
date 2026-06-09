import {
  QualitySummaryCardDataDrivenPreview,
  QualitySummaryCardDefaultPreview,
  QualitySummaryCardMultiplePreview,
  QualitySummaryCardSummaryPreview,
} from "@/app/component-examples/quality-summary-card-usage"
import { qualitySummaryCardCodes } from "@/app/component-examples/quality-summary-card-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const qualitySummaryCardPage: ComponentVariantPage = {
  name: "quality-summary-card",
  title: "Quality Summary Card",
  description:
    "DataOS quality score overview with dimension pass/warn status and view-all action.",
  install: qualitySummaryCardCodes.install,
  sections: [
    {
      id: "preview",
      variants: [
        {
          id: "preview",
          title: "Preview",
          description: "Default card with sample quality dimensions.",
          body: "The card renders from props — no hardcoded business data in production. Demo defaults apply only when props are omitted.",
          Preview: QualitySummaryCardDefaultPreview,
          code: qualitySummaryCardCodes.static,
          tall: true,
        },
      ],
    },
    {
      id: "summary",
      title: "Single summary prop",
      description:
        "Pass one API object — the card derives badge state and dimension count.",
      body: "Map your API response into a QualitySummary and pass it as summary. Override statusLabel only when you need a custom badge label.",
      variants: [
        {
          id: "summary",
          title: "Summary prop",
          description: "One object from your API.",
          Preview: QualitySummaryCardSummaryPreview,
          code: qualitySummaryCardCodes.summary,
          docLink: { href: "#api-reference", label: "Props reference" },
          tall: true,
        },
      ],
    },
    {
      id: "patterns",
      title: "Usage patterns",
      description: "Common ways to feed data into the card.",
      variants: [
        {
          id: "static",
          title: "1. Static data",
          description:
            "Simplest approach — define a data object and spread it into the card.",
          body: "Use this when quality metrics are known at build time or come from a local config file.",
          Preview: QualitySummaryCardDefaultPreview,
          code: qualitySummaryCardCodes.static,
          docLink: { href: "#api-reference", label: "Props reference" },
        },
        {
          id: "api",
          title: "2. From an API response",
          description: "Map your API shape into card props at runtime.",
          body: "Map API fields into a QualitySummary. The card derives statusLabel and dimensionCount automatically.",
          Preview: QualitySummaryCardDataDrivenPreview,
          code: qualitySummaryCardCodes.api,
          docLink: { href: "#api-reference", label: "Props reference" },
        },
        {
          id: "derived",
          title: "3. Derive values",
          description:
            "Omit dimensionCount and statusLabel — the card derives them from dimensions.",
          body: "Pass passed, total, updatedAt, and dimensions only.",
          code: qualitySummaryCardCodes.derived,
          codeOnly: true,
          docLink: { href: "#api-reference", label: "Props reference" },
        },
        {
          id: "multiple",
          title: "4. Multiple cards",
          description: "Render one card per dataset on the same page.",
          body: "Map over an array of quality summaries — each card gets its own title, score, dimensions, and href.",
          Preview: QualitySummaryCardMultiplePreview,
          code: qualitySummaryCardCodes.multiple,
          docLink: { href: "#api-reference", label: "Props reference" },
        },
      ],
    },
  ],
  variants: [
    {
      id: "preview",
      title: "Preview",
      description: "Default card with sample quality dimensions.",
      Preview: QualitySummaryCardDefaultPreview,
      code: qualitySummaryCardCodes.static,
    },
    {
      id: "summary",
      title: "Summary prop",
      description: "One object from your API.",
      Preview: QualitySummaryCardSummaryPreview,
      code: qualitySummaryCardCodes.summary,
    },
    {
      id: "static",
      title: "Static data",
      description: "Define a data object and spread it into the card.",
      Preview: QualitySummaryCardDefaultPreview,
      code: qualitySummaryCardCodes.static,
    },
    {
      id: "api",
      title: "API response",
      description: "Map API fields into card props at runtime.",
      Preview: QualitySummaryCardDataDrivenPreview,
      code: qualitySummaryCardCodes.api,
    },
    {
      id: "derived",
      title: "Derived values",
      description: "Compute statusLabel and dimensionCount from dimensions.",
      code: qualitySummaryCardCodes.derived,
      codeOnly: true,
    },
    {
      id: "multiple",
      title: "Multiple cards",
      description: "Render one card per dataset on the same page.",
      Preview: QualitySummaryCardMultiplePreview,
      code: qualitySummaryCardCodes.multiple,
    },
  ],
}
