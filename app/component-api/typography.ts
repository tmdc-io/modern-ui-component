import type { ComponentApiDoc } from "@/app/component-variants/types"

export const typographyApi: ComponentApiDoc = {
  features: [
    "Consistent prose styling using Tailwind utility classes.",
    "Covers headings, body text, lists, blockquotes, and inline code.",
    "No component import required — apply classes directly to HTML elements.",
  ],
  intro:
    "Typography is a set of documented Tailwind class recipes, not a React component. Copy the className patterns below onto native HTML elements.",
  usage: {
    import: "// No import — use native HTML elements with Tailwind classes",
    example: `<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
  Page Title
</h1>
<p className="leading-7 [&:not(:first-child)]:mt-6">
  Body paragraph text.
</p>`,
  },
  apiReference: {
    title: "Typography Elements",
    props: [
      {
        prop: "h1",
        type: "HTMLHeadingElement",
        description:
          "Page title — scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      },
      {
        prop: "h2",
        type: "HTMLHeadingElement",
        description:
          "Section heading — mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight",
      },
      {
        prop: "h3",
        type: "HTMLHeadingElement",
        description:
          "Subsection heading — mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
      },
      {
        prop: "h4",
        type: "HTMLHeadingElement",
        description:
          "Minor heading — mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
      },
      {
        prop: "p",
        type: "HTMLParagraphElement",
        description: "Body text — leading-7 [&:not(:first-child)]:mt-6",
      },
      {
        prop: "blockquote",
        type: "HTMLQuoteElement",
        description: "Quoted text — mt-6 border-l-2 pl-6 italic",
      },
      {
        prop: "ul / ol",
        type: "HTMLListElement",
        description: "Lists — my-6 ml-6 list-disc [&>li]:mt-2 (ul) or list-decimal (ol)",
      },
      {
        prop: "code",
        type: "HTMLElement",
        description:
          "Inline code — relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      },
      {
        prop: "lead",
        type: "HTMLParagraphElement",
        description: "Intro paragraph — text-xl text-muted-foreground",
      },
      {
        prop: "large",
        type: "HTMLDivElement",
        description: "Large body text — text-lg font-semibold",
      },
      {
        prop: "small",
        type: "HTMLElement",
        description: "Fine print — text-sm font-medium leading-none",
      },
      {
        prop: "muted",
        type: "HTMLParagraphElement",
        description: "Secondary text — text-sm text-muted-foreground",
      },
    ],
    footnote:
      "All typography styles are plain Tailwind classes. Adjust spacing tokens (mt-6, mt-8, mt-10) to match your layout rhythm.",
  },
  cssVariants: [
    {
      title: "Heading Classes",
      variants: [
        {
          name: "h1",
          description:
            "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        },
        {
          name: "h2",
          description:
            "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        },
        {
          name: "h3",
          description: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        },
        {
          name: "h4",
          description: "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        },
      ],
    },
    {
      title: "Body & Inline Classes",
      variants: [
        {
          name: "p",
          description: "leading-7 [&:not(:first-child)]:mt-6",
        },
        {
          name: "lead",
          description: "text-xl text-muted-foreground",
        },
        {
          name: "large",
          description: "text-lg font-semibold",
        },
        {
          name: "small",
          description: "text-sm font-medium leading-none",
        },
        {
          name: "muted",
          description: "text-sm text-muted-foreground",
        },
        {
          name: "inline-code",
          description:
            "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        },
        {
          name: "blockquote",
          description: "mt-6 border-l-2 pl-6 italic",
        },
        {
          name: "list",
          description: "my-6 ml-6 list-disc [&>li]:mt-2",
        },
      ],
    },
  ],
}
