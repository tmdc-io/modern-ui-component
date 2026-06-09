import type { ComponentApiDoc } from "@/app/component-variants/types"

export const selectApi: ComponentApiDoc = {
  features: [
    "Accessible dropdown select built on Radix Select.",
    "Grouped options with labels and separators.",
    "Trigger sizes sm and default with scroll buttons for long lists.",
  ],
  usage: {
    import: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"`,
    example: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
  </SelectContent>
</Select>`,
  },
  apiReference: {
    title: "Select Components",
    props: [
      {
        prop: "Select",
        type: "SelectPrimitive.Root props",
        description:
          "Root controller. Supports value, defaultValue, onValueChange, and disabled.",
      },
      {
        prop: "SelectTrigger",
        type: "SelectPrimitive.Trigger props",
        description: "Button that opens the select menu.",
      },
      {
        prop: "size",
        type: "'default' | 'sm'",
        default: "'default'",
        description: "On SelectTrigger — controls trigger height (h-9 or h-8).",
      },
      {
        prop: "SelectValue",
        type: "SelectPrimitive.Value props",
        description: "Displays the selected item or placeholder text.",
      },
      {
        prop: "SelectContent",
        type: "SelectPrimitive.Content props",
        description: "Dropdown panel with positioning and animation.",
      },
      {
        prop: "position",
        type: "'item-aligned' | 'popper'",
        default: "'item-aligned'",
        description: "On SelectContent — alignment strategy for the dropdown.",
      },
      {
        prop: "align",
        type: "'start' | 'center' | 'end'",
        default: "'center'",
        description: "On SelectContent — horizontal alignment relative to trigger.",
      },
      {
        prop: "SelectItem",
        type: "SelectPrimitive.Item props",
        description: "Individual selectable option. Requires a value prop.",
      },
      {
        prop: "SelectGroup",
        type: "SelectPrimitive.Group props",
        description: "Groups related SelectItem options.",
      },
      {
        prop: "SelectLabel",
        type: "SelectPrimitive.Label props",
        description: "Non-interactive label inside a group.",
      },
    ],
    footnote:
      "Select subcomponents forward Radix Select props. See Radix docs for full prop lists.",
  },
  cssVariants: [
    {
      title: "Trigger Size Classes",
      variants: [
        {
          name: "default",
          description: "Standard trigger height (h-9).",
        },
        {
          name: "sm",
          description: "Compact trigger height (h-8).",
        },
      ],
    },
  ],
}
