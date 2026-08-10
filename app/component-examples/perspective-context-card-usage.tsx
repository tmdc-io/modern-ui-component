"use client"

import * as React from "react"

import { PerspectiveContextCard } from "@/registry/default/blocks/perspective-context-card/perspective-context-card"

export function PerspectiveContextCardRestPreview() {
  return (
    <div className="flex w-full justify-center bg-[#f5f5f5] p-6 dark:bg-background">
      <PerspectiveContextCard
        view="rest"
        onClose={() => undefined}
        onExplore={() => undefined}
      />
    </div>
  )
}

export function PerspectiveContextCardGraphqlPreview() {
  return (
    <div className="flex w-full justify-center bg-[#f5f5f5] p-6 dark:bg-background">
      <PerspectiveContextCard
        view="graphql"
        onClose={() => undefined}
        onExplore={() => undefined}
      />
    </div>
  )
}

export function PerspectiveContextCardSourceSqlPreview() {
  return (
    <div className="flex w-full justify-center bg-[#f5f5f5] p-6 dark:bg-background">
      <PerspectiveContextCard
        view="source-sql"
        onClose={() => undefined}
        onExplore={() => undefined}
      />
    </div>
  )
}

export function PerspectiveContextCardSemanticSqlPreview() {
  return (
    <div className="flex w-full justify-center bg-[#f5f5f5] p-6 dark:bg-background">
      <PerspectiveContextCard
        view="semantic-sql"
        onClose={() => undefined}
        onExplore={() => undefined}
      />
    </div>
  )
}

export function PerspectiveContextCardSmallPreview() {
  return (
    <div className="flex w-full justify-center bg-[#f5f5f5] p-6 dark:bg-background">
      <PerspectiveContextCard
        size="sm"
        onClose={() => undefined}
        onExplore={() => undefined}
      />
    </div>
  )
}
