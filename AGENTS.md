# ModernUI Component Library

## Overview

This repository is the source registry for **ModernUI** — a shadcn-extended React component library distributed via the official `shadcn` CLI.

## Conventions

- UI primitives live in `registry/default/ui/`
- Composite blocks live in `registry/default/blocks/`
- Design tokens live in `registry/default/theme/globals.css`
- Registry catalog is defined in the root `registry.json`
- Component API reference data lives in `app/component-api/` (see `pnpm docs:scaffold-api`)

## Commands

Run from the repository root.

### Everyday

| Command | When to use |
|---------|-------------|
| `pnpm dev` | Local docs site at http://localhost:3000 |
| `pnpm typecheck` | After TS changes |
| `pnpm lint` | Before committing |

### Registry changes

| Command | When to use |
|---------|-------------|
| `pnpm registry:build` | After editing `registry/default/**` or `registry.json` |
| `pnpm registry:validate` | Confirm `public/r/*.json` matches `registry.json` |
| `npx shadcn@latest registry validate .` | Official CLI validation before merge |
| `pnpm registry:generate` | Rebuild `registry.json` from filesystem (rare) |

### Docs site content

| Command | When to use |
|---------|-------------|
| `pnpm registry:sync-components` | Refresh shadcn-synced previews and `/components/{name}` variant pages |
| `pnpm registry:sync-demos` | Refresh manual doc variants + auth pages |
| `pnpm registry:sync-auth` | Refresh login/signup block pages only |
| `pnpm registry:sync-charts` | Refresh chart blocks + chart doc page |
| `pnpm registry:sync-chart-detail` | Refresh chart doc sections only |
| `pnpm docs:scaffold-api` | Regenerate API reference stubs from registry source |
| `pnpm docs:scaffold-api:force` | Overwrite curated API files too |

### Maintenance

| Command | When to use |
|---------|-------------|
| `pnpm registry:audit` | Check coverage vs upstream shadcn registry |
| `pnpm registry:prune-variants` | Remove broken generated variant entries |
| `pnpm registry:fix-radix` | Fix lucide imports in generated examples |

### Release

| Command | When to use |
|---------|-------------|
| `pnpm build` | Production build (`registry:build` + `next build`) |
| `pnpm start` | Serve production build locally |

## Adding a new component

1. Create the source file under `registry/default/ui/` or `registry/default/blocks/`
2. Register it in the root `registry.json` (or run `pnpm registry:generate`)
3. Run `pnpm registry:build` to rebuild hosted JSON
4. Run `pnpm registry:sync-components` if the docs site should list examples
5. Run `pnpm docs:scaffold-api` to add API reference on `/components/{name}`
6. Run `npx shadcn@latest registry validate .` before merging

## Import paths

- Registry source files use `@/lib/utils` for utilities
- Blocks import primitives from `@/registry/default/ui/...` during local development
- Consumer projects receive files at `@/components/ui/...` after `shadcn add`
