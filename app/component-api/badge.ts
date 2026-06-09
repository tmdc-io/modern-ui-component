import type { ComponentApiDoc } from "@/app/component-variants/types"

export const badgeApi: ComponentApiDoc = {
  features: [
    "Compact status label with multiple visual variants.",
    "Supports asChild to render as a link or custom element.",
    "Invalid state styling via aria-invalid.",
  ],
  usage: {
    import: 'import { Badge } from "@/components/ui/badge"',
    example: '<Badge variant="secondary">Badge</Badge>',
  },
  apiReference: {
    title: "Badge Props",
    props: [
      {
        prop: "variant",
        type: "'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'",
        default: "'default'",
        description: "Controls the visual style of the badge.",
      },
      {
        prop: "asChild",
        type: "boolean",
        default: "false",
        description:
          "When true, renders the child element with badge styling via Radix Slot.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes to apply to the badge.",
      },
      {
        prop: "children",
        type: "ReactNode",
        description: "Badge label content.",
      },
    ],
    footnote:
      "Additionally, the Badge component accepts all standard HTML span attributes.",
  },
  cssVariants: [
    {
      title: "Variant Classes",
      variants: [
        {
          name: "default",
          description: "Primary filled badge.",
        },
        {
          name: "secondary",
          description: "Muted secondary background.",
        },
        {
          name: "destructive",
          description: "Red badge for errors or critical status.",
        },
        {
          name: "outline",
          description: "Bordered badge with transparent background.",
        },
        {
          name: "ghost",
          description: "Minimal badge that highlights on hover when used as a link.",
        },
        {
          name: "link",
          description: "Text link appearance with underline on hover.",
        },
      ],
    },
  ],
}
