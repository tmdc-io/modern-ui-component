import {
  ApplicationHeaderInteractivePreview,
  ApplicationHeaderL1Preview,
  ApplicationHeaderL2Preview,
  ApplicationHeaderTenantStatesPreview,
} from "@/app/component-examples/application-header-usage"
import { applicationHeaderCodes } from "@/app/component-examples/application-header-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const applicationHeaderPage: ComponentVariantPage = {
  name: "application-header",
  title: "Application Header",
  description:
    "Top application panel with tenant switcher, optional breadcrumbs, and user avatar for DataOS shells.",
  install: applicationHeaderCodes.install,
  intro:
    "A composed header for DataOS application shells — Level 1 shows the tenant label with a dropdown, Level 2 collapses the tenant trigger to a badge and adds breadcrumb navigation.",
  sections: [
    {
      id: "preview",
      variants: [
        {
          id: "l1",
          title: "Level 1 — Tenant switch",
          description:
            "Top panel with expanded tenant switcher and user avatar.",
          body: "Use variant=\"l1\" on home or top-level routes. The tenant trigger shows the colored badge, tenant name, and chevron. Click to open the tenant list with a checkmark on the active item.",
          Preview: ApplicationHeaderL1Preview,
          code: applicationHeaderCodes.l1,
        },
      ],
    },
    {
      id: "l2",
      title: "Level 2 — Breadcrumbs",
      description:
        "Badge-only tenant trigger with breadcrumb trail and user avatar.",
      body: "Use variant=\"l2\" on nested pages. The tenant switcher collapses to the initials badge; breadcrumbs fill the center area. Long labels truncate with ellipsis.",
      variants: [
        {
          id: "l2",
          title: "With breadcrumbs",
          description: "Tenant badge + breadcrumb navigation.",
          Preview: ApplicationHeaderL2Preview,
          code: applicationHeaderCodes.l2,
          docLink: { href: "#api-reference", label: "Props reference" },
        },
      ],
    },
    {
      id: "tenant-states",
      title: "Tenant states",
      description: "Colored tenant badges across sandbox environments.",
      body: "Each tenant uses a two-letter badge with a pastel background from the design palette. Override tenants and className per tenant for custom environments.",
      variants: [
        {
          id: "tenant-states",
          title: "Tenant palette",
          description: "L1 and L2 examples with alternate tenant colors.",
          Preview: ApplicationHeaderTenantStatesPreview,
          code: applicationHeaderCodes.props,
          docLink: { href: "#api-reference", label: "Props reference" },
        },
      ],
    },
    {
      id: "patterns",
      title: "Usage patterns",
      description: "Controlled tenant selection.",
      variants: [
        {
          id: "controlled",
          title: "Controlled tenant",
          description: "Wire tenantId and onTenantChange from your app shell.",
          Preview: ApplicationHeaderInteractivePreview,
          code: applicationHeaderCodes.controlled,
          docLink: { href: "#api-reference", label: "Props reference" },
        },
      ],
    },
  ],
  variants: [
    {
      id: "l1",
      title: "Level 1",
      description: "Expanded tenant switcher.",
      Preview: ApplicationHeaderL1Preview,
      code: applicationHeaderCodes.l1,
    },
    {
      id: "l2",
      title: "Level 2",
      description: "Badge tenant trigger with breadcrumbs.",
      Preview: ApplicationHeaderL2Preview,
      code: applicationHeaderCodes.l2,
    },
    {
      id: "tenant-states",
      title: "Tenant states",
      description: "Colored tenant badge palette.",
      Preview: ApplicationHeaderTenantStatesPreview,
      code: applicationHeaderCodes.props,
    },
    {
      id: "controlled",
      title: "Controlled",
      description: "Tenant driven by parent state.",
      Preview: ApplicationHeaderInteractivePreview,
      code: applicationHeaderCodes.controlled,
    },
  ],
}
