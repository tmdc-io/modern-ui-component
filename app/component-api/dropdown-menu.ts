import type { ComponentApiDoc } from "@/app/component-variants/types"

export const dropdownMenuApi: ComponentApiDoc = {
  features: [
    "ModernUI Dropdown Menu component.",
  ],
  usage: {
    import: "import { DropdownMenu } from \"@/components/ui/dropdown-menu\"",
    example: "<DropdownMenu />",
  },
  apiReference: {
    title: "DropdownMenu Components",
    props: [
      {
        prop: "DropdownMenuPortal",
        type: "component",
        description: "DropdownMenuPortal subcomponent exported from this module.",
      },
      {
        prop: "DropdownMenuTrigger",
        type: "component",
        description: "DropdownMenuTrigger subcomponent exported from this module.",
      },
      {
        prop: "DropdownMenuContent",
        type: "component",
        description: "DropdownMenuContent subcomponent exported from this module.",
      },
      {
        prop: "DropdownMenuGroup",
        type: "component",
        description: "DropdownMenuGroup subcomponent exported from this module.",
      },
      {
        prop: "DropdownMenuLabel",
        type: "component",
        description: "DropdownMenuLabel subcomponent exported from this module.",
      },
      {
        prop: "DropdownMenuItem",
        type: "component",
        description: "DropdownMenuItem subcomponent exported from this module.",
      },
      {
        prop: "DropdownMenuCheckboxItem",
        type: "component",
        description: "DropdownMenuCheckboxItem subcomponent exported from this module.",
      },
      {
        prop: "DropdownMenuRadioGroup",
        type: "component",
        description: "DropdownMenuRadioGroup subcomponent exported from this module.",
      },
      {
        prop: "DropdownMenuRadioItem",
        type: "component",
        description: "DropdownMenuRadioItem subcomponent exported from this module.",
      },
      {
        prop: "DropdownMenuSeparator",
        type: "component",
        description: "DropdownMenuSeparator subcomponent exported from this module.",
      },
      {
        prop: "DropdownMenuShortcut",
        type: "component",
        description: "DropdownMenuShortcut subcomponent exported from this module.",
      },
      {
        prop: "DropdownMenuSub",
        type: "component",
        description: "DropdownMenuSub subcomponent exported from this module.",
      },
      {
        prop: "DropdownMenuSubTrigger",
        type: "component",
        description: "DropdownMenuSubTrigger subcomponent exported from this module.",
      },
      {
        prop: "DropdownMenuSubContent",
        type: "component",
        description: "DropdownMenuSubContent subcomponent exported from this module.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, DropdownMenu forwards props to the underlying Radix UI primitive.",
  },
}
