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

import { InstallCommand } from "@/app/install-command"
import {
  markRegistryScrollTarget,
  QUICK_START_SECTION_ID,
} from "@/app/component-registry-sidebar"
import { Badge } from "@/registry/default/ui/badge"
import { Button } from "@/registry/default/ui/button"
import { cn } from "@/lib/utils"

const REGISTRY_NAMESPACE = "tmdc-io/modern-ui-component"

type QuickStartStep = {
  id: string
  title: string
  description: string
  command: string
  href?: string
  scrollTarget?: string
}

const QUICK_START_STEPS: QuickStartStep[] = [
  {
    id: "init",
    title: "Initialize shadcn",
    description:
      "Run once in your React project. Configures components.json and Tailwind paths.",
    command: "npx shadcn@latest init",
  },
  {
    id: "project-setup",
    title: "Project setup",
    description:
      "Adds AGENTS.md and docs/modernui-setup.md — team conventions and install guide.",
    command: `npx shadcn@latest add ${REGISTRY_NAMESPACE}/project-setup`,
    href: "/#project-setup",
    scrollTarget: "project-setup",
  },
  {
    id: "foundation",
    title: "Theme & utils",
    description:
      "Design tokens and the cn() helper. Required before any UI primitive.",
    command: `npx shadcn@latest add ${REGISTRY_NAMESPACE}/theme\nnpx shadcn@latest add ${REGISTRY_NAMESPACE}/utils`,
    href: "/#theme",
    scrollTarget: "theme",
  },
  {
    id: "first-component",
    title: "Add a component",
    description:
      "Install source you own. Swap button for any primitive, block, or chart.",
    command: `npx shadcn@latest add ${REGISTRY_NAMESPACE}/button`,
    href: "/#button",
    scrollTarget: "button",
  },
]

const FULL_BOOTSTRAP = QUICK_START_STEPS.map((step) => step.command).join("\n")

function CopyCommandButton({
  text,
  label = "Copy",
  className,
}: {
  text: string
  label?: string
  className?: string
}) {
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
      aria-label={copied ? "Copied" : label}
    >
      {copied ? (
        <CheckIcon className="size-3.5 text-brand" />
      ) : (
        <CopyIcon className="size-3.5" />
      )}
      <span className="text-xs">{copied ? "Copied" : label}</span>
    </Button>
  )
}

type RegistryHeroProps = {
  totalCount: number
  categoryCount: number
}

export function RegistryHero({ totalCount, categoryCount }: RegistryHeroProps) {
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
          Component Registry
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed">
          ModernUI extends shadcn/ui with Figma-aligned tokens, DataOS blocks,
          and chart primitives. Install into any React codebase — your team
          owns every file.
        </p>
      </div>
    </header>
  )
}

export function RegistryQuickStart() {
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
                Quick start
              </h2>
            </div>
            <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
              Four commands to bootstrap a new project. Copy each step or grab
              the full script below.
            </p>
          </div>
          <CopyCommandButton
            text={FULL_BOOTSTRAP}
            label="Copy all"
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
                  <h3 className="text-sm font-medium">{step.title}</h3>
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
                      View in registry
                      <ArrowRightIcon className="size-3" />
                    </Link>
                  ) : null}
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {step.description}
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
          . Browse components below or press{" "}
          <kbd className="bg-muted rounded border px-1.5 py-0.5 font-mono text-[10px]">
            ⌘K
          </kbd>{" "}
          to search.
        </p>
      </div>
    </section>
  )
}
