# ModernUI Component Registry

A shadcn-extended React UI component library distributed via the official [shadcn CLI](https://ui.shadcn.com/docs/cli). Teams install components as source files they own and can customize.

## What's included

| Item | Type | Description |
|------|------|-------------|
| `theme` | foundation | ModernUI design tokens and CSS variables |
| `utils` | foundation | `cn()` classname utility |
| `button` | primitive | Button with `brand` variant |
| `input` | primitive | Text input |
| `card` | primitive | Card layout |
| `label` | primitive | Form label |
| `dialog` | primitive | Modal dialog |
| `login-form` | block | Sign-in form with Zod validation |
| `project-setup` | meta | AGENTS.md and consumer docs |

## Commands

All scripts are run from the repository root after `pnpm install`.

### Docs site

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start the docs/registry site at [http://localhost:3000](http://localhost:3000) (Turbopack) |
| `pnpm build` | Build hosted registry JSON, then production Next.js build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run TypeScript (`tsc --noEmit`) |

### Registry — build and validate

| Command | Description |
|---------|-------------|
| `pnpm registry:build` | Build `public/r/*.json` from `registry.json` via `shadcn build` |
| `pnpm registry:validate` | Verify every item in `registry.json` has a matching `public/r/{name}.json` |
| `pnpm registry:generate` | Regenerate root `registry.json` from files under `registry/default/` |

Validate with the official CLI before merging:

```bash
npx shadcn@latest registry validate .
```

### Registry — sync generated docs and examples

| Command | Description |
|---------|-------------|
| `pnpm registry:sync-components` | Sync shadcn demo previews, variant pages, and generated examples (main sync) |
| `pnpm registry:sync-demos` | Sync manual doc variants + auth block pages |
| `pnpm registry:sync-auth` | Sync login/signup block previews and variant pages |
| `pnpm registry:sync-charts` | Sync chart blocks from shadcn + chart doc detail page |
| `pnpm registry:sync-chart-detail` | Sync chart documentation sections only |

### Registry — maintenance

| Command | Description |
|---------|-------------|
| `pnpm registry:audit` | Compare ModernUI UI coverage against upstream shadcn registry |
| `pnpm registry:prune-variants` | Remove known broken entries from generated variant pages |
| `pnpm registry:fix-radix` | Fix lucide import names in generated Radix examples |

### Component API reference docs

| Command | Description |
|---------|-------------|
| `pnpm docs:scaffold-api` | Generate or refresh `app/component-api/*.ts` stubs and `index.ts` (skips curated files) |
| `pnpm docs:scaffold-api:force` | Same as above, but overwrites curated API files (`button`, `dialog`, etc.) |

Scaffold a single component:

```bash
node scripts/scaffold-component-api.mjs button --write-index
```

Curated API files (hand-written, skipped by default): `button`, `badge`, `card`, `dialog`, `form`, `input`, `select`, `quality-summary-card`.

### Common workflows

**Local development**

```bash
pnpm install
pnpm dev
```

**After changing registry source files**

```bash
pnpm registry:build
pnpm registry:validate
pnpm typecheck
```

**After adding or updating shadcn examples**

```bash
pnpm registry:sync-components
pnpm typecheck
```

**After adding a new component**

1. Add source under `registry/default/ui/` or `registry/default/blocks/`
2. Register in `registry.json` (or run `pnpm registry:generate`)
3. `pnpm registry:build`
4. `pnpm registry:sync-components` (if the docs site should show examples)
5. `pnpm docs:scaffold-api` (optional — API reference on `/components/{name}`)
6. `npx shadcn@latest registry validate .`

**Production deploy**

```bash
pnpm build
pnpm start
```

## Distribute to consumer projects

- [docs/CONSUMER.md](docs/CONSUMER.md) — consumer setup guide
- [docs/GITHUB.md](docs/GITHUB.md) — publish to GitHub Registry
- [docs/HOSTED.md](docs/HOSTED.md) — deploy hosted `@modernui` namespace

### GitHub Registry

```bash
npx shadcn@latest list ashishsahu/ModernUIComponent
npx shadcn@latest view ashishsahu/ModernUIComponent/button
npx shadcn@latest add ashishsahu/ModernUIComponent/theme
npx shadcn@latest add ashishsahu/ModernUIComponent/utils
npx shadcn@latest add ashishsahu/ModernUIComponent/button
npx shadcn@latest add ashishsahu/ModernUIComponent/login-form
npx shadcn@latest add ashishsahu/ModernUIComponent/project-setup
```

Pin a release:

```bash
npx shadcn@latest add ashishsahu/ModernUIComponent/button#v1.0.0
```

### Hosted namespace (@modernui)

```bash
npx shadcn@latest registry add @modernui=https://your-registry-url.com/r/{name}.json
npx shadcn@latest add @modernui/theme
npx shadcn@latest add @modernui/button
```

## Project structure

```txt
registry/default/
├── ui/                  # primitives (button, input, card, dialog, label)
├── blocks/              # composite components (login-form, chart blocks)
└── theme/               # globals.css design tokens
app/component-api/       # generated + curated API reference data for docs site
lib/utils.ts             # cn() helper
registry.json            # root catalog
public/r/                # built registry JSON (generated)
scripts/                 # registry sync, validation, and doc scaffolding
docs/                    # consumer, GitHub, and hosted setup guides
```

## Based on

Built on the [shadcn registry template](https://github.com/shadcn-ui/registry-template) with Tailwind v4 and Next.js 15.
