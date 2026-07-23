export const DATAOS_PAGES = [
  "quality-summary-card",
  "data-product-table",
  "data-product-card",
  "hero",
  "dataos-sidebar",
  "assets-tree",
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
