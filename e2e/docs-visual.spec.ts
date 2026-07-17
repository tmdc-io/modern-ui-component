import { expect, test } from "@playwright/test"

import { DATAOS_PAGES, dataosPagePath } from "./dataos-pages"

/**
 * Screenshot baselines for DataOS docs pages (Linux CI preferred).
 * Skipped unless PLAYWRIGHT_VISUAL=1 so default `pnpm test:e2e` stays green.
 *
 *   PLAYWRIGHT_VISUAL=1 pnpm test:e2e:update
 *   PLAYWRIGHT_VISUAL=1 pnpm test:e2e:visual
 */
const enabled = process.env.PLAYWRIGHT_VISUAL === "1"

for (const name of DATAOS_PAGES) {
  const path = dataosPagePath(name)

  test(`visual: ${name}`, async ({ page }) => {
    test.skip(!enabled, "Set PLAYWRIGHT_VISUAL=1 to run screenshot baselines")

    await page.setViewportSize({ width: 1280, height: 900 })
    await page.goto(path, { waitUntil: "domcontentloaded" })
    await expect(page.getByRole("main")).toBeVisible()

    const main = page.locator("main")
    await expect(main).toHaveScreenshot(`${name}.png`, {
      animations: "disabled",
    })
  })
}
