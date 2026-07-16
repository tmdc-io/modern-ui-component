"use client"

import * as React from "react"
import Link from "next/link"
import {
  ArrowRightIcon,
  CheckIcon,
  CopyIcon,
  PackageIcon,
  TerminalIcon,
} from "lucide-react"

import { docsMessages } from "@/app/docs-messages"
import { GITHUB_DOCS } from "@/app/github-link"
import { InstallCommand } from "@/app/install-command"
import {
  markRegistryScrollTarget,
  QUICK_START_SECTION_ID,
} from "@/app/component-registry-sidebar"
import { useTranslation } from "@/hooks/use-translation"
import { Badge } from "@/registry/default/ui/badge"
import { Button } from "@/registry/default/ui/button"
import { cn } from "@/lib/utils"

const REGISTRY_NAMESPACE = "tmdc-io/modern-ui-component"

type QuickStartStep = {
  id: string
  titleKey: string
  descriptionKey: string
  command: string
  href?: string
  scrollTarget?: string
}

const QUICK_START_STEPS: QuickStartStep[] = [
  {
    id: "init",
    titleKey: "quickStart.stepInitTitle",
    descriptionKey: "quickStart.stepInitDesc",
    command: "npx shadcn@latest init",
  },
  {
    id: "project-setup",
    titleKey: "quickStart.stepSetupTitle",
    descriptionKey: "quickStart.stepSetupDesc",
    command: `npx shadcn@latest add ${REGISTRY_NAMESPACE}/project-setup`,
    href: "/#project-setup",
    scrollTarget: "project-setup",
  },
  {
    id: "foundation",
    titleKey: "quickStart.stepFoundationTitle",
    descriptionKey: "quickStart.stepFoundationDesc",
    command: `npx shadcn@latest add ${REGISTRY_NAMESPACE}/theme\nnpx shadcn@latest add ${REGISTRY_NAMESPACE}/utils\nnpx shadcn@latest add ${REGISTRY_NAMESPACE}/i18n`,
    href: "/#theme",
    scrollTarget: "theme",
  },
  {
    id: "first-component",
    titleKey: "quickStart.stepComponentTitle",
    descriptionKey: "quickStart.stepComponentDesc",
    command: `npx shadcn@latest add ${REGISTRY_NAMESPACE}/button`,
    href: "/#button",
    scrollTarget: "button",
  },
]

const FULL_BOOTSTRAP = QUICK_START_STEPS.map((step) => step.command).join("\n")

function CopyCommandButton({
  text,
  label,
  className,
}: {
  text: string
  label?: string
  className?: string
}) {
  const { t } = useTranslation(docsMessages)
  const resolvedLabel = label ?? t["quickStart.copy"]
  const [copied, setCopied] = React.useState(false)

  const handleCopy = React.useCallback(async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }, [text])

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className={cn("h-8 shrink-0 gap-1.5 px-2", className)}
      onClick={handleCopy}
      aria-label={copied ? t["quickStart.copied"] : resolvedLabel}
    >
      {copied ? (
        <CheckIcon className="size-3.5 text-brand" />
      ) : (
        <CopyIcon className="size-3.5" />
      )}
      <span className="text-xs">
        {copied ? t["quickStart.copied"] : resolvedLabel}
      </span>
    </Button>
  )
}

type RegistryHeroProps = {
  totalCount: number
  categoryCount: number
}

export function RegistryHero({ totalCount, categoryCount }: RegistryHeroProps) {
  const { t } = useTranslation(docsMessages)

  return (
    <header className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary" className="gap-1.5 font-normal">
          <PackageIcon className="size-3.5" />
          {totalCount} components
        </Badge>
        <Badge variant="outline" className="font-normal">
          {categoryCount} categories
        </Badge>
        <Badge variant="outline" className="font-normal">
          shadcn CLI
        </Badge>
        <Badge variant="outline" className="font-normal">
          Copy-paste source
        </Badge>
      </div>

      <div className="flex max-w-3xl flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t["quickStart.badge"]}
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed">
          {t["quickStart.intro"]}
        </p>
      </div>
    </header>
  )
}

export function RegistryQuickStart() {
  const { t } = useTranslation(docsMessages)

  return (
    <section
      id={QUICK_START_SECTION_ID}
      className="scroll-mt-24 overflow-hidden rounded-xl border bg-card"
    >
      <div className="border-b bg-muted/30 px-5 py-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <TerminalIcon className="text-brand size-4" />
              <h2 className="text-base font-semibold tracking-tight">
                {t["quickStart.title"]}
              </h2>
            </div>
            <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
              {t["quickStart.intro"]}
            </p>
          </div>
          <CopyCommandButton
            text={FULL_BOOTSTRAP}
            label={t["quickStart.copyAll"]}
            className="self-start border bg-background"
          />
        </div>
      </div>

      <ol className="grid gap-px bg-border sm:grid-cols-2">
        {QUICK_START_STEPS.map((step, stepIndex) => (
          <li
            key={step.id}
            className="bg-card flex flex-col gap-3 p-5 sm:p-6"
          >
            <div className="flex items-start gap-3">
              <span className="bg-brand/10 text-brand flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
                {stepIndex + 1}
              </span>
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-medium">{t[step.titleKey]}</h3>
                  {step.href ? (
                    <Link
                      href={step.href}
                      onClick={() => {
                        if (step.scrollTarget) {
                          markRegistryScrollTarget(step.scrollTarget)
                        }
                      }}
                      className="text-brand inline-flex items-center gap-0.5 text-xs font-medium hover:underline"
                    >
                      {t["quickStart.viewInRegistry"]}
                      <ArrowRightIcon className="size-3" />
                    </Link>
                  ) : null}
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {t[step.descriptionKey]}
                </p>
              </div>
            </div>
            <div className="flex items-start justify-between gap-2">
              <InstallCommand command={step.command} className="min-w-0 flex-1" />
              <CopyCommandButton text={step.command} />
            </div>
          </li>
        ))}
      </ol>

      <div className="border-t bg-muted/20 px-5 py-3 sm:px-6">
        <p className="text-muted-foreground text-xs leading-relaxed">
          Registry namespace{" "}
          <code className="text-foreground font-mono">
            {REGISTRY_NAMESPACE}
          </code>
          . {t["quickStart.footer"]}{" "}
          <a
            href={GITHUB_DOCS.consumer}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-medium hover:underline"
          >
            {t["quickStart.guideConsumer"]}
          </a>
          {" · "}
          <a
            href={GITHUB_DOCS.i18n}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-medium hover:underline"
          >
            {t["quickStart.guideI18n"]}
          </a>
          {" · "}
          <a
            href={GITHUB_DOCS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-medium hover:underline"
          >
            {t["quickStart.guideGithub"]}
          </a>
          {" · "}
          <a
            href={GITHUB_DOCS.hosted}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-medium hover:underline"
          >
            {t["quickStart.guideHosted"]}
          </a>
          .
        </p>
      </div>
    </section>
  )
}
