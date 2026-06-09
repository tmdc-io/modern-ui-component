import type { ComponentApiDoc } from "@/app/component-variants/types"

export const datePickerApi: ComponentApiDoc = {
  features: [
    "Date selection popover built from Popover, Button, and Calendar.",
    "Supports single date, range, presets, and form integration.",
    "Formatted display with date-fns.",
  ],
  intro:
    "Date Picker is a composition pattern — combine Popover, Button, and Calendar with local state. No separate date-picker component is installed.",
  usage: {
    import: `import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"`,
    example: `const [date, setDate] = React.useState<Date>()

return (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">
        <CalendarIcon />
        {date ? format(date, "PPP") : "Pick a date"}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0" align="start">
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </PopoverContent>
  </Popover>
)`,
  },
  apiReference: {
    title: "Calendar Props (Date Picker)",
    props: [
      {
        prop: "mode",
        type: '"single" | "range" | "multiple"',
        default: '"single"',
        description: "Selection mode — use single for basic date pickers.",
      },
      {
        prop: "selected",
        type: "Date | DateRange | Date[]",
        description: "Currently selected date(s), controlled by your state.",
      },
      {
        prop: "onSelect",
        type: "(date: Date | undefined) => void",
        description: "Called when the user selects a date in the calendar.",
      },
      {
        prop: "defaultMonth",
        type: "Date",
        description: "Initial month shown when no date is selected.",
      },
      {
        prop: "disabled",
        type: "Matcher | Matcher[]",
        description: "Dates or matchers that cannot be selected.",
      },
      {
        prop: "numberOfMonths",
        type: "number",
        default: "1",
        description: "Number of months displayed — use 2 for range pickers.",
      },
      {
        prop: "captionLayout",
        type: '"label" | "dropdown"',
        default: '"label"',
        description: "Month/year navigation — dropdown adds month and year selects.",
      },
      {
        prop: "showOutsideDays",
        type: "boolean",
        default: "true",
        description: "Show days from adjacent months in the grid.",
      },
    ],
    footnote:
      "PopoverTrigger, PopoverContent, and Button accept their standard props. For range pickers set mode=\"range\" and use DateRange from react-day-picker. See the Calendar and Popover API references for full prop lists.",
  },
  cssVariants: [
    {
      title: "Related Components",
      variants: [
        {
          name: "Popover",
          description: "Floating container that opens on trigger click.",
        },
        {
          name: "PopoverTrigger",
          description: "Wraps the Button — use asChild to avoid nested buttons.",
        },
        {
          name: "PopoverContent",
          description: "Panel containing the Calendar; use w-auto p-0 for tight fit.",
        },
        {
          name: "Button",
          description: "Trigger showing formatted date or placeholder text.",
        },
        {
          name: "Calendar",
          description: "DayPicker grid handling date selection logic.",
        },
      ],
    },
  ],
}
