"use client"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/registry/default/ui/button"

export function ToastWithTitlePreview() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}

