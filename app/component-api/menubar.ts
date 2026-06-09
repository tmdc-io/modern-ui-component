import type { ComponentApiDoc } from "@/app/component-variants/types"

export const menubarApi: ComponentApiDoc = {
  features: [
    "ModernUI Menubar component.",
  ],
  usage: {
    import: "import { Menubar } from \"@/components/ui/menubar\"",
    example: "<Menubar />",
  },
  apiReference: {
    title: "Menubar Components",
    props: [
      {
        prop: "MenubarPortal",
        type: "component",
        description: "MenubarPortal subcomponent exported from this module.",
      },
      {
        prop: "MenubarMenu",
        type: "component",
        description: "MenubarMenu subcomponent exported from this module.",
      },
      {
        prop: "MenubarTrigger",
        type: "component",
        description: "MenubarTrigger subcomponent exported from this module.",
      },
      {
        prop: "MenubarContent",
        type: "component",
        description: "MenubarContent subcomponent exported from this module.",
      },
      {
        prop: "MenubarGroup",
        type: "component",
        description: "MenubarGroup subcomponent exported from this module.",
      },
      {
        prop: "MenubarSeparator",
        type: "component",
        description: "MenubarSeparator subcomponent exported from this module.",
      },
      {
        prop: "MenubarLabel",
        type: "component",
        description: "MenubarLabel subcomponent exported from this module.",
      },
      {
        prop: "MenubarItem",
        type: "component",
        description: "MenubarItem subcomponent exported from this module.",
      },
      {
        prop: "MenubarShortcut",
        type: "component",
        description: "MenubarShortcut subcomponent exported from this module.",
      },
      {
        prop: "MenubarCheckboxItem",
        type: "component",
        description: "MenubarCheckboxItem subcomponent exported from this module.",
      },
      {
        prop: "MenubarRadioGroup",
        type: "component",
        description: "MenubarRadioGroup subcomponent exported from this module.",
      },
      {
        prop: "MenubarRadioItem",
        type: "component",
        description: "MenubarRadioItem subcomponent exported from this module.",
      },
      {
        prop: "MenubarSub",
        type: "component",
        description: "MenubarSub subcomponent exported from this module.",
      },
      {
        prop: "MenubarSubTrigger",
        type: "component",
        description: "MenubarSubTrigger subcomponent exported from this module.",
      },
      {
        prop: "MenubarSubContent",
        type: "component",
        description: "MenubarSubContent subcomponent exported from this module.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Menubar forwards props to the underlying Radix UI primitive.",
  },
}
