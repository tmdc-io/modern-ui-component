import { access } from "node:fs/promises"
import { constants } from "node:fs"

const items = [
  "theme",
  "utils",
  "button",
  "input",
  "card",
  "label",
  "dialog",
  "login-form",
  "project-setup",
]

for (const item of items) {
  await access(`public/r/${item}.json`, constants.F_OK)
}

await access("public/r/registry.json", constants.F_OK)

console.log(`Validated ${items.length} registry items and catalog.`)
