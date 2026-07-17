# ModernUI — Quality & CI (maintainers)

How we keep the registry, docs site, and DataOS blocks healthy before merge.

For the full command table, see [AGENTS.md](../AGENTS.md). Consumer install guides: [CONSUMER.md](CONSUMER.md).

---

## Before you open a PR

Run from the repo root after `pnpm install`:

```bash
pnpm typecheck
pnpm docs:verify          # drawers + i18n + registry validate
pnpm docs:audit-a11y-blocks
pnpm test                 # Vitest (interaction + jest-axe)
pnpm test:e2e:a11y        # Playwright axe on all DataOS docs pages
```

Optional if you touched docs Spanish or block message catalogs only:

```bash
pnpm docs:i18n:verify
```

---

## What CI runs

On every push/PR to `main`, `.github/workflows/ci.yml` runs (in order):

| Gate | Command | Catches |
|------|---------|---------|
| TypeScript | `pnpm typecheck` | Broken types |
| Code drawers | `pnpm docs:check-drawers` | Snippets in `*-codes.ts` that don’t typecheck |
| Heuristic a11y | `pnpm docs:audit-a11y-blocks` | Missing landmarks / common a11y smells in blocks + ui |
| Docs i18n | `pnpm docs:i18n:verify` | Missing Spanish / block `en`/`es` key drift |
| Unit tests | `pnpm test` | Block behavior + component-level axe (jsdom) |
| Lint | `pnpm lint` | ESLint |
| Registry build | `pnpm registry:build` + artifact check | Broken `public/r/*.json` |
| E2E axe | `pnpm test:e2e:a11y` | WCAG A/AA on `/components/{dataos-page}` |
| Production build | `pnpm build` | Next.js build |

CI starts a local Next.js server for Playwright; you don’t need a deployed URL.

---

## Local quality commands

| Command | When to use |
|---------|-------------|
| `pnpm docs:verify` | Fast pre-PR bundle (drawers + i18n + registry validate) |
| `pnpm docs:check-drawers` | After editing `app/component-examples/*-codes.ts` |
| `pnpm docs:audit-a11y-blocks` | After changing `registry/default/blocks` or `ui` |
| `pnpm test` | After changing block behavior or a11y markup |
| `pnpm test:e2e:a11y` | After changing docs layout or DataOS previews |
| `pnpm test:e2e` | Full Playwright suite (visual tests skipped unless env set) |

### Visual baselines (optional)

Screenshot comparison is **opt-in** so default CI stays stable across OS/fonts:

```bash
PLAYWRIGHT_VISUAL=1 pnpm test:e2e:update   # refresh baselines
PLAYWRIGHT_VISUAL=1 pnpm test:e2e:visual   # assert against baselines
```

Prefer generating baselines on Linux (same OS as CI) if you enable visual checks in CI later.

DataOS page list for axe/visual: `e2e/dataos-pages.ts`.

---

## Adding or changing a DataOS block

1. Implement under `registry/default/blocks/{name}/`
2. Register + `pnpm registry:build`
3. Docs variants / API / demos as usual (see AGENTS.md)
4. Prefer consistent APIs: `size`, skeleton, empty/`emptyMessage` where it fits
5. Keep code-drawer snippets compilable (`*-codes.ts`)
6. Run `pnpm test` and `pnpm test:e2e:a11y`

---

## Accessibility notes

- Docs axe scans the `<main>` landmark on each DataOS component page (full WCAG 2 A/AA tags, including color contrast).
- Component unit axe (`tests/blocks/a11y.test.tsx`) disables `color-contrast` in jsdom — Playwright covers contrast in a real browser.
- Horizontally scrollable `<pre>` blocks in docs use `tabIndex={0}` so keyboard users can scroll them.
