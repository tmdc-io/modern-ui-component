"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  BoxesIcon,
  ChartColumnIcon,
  ClockIcon,
  DatabaseIcon,
  FileTextIcon,
  FormInputIcon,
  GitBranchIcon,
  GithubIcon,
  GlobeIcon,
  HistoryIcon,
  LanguagesIcon,
  LayoutGridIcon,
  LayoutTemplateIcon,
  MousePointerClickIcon,
  NavigationIcon,
  PaletteIcon,
  PanelTopIcon,
  SearchIcon,
  LayersIcon,
  MessageSquareIcon,
  WrenchIcon,
  XIcon,
  type LucideIcon,
} from "lucide-react"

import { catalog, type CatalogItem } from "@/app/catalog"
import { catalogItemTitle } from "@/app/catalog-item-titles"
import {
  getRegistryItemHref,
  markRegistryScrollTarget,
  MONOREPO_SECTION_ID,
  QUICK_START_SECTION_ID,
} from "@/app/component-registry-sidebar"
import {
  catalogCategoryTitle,
  docsMessages,
} from "@/app/docs-messages"
import { GITHUB_URL } from "@/app/github-link"
import { useTranslation } from "@/hooks/use-translation"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/registry/default/ui/command"

type OmniSearchContextValue = {
  setOpen: (open: boolean) => void
}

const OmniSearchContext = React.createContext<OmniSearchContextValue | null>(
  null
)

function useOmniSearch() {
  const context = React.useContext(OmniSearchContext)
  if (!context) {
    throw new Error("useOmniSearch must be used within OmniSearchRoot")
  }
  return context
}

const RECENT_STORAGE_KEY = "modernui-omni-search-recent"
const RECENT_LIMIT = 8

type RecentItem = {
  name: string
  title: string
}

const categoryIcons: Record<string, LucideIcon> = {
  foundation: FileTextIcon,
  actions: MousePointerClickIcon,
  forms: FormInputIcon,
  layout: LayoutTemplateIcon,
  navigation: NavigationIcon,
  overlays: PanelTopIcon,
  feedback: MessageSquareIcon,
  data: DatabaseIcon,
  "dataos-ui": BoxesIcon,
  blocks: LayersIcon,
}

function categoryIcon(categoryId: string): LucideIcon {
  if (categoryId.startsWith("charts-")) return ChartColumnIcon
  return categoryIcons[categoryId] ?? LayoutGridIcon
}

function readRecent(): RecentItem[] {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(RECENT_STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    return parsed
      .filter(
        (entry): entry is RecentItem =>
          Boolean(entry) &&
          typeof entry === "object" &&
          typeof (entry as RecentItem).name === "string" &&
          typeof (entry as RecentItem).title === "string"
      )
      .slice(0, RECENT_LIMIT)
  } catch {
    return []
  }
}

function writeRecent(items: RecentItem[]) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(
      RECENT_STORAGE_KEY,
      JSON.stringify(items.slice(0, RECENT_LIMIT))
    )
  } catch {
    // Ignore quota / private mode failures.
  }
}

function pushRecent(item: RecentItem) {
  const next = [
    item,
    ...readRecent().filter((entry) => entry.name !== item.name),
  ].slice(0, RECENT_LIMIT)
  writeRecent(next)
  return next
}

/** Substring match — cmdk's default fuzzy filter over-matches long labels. */
function omniSearchFilter(
  value: string,
  search: string,
  keywords?: string[]
): number {
  const query = search.trim().toLowerCase()
  if (!query) return 1
  const haystack = `${value} ${(keywords ?? []).join(" ")}`.toLowerCase()
  if (haystack.includes(query)) return 1
  // Prefer token matches (e.g. "data product" → each word).
  const tokens = query.split(/\s+/).filter(Boolean)
  if (tokens.length > 1 && tokens.every((token) => haystack.includes(token))) {
    return 0.8
  }
  return 0
}

function OmniSearchResultRow({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon
  title: string
  description?: string
}) {
  return (
    <div className="flex min-w-0 flex-1 items-start gap-2">
      <Icon className="text-muted-foreground mt-0.5 size-4 shrink-0" />
      <div className="min-w-0 flex-1">
        <span className="block truncate">{title}</span>
        {description ? (
          <span className="text-muted-foreground block truncate text-xs">
            {description}
          </span>
        ) : null}
      </div>
    </div>
  )
}

function OmniSearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { t, language } = useTranslation(docsMessages)
  const router = useRouter()
  const listRef = React.useRef<HTMLDivElement>(null)
  const [search, setSearch] = React.useState("")
  const [recent, setRecent] = React.useState<RecentItem[]>([])

  const hasQuery = search.trim().length > 0

  React.useEffect(() => {
    if (!open) {
      setSearch("")
      return
    }
    setRecent(readRecent())
  }, [open])

  React.useEffect(() => {
    const frame = requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: 0 })
    })
    return () => cancelAnimationFrame(frame)
  }, [search])

  const handleOpenChange = React.useCallback(
    (nextOpen: boolean) => {
      if (!nextOpen) {
        setSearch("")
      }
      onOpenChange(nextOpen)
    },
    [onOpenChange]
  )

  const navigateToRegistryItem = React.useCallback(
    (name: string, title?: string) => {
      const resolvedTitle =
        title ??
        catalog
          .flatMap((category) => category.items)
          .find((item) => item.name === name)?.title ??
        name
      setRecent(pushRecent({ name, title: resolvedTitle }))
      onOpenChange(false)
      const href = getRegistryItemHref(name, true)
      if (href.startsWith("/#")) {
        markRegistryScrollTarget(name)
      }
      router.push(href)
    },
    [onOpenChange, router]
  )

  const navigateToHome = React.useCallback(() => {
    onOpenChange(false)
    router.push("/")
  }, [onOpenChange, router])

  const navigateToSection = React.useCallback(
    (sectionId: string) => {
      onOpenChange(false)
      markRegistryScrollTarget(sectionId)
      router.push(`/#${sectionId}`)
    },
    [onOpenChange, router]
  )

  const itemKeywords = React.useCallback(
    (item: CatalogItem, categoryTitle: string) => {
      const localized = catalogItemTitle(item.name, item.title, language)
      // Keep keywords short — cmdk fuzzy-matches letters across long prose and over-matches.
      return [item.name, item.title, localized, categoryTitle]
    },
    [language]
  )

  const itemValue = React.useCallback(
    (item: CatalogItem, categoryTitle: string) => {
      const localized = catalogItemTitle(item.name, item.title, language)
      return `${item.title} ${localized} ${item.name} ${categoryTitle}`
    },
    [language]
  )

  const renderCatalogItem = (
    item: CatalogItem,
    categoryId: string,
    categoryTitle: string
  ) => {
    const Icon = categoryIcon(categoryId)
    const title = catalogItemTitle(item.name, item.title, language)
    return (
      <CommandItem
        key={`${categoryId}-${item.name}`}
        value={itemValue(item, categoryTitle)}
        keywords={itemKeywords(item, categoryTitle)}
        onSelect={() => navigateToRegistryItem(item.name, item.title)}
      >
        <OmniSearchResultRow
          icon={Icon}
          title={title}
          description={item.description}
        />
      </CommandItem>
    )
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={handleOpenChange}
      title={t["search.trigger"]}
      description={t["search.placeholder"]}
      showCloseButton={false}
      filter={omniSearchFilter}
      className="top-[12%] max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-0 sm:max-w-xl"
    >
      <div className="relative [&_[data-slot=command-input-wrapper]]:pr-10">
        <CommandInput
          placeholder={t["search.placeholder"]}
          value={search}
          onValueChange={setSearch}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground absolute top-1/2 right-2 z-10 size-7 -translate-y-1/2"
          onClick={() => handleOpenChange(false)}
          aria-label={t["search.close"]}
        >
          <XIcon className="size-4" />
        </Button>
      </div>
      <CommandList ref={listRef} className="max-h-[min(420px,50vh)]">
        <CommandEmpty>{t["search.empty"]}</CommandEmpty>

        {!hasQuery && recent.length > 0 ? (
          <>
            <CommandGroup heading={t["search.groupRecent"]}>
              {recent.map((entry) => {
                const category =
                  catalog.find((group) =>
                    group.items.some((item) => item.name === entry.name)
                  ) ?? null
                const Icon = category
                  ? categoryIcon(category.id)
                  : HistoryIcon
                const title = catalogItemTitle(
                  entry.name,
                  entry.title,
                  language
                )
                const description = category?.items.find(
                  (item) => item.name === entry.name
                )?.description
                return (
                  <CommandItem
                    key={`recent-${entry.name}`}
                    value={`recent ${entry.title} ${entry.name}`}
                    keywords={[entry.title, entry.name, title]}
                    onSelect={() =>
                      navigateToRegistryItem(entry.name, entry.title)
                    }
                  >
                    <OmniSearchResultRow
                      icon={Icon}
                      title={title}
                      description={description}
                    />
                  </CommandItem>
                )
              })}
            </CommandGroup>
            <CommandSeparator />
          </>
        ) : null}

        {hasQuery
          ? catalog.map((category) => {
              const categoryTitle = catalogCategoryTitle(
                category.id,
                category.title,
                t
              )
              return (
                <CommandGroup key={category.id} heading={categoryTitle}>
                  {category.items.map((item) =>
                    renderCatalogItem(item, category.id, categoryTitle)
                  )}
                </CommandGroup>
              )
            })
          : null}

        {hasQuery ? <CommandSeparator /> : null}

        <CommandGroup heading={t["search.groupDocs"]}>
          <CommandItem
            value="Quick Start getting started onboarding"
            keywords={["quick start", "inicio rápido", "onboarding"]}
            onSelect={() => navigateToSection(QUICK_START_SECTION_ID)}
          >
            <OmniSearchResultRow
              icon={ClockIcon}
              title={t["search.docQuickStart"]}
            />
          </CommandItem>
          <CommandItem
            value="Getting Started project setup"
            keywords={["project-setup", "primeros pasos"]}
            onSelect={() => navigateToRegistryItem("project-setup")}
          >
            <OmniSearchResultRow
              icon={FileTextIcon}
              title={t["search.docGettingStarted"]}
            />
          </CommandItem>
          <CommandItem
            value="Components catalog home"
            keywords={["registry", "componentes"]}
            onSelect={navigateToHome}
          >
            <OmniSearchResultRow
              icon={LayoutGridIcon}
              title={t["search.docComponents"]}
            />
          </CommandItem>
          <CommandItem
            value="Theming theme design tokens"
            keywords={["theme", "temas", "tokens"]}
            onSelect={() => navigateToRegistryItem("theme")}
          >
            <OmniSearchResultRow
              icon={PaletteIcon}
              title={t["search.docTheming"]}
            />
          </CommandItem>
          <CommandItem
            value="Utils cn classname helper"
            keywords={["utils", "cn", "utilidades"]}
            onSelect={() => navigateToRegistryItem("utils")}
          >
            <OmniSearchResultRow
              icon={WrenchIcon}
              title={t["search.docUtils"]}
            />
          </CommandItem>
          <CommandItem
            value="i18n internationalization language spanish english"
            keywords={["i18n", "translation", "idioma"]}
            onSelect={() => navigateToRegistryItem("i18n")}
          >
            <OmniSearchResultRow
              icon={LanguagesIcon}
              title={t["search.docI18n"]}
            />
          </CommandItem>
          <CommandItem
            value="Attributions licenses credits open source"
            keywords={["attributions", "licenses", "atribuciones"]}
            onSelect={() => navigateToRegistryItem("attributions")}
          >
            <OmniSearchResultRow
              icon={GlobeIcon}
              title={t["search.docAttributions"]}
            />
          </CommandItem>
          <CommandItem
            value="DataOS UI Components hero data product"
            keywords={["dataos", "data product", "hero"]}
            onSelect={() => navigateToRegistryItem("hero")}
          >
            <OmniSearchResultRow
              icon={BoxesIcon}
              title={t["search.docDataOs"]}
            />
          </CommandItem>
          <CommandItem
            value="Monorepo installation pnpm turbo workspaces"
            keywords={["monorepo", "pnpm", "turbo"]}
            onSelect={() => navigateToSection(MONOREPO_SECTION_ID)}
          >
            <OmniSearchResultRow
              icon={GitBranchIcon}
              title={t["search.docMonorepo"]}
            />
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading={t["search.groupLinks"]}>
          <CommandItem
            value="GitHub Repository"
            keywords={["github", "source", "repo"]}
            onSelect={() => {
              onOpenChange(false)
              window.open(GITHUB_URL, "_blank", "noopener,noreferrer")
            }}
          >
            <OmniSearchResultRow
              icon={GithubIcon}
              title={t["search.docGitHub"]}
            />
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}

export function OmniSearchRoot({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((current) => !current)
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  const value = React.useMemo(() => ({ setOpen }), [])

  return (
    <OmniSearchContext.Provider value={value}>
      {children}
      <OmniSearchDialog open={open} onOpenChange={setOpen} />
    </OmniSearchContext.Provider>
  )
}

export function OmniSearchTrigger({ className }: { className?: string }) {
  const { t } = useTranslation(docsMessages)
  const { setOpen } = useOmniSearch()

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className={cn(
        "border-input bg-muted/40 text-muted-foreground hover:bg-muted/60 inline-flex h-9 w-full items-center gap-2 rounded-md border px-3 text-sm transition-colors",
        className
      )}
      aria-label={t["search.open"]}
    >
      <SearchIcon className="size-4 shrink-0 opacity-60" />
      <span className="flex-1 truncate text-left">{t["search.placeholder"]}</span>
      <kbd className="bg-background text-muted-foreground pointer-events-none hidden h-5 shrink-0 items-center gap-0.5 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 sm:inline-flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </button>
  )
}
