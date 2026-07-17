import AxeBuilder from "@axe-core/playwright"
import { expect, test } from "@playwright/test"

import { DATAOS_PAGES, dataosPagePath } from "./dataos-pages"

for (const name of DATAOS_PAGES) {
  const path = dataosPagePath(name)

  test(`axe: ${path}`, async ({ page }) => {
    await page.goto(path, { waitUntil: "domcontentloaded" })
    await expect(page.getByRole("main")).toBeVisible()
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible()

    const results = await new AxeBuilder({ page })
      .include("main")
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze()

    expect(results.violations).toEqual([])
  })
}
