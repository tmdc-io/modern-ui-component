import {
  MetricContextCardCustomPreview,
  MetricContextCardDefaultPreview,
  MetricContextCardSmallPreview,
} from "@/app/component-examples/metric-context-card-usage"
import { metricContextCardCodes } from "@/app/component-examples/metric-context-card-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const metricContextCardPage: ComponentVariantPage = {
  name: "metric-context-card",
  title: "Metric Context Card",
  description:
    "DataOS metric context card with current value and trend, policies, defines, composed fields, formula, and contacts.",
  install: metricContextCardCodes.install,
  intro:
    'A composed context card for metrics — headline value with a period-over-period trend, policies, what it defines, what it is composed of, the formula behind it, powered by, and owner. Use size="sm" for compact peeks.',
  variants: [],
  sections: [
    {
      id: "preview",
      variants: [
        {
          id: "default",
          title: "Full",
          description:
            "Medication Adherence Monitoring sample with trend, fields, and formula.",
          body: 'Omit props for the built-in sample (size="full"). Wire onClose and onExplore for drawer actions.',
          Preview: MetricContextCardDefaultPreview,
          code: metricContextCardCodes.default,
          tall: true,
          fitContent: true,
        },
        {
          id: "small",
          title: "Small",
          description:
            "Compact card with freshness / policies chips, owner, and Know more.",
          body: 'Pass size="sm". Composed-of and formula are hidden; compactMetrics render as chips and the CTA falls back to Know more.',
          Preview: MetricContextCardSmallPreview,
          code: metricContextCardCodes.small,
          tall: true,
          fitContent: true,
        },
      ],
    },
    {
      id: "custom",
      title: "Custom metric",
      description: "Override the headline value, trend, and formula.",
      variants: [
        {
          id: "custom",
          title: "From metric data",
          description: "Map a metric store payload into MetricContextCard props.",
          body: "Pass title, metrics, description, formula, and poweredBy. Use delta.direction to flip the trend colour and arrow.",
          Preview: MetricContextCardCustomPreview,
          code: metricContextCardCodes.custom,
          tall: true,
          fitContent: true,
        },
      ],
    },
  ],
}
