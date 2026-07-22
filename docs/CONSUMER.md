# ModernUI — Consumer Setup Guide

Install ModernUI components into any React project that supports shadcn/ui (Next.js, Vite, etc.).

## Fully automated (recommended)

Prerequisite: a React app with Tailwind already set up (for example `create-next-app` with Tailwind). Then bootstrap the ModernUI base and add components. The CLI writes `components.json`, registers `@modernui`, installs core npm packages, and embeds theme + utils from the `init` item.

### Hosted (Vercel)

```bash
# Optional: scaffold if you do not have an app yet
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir=false --import-alias "@/*"
cd my-app

npx shadcn@latest init https://modernui-registry.vercel.app/r/init.json -y
npx shadcn@latest add @modernui/button -y
npx shadcn@latest add @modernui/login-form -y   # example block
```

### GitHub registry

```bash
npx shadcn@latest init tmdc-io/modern-ui-component/init -y
npx shadcn@latest add tmdc-io/modern-ui-component/button -y
npx shadcn@latest add tmdc-io/modern-ui-component/login-form -y
```

Optional after init:

```bash
npx shadcn@latest add tmdc-io/modern-ui-component/i18n
npx shadcn@latest add tmdc-io/modern-ui-component/project-setup
```

> **Note:** Plain `npx shadcn@latest init` (without the ModernUI `init` item) only sets up generic shadcn. It will **not** install ModernUI theme tokens or register `@modernui`.

## Option A: GitHub — step by step (manual)

If you prefer not to use the ModernUI `init` base:

```bash
npx shadcn@latest init -y

# Install foundation first
npx shadcn@latest add tmdc-io/modern-ui-component/theme
npx shadcn@latest add tmdc-io/modern-ui-component/utils
npx shadcn@latest add tmdc-io/modern-ui-component/i18n   # LanguageProvider + useTranslation — see docs/I18N.md

# Install primitives
npx shadcn@latest add tmdc-io/modern-ui-component/button
npx shadcn@latest add tmdc-io/modern-ui-component/input
npx shadcn@latest add tmdc-io/modern-ui-component/card
npx shadcn@latest add tmdc-io/modern-ui-component/dialog

# Install composite blocks
npx shadcn@latest add tmdc-io/modern-ui-component/login-form

# Optional: project conventions
npx shadcn@latest add tmdc-io/modern-ui-component/project-setup
```

### Discover available components

```bash
npx shadcn@latest list tmdc-io/modern-ui-component
npx shadcn@latest view tmdc-io/modern-ui-component/button
```

### Pin a version

```bash
npx shadcn@latest add tmdc-io/modern-ui-component/button#v1.0.0
```

## Option B: Hosted namespace (manual)

After the registry is deployed, either run ModernUI `init` (recommended) or register the namespace once:

```bash
npx shadcn@latest registry add @modernui=https://modernui-registry.vercel.app/r/{name}.json
```

Then install components:

```bash
npx shadcn@latest add @modernui/theme
npx shadcn@latest add @modernui/utils
npx shadcn@latest add @modernui/button
npx shadcn@latest add @modernui/login-form
```

Full deploy + consumer detail: [HOSTED.md](./HOSTED.md).

## Install order

For **new** projects prefer **ModernUI `init`** (theme + utils included). Otherwise:

1. `theme` — CSS variables and base styles
2. `utils` — `cn()` helper
3. `i18n` — `LanguageProvider` + `useTranslation` (needed for login-form, hero, models-table, …). Full guide: [I18N.md](./I18N.md)
4. Primitives (`button`, `input`, `card`, `dialog`, etc.)
5. Blocks (`login-form`, etc.)

## Monorepo (pnpm / turbo / npm workspaces)

Use a shared UI package for primitives and theme. Keep app-only blocks in the app workspace.

Substitute `packages/ui` and `apps/web` below for your real workspace paths. Run every command from the **monorepo root** with `-c <workspace>`.

### Typical layout

```txt
my-monorepo/
├── apps/
│   └── web/                 # Next.js app  →  -c apps/web
│       ├── app/
│       ├── components/      # app-only blocks
│       └── components.json
├── packages/
│   └── ui/                  # shared ModernUI  →  -c packages/ui
│       ├── src/
│       │   ├── components/ui/
│       │   ├── lib/utils.ts
│       │   └── styles/globals.css
│       ├── components.json
│       └── package.json     # exports for @workspace/ui
└── package.json
```

### A · Fresh / new monorepo

No `apps/` or `packages/` yet. Scaffold first, then ModernUI init and add.

