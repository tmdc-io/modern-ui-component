"use client"

import * as React from "react"
import { ThemeProvider } from "next-themes"

import { ComponentSearchProvider } from "@/app/component-search"
import { OmniSearchRoot } from "@/app/omni-search"
import { LanguageProvider } from "@/hooks/use-translation"
import { Toaster as SonnerToaster } from "@/registry/default/ui/sonner"
import { Toaster as ToastToaster } from "@/registry/default/ui/toaster"
import { TooltipProvider } from "@/registry/default/ui/tooltip"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider defaultLanguage="en">
        <TooltipProvider>
          <ComponentSearchProvider>
            <OmniSearchRoot>
              {children}
              <SonnerToaster />
              <ToastToaster />
            </OmniSearchRoot>
          </ComponentSearchProvider>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
