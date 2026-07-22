# Hosted @modernui Namespace

Deploy this Next.js app to serve built registry JSON from `public/r/`. Consumers then install with `@modernui/...` instead of GitHub raw paths.

## Deploy (Vercel)

1. Import the GitHub repo into [Vercel](https://vercel.com/new)
2. Framework preset: **Next.js**
3. Build command: `pnpm build` (runs `registry:build` + README/attributions sync + `next build`)
4. Install command: `pnpm install`
5. Output: default Next.js output (no static export)
6. Deploy and note the URL, e.g. `https://modernui-registry.vercel.app`
7. Confirm artifacts:
   - Docs site: `https://modernui-registry.vercel.app`
   - Bootstrap base: `https://modernui-registry.vercel.app/r/init.json`
   - Registry item: `https://modernui-registry.vercel.app/r/button.json`
   - Catalog index: `https://modernui-registry.vercel.app/r/registry.json`

Custom domain (optional): add it in the Vercel project → Domains, then use that host in the registry URL below.

## Consumer setup (fully automated)

Prerequisite: a React app with Tailwind (e.g. `create-next-app --tailwind`). The CLI needs framework + Tailwind + import aliases before ModernUI `init`.

```bash
# 1) ModernUI base — components.json, @modernui registry, theme, utils, core npm deps
npx shadcn@latest init https://modernui-registry.vercel.app/r/init.json -y

# 2) Add any component (npm deps install automatically)
npx shadcn@latest add @modernui/button -y
```

GitHub equivalent (no Vercel deploy required for `init`; `@modernui/…` still needs a hosted registry):

```bash
npx shadcn@latest init tmdc-io/modern-ui-component/init -y
npx shadcn@latest add tmdc-io/modern-ui-component/button -y
```

What `init` does for you:

- Writes / merges `components.json` (aliases, Tailwind CSS path, icon library; `style` is `new-york` so the CLI can resolve bare `registryDependencies` from the official shadcn index)
- Registers `@modernui` → `https://modernui-registry.vercel.app/r/{name}.json`
- Installs npm packages listed on the base (`clsx`, `tailwind-merge`, `tw-animate-css`, `lucide-react`, …)
- Writes **theme** (`app/globals.css`) and **utils** (`lib/utils.ts`) from files embedded in the `init` item (self-contained; no separate theme/utils fetch)

Honest limits:

| Goal | Supported? |
|------|------------|
| Auto `init` if missing `components.json` | Yes — built into `shadcn add` / `init` |
| Auto install item `dependencies` | Yes — built into CLI |
| Auto install Tailwind tooling for empty project | Yes — via **init** / scaffolding, not via theme JSON alone |
| Single `add @modernui/button` with **no** prior registry URL | **No** — need `components.json` registries, full JSON URL, or ModernUI `init` first |
| Fully automated ModernUI look + namespace | **Yes** — `init …/r/init.json` then `add @modernui/…` |

The official CLI also auto-runs a generic `init` when you `add` without `components.json`. That default path does **not** install the ModernUI theme or `@modernui` registry — prefer `init …/r/init.json` above.

## Manual / partial setup

### Register the namespace only

```bash
npx shadcn@latest registry add @modernui=https://modernui-registry.vercel.app/r/{name}.json
```

### Or edit `components.json`

```json
{
  "registries": {
    "@modernui": "https://modernui-registry.vercel.app/r/{name}.json"
  }
}
```

Keep the `{name}` placeholder — the CLI substitutes the component name.

### Install foundation + components manually

```bash
npx shadcn@latest add @modernui/theme
npx shadcn@latest add @modernui/utils
npx shadcn@latest add @modernui/button
npx shadcn@latest add @modernui/login-form
```

### Direct JSON URL (no namespace)

```bash
npx shadcn@latest add https://modernui-registry.vercel.app/r/button.json
```

## Local development

The registry docs project uses `http://localhost:3000/r/{name}.json` in [components.json](../components.json). Start the dev server before testing namespace installs against localhost:

```bash
pnpm dev
# Point @modernui at localhost if needed, then:
npx shadcn@latest init http://localhost:3000/r/init.json -y
npx shadcn@latest add @modernui/button -y
```

## GitHub vs Vercel hosted

| Method | When to use |
|--------|-------------|
| `init tmdc-io/modern-ui-component/init` | Public GitHub; works without a deploy |
| `init https://…/r/init.json` then `@modernui/…` | Fully automated hosted path |
| Monorepo A (new): `init --monorepo` then `init …/init.json -c <ui>` | Greenfield workspaces |
| Monorepo B (existing): `init …/init.json -c <ui>` only | Skip scaffold; substitute `-c` paths |
| Full `https://…/r/button.json` URL | One-off installs without editing `components.json` |
