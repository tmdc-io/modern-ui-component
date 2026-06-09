import type { ComponentApiDoc } from "@/app/component-variants/types"

export const cardApi: ComponentApiDoc = {
  features: [
    "Composable card layout with header, content, and footer regions.",
    "CardAction slot for top-right actions such as badges or menus.",
    "Container-query aware header grid for responsive layouts.",
  ],
  usage: {
    import: `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"`,
    example: `<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>`,
  },
  apiReference: {
    title: "Card Components",
    props: [
      {
        prop: "Card",
        type: "React.ComponentProps<'div'>",
        description: "Root container with border, shadow, and padding.",
      },
      {
        prop: "CardHeader",
        type: "React.ComponentProps<'div'>",
        description:
          "Header region. Supports CardAction in a two-column grid when present.",
      },
      {
        prop: "CardTitle",
        type: "React.ComponentProps<'div'>",
        description: "Primary heading inside the card header.",
      },
      {
        prop: "CardDescription",
        type: "React.ComponentProps<'div'>",
        description: "Muted supporting text below the title.",
      },
      {
        prop: "CardAction",
        type: "React.ComponentProps<'div'>",
        description: "Top-right action area aligned with the header.",
      },
      {
        prop: "CardContent",
        type: "React.ComponentProps<'div'>",
        description: "Main body content with horizontal padding.",
      },
      {
        prop: "CardFooter",
        type: "React.ComponentProps<'div'>",
        description:
          "Footer row for actions. Add border-t on the footer for a divider.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes on any card subcomponent.",
      },
    ],
    footnote:
      "All card subcomponents accept standard HTML div attributes via className and spread props.",
  },
}
