import {
  LayoutBasicPreview,
  LayoutCollapsiblePreview,
  LayoutCustomTriggerPreview,
  LayoutDataOsHomePreview,
  LayoutDataOsShellPreview,
  LayoutFixedHeaderPreview,
  LayoutFixedSiderPreview,
  LayoutHeaderContentFooterPreview,
  LayoutHeaderSider2Preview,
  LayoutHeaderSiderPreview,
  LayoutSiderOnlyPreview,
  LayoutWithSidebarPreview,
} from "@/app/component-examples/layout-usage"
import { layoutCodes } from "@/app/component-examples/layout-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const layoutPage: ComponentVariantPage = {
  name: "layout",
  title: "Layout",
  description: "Handling the overall layout of a page.",
  install: layoutCodes.install,
  intro:
    "Compose page shells with Layout, LayoutHeader, LayoutSider, LayoutContent, and LayoutFooter. Nest Layouts for row/column regions. Pair with Sidebar for rich navigation, or DataOS ApplicationHeader and DataOsSidebar for product shells.",
  sections: [
    {
      id: "examples",
      title: "Examples",
      description: "Common page structures built from Layout compounds.",
      variants: [
        {
          id: "basic",
          title: "Basic Structure",
          description: "Header, Sider, Content, and Footer.",
          body: "Nest a horizontal Layout (hasSider) between Header and Footer for the classic app chrome.",
          Preview: LayoutBasicPreview,
          code: layoutCodes.basic,
        },
        {
          id: "header-content-footer",
          title: "Header-Content-Footer",
          description: "Top and bottom chrome with a flexible content area.",
          Preview: LayoutHeaderContentFooterPreview,
          code: layoutCodes.headerContentFooter,
        },
        {
          id: "header-sider",
          title: "Header-Sider",
          description: "Full-width header above a sider and content row.",
          Preview: LayoutHeaderSiderPreview,
          code: layoutCodes.headerSider,
        },
        {
          id: "header-sider-2",
          title: "Header Sider 2",
          description: "Sider spans the full height; header sits in the content column.",
          Preview: LayoutHeaderSider2Preview,
          code: layoutCodes.headerSider2,
        },
        {
          id: "sider",
          title: "Sider",
          description: "Left navigation column and main content only.",
          Preview: LayoutSiderOnlyPreview,
          code: layoutCodes.sider,
        },
        {
          id: "custom-trigger",
          title: "Custom trigger",
          description: "Replace the default collapse control.",
          Preview: LayoutCustomTriggerPreview,
          code: layoutCodes.customTrigger,
        },
        {
          id: "collapsible",
          title: "Collapsible",
          description: "Built-in collapse trigger on LayoutSider.",
          Preview: LayoutCollapsiblePreview,
          code: layoutCodes.collapsible,
        },
        {
          id: "fixed-header",
          title: "Fixed Header",
          description: "Sticky header while content scrolls.",
          Preview: LayoutFixedHeaderPreview,
          code: layoutCodes.fixedHeader,
          tall: true,
        },
        {
          id: "fixed-sider",
          title: "Fixed Sider",
          description: "Sticky sider while content scrolls.",
          Preview: LayoutFixedSiderPreview,
          code: layoutCodes.fixedSider,
          tall: true,
        },
      ],
    },
    {
      id: "composition",
      title: "Composition",
      description: "Combine Layout with navigation building blocks.",
      variants: [
        {
          id: "dataos-home",
          title: "DataOS home",
          description:
            "Sidebar + content with user avatar and centered page title — the standard DataOS app frame.",
          body: "Compose DataOsSidebar with LayoutContent. Hover nav items for descriptions; the avatar sits in the content corner. See DataOS Sidebar docs for pinning and collapse.",
          Preview: LayoutDataOsHomePreview,
          code: layoutCodes.dataosHome,
          tall: true,
          docLink: {
            href: "/components/dataos-sidebar",
            label: "DataOS Sidebar",
          },
        },
        {
          id: "with-sidebar",
          title: "With Sidebar",
          description: "Generic SidebarProvider + Sidebar inside a Layout shell.",
          body: "Use the sidebar primitive for menus, cookies, and mobile sheet behavior. Layout supplies header/content chrome. See /components/sidebar.",
          Preview: LayoutWithSidebarPreview,
          code: layoutCodes.withSidebar,
          tall: true,
          docLink: { href: "/components/sidebar", label: "Sidebar docs" },
        },
        {
          id: "dataos-shell",
          title: "DataOS shell with header",
          description:
            "Full-height sidebar beside header + content; expand/collapse overlays without resizing the main column.",
          body: "Sidebar is position absolute and full height. Header sits above content in a pl-14 column (collapsed rail width). Expanding the sidebar overlays header and content — it does not shrink them.",
          Preview: LayoutDataOsShellPreview,
          code: layoutCodes.dataosShell,
          tall: true,
          docLink: {
            href: "/components/application-header",
            label: "Application Header",
          },
        },
      ],
    },
  ],
  variants: [],
}
