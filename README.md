# ModernUI Component Registry

A shadcn-extended React UI component library distributed via the official [shadcn CLI](https://ui.shadcn.com/docs/cli). Teams install components as source files they own and can customize.

**Registry namespace:** `tmdc-io/modern-ui-component`  
**Docs site:** [http://localhost:3000](http://localhost:3000) when running locally (`pnpm dev`)

## What's included

<!-- catalog-count:items -->156<!-- /catalog-count:items --> items across <!-- catalog-count:categories -->21<!-- /catalog-count:categories --> categories — foundation, primitives, charts, DataOS UI blocks, and auth blocks. Browse the full catalog on the docs site or list from the CLI:

```bash
npx shadcn@latest list tmdc-io/modern-ui-component
```

| Category | Examples |
|----------|----------|
| **Foundation** | `project-setup`, `theme`, `utils`, `attributions` (docs) |
| **Actions & forms** | `button`, `input`, `select`, `date-picker`, `form`, … |
| **Layout & navigation** | `card`, `sidebar`, `tabs`, `breadcrumb`, … |
| **Overlays & feedback** | `dialog`, `drawer`, `toast`, `sonner`, … |
| **Data & charts** | `table`, `data-table` (TanStack Table + Virtual), `chart`, area/bar/line/pie charts, … |
| **DataOS UI** | `quality-summary-card` |
| **Blocks** | `login`, `signup`, `login-form` |

Design tokens follow the Figma Dev-Ready palette (see `registry/default/theme/globals.css`).

## Docs site

The Next.js app in `app/` is the component registry documentation:

| Section | URL | Description |
|---------|-----|-------------|
| Registry | `/` | Component catalog with live previews and install commands |
| Quick start | `/#quick-start` | Step-by-step bootstrap commands |
| Monorepo | `/#monorepo-install` | pnpm/turbo workspace install guide |
| Component docs | `/components/{name}` | Variants, usage, API reference |
| Attributions | `/components/attributions` | Third-party libraries, licenses, and upstream credits |
| Search | `⌘K` | Omni-search across components and docs |

Foundation sidebar order: **Quick Start → Monorepo → Project Setup → Theme → Utils → i18n → Attributions**.

On a component detail page, sidebar links navigate to other detail pages (`/components/{name}`). On the registry homepage, sidebar links scroll to catalog sections (`/#{name}`).

## Install in a consumer project

### Single app

```bash
npx shadcn@latest init
npx shadcn@latest add tmdc-io/modern-ui-component/project-setup   # optional
npx shadcn@latest add tmdc-io/modern-ui-component/theme
npx shadcn@latest add tmdc-io/modern-ui-component/utils
npx shadcn@latest add tmdc-io/modern-ui-component/i18n   # optional
npx shadcn@latest add tmdc-io/modern-ui-component/button
```

Recommended order: **theme → utils → i18n (optional) → primitives → blocks**.

### Monorepo

Install shared primitives into `packages/ui` and app-specific blocks into `apps/web`. Use `-c` on every command when running from the repo root:

```bash
npx shadcn@latest init --monorepo
npx shadcn@latest init -c packages/ui
npx shadcn@latest init -c apps/web
npx shadcn@latest add tmdc-io/modern-ui-component/theme -c packages/ui
npx shadcn@latest add tmdc-io/modern-ui-component/utils -c packages/ui
npx shadcn@latest add tmdc-io/modern-ui-component/i18n -c packages/ui   # optional
npx shadcn@latest add tmdc-io/modern-ui-component/button -c packages/ui
npx shadcn@latest add tmdc-io/modern-ui-component/login-form -c apps/web
```

Import theme CSS in the app layout: `import "@workspace/ui/globals.css"`.

Full details: [docs/CONSUMER.md](docs/CONSUMER.md) (also installed as `docs/modernui-setup.md` via `project-setup`).

## Commands

All scripts are run from the repository root after `pnpm install`.

### Docs site

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start the docs/registry site at [http://localhost:3000](http://localhost:3000) (Turbopack) |
| `pnpm build` | Build hosted registry JSON, sync README counts and attributions, then production Next.js build |
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
| `pnpm docs:i18n` | Translate missing docs Spanish, then verify coverage + block key parity |
| `pnpm docs:i18n:verify` | CI gate: docs Spanish coverage + block `en`/`es` key parity |
| `pnpm docs:sync-readme` | Sync catalog item/category counts in `README.md` from `app/catalog.ts` |
| `pnpm docs:sync-attributions` | Regenerate `app/attributions-data.ts` from `package.json` and `node_modules` metadata |

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

**After adding catalog entries** (new components listed on the docs site)

```bash
pnpm docs:sync-readme
```

**After dependency changes** (refresh attributions page)

```bash
pnpm docs:sync-attributions
pnpm typecheck
```

**Production deploy**

```bash
pnpm build
pnpm start
```

## Distribute to consumer projects

| Guide | Purpose |
|-------|---------|
| [docs/CONSUMER.md](docs/CONSUMER.md) | Single-app and monorepo setup |
| [docs/GITHUB.md](docs/GITHUB.md) | Publish to GitHub Registry |
| [docs/HOSTED.md](docs/HOSTED.md) | Deploy hosted `@modernui` namespace |

### GitHub Registry

```bash
npx shadcn@latest list tmdc-io/modern-ui-component
npx shadcn@latest view tmdc-io/modern-ui-component/button
npx shadcn@latest add tmdc-io/modern-ui-component/theme
npx shadcn@latest add tmdc-io/modern-ui-component/utils
npx shadcn@latest add tmdc-io/modern-ui-component/button
npx shadcn@latest add tmdc-io/modern-ui-component/login-form
npx shadcn@latest add tmdc-io/modern-ui-component/project-setup
```

Pin a release:

```bash
npx shadcn@latest add tmdc-io/modern-ui-component/button#v1.0.0
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
├── ui/                  # primitives (button, input, dialog, chart, …)
├── blocks/              # composite components (login-form, chart blocks, …)
└── theme/               # globals.css design tokens
app/
├── catalog.ts           # docs site component catalog
├── attributions-data.ts # generated third-party package metadata
├── component-api/       # generated + curated API reference data
├── component-variants/  # detail page definitions
├── registry-quick-start.tsx
├── monorepo-install-guide.tsx
└── components/[name]/   # /components/{name} doc routes
lib/utils.ts             # cn() helper
registry.json            # root catalog
public/r/                # built registry JSON (generated)
scripts/                 # registry sync, validation, and doc scaffolding
docs/                    # consumer, GitHub, and hosted setup guides
```

## Based on

Built on the [shadcn registry template](https://github.com/shadcn-ui/registry-template) with Tailwind v4 and Next.js 15. Key upstream libraries include [Radix UI](https://radix-ui.com), [TanStack Table](https://tanstack.com/table/latest), [TanStack Virtual](https://tanstack.com/virtual), and [Tailwind CSS](https://tailwindcss.com). Full license and version list: [`/components/attributions`](http://localhost:3000/components/attributions) on the docs site.

Repository: [github.com/tmdc-io/modern-ui-component](https://github.com/tmdc-io/modern-ui-component)
