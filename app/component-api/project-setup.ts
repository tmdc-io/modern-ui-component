import type { ComponentApiDoc } from "@/app/component-variants/types"

export const projectSetupApi: ComponentApiDoc = {
  features: [
    "Shared project conventions and agent instructions for ModernUI projects.",
    "Consumer setup guide with single-app and monorepo install flows.",
    "Monorepo commands use -c packages/ui and -c apps/web workspace flags.",
  ],
  usage: {
    import: "import { ProjectSetup } from \"@/components/project-setup\"",
    example: "npx shadcn@latest add tmdc-io/modern-ui-component/project-setup",
  },
  apiReference: {
    title: "Project Setup",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Installs AGENTS.md and docs/modernui-setup.md into consumer projects.",
  },
}
