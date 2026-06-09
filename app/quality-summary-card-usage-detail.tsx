"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import {
  ComponentCodeDrawer,
  ViewCodeButton,
} from "@/app/component-code-drawer"
import { qualitySummaryCardCodes } from "@/app/component-examples/quality-summary-card-codes"
import {
  QualitySummaryCardDataDrivenPreview,
  QualitySummaryCardDefaultPreview,
  QualitySummaryCardMultiplePreview,
  QualitySummaryCardSummaryPreview,
} from "@/app/component-examples/quality-summary-card-usage"
import { ComponentRegistryLayout } from "@/app/component-registry-layout"
import { markRegistryScrollTarget } from "@/app/component-registry-sidebar"
import { qualitySummaryCardPage } from "@/app/component-variants/quality-summary-card-page"
import { VariantPreviewCanvas } from "@/app/variant-preview-canvas"
import { Button } from "@/registry/default/ui/button"

type UsageSection = {
  id: string
  title: string
  description: string
  body?: string
  Preview?: React.ComponentType
  code?: string
  docLink?: {
    href: string
    label: string
  }
  tall?: boolean
}

const usageSections: UsageSection[] = [
  {
    id: "preview",
    title: "Preview",
    description: "Default card with sample quality dimensions.",
    body: "The card renders from props — no hardcoded business data in production. Demo defaults apply only when props are omitted.",
    Preview: QualitySummaryCardDefaultPreview,
    tall: true,
  },
  {
    id: "props",
    title: "Props",
    description: "TypeScript types the card accepts.",
    body: "Pass a single summary object or individual props. dimensionCount and statusLabel auto-derive when omitted. Dimensions support pass, warn, and fail. Use href for a footer link or onViewAll for client navigation.",
    code: qualitySummaryCardCodes.props,
  },
  {
    id: "summary",
    title: "Single summary prop",
    description: "Pass one API object — the card derives badge state and dimension count.",
    body: "Map your API response into a QualitySummary and pass it as summary. Override statusLabel only when you need a custom badge label.",
    Preview: QualitySummaryCardSummaryPreview,
    code: qualitySummaryCardCodes.summary,
    docLink: { href: "#props", label: "Props reference" },
    tall: true,
  },
  {
    id: "static",
    title: "1. Static data",
    description: "Simplest approach — define a data object and spread it into the card.",
    body: "Use this when quality metrics are known at build time or come from a local config file.",
    Preview: QualitySummaryCardDefaultPreview,
    code: qualitySummaryCardCodes.static,
    docLink: { href: "#props", label: "Props reference" },
  },
  {
    id: "api",
    title: "2. From an API response",
    description: "Map your API shape into card props at runtime.",
    body: "Map API fields into a QualitySummary. The card derives statusLabel (Healthy / At Risk / Failed) and dimensionCount from dimensions automatically.",
    Preview: QualitySummaryCardDataDrivenPreview,
    code: qualitySummaryCardCodes.api,
    docLink: { href: "#props", label: "Props reference" },
  },
  {
    id: "derived",
    title: "3. Derive values",
    description: "Omit dimensionCount and statusLabel — the card derives them from dimensions.",
    body: "Pass passed, total, updatedAt, and dimensions only. Badge and dimension count are computed inside the component.",
    code: qualitySummaryCardCodes.derived,
    docLink: { href: "#props", label: "Props reference" },
  },
  {
    id: "multiple",
    title: "4. Multiple cards",
    description: "Render one card per dataset on the same page.",
    body: "Map over an array of quality summaries — each card gets its own title, score, dimensions, and href.",
    Preview: QualitySummaryCardMultiplePreview,
    code: qualitySummaryCardCodes.multiple,
    docLink: { href: "#props", label: "Props reference" },
  },
]

const builtInEnhancements = [
  {
    enhancement: "Single `summary` prop",
    benefit: "One object from API instead of many individual props",
  },
  {
    enhancement: "Auto `dimensionCount`",
    benefit: "Derived from `dimensions.length` when not passed",
  },
  {
    enhancement: "Auto `statusLabel`",
    benefit: '"Healthy" / "At Risk" / "Failed" from dimension statuses',
  },
  {
    enhancement: '`status: "fail"`',
    benefit: "Third state with destructive badge and row styling",
  },
  {
    enhancement: "`href` instead of `onViewAll`",
    benefit: "Footer link without a client-side handler",
  },
]

type VariantCodeTarget = {
  title: string
  description: string
  install?: string
  code: string
}

