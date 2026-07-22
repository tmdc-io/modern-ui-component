"use client"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/registry/default/ui/button"

export function ToastSimplePreview() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: "Your message has been sent.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}

export default ToastSimplePreview
