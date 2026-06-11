export const REGISTRY_NAMESPACE = "tmdc-io/modern-ui-component"

export const monorepoCodes = {
  scaffold: `npx shadcn@latest init --monorepo`,

  initSharedUi: `npx shadcn@latest init -c packages/ui`,

  initApp: `npx shadcn@latest init -c apps/web`,

  foundationInUi: `npx shadcn@latest add ${REGISTRY_NAMESPACE}/theme -c packages/ui
npx shadcn@latest add ${REGISTRY_NAMESPACE}/utils -c packages/ui`,

  primitiveInUi: `npx shadcn@latest add ${REGISTRY_NAMESPACE}/button -c packages/ui
npx shadcn@latest add ${REGISTRY_NAMESPACE}/input -c packages/ui
npx shadcn@latest add ${REGISTRY_NAMESPACE}/card -c packages/ui`,

  blockInApp: `npx shadcn@latest add ${REGISTRY_NAMESPACE}/login-form -c apps/web`,

  listComponents: `npx shadcn@latest list ${REGISTRY_NAMESPACE} -c packages/ui`,

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
  "aliases": {
    "components": "@workspace/ui/components",
    "ui": "@workspace/ui/components/ui",
    "lib": "@workspace/ui/lib",
    "hooks": "@workspace/ui/hooks",
    "utils": "@workspace/ui/lib/utils"
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
  "aliases": {
    "components": "@/components",
    "ui": "@workspace/ui/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks",
    "utils": "@workspace/ui/lib/utils"
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

  fullBootstrap: `npx shadcn@latest init --monorepo
npx shadcn@latest init -c packages/ui
npx shadcn@latest init -c apps/web
npx shadcn@latest add ${REGISTRY_NAMESPACE}/theme -c packages/ui
npx shadcn@latest add ${REGISTRY_NAMESPACE}/utils -c packages/ui
npx shadcn@latest add ${REGISTRY_NAMESPACE}/button -c packages/ui
npx shadcn@latest add ${REGISTRY_NAMESPACE}/login-form -c apps/web`,
} as const
