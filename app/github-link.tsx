import { GithubIcon } from "lucide-react"
import Link from "next/link"

export const GITHUB_URL = "https://github.com/tmdc-io/modern-ui-component"

/** Distribute / publish guides in the repo `docs/` folder. */
export const GITHUB_DOCS = {
  consumer: `${GITHUB_URL}/blob/main/docs/CONSUMER.md`,
  i18n: `${GITHUB_URL}/blob/main/docs/I18N.md`,
  github: `${GITHUB_URL}/blob/main/docs/GITHUB.md`,
  hosted: `${GITHUB_URL}/blob/main/docs/HOSTED.md`,
} as const

export function GitHubLink({ className }: { className?: string }) {
  return (
    <Link
      href={GITHUB_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <GithubIcon className="size-4" />
      GitHub
    </Link>
  )
}
