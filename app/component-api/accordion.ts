import type { ComponentApiDoc } from "@/app/component-variants/types"

export const accordionApi: ComponentApiDoc = {
  features: [
    "ModernUI Accordion component.",
  ],
  usage: {
    import: "import { Accordion } from \"@/components/ui/accordion\"",
    example: "<Accordion />",
  },
  apiReference: {
    title: "Accordion Components",
    props: [
      {
        prop: "AccordionItem",
        type: "component",
        description: "AccordionItem subcomponent exported from this module.",
      },
      {
        prop: "AccordionTrigger",
        type: "component",
        description: "AccordionTrigger subcomponent exported from this module.",
      },
      {
        prop: "AccordionContent",
        type: "component",
        description: "AccordionContent subcomponent exported from this module.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Accordion forwards props to the underlying Radix UI primitive.",
  },
}
