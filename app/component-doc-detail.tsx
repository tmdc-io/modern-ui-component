"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import {
  ApiReferenceTable,
  CssVariantsReference,
  EnhancementsTable,
} from "@/app/component-api-reference"
import {
  ComponentCodeDrawer,
  ViewCodeButton,
} from "@/app/component-code-drawer"
import { ComponentRegistryLayout } from "@/app/component-registry-layout"
import { markRegistryScrollTarget } from "@/app/component-registry-sidebar"
import { getVariantPage } from "@/app/component-variants"
import type {
  ComponentVariant,
  ComponentVariantPage,
  ComponentVariantSection,
  DocLink,
} from "@/app/component-variants/types"
import { catalogItemTitle } from "@/app/catalog-item-titles"
import { docsCopy } from "@/app/docs-copy-es"
import { docsMessages } from "@/app/docs-messages"
import { InstallCommand } from "@/app/install-command"
import { LinkifyText } from "@/app/linkify-text"
import { VariantPreviewCanvas } from "@/app/variant-preview-canvas"
import { PreviewViewportFrame } from "@/app/preview-viewport-frame"
import { useTranslation } from "@/hooks/use-translation"
import { Button } from "@/registry/default/ui/button"

type VariantCodeTarget = {
  title: string
  description: string
  install?: string
  code: string
}

function isSidebarPage(componentName: string) {
  return componentName === "sidebar"
}

function isAuthBlockPage(componentName: string) {
  return componentName === "login" || componentName === "signup"
}

function isCalendarPage(componentName: string) {
  return componentName === "calendar"
}

function isChartPage(componentName: string) {
  return componentName === "chart"
}

function isChartInteractiveVariant(variantId: string) {
  return variantId.includes("-interactive")
}

function isBlockLayoutVariant(variantId: string) {
  return /^\d{2}$/.test(variantId)
}

const POPOVER_PREVIEW_PAGES = new Set([
  "navigation-menu",
  "menubar",
  "dropdown-menu",
  "popover",
  "hover-card",
  "context-menu",
])

function isPopoverPreviewPage(componentName: string) {
  return POPOVER_PREVIEW_PAGES.has(componentName)
}

const DATAOS_RESPONSIVE_PAGES = new Set([
  "quality-summary-card",
  "data-product-table",
  "data-product-card",
  "hero",
  "dataos-sidebar",
  "assets-tree",
  "application-header",
  "plan-card",
  "plan-status-card",
  "run-card",
  "models-table",
  "model-health-runs",
  "run-duration",
  "run-metrics",
])

function getPreviewOptions(page: ComponentVariantPage, variant: ComponentVariant) {
  const layoutPage = page.name === "layout"
  return {
    fitContent: variant.fitContent,
    tall:
      variant.tall ||
      (isSidebarPage(page.name) && !isBlockLayoutVariant(variant.id)) ||
      (isChartPage(page.name) && isChartInteractiveVariant(variant.id)),
    blockLayout:
      (isSidebarPage(page.name) ||
        isAuthBlockPage(page.name) ||
        isCalendarPage(page.name)) &&
      isBlockLayoutVariant(variant.id),
    containSidebar:
      isSidebarPage(page.name) && !isBlockLayoutVariant(variant.id),
    popoverPreview: isPopoverPreviewPage(page.name),
    /** Layout demos fill the card edge-to-edge (Ant Design style). */
    flushPreview: layoutPage,
    responsivePreview:
      variant.responsivePreview ??
      (DATAOS_RESPONSIVE_PAGES.has(page.name) && !variant.codeOnly),
  }
}

function isExternalDocLink(href: string) {
  return href.startsWith("http://") || href.startsWith("https://")
}

function DocLinks({ links }: { links: DocLink[] }) {
  const { t } = useTranslation(docsMessages)
  if (links.length === 0) return null

  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.map((link) => {
        const label =
          link.label === "Props reference"
            ? t["detail.propsReference"]
            : link.label
        return isExternalDocLink(link.href) ? (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#007e7f] dark:text-primary inline-flex items-center gap-1 text-sm font-medium hover:text-[#006d6e] dark:hover:text-primary/80"
          >
            {label}
            <ArrowRightIcon className="size-3.5" />
          </a>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            className="text-[#007e7f] dark:text-primary inline-flex items-center gap-1 text-sm font-medium hover:text-[#006d6e] dark:hover:text-primary/80"
          >
            {label}
            <ArrowRightIcon className="size-3.5" />
          </Link>
        )
      })}
    </div>
  )
}

function getVariantDocLinks(variant: ComponentVariant): DocLink[] {
  return [...(variant.docLinks ?? []), ...(variant.docLink ? [variant.docLink] : [])]
}

