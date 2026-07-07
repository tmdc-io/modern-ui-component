import type { ComponentApiDoc } from "@/app/component-variants/types"

export const dataosSidebarApi: ComponentApiDoc = {
  features: [
    "DataOS brand logo with full wordmark in expanded mode and mark-only in collapsed mode.",
    "Grouped navigation with dividers after Home and Workbench.",
    "Teal active state on the current item; cream background shell.",
    "Hover-to-pin (max three) with a dedicated pinned area under Home.",
    "Drag-and-drop reordering of pinned apps via native HTML5 drag events.",
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
        default: "[]",
        description: "Initial pinned ids for uncontrolled usage.",
      },
      {
        prop: "onPinnedChange",
        type: "(ids: string[]) => void",
        description: "Fires when apps are pinned, unpinned, or reordered.",
      },
    ],
    footnote:
      "Also exported: DataOsLogo, DataOsLogoMark, DataOsSidebarItem. Close panel toggles collapsed state. Set pinnable: false on an item to exclude it from the pinned area (Home is never pinnable).",
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
      enhancement: "Pin & reorder",
      benefit: "Hover-to-pin up to three apps and drag to reorder, with no extra dependencies",
    },
  ],
}
