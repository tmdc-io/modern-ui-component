import {
  HeroFullPreview,
  HeroInternalDescriptionPreview,
  HeroInternalJumpPreview,
  HeroInternalPreview,
  HeroStickyPreview,
} from "@/app/component-examples/hero-usage"
import { heroCodes } from "@/app/component-examples/hero-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const heroPage: ComponentVariantPage = {
  name: "hero",
  title: "Hero",
  description:
    "DataOS data product hero header with quality card, metadata columns, jump navigation, and follow / explore actions.",
  install: heroCodes.install,
  intro:
    "One prop-driven header that scales from a full data-product overview down to a compact sticky bar. Sections render only when their data is provided.",
  sections: [
    {
      id: "preview",
      variants: [
        {
          id: "full",
          title: "Full size",
          description:
            "Complete data product header — title, subtitle, description, Source / Links / Governance metadata, Data Quality card, and jump navigation.",
          body: "Use on a data product landing page. Pass quality and metaColumns for the right-side card and metadata grid; both only render in the full variant.",
          Preview: HeroFullPreview,
          code: heroCodes.full,
          tall: true,
        },
      ],
    },
    {
      id: "sticky",
      title: "Sticky / scrolled",
      description:
        "Compact bar that appears when the page is scrolled — icon, title, and actions only.",
      body: "Render inside a sticky container and swap in the sticky variant once the full header scrolls out of view.",
      variants: [
        {
          id: "sticky",
          title: "Sticky bar",
          description: "Condensed header for scrolled state.",
          body: "Swap to variant=\"sticky\" inside a sticky top-0 container once the full hero scrolls away.",
          Preview: HeroStickyPreview,
          code: heroCodes.sticky,
          docLink: { href: "#api-reference", label: "Props reference" },
        },
      ],
    },
    {
      id: "internal",
      title: "Internal page",
      description:
        "Trimmed header for inner pages — no metadata grid or quality card.",
      body: "The internal variant hides Source / Links / Governance and the quality card. Add description and jumpItems as each page needs them.",
      variants: [
        {
          id: "internal",
          title: "1. Title & subtitle",
          description: "Icon, title, subtitle, and actions.",
          body: "Internal variant omits metaColumns, quality card, and jump navigation.",
          Preview: HeroInternalPreview,
          code: heroCodes.internal,
          docLink: { href: "#api-reference", label: "Props reference" },
        },
        {
          id: "internal-jump",
          title: "2. With jump navigation",
          description: "Adds the Jump to tab bar under the header.",
          body: "Pass jumpItems to render the Assets / Quality / Runs tab bar below the title row.",
          Preview: HeroInternalJumpPreview,
          code: heroCodes.internalJump,
          docLink: { href: "#api-reference", label: "Props reference" },
        },
        {
          id: "internal-description",
          title: "3. With description",
          description: "Adds a truncated description with a View more action.",
          body: "Combine description, descriptionExpandLabel, and jumpItems for inner product pages.",
          Preview: HeroInternalDescriptionPreview,
          code: heroCodes.internalDescription,
          docLink: { href: "#api-reference", label: "Props reference" },
        },
      ],
    },
  ],
  variants: [
    {
      id: "full",
      title: "Full size",
      description: "Complete data product header with quality card.",
      Preview: HeroFullPreview,
      code: heroCodes.full,
    },
    {
      id: "sticky",
      title: "Sticky / scrolled",
      description: "Compact scrolled-state bar.",
      Preview: HeroStickyPreview,
      code: heroCodes.sticky,
    },
    {
      id: "internal",
      title: "Internal page",
      description: "Icon, title, subtitle, and actions.",
      Preview: HeroInternalPreview,
      code: heroCodes.internal,
    },
    {
      id: "internal-jump",
      title: "Internal + jump nav",
      description: "Internal header with the Jump to tab bar.",
      Preview: HeroInternalJumpPreview,
      code: heroCodes.internalJump,
    },
    {
      id: "internal-description",
      title: "Internal + description",
      description: "Internal header with description and View more.",
      Preview: HeroInternalDescriptionPreview,
      code: heroCodes.internalDescription,
    },
  ],
}
