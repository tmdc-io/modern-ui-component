import type { ComponentApiDoc } from "@/app/component-variants/types"

export const comboboxApi: ComponentApiDoc = {
  features: [
    "ModernUI Combobox component.",
  ],
  usage: {
    import: "import { Combobox } from \"@/components/ui/combobox\"",
    example: "<Combobox />",
  },
  apiReference: {
    title: "Combobox Components",
    props: [
      {
        prop: "ComboboxInput",
        type: "component",
        description: "ComboboxInput subcomponent exported from this module.",
      },
      {
        prop: "ComboboxContent",
        type: "component",
        description: "ComboboxContent subcomponent exported from this module.",
      },
      {
        prop: "ComboboxList",
        type: "component",
        description: "ComboboxList subcomponent exported from this module.",
      },
      {
        prop: "ComboboxItem",
        type: "component",
        description: "ComboboxItem subcomponent exported from this module.",
      },
      {
        prop: "ComboboxGroup",
        type: "component",
        description: "ComboboxGroup subcomponent exported from this module.",
      },
      {
        prop: "ComboboxLabel",
        type: "component",
        description: "ComboboxLabel subcomponent exported from this module.",
      },
      {
        prop: "ComboboxCollection",
        type: "component",
        description: "ComboboxCollection subcomponent exported from this module.",
      },
      {
        prop: "ComboboxEmpty",
        type: "component",
        description: "ComboboxEmpty subcomponent exported from this module.",
      },
      {
        prop: "ComboboxSeparator",
        type: "component",
        description: "ComboboxSeparator subcomponent exported from this module.",
      },
      {
        prop: "ComboboxChips",
        type: "component",
        description: "ComboboxChips subcomponent exported from this module.",
      },
      {
        prop: "ComboboxChip",
        type: "component",
        description: "ComboboxChip subcomponent exported from this module.",
      },
      {
        prop: "ComboboxChipsInput",
        type: "component",
        description: "ComboboxChipsInput subcomponent exported from this module.",
      },
      {
        prop: "ComboboxTrigger",
        type: "component",
        description: "ComboboxTrigger subcomponent exported from this module.",
      },
      {
        prop: "ComboboxValue",
        type: "component",
        description: "ComboboxValue subcomponent exported from this module.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Combobox accepts props forwarded from its underlying element or primitive.",
  },
}
