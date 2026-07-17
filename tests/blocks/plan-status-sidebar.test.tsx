import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { DataOsSidebar } from "@/registry/default/blocks/dataos-sidebar/dataos-sidebar"
import {
  PlanStatusCard,
  PlanStatusDiff,
} from "@/registry/default/blocks/plan-status-card/plan-status-card"

describe("PlanStatusCard", () => {
  it("toggles expansion and reports onExpandedChange", async () => {
    const user = userEvent.setup()
    const onExpandedChange = vi.fn()

    render(
      <PlanStatusCard
        title="b2b_saas.users"
        typeLabel="FULL"
        badges={[{ label: "Breaking", tone: "error" }]}
        expanded={false}
        onExpandedChange={onExpandedChange}
      >
        <PlanStatusDiff
          filePath="models/usage_events.sql"
          lines={[{ value: "+  event_count,", kind: "add", newLine: 36 }]}
        />
      </PlanStatusCard>
    )

    const header = screen.getByRole("button", {
      name: /b2b_saas\.users/i,
    })
    expect(header).toHaveAttribute("aria-expanded", "false")

    await user.click(header)
    expect(onExpandedChange).toHaveBeenCalledWith(true)
  })

  it("supports controlled selection via onSelect", async () => {
    const user = userEvent.setup()
    const onSelect = vi.fn()

    render(
      <PlanStatusCard
        title="Environment changes"
        selected={false}
        onSelect={onSelect}
        defaultExpanded={false}
      />
    )

    await user.click(
      screen.getByRole("button", { name: /Environment changes/i })
    )
    expect(onSelect).toHaveBeenCalledTimes(1)
  })
})

describe("DataOsSidebar", () => {
  it("reports controlled active item changes", async () => {
    const user = userEvent.setup()
    const onActiveChange = vi.fn()

    render(
      <DataOsSidebar
        activeId="home"
        onActiveChange={onActiveChange}
        enablePinning={false}
      />
    )

    await user.click(screen.getByRole("button", { name: /^Workbench$/i }))
    expect(onActiveChange).toHaveBeenCalledWith("workbench")
  })

  it("pins an item and calls onPinnedChange", async () => {
    const user = userEvent.setup()
    const onPinnedChange = vi.fn()

    render(
      <DataOsSidebar
        defaultActiveId="home"
        pinnedIds={["data-products"]}
        onPinnedChange={onPinnedChange}
        enablePinning
        maxPinned={3}
      />
    )

    const pinButton = screen.getByRole("button", { name: /Pin Datasets/i })
    await user.click(pinButton)

    expect(onPinnedChange).toHaveBeenCalled()
    const next = onPinnedChange.mock.calls[0]?.[0] as string[]
    expect(next).toContain("data-products")
    expect(next).toContain("datasets")
  })

  it("toggles collapse via footer close panel", async () => {
    const user = userEvent.setup()
    const onCollapsedChange = vi.fn()

    render(
      <DataOsSidebar
        collapsed={false}
        onCollapsedChange={onCollapsedChange}
        enablePinning={false}
      />
    )

    await user.click(screen.getAllByRole("button", { name: /^Close panel$/i })[0]!)
    expect(onCollapsedChange).toHaveBeenCalledWith(true)
  })
})
