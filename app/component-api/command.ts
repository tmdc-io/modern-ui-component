import type { ComponentApiDoc } from "@/app/component-variants/types"

export const commandApi: ComponentApiDoc = {
  features: [
    "ModernUI Command component.",
  ],
  usage: {
    import: "import { Command } from \"@/components/ui/command\"",
    example: "<Command />",
  },
  apiReference: {
    title: "Command Components",
    props: [
      {
        prop: "CommandDialog",
        type: "component",
        description: "CommandDialog subcomponent exported from this module.",
      },
      {
        prop: "CommandInput",
        type: "component",
        description: "CommandInput subcomponent exported from this module.",
      },
      {
        prop: "CommandList",
        type: "component",
        description: "CommandList subcomponent exported from this module.",
      },
      {
        prop: "CommandEmpty",
        type: "component",
        description: "CommandEmpty subcomponent exported from this module.",
      },
      {
        prop: "CommandGroup",
        type: "component",
        description: "CommandGroup subcomponent exported from this module.",
      },
      {
        prop: "CommandItem",
        type: "component",
        description: "CommandItem subcomponent exported from this module.",
      },
      {
        prop: "CommandShortcut",
        type: "component",
        description: "CommandShortcut subcomponent exported from this module.",
      },
      {
        prop: "CommandSeparator",
        type: "component",
        description: "CommandSeparator subcomponent exported from this module.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Command forwards props to the underlying Radix UI primitive.",
  },
}
