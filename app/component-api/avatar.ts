import type { ComponentApiDoc } from "@/app/component-variants/types"

export const avatarApi: ComponentApiDoc = {
  features: [
    "ModernUI Avatar component.",
  ],
  usage: {
    import: "import { Avatar } from \"@/components/ui/avatar\"",
    example: "<Avatar />",
  },
  apiReference: {
    title: "Avatar Components",
    props: [
      {
        prop: "AvatarImage",
        type: "component",
        description: "AvatarImage subcomponent exported from this module.",
      },
      {
        prop: "AvatarFallback",
        type: "component",
        description: "AvatarFallback subcomponent exported from this module.",
      },
      {
        prop: "AvatarBadge",
        type: "component",
        description: "AvatarBadge subcomponent exported from this module.",
      },
      {
        prop: "AvatarGroup",
        type: "component",
        description: "AvatarGroup subcomponent exported from this module.",
      },
      {
        prop: "AvatarGroupCount",
        type: "component",
        description: "AvatarGroupCount subcomponent exported from this module.",
      },
      {
        prop: "size",
        type: "\"default\" | \"sm\" | \"lg\"",
        default: "\"default\"",
        description: "size configuration option.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
    footnote: "Additionally, Avatar forwards props to the underlying Radix UI primitive.",
  },
}
