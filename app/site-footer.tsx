import Link from "next/link"

import { GitHubLink } from "@/app/github-link"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="flex w-full flex-col gap-6 px-6 py-8 lg:px-10">
        <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:items-start">
          <div className="flex max-w-xl flex-col gap-2 text-center sm:text-left">
            <p className="text-muted-foreground text-sm">
              © 2026 The Modern Data Company. All rights reserved.
            </p>
            <p className="text-muted-foreground/80 text-xs leading-relaxed">
              All images, logos, icons, and other media displayed on this site
              are the property of their respective owners and are used for
              documentation and demonstration purposes only.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-6">
            <Link
              href="/components/attributions"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Attributions
            </Link>
            <a
              href="#top"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Back to top
            </a>
            <GitHubLink className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  )
}
