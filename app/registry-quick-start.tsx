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

import {
  GITHUB_INIT,
  HOSTED_INIT,
  HOSTED_REGISTRY_BASE,
  monorepoCodes,
  REGISTRY_NAMESPACE,
} from "@/app/component-examples/monorepo-codes"
import { docsMessages } from "@/app/docs-messages"
import { GITHUB_DOCS } from "@/app/github-link"
import { InstallCommand } from "@/app/install-command"
import {
  markRegistryScrollTarget,
  MONOREPO_SECTION_ID,
  QUICK_START_SECTION_ID,
} from "@/app/component-registry-sidebar"
import { useTranslation } from "@/hooks/use-translation"
import { Badge } from "@/registry/default/ui/badge"
import { Button } from "@/registry/default/ui/button"
import { cn } from "@/lib/utils"

const HOSTED_BASE = "https://modern-ui-component.vercel.app"
const HOSTED_REGISTRY = `${HOSTED_REGISTRY_BASE}/{name}.json`

const CREATE_NEXT_APP_CMD = `npx create-next-app@latest my-app --typescript --tailwind --eslint --app --import-alias "@/*"
cd my-app`

const HOSTED_INIT_CMD = `npx shadcn@latest init ${HOSTED_INIT} -y`
const HOSTED_ADD_BUTTON_CMD = `npx shadcn@latest add @modernui/button -y`
const HOSTED_OPTIONAL_CMDS = `npx shadcn@latest add @modernui/project-setup
npx shadcn@latest add @modernui/i18n`

const FRESH_APP_BOOTSTRAP = `${CREATE_NEXT_APP_CMD}
${HOSTED_INIT_CMD}
${HOSTED_ADD_BUTTON_CMD}`

const EXISTING_APP_BOOTSTRAP = `${HOSTED_INIT_CMD}
${HOSTED_ADD_BUTTON_CMD}`

const GITHUB_FRESH_BOOTSTRAP = `${CREATE_NEXT_APP_CMD}
npx shadcn@latest init ${GITHUB_INIT} -y
npx shadcn@latest add ${REGISTRY_NAMESPACE}/button -y`

const GITHUB_EXISTING_BOOTSTRAP = `npx shadcn@latest init ${GITHUB_INIT} -y
npx shadcn@latest add ${REGISTRY_NAMESPACE}/button -y`

const REGISTER_NAMESPACE_CMD = `npx shadcn@latest registry add @modernui=${HOSTED_REGISTRY}`

const COMPONENTS_JSON_SNIPPET = `{
  "registries": {
    "@modernui": "${HOSTED_REGISTRY}"
  }
}`

const HOSTED_INSTALL_CMD = [
  "npx shadcn@latest add @modernui/theme",
  "npx shadcn@latest add @modernui/utils",
  "npx shadcn@latest add @modernui/button",
].join("\n")

const HOSTED_DIRECT_URL_CMD = `npx shadcn@latest add ${HOSTED_BASE}/r/button.json`

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

