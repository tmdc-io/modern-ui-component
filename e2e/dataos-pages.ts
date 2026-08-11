export const DATAOS_PAGES = [
  "quality-summary-card",
  "data-product-table",
  "data-product-card",
  "data-product-context-card",
  "model-context-card",
  "perspective-context-card",
  "metric-context-card",
  "hero",
  "dataos-sidebar",
  "assets-tree",
  "lineage-graph",
  "flow",
  "application-header",
  "plan-card",
  "plan-status-card",
  "run-card",
  "run-duration",
  "model-health-runs",
  "run-metrics",
  "models-table",
] as const

export function dataosPagePath(name: (typeof DATAOS_PAGES)[number]) {
  return `/components/${name}`
}
