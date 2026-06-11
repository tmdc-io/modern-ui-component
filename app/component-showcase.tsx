"use client"

import * as React from "react"

import { catalog, type CatalogItem } from "@/app/catalog"
import {
  ComponentCodeDrawer,
  ViewCodeButton,
  ViewVariantsButton,
} from "@/app/component-code-drawer"
import { ComponentRegistryLayout } from "@/app/component-registry-layout"
import {
  useRegistryActiveSection,
  useRegistryScrollTarget,
} from "@/app/component-registry-sidebar"
import { useComponentSearch } from "@/app/component-search"
import { getDetailPageLabel, hasVariantPage } from "@/app/component-variants"
import { componentPreviews } from "@/app/component-previews"
import { InstallCommand } from "@/app/install-command"
import { RegistryMonorepoGuide } from "@/app/monorepo-install-guide"
import {
  RegistryHero,
  RegistryQuickStart,
} from "@/app/registry-quick-start"

function LazyPreview({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="w-full">
      {visible ? children : <div className="min-h-24 w-full" aria-hidden />}
    </div>
  )
}

function ComponentCard({
  item,
  onViewCode,
}: {
  item: CatalogItem
  onViewCode: (item: CatalogItem) => void
}) {
  const preview = componentPreviews[item.name]

  return (
    <article
      id={item.name}
      className="scroll-mt-24 flex flex-col gap-4 rounded-lg border bg-card p-4"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 flex-col gap-1">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-muted-foreground text-sm">{item.description}</p>
          {item.install.trim() ? (
            <InstallCommand command={item.install} className="mt-2" />
          ) : null}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {hasVariantPage(item.name) ? (
            <ViewVariantsButton
              href={`/components/${item.name}`}
              label={getDetailPageLabel(item.name)}
            />
          ) : null}
          {item.install.trim() ? (
            <ViewCodeButton onClick={() => onViewCode(item)} />
          ) : null}
        </div>
      </div>
      {preview ? (
        <div className="rounded-lg border border-border bg-muted/50 p-1.5">
          <div className="flex min-h-24 w-full items-center justify-center rounded-md bg-card p-6 shadow-sm ring-1 ring-border/40">
            <LazyPreview>{preview}</LazyPreview>
          </div>
        </div>
      ) : null}
    </article>
  )
}

export function ComponentShowcase() {
  useRegistryScrollTarget()
  const activeName = useRegistryActiveSection()
  const { query } = useComponentSearch()
  const [codeItem, setCodeItem] = React.useState<CatalogItem | null>(null)
  const [codeOpen, setCodeOpen] = React.useState(false)

  const handleViewCode = React.useCallback((item: CatalogItem) => {
    setCodeItem(item)
    setCodeOpen(true)
  }, [])

  const filteredCatalog = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return catalog

    return catalog
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.name.includes(q) ||
            item.title.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q)
        ),
      }))
      .filter((category) => category.items.length > 0)
  }, [query])

  const totalCount = catalog.reduce((sum, c) => sum + c.items.length, 0)
  const categoryCount = catalog.length
  const isSearching = query.trim().length > 0

  return (
    <ComponentRegistryLayout activeName={activeName}>
      <RegistryHero totalCount={totalCount} categoryCount={categoryCount} />

      {!isSearching ? (
        <>
          <RegistryQuickStart />
          <RegistryMonorepoGuide />
        </>
      ) : null}

      <main className="flex flex-col gap-10 pb-16">
        {filteredCatalog.length === 0 ? (
          <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed py-12 text-center">
            <p className="text-sm font-medium">No components match your search</p>
            <p className="text-muted-foreground text-sm">
              Try a different keyword or clear the search filter.
            </p>
          </div>
        ) : (
          filteredCatalog.map((category) => (
            <section key={category.id} className="flex flex-col gap-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b pb-2">
                <div className="flex flex-col gap-0.5">
                  <h2 className="text-xl font-semibold tracking-tight">
                    {category.title}
                  </h2>
                  {category.id === "foundation" ? (
                    <p className="text-muted-foreground text-sm">
                      Install these before primitives — project docs, tokens, and
                      cn().
                    </p>
                  ) : null}
                </div>
                <span className="text-muted-foreground text-sm tabular-nums">
                  {category.items.length}{" "}
                  {category.items.length === 1 ? "item" : "items"}
                </span>
              </div>
              <div className="grid gap-4">
                {category.items.map((item) => (
                  <ComponentCard
                    key={item.name}
                    item={item}
                    onViewCode={handleViewCode}
                  />
                ))}
              </div>
            </section>
          ))
        )}
      </main>

      <ComponentCodeDrawer
        item={codeItem}
        open={codeOpen}
        onOpenChange={setCodeOpen}
      />
    </ComponentRegistryLayout>
  )
}
