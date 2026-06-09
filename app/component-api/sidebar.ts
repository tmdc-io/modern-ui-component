import type { ComponentApiDoc } from "@/app/component-variants/types"

export const sidebarApi: ComponentApiDoc = {
  features: [
    "ModernUI Sidebar component.",
  ],
  usage: {
    import: "import { Sidebar } from \"@/components/ui/sidebar\"",
    example: "<Sidebar />",
  },
  apiReference: {
    title: "Sidebar Components",
    props: [
      {
        prop: "SidebarContent",
        type: "component",
        description: "SidebarContent subcomponent exported from this module.",
      },
      {
        prop: "SidebarFooter",
        type: "component",
        description: "SidebarFooter subcomponent exported from this module.",
      },
      {
        prop: "SidebarGroup",
        type: "component",
        description: "SidebarGroup subcomponent exported from this module.",
      },
      {
        prop: "SidebarGroupAction",
        type: "component",
        description: "SidebarGroupAction subcomponent exported from this module.",
      },
      {
        prop: "SidebarGroupContent",
        type: "component",
        description: "SidebarGroupContent subcomponent exported from this module.",
      },
      {
        prop: "SidebarGroupLabel",
        type: "component",
        description: "SidebarGroupLabel subcomponent exported from this module.",
      },
      {
        prop: "SidebarHeader",
        type: "component",
        description: "SidebarHeader subcomponent exported from this module.",
      },
      {
        prop: "SidebarInput",
        type: "component",
        description: "SidebarInput subcomponent exported from this module.",
      },
      {
        prop: "SidebarInset",
        type: "component",
        description: "SidebarInset subcomponent exported from this module.",
      },
      {
        prop: "SidebarMenu",
        type: "component",
        description: "SidebarMenu subcomponent exported from this module.",
      },
      {
        prop: "SidebarMenuAction",
        type: "component",
        description: "SidebarMenuAction subcomponent exported from this module.",
      },
      {
        prop: "SidebarMenuBadge",
        type: "component",
        description: "SidebarMenuBadge subcomponent exported from this module.",
      },
      {
        prop: "SidebarMenuButton",
        type: "component",
        description: "SidebarMenuButton subcomponent exported from this module.",
      },
      {
        prop: "SidebarMenuItem",
        type: "component",
        description: "SidebarMenuItem subcomponent exported from this module.",
      },
      {
        prop: "SidebarMenuSkeleton",
        type: "component",
        description: "SidebarMenuSkeleton subcomponent exported from this module.",
      },
      {
        prop: "SidebarMenuSub",
        type: "component",
        description: "SidebarMenuSub subcomponent exported from this module.",
      },
      {
        prop: "SidebarMenuSubButton",
        type: "component",
        description: "SidebarMenuSubButton subcomponent exported from this module.",
      },
      {
        prop: "SidebarMenuSubItem",
        type: "component",
        description: "SidebarMenuSubItem subcomponent exported from this module.",
      },
      {
        prop: "SidebarProvider",
        type: "component",
        description: "SidebarProvider subcomponent exported from this module.",
      },
      {
        prop: "SidebarRail",
        type: "component",
        description: "SidebarRail subcomponent exported from this module.",
      },
      {
        prop: "SidebarSeparator",
        type: "component",
        description: "SidebarSeparator subcomponent exported from this module.",
      },
      {
        prop: "SidebarTrigger",
        type: "component",
        description: "SidebarTrigger subcomponent exported from this module.",
      },
      {
        prop: "side",
        type: "\"left\" | \"right\"",
        default: "\"left\"",
        description: "side configuration option.",
      },
      {
        prop: "variant",
        type: "\"sidebar\" | \"floating\" | \"inset\"",
        default: "\"sidebar\"",
        description: "variant configuration option.",
      },
      {
        prop: "collapsible",
        type: "\"offcanvas\" | \"icon\" | \"none\"",
        default: "\"offcanvas\"",
        description: "collapsible configuration option.",
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
    footnote: "Additionally, Sidebar accepts all standard HTML div attributes.",
  },
  cssVariants: [
    {
      "title": "Variant Classes",
      "variants": [
        {
          "name": "default",
          "description": "default variant styling."
        },
        {
          "name": "outline",
          "description": "outline variant styling."
        }
      ]
    },
    {
      "title": "Size Classes",
      "variants": [
        {
          "name": "default",
          "description": "default size styling."
        },
        {
          "name": "sm",
          "description": "sm size styling."
        },
        {
          "name": "lg",
          "description": "lg size styling."
        }
      ]
    }
  ],
}
