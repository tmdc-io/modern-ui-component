import type { ComponentApiDoc } from "@/app/component-variants/types"

export const calendarApi: ComponentApiDoc = {
  features: [
    "ModernUI Calendar component.",
  ],
  usage: {
    import: "import { Calendar } from \"@/components/ui/calendar\"",
    example: "<Calendar />",
  },
  apiReference: {
    title: "Calendar Components",
    props: [
      {
        prop: "CalendarDayButton",
        type: "component",
        description: "CalendarDayButton subcomponent exported from this module.",
      },
      {
        prop: "buttonVariant",
        type: "React.ComponentProps<typeof Button>[\"variant\"]",
        default: "\"ghost\"",
        description: "buttonVariant configuration option.",
      },
      {
        prop: "classNames",
        type: "unknown",
        description: "classNames prop.",
      },
      {
        prop: "showOutsideDays",
        type: "unknown",
        default: "true",
        description: "showOutsideDays prop.",
      },
      {
        prop: "captionLayout",
        type: "unknown",
        default: "\"label\"",
        description: "captionLayout prop.",
      },
      {
        prop: "formatters",
        type: "unknown",
        description: "formatters prop.",
      },
      {
        prop: "components",
        type: "unknown",
        description: "components prop.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Calendar forwards props to the underlying Radix UI primitive.",
  },
}
