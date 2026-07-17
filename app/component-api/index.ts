import { attributionsApi } from "@/app/component-api/attributions"
import { accordionApi } from "@/app/component-api/accordion"
import { alertApi } from "@/app/component-api/alert"
import { alertDialogApi } from "@/app/component-api/alert-dialog"
import { aspectRatioApi } from "@/app/component-api/aspect-ratio"
import { avatarApi } from "@/app/component-api/avatar"
import { badgeApi } from "@/app/component-api/badge"
import { breadcrumbApi } from "@/app/component-api/breadcrumb"
import { buttonApi } from "@/app/component-api/button"
import { buttonGroupApi } from "@/app/component-api/button-group"
import { calendarApi } from "@/app/component-api/calendar"
import { cardApi } from "@/app/component-api/card"
import { carouselApi } from "@/app/component-api/carousel"
import { chartApi } from "@/app/component-api/chart"
import { checkboxApi } from "@/app/component-api/checkbox"
import { collapsibleApi } from "@/app/component-api/collapsible"
import { comboboxApi } from "@/app/component-api/combobox"
import { commandApi } from "@/app/component-api/command"
import { contextMenuApi } from "@/app/component-api/context-menu"
import { applicationHeaderApi } from "@/app/component-api/application-header"
import { modelHealthRunsApi } from "@/app/component-api/model-health-runs"
import { modelsTableApi } from "@/app/component-api/models-table"
import { planCardApi } from "@/app/component-api/plan-card"
import { runCardApi } from "@/app/component-api/run-card"
import { runDurationApi } from "@/app/component-api/run-duration"
import { runMetricsApi } from "@/app/component-api/run-metrics"
import { dataosSidebarApi } from "@/app/component-api/dataos-sidebar"
import { dataProductCardApi } from "@/app/component-api/data-product-card"
import { dataProductTableApi } from "@/app/component-api/data-product-table"
import { dataTableApi } from "@/app/component-api/data-table"
import { datePickerApi } from "@/app/component-api/date-picker"
import { dialogApi } from "@/app/component-api/dialog"
import { directionApi } from "@/app/component-api/direction"
import { drawerApi } from "@/app/component-api/drawer"
import { dropdownMenuApi } from "@/app/component-api/dropdown-menu"
import { emptyApi } from "@/app/component-api/empty"
import { fieldApi } from "@/app/component-api/field"
import { formApi } from "@/app/component-api/form"
import { heroApi } from "@/app/component-api/hero"
import { hoverCardApi } from "@/app/component-api/hover-card"
import { i18nApi } from "@/app/component-api/i18n"
import { inputApi } from "@/app/component-api/input"
import { inputGroupApi } from "@/app/component-api/input-group"
import { inputOtpApi } from "@/app/component-api/input-otp"
import { itemApi } from "@/app/component-api/item"
import { kbdApi } from "@/app/component-api/kbd"
import { labelApi } from "@/app/component-api/label"
import { layoutApi } from "@/app/component-api/page-layout"
import { loginApi } from "@/app/component-api/login"
import { menubarApi } from "@/app/component-api/menubar"
import { nativeSelectApi } from "@/app/component-api/native-select"
import { navigationMenuApi } from "@/app/component-api/navigation-menu"
import { paginationApi } from "@/app/component-api/pagination"
import { popoverApi } from "@/app/component-api/popover"
import { progressApi } from "@/app/component-api/progress"
import { projectSetupApi } from "@/app/component-api/project-setup"
import { qualitySummaryCardApi } from "@/app/component-api/quality-summary-card"
import { radioGroupApi } from "@/app/component-api/radio-group"
import { resizableApi } from "@/app/component-api/resizable"
import { scrollAreaApi } from "@/app/component-api/scroll-area"
import { selectApi } from "@/app/component-api/select"
import { separatorApi } from "@/app/component-api/separator"
import { sheetApi } from "@/app/component-api/sheet"
import { sidebarApi } from "@/app/component-api/sidebar"
import { signupApi } from "@/app/component-api/signup"
import { skeletonApi } from "@/app/component-api/skeleton"
import { sliderApi } from "@/app/component-api/slider"
import { sonnerApi } from "@/app/component-api/sonner"
import { spinnerApi } from "@/app/component-api/spinner"
import { switchApi } from "@/app/component-api/switch"
import { tableApi } from "@/app/component-api/table"
import { tabsApi } from "@/app/component-api/tabs"
import { textareaApi } from "@/app/component-api/textarea"
import { themeApi } from "@/app/component-api/theme"
import { toastApi } from "@/app/component-api/toast"
import { toggleApi } from "@/app/component-api/toggle"
import { toggleGroupApi } from "@/app/component-api/toggle-group"
import { tooltipApi } from "@/app/component-api/tooltip"
import { typographyApi } from "@/app/component-api/typography"
import { utilsApi } from "@/app/component-api/utils"
import type { ComponentApiDoc } from "@/app/component-variants/types"

