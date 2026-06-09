import type { ComponentApiDoc } from "@/app/component-variants/types"

export const breadcrumbApi: ComponentApiDoc = {
  features: [
    "ModernUI Breadcrumb component.",
  ],
  usage: {
    import: "import { Breadcrumb } from \"@/components/ui/breadcrumb\"",
    example: "<Breadcrumb />",
  },
  apiReference: {
    title: "Breadcrumb Components",
    props: [
      {
        prop: "BreadcrumbList",
        type: "component",
        description: "BreadcrumbList subcomponent exported from this module.",
      },
      {
        prop: "BreadcrumbItem",
        type: "component",
        description: "BreadcrumbItem subcomponent exported from this module.",
      },
      {
        prop: "BreadcrumbLink",
        type: "component",
        description: "BreadcrumbLink subcomponent exported from this module.",
      },
      {
        prop: "BreadcrumbPage",
        type: "component",
        description: "BreadcrumbPage subcomponent exported from this module.",
      },
      {
        prop: "BreadcrumbSeparator",
        type: "component",
        description: "BreadcrumbSeparator subcomponent exported from this module.",
      },
      {
        prop: "BreadcrumbEllipsis",
        type: "component",
        description: "BreadcrumbEllipsis subcomponent exported from this module.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Breadcrumb accepts all standard HTML nav attributes.",
  },
}
