"use client"

import * as React from "react"

import { catalog, type CatalogItem } from "@/app/catalog"
import { componentPreviews } from "@/app/component-previews"
import { Input } from "@/registry/default/ui/input"

function ComponentCard({ item }: { item: CatalogItem }) {
  const preview = componentPreviews[item.name]

  return (
    <article
      id={item.name}
      className="scroll-mt-24 flex flex-col gap-4 rounded-lg border bg-card p-4"
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-muted-foreground text-sm">{item.description}</p>
        <code className="text-muted-foreground mt-1 break-all text-xs">
          {item.install}
        </code>
      </div>
      {preview ? (
        <div className="flex min-h-32 items-center justify-center rounded-md border border-dashed bg-background p-6">
          {preview}
        </div>
      ) : null}
    </article>
  )
}

export function ComponentShowcase() {
  const [query, setQuery] = React.useState("")

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

  return (
    <div className="flex w-full flex-col gap-8 px-6 py-8 lg:flex-row lg:gap-10 lg:px-10">
      <aside className="lg:sticky lg:top-24 lg:h-[calc(100svh-8rem)] lg:w-56 lg:shrink-0 lg:overflow-y-auto">
        <nav className="flex flex-col gap-4">
          <p className="text-brand text-xs font-medium tracking-wide uppercase">
            Components
          </p>
          {catalog.map((category) => (
            <div key={category.id} className="flex flex-col gap-1">
              <p className="text-muted-foreground text-xs font-medium uppercase">
                {category.title}
              </p>
              {category.items.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name}`}
                  className="hover:text-primary rounded-md px-2 py-1 text-sm transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col gap-8">
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight">
            Component Registry
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            {totalCount} components distributed via the shadcn CLI. Install
            source into any React project — teams own the code.
          </p>
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search components..."
            className="max-w-md"
          />
        </header>

        <section className="bg-muted/50 flex flex-col gap-3 rounded-lg border p-4">
          <h2 className="text-sm font-medium">Quick start</h2>
          <pre className="bg-background overflow-x-auto rounded-md border p-3 text-sm">
            <code>{`npx shadcn@latest init
npx shadcn@latest add ashishsahu/ModernUIComponent/theme
npx shadcn@latest add ashishsahu/ModernUIComponent/utils
npx shadcn@latest add ashishsahu/ModernUIComponent/button`}</code>
          </pre>
        </section>

        <main className="flex flex-col gap-10 pb-16">
          {filteredCatalog.map((category) => (
            <section key={category.id} className="flex flex-col gap-4">
              <h2 className="border-b pb-2 text-xl font-semibold">
                {category.title}
              </h2>
              <div className="grid gap-4">
                {category.items.map((item) => (
                  <ComponentCard key={item.name} item={item} />
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  )
}
