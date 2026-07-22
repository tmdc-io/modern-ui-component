"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Badge } from "@/registry/default/ui/badge"
import { Button } from "@/registry/default/ui/button"

export function UtilsOverviewPreview() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-4 text-left text-sm">
      <p className="text-muted-foreground leading-relaxed">
        <code className="text-foreground text-xs">cn()</code> combines{" "}
        <Badge variant="secondary">clsx</Badge> for conditional class lists with{" "}
        <Badge variant="secondary">tailwind-merge</Badge> to resolve conflicting
        Tailwind utilities. Every ModernUI primitive uses it for{" "}
        <code className="text-foreground text-xs">className</code> overrides.
      </p>
      <div className="bg-muted/50 flex flex-col gap-2 rounded-md border p-3 font-mono text-xs">
        <span className="text-muted-foreground">{"// Installed to"}</span>
        <span>lib/utils.ts</span>
        <span className="text-muted-foreground">{"// Import as"}</span>
        <span>import {"{ cn }"} from &quot;@/lib/utils&quot;</span>
      </div>
    </div>
  )
}

export function UtilsBasicPreview() {
  return (
    <div className="flex w-full max-w-md flex-col items-start gap-4 text-left">
      <div
        className={cn(
          "flex items-center gap-2 rounded-md border bg-card px-4 py-3 text-sm"
        )}
      >
        <span className="bg-primary size-2 rounded-full" />
        <span>Always applied base classes</span>
      </div>
      <code className="text-muted-foreground block w-full rounded-md border bg-muted/50 p-3 font-mono text-xs">
        cn(&quot;flex items-center gap-2 rounded-md border...&quot;)
      </code>
    </div>
  )
}

export function UtilsConditionalPreview() {
  const [active, setActive] = React.useState(false)
  const [disabled, setDisabled] = React.useState(false)

  return (
    <div className="flex w-full max-w-md flex-col items-start gap-4 text-left">
      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          variant={active ? "default" : "outline"}
          onClick={() => setActive((value) => !value)}
        >
          Toggle active
        </Button>
        <Button
          size="sm"
          variant={disabled ? "default" : "outline"}
          onClick={() => setDisabled((value) => !value)}
        >
          Toggle disabled
        </Button>
      </div>
      <button
        type="button"
        disabled={disabled}
        className={cn(
          "rounded-md border px-4 py-2 text-sm transition-colors",
          active && "bg-primary text-primary-foreground border-primary",
          disabled && "pointer-events-none opacity-50"
        )}
      >
        {active ? "Active" : "Inactive"}
      </button>
      <code className="text-muted-foreground block w-full rounded-md border bg-muted/50 p-3 font-mono text-xs leading-relaxed">
        cn(
        <br />
        {"  "}&quot;rounded-md border px-4 py-2...&quot;,
        <br />
        {"  "}
        {active ? "true" : "false"} &amp;&amp; &quot;bg-primary...&quot;,
        <br />
        {"  "}
        {disabled ? "true" : "false"} &amp;&amp; &quot;opacity-50&quot;
        <br />
        )
      </code>
    </div>
  )
}

export function UtilsMergePreview() {
  const wide = cn("rounded-md border bg-muted px-4 py-3 text-sm", "px-2")
  const emphasis = cn(
    "rounded-md border px-4 py-3 text-sm text-muted-foreground",
    true && "text-destructive"
  )

  return (
    <div className="flex w-full max-w-md flex-col items-start gap-4 text-left">
      <div className="flex w-full flex-col gap-3">
        <div>
          <p className="text-muted-foreground mb-2 text-xs">
            cn(&quot;px-4&quot;, &quot;px-2&quot;) → last padding wins
          </p>
          <div className={wide}>Narrower padding from merged classes</div>
        </div>
        <div>
          <p className="text-muted-foreground mb-2 text-xs">
            cn(&quot;text-muted-foreground&quot;, true &amp;&amp;
            &quot;text-destructive&quot;)
          </p>
          <div className={emphasis}>Destructive overrides muted text</div>
        </div>
      </div>
    </div>
  )
}

export function UtilsComponentPreview() {
  const [variant, setVariant] = React.useState<"default" | "destructive">(
    "default"
  )

  return (
    <div className="flex w-full max-w-md flex-col items-start gap-4 text-left">
      <div className="flex gap-2">
        <Button
          size="sm"
          variant={variant === "default" ? "default" : "outline"}
          onClick={() => setVariant("default")}
        >
          Default
        </Button>
        <Button
          size="sm"
          variant={variant === "destructive" ? "destructive" : "outline"}
          onClick={() => setVariant("destructive")}
        >
          Destructive
        </Button>
      </div>
      <div
        className={cn(
          "w-full rounded-lg border px-4 py-3 text-sm",
          variant === "destructive" &&
            "border-destructive/50 bg-destructive/10 text-destructive"
        )}
      >
        Alert content with variant-driven classes via cn().
      </div>
    </div>
  )
}

/** Compact preview for the registry homepage card at /#utils */
export function UtilsPreview() {
  const [highlight, setHighlight] = React.useState(true)

  return (
    <div className="flex w-full flex-col gap-4 text-left">
      <p className="text-muted-foreground text-sm">
        Merge conditional Tailwind classes without conflicts.
      </p>
      <button
        type="button"
        onClick={() => setHighlight((value) => !value)}
        className={cn(
          "rounded-md border bg-card px-4 py-3 text-left text-sm transition-colors",
          highlight && "ring-2 ring-primary/30"
        )}
      >
        <span className="font-mono text-xs">
          cn(&quot;rounded-md border...&quot;, highlight &amp;&amp;
          &quot;ring-2&quot;)
        </span>
      </button>
      <p className="text-muted-foreground text-xs">
        Open the utils docs for merge rules, component patterns, and API
        reference.
      </p>
    </div>
  )
}
