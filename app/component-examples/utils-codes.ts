export const utilsCodes = {
  install: `npx shadcn@latest add tmdc-io/modern-ui-component/utils`,

  source: `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`,

  basic: `import { cn } from "@/lib/utils"

<div className={cn("flex items-center gap-2", className)}>
  {children}
</div>`,

  conditional: `import { cn } from "@/lib/utils"

<button
  className={cn(
    "rounded-md border px-4 py-2 text-sm transition-colors",
    isActive && "bg-primary text-primary-foreground border-primary",
    disabled && "pointer-events-none opacity-50"
  )}
>
  Save
</button>`,

  merge: `import { cn } from "@/lib/utils"

// tailwind-merge keeps the last conflicting utility
cn("px-4 py-2 text-sm", "px-2")
// → "py-2 text-sm px-2"

cn("text-muted-foreground", isError && "text-destructive")
// → destructive wins over muted when isError is true`,

  component: `import { cn } from "@/lib/utils"

type AlertProps = React.ComponentProps<"div"> & {
  variant?: "default" | "destructive"
}

function Alert({ className, variant = "default", ...props }: AlertProps) {
  return (
    <div
      className={cn(
        "rounded-lg border px-4 py-3 text-sm",
        variant === "destructive" &&
          "border-destructive/50 bg-destructive/10 text-destructive",
        className
      )}
      {...props}
    />
  )
}`,
}
