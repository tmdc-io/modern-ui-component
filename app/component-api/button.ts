import type { ComponentApiDoc } from "@/app/component-variants/types"

export const buttonApi: ComponentApiDoc = {
  features: [
    "Supports multiple variants including ModernUI brand styling.",
    "Available in xs, sm, default, lg, and icon sizes.",
    "Fully accessible with Radix Slot support via asChild.",
  ],
  usage: {
    import: 'import { Button } from "@/components/ui/button"',
    example: '<Button variant="outline">Button</Button>',
  },
  apiReference: {
    title: "Button Props",
    props: [
      {
        prop: "variant",
        type: "'default' | 'brand' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'",
        default: "'default'",
        description: "Controls the visual style of the button.",
      },
      {
        prop: "size",
        type: "'default' | 'xs' | 'sm' | 'lg' | 'icon' | 'icon-xs' | 'icon-sm' | 'icon-lg'",
        default: "'default'",
        description: "Controls the size of the button.",
      },
      {
        prop: "asChild",
        type: "boolean",
        default: "false",
        description:
          "When true, the component renders its child as the button element.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes to apply to the button.",
      },
      {
        prop: "children",
        type: "ReactNode",
        description: "The content of the button.",
      },
      {
        prop: "disabled",
        type: "boolean",
        default: "false",
        description: "When true, disables the button.",
      },
    ],
    footnote:
      "Additionally, the Button component accepts all standard HTML button attributes.",
  },
  cssVariants: [
    {
      title: "Variant Classes",
      variants: [
        {
          name: "default",
          description: "Primary button with background color.",
        },
        {
          name: "brand",
          description: "ModernUI brand teal button.",
        },
        {
          name: "destructive",
          description: "Red button for destructive actions.",
        },
        {
          name: "outline",
          description: "Button with a border and transparent background.",
        },
        {
          name: "secondary",
          description: "Alternative button style with muted background.",
        },
        {
          name: "ghost",
          description: "Button with no background until hovered.",
        },
        {
          name: "link",
          description: "Button that appears as a text link.",
        },
      ],
    },
    {
      title: "Size Classes",
      variants: [
        {
          name: "default",
          description: "Standard button size (h-9 px-4 py-2).",
        },
        {
          name: "xs",
          description: "Extra small button (h-6 px-2 text-xs).",
        },
        {
          name: "sm",
          description: "Small button (h-8 px-3).",
        },
        {
          name: "lg",
          description: "Large button (h-10 px-6).",
        },
        {
          name: "icon",
          description: "Square icon button (size-9).",
        },
        {
          name: "icon-xs",
          description: "Extra small square icon button (size-6).",
        },
        {
          name: "icon-sm",
          description: "Small square icon button (size-8).",
        },
        {
          name: "icon-lg",
          description: "Large square icon button (size-10).",
        },
      ],
    },
  ],
}