function UsageSectionBlock({
  section,
  pageTitle,
  install,
  onViewCode,
}: {
  section: UsageSection
  pageTitle: string
  install: string
  onViewCode: (target: VariantCodeTarget) => void
}) {
  return (
    <section id={section.id} className="scroll-mt-24 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 flex-col gap-2">
          <h2 className="text-xl font-semibold tracking-tight">
            {section.title}
          </h2>
          <p className="text-muted-foreground text-sm">{section.description}</p>
          {section.body ? (
            <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed">
              {section.body}
            </p>
          ) : null}
        </div>
        {section.code ? (
          <div className="flex shrink-0 items-center gap-3">
            {section.docLink ? (
              <Link
                href={section.docLink.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80"
              >
                {section.docLink.label}
                <ArrowRightIcon className="size-3.5" />
              </Link>
            ) : null}
            <ViewCodeButton
              onClick={() =>
                onViewCode({
                  title: `${pageTitle} — ${section.title}`,
                  description: section.description,
                  install,
                  code: section.code!,
                })
              }
            />
          </div>
        ) : null}
      </div>

      {section.Preview ? (
        <VariantPreviewCanvas Preview={section.Preview} tall={section.tall} />
      ) : section.code ? (
        <pre className="bg-muted/50 overflow-x-auto rounded-lg border p-4 text-xs leading-relaxed">
          <code className="font-mono">{section.code}</code>
        </pre>
      ) : null}
    </section>
  )
}

export function QualitySummaryCardUsageDetail() {
  const page = qualitySummaryCardPage

  const [codeTarget, setCodeTarget] = React.useState<VariantCodeTarget | null>(
    null
  )
  const [codeOpen, setCodeOpen] = React.useState(false)

  const handleViewCode = React.useCallback((target: VariantCodeTarget) => {
    setCodeTarget(target)
    setCodeOpen(true)
  }, [])

  return (
    <ComponentRegistryLayout activeName={page.name} variantDetail>
      <div className="flex flex-col gap-4">
        <Button variant="ghost" size="sm" className="w-fit px-0" asChild>
          <Link
            href={`/#${page.name}`}
            onClick={() => markRegistryScrollTarget(page.name)}
          >
            <ArrowLeftIcon className="size-4" />
            Back to registry
          </Link>
        </Button>
        <div className="flex w-full max-w-3xl flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight">{page.title}</h1>
          <p className="text-muted-foreground leading-relaxed">
            {page.description}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The Quality Summary Card is data-driven — it renders from props
            instead of hardcoded UI. Pass quality metrics and dimension status
            from your API. Uses DataOS theme tokens with light and dark mode
            support.
          </p>
          <code className="text-muted-foreground break-all text-xs">
            {page.install}
          </code>
        </div>
      </div>

      <div className="flex w-full flex-col gap-12 pb-16">
        {usageSections.map((section) => (
          <UsageSectionBlock
            key={section.id}
            section={section}
            pageTitle={page.title}
            install={page.install}
            onViewCode={handleViewCode}
          />
        ))}

        <section id="enhancements" className="scroll-mt-24 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold tracking-tight">
                Built-in enhancements
              </h2>
              <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed">
                These behaviors are built into the component — no parent-side
                derivation required unless you want to override.
              </p>
            </div>
            <ViewCodeButton
              onClick={() =>
                handleViewCode({
                  title: `${page.title} — Built-in enhancements`,
                  description:
                    "summary prop, auto-derived fields, fail state, and href footer.",
                  install: page.install,
                  code: qualitySummaryCardCodes.enhancements,
                })
              }
            />
          </div>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium">
                    Enhancement
                  </th>
                  <th className="px-4 py-3 text-left font-medium">Benefit</th>
                </tr>
              </thead>
              <tbody>
                {builtInEnhancements.map((row) => (
                  <tr key={row.enhancement} className="border-b last:border-0">
                    <td className="text-muted-foreground px-4 py-3 font-mono text-xs">
                      {row.enhancement}
                    </td>
                    <td className="px-4 py-3">{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <VariantPreviewCanvas
            Preview={QualitySummaryCardSummaryPreview}
            tall
          />
        </section>

        <section className="rounded-lg border bg-muted/30 p-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            <strong className="text-foreground">Summary:</strong> Pass a{" "}
            <code className="text-xs">summary</code> object from your API, or
            individual props. The card auto-derives{" "}
            <code className="text-xs">dimensionCount</code> and{" "}
            <code className="text-xs">statusLabel</code>, supports{" "}
            <code className="text-xs">fail</code> dimensions, and accepts{" "}
            <code className="text-xs">href</code> for the footer link.
          </p>
        </section>
      </div>

      <ComponentCodeDrawer
        variant={codeTarget}
        open={codeOpen}
        onOpenChange={(open) => {
          setCodeOpen(open)
          if (!open) setCodeTarget(null)
        }}
      />
    </ComponentRegistryLayout>
  )
}
