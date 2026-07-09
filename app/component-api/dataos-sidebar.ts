import type { ComponentApiDoc } from "@/app/component-variants/types"

export const dataosSidebarApi: ComponentApiDoc = {
  features: [
    "DataOS brand logo with full wordmark in expanded mode and mark-only in collapsed mode.",
    "Grouped navigation with dividers after Home and Workbench.",
    "Teal active state on the current item; cream background shell.",
    "Hover-to-pin (max three) with Data Products pinned by default.",
    "Locked pins via pinLocked — Data Products cannot be unpinned but can be reordered.",
    "Pin tooltip when at the limit: hovering the pin icon shows only 3 allow.",
    "Drag-and-drop reordering of pinned apps via native HTML5 drag events.",
    "Collapsed rail shows icon tooltips on hover for each navigation item.",
    "Footer actions for panel toggle and documentation.",
  ],
  usage: {
    import: 'import { DataOsSidebar } from "@/components/blocks/dataos-sidebar"',
    example: `<div className="flex min-h-screen">
  <DataOsSidebar defaultActiveId="home" />
  <main className="flex-1">{children}</main>
</div>`,
  },
  apiReference: {
    title: "DataOsSidebar Props",
    props: [
      {
        prop: "activeId",
        type: "string",
        description: "Controlled active navigation item id.",
      },
      {
        prop: "defaultActiveId",
        type: "string",
        default: '"home"',
        description: "Initial active item for uncontrolled usage.",
      },
      {
        prop: "onActiveChange",
        type: "(id: string) => void",
        description: "Fires when a navigation item is selected.",
      },
      {
        prop: "collapsed",
        type: "boolean",
        description: "Controlled collapsed rail state.",
      },
      {
        prop: "defaultCollapsed",
        type: "boolean",
        default: "false",
        description: "Initial collapsed state for uncontrolled usage.",
      },
      {
        prop: "onCollapsedChange",
        type: "(collapsed: boolean) => void",
        description: "Fires when collapse state changes (e.g. Close panel).",
      },
      {
        prop: "items",
        type: "DataOsSidebarItem[]",
        description: "Main navigation items. Defaults to the DataOS shell set.",
      },
      {
        prop: "footerItems",
        type: "DataOsSidebarItem[]",
        description: "Footer navigation items. Defaults to Close panel and Documentation.",
      },
      {
        prop: "enablePinning",
        type: "boolean",
        default: "true",
        description: "Enable the pinned area with hover-to-pin and drag-to-reorder.",
      },
      {
        prop: "maxPinned",
        type: "number",
        default: "3",
        description: "Maximum apps allowed in the pinned area.",
      },
      {
        prop: "pinnedIds",
        type: "string[]",
        description: "Controlled list of pinned item ids, in display order.",
      },
      {
        prop: "defaultPinnedIds",
        type: "string[]",
        default: '["data-products"]',
        description: "Initial pinned ids for uncontrolled usage. Data Products is pinned by default.",
      },
      {
        prop: "onPinnedChange",
        type: "(ids: string[]) => void",
        description: "Fires when apps are pinned, unpinned, or reordered.",
      },
    ],
    footnote:
      "Also exported: DataOsLogo, DataOsLogoMark, DataOsSidebarItem. Close panel toggles collapsed state. Set pinnable: false to exclude an item from pinning. Set pinLocked: true to keep an item always pinned (Data Products by default). Locked items can still be drag-reordered.",
  },
  enhancements: [
    {
      enhancement: "Expanded / collapsed",
      benefit: "Animated width between labeled sidebar and icon rail",
    },
    {
      enhancement: "Brand logo",
      benefit: "Full wordmark or geometric mark from app/assets/brand-logo.svg",
    },
    {
      enhancement: "Custom items",
      benefit: "Override items and footerItems for app-specific navigation",
    },
    {
      enhancement: "Collapsed tooltips",
      benefit: "Icon rail shows item labels on hover via the tooltip primitive",
    },
    {
      enhancement: "Pin & reorder",
      benefit: "Data Products pinned by default; pin two more, drag to reorder, tooltip at limit",
    },
  ],
}
