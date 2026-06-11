"use client"

import * as React from "react"
import Link from "next/link"
import {
  ArrowRightIcon,
  CheckIcon,
  CopyIcon,
  FolderTreeIcon,
  GitBranchIcon,
} from "lucide-react"

import { monorepoCodes } from "@/app/component-examples/monorepo-codes"
import { InstallCommand } from "@/app/install-command"
import {
  markRegistryScrollTarget,
  MONOREPO_SECTION_ID,
} from "@/app/component-registry-sidebar"
import { Badge } from "@/registry/default/ui/badge"
import { Button } from "@/registry/default/ui/button"
import { cn } from "@/lib/utils"

const MONOREPO_STEPS = [
  {
    title: "Scaffold the monorepo",
    body: "Create apps/web and packages/ui with matching Tailwind and alias conventions.",
    command: monorepoCodes.scaffold,
  },
  {
    title: "Init each workspace",
    body: "Every workspace that receives components needs its own components.json. Run init in packages/ui and apps/web.",
    command: `${monorepoCodes.initSharedUi}\n${monorepoCodes.initApp}`,
  },
  {
    title: "Install foundation in packages/ui",
    body: "Theme and utils live in the shared UI package so every app inherits the same tokens and cn().",
    command: monorepoCodes.foundationInUi,
  },
  {
    title: "Add primitives to packages/ui",
    body: "Reusable primitives (button, input, card, …) are installed into the shared package with -c packages/ui.",
    command: monorepoCodes.primitiveInUi,
  },
  {
    title: "Add app-specific blocks in apps/web",
    body: "Page-level blocks that only one app needs can be added to the app workspace instead.",
    command: monorepoCodes.blockInApp,
  },
] as const

const MONOREPO_RULES = [
  "Use the same style, baseColor, and iconLibrary in every components.json.",
  "Point apps/web utils alias to @workspace/ui/lib/utils — do not duplicate cn().",
  "Import theme CSS once in the app layout from @workspace/ui/globals.css.",
  "Expose packages/ui paths through package.json exports for cross-workspace imports.",
  "Always pass -c <workspace> when running add from the repository root.",
] as const

function CopyButton({ text, className }: { text: string; className?: string }) {
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
    >
      {copied ? (
        <CheckIcon className="size-3.5 text-brand" />
      ) : (
        <CopyIcon className="size-3.5" />
      )}
      <span className="text-xs">{copied ? "Copied" : "Copy"}</span>
    </Button>
  )
}

export function MonorepoStructurePreview() {
  return (
    <div className="bg-muted/30 w-full max-w-lg rounded-lg border p-4 font-mono text-xs leading-relaxed">
      <div className="text-muted-foreground mb-2 flex items-center gap-2">
        <FolderTreeIcon className="size-3.5" />
        <span>Typical layout</span>
      </div>
      <pre className="text-foreground overflow-x-auto">
        {`my-monorepo/
├── apps/
│   └── web/                 # Next.js app
│       ├── app/
│       ├── components/      # app-only blocks
│       └── components.json
├── packages/
│   └── ui/                  # shared ModernUI primitives
│       ├── src/
│       │   ├── components/ui/
│       │   ├── lib/utils.ts
│       │   └── styles/globals.css
│       ├── components.json
│       └── package.json     # exports for @workspace/ui
└── package.json             # pnpm / turbo workspaces`}
      </pre>
    </div>
  )
}

export function MonorepoProcessPreview() {
  return (
    <ol className="flex w-full max-w-2xl flex-col gap-3 text-sm">
      {MONOREPO_RULES.map((rule) => (
        <li key={rule} className="flex gap-2">
          <span className="text-brand mt-0.5 shrink-0">•</span>
          <span className="text-muted-foreground leading-relaxed">{rule}</span>
        </li>
      ))}
    </ol>
  )
}

