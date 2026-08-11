import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import { clampContextCardText } from "@/registry/default/blocks/context-card/context-card-shared"
import { MetricContextCard } from "@/registry/default/blocks/metric-context-card/metric-context-card"
import { PerspectiveContextCard } from "@/registry/default/blocks/perspective-context-card/perspective-context-card"

describe("clampContextCardText", () => {
  it("returns short text unchanged", () => {
    expect(clampContextCardText("short", 40)).toBe("short")
  })

  it("clamps on a word boundary when possible", () => {
    const text =
      "Monitors patient medication intake patterns identifying missed doses and enabling proactive reminders"
    const clamped = clampContextCardText(text, 40)
    expect(clamped.endsWith("…")).toBe(true)
    expect(clamped.includes(" ")).toBe(true)
    expect(clamped.length).toBeLessThanOrEqual(41)
  })
})

describe("MetricContextCard", () => {
  it("renders full sample with Explore CTA", () => {
    render(<MetricContextCard />)
    expect(screen.getByText("Medication Adherence Monitoring")).toBeInTheDocument()
    expect(screen.getByText("Current value")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /explore/i })).toBeInTheDocument()
    expect(screen.getByText(/Mean Dose Interval/)).toBeInTheDocument()
  })

  it("hides formula and composed-of in sm and uses Know more", () => {
    render(<MetricContextCard size="sm" />)
    expect(screen.queryByText(/Mean Dose Interval/)).not.toBeInTheDocument()
    expect(screen.queryByText(/What it is composed of/i)).not.toBeInTheDocument()
    expect(screen.getByRole("button", { name: /know more/i })).toBeInTheDocument()
    expect(screen.getByText(/Freshness:/)).toBeInTheDocument()
  })

  it("uses compactMetrics over metrics in sm", () => {
    render(
      <MetricContextCard
        size="sm"
        compactMetrics={[{ label: "Latency", value: "12ms" }]}
        metrics={[{ label: "Current value", value: "99%" }]}
      />
    )
    expect(screen.getByText(/Latency:/)).toBeInTheDocument()
    expect(screen.queryByText(/Current value:/)).not.toBeInTheDocument()
  })
})

describe("PerspectiveContextCard", () => {
  it("renders REST field groups by default", () => {
    render(<PerspectiveContextCard view="rest" />)
    expect(screen.getByText("Measure(s)")).toBeInTheDocument()
    expect(screen.getAllByText("session_id").length).toBeGreaterThan(0)
    expect(screen.getByRole("button", { name: /explore/i })).toBeInTheDocument()
  })

  it("switches composed-of body for source-sql", () => {
    render(<PerspectiveContextCard view="source-sql" />)
    expect(screen.queryByText("Measure(s)")).not.toBeInTheDocument()
    expect(screen.getByText(/patient_journeys/)).toBeInTheDocument()
    expect(screen.getByText(/SELECT/i)).toBeInTheDocument()
  })

  it("expands description when uncontrolled", async () => {
    const user = userEvent.setup()
    const long =
      "Tracks patient compliance with prescribed treatments, offering insights into adherence rates and potential barriers. It enables healthcare providers to tailor interventions, improve patient outcomes, and optimize treatment plans for better health management."
    render(<PerspectiveContextCard description={long} />)
    const toggle = screen.getByRole("button", { name: /view more/i })
    expect(toggle).toHaveAttribute("aria-expanded", "false")
    await user.click(toggle)
    expect(screen.getByRole("button", { name: /view less/i })).toHaveAttribute(
      "aria-expanded",
      "true"
    )
  })

  it("uses Know more on sm", () => {
    render(<PerspectiveContextCard size="sm" />)
    expect(screen.getByRole("button", { name: /know more/i })).toBeInTheDocument()
    expect(screen.queryByText("Measure(s)")).not.toBeInTheDocument()
  })
})
