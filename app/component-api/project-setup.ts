import type { ComponentApiDoc } from "@/app/component-variants/types"

export const projectSetupApi: ComponentApiDoc = {
  features: [
    "Shared project conventions and agent instructions for ModernUI projects.",
  ],
  usage: {
    import: "import { ProjectSetup } from \"@/components/project-setup\"",
    example: "npx shadcn@latest add ashishsahu/ModernUIComponent/project-setup",
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
