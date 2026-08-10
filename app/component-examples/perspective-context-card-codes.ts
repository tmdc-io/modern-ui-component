export const perspectiveContextCardCodes = {
  install: `npx shadcn@latest add @modernui/perspective-context-card
npx shadcn@latest add tmdc-io/modern-ui-component/perspective-context-card`,

  rest: `"use client"

import { PerspectiveContextCard } from "@/components/blocks/perspective-context-card"

/**
 * REST context drawer (default)
 * -----------------------------
 * "What it is composed of" renders measure / dimension / segment chips
 * plus a filter summary row.
 */
export function PerspectiveRestDrawer() {
  return (
    <PerspectiveContextCard
      view="rest"
      className="h-full w-[30rem]"
      onClose={() => console.log("close")}
      onExplore={() => console.log("explore")}
    />
  )
}
`,

  graphql: `"use client"

import { PerspectiveContextCard } from "@/components/blocks/perspective-context-card"

/**
 * GraphQL context drawer
 * ----------------------
 * Swaps the composed-of body for the GraphQL query snippet.
 * Pass \`code\` to render your own operation.
 */
export function PerspectiveGraphqlDrawer() {
  return (
    <PerspectiveContextCard
      view="graphql"
      onClose={() => console.log("close")}
      onExplore={() => console.log("explore")}
    />
  )
}
`,

  sourceSql: `"use client"

import { PerspectiveContextCard } from "@/components/blocks/perspective-context-card"

/**
 * Source SQL context drawer
 * -------------------------
 * Renders the underlying warehouse query with SQL keyword,
 * table, and literal highlighting.
 */
export function PerspectiveSourceSqlDrawer() {
  return (
    <PerspectiveContextCard
      view="source-sql"
      code={\`SELECT pj.id, pj.name
FROM patient_journeys pj
WHERE pj.id = 'abc123';\`}
      onClose={() => console.log("close")}
      onExplore={() => console.log("explore")}
    />
  )
}
`,

  semanticSql: `"use client"

import { PerspectiveContextCard } from "@/components/blocks/perspective-context-card"

/**
 * Semantic SQL context drawer
 * ---------------------------
 * Renders the semantic-layer query (FIND / WITH / INCLUDE / WHERE).
 */
export function PerspectiveSemanticSqlDrawer() {
  return (
    <PerspectiveContextCard
      view="semantic-sql"
      onClose={() => console.log("close")}
      onExplore={() => console.log("explore")}
    />
  )
}
`,

  small: `"use client"

import { PerspectiveContextCard } from "@/components/blocks/perspective-context-card"

/**
 * Small view
 * ----------
 * Compact card: status chips, description, powered by, owner, Explore.
 * Composed-of and usage are hidden.
 */
export function PerspectivePopover() {
  return (
    <PerspectiveContextCard
      size="sm"
      onClose={() => console.log("close")}
      onExplore={() => console.log("explore")}
    />
  )
}
`,
}