function ProcessStep({
  index,
  title,
  description,
  command,
  href,
  scrollTarget,
}: {
  index: number
  title: string
  description: string
  command: string
  href?: string
  scrollTarget?: string
}) {
  const { t } = useTranslation(docsMessages)

  return (
    <li className="flex flex-col gap-2">
      <div className="flex items-start gap-3">
        <span className="bg-brand/10 text-brand flex size-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold">
          {index}
        </span>
        <div className="min-w-0 flex-1 space-y-2">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-sm font-medium">{title}</h4>
              {href ? (
                <Link
                  href={href}
                  onClick={() => {
                    if (scrollTarget) markRegistryScrollTarget(scrollTarget)
                  }}
                  className="text-brand inline-flex items-center gap-0.5 text-xs font-medium hover:underline"
                >
                  {t["quickStart.viewInRegistry"]}
                  <ArrowRightIcon className="size-3" />
                </Link>
              ) : null}
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex items-start justify-between gap-2">
            <InstallCommand command={command} className="min-w-0 flex-1" />
            <CopyCommandButton text={command} />
          </div>
        </div>
      </div>
    </li>
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
        <Badge variant="outline" className="font-normal">
          Vercel hosted
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
        <div className="flex max-w-3xl flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <TerminalIcon className="text-brand size-4" />
            <h2 className="text-base font-semibold tracking-tight">
              {t["quickStart.title"]}
            </h2>
            <Badge variant="secondary" className="font-normal">
              {t["quickStart.badgePaths"]}
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t["quickStart.intro"]}
          </p>
        </div>
      </div>

      <div className="grid gap-px border-b bg-border lg:grid-cols-2">
        <div className="bg-card flex flex-col gap-4 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-semibold">
                  {t["quickStart.pathFreshTitle"]}
                </h3>
                <Badge variant="outline" className="font-normal">
                  {t["quickStart.pathFreshBadge"]}
                </Badge>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {t["quickStart.pathFreshDesc"]}
              </p>
            </div>
            <CopyCommandButton
              text={FRESH_APP_BOOTSTRAP}
              label={t["quickStart.copyAll"]}
              className="shrink-0 border bg-background"
            />
          </div>
          <InstallCommand command={FRESH_APP_BOOTSTRAP} />
          <ol className="flex flex-col gap-4">
            <ProcessStep
              index={1}
              title={t["quickStart.stepScaffoldTitle"]}
              description={t["quickStart.stepScaffoldDesc"]}
              command={CREATE_NEXT_APP_CMD}
            />
            <ProcessStep
              index={2}
              title={t["quickStart.stepInitTitle"]}
              description={t["quickStart.stepInitDesc"]}
              command={HOSTED_INIT_CMD}
              href="/#init"
              scrollTarget="init"
            />
            <ProcessStep
              index={3}
              title={t["quickStart.stepComponentTitle"]}
              description={t["quickStart.stepComponentDesc"]}
              command={HOSTED_ADD_BUTTON_CMD}
              href="/#button"
              scrollTarget="button"
            />
          </ol>
        </div>

        <div className="bg-card flex flex-col gap-4 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-semibold">
                  {t["quickStart.pathExistingTitle"]}
                </h3>
                <Badge variant="outline" className="font-normal">
                  {t["quickStart.pathExistingBadge"]}
                </Badge>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {t["quickStart.pathExistingDesc"]}
              </p>
            </div>
            <CopyCommandButton
              text={EXISTING_APP_BOOTSTRAP}
              label={t["quickStart.copyAll"]}
              className="shrink-0 border bg-background"
            />
          </div>
          <InstallCommand command={EXISTING_APP_BOOTSTRAP} />
          <ol className="flex flex-col gap-4">
            <ProcessStep
              index={1}
              title={t["quickStart.stepInitTitle"]}
              description={t["quickStart.stepInitDesc"]}
              command={HOSTED_INIT_CMD}
              href="/#init"
              scrollTarget="init"
            />
            <ProcessStep
              index={2}
              title={t["quickStart.stepComponentTitle"]}
              description={t["quickStart.stepComponentDesc"]}
              command={HOSTED_ADD_BUTTON_CMD}
              href="/#button"
              scrollTarget="button"
            />
            <ProcessStep
              index={3}
              title={t["quickStart.stepOptionalTitle"]}
              description={t["quickStart.stepOptionalDesc"]}
              command={HOSTED_OPTIONAL_CMDS}
              href="/#project-setup"
              scrollTarget="project-setup"
            />
          </ol>
        </div>
      </div>

      <div className="grid gap-px border-b bg-border lg:grid-cols-2">
        <div className="bg-card space-y-3 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-medium">
                {t["quickStart.githubTitle"]}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {t["quickStart.githubDesc"]}
              </p>
            </div>
            <CopyCommandButton text={GITHUB_EXISTING_BOOTSTRAP} />
          </div>
          <InstallCommand command={GITHUB_EXISTING_BOOTSTRAP} />
          <p className="text-muted-foreground text-xs leading-relaxed">
            {t["quickStart.githubFreshHint"]}
          </p>
          <InstallCommand command={GITHUB_FRESH_BOOTSTRAP} />
        </div>

        <div className="bg-card space-y-3 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-medium">
                {t["quickStart.monorepoTitle"]}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {t["quickStart.monorepoDesc"]}
              </p>
            </div>
            <Link
              href={`/#${MONOREPO_SECTION_ID}`}
              onClick={() => markRegistryScrollTarget(MONOREPO_SECTION_ID)}
              className="text-brand inline-flex shrink-0 items-center gap-0.5 text-xs font-medium hover:underline"
            >
              {t["quickStart.monorepoLink"]}
              <ArrowRightIcon className="size-3" />
            </Link>
          </div>
          <p className="text-muted-foreground text-xs font-medium">
            {t["quickStart.monorepoExistingLabel"]}
          </p>
          <InstallCommand command={monorepoCodes.existingBootstrap} />
          <p className="text-muted-foreground text-xs font-medium">
            {t["quickStart.monorepoFreshLabel"]}
          </p>
          <InstallCommand command={monorepoCodes.fullBootstrap} />
        </div>
      </div>

      <div
        id="vercel-hosted"
        className="scroll-mt-24 border-t bg-muted/10 px-5 py-5 sm:px-6"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-semibold tracking-tight">
                {t["quickStart.vercelTitle"]}
              </h3>
              <Badge variant="outline" className="font-mono text-[10px]">
                @modernui
              </Badge>
              <Badge variant="secondary" className="font-mono text-[10px]">
                {HOSTED_BASE.replace("https://", "")}
              </Badge>
            </div>
            <p className="text-muted-foreground max-w-3xl text-xs leading-relaxed">
              {t["quickStart.vercelIntro"]}
            </p>
          </div>

          <ol className="grid gap-4 lg:grid-cols-2">
            <li className="bg-card flex flex-col gap-2.5 rounded-lg border p-4">
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-medium">
                  {t["quickStart.vercelStep1Title"]}
                </h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {t["quickStart.vercelStep1Desc"]}
                </p>
              </div>
              <div className="flex items-start justify-between gap-2">
                <InstallCommand
                  command={REGISTER_NAMESPACE_CMD}
                  className="min-w-0 flex-1"
                />
                <CopyCommandButton text={REGISTER_NAMESPACE_CMD} />
              </div>
            </li>

            <li className="bg-card flex flex-col gap-2.5 rounded-lg border p-4">
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-medium">
                  {t["quickStart.vercelStep2Title"]}
                </h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {t["quickStart.vercelStep2Desc"]}
                </p>
              </div>
              <div className="flex items-start justify-between gap-2">
                <InstallCommand
                  command={COMPONENTS_JSON_SNIPPET}
                  className="min-w-0 flex-1"
                />
                <CopyCommandButton text={COMPONENTS_JSON_SNIPPET} />
              </div>
            </li>

            <li className="bg-card flex flex-col gap-2.5 rounded-lg border p-4">
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-medium">
                  {t["quickStart.vercelStep3Title"]}
                </h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {t["quickStart.vercelStep3Desc"]}
                </p>
              </div>
              <div className="flex items-start justify-between gap-2">
                <InstallCommand
                  command={HOSTED_INSTALL_CMD}
                  className="min-w-0 flex-1"
                />
                <CopyCommandButton text={HOSTED_INSTALL_CMD} />
              </div>
            </li>

            <li className="bg-card flex flex-col gap-2.5 rounded-lg border p-4">
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-medium">
                  {t["quickStart.vercelStep4Title"]}
                </h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {t["quickStart.vercelStep4Desc"]}
                </p>
              </div>
              <div className="flex items-start justify-between gap-2">
                <InstallCommand
                  command={HOSTED_DIRECT_URL_CMD}
                  className="min-w-0 flex-1"
                />
                <CopyCommandButton text={HOSTED_DIRECT_URL_CMD} />
              </div>
            </li>
          </ol>

          <p className="text-muted-foreground text-xs leading-relaxed">
            {t["quickStart.vercelNote"]}{" "}
            <a
              href={GITHUB_DOCS.hosted}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand font-medium hover:underline"
            >
              {t["quickStart.guideVercel"]}
            </a>
            .
          </p>
        </div>
      </div>

      <div className="border-t bg-muted/20 px-5 py-3 sm:px-6">
        <p className="text-muted-foreground text-xs leading-relaxed">
          {t["quickStart.footer"]}{" "}
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
          <Link
            href={`/#${MONOREPO_SECTION_ID}`}
            onClick={() => markRegistryScrollTarget(MONOREPO_SECTION_ID)}
            className="text-brand font-medium hover:underline"
          >
            {t["sidebar.monorepo"]}
          </Link>
          {" · "}
          <a
            href="#vercel-hosted"
            className="text-brand font-medium hover:underline"
          >
            {t["quickStart.guideVercel"]}
          </a>
          .
        </p>
      </div>
    </section>
  )
}
