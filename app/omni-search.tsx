"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  CircleIcon,
  FileTextIcon,
  GitBranchIcon,
  GithubIcon,
  LayoutGridIcon,
  PaletteIcon,
  SearchIcon,
  WrenchIcon,
  XIcon,
} from "lucide-react"

import { allComponents } from "@/app/catalog"
import { catalogItemTitle } from "@/app/catalog-item-titles"
import {
  getRegistryItemHref,
  markRegistryScrollTarget,
  MONOREPO_SECTION_ID,
} from "@/app/component-registry-sidebar"
import { docsMessages } from "@/app/docs-messages"
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

const searchableComponents = [...allComponents].sort((a, b) =>
  a.title.localeCompare(b.title)
)

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

  React.useEffect(() => {
    if (!open) {
      setSearch("")
    }
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
    (name: string) => {
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

  return (
    <CommandDialog
      open={open}
      onOpenChange={handleOpenChange}
      title={t["search.trigger"]}
      description={t["search.placeholder"]}
      showCloseButton={false}
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
        <CommandGroup heading={t["search.groupComponents"]}>
          {searchableComponents.map((item) => (
            <CommandItem
              key={item.name}
              value={`${item.title} ${item.name}`}
              keywords={[item.description]}
              onSelect={() => navigateToRegistryItem(item.name)}
            >
              <CircleIcon />
              <span>{catalogItemTitle(item.name, item.title, language)}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={t["search.groupDocs"]}>
          <CommandItem
            value="Getting Started project setup"
            onSelect={() => navigateToRegistryItem("project-setup")}
          >
            <FileTextIcon />
            <span>{t["search.docGettingStarted"]}</span>
          </CommandItem>
          <CommandItem value="Components catalog" onSelect={navigateToHome}>
            <LayoutGridIcon />
            <span>{t["search.docComponents"]}</span>
          </CommandItem>
          <CommandItem
            value="Theming theme design tokens"
            onSelect={() => navigateToRegistryItem("theme")}
          >
            <PaletteIcon />
            <span>{t["search.docTheming"]}</span>
          </CommandItem>
          <CommandItem
            value="Utils cn classname helper"
            onSelect={() => navigateToRegistryItem("utils")}
          >
            <WrenchIcon />
            <span>{t["search.docUtils"]}</span>
          </CommandItem>
          <CommandItem
            value="Monorepo installation pnpm turbo workspaces"
            onSelect={() => {
              onOpenChange(false)
              markRegistryScrollTarget(MONOREPO_SECTION_ID)
              router.push(`/#${MONOREPO_SECTION_ID}`)
            }}
          >
            <GitBranchIcon />
            <span>{t["search.docMonorepo"]}</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={t["search.groupLinks"]}>
          <CommandItem
            value="GitHub Repository"
            onSelect={() => {
              onOpenChange(false)
              window.open(GITHUB_URL, "_blank", "noopener,noreferrer")
            }}
          >
            <GithubIcon />
            <span>{t["search.docGitHub"]}</span>
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
