import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { DataProductCardSkeleton } from "@/registry/default/blocks/data-product-card/data-product-card"
import { QualitySummaryCard } from "@/registry/default/blocks/quality-summary-card/quality-summary-card"
import { RunMetrics } from "@/registry/default/blocks/run-metrics/run-metrics"
import { RunDuration } from "@/registry/default/blocks/run-duration/run-duration"
import { ModelHealthRuns } from "@/registry/default/blocks/model-health-runs/model-health-runs"

describe("empty and loading states", () => {
  it("QualitySummaryCard shows empty message for empty dimensions", () => {
    render(
      <QualitySummaryCard
        passed={0}
        total={0}
        updatedAt="—"
        dimensions={[]}
        emptyMessage="No quality dimensions yet."
      />
    )
    expect(screen.getByText("No quality dimensions yet.")).toBeInTheDocument()
  })

  it("RunMetrics shows empty message for empty metrics", () => {
    render(<RunMetrics metrics={[]} emptyMessage="No metrics available." />)
    expect(screen.getByText("No metrics available.")).toBeInTheDocument()
  })

  it("RunDuration shows empty message for empty runs", () => {
    render(<RunDuration runs={[]} emptyMessage="No runs to chart yet." />)
    expect(screen.getByText("No runs to chart yet.")).toBeInTheDocument()
  })

  it("ModelHealthRuns shows empty message without dividing by zero", () => {
    render(
      <ModelHealthRuns
        runs={[]}
        models={[]}
        emptyMessage="No model health data yet."
      />
    )
    expect(screen.getByText("No model health data yet.")).toBeInTheDocument()
  })

  it("DataProductCardSkeleton renders busy placeholder", () => {
    const { container } = render(<DataProductCardSkeleton />)
    expect(container.querySelector("[aria-busy='true']")).toBeTruthy()
  })
})
