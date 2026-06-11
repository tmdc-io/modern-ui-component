import Link from "next/link"
import type { ReactNode } from "react"

const LINK_PATTERN =
  /(\/components\/[\w#./-]+|https?:\/\/[^\s]+|#[a-z][\w-]*)/gi

const TRAILING_PUNCTUATION = /[.,;:!?]+$/

const linkClassName =
  "text-primary font-medium underline underline-offset-4 hover:text-primary/80"

function splitHref(value: string) {
  const trailing = value.match(TRAILING_PUNCTUATION)
  if (!trailing) {
    return { href: value, suffix: "" }
  }

  return {
    href: value.slice(0, -trailing[0].length),
    suffix: trailing[0],
  }
}

function renderLink(href: string, key: number) {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return (
      <a
        key={key}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        {href}
      </a>
    )
  }

  if (href.startsWith("/")) {
    return (
      <Link key={key} href={href} className={linkClassName}>
        {href}
      </Link>
    )
  }

  return (
    <a key={key} href={href} className={linkClassName}>
      {href}
    </a>
  )
}

export function LinkifyText({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let key = 0

  for (const match of children.matchAll(LINK_PATTERN)) {
    const index = match.index ?? 0

    if (index > lastIndex) {
      nodes.push(children.slice(lastIndex, index))
    }

    const { href, suffix } = splitHref(match[0])
    nodes.push(renderLink(href, key++))
    if (suffix) {
      nodes.push(suffix)
    }

    lastIndex = index + match[0].length
  }

  if (lastIndex < children.length) {
    nodes.push(children.slice(lastIndex))
  }

  if (nodes.length === 0) {
    return <>{children}</>
  }

  if (className) {
    return <span className={className}>{nodes}</span>
  }

  return <>{nodes}</>
}
