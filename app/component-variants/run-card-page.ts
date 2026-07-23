import {
  RunCardComposePreview,
  RunCardDensityPreview,
  RunCardErrorPreview,
  RunCardHoverPreview,
  RunCardMetricLinksPreview,
  RunCardOverflowPreview,
  RunCardSelectablePreview,
  RunCardSelectedPreview,
  RunCardSkeletonPreview,
  RunCardStackPreview,
  RunCardStatusesPreview,
  RunCardSuccessPreview,
} from "@/app/component-examples/run-card-usage"
import { runCardCodes } from "@/app/component-examples/run-card-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const runCardPage: ComponentVariantPage = {
  name: "run-card",
  title: "Run Card",
  description:
    "Pipeline run summary card with status variants, selection, metrics, and loading states.",
  install: runCardCodes.install,
  intro:
    "A compact card for browsing pipeline runs. It shows run id, plan, timestamp or relative time, duration, and summary metrics with semantic styling. Pair it with run-metrics or run-duration blocks for richer run views.",
  sections: [
    {
      id: "states",
      title: "States",
      description: "Success, hover, error, and extended pipeline statuses.",
      variants: [
        {
          id: "success",
          title: "Success",
          description: "Successful run card with model and DQ metrics.",
          body: "status=\"success\" with Models and DQ summary metrics on the card header.",
          Preview: RunCardSuccessPreview,
          code: runCardCodes.success,
        },
        {
          id: "hover",
          title: "Hover",
          description:
            "One card with cream hover (cream-bg-3). Move the pointer over the card to preview.",
          body: "Hover styling is built in — no extra props required beyond a standard run card.",
          Preview: RunCardHoverPreview,
          code: runCardCodes.hover,
        },
        {
          id: "selected",
          title: "Active / selected",
          description:
            "Selected run card with a teal surface and dark teal border.",
          body: "Use selected with onSelect for a run list; cards expose aria-pressed when selectable.",
          Preview: RunCardSelectedPreview,
          code: runCardCodes.selected,
        },
        {
          id: "error",
          title: "Error",
          description: "Failed run card with error, model, and DQ metrics.",
          body: "status=\"error\" highlights the Error metric chip in destructive styling.",
          Preview: RunCardErrorPreview,
          code: runCardCodes.error,
        },
        {
          id: "statuses",
          title: "More statuses",
          description:
            "Running, queued, warning, and cancelled runs with relative time where applicable.",
          body: "startedAt renders relative time for running runs; queued and cancelled omit metric chips.",
          Preview: RunCardStatusesPreview,
          code: runCardCodes.statuses,
          tall: true,
        },
      ],
    },
    {
      id: "interaction",
      title: "Interaction",
      description: "Selection, metric actions, density, and overflow.",
      variants: [
        {
          id: "selectable",
          title: "Controlled selection",
          description:
            "Use selected with onSelect for a run list; cards expose aria-pressed when selectable.",
          body: "Own selectedId in state and pass selected + onSelect per card for keyboard-friendly lists.",
          Preview: RunCardSelectablePreview,
          code: runCardCodes.selectable,
          tall: true,
        },
        {
          id: "metric-links",
          title: "Clickable metrics",
          description: "Per-metric href or onClick without selecting the card.",
          body: "Metric onClick and href fire without selecting the run card itself.",
          Preview: RunCardMetricLinksPreview,
          code: runCardCodes.metrics,
        },
        {
          id: "density",
          title: "Density",
          description: 'Compact cards with size="sm".',
          body: "size=\"sm\" tightens padding for dense run history sidebars.",
          Preview: RunCardDensityPreview,
          code: runCardCodes.density,
        },
        {
          id: "overflow",
          title: "Overflow",
          description:
            "Long plan names truncate; cap metrics with maxVisibleMetrics.",
          body: "maxVisibleMetrics hides extra chips; long plan strings truncate with ellipsis.",
          Preview: RunCardOverflowPreview,
          code: runCardCodes.overflow,
        },
      ],
    },
    {
      id: "patterns",
      title: "Usage patterns",
      description: "Lists, loading placeholders, and composition with other blocks.",
      variants: [
        {
          id: "stack",
          title: "Run list",
          description: "Stack success, error, and hover cards.",
          body: "Map a runs array and render RunCard rows in a vertical history list.",
          Preview: RunCardStackPreview,
          code: runCardCodes.stack,
          docLink: { href: "#api-reference", label: "Props reference" },
          tall: true,
        },
        {
          id: "skeleton",
          title: "Loading",
          description: "RunCardSkeleton placeholders while run data loads.",
          body: "Swap in RunCardSkeleton rows while the run history API request is in flight.",
          Preview: RunCardSkeletonPreview,
          code: runCardCodes.skeleton,
        },
        {
          id: "compose",
          title: "With run metrics",
          description:
            "Select a run from the list and show RunMetrics beside it (no full app shell).",
          body: "Pair RunCard selection with RunMetrics in a split layout for run detail pages.",
          Preview: RunCardComposePreview,
          code: runCardCodes.compose,
          tall: true,
        },
      ],
    },
  ],
  variants: [
    {
      id: "success",
      title: "Success",
      description: "Successful run card.",
      Preview: RunCardSuccessPreview,
      code: runCardCodes.success,
    },
    {
      id: "hover",
      title: "Hover",
      description: "Cream hover surface on one card.",
      Preview: RunCardHoverPreview,
      code: runCardCodes.hover,
    },
    {
      id: "selected",
      title: "Active / selected",
      description: "Selected run card with persistent teal styling.",
      Preview: RunCardSelectedPreview,
      code: runCardCodes.selected,
    },
    {
      id: "error",
      title: "Error",
      description: "Failed run card.",
      Preview: RunCardErrorPreview,
      code: runCardCodes.error,
    },
  ],
}
