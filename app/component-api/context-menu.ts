import type { ComponentApiDoc } from "@/app/component-variants/types"

export const contextMenuApi: ComponentApiDoc = {
  features: [
    "ModernUI Context Menu component.",
  ],
  usage: {
    import: "import { ContextMenu } from \"@/components/ui/context-menu\"",
    example: "<ContextMenu />",
  },
  apiReference: {
    title: "ContextMenu Components",
    props: [
      {
        prop: "ContextMenuTrigger",
        type: "component",
        description: "ContextMenuTrigger subcomponent exported from this module.",
      },
      {
        prop: "ContextMenuContent",
        type: "component",
        description: "ContextMenuContent subcomponent exported from this module.",
      },
      {
        prop: "ContextMenuItem",
        type: "component",
        description: "ContextMenuItem subcomponent exported from this module.",
      },
      {
        prop: "ContextMenuCheckboxItem",
        type: "component",
        description: "ContextMenuCheckboxItem subcomponent exported from this module.",
      },
      {
        prop: "ContextMenuRadioItem",
        type: "component",
        description: "ContextMenuRadioItem subcomponent exported from this module.",
      },
      {
        prop: "ContextMenuLabel",
        type: "component",
        description: "ContextMenuLabel subcomponent exported from this module.",
      },
      {
        prop: "ContextMenuSeparator",
        type: "component",
        description: "ContextMenuSeparator subcomponent exported from this module.",
      },
      {
        prop: "ContextMenuShortcut",
        type: "component",
        description: "ContextMenuShortcut subcomponent exported from this module.",
      },
      {
        prop: "ContextMenuGroup",
        type: "component",
        description: "ContextMenuGroup subcomponent exported from this module.",
      },
      {
        prop: "ContextMenuPortal",
        type: "component",
        description: "ContextMenuPortal subcomponent exported from this module.",
      },
      {
        prop: "ContextMenuSub",
        type: "component",
        description: "ContextMenuSub subcomponent exported from this module.",
      },
      {
        prop: "ContextMenuSubContent",
        type: "component",
        description: "ContextMenuSubContent subcomponent exported from this module.",
      },
      {
        prop: "ContextMenuSubTrigger",
        type: "component",
        description: "ContextMenuSubTrigger subcomponent exported from this module.",
      },
      {
        prop: "ContextMenuRadioGroup",
        type: "component",
        description: "ContextMenuRadioGroup subcomponent exported from this module.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, ContextMenu forwards props to the underlying Radix UI primitive.",
  },
}
