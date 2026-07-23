import { describe, expect, it } from "vitest"

import {
  expandRegistryInstallCommand,
  registryAddCommands,
  registryInitCommands,
} from "@/app/registry-install"
import {
  HOSTED_REGISTRY_BASE,
  HOSTED_REGISTRY_ORIGIN,
  REGISTRY_NAMESPACE,
} from "@/lib/registry-constants"

describe("registry-constants", () => {
  it("uses the production hosted origin", () => {
    expect(HOSTED_REGISTRY_ORIGIN).toBe("https://modern-ui-component.vercel.app")
    expect(HOSTED_REGISTRY_BASE).toBe(`${HOSTED_REGISTRY_ORIGIN}/r`)
    expect(REGISTRY_NAMESPACE).toBe("tmdc-io/modern-ui-component")
  })
})

describe("registryAddCommands", () => {
  it("lists @modernui before the GitHub path", () => {
    expect(registryAddCommands("button")).toBe(
      [
        "npx shadcn@latest add @modernui/button",
        "npx shadcn@latest add tmdc-io/modern-ui-component/button",
      ].join("\n")
    )
  })

  it("preserves flags on both lines", () => {
    expect(registryAddCommands("button", "-y -c packages/ui")).toBe(
      [
        "npx shadcn@latest add @modernui/button -y -c packages/ui",
        "npx shadcn@latest add tmdc-io/modern-ui-component/button -y -c packages/ui",
      ].join("\n")
    )
  })
})

describe("registryInitCommands", () => {
  it("lists hosted init.json before the GitHub init item", () => {
    expect(registryInitCommands("-y")).toBe(
      [
        "npx shadcn@latest init https://modern-ui-component.vercel.app/r/init.json -y",
        "npx shadcn@latest init tmdc-io/modern-ui-component/init -y",
      ].join("\n")
    )
  })
})

describe("expandRegistryInstallCommand", () => {
  it("expands a GitHub-only add into dual commands", () => {
    expect(
      expandRegistryInstallCommand(
        "npx shadcn@latest add tmdc-io/modern-ui-component/button"
      )
    ).toBe(registryAddCommands("button"))
  })

  it("expands an @modernui-only add into dual commands", () => {
    expect(
      expandRegistryInstallCommand("npx shadcn@latest add @modernui/button -y")
    ).toBe(registryAddCommands("button", "-y"))
  })

  it("is idempotent when both forms are already present", () => {
    const dual = registryAddCommands("chart-pie-donut")
    expect(expandRegistryInstallCommand(dual)).toBe(dual)
  })

  it("expands multi-line GitHub adds pairwise", () => {
    expect(
      expandRegistryInstallCommand(
        [
          "npx shadcn@latest add tmdc-io/modern-ui-component/table",
          "npx shadcn@latest add tmdc-io/modern-ui-component/skeleton",
        ].join("\n")
      )
    ).toBe(
      [
        "npx shadcn@latest add @modernui/table",
        "npx shadcn@latest add tmdc-io/modern-ui-component/table",
        "npx shadcn@latest add @modernui/skeleton",
        "npx shadcn@latest add tmdc-io/modern-ui-component/skeleton",
      ].join("\n")
    )
  })

  it("expands hosted and GitHub init URLs", () => {
    expect(
      expandRegistryInstallCommand(
        "npx shadcn@latest init tmdc-io/modern-ui-component/init -y"
      )
    ).toBe(registryInitCommands("-y"))
  })

  it("leaves unrelated commands alone", () => {
    const cmd = "npx create-next-app@latest my-app --typescript"
    expect(expandRegistryInstallCommand(cmd)).toBe(cmd)
  })
})
