import type { ComponentApiDoc } from "@/app/component-variants/types"

export const resizableApi: ComponentApiDoc = {
  features: [
    "ModernUI Resizable component.",
  ],
  usage: {
    import: "import { ResizableHandle } from \"@/components/ui/resizable\"",
    example: "<ResizableHandle />",
  },
  apiReference: {
    title: "Resizable Components",
    props: [
      {
        prop: "ResizablePanel",
        type: "component",
        description: "ResizablePanel subcomponent exported from this module.",
      },
      {
        prop: "ResizablePanelGroup",
        type: "component",
        description: "ResizablePanelGroup subcomponent exported from this module.",
      },
      {
        prop: "withHandle",
        type: "boolean",
        description: "withHandle configuration option.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, ResizableHandle accepts props forwarded from its underlying element or primitive.",
  },
}
