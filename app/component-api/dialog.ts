import type { ComponentApiDoc } from "@/app/component-variants/types"

export const dialogApi: ComponentApiDoc = {
  features: [
    "Modal dialog built on Radix Dialog primitives.",
    "Composable header, footer, title, and description slots.",
    "Optional built-in close button on content and footer.",
  ],
  usage: {
    import: `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"`,
    example: `<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`,
  },
  apiReference: {
    title: "Dialog Components",
    props: [
      {
        prop: "Dialog",
        type: "DialogPrimitive.Root props",
        description:
          "Root controller. Supports open, defaultOpen, onOpenChange, and modal.",
      },
      {
        prop: "DialogTrigger",
        type: "DialogPrimitive.Trigger props",
        description: "Element that opens the dialog when activated.",
      },
      {
        prop: "DialogContent",
        type: "DialogPrimitive.Content props",
        description: "Modal panel with overlay, animation, and optional close button.",
      },
      {
        prop: "showCloseButton",
        type: "boolean",
        default: "true",
        description:
          "On DialogContent — renders an X close control in the top-right corner.",
      },
      {
        prop: "DialogHeader",
        type: "React.ComponentProps<'div'>",
        description: "Layout wrapper for title and description.",
      },
      {
        prop: "DialogFooter",
        type: "React.ComponentProps<'div'>",
        description: "Footer row for actions, stacked on mobile.",
      },
      {
        prop: "showCloseButton (Footer)",
        type: "boolean",
        default: "false",
        description: "On DialogFooter — appends an outline Close button.",
      },
      {
        prop: "DialogTitle",
        type: "DialogPrimitive.Title props",
        description: "Accessible dialog title announced to screen readers.",
      },
      {
        prop: "DialogDescription",
        type: "DialogPrimitive.Description props",
        description: "Accessible description text for the dialog.",
      },
    ],
    footnote:
      "Dialog, DialogTrigger, DialogContent, DialogTitle, and DialogDescription forward Radix Dialog props. See Radix docs for full prop lists.",
  },
}
