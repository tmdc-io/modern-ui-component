import { planStatusCardCodes } from "@/app/component-examples/plan-status-card-codes"
import {
  PlanStatusAccordionPreview,
  PlanStatusBadgesPreview,
  PlanStatusBreakingCollapsedPreview,
  PlanStatusBreakingExpandedPreview,
  PlanStatusComposePreview,
  PlanStatusDensityPreview,
  PlanStatusEmptyPreview,
  PlanStatusEnvironmentCollapsedPreview,
  PlanStatusEnvironmentExpandedPreview,
  PlanStatusFilterPreview,
  PlanStatusSelectedPreview,
  PlanStatusSkeletonPreview,
  PlanStatusUndefinedCollapsedPreview,
  PlanStatusUndefinedExpandedPreview,
  PlanStatusUrlFilterPreview,
} from "@/app/component-examples/plan-status-card-usage"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const planStatusCardPage: ComponentVariantPage = {
  name: "plan-status-card",
  title: "Plan Status Card",
  description:
    "Expandable plan feature status card for SQL diffs, impacts, errors, and environment changes.",
  install: planStatusCardCodes.install,
  intro:
    "Use Plan Status Card inside plan details to summarize model changes. It supports collapsed and expanded states, cream hover, teal selection, semantic badges, copyable SQL diffs, empty panels, density, and nested composition inside Plan Card.",
  sections: [
    {
      id: "breaking-change",
      title: "Breaking change",
      description: "Breaking and backfill status with SQL diff and impacts.",
      variants: [
        {
          id: "breaking-collapsed",
          title: "Collapsed",
          description: "Compact model row with Breaking and Backfill badges.",
          body: "Breaking and Backfill badges summarize the change type before expanding the SQL diff.",
          Preview: PlanStatusBreakingCollapsedPreview,
          code: planStatusCardCodes.breakingCollapsed,
        },
        {
          id: "selected",
          title: "Active / selected",
          description:
            "Selected status card with teal surface and dark teal border.",
          body: "selected applies the same teal pill styling used across DataOS selectable cards.",
          Preview: PlanStatusSelectedPreview,
          code: planStatusCardCodes.selected,
        },
        {
          id: "breaking-expanded",
          title: "Expanded",
          description:
            "Expanded SQL diff with file path, line numbers, copy/download, and impacts.",
          body: "Nest PlanStatusDiff and PlanStatusImpacts in the children slot when defaultExpanded is set.",
          Preview: PlanStatusBreakingExpandedPreview,
          code: planStatusCardCodes.breakingExpanded,
          tall: true,
        },
      ],
    },
    {
      id: "undefined-table",
      title: "Undefined table",
      description: "Error state with a red border and diagnostic stack trace.",
      variants: [
        {
          id: "undefined-collapsed",
          title: "Collapsed error",
          description: "Compact undefined-table error state.",
          body: "tone=\"error\" with an Undefined table badge signals a missing relation before expanding.",
          Preview: PlanStatusUndefinedCollapsedPreview,
          code: planStatusCardCodes.undefinedCollapsed,
        },
        {
          id: "undefined-expanded",
          title: "Expanded error",
          description: "Expanded diagnostic message with copy and download actions.",
          body: "PlanStatusError renders a copyable stack trace when the undefined-table row expands.",
          Preview: PlanStatusUndefinedExpandedPreview,
          code: planStatusCardCodes.undefinedExpanded,
        },
      ],
    },
    {
      id: "environment",
      title: "Environment changes",
      description: "Environment-level SQL changes without model badges.",
      variants: [
        {
          id: "environment-collapsed",
          title: "Collapsed environment",
          description: "Compact environment changes row.",
          body: "Title-only row for environment-level SQL changes without model badges.",
          Preview: PlanStatusEnvironmentCollapsedPreview,
          code: planStatusCardCodes.environmentCollapsed,
        },
        {
          id: "environment-expanded",
          title: "Expanded environment",
          description: "Expanded environment SQL diff.",
          body: "Environment rows expand into PlanStatusDiff without impacts or typeLabel.",
          Preview: PlanStatusEnvironmentExpandedPreview,
          code: planStatusCardCodes.environmentExpanded,
          tall: true,
        },
      ],
    },
    {
      id: "interaction",
      title: "Interaction and density",
      description: "Badge tones, empty panels, compact size, and loading.",
      variants: [
        {
          id: "badges",
          title: "More badges",
          description:
            "Non-breaking, Schema, Config, and other semantic badge tones.",
          body: "Badge tone drives chip color — success, info, warning, error, and muted variants.",
          Preview: PlanStatusBadgesPreview,
          code: planStatusCardCodes.badges,
        },
        {
          id: "empty",
          title: "Empty panels",
          description: "Localized empty states for missing diffs and impacts.",
          body: "Empty diff lines or impacts arrays render localized placeholder copy inside the panel.",
          Preview: PlanStatusEmptyPreview,
          code: planStatusCardCodes.empty,
        },
        {
          id: "density",
          title: "Density",
          description: 'Compact rows with size="sm".',
          body: "size=\"sm\" tightens row padding for dense plan detail sidebars.",
          Preview: PlanStatusDensityPreview,
          code: planStatusCardCodes.density,
        },
        {
          id: "skeleton",
          title: "Loading",
          description: "PlanStatusCardSkeleton placeholders while features load.",
          body: "Swap in PlanStatusCardSkeleton rows while plan feature data loads.",
          Preview: PlanStatusSkeletonPreview,
          code: planStatusCardCodes.skeleton,
        },
      ],
    },
    {
      id: "patterns",
      title: "Usage patterns",
      description: "Accordion lists, filters, and composition inside Plan Card.",
      variants: [
        {
          id: "accordion",
          title: "Accordion list",
          description:
            "Control expanded and selected so only one status card stays open.",
          body: "Wire expanded + onExpandedChange so opening one feature row closes the others.",
          Preview: PlanStatusAccordionPreview,
          code: planStatusCardCodes.accordion,
          tall: true,
        },
        {
          id: "filter",
          title: "Filter chips",
          description: "Filter a stack by Breaking, Errors, or Environment.",
          body: "Client-side chip filter narrows the visible status cards by change category.",
          Preview: PlanStatusFilterPreview,
          code: planStatusCardCodes.filter,
          tall: true,
        },
        {
          id: "url-filter",
          title: "URL-driven filter",
          description:
            "Mirror the selected chip into ?status= so Back/Forward restores the filter.",
          body: "Persist the active chip in ?status= so browser navigation restores the filter state.",
          Preview: PlanStatusUrlFilterPreview,
          code: planStatusCardCodes.urlFilter,
          tall: true,
        },
        {
          id: "compose",
          title: "Inside Plan Card",
          description:
            "Nest Plan Status Cards under an expanded Plan Card children slot.",
          body: "Render PlanStatusCard rows inside an expanded PlanCard for plan-level detail pages.",
          Preview: PlanStatusComposePreview,
          code: planStatusCardCodes.compose,
          tall: true,
        },
      ],
    },
  ],
  variants: [
    {
      id: "breaking-collapsed",
      title: "Breaking",
      description: "Collapsed breaking-change status.",
      Preview: PlanStatusBreakingCollapsedPreview,
      code: planStatusCardCodes.breakingCollapsed,
    },
    {
      id: "selected",
      title: "Active / selected",
      description: "Selected status card with teal styling.",
      Preview: PlanStatusSelectedPreview,
      code: planStatusCardCodes.selected,
    },
    {
      id: "undefined-collapsed",
      title: "Error",
      description: "Collapsed undefined-table error.",
      Preview: PlanStatusUndefinedCollapsedPreview,
      code: planStatusCardCodes.undefinedCollapsed,
    },
  ],
}