1. **Scaffold** — creates `apps/web` and `packages/ui`
2. **Init ModernUI** in `packages/ui` (theme + utils + `@modernui`)
3. **Init the app** and register `@modernui` (do not re-run ModernUI init in the app)
4. **Add** primitives to `packages/ui` and optional blocks to `apps/web`

```bash
npx shadcn@latest init --monorepo
npx shadcn@latest init https://modernui-registry.vercel.app/r/init.json -y -c packages/ui
npx shadcn@latest init -y -c apps/web
npx shadcn@latest registry add @modernui=https://modernui-registry.vercel.app/r/{name}.json -c apps/web
npx shadcn@latest add @modernui/button -y -c packages/ui
npx shadcn@latest add @modernui/login-form -y -c apps/web
```

GitHub (no Vercel):

```bash
npx shadcn@latest init --monorepo
npx shadcn@latest init tmdc-io/modern-ui-component/init -y -c packages/ui
npx shadcn@latest init -y -c apps/web
npx shadcn@latest add tmdc-io/modern-ui-component/button -y -c packages/ui
npx shadcn@latest add tmdc-io/modern-ui-component/login-form -y -c apps/web
```

### B · Existing monorepo

Skip `init --monorepo`. Point `-c` at your existing UI package and apps. The shared UI package needs Tailwind and a CSS file the CLI can update.

1. **Init ModernUI** in the shared UI package only
2. **Init / register** the app (`registry add` only if `components.json` already exists)
3. **Point** app `ui` / `utils` aliases at the shared package
4. **Add** primitives and optional app blocks

```bash
npx shadcn@latest init https://modernui-registry.vercel.app/r/init.json -y -c packages/ui
npx shadcn@latest init -y -c apps/web
npx shadcn@latest registry add @modernui=https://modernui-registry.vercel.app/r/{name}.json -c apps/web
npx shadcn@latest add @modernui/button -y -c packages/ui
npx shadcn@latest add @modernui/login-form -y -c apps/web   # optional
npx shadcn@latest add @modernui/i18n -y -c packages/ui      # optional
```

GitHub (no Vercel):

```bash
npx shadcn@latest init tmdc-io/modern-ui-component/init -y -c packages/ui
npx shadcn@latest init -y -c apps/web
npx shadcn@latest add tmdc-io/modern-ui-component/button -y -c packages/ui
npx shadcn@latest add tmdc-io/modern-ui-component/login-form -y -c apps/web
```

If the app already has `components.json`, skip its `init` and only add the `@modernui` registry (or edit `registries` by hand). Still point `ui` / `utils` at the shared package so you do not duplicate theme or `cn()`.

### Rules

- **A** uses `init --monorepo` first; **B** never does — only change `-c` paths.
- Use the **same** `style`, `baseColor`, and `iconLibrary` in every `components.json`.
- Run **ModernUI `init` only in the shared UI package** — theme and utils live there once.
- Point the app `utils` alias to `@workspace/ui/lib/utils` — do not install utils twice.
- Import theme CSS once in the app: `import "@workspace/ui/globals.css"` in `app/layout.tsx`.
- Register `@modernui` in both workspaces (or use GitHub item paths for every `add`).
- Expose `packages/ui` through `package.json` `exports` so apps can import `@workspace/ui/components/ui/button`.
- Always pass **`-c <workspace>`** when running `init` / `add` from the monorepo root.

### Example `packages/ui/package.json` exports

```json
{
  "name": "@workspace/ui",
  "exports": {
    "./globals.css": "./src/styles/globals.css",
    "./components/*": "./src/components/*.tsx",
    "./lib/*": "./src/lib/*.ts",
    "./hooks/*": "./src/hooks/*.ts"
  }
}
```

### Example app import

```tsx
// apps/web/app/layout.tsx
import "@workspace/ui/globals.css"

// apps/web/components/login-page.tsx
import { Button } from "@workspace/ui/components/ui/button"
```

### Discover components from a workspace

```bash
npx shadcn@latest list @modernui -c packages/ui
# or: npx shadcn@latest list tmdc-io/modern-ui-component -c packages/ui
```

See the [shadcn monorepo docs](https://ui.shadcn.com/docs/monorepo) for package-import aliases and Tailwind v4 notes.

## What you get

Files are copied directly into your project. You own and can edit every file — there is no opaque npm dependency for components.

## Guides

| Doc | Topic |
|-----|--------|
| [I18N.md](./I18N.md) | LanguageProvider, block messages, Español, next-intl bridge |
| [GITHUB.md](./GITHUB.md) | GitHub Registry install |
| [HOSTED.md](./HOSTED.md) | Hosted `@modernui` namespace |
