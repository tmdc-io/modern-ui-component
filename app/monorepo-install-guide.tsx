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

const NEW_MONOREPO_STEPS = [
  {
    title: "Scaffold the monorepo",
    body: "Creates apps/web and packages/ui with matching Tailwind and alias conventions.",
    command: monorepoCodes.scaffold,
  },
  {
    title: "Init ModernUI in packages/ui",
    body: "Writes components.json, registers @modernui, and installs theme + utils plus core npm deps.",
    command: monorepoCodes.initSharedUi,
  },
  {
    title: "Init apps/web and register @modernui",
    body: "App gets its own components.json. Do not re-run ModernUI init here — keep theme/utils in packages/ui.",
    command: `${monorepoCodes.initApp}\n${monorepoCodes.registerAppNamespace}`,
  },
  {
    title: "Add primitives and app blocks",
    body: "Shared primitives go in packages/ui; page-level blocks can go in apps/web.",
    command: `${monorepoCodes.primitiveInUi}\n${monorepoCodes.blockInApp}`,
  },
] as const

const EXISTING_MONOREPO_STEPS = [
  {
    title: "Init ModernUI in your shared UI package",
    body: "Point -c at your UI workspace (example: packages/ui). Needs Tailwind and a CSS file the CLI can update. Skip init --monorepo.",
    command: monorepoCodes.initSharedUi,
  },
  {
    title: "Init the app and register @modernui",
    body: "If the app already has components.json, skip init and only registry add. Point ui/utils aliases at the shared package.",
    command: `${monorepoCodes.initApp}\n${monorepoCodes.registerAppNamespace}`,
  },
  {
    title: "Add primitives to the shared UI package",
    body: "Reusable primitives (button, input, card, …) live in the shared package.",
    command: monorepoCodes.primitiveInUi,
  },
  {
    title: "Add app-specific blocks",
    body: "Page-level blocks that only one app needs go in the app workspace.",
    command: monorepoCodes.blockInApp,
  },
] as const

const MONOREPO_RULES = [
  "Fresh repo: run init --monorepo first. Existing repo: skip it and only change -c paths.",
  "Use the same style, baseColor, and iconLibrary in every components.json.",
  "Run ModernUI init only in the shared UI package — theme and utils live there once.",
  "Point the app utils alias at the shared package — do not duplicate cn().",
  "Import theme CSS once in the app layout from the shared package globals.css.",
  "Register @modernui in both workspaces (or use GitHub item paths).",
  "Expose the UI package through package.json exports for cross-workspace imports.",
  "Always pass -c <workspace> when running init/add from the repository root.",
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

function ProcessSteps({
  steps,
}: {
  steps: readonly {
    title: string
    body: string
    command: string
  }[]
}) {
  return (
    <ol className="flex flex-col gap-4">
      {steps.map((step, index) => (
        <li key={step.title} className="flex flex-col gap-2">
          <div className="flex items-start gap-3">
            <span className="bg-brand/10 text-brand flex size-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold">
              {index + 1}
            </span>
            <div className="min-w-0 flex-1 space-y-2">
              <div>
                <h4 className="text-sm font-medium">{step.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {step.body}
                </p>
              </div>
              <div className="flex items-start justify-between gap-2">
                <InstallCommand
                  command={step.command}
                  className="min-w-0 flex-1"
                />
                <CopyButton text={step.command} />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function MonorepoStructurePreview() {
  return (
    <div className="bg-muted/30 w-full max-w-lg rounded-lg border p-4 font-mono text-xs leading-relaxed">
      <div className="text-muted-foreground mb-2 flex items-center gap-2">
        <FolderTreeIcon className="size-3.5" />
        <span>Typical layout (rename paths to match yours)</span>
      </div>
      <pre className="text-foreground overflow-x-auto">
        {`my-monorepo/
├── apps/
│   └── web/                 # Next.js app  →  -c apps/web
│       ├── app/
│       ├── components/      # app-only blocks
│       └── components.json
├── packages/
│   └── ui/                  # shared UI     →  -c packages/ui
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
        <div className="flex max-w-3xl flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <GitBranchIcon className="text-brand size-4" />
            <h2 className="text-base font-semibold tracking-tight">
              Monorepo installation
            </h2>
            <Badge variant="secondary" className="font-normal">
              new · existing · pnpm · turbo
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Two install paths below. Substitute{" "}
            <code className="text-foreground text-xs">packages/ui</code> and{" "}
            <code className="text-foreground text-xs">apps/web</code> for your
            workspace paths. Run every command from the monorepo root with{" "}
            <code className="text-foreground text-xs">-c</code>.
          </p>
        </div>
      </div>

      <div className="grid gap-px border-b bg-border lg:grid-cols-2">
        <div className="bg-card flex flex-col gap-4 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-semibold">A · Fresh / new monorepo</h3>
                <Badge variant="outline" className="font-normal">
                  greenfield
                </Badge>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                No apps/ or packages/ yet. Scaffold first, then ModernUI init and
                add.
              </p>
            </div>
            <CopyButton
              text={monorepoCodes.fullBootstrap}
              className="shrink-0 border bg-background"
            />
          </div>
          <InstallCommand command={monorepoCodes.fullBootstrap} />
          <ProcessSteps steps={NEW_MONOREPO_STEPS} />
        </div>

        <div className="bg-card flex flex-col gap-4 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-semibold">B · Existing monorepo</h3>
                <Badge variant="outline" className="font-normal">
                  skip scaffold
                </Badge>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                You already have workspaces. Skip{" "}
                <code className="text-foreground">init --monorepo</code>; only
                adjust <code className="text-foreground">-c</code> paths.
              </p>
            </div>
            <CopyButton
              text={monorepoCodes.existingBootstrap}
              className="shrink-0 border bg-background"
            />
          </div>
          <InstallCommand command={monorepoCodes.existingBootstrap} />
          <ProcessSteps steps={EXISTING_MONOREPO_STEPS} />
        </div>
      </div>

      <div className="border-b bg-muted/20 px-5 py-3 sm:px-6">
        <p className="text-muted-foreground text-xs leading-relaxed">
          GitHub fallback (no Vercel): use{" "}
          <code className="text-foreground">
            tmdc-io/modern-ui-component/init
          </code>{" "}
          and{" "}
          <code className="text-foreground">tmdc-io/modern-ui-component/…</code>{" "}
          instead of hosted URLs /{" "}
          <code className="text-foreground">@modernui/…</code>.
        </p>
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
          as <code className="text-foreground">docs/modernui-setup.md</code>. See
          also{" "}
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
