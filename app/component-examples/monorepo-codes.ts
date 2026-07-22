export const REGISTRY_NAMESPACE = "tmdc-io/modern-ui-component"
export const HOSTED_REGISTRY_BASE = "https://modernui-registry.vercel.app/r"
export const HOSTED_INIT = `${HOSTED_REGISTRY_BASE}/init.json`
export const GITHUB_INIT = `${REGISTRY_NAMESPACE}/init`

export const monorepoCodes = {
  /** Greenfield only — skip if you already have apps/ + packages/ */
  scaffold: `npx shadcn@latest init --monorepo`,

  /** ModernUI base in shared UI — components.json, @modernui, theme, utils, npm deps */
  initSharedUi: `npx shadcn@latest init ${HOSTED_INIT} -y -c packages/ui`,

  initSharedUiGithub: `npx shadcn@latest init ${GITHUB_INIT} -y -c packages/ui`,

  /** App workspace components.json (reuse shared utils aliases after init) */
  initApp: `npx shadcn@latest init -y -c apps/web`,

  registerAppNamespace: `npx shadcn@latest registry add @modernui=${HOSTED_REGISTRY_BASE}/{name}.json -c apps/web`,

  primitiveInUi: `npx shadcn@latest add @modernui/button -y -c packages/ui
npx shadcn@latest add @modernui/input -y -c packages/ui
npx shadcn@latest add @modernui/card -y -c packages/ui`,

  primitiveInUiGithub: `npx shadcn@latest add ${REGISTRY_NAMESPACE}/button -y -c packages/ui
npx shadcn@latest add ${REGISTRY_NAMESPACE}/input -y -c packages/ui
npx shadcn@latest add ${REGISTRY_NAMESPACE}/card -y -c packages/ui`,

  blockInApp: `npx shadcn@latest add @modernui/login-form -y -c apps/web`,

  blockInAppGithub: `npx shadcn@latest add ${REGISTRY_NAMESPACE}/login-form -y -c apps/web`,

  listComponents: `npx shadcn@latest list @modernui -c packages/ui`,

  componentsJsonUi: `// packages/ui/components.json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@workspace/ui/components",
    "ui": "@workspace/ui/components/ui",
    "lib": "@workspace/ui/lib",
    "hooks": "@workspace/ui/hooks",
    "utils": "@workspace/ui/lib/utils"
  },
  "registries": {
    "@modernui": "https://modernui-registry.vercel.app/r/{name}.json"
  }
}`,

  componentsJsonApp: `// apps/web/components.json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "ui": "@workspace/ui/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks",
    "utils": "@workspace/ui/lib/utils"
  },
  "registries": {
    "@modernui": "https://modernui-registry.vercel.app/r/{name}.json"
  }
}`,

  packageExports: `// packages/ui/package.json (excerpt)
{
  "name": "@workspace/ui",
  "exports": {
    "./globals.css": "./src/styles/globals.css",
    "./components/*": "./src/components/*.tsx",
    "./lib/*": "./src/lib/*.ts",
    "./hooks/*": "./src/hooks/*.ts"
  }
}`,

  importInApp: `// apps/web/app/layout.tsx
import "@workspace/ui/globals.css"

// apps/web/components/login-page.tsx
import { Button } from "@workspace/ui/components/ui/button"
import { LoginForm } from "@/components/login-form"`,

  /** Existing monorepo — substitute packages/ui and apps/web for your workspace paths */
  existingBootstrap: `npx shadcn@latest init ${HOSTED_INIT} -y -c packages/ui
npx shadcn@latest init -y -c apps/web
npx shadcn@latest registry add @modernui=${HOSTED_REGISTRY_BASE}/{name}.json -c apps/web
npx shadcn@latest add @modernui/button -y -c packages/ui
npx shadcn@latest add @modernui/login-form -y -c apps/web`,

  existingBootstrapGithub: `npx shadcn@latest init ${GITHUB_INIT} -y -c packages/ui
npx shadcn@latest init -y -c apps/web
npx shadcn@latest add ${REGISTRY_NAMESPACE}/button -y -c packages/ui
npx shadcn@latest add ${REGISTRY_NAMESPACE}/login-form -y -c apps/web`,

  /** Greenfield: scaffold first, then same as existing */
  fullBootstrap: `npx shadcn@latest init --monorepo
npx shadcn@latest init ${HOSTED_INIT} -y -c packages/ui
npx shadcn@latest init -y -c apps/web
npx shadcn@latest registry add @modernui=${HOSTED_REGISTRY_BASE}/{name}.json -c apps/web
npx shadcn@latest add @modernui/button -y -c packages/ui
npx shadcn@latest add @modernui/login-form -y -c apps/web`,

  fullBootstrapGithub: `npx shadcn@latest init --monorepo
npx shadcn@latest init ${GITHUB_INIT} -y -c packages/ui
npx shadcn@latest init -y -c apps/web
npx shadcn@latest add ${REGISTRY_NAMESPACE}/button -y -c packages/ui
npx shadcn@latest add ${REGISTRY_NAMESPACE}/login-form -y -c apps/web`,
} as const
