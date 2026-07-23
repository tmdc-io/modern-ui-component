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
          body: "status=\"success\" with Changes and Impacts summary metrics on the card header.",
          Preview: PlanCardSuccessPreview,
          code: planCardCodes.success,
        },
        {
          id: "hover",
          title: "Hover",
          description:
            "One card with cream hover (cream-bg-3). Move the pointer over the card to preview.",
          body: "Hover styling is built in — no extra props required beyond a standard success card.",
          Preview: PlanCardHoverPreview,
          code: planCardCodes.hover,
        },
        {
          id: "selected",
          title: "Active / selected",
          description:
            "Selected plan card with a teal surface and dark teal border.",
          body: "Use selected with onSelect for a plan list; cards expose aria-pressed when selectable.",
          Preview: PlanCardSelectedPreview,
          code: planCardCodes.selected,
        },
        {
          id: "error",
          title: "Error",
          description: "Failed plan card with error, changes, and impacts.",
          body: "status=\"error\" highlights the Error metric chip in destructive styling.",
          Preview: PlanCardErrorPreview,
          code: planCardCodes.error,
        },
        {
          id: "expanded",
          title: "Expanded",
          description:
            "Expanded panel with detail metrics, status rows, and Open plan details link.",
          body: "defaultExpanded opens detailMetrics, detailStatuses, and the detailsHref footer link.",
          Preview: PlanCardExpandedPreview,
          code: planCardCodes.expanded,
          tall: true,
        },
        {
          id: "statuses",
          title: "More statuses",
          description:
            "Draft, running, warning, and cancelled plans with relative time where applicable.",
          body: "startedAt renders relative time for running plans; draft and cancelled omit duration metrics.",
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
          body: "Wire expanded + onExpandedChange in the parent so opening one plan closes the others.",
          Preview: PlanCardAccordionPreview,
          code: planCardCodes.accordion,
          tall: true,
        },
        {
          id: "metric-actions",
          title: "Clickable metrics",
          description:
            "Use href or onClick on Changes, Impacts, and Error summary metrics.",
          body: "Metric onClick and href fire without selecting the card itself.",
          Preview: PlanCardMetricActionsPreview,
          code: planCardCodes.metricActions,
        },
        {
          id: "density",
          title: "Density and empty state",
          description:
            'Use size="sm" for compact histories; empty details show a localized message.',
          body: "size=\"sm\" tightens padding; empty detailMetrics and detailStatuses show a localized empty message.",
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
          body: "Map a plans array and render PlanCard rows in a vertical history list.",
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
          body: "Own selectedId in state and pass selected + onSelect per card for keyboard-friendly lists.",
          Preview: PlanCardSelectablePreview,
          code: planCardCodes.selectable,
          tall: true,
        },
        {
          id: "skeleton",
          title: "Loading",
          description: "PlanCardSkeleton placeholders while plan data loads.",
          body: "Swap in PlanCardSkeleton rows while the plan history API request is in flight.",
          Preview: PlanCardSkeletonPreview,
          code: planCardCodes.skeleton,
        },
        {
          id: "run-pairing",
          title: "Related runs",
          description:
            "Select a plan and show its related Run Cards beside the plan list.",
          body: "Pair PlanCard selection with a RunCard column filtered by the active plan id.",
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
