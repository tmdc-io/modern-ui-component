import type { ComponentApiDoc } from "@/app/component-variants/types"

export const drawerApi: ComponentApiDoc = {
  features: [
    "ModernUI Drawer component.",
  ],
  usage: {
    import: "import { Drawer } from \"@/components/ui/drawer\"",
    example: "<Drawer />",
  },
  apiReference: {
    title: "Drawer Components",
    props: [
      {
        prop: "DrawerPortal",
        type: "component",
        description: "DrawerPortal subcomponent exported from this module.",
      },
      {
        prop: "DrawerOverlay",
        type: "component",
        description: "DrawerOverlay subcomponent exported from this module.",
      },
      {
        prop: "DrawerTrigger",
        type: "component",
        description: "DrawerTrigger subcomponent exported from this module.",
      },
      {
        prop: "DrawerClose",
        type: "component",
        description: "DrawerClose subcomponent exported from this module.",
      },
      {
        prop: "DrawerContent",
        type: "component",
        description: "DrawerContent subcomponent exported from this module.",
      },
      {
        prop: "DrawerHeader",
        type: "component",
        description: "DrawerHeader subcomponent exported from this module.",
      },
      {
        prop: "DrawerFooter",
        type: "component",
        description: "DrawerFooter subcomponent exported from this module.",
      },
      {
        prop: "DrawerTitle",
        type: "component",
        description: "DrawerTitle subcomponent exported from this module.",
      },
      {
        prop: "DrawerDescription",
        type: "component",
        description: "DrawerDescription subcomponent exported from this module.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Drawer forwards props to the underlying Radix UI primitive.",
  },
}
