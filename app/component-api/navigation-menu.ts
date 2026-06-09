import type { ComponentApiDoc } from "@/app/component-variants/types"

export const navigationMenuApi: ComponentApiDoc = {
  features: [
    "ModernUI Navigation Menu component.",
  ],
  usage: {
    import: "import { NavigationMenu } from \"@/components/ui/navigation-menu\"",
    example: "<NavigationMenu />",
  },
  apiReference: {
    title: "NavigationMenu Components",
    props: [
      {
        prop: "NavigationMenuList",
        type: "component",
        description: "NavigationMenuList subcomponent exported from this module.",
      },
      {
        prop: "NavigationMenuItem",
        type: "component",
        description: "NavigationMenuItem subcomponent exported from this module.",
      },
      {
        prop: "NavigationMenuContent",
        type: "component",
        description: "NavigationMenuContent subcomponent exported from this module.",
      },
      {
        prop: "NavigationMenuTrigger",
        type: "component",
        description: "NavigationMenuTrigger subcomponent exported from this module.",
      },
      {
        prop: "NavigationMenuLink",
        type: "component",
        description: "NavigationMenuLink subcomponent exported from this module.",
      },
      {
        prop: "NavigationMenuIndicator",
        type: "component",
        description: "NavigationMenuIndicator subcomponent exported from this module.",
      },
      {
        prop: "NavigationMenuViewport",
        type: "component",
        description: "NavigationMenuViewport subcomponent exported from this module.",
      },
      {
        prop: "viewport",
        type: "boolean",
        default: "true",
        description: "viewport configuration option.",
      },
      {
        prop: "children",
        type: "ReactNode",
        description: "Child content.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, NavigationMenu forwards props to the underlying Radix UI primitive.",
  },
}
