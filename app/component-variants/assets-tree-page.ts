import {
  AssetsTreeDataDrivenPreview,
  AssetsTreeDeepPreview,
  AssetsTreeDefaultPreview,
  AssetsTreeSearchPreview,
} from "@/app/component-examples/assets-tree-usage"
import { assetsTreeCodes } from "@/app/component-examples/assets-tree-codes"
import type { ComponentVariantPage } from "@/app/component-variants/types"

export const assetsTreePage: ComponentVariantPage = {
  name: "assets-tree",
  title: "Assets Tree",
  description:
    "DataOS assets browser with search, filters, verified status, teal selection, and deep nested categories.",
  install: assetsTreeCodes.install,
  intro:
    "A composed Assets panel for DataOS product shells — right-aligned category counts, chevrons, verified shields, and a rounded teal selected pill with a rounded dark-teal accent bar.",
  variants: [],
  sections: [
    {
      id: "preview",
      variants: [
        {
          id: "default",
          title: "Default",
          description:
            "Assets header, search, filter, and Inputs expanded with CUSTOMER_MASTER selected.",
          body: "Selected leaves use a rounded teal pill (teal-bg-2) with a rounded dark-teal accent bar. Counts sit on the right before the chevron. Open the code drawer for shell wiring, selection callbacks, and optional detail mirroring.",
          Preview: AssetsTreeDefaultPreview,
          code: assetsTreeCodes.default,
          tall: true,
        },
      ],
    },
    {
      id: "deep",
      title: "Deep nesting",
      description: "Expand multiple branches across five hierarchy levels.",
      variants: [
        {
          id: "deep",
          title: "Five levels",
          description:
            "Pass deepAssetsTreeData and expand Batch + Stream paths under Inputs.",
          body: "Hierarchy: Inputs → Batch → CRM → Profiles → leaf (and Stream → Web → Events). defaultExpandedIds lists every ancestor so both branches open on first paint. Selected CUSTOMER_MASTER keeps the rounded pill style. See the drawer for the full id map.",
          Preview: AssetsTreeDeepPreview,
          code: assetsTreeCodes.deep,
          tall: true,
        },
      ],
    },
    {
      id: "data-driven",
      title: "Data-driven",
      description: "Map an API payload into AssetsTreeItem[] and drive a detail panel.",
      variants: [
        {
          id: "data-driven",
          title: "From API data",
          description:
            "Transform nested API nodes into tree items, control selectedId, and mirror selection in a detail drawer.",
          body: "mapAssets() maps key→id, label→name, assetCount→count (right-aligned), isVerified→verified, nodes→children. Selection is controlled so you can open a detail drawer beside the rail. The drawer sample includes the mapper, payload, and a companion detail section.",
          Preview: AssetsTreeDataDrivenPreview,
          code: assetsTreeCodes.dataDriven,
          tall: true,
        },
      ],
    },
    {
      id: "search",
      title: "Search",
      description: "Filter the tree and track selection.",
      variants: [
        {
          id: "search",
          title: "Filtered",
          description:
            "Controlled searchValue filters by name and expands matching branches.",
          body: "Wire searchValue / onSearchChange for a controlled query. onSelectChange returns the full AssetsTreeItem for the clicked leaf (rounded selected state). Category clicks only toggle expand/collapse.",
          Preview: AssetsTreeSearchPreview,
          code: assetsTreeCodes.search,
          tall: true,
        },
      ],
    },
  ],
}
