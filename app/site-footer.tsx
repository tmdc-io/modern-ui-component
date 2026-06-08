import { GitHubLink } from "@/app/github-link"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="flex w-full flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-10">
        <p className="text-muted-foreground text-sm">
          © 2026 The Modern Data Company. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#top"
            className="text-muted-foreground hover:text-primary text-sm transition-colors"
          >
            Back to top
          </a>
          <GitHubLink className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm transition-colors" />
        </div>
      </div>
    </footer>
  )
}
