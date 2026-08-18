import {
  PerspectiveContextCardGraphqlPreview,
  PerspectiveContextCardRestPreview,
  PerspectiveContextCardSemanticSqlPreview,
  PerspectiveContextCardSmallPreview,
  PerspectiveContextCardSourceSqlPreview,
} from "@/app/component-examples/perspective-context-card-usage"
import { perspectiveContextCardCodes } from "@/app/component-examples/perspective-context-card-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const perspectiveContextCardPage: ComponentVariantPage = {
  name: "perspective-context-card",
  title: "Perspective Context Card",
  description:
    "DataOS perspective context card with freshness, policies, composed-of breakdown (REST fields, GraphQL, source SQL, semantic SQL), usage, and contacts.",
  install: perspectiveContextCardCodes.install,
  intro:
    'A composed context card for perspectives — freshness & policies, what it defines, what it is composed of, powered by, usage, and owner. The view prop swaps the composed-of body between REST field chips and GraphQL / source SQL / semantic SQL snippets. Use size="sm" for compact peeks.',
  variants: [],
  sections: [
    {
      id: "preview",
      title: "Context drawer",
      description: "Full drawer, one per query interface.",
      variants: [
        {
          id: "rest",
          title: "REST",
          description:
            "Measure, dimension, and segment chips plus a filter summary.",
          body: 'Default view. Pass fieldGroups to replace the built-in Patient Journey Analysis sample; each group renders chips or a summary row.',
          Preview: PerspectiveContextCardRestPreview,
          code: perspectiveContextCardCodes.rest,
          tall: true,
          fitContent: true,
        },
        {
          id: "graphql",
          title: "GraphQL",
          description: "Composed-of renders the GraphQL operation.",
          body: 'Pass view="graphql". Supply code to override the built-in snippet.',
          Preview: PerspectiveContextCardGraphqlPreview,
          code: perspectiveContextCardCodes.graphql,
          tall: true,
          fitContent: true,
        },
        {
          id: "source-sql",
          title: "Source SQL",
          description: "Warehouse query with keyword, table, and literal colors.",
          body: 'Pass view="source-sql". Keywords, joined tables, and string literals are highlighted.',
          Preview: PerspectiveContextCardSourceSqlPreview,
          code: perspectiveContextCardCodes.sourceSql,
          tall: true,
          fitContent: true,
        },
        {
          id: "semantic-sql",
          title: "Semantic SQL",
          description: "Semantic-layer query (FIND / WITH / INCLUDE / WHERE).",
          body: 'Pass view="semantic-sql" for the Lens query that backs the perspective.',
          Preview: PerspectiveContextCardSemanticSqlPreview,
          code: perspectiveContextCardCodes.semanticSql,
          tall: true,
          fitContent: true,
        },
      ],
    },
    {
      id: "small",
      title: "Context card",
      description: "Compact peek for hover cards and popovers.",
      variants: [
        {
          id: "small",
          title: "Small",
          description:
            "Status chips, description, powered by, owner, and Know more.",
          body: 'Pass size="sm". Composed-of and usage are hidden; metrics render as chips.',
          Preview: PerspectiveContextCardSmallPreview,
          code: perspectiveContextCardCodes.small,
          tall: true,
          fitContent: true,
        },
      ],
    },
  ],
}
