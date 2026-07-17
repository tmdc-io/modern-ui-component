import type { ComponentApiDoc } from "@/app/component-variants/types"

export const qualitySummaryCardApi: ComponentApiDoc = {
  features: [
    "Data-driven quality score overview with pass, warn, and fail dimensions.",
    "Auto-derives dimensionCount and statusLabel from dimension statuses.",
    "Supports a single summary prop or individual props from your API.",
  ],
  usage: {
    import:
      'import { QualitySummaryCard } from "@/components/blocks/quality-summary-card"',
    example: `<QualitySummaryCard
  summary={{
    passed: 47,
    total: 100,
    updatedAt: "3m ago",
    dimensions: [
      { name: "Accuracy", status: "pass" },
      { name: "Completeness", status: "pass" },
      { name: "Conformity", status: "pass" },
      { name: "Consistency", status: "pass" },
      { name: "Coverage", status: "pass" },
      { name: "Timeliness", status: "pass" },
      { name: "Uniqueness", status: "warn", detail: "3 issues" },
      { name: "Validity", status: "pass" },
    ],
  }}
  href="/quality/rules"
/>`,
  },
  apiReference: {
    title: "QualitySummaryCard Props",
    props: [
      {
        prop: "summary",
        type: "QualitySummary",
        description:
          "Single API object with passed, total, updatedAt, and dimensions.",
      },
      {
        prop: "title",
        type: "string",
        default: '"Quality"',
        description: "Card header title.",
      },
      {
        prop: "statusLabel",
        type: "string",
        description:
          'Badge label. Auto-derived as "Healthy", "At Risk", or "Failed" when omitted.',
      },
      {
        prop: "passed",
        type: "number",
        default: "47",
        description: "Number of rules passed (score numerator).",
      },
      {
        prop: "total",
        type: "number",
        default: "100",
        description: "Total rules (score denominator).",
      },
      {
        prop: "dimensionCount",
        type: "number",
        description:
          "Number of dimensions. Auto-derived from dimensions.length when omitted.",
      },
      {
        prop: "updatedAt",
        type: "string",
        default: '"3m ago"',
        description: "Relative or formatted last-checked time.",
      },
      {
        prop: "dimensions",
        type: "QualityDimension[]",
        description:
          'Dimension rows with status "pass", "warn", or "fail" and optional detail.',
      },
      {
        prop: "href",
        type: "string",
        description: "Footer link URL without a client-side handler.",
      },
      {
        prop: "onViewAll",
        type: "() => void",
        description: "Client-side footer click handler.",
      },
      {
        prop: "emptyMessage",
        type: "string",
        description:
          "Message when dimensions is an empty array. Defaults to a localized empty copy.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes on the card wrapper.",
      },
    ],
    footnote:
      "Also exported: QualitySummaryCardSkeleton, deriveStatusLabel.",
  },
  enhancements: [
    {
      enhancement: "Single `summary` prop",
      benefit: "One object from API instead of many individual props",
    },
    {
      enhancement: "Auto `dimensionCount`",
      benefit: "Derived from `dimensions.length` when not passed",
    },
    {
      enhancement: "Auto `statusLabel`",
      benefit: '"Healthy" / "At Risk" / "Failed" from dimension statuses',
    },
    {
      enhancement: '`status: "fail"`',
      benefit: "Third state with destructive badge and row styling",
    },
    {
      enhancement: "`href` instead of `onViewAll`",
      benefit: "Footer link without a client-side handler",
    },
    {
      enhancement: "Empty + skeleton",
      benefit: "Empty dimensions message and QualitySummaryCardSkeleton",
    },
  ],
}
