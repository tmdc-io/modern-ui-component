"use client"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/registry/default/ui/button"
import { ToastAction } from "@/registry/default/ui/toast"

export function ToastDemoPreview() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        })
      }}
    >
      Add to calendar
    </Button>
  )
}

export default ToastDemoPreview
