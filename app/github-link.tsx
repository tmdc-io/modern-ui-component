import { GithubIcon } from "lucide-react"
import Link from "next/link"

export const GITHUB_URL = "https://github.com/tmdc-io/modern-ui-component"

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
