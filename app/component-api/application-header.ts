import type { ComponentApiDoc } from "@/app/component-variants/types"

export const applicationHeaderApi: ComponentApiDoc = {
  features: [
    "Level 1 header with expanded tenant switcher (badge + label + chevron) and user avatar.",
    "Level 2 header with badge-only tenant trigger and breadcrumb navigation.",
    "Tenant dropdown with colored initials badges and checkmark on the active tenant.",
    "Pastel tenant color palette for sandbox environments (PR, CT, DE, QA, SE).",
    "Truncated breadcrumb labels for long page titles.",
    "Narrow headers collapse parent crumbs into an ellipsis dropdown.",
  ],
  usage: {
    import: 'import { ApplicationHeader } from "@/components/blocks/application-header"',
    example: `<div className="flex min-h-screen flex-col">
  <ApplicationHeader variant="l1" />
  <main className="flex-1">{children}</main>
</div>`,
  },
  apiReference: {
    title: "ApplicationHeader Props",
    props: [
      {
        prop: "variant",
        type: '"l1" | "l2"',
        default: '"l1"',
        description:
          "L1 shows expanded tenant switcher. L2 shows badge-only tenant trigger with breadcrumbs.",
      },
      {
        prop: "tenants",
        type: "ApplicationHeaderTenant[]",
        description:
          "Tenant list for the switcher dropdown. Defaults to Product-Sandbox, Ct-Sandbox, Demo, Qa, Se-Sandbox.",
      },
      {
        prop: "tenantId",
        type: "string",
        description: "Controlled active tenant id.",
      },
      {
        prop: "defaultTenantId",
        type: "string",
        default: '"pr"',
        description: "Initial tenant for uncontrolled usage.",
      },
      {
        prop: "onTenantChange",
        type: "(id: string) => void",
        description: "Fires when a tenant is selected from the dropdown.",
      },
      {
        prop: "breadcrumbs",
        type: "ApplicationHeaderBreadcrumb[]",
        description: "Breadcrumb trail for L2 variant. Last item renders as the current page.",
      },
      {
        prop: "user",
        type: "ApplicationHeaderUser",
        description: "User avatar shown on the right. Defaults to IS initials on purple.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes on the header element.",
      },
    ],
    footnote:
      "Also exported: ApplicationHeaderTenantBadge. Set className on each tenant for custom badge colors. Header height is h-14 (56px) per the design spec.",
  },
  enhancements: [
    {
      enhancement: "L1 / L2 variants",
      benefit: "Tenant-only top panel or nested page header with breadcrumbs",
    },
    {
      enhancement: "Tenant switcher",
      benefit: "Dropdown with colored badges and active checkmark",
    },
    {
      enhancement: "Custom tenants",
      benefit: "Override tenants array and badge colors for your environments",
    },
  ],
}
