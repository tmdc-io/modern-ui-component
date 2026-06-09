import type { ComponentApiDoc } from "@/app/component-variants/types"

export const toastApi: ComponentApiDoc = {
  features: [
    "Radix-based toast notifications with swipe-to-dismiss.",
    "Composable ToastTitle, ToastDescription, ToastAction, and ToastClose.",
    "Imperative API via toast() and useToast() hook.",
    "Destructive variant for error states.",
  ],
  usage: {
    import: `import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"`,
    example: `// Add <Toaster /> to your app layout, then:
const { toast } = useToast()

toast({
  title: "Scheduled",
  description: "Friday, February 10, 2023 at 5:57 PM",
})`,
  },
  apiReference: {
    title: "toast() Options",
    props: [
      {
        prop: "title",
        type: "ReactNode",
        description: "Primary toast heading rendered in ToastTitle.",
      },
      {
        prop: "description",
        type: "ReactNode",
        description: "Secondary text rendered in ToastDescription.",
      },
      {
        prop: "action",
        type: "ToastActionElement",
        description: "Optional action button (ToastAction) shown beside the message.",
      },
      {
        prop: "variant",
        type: '"default" | "destructive"',
        default: '"default"',
        description: "Visual style applied to the toast surface.",
      },
      {
        prop: "open",
        type: "boolean",
        description: "Controlled open state for the toast.",
      },
      {
        prop: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Called when the toast open state changes.",
      },
    ],
    footnote:
      "Mount <Toaster /> once in your root layout. The toast() function and useToast() hook share the same queue. For simpler toasts, see the Sonner component.",
  },
  cssVariants: [
    {
      title: "Toast Subcomponents",
      variants: [
        {
          name: "ToastProvider",
          description: "Context provider — wraps the toast viewport and items.",
        },
        {
          name: "ToastViewport",
          description: "Fixed container where toasts are rendered.",
        },
        {
          name: "Toast",
          description: "Root toast surface; accepts variant and Radix Toast props.",
        },
        {
          name: "ToastTitle",
          description: "Semibold title text inside a toast.",
        },
        {
          name: "ToastDescription",
          description: "Muted description text below the title.",
        },
        {
          name: "ToastAction",
          description: "Inline action button with altText for accessibility.",
        },
        {
          name: "ToastClose",
          description: "Dismiss button shown on hover/focus.",
        },
      ],
    },
    {
      title: "Variant Classes",
      variants: [
        {
          name: "default",
          description: "Standard border and background styling.",
        },
        {
          name: "destructive",
          description: "Red destructive styling for errors and failures.",
        },
      ],
    },
  ],
}