function DocPageHeader({ page }: { page: ComponentVariantPage }) {
  const { t, language } = useTranslation(docsMessages)
  const title = catalogItemTitle(page.name, page.title, language)

  return (
    <div className="flex flex-col gap-4">
      <Button variant="ghost" size="sm" className="w-fit px-0" asChild>
        <Link
          href={`/#${page.name}`}
          onClick={() => markRegistryScrollTarget(page.name)}
        >
          <ArrowLeftIcon className="size-4" />
          {t["detail.backToRegistry"]}
        </Link>
      </Button>
      <div className="flex w-full max-w-3xl flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground leading-relaxed">
          <LinkifyText>
            {docsCopy(page.description, language) ?? page.description}
          </LinkifyText>
        </p>
        {page.intro ? (
          <p className="text-muted-foreground text-sm leading-relaxed">
            <LinkifyText>
              {docsCopy(page.intro, language) ?? page.intro}
            </LinkifyText>
          </p>
        ) : null}
        {page.features?.length ? (
          <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm leading-relaxed">
            {page.features.map((feature) => (
              <li key={feature}>
                <LinkifyText>
                  {docsCopy(feature, language) ?? feature}
                </LinkifyText>
              </li>
            ))}
          </ul>
        ) : null}
        {page.install.trim() ? (
          <InstallCommand command={page.install} />
        ) : null}
      </div>
    </div>
  )
}

function UsageSection({ page }: { page: ComponentVariantPage }) {
  const { t } = useTranslation(docsMessages)
  if (!page.usage) return null

  return (
    <section id="usage" className="scroll-mt-24 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">
          {t["detail.usage"]}
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {t["detail.usageIntro"]}
        </p>
        <p className="text-muted-foreground text-xs leading-relaxed">
          {t["detail.codeSamplesNote"]}
        </p>
      </div>
      <pre
        tabIndex={0}
        className="bg-muted/50 overflow-x-auto rounded-lg border p-4 text-xs leading-relaxed"
      >
        <code className="font-mono">{page.usage.import}</code>
      </pre>
      <pre
        tabIndex={0}
        className="bg-muted/50 overflow-x-auto rounded-lg border p-4 text-xs leading-relaxed"
      >
        <code className="font-mono">{page.usage.example}</code>
      </pre>
    </section>
  )
}

function VariantExample({
  variant,
  page,
  hero = false,
  onViewCode,
}: {
  variant: ComponentVariant
  page: ComponentVariantPage
  hero?: boolean
  onViewCode: (target: VariantCodeTarget) => void
}) {
  const { language } = useTranslation(docsMessages)
  const showHeading = !hero && variant.title
  const previewOptions = getPreviewOptions(page, variant)
  const variantTitle = docsCopy(variant.title, language) ?? variant.title
  const variantDescription =
    docsCopy(variant.description, language) ?? variant.description
  const variantBody = docsCopy(variant.body, language)

  return (
    <article
      id={variant.id}
      className="scroll-mt-24 flex flex-col gap-4 rounded-lg border bg-card p-4"
    >
      {showHeading || variant.code ? (
        <div className="flex items-start justify-between gap-4">
          {showHeading ? (
            <div className="flex min-w-0 flex-col gap-1">
              <h3 className="text-lg font-semibold">{variantTitle}</h3>
              {variantDescription ? (
                <p className="text-muted-foreground text-sm">
                  <LinkifyText>{variantDescription}</LinkifyText>
                </p>
              ) : null}
              {variantBody ? (
                <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed">
                  <LinkifyText>{variantBody}</LinkifyText>
                </p>
              ) : null}
            </div>
          ) : (
            <div />
          )}
          <div className="flex shrink-0 items-center gap-3">
            <DocLinks links={getVariantDocLinks(variant)} />
            {variant.code ? (
              <ViewCodeButton
                onClick={() =>
                  onViewCode({
                    title: `${page.title} — ${variantTitle}`,
                    description: variantDescription,
                    install: page.install,
                    code: variant.code,
                  })
                }
              />
            ) : null}
          </div>
        </div>
      ) : null}
      {variant.Preview && !variant.codeOnly ? (
        previewOptions.responsivePreview ? (
          <PreviewViewportFrame>
            <VariantPreviewCanvas
              Preview={variant.Preview}
              tall={hero || previewOptions.tall}
              fitContent={previewOptions.fitContent}
              blockLayout={previewOptions.blockLayout}
              containSidebar={previewOptions.containSidebar}
              popoverPreview={previewOptions.popoverPreview}
              flushPreview={previewOptions.flushPreview}
            />
          </PreviewViewportFrame>
        ) : (
          <VariantPreviewCanvas
            Preview={variant.Preview}
            tall={hero || previewOptions.tall}
            fitContent={previewOptions.fitContent}
            blockLayout={previewOptions.blockLayout}
            containSidebar={previewOptions.containSidebar}
            popoverPreview={previewOptions.popoverPreview}
            flushPreview={previewOptions.flushPreview}
          />
        )
      ) : variant.code && variant.codeOnly ? (
        <pre
          tabIndex={0}
          className="bg-muted/50 overflow-x-auto rounded-lg border p-4 text-xs leading-relaxed"
        >
          <code className="font-mono">{variant.code}</code>
        </pre>
      ) : null}
    </article>
  )
}