export function MonorepoCommandsPreview() {
  return (
    <div className="flex w-full flex-col gap-3">
      <InstallCommand command={monorepoCodes.listComponents} />
      <p className="text-muted-foreground text-xs">
        Discover components from the shared UI workspace before installing.
      </p>
    </div>
  )
}

export function RegistryMonorepoGuide() {
  return (
    <section
      id={MONOREPO_SECTION_ID}
      className="scroll-mt-24 overflow-hidden rounded-xl border bg-card"
    >
      <div className="border-b bg-muted/30 px-5 py-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex max-w-2xl flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <GitBranchIcon className="text-brand size-4" />
              <h2 className="text-base font-semibold tracking-tight">
                Monorepo installation
              </h2>
              <Badge variant="secondary" className="font-normal">
                pnpm · turbo · npm workspaces
              </Badge>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Install ModernUI into a shared{" "}
              <code className="text-foreground text-xs">packages/ui</code> workspace.
              The shadcn CLI routes files, dependencies, and imports across
              workspace boundaries when each package has a{" "}
              <code className="text-foreground text-xs">components.json</code>.
            </p>
          </div>
          <CopyButton
            text={monorepoCodes.fullBootstrap}
            className="self-start border bg-background"
          />
        </div>
      </div>

      <div className="grid gap-px bg-border lg:grid-cols-2">
        <div className="bg-card space-y-4 p-5 sm:p-6">
          <h3 className="text-sm font-medium">Repository layout</h3>
          <MonorepoStructurePreview />
          <h3 className="text-sm font-medium">Key rules</h3>
          <MonorepoProcessPreview />
        </div>

        <div className="bg-card space-y-4 p-5 sm:p-6">
          <h3 className="text-sm font-medium">Shared UI package exports</h3>
          <InstallCommand command={monorepoCodes.packageExports} />
          <h3 className="text-sm font-medium">Import from the app</h3>
          <InstallCommand command={monorepoCodes.importInApp} />
        </div>
      </div>

      <ol className="grid gap-px border-t bg-border">
        {MONOREPO_STEPS.map((step, index) => (
          <li
            key={step.title}
            className="bg-card flex flex-col gap-3 p-5 sm:flex-row sm:gap-6 sm:p-6"
          >
            <span className="bg-brand/10 text-brand flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
              {index + 1}
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-medium">{step.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {step.body}
                </p>
              </div>
              <div className="flex items-start justify-between gap-2">
                <InstallCommand command={step.command} className="min-w-0 flex-1" />
                <CopyButton text={step.command} />
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="grid gap-px border-t bg-border lg:grid-cols-2">
        <div className="bg-card space-y-3 p-5 sm:p-6">
          <h3 className="text-sm font-medium">packages/ui components.json</h3>
          <InstallCommand command={monorepoCodes.componentsJsonUi} />
        </div>
        <div className="bg-card space-y-3 p-5 sm:p-6">
          <h3 className="text-sm font-medium">apps/web components.json</h3>
          <p className="text-muted-foreground text-xs leading-relaxed">
            The app reuses{" "}
            <code className="text-foreground">@workspace/ui</code> for ui and
            utils aliases. App-only files stay under{" "}
            <code className="text-foreground">@/components</code>.
          </p>
          <InstallCommand command={monorepoCodes.componentsJsonApp} />
        </div>
      </div>

      <div className="border-t bg-muted/20 px-5 py-3 sm:px-6">
        <p className="text-muted-foreground text-xs leading-relaxed">
          Full write-up ships with{" "}
          <Link
            href="/#project-setup"
            onClick={() => markRegistryScrollTarget("project-setup")}
            className="text-brand inline-flex items-center gap-0.5 font-medium hover:underline"
          >
            project-setup
            <ArrowRightIcon className="size-3" />
          </Link>{" "}
          as <code className="text-foreground">docs/modernui-setup.md</code>.
          See also{" "}
          <a
            href="https://ui.shadcn.com/docs/monorepo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-medium hover:underline"
          >
            shadcn monorepo docs
          </a>
          .
        </p>
      </div>
    </section>
  )
}
