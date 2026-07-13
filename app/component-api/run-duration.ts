import type { ComponentApiDoc } from "@/app/component-variants/types"

export const runDurationApi: ComponentApiDoc = {
  intro:
    "RunDuration is a bar chart for pipeline run durations over time. Each bar shows duration on a 0–100 Y-axis with date and time on the X-axis. Bars are colored by status (normal, anomaly, selected), a dashed baseline marks the target, and clicking a bar selects that run with a column highlight.",
  features: [
    "Recharts BarChart with rounded-top bars (8px radius).",
    "Status colors: normal (teal), anomaly (pink), selected (primary).",
    "Light and dark mode via --run-duration-* theme tokens.",
    "Duration labels centered above each bar in status color.",
    "Dashed baseline reference line with legend entry.",
    "Selected run column highlight via ReferenceArea.",
    "Click-to-select with controlled or uncontrolled selectedId.",
    "Custom X-axis ticks with date and time per run.",
    "Hover tooltips with date, time, and duration value.",
    "Built-in demo data for ten runs when runs prop is omitted.",
  ],
  usage: {
    import: `import {
  RunDuration,
  type RunDurationRun,
  type RunDurationStatus,
} from "@/components/blocks/run-duration"`,
    example: `const runs: RunDurationRun[] = [
  {
    id: "r1",
    date: "Mar 15, 2027",
    time: "11:42",
    duration: 29,
    durationLabel: "29m",
    status: "normal",
  },
  {
    id: "r2",
    date: "Oct 22, 2024",
    time: "06:40",
    duration: 72,
    durationLabel: "72m",
    status: "anomaly",
  },
]

<RunDuration
  title="Run duration"
  runs={runs}
  baseline={56}
  selectedId="r1"
  onSelectedChange={(id) => console.log(id)}
/>`,
  },
  apiReference: {
    title: "RunDuration Props",
    props: [
      {
        prop: "title",
        type: "string",
        default: '"Run duration"',
        description: "Panel heading in uppercase tracking above the legend.",
      },
      {
        prop: "runs",
        type: "RunDurationRun[]",
        description:
          "Bar data with id, date, time, duration, durationLabel, and status. Defaults to ten demo runs.",
      },
      {
        prop: "baseline",
        type: "number",
        default: "56",
        description:
          "Y-axis value for the dashed horizontal reference line. Shown in legend as baseline.",
      },
      {
        prop: "selectedId",
        type: "string",
        description:
          "Controlled selected run id. Matching bar uses selected fill and column highlight.",
      },
      {
        prop: "defaultSelectedId",
        type: "string",
        default: '"r10"',
        description: "Initial selected run when selectedId is not provided.",
      },
      {
        prop: "onSelectedChange",
        type: "(id: string) => void",
        description: "Fires when a bar is clicked with the run id.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes on the outer section element.",
      },
    ],
    footnote:
      "Exported types: RunDurationStatus, RunDurationRun, RunDurationProps. duration is plotted on a fixed 0–100 domain — normalize minutes or map to your scale before passing. Clicking a bar sets its status to selected; other bars keep normal or anomaly. Requires chart and recharts.",
  },
  cssVariants: [
    {
      title: "RunDurationStatus",
      variants: [
        {
          name: '"normal"',
          description: "Expected duration. --run-duration-normal / --run-duration-normal-label.",
        },
        {
          name: '"anomaly"',
          description: "Outlier duration. --run-duration-anomaly / --run-duration-anomaly-label.",
        },
        {
          name: '"selected"',
          description:
            "Active run. --run-duration-selected with column highlight at 12% opacity.",
        },
      ],
    },
    {
      title: "RunDurationRun",
      variants: [
        {
          name: "id",
          description: "Unique run key used for X-axis category and selection.",
        },
        {
          name: "date",
          description: 'First line of X-axis tick (e.g. "Mar 15, 2027").',
        },
        {
          name: "time",
          description: 'Second line of X-axis tick (e.g. "11:42").',
        },
        {
          name: "duration",
          description: "Numeric bar height on the 0–100 Y-axis.",
        },
        {
          name: "durationLabel",
          description: 'Label above the bar (e.g. "29m"). Centered over bar width.',
        },
        {
          name: "status",
          description:
            'Bar color state. Overridden to "selected" when id matches selectedId.',
        },
      ],
    },
    {
      title: "Dependencies",
      variants: [
        {
          name: "chart",
          description: "ChartContainer, ChartTooltip, ChartTooltipContent from @/components/ui/chart.",
        },
        {
          name: "recharts",
          description:
            "BarChart, Bar, Cell, LabelList, ReferenceLine, ReferenceArea, CartesianGrid, XAxis, YAxis.",
        },
      ],
    },
  ],
  enhancements: [
    {
      enhancement: "Anomaly highlighting",
      benefit: "Pink bars surface outlier run durations against normal teal bars",
    },
    {
      enhancement: "Baseline reference",
      benefit: "Dashed line at baseline value for SLA or target comparison",
    },
    {
      enhancement: "Interactive selection",
      benefit: "Click bars to select; controlled or uncontrolled selectedId",
    },
    {
      enhancement: "Centered duration labels",
      benefit: "durationLabel rendered above each bar in status color",
    },
    {
      enhancement: "Column highlight",
      benefit: "ReferenceArea tints the selected run column behind the bar",
    },
  ],
}
