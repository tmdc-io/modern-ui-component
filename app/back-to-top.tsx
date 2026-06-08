"use client"

import * as React from "react"
import { ArrowUpIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export function BackToTop() {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed right-6 bottom-6 z-50 size-10 rounded-full shadow-md lg:right-10 lg:bottom-8"
    >
      <ArrowUpIcon className="size-4" />
    </Button>
  )
}