function VariantSectionBlock({
  section,
  page,
  onViewCode,
}: {
  section: ComponentVariantSection
  page: ComponentVariantPage
  onViewCode: (target: VariantCodeTarget) => void
}) {
  const { language } = useTranslation(docsMessages)
  const isHero = section.id === "hero"
  const sectionTitle = docsCopy(section.title, language)
  const sectionDescription = docsCopy(section.description, language)
  const sectionBody = docsCopy(section.body, language)

  return (
    <section id={section.id} className="scroll-mt-24 flex flex-col gap-6">
      {sectionTitle ? (
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold tracking-tight">
            {sectionTitle}
          </h2>
          {sectionDescription ? (
            <p className="text-muted-foreground text-sm leading-relaxed">
              <LinkifyText>{sectionDescription}</LinkifyText>
            </p>
          ) : null}
          {sectionBody ? (
            <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed">
              <LinkifyText>{sectionBody}</LinkifyText>
            </p>
          ) : null}
          {section.docLink ? (
            <DocLinks links={[section.docLink]} />
          ) : null}
        </div>
      ) : null}
      <div className="flex flex-col gap-6">
        {section.variants.map((variant) => (
          <VariantExample
            key={variant.id}
            variant={variant}
            page={page}
            hero={isHero}
            onViewCode={onViewCode}
          />
        ))}
      </div>
    </section>
  )
}

function ExamplesSection({
  page,
  onViewCode,
}: {
  page: ComponentVariantPage
  onViewCode: (target: VariantCodeTarget) => void
}) {
  const { t, language } = useTranslation(docsMessages)
  const sections = page.sections
  const hasSections = sections && sections.length > 0
  const title = catalogItemTitle(page.name, page.title, language)

  if (!hasSections && page.variants.length === 0) {
    return null
  }

  return (
    <section id="examples" className="scroll-mt-24 flex flex-col gap-6">
      {!hasSections ? (
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold tracking-tight">
            {t["detail.variants"]}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t["detail.examples"].replace("{title}", title)}
          </p>
        </div>
      ) : null}
      {hasSections
        ? sections.map((section) => (
            <VariantSectionBlock
              key={section.id}
              section={section}
              page={page}
              onViewCode={onViewCode}
            />
          ))
        : page.variants.map((variant) => (
            <VariantExample
              key={variant.id}
              variant={variant}
              page={page}
              onViewCode={onViewCode}
            />
          ))}
    </section>
  )
}

function ApiReferenceSection({ page }: { page: ComponentVariantPage }) {
  const { t } = useTranslation(docsMessages)
  const hasApi =
    page.apiReference ||
    page.cssVariants?.length ||
    page.enhancements?.length

  if (!hasApi) return null

  return (
    <section id="api-reference" className="scroll-mt-24 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">
          {t["detail.apiReference"]}
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {t["detail.apiIntro"]}
        </p>
      </div>
      {page.apiReference ? (
        <ApiReferenceTable apiReference={page.apiReference} />
      ) : null}
      {page.cssVariants?.length ? (
        <CssVariantsReference groups={page.cssVariants} />
      ) : null}
      {page.enhancements?.length ? (
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold tracking-tight">
            {t["detail.enhancements"]}
          </h3>
          <EnhancementsTable rows={page.enhancements} />
        </div>
      ) : null}
    </section>
  )
}

export function ComponentDocDetail({ name }: { name: string }) {
  const page = getVariantPage(name)

  const [codeTarget, setCodeTarget] = React.useState<VariantCodeTarget | null>(
    null
  )
  const [codeOpen, setCodeOpen] = React.useState(false)

  const handleViewCode = React.useCallback((target: VariantCodeTarget) => {
    setCodeTarget(target)
    setCodeOpen(true)
  }, [])

  if (!page) {
    return null
  }

  return (
    <ComponentRegistryLayout activeName={page.name} variantDetail>
      <main className="flex w-full flex-col gap-12 pb-16">
        <DocPageHeader page={page} />
        <UsageSection page={page} />
        <ExamplesSection page={page} onViewCode={handleViewCode} />
        <ApiReferenceSection page={page} />
      </main>

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
