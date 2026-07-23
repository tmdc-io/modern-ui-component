import type { ComponentApiDoc } from "@/app/component-variants/types"

export const projectSetupApi: ComponentApiDoc = {
  features: [
    "Shared project conventions and agent instructions for ModernUI projects.",
    "Consumer setup guide with single-app and monorepo install flows.",
    "Monorepo: A · Fresh (scaffold) and B · Existing (skip scaffold), then add @modernui/… with -c.",
  ],
  usage: {
    import: "import { ProjectSetup } from \"@/components/project-setup\"",
    example:
      "npx shadcn@latest add @modernui/project-setup\nnpx shadcn@latest add tmdc-io/modern-ui-component/project-setup",
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