export const componentApiDocs: Record<string, ComponentApiDoc> = {
  accordion: accordionApi,
  attributions: attributionsApi,
  alert: alertApi,
  "alert-dialog": alertDialogApi,
  "aspect-ratio": aspectRatioApi,
  avatar: avatarApi,
  badge: badgeApi,
  breadcrumb: breadcrumbApi,
  button: buttonApi,
  "button-group": buttonGroupApi,
  calendar: calendarApi,
  card: cardApi,
  carousel: carouselApi,
  chart: chartApi,
  checkbox: checkboxApi,
  collapsible: collapsibleApi,
  combobox: comboboxApi,
  command: commandApi,
  "context-menu": contextMenuApi,
  "application-header": applicationHeaderApi,
  "model-health-runs": modelHealthRunsApi,
  "models-table": modelsTableApi,
  "plan-card": planCardApi,
  "run-card": runCardApi,
  "run-duration": runDurationApi,
  "run-metrics": runMetricsApi,
  "data-product-card": dataProductCardApi,
  "data-product-table": dataProductTableApi,
  "dataos-sidebar": dataosSidebarApi,
  "data-table": dataTableApi,
  "date-picker": datePickerApi,
  dialog: dialogApi,
  direction: directionApi,
  drawer: drawerApi,
  "dropdown-menu": dropdownMenuApi,
  empty: emptyApi,
  field: fieldApi,
  form: formApi,
  hero: heroApi,
  "hover-card": hoverCardApi,
  i18n: i18nApi,
  input: inputApi,
  "input-group": inputGroupApi,
  "input-otp": inputOtpApi,
  item: itemApi,
  kbd: kbdApi,
  label: labelApi,
  layout: layoutApi,
  login: loginApi,
  menubar: menubarApi,
  "native-select": nativeSelectApi,
  "navigation-menu": navigationMenuApi,
  pagination: paginationApi,
  popover: popoverApi,
  progress: progressApi,
  "project-setup": projectSetupApi,
  "quality-summary-card": qualitySummaryCardApi,
  "radio-group": radioGroupApi,
  resizable: resizableApi,
  "scroll-area": scrollAreaApi,
  select: selectApi,
  separator: separatorApi,
  sheet: sheetApi,
  sidebar: sidebarApi,
  signup: signupApi,
  skeleton: skeletonApi,
  slider: sliderApi,
  sonner: sonnerApi,
  spinner: spinnerApi,
  switch: switchApi,
  table: tableApi,
  tabs: tabsApi,
  textarea: textareaApi,
  theme: themeApi,
  toast: toastApi,
  toggle: toggleApi,
  "toggle-group": toggleGroupApi,
  tooltip: tooltipApi,
  typography: typographyApi,
  utils: utilsApi,
}

export function hasComponentApiDoc(name: string) {
  return name in componentApiDocs
}

export function getComponentApiDoc(name: string) {
  return componentApiDocs[name]
}
