/**
 * Shared sample data for docs previews (and shapes mirrored in *-codes.ts drawers).
 */
export const demoSuccessPlan = {
  planId: "#7",
  version: "v0.1.3",
  timestamp: "July 1, 08:15 AM",
  duration: "4.1s",
  status: "success" as const,
  metrics: [
    { label: "Changes", value: "3" },
    { label: "Impacts", value: "7" },
  ],
}

export const demoHoverPlan = {
  planId: "#10",
  version: "v0.1.3",
  timestamp: "July 1, 08:15 AM",
  duration: "4.1s",
  status: "success" as const,
  metrics: [
    { label: "Changes", value: "4" },
    { label: "Impacts", value: "7" },
  ],
}

export const demoErrorPlan = {
  planId: "#8",
  version: "v0.1.3",
  timestamp: "July 5, 05:30 AM",
  duration: "2.3s",
  status: "error" as const,
  metrics: [
    { label: "Error", value: "2", status: "error" as const },
    { label: "Changes", value: "2" },
    { label: "Impacts", value: "7" },
  ],
}

export const demoExpandedPlan = {
  planId: "#9",
  version: "v0.1.3",
  timestamp: "July 1, 08:15 AM",
  duration: "4.1s",
  status: "success" as const,
  metrics: [
    { label: "Changes", value: "6" },
    { label: "Impacts", value: "7" },
  ],
  detailMetrics: [
    { label: "Modified", value: "2" },
    { label: "Added", value: "2" },
    { label: "Removed", value: "2" },
    { label: "Impacts", value: "7" },
    { label: "Backfills", value: "3" },
  ],
  detailStatuses: [
    { label: "Environment statement", value: "changed" },
    { label: "Requirements", value: "changed" },
  ],
  detailsHref: "#plan-details",
}

/** Success + error plans used in stacks / pairing. */
export const demoPlans = [demoSuccessPlan, demoErrorPlan]

export const demoRelatedRuns = {
  "#7": [
    { runId: "#10010", status: "success" as const, duration: "4.1s" },
    { runId: "#10009", status: "error" as const, duration: "3.8s" },
  ],
  "#8": [{ runId: "#10008", status: "error" as const, duration: "2.3s" }],
} as const

export const demoSuccessRun = {
  runId: "#10010",
  plan: "Plan #01",
  timestamp: "Jul 01, 09:15 AM",
  duration: "4.1s",
  status: "success" as const,
  metrics: [
    { label: "Models", value: "7" },
    { label: "DQ", value: "12/16" },
  ],
}

export const demoHoverRun = {
  runId: "#10009",
  plan: "Plan #02",
  timestamp: "Jul 02, 12:22 PM",
  duration: "3.8s",
  status: "error" as const,
  metrics: [
    { label: "Error", value: "3", status: "error" as const },
    { label: "Models", value: "5" },
    { label: "DQ", value: "13/17" },
  ],
}

export const demoErrorRun = {
  runId: "#10005",
  plan: "Plan #06",
  timestamp: "Jul 06, 06:11 PM",
  duration: "3.6s",
  status: "error" as const,
  metrics: [
    { label: "Error", value: "2", status: "error" as const },
    { label: "Models", value: "5" },
    { label: "DQ", value: "12/16" },
  ],
}

export const demoRuns = [demoSuccessRun, demoHoverRun]
