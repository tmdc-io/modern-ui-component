import type { ComponentApiDoc } from "@/app/component-variants/types"

export const carouselApi: ComponentApiDoc = {
  features: [
    "ModernUI Carousel component.",
  ],
  usage: {
    import: "import { CarouselApi } from \"@/components/ui/carousel\"",
    example: "<CarouselApi />",
  },
  apiReference: {
    title: "Carousel Components",
    props: [
      {
        prop: "Carousel",
        type: "component",
        description: "Carousel subcomponent exported from this module.",
      },
      {
        prop: "CarouselContent",
        type: "component",
        description: "CarouselContent subcomponent exported from this module.",
      },
      {
        prop: "CarouselItem",
        type: "component",
        description: "CarouselItem subcomponent exported from this module.",
      },
      {
        prop: "CarouselPrevious",
        type: "component",
        description: "CarouselPrevious subcomponent exported from this module.",
      },
      {
        prop: "CarouselNext",
        type: "component",
        description: "CarouselNext subcomponent exported from this module.",
      },
      {
        prop: "orientation",
        type: "unknown",
        default: "\"horizontal\"",
        description: "orientation prop.",
      },
      {
        prop: "opts",
        type: "unknown",
        description: "opts prop.",
      },
      {
        prop: "setApi",
        type: "unknown",
        description: "setApi prop.",
      },
      {
        prop: "plugins",
        type: "unknown",
        description: "plugins prop.",
      },
      {
        prop: "children",
        type: "ReactNode",
        description: "Child content.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, CarouselApi accepts all standard HTML div attributes.",
  },
}
