import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"

import { BackToTop } from "@/app/back-to-top"
import { Providers } from "@/app/providers"
import { SiteFooter } from "@/app/site-footer"
import { SiteHeader } from "@/app/site-header"
import {
  DEFAULT_TEXT_SIZE_INDEX,
  TEXT_SIZE_STEPS,
  TEXT_SIZE_STORAGE_KEY,
} from "@/app/text-size"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ModernUI Component Registry",
  description:
    "A shadcn-extended React UI library with 60+ components distributed via the shadcn CLI.",
}

const textSizeInitScript = `
(function () {
  var steps = ${JSON.stringify(TEXT_SIZE_STEPS)};
  var fallback = ${DEFAULT_TEXT_SIZE_INDEX};
  try {
    var stored = localStorage.getItem(${JSON.stringify(TEXT_SIZE_STORAGE_KEY)});
    var index = stored === null ? fallback : parseInt(stored, 10);
    if (index < 0 || index >= steps.length || Number.isNaN(index)) index = fallback;
    document.documentElement.style.fontSize = steps[index] * 100 + "%";
    document.documentElement.dataset.textScale = String(index);
  } catch (e) {
    document.documentElement.style.fontSize = steps[fallback] * 100 + "%";
    document.documentElement.dataset.textScale = String(fallback);
  }
})();
`.trim()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Script
          id="text-size-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: textSizeInitScript }}
        />
        <Providers>
          <div className="flex min-h-svh flex-col">
            <div id="top" className="scroll-mt-0" />
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
            <BackToTop />
          </div>
        </Providers>
      </body>
    </html>
  )
}
