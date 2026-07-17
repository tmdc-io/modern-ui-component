import { render } from "@testing-library/react"
import { axe } from "jest-axe"
import { describe, expect, it } from "vitest"

import { DataProductCard } from "@/registry/default/blocks/data-product-card/data-product-card"
import { DataOsSidebar } from "@/registry/default/blocks/dataos-sidebar/dataos-sidebar"
import { PlanCard } from "@/registry/default/blocks/plan-card/plan-card"
import {
  PlanStatusCard,
  PlanStatusDiff,
} from "@/registry/default/blocks/plan-status-card/plan-status-card"
import { QualitySummaryCard } from "@/registry/default/blocks/quality-summary-card/quality-summary-card"
import { RunCard } from "@/registry/default/blocks/run-card/run-card"

/** jsdom lacks reliable computed colors; contrast is covered in Playwright. */
const axeOptions = {
  rules: {
    "color-contrast": { enabled: false },
  },
}

describe("DataOS block accessibility (axe)", () => {
  it("PlanCard has no serious violations", async () => {
    const { container } = render(
      <PlanCard
        planId="#7"
        version="v0.1.3"
        timestamp="July 1"
        duration="4.1s"
        metrics={[
          { label: "Changes", value: "3" },
          { label: "Impacts", value: "7" },
        ]}
        selected={false}
        onSelect={() => {}}
      />
    )
    expect(await axe(container, axeOptions)).toHaveNoViolations()
  })

  it("RunCard has no serious violations", async () => {
    const { container } = render(
      <RunCard
        runId="#10010"
        plan="Plan #01"
        timestamp="Jul 01"
        duration="4.1s"
        metrics={[{ label: "Models", value: "7" }]}
      />
    )
    expect(await axe(container, axeOptions)).toHaveNoViolations()
  })

  it("PlanStatusCard has no serious violations", async () => {
    const { container } = render(
      <PlanStatusCard
        title="b2b_saas.users"
        typeLabel="FULL"
        badges={[{ label: "Breaking", tone: "error" }]}
        defaultExpanded
      >
        <PlanStatusDiff
          filePath="models/usage_events.sql"
          lines={[{ value: "+  event_count,", kind: "add", newLine: 36 }]}
        />
      </PlanStatusCard>
    )
    expect(await axe(container, axeOptions)).toHaveNoViolations()
  })

  it("DataProductCard has no serious violations", async () => {
    const { container } = render(
      <DataProductCard
        title="Customer 360"
        subtitle="models/customer_360.sql"
        description="Unified customer profile for analytics and activation."
        badge={{ label: "Published", status: "pass" }}
      />
    )
    expect(await axe(container, axeOptions)).toHaveNoViolations()
  })

  it("QualitySummaryCard has no serious violations", async () => {
    const { container } = render(
      <QualitySummaryCard
        passed={47}
        total={50}
        updatedAt="2h ago"
        dimensions={[
          { name: "Accuracy", status: "pass" },
          { name: "Uniqueness", status: "warn", detail: "3 issues" },
        ]}
      />
    )
    expect(await axe(container, axeOptions)).toHaveNoViolations()
  })

  it("DataOsSidebar has no serious violations", async () => {
    const { container } = render(
      <DataOsSidebar activeId="home" enablePinning={false} />
    )
    expect(await axe(container, axeOptions)).toHaveNoViolations()
  })
})
