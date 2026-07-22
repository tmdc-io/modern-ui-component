export const projectSetupCodes = {
  overview: `# Install project conventions into your app
npx shadcn@latest add tmdc-io/modern-ui-component/project-setup

# Files added to your project:
#   AGENTS.md                  → project root
#   docs/modernui-setup.md     → consumer setup guide`,
  agents: `# ModernUI Component Library

## Overview

This repository is the source registry for **ModernUI** — a shadcn-extended React component library distributed via the official \`shadcn\` CLI.

## Commands (registry repo)

| Command | When to use |
|---------|-------------|
| \`pnpm dev\` | Local docs site |
| \`pnpm registry:build\` | After registry source changes |
| \`pnpm registry:validate\` | Verify public/r/*.json |
| \`pnpm registry:sync-components\` | Refresh docs examples |
| \`pnpm docs:scaffold-api\` | Regenerate component API docs |
| \`npx shadcn@latest registry validate .\` | Before merge |

See README.md for the full command reference.

## Adding a new component

1. Create source under \`registry/default/ui/\` or \`registry/default/blocks/\`
2. Register in \`registry.json\`
3. \`pnpm registry:build\`
4. \`pnpm registry:sync-components\` (optional, for docs examples)
5. \`pnpm docs:scaffold-api\` (optional, for API reference)
6. \`npx shadcn@latest registry validate .\` before merging

## Import paths

- Registry source files use \`@/lib/utils\` for utilities
- Blocks import primitives from \`@/registry/default/ui/...\` during local development
- Consumer projects receive files at \`@/components/ui/...\` after \`shadcn add\``,
  consumer: `# ModernUI — Consumer Setup Guide

Install ModernUI components into any React project that supports shadcn/ui (Next.js, Vite, etc.).

## Fully automated (recommended)

\`\`\`bash
npx shadcn@latest init https://modern-ui-component.vercel.app/r/init.json -y
npx shadcn@latest add @modernui/button -y
npx shadcn@latest add tmdc-io/modern-ui-component/project-setup   # optional conventions
\`\`\`

## Option A: GitHub Registry (manual)

\`\`\`bash
# Install foundation first (or use ModernUI init above)
npx shadcn@latest add tmdc-io/modern-ui-component/theme
npx shadcn@latest add tmdc-io/modern-ui-component/utils

# Install primitives
npx shadcn@latest add tmdc-io/modern-ui-component/button
npx shadcn@latest add tmdc-io/modern-ui-component/input
npx shadcn@latest add tmdc-io/modern-ui-component/card
npx shadcn@latest add tmdc-io/modern-ui-component/dialog

# Install composite blocks
npx shadcn@latest add tmdc-io/modern-ui-component/login-form

# Optional: project conventions
npx shadcn@latest add tmdc-io/modern-ui-component/project-setup
\`\`\`

## Install order

1. ModernUI \`init\` (theme + utils + \`@modernui\`) — or \`theme\` then \`utils\` manually
2. Primitives (\`button\`, \`input\`, \`card\`, \`dialog\`, etc.)
3. Blocks (\`login-form\`, etc.)

## Monorepo

**A · Fresh / new** — scaffold, then ModernUI init and add:

\`\`\`bash
npx shadcn@latest init --monorepo
npx shadcn@latest init https://modern-ui-component.vercel.app/r/init.json -y -c packages/ui
npx shadcn@latest init -y -c apps/web
npx shadcn@latest registry add @modernui=https://modern-ui-component.vercel.app/r/{name}.json -c apps/web
npx shadcn@latest add @modernui/button -y -c packages/ui
npx shadcn@latest add @modernui/login-form -y -c apps/web
\`\`\`

**B · Existing** — skip scaffold; substitute your workspace paths:

\`\`\`bash
npx shadcn@latest init https://modern-ui-component.vercel.app/r/init.json -y -c packages/ui
npx shadcn@latest init -y -c apps/web
npx shadcn@latest registry add @modernui=https://modern-ui-component.vercel.app/r/{name}.json -c apps/web
npx shadcn@latest add @modernui/button -y -c packages/ui
npx shadcn@latest add @modernui/login-form -y -c apps/web
\`\`\`

Import in the app: \`import "@workspace/ui/globals.css"\` and \`import { Button } from "@workspace/ui/components/ui/button"\`.

## What you get

Files are copied directly into your project. You own and can edit every file — there is no opaque npm dependency for components.`,
} as const

