import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { PlanCard } from "@/registry/default/blocks/plan-card/plan-card"
import { RunCard } from "@/registry/default/blocks/run-card/run-card"

describe("PlanCard", () => {
  it("renders plan id and metrics", () => {
    render(
      <PlanCard
        planId="#7"
        version="v0.1.3"
        timestamp="July 1"
        duration="4.1s"
        metrics={[
          { label: "Changes", value: "3" },
          { label: "Impacts", value: "7" },
        ]}
      />
    )
    expect(screen.getByText("#7")).toBeInTheDocument()
    expect(screen.getByText("Changes (3)")).toBeInTheDocument()
    expect(screen.getByText("Impacts (7)")).toBeInTheDocument()
  })

  it("supports controlled selection", async () => {
    const { rerender } = render(
      <PlanCard
        planId="#7"
        version="v0.1.3"
        timestamp="July 1"
        duration="4.1s"
        selected={false}
        onSelect={() => {}}
      />
    )
    expect(
      screen.getByRole("button", { name: /#7, v0\.1\.3/i })
    ).toHaveAttribute("aria-pressed", "false")
    rerender(
      <PlanCard
        planId="#7"
        version="v0.1.3"
        timestamp="July 1"
        duration="4.1s"
        selected
        onSelect={() => {}}
      />
    )
    expect(
      screen.getByRole("button", { name: /#7, v0\.1\.3/i })
    ).toHaveAttribute("aria-pressed", "true")
  })
})

describe("RunCard", () => {
  it("renders run id", () => {
    render(
      <RunCard
        runId="#10010"
        plan="Plan #01"
        timestamp="Jul 01"
        duration="4.1s"
        metrics={[{ label: "Models", value: "7" }]}
      />
    )
    expect(screen.getByText("#10010")).toBeInTheDocument()
  })
})
