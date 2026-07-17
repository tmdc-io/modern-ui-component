import {
  PlanCardAccordionPreview,
  PlanCardDensityPreview,
  PlanCardErrorPreview,
  PlanCardExpandedPreview,
  PlanCardHoverPreview,
  PlanCardMetricActionsPreview,
  PlanCardRunPairingPreview,
  PlanCardSelectablePreview,
  PlanCardSelectedPreview,
  PlanCardSkeletonPreview,
  PlanCardStackPreview,
  PlanCardStatusesPreview,
  PlanCardSuccessPreview,
} from "@/app/component-examples/plan-card-usage"
import { planCardCodes } from "@/app/component-examples/plan-card-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const planCardPage: ComponentVariantPage = {
  name: "plan-card",
  title: "Plan Card",
  description:
    "Plan summary card with success, hover, error, and expandable change/impact details.",
  install: planCardCodes.install,
  intro:
    "A compact card for browsing plan versions. It supports semantic statuses, relative time, clickable metrics, controlled expansion, density, and an expandable panel for detailed deltas.",
  sections: [
    {
      id: "states",
      title: "States",
      description: "Success, hover, error, and expanded detail views.",
      variants: [
        {
          id: "success",
          title: "Success",
          description: "Successful plan card with changes and impacts.",
          Preview: PlanCardSuccessPreview,
          code: planCardCodes.success,
        },
        {
          id: "hover",
          title: "Hover",
          description:
            "One card with cream hover (cream-bg-3). Move the pointer over the card to preview.",
          Preview: PlanCardHoverPreview,
          code: planCardCodes.hover,
        },
        {
          id: "selected",
          title: "Active / selected",
          description:
            "Selected plan card with a teal surface and dark teal border.",
          Preview: PlanCardSelectedPreview,
          code: planCardCodes.selected,
        },
        {
          id: "error",
          title: "Error",
          description: "Failed plan card with error, changes, and impacts.",
          Preview: PlanCardErrorPreview,
          code: planCardCodes.error,
        },
        {
          id: "expanded",
          title: "Expanded",
          description:
            "Expanded panel with detail metrics, status rows, and Open plan details link.",
          Preview: PlanCardExpandedPreview,
          code: planCardCodes.expanded,
          tall: true,
        },
        {
          id: "statuses",
          title: "More statuses",
          description:
            "Draft, running, warning, and cancelled plans with relative time where applicable.",
          Preview: PlanCardStatusesPreview,
          code: planCardCodes.statuses,
          tall: true,
        },
      ],
    },
    {
      id: "interaction",
      title: "Interaction",
      description:
        "Accordion expansion, clickable metrics, compact density, and empty details.",
      variants: [
        {
          id: "accordion",
          title: "Accordion plan list",
          description:
            "Control expanded and onExpandedChange so only one plan remains open.",
          Preview: PlanCardAccordionPreview,
          code: planCardCodes.accordion,
          tall: true,
        },
        {
          id: "metric-actions",
          title: "Clickable metrics",
          description:
            "Use href or onClick on Changes, Impacts, and Error summary metrics.",
          Preview: PlanCardMetricActionsPreview,
          code: planCardCodes.metricActions,
        },
        {
          id: "density",
          title: "Density and empty state",
          description:
            'Use size="sm" for compact histories; empty details show a localized message.',
          Preview: PlanCardDensityPreview,
          code: planCardCodes.density,
          tall: true,
        },
      ],
    },
    {
      id: "patterns",
      title: "Usage patterns",
      description: "Lists, selection, and loading placeholders.",
      variants: [
        {
          id: "stack",
          title: "Plan list",
          description: "Stack success, hover, and error cards.",
          Preview: PlanCardStackPreview,
          code: planCardCodes.stack,
          docLink: { href: "#api-reference", label: "Props reference" },
          tall: true,
        },
        {
          id: "selectable",
          title: "Controlled selection",
          description:
            "Use selected with onSelect for a plan list; cards expose aria-pressed when selectable.",
          Preview: PlanCardSelectablePreview,
          code: planCardCodes.selectable,
          tall: true,
        },
        {
          id: "skeleton",
          title: "Loading",
          description: "PlanCardSkeleton placeholders while plan data loads.",
          Preview: PlanCardSkeletonPreview,
          code: planCardCodes.skeleton,
        },
        {
          id: "run-pairing",
          title: "Related runs",
          description:
            "Select a plan and show its related Run Cards beside the plan list.",
          Preview: PlanCardRunPairingPreview,
          code: planCardCodes.runPairing,
          tall: true,
        },
      ],
    },
  ],
  variants: [
    {
      id: "success",
      title: "Success",
      description: "Successful plan card.",
      Preview: PlanCardSuccessPreview,
      code: planCardCodes.success,
    },
    {
      id: "hover",
      title: "Hover",
      description: "Cream hover surface on one card.",
      Preview: PlanCardHoverPreview,
      code: planCardCodes.hover,
    },
    {
      id: "selected",
      title: "Active / selected",
      description: "Selected plan card with persistent teal styling.",
      Preview: PlanCardSelectedPreview,
      code: planCardCodes.selected,
    },
    {
      id: "error",
      title: "Error",
      description: "Failed plan card.",
      Preview: PlanCardErrorPreview,
      code: planCardCodes.error,
    },
  ],
}
