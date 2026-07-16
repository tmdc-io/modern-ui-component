import type { ComponentApiDoc } from "@/app/component-variants/types"

export const layoutApi: ComponentApiDoc = {
  features: [
    "Compound page shell: Layout, LayoutHeader, LayoutSider, LayoutContent, LayoutFooter.",
    "Nested Layouts for row (hasSider) and column regions.",
    "LayoutSider supports collapsed, collapsible, width, collapsedWidth, and custom trigger.",
    "Compose with Sidebar for rich nav, or DataOS ApplicationHeader / DataOsSidebar for product shells.",
  ],
  usage: {
    import: `import {
  Layout,
  LayoutHeader,
  LayoutSider,
  LayoutContent,
  LayoutFooter,
} from "@/components/ui/layout"`,
    example: `<Layout>
  <LayoutHeader>Header</LayoutHeader>
  <Layout hasSider>
    <LayoutSider>Sider</LayoutSider>
    <LayoutContent>Content</LayoutContent>
  </Layout>
  <LayoutFooter>Footer</LayoutFooter>
</Layout>`,
  },
  apiReference: {
    title: "Layout & LayoutSider Props",
    props: [
      {
        prop: "hasSider",
        type: "boolean",
        description:
          "Layout: force horizontal (row) direction when a Sider is present. Useful for SSR; otherwise Layout detects mounted LayoutSider children.",
      },
      {
        prop: "width",
        type: "number | string",
        default: "200",
        description: "LayoutSider: expanded width (px number or CSS length).",
      },
      {
        prop: "collapsedWidth",
        type: "number | string",
        default: "80",
        description: "LayoutSider: width when collapsed.",
      },
      {
        prop: "collapsed",
        type: "boolean",
        description: "LayoutSider: controlled collapsed state.",
      },
      {
        prop: "defaultCollapsed",
        type: "boolean",
        default: "false",
        description: "LayoutSider: initial collapsed state when uncontrolled.",
      },
      {
        prop: "collapsible",
        type: "boolean",
        default: "false",
        description: "LayoutSider: show a collapse trigger (default or custom).",
      },
      {
        prop: "trigger",
        type: "ReactNode | null",
        description:
          "LayoutSider: custom trigger. Omit for the default icon button. Pass null to hide the trigger.",
      },
      {
        prop: "side",
        type: '"left" | "right"',
        default: '"left"',
        description: "LayoutSider: which edge the sider attaches to.",
      },
      {
        prop: "onCollapse",
        type: "(collapsed: boolean) => void",
        description: "LayoutSider: called when the trigger toggles collapse.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes on Layout or LayoutSider.",
      },
    ],
    footnote:
      "LayoutHeader, LayoutFooter, and LayoutContent accept standard HTML attributes plus className. For menus, cookies, and mobile drawers, nest Sidebar or use DataOsSidebar — LayoutSider is structural chrome only.",
  },
  enhancements: [
    {
      enhancement: "Nested layouts",
      benefit: "Mix full-width headers with side navigation columns",
    },
    {
      enhancement: "Collapsible sider",
      benefit: "Ant-style width animation without pulling in Sidebar",
    },
    {
      enhancement: "Composition",
      benefit: "Drop in Sidebar or DataOS blocks for product navigation",
    },
  ],
}
