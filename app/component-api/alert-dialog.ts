import type { ComponentApiDoc } from "@/app/component-variants/types"

export const alertDialogApi: ComponentApiDoc = {
  features: [
    "ModernUI Alert Dialog component.",
  ],
  usage: {
    import: "import { AlertDialog } from \"@/components/ui/alert-dialog\"",
    example: "<AlertDialog />",
  },
  apiReference: {
    title: "AlertDialog Components",
    props: [
      {
        prop: "AlertDialogAction",
        type: "component",
        description: "AlertDialogAction subcomponent exported from this module.",
      },
      {
        prop: "AlertDialogCancel",
        type: "component",
        description: "AlertDialogCancel subcomponent exported from this module.",
      },
      {
        prop: "AlertDialogContent",
        type: "component",
        description: "AlertDialogContent subcomponent exported from this module.",
      },
      {
        prop: "AlertDialogDescription",
        type: "component",
        description: "AlertDialogDescription subcomponent exported from this module.",
      },
      {
        prop: "AlertDialogFooter",
        type: "component",
        description: "AlertDialogFooter subcomponent exported from this module.",
      },
      {
        prop: "AlertDialogHeader",
        type: "component",
        description: "AlertDialogHeader subcomponent exported from this module.",
      },
      {
        prop: "AlertDialogMedia",
        type: "component",
        description: "AlertDialogMedia subcomponent exported from this module.",
      },
      {
        prop: "AlertDialogOverlay",
        type: "component",
        description: "AlertDialogOverlay subcomponent exported from this module.",
      },
      {
        prop: "AlertDialogPortal",
        type: "component",
        description: "AlertDialogPortal subcomponent exported from this module.",
      },
      {
        prop: "AlertDialogTitle",
        type: "component",
        description: "AlertDialogTitle subcomponent exported from this module.",
      },
      {
        prop: "AlertDialogTrigger",
        type: "component",
        description: "AlertDialogTrigger subcomponent exported from this module.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, AlertDialog forwards props to the underlying Radix UI primitive.",
  },
}
