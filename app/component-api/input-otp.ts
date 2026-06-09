import type { ComponentApiDoc } from "@/app/component-variants/types"

export const inputOtpApi: ComponentApiDoc = {
  features: [
    "ModernUI Input Otp component.",
  ],
  usage: {
    import: "import { InputOTP } from \"@/components/ui/input-otp\"",
    example: "<InputOTP />",
  },
  apiReference: {
    title: "InputOtp Components",
    props: [
      {
        prop: "InputOTPGroup",
        type: "component",
        description: "InputOTPGroup subcomponent exported from this module.",
      },
      {
        prop: "InputOTPSlot",
        type: "component",
        description: "InputOTPSlot subcomponent exported from this module.",
      },
      {
        prop: "InputOTPSeparator",
        type: "component",
        description: "InputOTPSeparator subcomponent exported from this module.",
      },
      {
        prop: "containerClassName",
        type: "string",
        description: "containerClassName configuration option.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, InputOTP forwards props to the underlying Radix UI primitive.",
  },
}
