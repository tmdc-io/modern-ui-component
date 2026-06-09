import {
  QualitySummaryCardDataDrivenPreview,
  QualitySummaryCardDefaultPreview,
  QualitySummaryCardMultiplePreview,
} from "@/app/component-examples/quality-summary-card-usage"
import { qualitySummaryCardCodes } from "@/app/component-examples/quality-summary-card-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const qualitySummaryCardPage: ComponentVariantPage = {
  name: "quality-summary-card",
  title: "Quality Summary Card",
  description:
    "DataOS quality score overview with dimension pass/warn status and view-all action.",
  install: qualitySummaryCardCodes.install,
  variants: [
    {
      id: "preview",
      title: "Preview",
      description: "Default card with sample quality dimensions.",
      Preview: QualitySummaryCardDefaultPreview,
      code: qualitySummaryCardCodes.static,
    },
    {
      id: "props",
      title: "Props",
      description: "TypeScript props for QualitySummaryCard and QualityDimension.",
      Preview: QualitySummaryCardDefaultPreview,
      code: qualitySummaryCardCodes.props,
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
      Preview: QualitySummaryCardDefaultPreview,
      code: qualitySummaryCardCodes.derived,
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
