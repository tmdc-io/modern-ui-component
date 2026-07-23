"use client"

import { FileTextIcon, FolderOpenIcon, TerminalIcon } from "lucide-react"

import { monorepoCodes } from "@/app/component-examples/monorepo-codes"
import { GITHUB_DOCS } from "@/app/github-link"
import { InstallCommand } from "@/app/install-command"
import {
  MonorepoProcessPreview,
  MonorepoStructurePreview,
} from "@/app/monorepo-install-guide"
import { Badge } from "@/registry/default/ui/badge"

const installFiles = [
  {
    source: "AGENTS.md",
    target: "AGENTS.md",
    description: "Agent and contributor conventions for ModernUI projects.",
  },
  {
    source: "docs/CONSUMER.md",
    target: "docs/modernui-setup.md",
    description: "Step-by-step consumer install guide for your team.",
  },
] as const

const installOrder = [
  "project-setup — AGENTS.md and consumer docs (this item)",
  "theme — CSS variables and base styles",
  "utils — cn() helper",
  "i18n — LanguageProvider + useTranslation (optional)",
  "Primitives — button, input, card, dialog, …",
  "Blocks — login, signup, login-form, …",
] as const

export function ProjectSetupOverviewPreview() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6 text-left text-sm">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 font-medium">
          <TerminalIcon className="size-4" />
          Install command
        </div>
        <InstallCommand
          expand={false}
          command={`npx shadcn@latest add @modernui/project-setup
npx shadcn@latest add tmdc-io/modern-ui-component/project-setup`}
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 font-medium">
          <FolderOpenIcon className="size-4" />
          Files added to your project
        </div>
        <ul className="flex flex-col gap-3">
          {installFiles.map((file) => (
            <li
              key={file.source}
              className="bg-card flex flex-col gap-1 rounded-md border p-3"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{file.source}</Badge>
                <span className="text-muted-foreground">→</span>
                <Badge variant="outline">{file.target}</Badge>
              </div>
              <p className="text-muted-foreground">{file.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-medium">Recommended install order</p>
        <ol className="text-muted-foreground list-decimal space-y-1 pl-5">
          {installOrder.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export function ProjectSetupAgentsPreview() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-4 text-left text-sm">
      <div className="flex items-center gap-2 font-medium">
        <FileTextIcon className="size-4" />
        AGENTS.md
      </div>
      <p className="text-muted-foreground">
        Copied to your project root. Gives AI assistants and contributors the
        ModernUI layout, registry workflow, and import path conventions.
      </p>
      <ul className="text-muted-foreground list-disc space-y-1 pl-5">
        <li>Where UI primitives and blocks live in the registry</li>
        <li>How to register new components in registry.json</li>
        <li>Build and validate steps before publishing</li>
        <li>Import paths for registry vs consumer projects</li>
      </ul>
    </div>
  )
}

export function ProjectSetupMonorepoPreview() {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-6 text-left text-sm">
      <p className="text-muted-foreground leading-relaxed">
        Two install paths:{" "}
        <strong className="text-foreground font-medium">A · Fresh / new</strong>{" "}
        (scaffold first) and{" "}
        <strong className="text-foreground font-medium">B · Existing</strong>{" "}
        (skip <code className="text-foreground text-xs">init --monorepo</code>).
        Substitute <code className="text-foreground text-xs">packages/ui</code> /{" "}
        <code className="text-foreground text-xs">apps/web</code> for your paths.
      </p>
      <MonorepoStructurePreview />
      <MonorepoProcessPreview />
      <div className="flex flex-col gap-2">
        <p className="font-medium">A · Fresh / new monorepo</p>
        <InstallCommand expand={false} command={monorepoCodes.fullBootstrap} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium">B · Existing monorepo</p>
        <InstallCommand expand={false} command={monorepoCodes.existingBootstrap} />
      </div>
    </div>
  )
}

export function ProjectSetupConsumerPreview() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-4 text-left text-sm">
      <div className="flex items-center gap-2 font-medium">
        <FileTextIcon className="size-4" />
        docs/modernui-setup.md
      </div>
      <p className="text-muted-foreground">
        Renamed from{" "}
        <a
          href={GITHUB_DOCS.consumer}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand font-medium hover:underline"
        >
          CONSUMER.md
        </a>{" "}
        when installed. A setup guide your team can follow in any
        shadcn-compatible React project.
      </p>
      <ul className="text-muted-foreground list-disc space-y-1 pl-5">
        <li>Prerequisites — shadcn init</li>
        <li>
          <a
            href={GITHUB_DOCS.i18n}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-medium hover:underline"
          >
            i18n usage
          </a>{" "}
          — LanguageProvider, block messages, next-intl bridge
        </li>
        <li>
          <a
            href={GITHUB_DOCS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-medium hover:underline"
          >
            GitHub Registry
          </a>{" "}
          install commands
        </li>
        <li>
          <a
            href={GITHUB_DOCS.hosted}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-medium hover:underline"
          >
            Hosted namespace
          </a>{" "}
          option after deploy
        </li>
        <li>Recommended install order for new projects</li>
        <li>Monorepo layout, -c workspace flags, and components.json aliases</li>
      </ul>
    </div>
  )
}
