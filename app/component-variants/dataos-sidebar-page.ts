import {
  DataOsSidebarCollapsedPreview,
  DataOsSidebarExpandedPreview,
  DataOsSidebarInteractivePreview,
  DataOsSidebarPinnedPreview,
} from "@/app/component-examples/dataos-sidebar-usage"
import { dataosSidebarCodes } from "@/app/component-examples/dataos-sidebar-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const dataosSidebarPage: ComponentVariantPage = {
  name: "dataos-sidebar",
  title: "Application Sidebar",
  description:
    "DataOS application sidebar with brand logo, grouped navigation, active teal highlight, and expanded or collapsed rail modes.",
  install: dataosSidebarCodes.install,
  intro:
    "A composed sidebar for DataOS shells — Home, Data Products, Datasets, Workbench, Resources, and More, with footer actions for panel toggle and documentation.",
  sections: [
    {
      id: "preview",
      variants: [
        {
          id: "expanded",
          title: "Expanded",
          description:
            "Full sidebar with DataOS wordmark, labeled navigation groups, and footer actions.",
          body: "Default shell navigation with dividers after Home and Workbench. Home uses the teal active state from the design.",
          Preview: DataOsSidebarExpandedPreview,
          code: dataosSidebarCodes.expanded,
          tall: true,
        },
      ],
    },
    {
      id: "collapsed",
      title: "Collapsed rail",
      description:
        "Icon-only sidebar with logo mark and centered nav icons.",
      body: "Use defaultCollapsed or toggle via the Close panel footer action. Width animates between expanded and rail modes.",
      variants: [
        {
          id: "collapsed",
          title: "Collapsed",
          description: "Compact icon rail for focused workspaces.",
          Preview: DataOsSidebarCollapsedPreview,
          code: dataosSidebarCodes.collapsed,
          docLink: { href: "#api-reference", label: "Props reference" },
          tall: true,
        },
      ],
    },
    {
      id: "pinned",
      title: "Pin & reorder",
      description:
        "Hover a nav item to reveal its pin control. Pinned apps move into a dedicated area under Home and can be dragged to reorder.",
      body: "Data Products is pinned by default and cannot be unpinned (pinLocked). Users can pin two more apps (max 3 total). Once the limit is reached, hovering another item's pin icon shows a tooltip: only 3 allow. Drag-and-drop reorders pinned rows via native HTML5 events.",
      variants: [
        {
          id: "pinned",
          title: "Pin & drag to reorder",
          description:
            "Data Products pinned by default; pin two more, drag to reorder.",
          Preview: DataOsSidebarPinnedPreview,
          code: dataosSidebarCodes.pinned,
          docLink: { href: "#api-reference", label: "Props reference" },
          tall: true,
        },
      ],
    },
    {
      id: "patterns",
      title: "Usage patterns",
      description: "Controlled active item and collapse state.",
      variants: [
        {
          id: "controlled",
          title: "Controlled state",
          description: "Wire activeId and collapsed from your app shell.",
          Preview: DataOsSidebarInteractivePreview,
          code: dataosSidebarCodes.controlled,
          docLink: { href: "#api-reference", label: "Props reference" },
          tall: true,
        },
      ],
    },
  ],
  variants: [
    {
      id: "expanded",
      title: "Expanded",
      description: "Full sidebar with labels and logo wordmark.",
      Preview: DataOsSidebarExpandedPreview,
      code: dataosSidebarCodes.expanded,
    },
    {
      id: "collapsed",
      title: "Collapsed",
      description: "Icon-only rail with logo mark.",
      Preview: DataOsSidebarCollapsedPreview,
      code: dataosSidebarCodes.collapsed,
    },
    {
      id: "pinned",
      title: "Pin & reorder",
      description: "Pin up to three apps and drag to reorder them.",
      Preview: DataOsSidebarPinnedPreview,
      code: dataosSidebarCodes.pinned,
    },
    {
      id: "controlled",
      title: "Controlled",
      description: "Active item and collapse driven by parent state.",
      Preview: DataOsSidebarInteractivePreview,
      code: dataosSidebarCodes.controlled,
    },
  ],
}
