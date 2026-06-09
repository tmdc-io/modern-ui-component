import type { ComponentApiDoc } from "@/app/component-variants/types"

export const formApi: ComponentApiDoc = {
  features: [
    "React Hook Form integration with accessible field wiring.",
    "Automatic label, control, description, and message ID linking.",
    "Validation errors surfaced via FormMessage with aria attributes.",
  ],
  usage: {
    import: `import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"`,
    example: `<Form {...form}>
  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input placeholder="you@example.com" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
</Form>`,
  },
  apiReference: {
    title: "Form Components",
    props: [
      {
        prop: "Form",
        type: "FormProvider props",
        description:
          "Alias for React Hook Form FormProvider. Spread useForm() return value.",
      },
      {
        prop: "FormField",
        type: "ControllerProps",
        description:
          "Wraps React Hook Form Controller. Requires control, name, and render.",
      },
      {
        prop: "FormItem",
        type: "React.ComponentProps<'div'>",
        description: "Vertical field layout with gap. Provides id context to children.",
      },
      {
        prop: "FormLabel",
        type: "Label props",
        description:
          "Accessible label linked to the control. Turns destructive when the field has an error.",
      },
      {
        prop: "FormControl",
        type: "Slot.Root props",
        description:
          "Wraps the input. Sets id, aria-describedby, and aria-invalid from field state.",
      },
      {
        prop: "FormDescription",
        type: "React.ComponentProps<'p'>",
        description: "Helper text linked via aria-describedby.",
      },
      {
        prop: "FormMessage",
        type: "React.ComponentProps<'p'>",
        description:
          "Displays validation error message or custom children when present.",
      },
      {
        prop: "useFormField",
        type: "() => FieldState & ids",
        description:
          "Hook returning field error state and generated ids. Must be used inside FormField.",
      },
    ],
    footnote:
      "FormField requires a React Hook Form control. FormLabel, FormControl, FormDescription, and FormMessage must be used inside FormField.",
  },
}
