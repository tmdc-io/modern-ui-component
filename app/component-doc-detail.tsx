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
import { InstallCommand } from "@/app/install-command"
import { LinkifyText } from "@/app/linkify-text"
import { VariantPreviewCanvas } from "@/app/variant-preview-canvas"
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

function getPreviewOptions(page: ComponentVariantPage, variant: ComponentVariant) {
  return {
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
  }
}

function isExternalDocLink(href: string) {
  return href.startsWith("http://") || href.startsWith("https://")
}

function DocLinks({ links }: { links: DocLink[] }) {
  if (links.length === 0) return null

  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.map((link) =>
        isExternalDocLink(link.href) ? (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary inline-flex items-center gap-1 text-sm font-medium hover:text-primary/80"
          >
            {link.label}
            <ArrowRightIcon className="size-3.5" />
          </a>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            className="text-primary inline-flex items-center gap-1 text-sm font-medium hover:text-primary/80"
          >
            {link.label}
            <ArrowRightIcon className="size-3.5" />
          </Link>
        )
      )}
    </div>
  )
}

function getVariantDocLinks(variant: ComponentVariant): DocLink[] {
  return [...(variant.docLinks ?? []), ...(variant.docLink ? [variant.docLink] : [])]
}

function DocPageHeader({ page }: { page: ComponentVariantPage }) {
  return (
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
          <LinkifyText>{page.description}</LinkifyText>
        </p>
        {page.intro ? (
          <p className="text-muted-foreground text-sm leading-relaxed">
            <LinkifyText>{page.intro}</LinkifyText>
          </p>
        ) : null}
        {page.features?.length ? (
          <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm leading-relaxed">
            {page.features.map((feature) => (
              <li key={feature}>
                <LinkifyText>{feature}</LinkifyText>
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
  if (!page.usage) return null

  return (
    <section id="usage" className="scroll-mt-24 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Import the component and use it in your project.
        </p>
      </div>
      <pre className="bg-muted/50 overflow-x-auto rounded-lg border p-4 text-xs leading-relaxed">
        <code className="font-mono">{page.usage.import}</code>
      </pre>
      <pre className="bg-muted/50 overflow-x-auto rounded-lg border p-4 text-xs leading-relaxed">
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
  const showHeading = !hero && variant.title
  const previewOptions = getPreviewOptions(page, variant)

  return (
    <article
      id={variant.id}
      className="scroll-mt-24 flex flex-col gap-4 rounded-lg border bg-card p-4"
    >
      {showHeading || variant.code ? (
        <div className="flex items-start justify-between gap-4">
          {showHeading ? (
            <div className="flex min-w-0 flex-col gap-1">
              <h3 className="text-lg font-semibold">{variant.title}</h3>
              {variant.description ? (
                <p className="text-muted-foreground text-sm">
                  <LinkifyText>{variant.description}</LinkifyText>
                </p>
              ) : null}
              {variant.body ? (
                <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed">
                  <LinkifyText>{variant.body}</LinkifyText>
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
                    title: `${page.title} — ${variant.title}`,
                    description: variant.description,
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
        <VariantPreviewCanvas
          Preview={variant.Preview}
          tall={hero || previewOptions.tall}
          blockLayout={previewOptions.blockLayout}
          containSidebar={previewOptions.containSidebar}
          popoverPreview={previewOptions.popoverPreview}
        />
      ) : variant.code && variant.codeOnly ? (
        <pre className="bg-muted/50 overflow-x-auto rounded-lg border p-4 text-xs leading-relaxed">
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
  const isHero = section.id === "hero"

  return (
    <section id={section.id} className="scroll-mt-24 flex flex-col gap-6">
      {section.title ? (
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold tracking-tight">
            {section.title}
          </h2>
          {section.description ? (
            <p className="text-muted-foreground text-sm leading-relaxed">
              <LinkifyText>{section.description}</LinkifyText>
            </p>
          ) : null}
          {section.body ? (
            <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed">
              <LinkifyText>{section.body}</LinkifyText>
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
  const sections = page.sections
  const hasSections = sections && sections.length > 0

  if (!hasSections && page.variants.length === 0) {
    return null
  }

  return (
    <section id="examples" className="scroll-mt-24 flex flex-col gap-6">
      {!hasSections ? (
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold tracking-tight">Examples</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Common patterns and variants for {page.title}.
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
  const hasApi =
    page.apiReference ||
    page.cssVariants?.length ||
    page.enhancements?.length

  if (!hasApi) return null

  return (
    <section id="api-reference" className="scroll-mt-24 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">API Reference</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Props, variants, and configuration options.
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
            Built-in enhancements
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
      <DocPageHeader page={page} />

      <div className="flex w-full flex-col gap-12 pb-16">
        <UsageSection page={page} />
        <ExamplesSection page={page} onViewCode={handleViewCode} />
        <ApiReferenceSection page={page} />
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
