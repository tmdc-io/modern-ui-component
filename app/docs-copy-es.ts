import { docsCopyEsGenerated } from "@/app/docs-copy-es.generated"

/** Curated Spanish overrides (prefer these over generated). */
export const docsCopyEs: Record<string, string> = {
  // Shared API table
  "Component Props": "Props del componente",

  // ── Hero page ──────────────────────────────────────────────
  "DataOS data product hero header with quality card, metadata columns, jump navigation, and follow / explore actions.":
    "Encabezado hero de producto de datos DataOS con tarjeta de calidad, columnas de metadatos, navegación rápida y acciones seguir / explorar.",
  "One prop-driven header that scales from a full data-product overview down to a compact sticky bar. Sections render only when their data is provided.":
    "Un encabezado basado en props que escala desde la vista completa del producto de datos hasta una barra fija compacta. Las secciones solo se muestran cuando hay datos.",
  "Full size": "Tamaño completo",
  "Complete data product header — title, subtitle, description, Source / Links / Governance metadata, Data Quality card, and jump navigation.":
    "Encabezado completo de producto de datos — título, subtítulo, descripción, metadatos de Origen / Enlaces / Gobernanza, tarjeta de calidad y navegación rápida.",
  "Use on a data product landing page. Pass quality and metaColumns for the right-side card and metadata grid; both only render in the full variant.":
    "Úsalo en la página de un producto de datos. Pasa quality y metaColumns para la tarjeta y la cuadrícula de metadatos; ambas solo aparecen en la variante full.",
  "Sticky / scrolled": "Fijo / al desplazarse",
  "Compact bar that appears when the page is scrolled — icon, title, and actions only.":
    "Barra compacta que aparece al desplazarse — solo icono, título y acciones.",
  "Render inside a sticky container and swap in the sticky variant once the full header scrolls out of view.":
    "Renderízalo en un contenedor sticky y cambia a la variante sticky cuando el encabezado completo salga de la vista.",
  "Sticky bar": "Barra fija",
  "Condensed header for scrolled state.":
    "Encabezado condensado para el estado al desplazarse.",
  "Internal page": "Página interna",
  "Trimmed header for inner pages — no metadata grid or quality card.":
    "Encabezado reducido para páginas internas — sin cuadrícula de metadatos ni tarjeta de calidad.",
  "The internal variant hides Source / Links / Governance and the quality card. Add description and jumpItems as each page needs them.":
    "La variante internal oculta Origen / Enlaces / Gobernanza y la tarjeta de calidad. Añade description y jumpItems según cada página.",
  "1. Title & subtitle": "1. Título y subtítulo",
  "Icon, title, subtitle, and actions.": "Icono, título, subtítulo y acciones.",
  "2. With jump navigation": "2. Con navegación rápida",
  "Adds the Jump to tab bar under the header.":
    "Añade la barra Ir a debajo del encabezado.",
  "3. With description": "3. Con descripción",
  "Adds a truncated description with a View more action.":
    "Añade una descripción truncada con la acción Ver más.",
  "Complete data product header with quality card.":
    "Encabezado completo de producto de datos con tarjeta de calidad.",
  "Compact scrolled-state bar.": "Barra compacta del estado al desplazarse.",
  "Internal + jump nav": "Interna + navegación",
  "Internal header with the Jump to tab bar.":
    "Encabezado interno con la barra Ir a.",
  "Internal + description": "Interna + descripción",
  "Internal header with description and View more.":
    "Encabezado interno con descripción y Ver más.",
  "Prop-driven data product header with full, internal, and sticky variants.":
    "Encabezado de producto de datos basado en props con variantes full, internal y sticky.",
  "Optional Data Quality card with a percentage donut and pass/warn/fail dimension grid.":
    "Tarjeta opcional de calidad de datos con dona porcentual y cuadrícula de dimensiones pass/warn/fail.",
  "Source / Links / Governance metadata columns and a Jump to navigation bar.":
    "Columnas de metadatos Origen / Enlaces / Gobernanza y barra de navegación Ir a.",
  "Follow toggle and an Explore split button with an optional dropdown menu.":
    "Interruptor Seguir y botón dividido Explorar con menú desplegable opcional.",

  // Hero API
  "Hero Props": "Props de Hero",
  "Data product name shown in the serif header.":
    "Nombre del producto de datos en el encabezado serif.",
  "Secondary label under the title (hidden in sticky variant).":
    "Etiqueta secundaria bajo el título (oculta en la variante sticky).",
  "Optional icon rendered before the subtitle.":
    "Icono opcional antes del subtítulo.",
  "Overview copy, line-clamped to two lines with a View more action.":
    "Texto de resumen, limitado a dos líneas con acción Ver más.",
  "Icon rendered in the leading tile. Defaults to a box icon.":
    "Icono en el mosaico inicial. Por defecto un icono de caja.",
  "full shows metadata + quality card; internal trims them; sticky is a compact bar.":
    "full muestra metadatos + tarjeta de calidad; internal los omite; sticky es una barra compacta.",
  "Data Quality card data (percentage, passed, failed, dimensions, href). Full variant only.":
    "Datos de la tarjeta de calidad (porcentaje, aprobadas, fallidas, dimensiones, href). Solo variante full.",
  "Source / Links / Governance columns of label-value rows. Full variant only.":
    "Columnas Origen / Enlaces / Gobernanza de filas etiqueta-valor. Solo variante full.",
  "Jump to navigation items with optional icon and dropdown affordance.":
    "Elementos de navegación Ir a con icono opcional y menú desplegable.",
  "Toggle the description block without removing the prop.":
    "Muestra u oculta el bloque de descripción sin quitar la prop.",
  "Controlled follow state; label switches to Following.":
    "Estado controlado de seguir; la etiqueta cambia a Siguiendo.",
  "Fires with the next follow state on click.":
    "Se dispara con el siguiente estado de seguir al hacer clic.",
  "Primary action button label.": "Etiqueta del botón de acción principal.",
  "Primary action click handler.": "Manejador de clic de la acción principal.",
  "Dropdown menu items for the Explore split button. Renders a chevron menu when provided.":
    "Ítems del menú del botón dividido Explorar. Muestra un chevron cuando se proporciona.",
  "Also exported: HeroQualityCard, HeroJumpBar, HeroMemberStack for composing custom layouts. Types: HeroQuality, HeroMetaColumn, HeroMetaItem, HeroJumpItem, HeroMember.":
    "También exportados: HeroQualityCard, HeroJumpBar, HeroMemberStack para layouts personalizados. Tipos: HeroQuality, HeroMetaColumn, HeroMetaItem, HeroJumpItem, HeroMember.",
  "Single variant prop": "Una sola prop variant",
  "Full, internal, and sticky headers from one component":
    "Encabezados full, internal y sticky desde un solo componente",
  "Data-conditional sections": "Secciones condicionadas por datos",
  "Description, metadata, quality, and jump bar render only when passed":
    "Descripción, metadatos, calidad y barra Ir a solo se muestran si se pasan",
  "Quality donut": "Dona de calidad",
  "Percentage ring with pass/warn/fail dimension grid":
    "Anillo porcentual con cuadrícula de dimensiones pass/warn/fail",
  "Explore split button": "Botón dividido Explorar",
  "Primary action with an optional dropdown menu":
    "Acción principal con menú desplegable opcional",

  // ── Models Table page ──────────────────────────────────────
  "Pipeline models table with expandable error logs, quality rules, and status variants.":
    "Tabla de modelos de pipeline con logs de error expandibles, reglas de calidad y variantes de estado.",
  "Browse dbt-style models with fail, warn, pass, and not-eval states. Error rows show a red edge indicator and dashes for runtime/rows. Expand rows to reveal warehouse error logs or nested quality rule tables.":
    "Explora modelos estilo dbt con estados fail, warn, pass y not-eval. Las filas de error muestran un borde rojo y guiones en runtime/filas. Expande filas para ver logs de warehouse o tablas anidadas de reglas de calidad.",
  "Models catalog": "Catálogo de modelos",
  "Full table with error, warn, pass, and not-eval row variants.":
    "Tabla completa con variantes de fila error, warn, pass y not-eval.",
  "Click the chevron on expandable rows to open error or quality detail panels.":
    "Haz clic en el chevron de filas expandibles para abrir paneles de error o calidad.",
  "Expanded views": "Vistas expandidas",
  "Error log and quality rules detail panels.":
    "Paneles de detalle de log de error y reglas de calidad.",
  "Error expansion": "Expansión de error",
  "Warehouse error badge, copyable log message, and view-more link.":
    "Insignia de error de warehouse, mensaje de log copiable y enlace ver más.",
  "Quality expansion": "Expansión de calidad",
  "Nested table of column rules with pass, warn, and fail icons.":
    "Tabla anidada de reglas por columna con iconos pass, warn y fail.",
  "Usage patterns": "Patrones de uso",
  "Custom row data from your pipeline API.":
    "Filas personalizadas desde la API de tu pipeline.",
  "Custom rows": "Filas personalizadas",
  "Pass models with errorDetail or qualityRules for expansion.":
    "Pasa modelos con errorDetail o qualityRules para expansión.",
  "Default": "Por defecto",
  "Full models table with all row variants.":
    "Tabla de modelos completa con todas las variantes de fila.",
  "Error expanded": "Error expandido",
  "Error log panel open by default.":
    "Panel de log de error abierto por defecto.",
  "Quality expanded": "Calidad expandida",
  "Quality rules nested table open by default.":
    "Tabla anidada de reglas de calidad abierta por defecto.",
  "Custom": "Personalizado",
  "Custom rows with expansion.": "Filas personalizadas con expansión.",

  // Models Table features
  "Row status variants: fail (red), warn (orange), pass (green), not eval.":
    "Variantes de estado de fila: fail (rojo), warn (naranja), pass (verde), not eval.",
  "Error rows with left-edge indicator and dashed metrics.":
    "Filas de error con indicador en el borde izquierdo y métricas con guiones.",
  "Expandable error panel with copy and view-more affordances.":
    "Panel de error expandible con copiar y ver más.",
  "Expandable quality panel with column, rule, and status nested table.":
    "Panel de calidad expandible con tabla anidada de columna, regla y estado.",
  "Kind / Type combined column with uppercase pills.":
    "Columna combinada Kind / Type con pills en mayúsculas.",
  "Row actions menu and optional sparkline icon.":
    "Menú de acciones por fila e icono sparkline opcional.",
  "Controlled or uncontrolled expandedIds for open rows.":
    "expandedIds controlado o no controlado para filas abiertas.",
  "Horizontal scroll and stacked search on narrow viewports.":
    "Scroll horizontal y búsqueda apilada en viewports estrechos.",

  // Models Table API
  "ModelsTable Props": "Props de ModelsTable",
  "ModelsTable renders a searchable pipeline models catalog with fail, warn, pass, and not-eval status variants. Error rows use a red edge indicator and em dashes for runtime and rows. Expandable rows reveal either an error log panel (errorType badge, copyable message) or a nested quality rules table.":
    "ModelsTable muestra un catálogo buscable de modelos de pipeline con estados fail, warn, pass y not-eval. Las filas de error usan borde rojo y guiones para runtime y filas. Las filas expandibles revelan un panel de log de error o una tabla anidada de reglas de calidad.",
  "Section heading with total model count.":
    "Encabezado de sección con el conteo total de modelos.",
  "Table rows. Defaults to ten models including error, quality-expandable, warn, pass, and not-eval variants.":
    "Filas de la tabla. Por defecto diez modelos con variantes error, calidad expandible, warn, pass y not-eval.",
  "Allow chevron toggle on rows with errorDetail or qualityRules.":
    "Permite el chevron en filas con errorDetail o qualityRules.",
  "Controlled list of expanded row ids.":
    "Lista controlada de ids de filas expandidas.",
  "Initially expanded rows when expandedIds is not provided.":
    "Filas inicialmente expandidas cuando no se pasa expandedIds.",
  "Fires when expanded rows change.":
    "Se dispara cuando cambian las filas expandidas.",
  "Search input placeholder.": "Placeholder del campo de búsqueda.",
  "Controlled search query.": "Consulta de búsqueda controlada.",
  "Fires when search changes.": "Se dispara cuando cambia la búsqueda.",
  "Show or hide search input.": "Muestra u oculta el campo de búsqueda.",
  "Enable sort on Model column.": "Activa el orden en la columna Model.",
  "Additional classes on the outer section.":
    "Clases adicionales en la sección exterior.",
  'Set expansion to "error" with errorDetail, or "quality" with qualityRules. hasError hides runtime/row metrics. Requires table, input, and dropdown-menu.':
    'Usa expansion: "error" con errorDetail, o "quality" con qualityRules. hasError oculta métricas de runtime/filas. Requiere table, input y dropdown-menu.',
  "ModelTableStatus": "ModelTableStatus",
  "Red AlertCircle icon with count.":
    "Icono AlertCircle rojo con conteo.",
  "Orange AlertTriangle icon with count.":
    "Icono AlertTriangle naranja con conteo.",
  "Green CircleCheck icon with count.":
    "Icono CircleCheck verde con conteo.",
  "Italic Not eval label.": "Etiqueta Not eval en cursiva.",
  "ModelTableRow expansion": "Expansión de ModelTableRow",
  "Peach fail-bg panel with errorType badge and log box.":
    "Panel peach fail-bg con insignia errorType y caja de log.",
  "Muted panel with nested Column / Rule / Status table.":
    "Panel muted con tabla anidada Column / Rule / Status.",
  "Red left edge; runtime and rows render as em dash.":
    "Borde izquierdo rojo; runtime y filas se muestran como guión.",
  Dependencies: "Dependencias",
  "Table primitives.": "Primitivas de tabla.",
  "Search input.": "Campo de búsqueda.",
  "Per-row actions menu.": "Menú de acciones por fila.",
  "Surface warehouse failures with copyable stack traces":
    "Muestra fallos de warehouse con stack traces copiables",
  "Drill into column-level rule pass/warn/fail without leaving the table":
    "Profundiza en reglas pass/warn/fail a nivel de columna sin salir de la tabla",
  "Status variants": "Variantes de estado",
  "Fail, warn, pass, and not-eval states match pipeline monitoring UI":
    "Estados fail, warn, pass y not-eval alineados con UI de monitoreo",
  "Controlled expansion": "Expansión controlada",
  "Sync open rows with routing or parent shell state":
    "Sincroniza filas abiertas con routing o el shell padre",

  // ── Quality Summary Card ───────────────────────────────────
  "DataOS quality score overview with dimension pass/warn status and view-all action.":
    "Resumen de puntuación de calidad DataOS con estado pass/warn por dimensión y acción ver todo.",
  Preview: "Vista previa",
  "Default card with sample quality dimensions.":
    "Tarjeta por defecto con dimensiones de calidad de ejemplo.",
  "The card renders from props — no hardcoded business data in production. Demo defaults apply only when props are omitted.":
    "La tarjeta se renderiza desde props — sin datos de negocio fijos en producción. Los valores demo solo aplican si se omiten las props.",
  "Single summary prop": "Prop summary única",
  "Pass one API object — the card derives badge state and dimension count.":
    "Pasa un solo objeto de API — la tarjeta deriva el badge y el conteo de dimensiones.",
  "Map your API response into a QualitySummary and pass it as summary. Override statusLabel only when you need a custom badge label.":
    "Mapea la respuesta de tu API a un QualitySummary y pásalo como summary. Sobrescribe statusLabel solo si necesitas una etiqueta personalizada.",
  "Summary prop": "Prop summary",
  "One object from your API.": "Un objeto desde tu API.",
  "Common ways to feed data into the card.":
    "Formas habituales de alimentar la tarjeta con datos.",
  "1. Static data": "1. Datos estáticos",
  "Simplest approach — define a data object and spread it into the card.":
    "Enfoque más simple — define un objeto de datos y haz spread en la tarjeta.",
  "Use this when quality metrics are known at build time or come from a local config file.":
    "Úsalo cuando las métricas de calidad se conocen en build o vienen de un archivo de config local.",
  "2. From an API response": "2. Desde una respuesta de API",
  "Map your API shape into card props at runtime.":
    "Mapea la forma de tu API a las props de la tarjeta en runtime.",
  "Map API fields into a QualitySummary. The card derives statusLabel and dimensionCount automatically.":
    "Mapea campos de API a un QualitySummary. La tarjeta deriva statusLabel y dimensionCount automáticamente.",
  "3. Derive values": "3. Derivar valores",
  "Omit dimensionCount and statusLabel — the card derives them from dimensions.":
    "Omite dimensionCount y statusLabel — la tarjeta los deriva de dimensions.",
  "Pass passed, total, updatedAt, and dimensions only.":
    "Pasa solo passed, total, updatedAt y dimensions.",
  "4. Multiple cards": "4. Varias tarjetas",
  "Render one card per dataset on the same page.":
    "Renderiza una tarjeta por dataset en la misma página.",
  "Map over an array of quality summaries — each card gets its own title, score, dimensions, and href.":
    "Recorre un array de resúmenes de calidad — cada tarjeta tiene su título, puntuación, dimensiones y href.",
  "5. Empty state": "5. Estado vacío",
  "Pass dimensions={[]} to show an empty message.":
    "Pasa dimensions={[]} para mostrar un mensaje vacío.",
  "Empty dimensions message.": "Mensaje de dimensiones vacías.",
  "6. Loading": "6. Carga",
  "QualitySummaryCardSkeleton while quality loads.":
    "QualitySummaryCardSkeleton mientras carga la calidad.",
  "Skeleton placeholder.": "Marcador de esqueleto.",
  "Message when dimensions is an empty array. Defaults to a localized empty copy.":
    "Mensaje cuando dimensions es un array vacío. Por defecto usa copy localizado.",
  "Also exported: QualitySummaryCardSkeleton, deriveStatusLabel.":
    "También exportado: QualitySummaryCardSkeleton, deriveStatusLabel.",
  "Empty + skeleton": "Vacío + esqueleto",
  "Empty dimensions message and QualitySummaryCardSkeleton":
    "Mensaje de dimensiones vacías y QualitySummaryCardSkeleton",
  "Copy shown when metrics is an empty array. Defaults to localized empty text.":
    "Texto mostrado cuando metrics es un array vacío. Por defecto usa copy localizado.",
  "Copy shown when runs is an empty array. Defaults to localized empty text.":
    "Texto mostrado cuando runs es un array vacío. Por defecto usa copy localizado.",
  "Copy shown when runs or models is empty. Defaults to localized empty text.":
    "Texto mostrado cuando runs o models está vacío. Por defecto usa copy localizado.",
  "Exported types: RunMetric, RunMetricQualityDetail, RunMetricsProps. Also exported: RunMetricsSkeleton. Card surfaces use bg-dataos-surface for light and dark mode.":
    "Tipos exportados: RunMetric, RunMetricQualityDetail, RunMetricsProps. También exportado: RunMetricsSkeleton. Las superficies usan bg-dataos-surface en claro y oscuro.",
  "Static data": "Datos estáticos",
  "Define a data object and spread it into the card.":
    "Define un objeto de datos y haz spread en la tarjeta.",
  "API response": "Respuesta de API",
  "Map API fields into card props at runtime.":
    "Mapea campos de API a props de la tarjeta en runtime.",
  "Derived values": "Valores derivados",
  "Compute statusLabel and dimensionCount from dimensions.":
    "Calcula statusLabel y dimensionCount a partir de dimensions.",
  "Multiple cards": "Varias tarjetas",
  "Data-driven quality score overview with pass, warn, and fail dimensions.":
    "Resumen de puntuación de calidad basado en datos con dimensiones pass, warn y fail.",
  "Auto-derives dimensionCount and statusLabel from dimension statuses.":
    "Deriva automáticamente dimensionCount y statusLabel desde los estados de dimensión.",
  "Supports a single summary prop or individual props from your API.":
    "Admite una prop summary única o props individuales desde tu API.",
  "QualitySummaryCard Props": "Props de QualitySummaryCard",
  "Single API object with passed, total, updatedAt, and dimensions.":
    "Objeto único de API con passed, total, updatedAt y dimensions.",
  "Card header title.": "Título del encabezado de la tarjeta.",
  'Badge label. Auto-derived as "Healthy", "At Risk", or "Failed" when omitted.':
    'Etiqueta del badge. Se deriva como "Healthy", "At Risk" o "Failed" si se omite.',
  "Number of rules passed (score numerator).":
    "Número de reglas aprobadas (numerador de la puntuación).",
  "Total rules (score denominator).":
    "Total de reglas (denominador de la puntuación).",
  "Number of dimensions. Auto-derived from dimensions.length when omitted.":
    "Número de dimensiones. Se deriva de dimensions.length si se omite.",
  "Relative or formatted last-checked time.":
    "Hora de última comprobación relativa o formateada.",
  'Dimension rows with status "pass", "warn", or "fail" and optional detail.':
    'Filas de dimensión con status "pass", "warn" o "fail" y detail opcional.',
  "Footer link URL without a client-side handler.":
    "URL del enlace del pie sin manejador en el cliente.",
  "Client-side footer click handler.":
    "Manejador de clic del pie en el cliente.",
  "Single `summary` prop": "Prop `summary` única",
  "One object from API instead of many individual props":
    "Un objeto desde la API en lugar de muchas props individuales",
  "Auto `dimensionCount`": "`dimensionCount` automático",
  "Derived from `dimensions.length` when not passed":
    "Derivado de `dimensions.length` si no se pasa",
  "Auto `statusLabel`": "`statusLabel` automático",
  '"Healthy" / "At Risk" / "Failed" from dimension statuses':
    '"Healthy" / "At Risk" / "Failed" según estados de dimensión',
  '`status: "fail"`': '`status: "fail"`',
  "Third state with destructive badge and row styling":
    "Tercer estado con badge destructivo y estilo de fila",
  "`href` instead of `onViewAll`": "`href` en lugar de `onViewAll`",
  "Footer link without a client-side handler":
    "Enlace del pie sin manejador en el cliente",

  // ── Data Product Table ─────────────────────────────────────
  "DataOS catalog table with product icon, glossary term pills, quality badges, and sort/filter headers.":
    "Tabla de catálogo DataOS con icono de producto, pills de término de glosario, badges de calidad y cabeceras de orden/filtro.",
  "Interactive catalog with sort on Data Product and filter on Glossary term.":
    "Catálogo interactivo con orden en Data Product y filtro en Glossary term.",
  "Compose Table, Popover, and Input primitives — map your catalog API into typed rows and wire header controls in client state.":
    "Compón primitivas Table, Popover e Input — mapea tu API de catálogo a filas tipadas y conecta controles de cabecera en estado del cliente.",
  "Row data shape": "Forma de los datos de fila",
  "Pass an array of DataProductRow objects — each row drives product, glossary, and quality cells.":
    "Pasa un array de objetos DataProductRow — cada fila alimenta celdas de producto, glosario y calidad.",
  "Define a typed row model and map API fields once. Reuse DataProductDataRow for consistent cell markup across pages.":
    "Define un modelo de fila tipado y mapea campos de API una vez. Reutiliza DataProductDataRow para markup consistente entre páginas.",
  "Row data prop": "Prop de datos de fila",
  "One array from your API or static config.":
    "Un array desde tu API o config estática.",
  "Common ways to build the DataOS catalog table.":
    "Formas habituales de construir la tabla de catálogo DataOS.",
  "Simplest approach — define a rows array and map it into table cells.":
    "Enfoque más simple — define un array rows y mapealo a celdas de tabla.",
  "Use when catalog entries are known at build time or come from a local config file.":
    "Úsalo cuando las entradas del catálogo se conocen en build o vienen de un archivo de config local.",
  "Map your API shape into DataProductRow at runtime.":
    "Mapea la forma de tu API a DataProductRow en runtime.",
  "Transform catalog API fields in one mapper function, then pass the result to your table body.":
    "Transforma campos de la API de catálogo en una función mapper y pasa el resultado al cuerpo de la tabla.",
  "3. Sort and filter headers": "3. Cabeceras de orden y filtro",
  "Add column sort and a popover filter on glossary terms.":
    "Añade orden de columna y un filtro popover sobre términos de glosario.",
  "Keep sort direction and filter query in React state; derive visibleRows with useMemo before rendering.":
    "Mantén dirección de orden y consulta de filtro en estado React; deriva visibleRows con useMemo antes de renderizar.",
  "4. Row click, hover & selection": "4. Clic, hover y selección de fila",
  "Bind onRowClick, onRowHover, and click-to-select with row highlighting.":
    "Conecta onRowClick, onRowHover y click-to-select con resaltado de fila.",
  "Set selectable for click-to-select (controlled via selectedIds / onSelectionChange). onRowClick and onRowHover fire independently — rows are keyboard focusable when clickable.":
    "Activa selectable para click-to-select (controlado con selectedIds / onSelectionChange). onRowClick y onRowHover se disparan por separado — las filas son enfocables por teclado si son clicables.",
  "5. Row cell markup": "5. Markup de celdas de fila",
  "Product icon tile, glossary pill, and optional quality badge.":
    "Mosaico de icono de producto, pill de glosario y badge de calidad opcional.",
  "Extract DataProductDataRow so the same row layout works in static, API-driven, and interactive tables.":
    "Extrae DataProductDataRow para que el mismo layout de fila funcione en tablas estáticas, de API e interactivas.",
  "Interactive catalog with sort and filter headers.":
    "Catálogo interactivo con cabeceras de orden y filtro.",
  "One array from your API.": "Un array desde tu API.",
  "Define a rows array and map it into table cells.":
    "Define un array rows y mapealo a celdas de tabla.",
  "Map API fields into DataProductRow at runtime.":
    "Mapea campos de API a DataProductRow en runtime.",
  "Sort and filter": "Orden y filtro",
  "Column sort and glossary popover filter.":
    "Orden de columna y filtro popover de glosario.",
  "Click, hover & select": "Clic, hover y seleccionar",
  "Row click, hover callback, and click-to-select highlighting.":
    "Clic de fila, callback de hover y resaltado click-to-select.",
  "Row cell markup": "Markup de celdas de fila",
  "Product tile, glossary pill, and quality badge cells.":
    "Celdas de mosaico de producto, pill de glosario y badge de calidad.",
  "DataOS catalog layout with teal product icon, title, and description in the first column.":
    "Layout de catálogo DataOS con icono teal, título y descripción en la primera columna.",
  "Outline glossary term pills and optional orange Quality warning badges per row.":
    "Pills outline de término de glosario y badges naranja Quality opcionales por fila.",
  "Bold 2px header border with short column divider and right-aligned sort/filter controls.":
    "Borde de cabecera bold 2px con divisor corto de columna y controles de orden/filtro alineados a la derecha.",
  "Borderless row backgrounds — horizontal dividers only, no vertical column lines in the body.":
    "Fondos de fila sin borde — solo divisores horizontales, sin líneas verticales en el cuerpo.",
  "DataProductTable Props": "Props de DataProductTable",
  "Catalog rows rendered in the table body.":
    "Filas de catálogo renderizadas en el cuerpo de la tabla.",
  "Optional class on the outer bordered wrapper.":
    "Clase opcional en el wrapper exterior con borde.",
  "Show sort control on the Data Product column header.":
    "Muestra el control de orden en la cabecera de la columna Data Product.",
  "Show popover filter on the Glossary term column header.":
    "Muestra el filtro popover en la cabecera de la columna Glossary term.",
  "Message when filtered rows return empty.":
    "Mensaje cuando el filtro no deja filas.",
  "Fires whenever a row is clicked, independent of selection. Rows become keyboard focusable (Enter/Space).":
    "Se dispara al hacer clic en una fila, independiente de la selección. Las filas son enfocables por teclado (Enter/Espacio).",
  "Fires with the hovered row on mouse enter, and null on mouse leave.":
    "Se dispara con la fila en hover al entrar el ratón, y null al salir.",
  "Enable click-to-select with highlighted rows and aria-selected.":
    "Activa click-to-select con filas resaltadas y aria-selected.",
  "Allow more than one row selected at a time.":
    "Permite más de una fila seleccionada a la vez.",
  "Controlled selected row ids. Pair with onSelectionChange.":
    "Ids de filas seleccionadas controlados. Combínalo con onSelectionChange.",
  "Initial selected ids for uncontrolled selection.":
    "Ids iniciales seleccionados para selección no controlada.",
  "Fires with the next selected row ids when selection changes.":
    "Se dispara con los siguientes ids seleccionados cuando cambia la selección.",
  "DataProductRow fields: id, title, description, glossaryTerm?, showQuality?. Also exported: DataProductDataRow, DataProductStaticHeader for custom layouts.":
    "Campos de DataProductRow: id, title, description, glossaryTerm?, showQuality?. También exportados: DataProductDataRow, DataProductStaticHeader para layouts personalizados.",
  "One component — pass rows and get the full DataOS catalog layout":
    "Un componente — pasa rows y obtén el layout completo de catálogo DataOS",
  "One typed model for static config, API mapping, and interactive tables":
    "Un modelo tipado para config estática, mapeo de API y tablas interactivas",
  "Reusable row cells when composing a custom table shell":
    "Celdas de fila reutilizables al componer un shell de tabla personalizado",
  "Bold header with short column divider — no sort/filter wiring":
    "Cabecera bold con divisor corto — sin cableado de orden/filtro",
  "Toggle client-side column sort and glossary popover filter":
    "Activa/desactiva orden de columna y filtro popover de glosario en el cliente",
  "Row click & hover": "Clic y hover de fila",
  "onRowClick and onRowHover callbacks with keyboard-focusable rows":
    "Callbacks onRowClick y onRowHover con filas enfocables por teclado",
  "Click-to-select": "Click-to-select",
  "Controlled or uncontrolled selection with highlighted rows":
    "Selección controlada o no controlada con filas resaltadas",

  // ── Data Product Card ──────────────────────────────────────
  "Catalog card for data products with icon, title, subtitle, truncated description, and status badge.":
    "Tarjeta de catálogo para productos de datos con icono, título, subtítulo, descripción truncada y badge de estado.",
  "A composed card for browsing data products — shows a product icon, title, optional glossary subtitle, truncated description, and a quality or last-run status badge.":
    "Tarjeta compuesta para explorar productos de datos — icono, título, subtítulo de glosario opcional, descripción truncada y badge de calidad o última ejecución.",
  "Quality badge": "Badge de calidad",
  "Card with subtitle and a Quality warning badge.":
    "Tarjeta con subtítulo y badge de advertencia Quality.",
  'Use badge.status="warn" for at-risk quality. The subtitle row shows a glossary or category label with a document icon.':
    'Usa badge.status="warn" para calidad en riesgo. La fila de subtítulo muestra glosario o categoría con icono de documento.',
  "Last run badge": "Badge de última ejecución",
  "Card with a failed last-run status badge.":
    "Tarjeta con badge de última ejecución fallida.",
  'Use badge.status="fail" when the most recent pipeline run failed. Omit subtitle for simpler product cards.':
    'Usa badge.status="fail" cuando falló la última ejecución del pipeline. Omite subtitle para tarjetas más simples.',
  "Last run failed": "Última ejecución fallida",
  "Financial risk card with fail badge.":
    "Tarjeta de riesgo financiero con badge fail.",
  "Grid layout and interactive cards.":
    "Layout en grid y tarjetas interactivas.",
  "Product grid": "Grid de productos",
  "Render multiple cards in a responsive grid.":
    "Renderiza varias tarjetas en un grid responsive.",
  "Clickable card": "Tarjeta clicable",
  "Wire onClick or href for navigation.":
    "Conecta onClick o href para navegación.",
  Density: "Densidad",
  'Compact cards with size="sm".': 'Tarjetas compactas con size="sm".',
  "Default and compact sizes.": "Tamaños por defecto y compactos.",
  Loading: "Carga",
  "DataProductCardSkeleton while catalog rows load.":
    "DataProductCardSkeleton mientras cargan las filas del catálogo.",
  "Skeleton placeholders.": "Marcadores de esqueleto.",
  "Card density. Use sm for compact catalog grids.":
    "Densidad de tarjeta. Usa sm para grids de catálogo compactos.",
  "Also exported: DataProductCardBadgePill, DataProductCardSkeleton. Badge colors use DataOS quality tokens (dataos-warn-bg, dataos-fail-bg).":
    "También exportado: DataProductCardBadgePill, DataProductCardSkeleton. Los colores de badge usan tokens DataOS (dataos-warn-bg, dataos-fail-bg).",
  "Skeleton + density": "Esqueleto + densidad",
  "Loading and compact size match Plan/Run card patterns":
    "Carga y tamaño compacto alineados con Plan/Run card",
  "Subtitle + quality warning badge.":
    "Subtítulo + badge de advertencia de calidad.",
  "Last run": "Última ejecución",
  "Failed last-run badge.": "Badge de última ejecución fallida.",
  Grid: "Grid",
  "Multiple cards in a grid.": "Varias tarjetas en un grid.",
  "Product icon in a rounded teal container with customizable icon and colors.":
    "Icono de producto en contenedor teal redondeado con icono y colores personalizables.",
  "Title and optional subtitle with document icon for glossary or category.":
    "Título y subtítulo opcional con icono de documento para glosario o categoría.",
  "Description truncated to three lines with line-clamp.":
    "Descripción truncada a tres líneas con line-clamp.",
  "Status badge pill for Quality (warn) or Last run (fail) states.":
    "Pill de badge de estado para Quality (warn) o Last run (fail).",
  "Optional href or onClick for clickable catalog cards.":
    "href u onClick opcionales para tarjetas de catálogo clicables.",
  "DataProductCard Props": "Props de DataProductCard",
  "Product name shown in the card header.":
    "Nombre del producto en el encabezado de la tarjeta.",
  "Optional glossary or category label below the title.":
    "Etiqueta opcional de glosario o categoría bajo el título.",
  "Product summary. Truncated to three lines in the card.":
    "Resumen del producto. Truncado a tres líneas en la tarjeta.",
  "Icon inside the rounded container. Defaults to a box icon.":
    "Icono dentro del contenedor redondeado. Por defecto un icono de caja.",
  "Tailwind classes for the icon container background.":
    "Clases Tailwind para el fondo del contenedor del icono.",
  'Status pill with label and status: "pass" | "warn" | "fail".':
    'Pill de estado con label y status: "pass" | "warn" | "fail".',
  "Renders the card as a link when provided.":
    "Renderiza la tarjeta como enlace si se proporciona.",
  "Renders the card as a button when provided.":
    "Renderiza la tarjeta como botón si se proporciona.",
  "Additional classes on the card wrapper.":
    "Clases adicionales en el wrapper de la tarjeta.",
  "Also exported: DataProductCardBadgePill. Badge colors use DataOS quality tokens (dataos-warn-bg, dataos-fail-bg).":
    "También exportado: DataProductCardBadgePill. Los colores del badge usan tokens DataOS (dataos-warn-bg, dataos-fail-bg).",
  "Status badges": "Badges de estado",
  "Quality warn and last-run fail states from the design system":
    "Estados Quality warn y last-run fail del design system",
  "Truncated description": "Descripción truncada",
  "Consistent card height in catalog grids":
    "Altura de tarjeta consistente en grids de catálogo",
  Clickable: "Clicable",
  "Use href or onClick for navigation to product detail pages":
    "Usa href u onClick para navegar a páginas de detalle del producto",

  // ── Run Duration ───────────────────────────────────────────
  "Run duration bar chart with normal, anomaly, and selected states plus a baseline reference line.":
    "Gráfico de barras de duración de ejecución con estados normal, anomaly y selected más una línea base de referencia.",
  "Visualize pipeline run durations across time — teal bars for normal runs, pink for anomalies, and a selected run with column highlight. Includes dashed baseline and per-run date/time labels.":
    "Visualiza duraciones de ejecución del pipeline en el tiempo — barras teal para runs normales, rosa para anomalías y run seleccionado con resaltado de columna. Incluye baseline discontinua y etiquetas de fecha/hora por run.",
  "Run duration chart": "Gráfico de duración de ejecución",
  "Bar chart with legend, baseline, and selected run highlight.":
    "Gráfico de barras con leyenda, baseline y resaltado del run seleccionado.",
  "Click a bar to select a run. Duration labels appear above each bar in the status color.":
    "Haz clic en una barra para seleccionar un run. Las etiquetas de duración aparecen encima de cada barra en el color del estado.",
  "Controlled selected run state.":
    "Estado controlado del run seleccionado.",
  "Controlled selection": "Selección controlada",
  "Wire selectedId and onSelectedChange from your shell.":
    "Conecta selectedId y onSelectedChange desde tu shell.",
  "Run duration with baseline and legend.":
    "Duración de ejecución con baseline y leyenda.",
  Controlled: "Controlado",
  "Selected run driven by parent state.":
    "Run seleccionado impulsado por el estado del padre.",
  "RunDuration is a bar chart for pipeline run durations over time. Each bar shows duration on a 0–100 Y-axis with date and time on the X-axis. Bars are colored by status (normal, anomaly, selected), a dashed baseline marks the target, and clicking a bar selects that run with a column highlight.":
    "RunDuration es un gráfico de barras de duraciones de ejecución del pipeline en el tiempo. Cada barra muestra duración en un eje Y 0–100 con fecha y hora en el eje X. Las barras se colorean por estado (normal, anomaly, selected), una baseline discontinua marca el objetivo, y al hacer clic se selecciona ese run con resaltado de columna.",
  "Recharts BarChart with rounded-top bars (8px radius).":
    "BarChart de Recharts con barras de cima redondeada (radio 8px).",
  "Status colors: normal (teal), anomaly (pink), selected (primary).":
    "Colores de estado: normal (teal), anomaly (rosa), selected (primary).",
  "Light and dark mode via --run-duration-* theme tokens.":
    "Modo claro y oscuro vía tokens de tema --run-duration-*.",
  "Duration labels centered above each bar in status color.":
    "Etiquetas de duración centradas encima de cada barra en color de estado.",
  "Dashed baseline reference line with legend entry.":
    "Línea de referencia baseline discontinua con entrada en la leyenda.",
  "Selected run column highlight via ReferenceArea.":
    "Resaltado de columna del run seleccionado vía ReferenceArea.",
  "Click-to-select with controlled or uncontrolled selectedId.":
    "Click-to-select con selectedId controlado o no controlado.",
  "Custom X-axis ticks with date and time per run.":
    "Ticks personalizados del eje X con fecha y hora por run.",
  "Hover tooltips with date, time, and duration value.":
    "Tooltips al hover con fecha, hora y valor de duración.",
  "Built-in demo data for ten runs when runs prop is omitted.":
    "Datos demo de diez runs cuando se omite la prop runs.",
  "RunDuration Props": "Props de RunDuration",
  "Panel heading in uppercase tracking above the legend.":
    "Encabezado del panel en mayúsculas sobre la leyenda.",
  "Bar data with id, date, time, duration, durationLabel, and status. Defaults to ten demo runs.":
    "Datos de barras con id, date, time, duration, durationLabel y status. Por defecto diez runs demo.",
  "Y-axis value for the dashed horizontal reference line. Shown in legend as baseline.":
    "Valor del eje Y para la línea de referencia horizontal discontinua. Se muestra en la leyenda como baseline.",
  "Controlled selected run id. Matching bar uses selected fill and column highlight.":
    "Id del run seleccionado controlado. La barra coincidente usa fill selected y resaltado de columna.",
  "Initial selected run when selectedId is not provided.":
    "Run inicialmente seleccionado cuando no se pasa selectedId.",
  "Fires when a bar is clicked with the run id.":
    "Se dispara al hacer clic en una barra con el id del run.",
  "Additional classes on the outer section element.":
    "Clases adicionales en el elemento section exterior.",
  "Exported types: RunDurationStatus, RunDurationRun, RunDurationProps. duration is plotted on a fixed 0–100 domain — normalize minutes or map to your scale before passing. Clicking a bar sets its status to selected; other bars keep normal or anomaly. Requires chart and recharts.":
    "Tipos exportados: RunDurationStatus, RunDurationRun, RunDurationProps. duration se traza en un dominio fijo 0–100 — normaliza minutos o mapea a tu escala antes de pasar. Al hacer clic, el estado pasa a selected; las demás barras mantienen normal o anomaly. Requiere chart y recharts.",
  RunDurationStatus: "RunDurationStatus",
  "Expected duration. --run-duration-normal / --run-duration-normal-label.":
    "Duración esperada. --run-duration-normal / --run-duration-normal-label.",
  "Outlier duration. --run-duration-anomaly / --run-duration-anomaly-label.":
    "Duración atípica. --run-duration-anomaly / --run-duration-anomaly-label.",
  "Active run. --run-duration-selected with column highlight at 12% opacity.":
    "Run activo. --run-duration-selected con resaltado de columna al 12% de opacidad.",
  RunDurationRun: "RunDurationRun",
  "Unique run key used for X-axis category and selection.":
    "Clave única del run para categoría del eje X y selección.",
  'First line of X-axis tick (e.g. "Mar 15, 2027").':
    'Primera línea del tick del eje X (p. ej. "Mar 15, 2027").',
  'Second line of X-axis tick (e.g. "11:42").':
    'Segunda línea del tick del eje X (p. ej. "11:42").',
  "Numeric bar height on the 0–100 Y-axis.":
    "Altura numérica de la barra en el eje Y 0–100.",
  'Label above the bar (e.g. "29m"). Centered over bar width.':
    'Etiqueta encima de la barra (p. ej. "29m"). Centrada sobre el ancho de la barra.',
  'Bar color state. Overridden to "selected" when id matches selectedId.':
    'Estado de color de la barra. Se sobrescribe a "selected" cuando id coincide con selectedId.',
  "ChartContainer, ChartTooltip, ChartTooltipContent from @/components/ui/chart.":
    "ChartContainer, ChartTooltip, ChartTooltipContent desde @/components/ui/chart.",
  "BarChart, Bar, Cell, LabelList, ReferenceLine, ReferenceArea, CartesianGrid, XAxis, YAxis.":
    "BarChart, Bar, Cell, LabelList, ReferenceLine, ReferenceArea, CartesianGrid, XAxis, YAxis.",
  "Anomaly highlighting": "Resaltado de anomalías",
  "Pink bars surface outlier run durations against normal teal bars":
    "Barras rosa destacan duraciones atípicas frente a barras teal normales",
  "Baseline reference": "Referencia baseline",
  "Dashed line at baseline value for SLA or target comparison":
    "Línea discontinua en el valor baseline para comparar SLA u objetivo",
  "Interactive selection": "Selección interactiva",
  "Click bars to select; controlled or uncontrolled selectedId":
    "Haz clic en barras para seleccionar; selectedId controlado o no controlado",
  "Centered duration labels": "Etiquetas de duración centradas",
  "durationLabel rendered above each bar in status color":
    "durationLabel encima de cada barra en color de estado",
  "Column highlight": "Resaltado de columna",
  "ReferenceArea tints the selected run column behind the bar":
    "ReferenceArea tiñe la columna del run seleccionado detrás de la barra",

  // ── Model Health Across Runs ───────────────────────────────
  "Recharts heatmap of model health status across runs with row and column health summaries.":
    "Mapa de calor Recharts del estado de salud del modelo entre ejecuciones con resúmenes por fila y columna.",
  "Track model health across R1–R10 runs — rounded status pills per model/run intersection, column run-health bars, and row-level health percentages.":
    "Sigue la salud del modelo en ejecuciones R1–R10 — pills redondeadas por intersección modelo/run, barras de salud por columna y porcentajes por fila.",
  "Model health grid": "Cuadrícula de salud del modelo",
  "Heatmap grid with healthy, quality, failed, and not-evaluated states.":
    "Cuadrícula heatmap con estados healthy, quality, failed y not-evaluated.",
  "Pass runs for column headers and models with cells keyed by runId. Status colors use DataOS quality tokens.":
    "Pasa runs para cabeceras de columna y models con cells por runId. Los colores de estado usan tokens DataOS.",
  "Custom runs and models data.":
    "Datos personalizados de runs y models.",
  "Custom data": "Datos personalizados",
  "Pass runs for columns and models with cells keyed by runId.":
    "Pasa runs para columnas y models con cells por runId.",
  "Model health grid across ten runs.":
    "Cuadrícula de salud del modelo en diez ejecuciones.",
  "ModelHealthRuns renders a Recharts scatter heatmap of model health across pipeline runs. Pass column definitions in runs and row definitions in models; each model carries a cells array keyed by runId. Column headers show run labels, health bars, and percentages; rows show truncated model names and trailing health percentages.":
    "ModelHealthRuns renderiza un scatter heatmap Recharts de salud del modelo entre ejecuciones. Pasa columnas en runs y filas en models; cada modelo lleva cells por runId. Las cabeceras muestran etiquetas, barras y %; las filas muestran nombres truncados y % de salud.",
  "Recharts ScatterChart heatmap with rounded status cells (8px radius).":
    "Heatmap ScatterChart de Recharts con celdas de estado redondeadas (radio 8px).",
  "Four status states: healthy, quality issues, failed, not evaluated.":
    "Cuatro estados: healthy, quality issues, failed, not evaluated.",
  "Light and dark mode via --model-health-* theme tokens.":
    "Modo claro y oscuro vía tokens --model-health-*.",
  "Column run-health progress bars and percentages (R1–R10).":
    "Barras de progreso y porcentajes de salud por columna (R1–R10).",
  "Row model names with ellipsis truncation and per-row health %.":
    "Nombres de modelo en fila con truncado ellipsis y % de salud por fila.",
  "Responsive cell width from plot area; horizontal scroll on narrow viewports.":
    "Ancho de celda responsive desde el área del plot; scroll horizontal en viewports estrechos.",
  "Hover tooltips with model name, run label, and status label.":
    "Tooltips al hover con nombre de modelo, etiqueta de run y estado.",
  "Built-in demo data for ten runs and ten models when props are omitted.":
    "Datos demo de diez runs y diez modelos cuando se omiten las props.",
  "ModelHealthRuns Props": "Props de ModelHealthRuns",
  "Column definitions. Each run supplies id (matches cell runId), label (e.g. R1), and health (0–100 for the column header bar and %). Defaults to ten demo runs.":
    "Definiciones de columna. Cada run aporta id (coincide con cell runId), label (p. ej. R1) y health (0–100 para barra y % de cabecera). Por defecto diez runs demo.",
  "Row definitions with model name, row-level health %, and cells per run. Defaults to ten demo models.":
    "Definiciones de fila con nombre de modelo, % de salud de fila y cells por run. Por defecto diez modelos demo.",
  "Exported types: ModelHealthStatus, ModelHealthCell, ModelHealthRun, ModelHealthModel, ModelHealthRunsProps. Cell runId must match a run.id. Missing cells render as not evaluated (#f2f4f7). Requires chart and recharts (installed by shadcn add).":
    "Tipos exportados: ModelHealthStatus, ModelHealthCell, ModelHealthRun, ModelHealthModel, ModelHealthRunsProps. El runId de la celda debe coincidir con run.id. Celdas faltantes se muestran como not evaluated (#f2f4f7). Requiere chart y recharts.",
  ModelHealthStatus: "ModelHealthStatus",
  "Model passed quality checks. Light #94d2c9, dark #6ec4b8 (--model-health-healthy).":
    "Modelo pasó checks de calidad. Claro #94d2c9, oscuro #6ec4b8 (--model-health-healthy).",
  "Quality issues detected. Light #f9cb8d, dark #d4a55c (--model-health-quality).":
    "Problemas de calidad detectados. Claro #f9cb8d, oscuro #d4a55c (--model-health-quality).",
  "Run or evaluation failed. Light #f9bdc2, dark #d98a94 (--model-health-failed).":
    "Ejecución o evaluación fallida. Claro #f9bdc2, oscuro #d98a94 (--model-health-failed).",
  "Not evaluated or no data. Light #f2f4f7, dark #3a3a38 (--model-health-none).":
    "No evaluado o sin datos. Claro #f2f4f7, oscuro #3a3a38 (--model-health-none).",
  ModelHealthRun: "ModelHealthRun",
  "Unique run key referenced by ModelHealthCell.runId.":
    "Clave única de run referenciada por ModelHealthCell.runId.",
  'Column header text (e.g. "R1", "R2").':
    'Texto de cabecera de columna (p. ej. "R1", "R2").',
  "0–100 value for the column header progress bar and % label.":
    "Valor 0–100 para la barra de progreso de cabecera y etiqueta %.",
  ModelHealthModel: "ModelHealthModel",
  "Unique model key for React list rendering.":
    "Clave única de modelo para listas React.",
  "Left-axis label. Long names truncate with ellipsis; full name in SVG title tooltip.":
    "Etiqueta del eje izquierdo. Nombres largos se truncan; nombre completo en tooltip SVG title.",
  "0–100 row summary shown in the trailing health column.":
    "Resumen 0–100 de fila en la columna de salud final.",
  "Array of { runId, status } pairs for each run intersection.":
    "Array de pares { runId, status } por intersección de run.",
  "ScatterChart, Scatter, XAxis, YAxis — registered in registry.json.":
    "ScatterChart, Scatter, XAxis, YAxis — registrados en registry.json.",
  "Column run summaries": "Resúmenes de run por columna",
  "Header bars and % show aggregate health per run at a glance":
    "Barras de cabecera y % muestran salud agregada por run de un vistazo",
  "Row health column": "Columna de salud por fila",
  "Trailing % summarizes each model across all runs":
    "El % final resume cada modelo en todas las ejecuciones",
  "Responsive cell sizing": "Tamaño de celda responsive",
  "Cell width scales with container; gaps stay consistent":
    "El ancho de celda escala con el contenedor; los gaps se mantienen",
  "Figma-aligned palette": "Paleta alineada con Figma",
  "Fixed hex tokens for healthy, quality, failed, and none states":
    "Tokens hex fijos para estados healthy, quality, failed y none",
  "Default demo dataset": "Dataset demo por defecto",
  "Renders a full 10×10 grid without passing runs or models":
    "Renderiza una cuadrícula 10×10 completa sin pasar runs ni models",

  // ── Run Metrics ────────────────────────────────────────────
  "Pipeline run metrics grid with uppercase labels, serif values, and optional quality breakdown.":
    "Cuadrícula de métricas de ejecución con etiquetas en mayúsculas, valores serif y desglose de calidad opcional.",
  "Display wall time, model count, parallelism, eval latency, quality score, and assertions in a compact grid. The quality metric supports a passed/failed subline with semantic fail coloring.":
    "Muestra wall time, conteo de modelos, paralelismo, latencia de eval, puntuación de calidad y assertions en una cuadrícula compacta. La métrica de calidad admite una sublínea passed/failed con color semántico en fallos.",
  "Run metrics grid": "Cuadrícula de métricas de ejecución",
  "Six-metric pipeline summary in a 3-column grid.":
    "Resumen de pipeline de seis métricas en grid de 3 columnas.",
  "Defaults match the standard run summary: WALL, MODELS, PARALLELISM, EVAL, QUALITY, and ASSERTIONS.":
    "Los valores por defecto coinciden con el resumen estándar: WALL, MODELS, PARALLELISM, EVAL, QUALITY y ASSERTIONS.",
  "Custom metrics and column layout.":
    "Métricas personalizadas y layout de columnas.",
  "Custom metrics": "Métricas personalizadas",
  "Pass your own metrics array and column count.":
    "Pasa tu propio array de métricas y número de columnas.",
  "Six-metric run summary grid.":
    "Cuadrícula de resumen de ejecución de seis métricas.",
  "Custom metrics with two columns.":
    "Métricas personalizadas con dos columnas.",
  "RunMetrics renders a responsive grid of metric cards for pipeline run summaries. Each card shows an uppercase label, a large serif value, and an optional detail line. Quality metrics can pass a passed/failed object to render semantic coloring on failures.":
    "RunMetrics renderiza una cuadrícula responsive de tarjetas de métricas para resúmenes de ejecución. Cada tarjeta muestra etiqueta en mayúsculas, valor serif grande y una línea de detalle opcional. Las métricas de calidad pueden pasar un objeto passed/failed para colorear fallos.",
  "Responsive grid: 2 columns on mobile, scales to columns prop from md/xl.":
    "Grid responsive: 2 columnas en móvil, escala a la prop columns desde md/xl.",
  "Uppercase muted labels with wide tracking.":
    "Etiquetas muted en mayúsculas con tracking amplio.",
  "Large serif values aligned to DataOS typography.":
    "Valores serif grandes alineados a la tipografía DataOS.",
  "Optional detail line as plain text or passed/failed breakdown.":
    "Línea de detalle opcional como texto o desglose passed/failed.",
  "Failed count uses dataos-fail-fg token (light and dark mode).":
    "El conteo failed usa el token dataos-fail-fg (modo claro y oscuro).",
  "Built-in demo metrics when metrics prop is omitted.":
    "Métricas demo incluidas cuando se omite la prop metrics.",
  "RunMetrics Props": "Props de RunMetrics",
  "Metric cards with id, label, value, and optional detail. Defaults to six pipeline metrics (WALL, MODELS, PARALLELISM, EVAL, QUALITY, ASSERTIONS).":
    "Tarjetas de métrica con id, label, value y detail opcional. Por defecto seis métricas de pipeline (WALL, MODELS, PARALLELISM, EVAL, QUALITY, ASSERTIONS).",
  "Target column count at md (3 cols) or xl (4 cols). Mobile uses 2 columns for 3/4 layouts; 2-column layout stacks to 1 below 28rem.":
    "Número de columnas objetivo en md (3) o xl (4). Móvil usa 2 columnas para layouts 3/4; el layout de 2 columnas apila a 1 bajo 28rem.",
  "Exported types: RunMetric, RunMetricQualityDetail, RunMetricsProps. Card surfaces use bg-dataos-surface for light and dark mode.":
    "Tipos exportados: RunMetric, RunMetricQualityDetail, RunMetricsProps. Las superficies usan bg-dataos-surface en claro y oscuro.",
  RunMetric: "RunMetric",
  "Unique key for React list rendering.":
    "Clave única para listas React.",
  'Uppercase metric name (e.g. "WALL", "QUALITY").':
    'Nombre de métrica en mayúsculas (p. ej. "WALL", "QUALITY").',
  'Primary serif display value (e.g. "4.1s", "14/18").':
    'Valor serif principal (p. ej. "4.1s", "14/18").',
  "Optional subline — plain string or { passed, failed } for quality breakdown.":
    "Sublínea opcional — string o { passed, failed } para desglose de calidad.",
  RunMetricQualityDetail: "RunMetricQualityDetail",
  "Passed count shown in muted foreground.":
    "Conteo passed en foreground muted.",
  "Failed count shown in text-dataos-fail-fg.":
    "Conteo failed en text-dataos-fail-fg.",
  "Quality breakdown": "Desglose de calidad",
  "Passed/failed subline with semantic fail color on failures":
    "Sublínea passed/failed con color semántico en fallos",
  "Responsive layout": "Layout responsive",
  "2-up mobile grid, fluid typography, and wrapping quality detail":
    "Grid 2 columnas en móvil, tipografía fluida y detalle de calidad que envuelve",
  "Default demo data": "Datos demo por defecto",
  "Renders a full six-metric grid without passing metrics":
    "Renderiza una cuadrícula de seis métricas sin pasar metrics",
  "Theme-aware surfaces": "Superficies conscientes del tema",
  "Cards use dataos-surface token for light and dark backgrounds":
    "Las tarjetas usan el token dataos-surface para fondos claros y oscuros",

  // ── Login / Signup ─────────────────────────────────────────
  "Authentication layouts and login form blocks.":
    "Layouts de autenticación y bloques de formulario de acceso.",
  "Registration layouts and signup form blocks.":
    "Layouts de registro y bloques de formulario de alta.",
  "Example 01": "Ejemplo 01",
  "Example 02": "Ejemplo 02",
  "Example 03": "Ejemplo 03",
  "Example 04": "Ejemplo 04",
  "Example 05": "Ejemplo 05",
  "A simple login form.": "Un formulario de acceso simple.",
  "A two column login page with a cover image.":
    "Página de acceso en dos columnas con imagen de portada.",
  "A login page with a muted background color.":
    "Página de acceso con fondo muted.",
  "A login page with form and image.":
    "Página de acceso con formulario e imagen.",
  "A simple email-only login page.":
    "Página de acceso solo con email.",
  "A simple signup form.": "Un formulario de registro simple.",
  "A two column signup page with a cover image.":
    "Página de registro en dos columnas con imagen de portada.",
  "A signup page with a muted background color.":
    "Página de registro con fondo muted.",
  "A signup page with form and image.":
    "Página de registro con formulario e imagen.",
  "A simple signup form with social providers.":
    "Formulario de registro simple con proveedores sociales.",
  "ModernUI login.": "Login de ModernUI.",
  "ModernUI signup.": "Signup de ModernUI.",
  "Login Blocks": "Bloques de Login",
  "Signup Blocks": "Bloques de Signup",
  "Additional CSS classes.": "Clases CSS adicionales.",
  "Login blocks are full-page layouts. Install individual blocks such as login-01 from the registry.":
    "Los bloques de login son layouts de página completa. Instala bloques individuales como login-01 desde el registro.",
  "Signup blocks are full-page layouts. Install individual blocks such as signup-01 from the registry.":
    "Los bloques de signup son layouts de página completa. Instala bloques individuales como signup-01 desde el registro.",

  // ── Application Sidebar ────────────────────────────────────
  "DataOS application sidebar with brand logo, grouped navigation, active teal highlight, and expanded or collapsed rail modes.":
    "Barra lateral de aplicación DataOS con logo de marca, navegación agrupada, resaltado teal activo y modos expandido o rail colapsado.",
  "A composed sidebar for DataOS shells — Home, Data Products, Datasets, Workbench, Resources, and More, with footer actions for panel toggle and documentation.":
    "Barra lateral compuesta para shells DataOS — Home, Data Products, Datasets, Workbench, Resources y More, con acciones de pie para panel y documentación.",
  Expanded: "Expandida",
  "Full sidebar with DataOS wordmark, labeled navigation groups, and footer actions.":
    "Barra completa con wordmark DataOS, grupos de navegación etiquetados y acciones de pie.",
  "Default shell navigation with dividers after Home and Workbench. Home uses the teal active state from the design.":
    "Navegación de shell por defecto con divisores tras Home y Workbench. Home usa el estado activo teal del diseño.",
  "Collapsed rail": "Rail colapsado",
  "Icon-only sidebar with logo mark and centered nav icons.":
    "Barra solo iconos con marca del logo e iconos de nav centrados.",
  "Use defaultCollapsed or toggle via the Close panel footer action. Width animates between expanded and rail modes.":
    "Usa defaultCollapsed o el toggle Close panel del pie. El ancho anima entre modos expandido y rail.",
  Collapsed: "Colapsada",
  "Compact icon rail for focused workspaces.":
    "Rail de iconos compacto para workspaces enfocados.",
  "Pin & reorder": "Fijar y reordenar",
  "Hover a nav item to reveal its pin control. Pinned apps move into a dedicated area under Home and can be dragged to reorder.":
    "Pasa el cursor sobre un ítem para revelar el control de pin. Las apps fijadas van a un área bajo Home y se pueden arrastrar para reordenar.",
  "Data Products is pinned by default and cannot be unpinned (pinLocked). Users can pin two more apps (max 3 total). Once the limit is reached, hovering another item's pin icon shows a tooltip: only 3 allow. Drag-and-drop reorders pinned rows via native HTML5 events.":
    "Data Products está fijado por defecto y no se puede desfijar (pinLocked). Se pueden fijar dos apps más (máx. 3). Al llegar al límite, el tooltip del pin dice: only 3 allow. Drag-and-drop reordena con eventos HTML5 nativos.",
  "Pin & drag to reorder": "Fijar y arrastrar para reordenar",
  "Data Products pinned by default; pin two more, drag to reorder.":
    "Data Products fijado por defecto; fija dos más, arrastra para reordenar.",
  "Controlled active item and collapse state.":
    "Ítem activo y estado de colapso controlados.",
  "Controlled state": "Estado controlado",
  "Wire activeId and collapsed from your app shell.":
    "Conecta activeId y collapsed desde el shell de tu app.",
  "Full sidebar with labels and logo wordmark.":
    "Barra completa con etiquetas y wordmark del logo.",
  "Icon-only rail with logo mark.":
    "Rail solo iconos con marca del logo.",
  "Pin up to three apps and drag to reorder them.":
    "Fija hasta tres apps y arrástralas para reordenarlas.",
  "Active item and collapse driven by parent state.":
    "Ítem activo y colapso impulsados por el estado del padre.",
  "DataOS brand logo with full wordmark in expanded mode and mark-only in collapsed mode.":
    "Logo de marca DataOS con wordmark completo en modo expandido y solo marca en colapsado.",
  "Grouped navigation with dividers after Home and Workbench.":
    "Navegación agrupada con divisores tras Home y Workbench.",
  "Teal active state on the current item; cream background shell.":
    "Estado activo teal en el ítem actual; shell con fondo cream.",
  "Hover-to-pin (max three) with Data Products pinned by default.":
    "Hover-to-pin (máx. tres) con Data Products fijado por defecto.",
  "Locked pins via pinLocked — Data Products cannot be unpinned but can be reordered.":
    "Pins bloqueados vía pinLocked — Data Products no se desfija pero se puede reordenar.",
  "Pin tooltip when at the limit: hovering the pin icon shows only 3 allow.":
    "Tooltip de pin al límite: al pasar el cursor muestra only 3 allow.",
  "Drag-and-drop reordering of pinned apps via native HTML5 drag events.":
    "Reordenación drag-and-drop de apps fijadas con eventos HTML5 nativos.",
  "Collapsed rail shows icon tooltips on hover for each navigation item.":
    "El rail colapsado muestra tooltips de icono al hover en cada ítem.",
  "Footer actions for panel toggle and documentation.":
    "Acciones de pie para toggle del panel y documentación.",
  "DataOsSidebar Props": "Props de DataOsSidebar",
  "Controlled active navigation item id.":
    "Id del ítem de navegación activo controlado.",
  "Initial active item for uncontrolled usage.":
    "Ítem activo inicial para uso no controlado.",
  "Fires when a navigation item is selected.":
    "Se dispara cuando se selecciona un ítem de navegación.",
  "Controlled collapsed rail state.":
    "Estado controlado del rail colapsado.",
  "Initial collapsed state for uncontrolled usage.":
    "Estado colapsado inicial para uso no controlado.",
  "Fires when collapse state changes (e.g. Close panel).":
    "Se dispara cuando cambia el colapso (p. ej. Close panel).",
  "Main navigation items. Defaults to the DataOS shell set.":
    "Ítems de navegación principal. Por defecto el set del shell DataOS.",
  "Footer navigation items. Defaults to Close panel and Documentation.":
    "Ítems de navegación del pie. Por defecto Close panel y Documentation.",
  "Enable the pinned area with hover-to-pin and drag-to-reorder.":
    "Activa el área fijada con hover-to-pin y drag-to-reorder.",
  "Maximum apps allowed in the pinned area.":
    "Máximo de apps permitidas en el área fijada.",
  "Controlled list of pinned item ids, in display order.":
    "Lista controlada de ids fijados, en orden de visualización.",
  "Initial pinned ids for uncontrolled usage. Data Products is pinned by default.":
    "Ids fijados iniciales para uso no controlado. Data Products está fijado por defecto.",
  "Fires when apps are pinned, unpinned, or reordered.":
    "Se dispara cuando se fijan, desfijan o reordenan apps.",
  "Also exported: DataOsLogo, DataOsLogoMark, DataOsSidebarItem. Close panel toggles collapsed state. Set pinnable: false to exclude an item from pinning. Set pinLocked: true to keep an item always pinned (Data Products by default). Locked items can still be drag-reordered.":
    "También exportados: DataOsLogo, DataOsLogoMark, DataOsSidebarItem. Close panel alterna el colapso. Usa pinnable: false para excluir del pin. Usa pinLocked: true para mantener siempre fijado (Data Products por defecto). Los bloqueados aún se pueden reordenar.",
  "Expanded / collapsed": "Expandida / colapsada",
  "Animated width between labeled sidebar and icon rail":
    "Ancho animado entre barra etiquetada y rail de iconos",
  "Brand logo": "Logo de marca",
  "Full wordmark or geometric mark from app/assets/brand-logo.svg":
    "Wordmark completo o marca geométrica desde app/assets/brand-logo.svg",
  "Custom items": "Ítems personalizados",
  "Override items and footerItems for app-specific navigation":
    "Sobrescribe items y footerItems para navegación específica de la app",
  "Collapsed tooltips": "Tooltips colapsados",
  "Icon rail shows item labels on hover via the tooltip primitive":
    "El rail de iconos muestra etiquetas al hover vía el primitivo tooltip",
  "Data Products pinned by default; pin two more, drag to reorder, tooltip at limit":
    "Data Products fijado por defecto; fija dos más, arrastra para reordenar, tooltip al límite",

  // ── Application Header ─────────────────────────────────────
  "Top application panel with tenant switcher, optional breadcrumbs, and user avatar for DataOS shells.":
    "Panel superior de aplicación con selector de tenant, breadcrumbs opcionales y avatar de usuario para shells DataOS.",
  "A composed header for DataOS application shells — Level 1 shows the tenant label with a dropdown, Level 2 collapses the tenant trigger to a badge and adds breadcrumb navigation.":
    "Encabezado compuesto para shells DataOS — Level 1 muestra la etiqueta de tenant con dropdown; Level 2 colapsa el trigger a un badge y añade breadcrumbs.",
  "Level 1 — Tenant switch": "Level 1 — Cambio de tenant",
  "Top panel with expanded tenant switcher and user avatar.":
    "Panel superior con selector de tenant expandido y avatar de usuario.",
  'Use variant="l1" on home or top-level routes. The tenant trigger shows the colored badge, tenant name, and chevron. Click to open the tenant list with a checkmark on the active item.':
    'Usa variant="l1" en home o rutas de nivel superior. El trigger muestra badge de color, nombre de tenant y chevron. Haz clic para abrir la lista con checkmark en el activo.',
  "Level 2 — Breadcrumbs": "Level 2 — Breadcrumbs",
  "Badge-only tenant trigger with breadcrumb trail and user avatar.":
    "Trigger de tenant solo badge con trail de breadcrumbs y avatar.",
  'Use variant="l2" on nested pages. The tenant switcher collapses to the initials badge; breadcrumbs fill the center area. Long labels truncate with ellipsis.':
    'Usa variant="l2" en páginas anidadas. El selector se colapsa al badge de iniciales; los breadcrumbs llenan el centro. Etiquetas largas se truncan con ellipsis.',
  "With breadcrumbs": "Con breadcrumbs",
  "Tenant badge + breadcrumb navigation.":
    "Badge de tenant + navegación breadcrumb.",
  "Tenant states": "Estados de tenant",
  "Colored tenant badges across sandbox environments.":
    "Badges de tenant de color en entornos sandbox.",
  "Each tenant uses a two-letter badge with a pastel background from the design palette. Override tenants and className per tenant for custom environments.":
    "Cada tenant usa un badge de dos letras con fondo pastel de la paleta. Sobrescribe tenants y className por tenant para entornos personalizados.",
  "Tenant palette": "Paleta de tenants",
  "L1 and L2 examples with alternate tenant colors.":
    "Ejemplos L1 y L2 con colores de tenant alternativos.",
  "Controlled tenant selection.":
    "Selección de tenant controlada.",
  "Controlled tenant": "Tenant controlado",
  "Wire tenantId and onTenantChange from your app shell.":
    "Conecta tenantId y onTenantChange desde el shell de tu app.",
  "Compose shell": "Shell compuesto",
  "Header + sidebar + main content for a full DataOS layout.":
    "Encabezado + barra lateral + contenido principal para un layout DataOS completo.",
  "Application shell": "Shell de aplicación",
  "Stack Application Header above DataOs Sidebar and a main region.":
    "Apila Application Header sobre DataOs Sidebar y una región principal.",
  "Level 1": "Level 1",
  "Expanded tenant switcher.": "Selector de tenant expandido.",
  "Level 2": "Level 2",
  "Badge tenant trigger with breadcrumbs.":
    "Trigger de tenant tipo badge con breadcrumbs.",
  "Colored tenant badge palette.":
    "Paleta de badges de tenant de color.",
  "Tenant driven by parent state.":
    "Tenant impulsado por el estado del padre.",
  "Level 1 header with expanded tenant switcher (badge + label + chevron) and user avatar.":
    "Encabezado Level 1 con selector de tenant expandido (badge + label + chevron) y avatar.",
  "Level 2 header with badge-only tenant trigger and breadcrumb navigation.":
    "Encabezado Level 2 con trigger solo badge y navegación breadcrumb.",
  "Tenant dropdown with colored initials badges and checkmark on the active tenant.":
    "Dropdown de tenant con badges de iniciales de color y checkmark en el activo.",
  "Pastel tenant color palette for sandbox environments (PR, CT, DE, QA, SE).":
    "Paleta pastel de tenants para sandboxes (PR, CT, DE, QA, SE).",
  "Truncated breadcrumb labels for long page titles.":
    "Etiquetas de breadcrumb truncadas para títulos largos.",
  "ApplicationHeader Props": "Props de ApplicationHeader",
  "L1 shows expanded tenant switcher. L2 shows badge-only tenant trigger with breadcrumbs.":
    "L1 muestra el selector expandido. L2 muestra trigger solo badge con breadcrumbs.",
  "Tenant list for the switcher dropdown. Defaults to Product-Sandbox, Ct-Sandbox, Demo, Qa, Se-Sandbox.":
    "Lista de tenants del dropdown. Por defecto Product-Sandbox, Ct-Sandbox, Demo, Qa, Se-Sandbox.",
  "Controlled active tenant id.": "Id del tenant activo controlado.",
  "Initial tenant for uncontrolled usage.":
    "Tenant inicial para uso no controlado.",
  "Fires when a tenant is selected from the dropdown.":
    "Se dispara cuando se selecciona un tenant del dropdown.",
  "Breadcrumb trail for L2 variant. Last item renders as the current page.":
    "Trail de breadcrumbs para la variante L2. El último ítem es la página actual.",
  "User avatar shown on the right. Defaults to IS initials on purple.":
    "Avatar de usuario a la derecha. Por defecto iniciales IS en púrpura.",
  "Additional classes on the header element.":
    "Clases adicionales en el elemento header.",
  "Also exported: ApplicationHeaderTenantBadge. Set className on each tenant for custom badge colors. Header height is h-14 (56px) per the design spec.":
    "También exportado: ApplicationHeaderTenantBadge. Usa className por tenant para colores de badge. Altura del header h-14 (56px) según el diseño.",
  "L1 / L2 variants": "Variantes L1 / L2",
  "Tenant-only top panel or nested page header with breadcrumbs":
    "Panel superior solo tenant o encabezado de página anidada con breadcrumbs",
  "Tenant switcher": "Selector de tenant",
  "Dropdown with colored badges and active checkmark":
    "Dropdown con badges de color y checkmark activo",
  "Custom tenants": "Tenants personalizados",
  "Override tenants array and badge colors for your environments":
    "Sobrescribe el array tenants y colores de badge para tus entornos",

  // ── Layout page ────────────────────────────────────────────
  "Layout": "Layout",
  "Handling the overall layout of a page.":
    "Gestión del layout general de una página.",
  "Page shell with Header, Sider, Content, and Footer.":
    "Cáscara de página con Header, Sider, Content y Footer.",
  "Compose page shells with Layout, LayoutHeader, LayoutSider, LayoutContent, and LayoutFooter. Nest Layouts for row/column regions. Pair with Sidebar for rich navigation, or DataOS ApplicationHeader and DataOsSidebar for product shells.":
    "Compón cáscaras de página con Layout, LayoutHeader, LayoutSider, LayoutContent y LayoutFooter. Anida Layouts para regiones en fila/columna. Combínalo con Sidebar para navegación rica, o ApplicationHeader y DataOsSidebar de DataOS para shells de producto.",
  "Examples": "Ejemplos",
  "Common page structures built from Layout compounds.":
    "Estructuras de página habituales con los compuestos de Layout.",
  "Basic Structure": "Estructura básica",
  "Header, Sider, Content, and Footer.":
    "Header, Sider, Content y Footer.",
  "Nest a horizontal Layout (hasSider) between Header and Footer for the classic app chrome.":
    "Anida un Layout horizontal (hasSider) entre Header y Footer para el chrome clásico de la app.",
  "Header-Content-Footer": "Header-Content-Footer",
  "Top and bottom chrome with a flexible content area.":
    "Chrome superior e inferior con un área de contenido flexible.",
  "Header-Sider": "Header-Sider",
  "Full-width header above a sider and content row.":
    "Header a ancho completo encima de una fila sider + contenido.",
  "Header Sider 2": "Header Sider 2",
  "Sider spans the full height; header sits in the content column.":
    "El sider ocupa toda la altura; el header queda en la columna de contenido.",
  "Sider": "Sider",
  "Left navigation column and main content only.":
    "Solo columna de navegación izquierda y contenido principal.",
  "Custom trigger": "Trigger personalizado",
  "Replace the default collapse control.":
    "Sustituye el control de colapso por defecto.",
  "Collapsible": "Colapsable",
  "Built-in collapse trigger on LayoutSider.":
    "Trigger de colapso integrado en LayoutSider.",
  "Fixed Header": "Header fijo",
  "Sticky header while content scrolls.":
    "Header sticky mientras el contenido hace scroll.",
  "Fixed Sider": "Sider fijo",
  "Sticky sider while content scrolls.":
    "Sider sticky mientras el contenido hace scroll.",
  "Composition": "Composición",
  "Combine Layout with navigation building blocks.":
    "Combina Layout con bloques de navegación.",
  "With Sidebar": "Con Sidebar",
  "Generic SidebarProvider + Sidebar inside a Layout shell.":
    "SidebarProvider + Sidebar genéricos dentro de un shell Layout.",
  "Use the sidebar primitive for menus, cookies, and mobile sheet behavior. Layout supplies header/content chrome. See /components/sidebar.":
    "Usa el primitivo sidebar para menús, cookies y sheet móvil. Layout aporta el chrome de header/contenido. Ver /components/sidebar.",
  "Sidebar docs": "Docs de Sidebar",
  "DataOS shell": "Shell DataOS",
  "DataOS home": "Home DataOS",
  "Sidebar + content with user avatar and centered page title — the standard DataOS app frame.":
    "Sidebar + contenido con avatar de usuario y título centrado — el marco estándar de la app DataOS.",
  "Compose DataOsSidebar with LayoutContent. Hover nav items for descriptions; the avatar sits in the content corner. See DataOS Sidebar docs for pinning and collapse.":
    "Compón DataOsSidebar con LayoutContent. Pasa el cursor por los ítems para ver descripciones; el avatar queda en la esquina del contenido. Ver docs de DataOS Sidebar para pinning y colapso.",
  "DataOS Sidebar": "DataOS Sidebar",
  "DataOS shell with header": "Shell DataOS con header",
  "ApplicationHeader + DataOsSidebar composed with Layout.":
    "ApplicationHeader + DataOsSidebar compuestos con Layout.",
  "Add ApplicationHeader above the sider row when you need tenant switch and breadcrumbs.":
    "Añade ApplicationHeader encima de la fila del sider cuando necesites cambio de tenant y breadcrumbs.",
  "Full-height sidebar beside header + content; expand/collapse overlays without resizing the main column.":
    "Sidebar a altura completa junto a header + contenido; expandir/colapsar hace overlay sin redimensionar la columna principal.",
  "Sidebar is position absolute and full height. Header sits above content in a pl-14 column (collapsed rail width). Expanding the sidebar overlays header and content — it does not shrink them.":
    "El sidebar es absolute y a altura completa. El header queda encima del contenido en una columna con pl-14 (ancho del rail colapsado). Al expandir, el sidebar se superpone al header y al contenido — no los encoge.",
  "Product shells nest DataOS blocks in Layout regions. See Application Header and DataOS Sidebar docs.":
    "Los shells de producto anidan bloques DataOS en regiones Layout. Ver docs de Application Header y DataOS Sidebar.",
  "Application Header": "Application Header",
  "Compound page shell: Layout, LayoutHeader, LayoutSider, LayoutContent, LayoutFooter.":
    "Shell de página compuesto: Layout, LayoutHeader, LayoutSider, LayoutContent, LayoutFooter.",
  "Nested Layouts for row (hasSider) and column regions.":
    "Layouts anidados para regiones en fila (hasSider) y columna.",
  "LayoutSider supports collapsed, collapsible, width, collapsedWidth, and custom trigger.":
    "LayoutSider admite collapsed, collapsible, width, collapsedWidth y trigger personalizado.",
  "Compose with Sidebar for rich nav, or DataOS ApplicationHeader / DataOsSidebar for product shells.":
    "Compón con Sidebar para navegación rica, o ApplicationHeader / DataOsSidebar de DataOS para shells de producto.",
  "Layout & LayoutSider Props": "Props de Layout y LayoutSider",
  "Layout: force horizontal (row) direction when a Sider is present. Useful for SSR; otherwise Layout detects mounted LayoutSider children.":
    "Layout: fuerza dirección horizontal (fila) cuando hay Sider. Útil en SSR; si no, Layout detecta LayoutSider montados.",
  "LayoutSider: expanded width (px number or CSS length).":
    "LayoutSider: ancho expandido (número en px o longitud CSS).",
  "LayoutSider: width when collapsed.":
    "LayoutSider: ancho al colapsar.",
  "LayoutSider: controlled collapsed state.":
    "LayoutSider: estado colapsado controlado.",
  "LayoutSider: initial collapsed state when uncontrolled.":
    "LayoutSider: estado colapsado inicial si es no controlado.",
  "LayoutSider: show a collapse trigger (default or custom).":
    "LayoutSider: muestra un trigger de colapso (por defecto o personalizado).",
  "LayoutSider: custom trigger. Omit for the default icon button. Pass null to hide the trigger.":
    "LayoutSider: trigger personalizado. Omítelo para el botón icono por defecto. Pasa null para ocultarlo.",
  "LayoutSider: which edge the sider attaches to.":
    "LayoutSider: borde al que se adjunta el sider.",
  "LayoutSider: called when the trigger toggles collapse.":
    "LayoutSider: se llama cuando el trigger cambia el colapso.",
  "Additional CSS classes on Layout or LayoutSider.":
    "Clases CSS adicionales en Layout o LayoutSider.",
  "LayoutHeader, LayoutFooter, and LayoutContent accept standard HTML attributes plus className. For menus, cookies, and mobile drawers, nest Sidebar or use DataOsSidebar — LayoutSider is structural chrome only.":
    "LayoutHeader, LayoutFooter y LayoutContent aceptan atributos HTML estándar más className. Para menús, cookies y drawers móviles, anida Sidebar o usa DataOsSidebar — LayoutSider es solo chrome estructural.",
  "Nested layouts": "Layouts anidados",
  "Mix full-width headers with side navigation columns":
    "Combina headers a ancho completo con columnas de navegación lateral",
  "Collapsible sider": "Sider colapsable",
  "Ant-style width animation without pulling in Sidebar":
    "Animación de ancho al estilo Ant sin depender de Sidebar",
  "Drop in Sidebar or DataOS blocks for product navigation":
    "Inserta Sidebar o bloques DataOS para la navegación del producto",

  // ── Plan Card page ─────────────────────────────────────────
  "Plan Card": "Tarjeta de plan",
  "Plan summary card with success, hover, error, and expandable change/impact details.":
    "Tarjeta de resumen de plan con estados success, hover, error y detalles expandibles de cambios/impactos.",
  "A compact card for browsing plan versions. It shows plan id, version, timestamp, duration, and change/impact metrics, with an expandable panel for detailed deltas and an optional details link.":
    "Tarjeta compacta para explorar versiones de plan. Muestra id, versión, fecha, duración y métricas de cambios/impactos, con panel expandible y enlace opcional a detalles.",
  "Success, hover, error, and expanded detail views.":
    "Vistas success, hover, error y detalle expandido.",
  "Successful plan card with changes and impacts.":
    "Tarjeta de plan correcta con cambios e impactos.",
  "Successful plan card.": "Tarjeta de plan correcta.",
  "Failed plan card with error, changes, and impacts.":
    "Tarjeta de plan fallida con error, cambios e impactos.",
  "Failed plan card.": "Tarjeta de plan fallida.",
  "Expanded panel with detail metrics, status rows, and Open plan details link.":
    "Panel expandido con métricas detalladas, filas de estado y enlace Abrir detalles del plan.",
  "Plan list": "Lista de planes",
  "Stack success, hover, and error cards.":
    "Apila tarjetas success, hover y error.",
  "PlanCardSkeleton placeholders while plan data loads.":
    "Marcadores PlanCardSkeleton mientras cargan los datos del plan.",
  "Plan id, version, timestamp, and duration header layout.":
    "Cabecera con id de plan, versión, fecha y duración.",
  "Summary metric row (Changes, Impacts, optional Error) with expand chevron.":
    "Fila de métricas resumen (Changes, Impacts, Error opcional) con chevron de expansión.",
  "Expandable panel with detail metrics, italic status rows, and Open plan details link.":
    "Panel expandible con métricas detalladas, filas de estado en cursiva y enlace Abrir detalles del plan.",
  "PlanCardSkeleton loading placeholder.":
    "Marcador de carga PlanCardSkeleton.",
  "Built-in en/es message catalog for default labels and status screen-reader text.":
    "Catálogo en/es integrado para etiquetas por defecto y texto de estado para lectores de pantalla.",
  "PlanCard Props": "Props de PlanCard",
  "Plan identifier shown as the primary label (for example \"#7\").":
    "Identificador del plan como etiqueta principal (por ejemplo \"#7\").",
  "Version label in the top-right corner (for example \"v0.1.3\").":
    "Etiqueta de versión en la esquina superior derecha (por ejemplo \"v0.1.3\").",
  "Localized plan timestamp text.": "Texto de fecha/hora del plan.",
  "Plan duration text (for example \"4.1s\").":
    "Texto de duración del plan (por ejemplo \"4.1s\").",
  "Controls the status icon and plan id color.":
    "Controla el icono de estado y el color del id del plan.",
  "Collapsed summary chips as \"Label (value)\". Defaults to Changes and Impacts.":
    "Chips de resumen colapsados como \"Label (value)\". Por defecto Changes e Impacts.",
  "Expanded key/value rows (Modified, Added, Removed, Impacts, Backfills).":
    "Filas clave/valor expandidas (Modified, Added, Removed, Impacts, Backfills).",
  "Expanded status lines with italic values (for example Environment statement → \"changed\").":
    "Líneas de estado expandidas con valores en cursiva (por ejemplo Environment statement → \"changed\").",
  "Controlled expanded state for the detail panel.":
    "Estado expandido controlado del panel de detalle.",
  "Initial expanded state when uncontrolled.":
    "Estado expandido inicial cuando no está controlado.",
  "Called when the expand chevron toggles the detail panel.":
    "Se llama cuando el chevron expande o contrae el panel de detalle.",
  "When set, shows the Open plan details footer link in the expanded panel.":
    "Si se define, muestra el enlace Abrir detalles del plan en el panel expandido.",
  "Override the Open plan details link label.":
    "Sobrescribe la etiqueta del enlace Abrir detalles del plan.",
  "Also exported: PlanCardSkeleton, planCardMessages, PlanCardMetric, PlanCardDetailRow, and PlanCardStatus. Wrap the tree in LanguageProvider (i18n registry item) for planCardMessages.":
    "También exportados: PlanCardSkeleton, planCardMessages, PlanCardMetric, PlanCardDetailRow y PlanCardStatus. Envuelve el árbol en LanguageProvider (ítem i18n) para planCardMessages.",
  "Metric label, such as \"Changes\", \"Impacts\", or \"Error\".":
    "Etiqueta de métrica, como \"Changes\", \"Impacts\" o \"Error\".",
  "Additional classes on the skeleton wrapper.":
    "Clases adicionales en el contenedor del skeleton.",
  "Lists, selection, and loading placeholders.":
    "Listas, selección y marcadores de carga.",
  "Metric value rendered inside parentheses, such as \"3\" or \"7\".":
    "Valor de métrica entre paréntesis, como \"3\" o \"7\".",
  "Optional selected and onSelect for controlled plan lists with aria-pressed.":
    "selected y onSelect opcionales para listas de planes controladas con aria-pressed.",
  "Optional semantic color: \"success\", \"error\", or \"default\".":
    "Color semántico opcional: \"success\", \"error\" o \"default\".",
  "PlanCardMetric": "PlanCardMetric",
  "PlanCardSkeleton": "PlanCardSkeleton",
  "Use selected with onSelect for a plan list; cards expose aria-pressed when selectable.":
    "Usa selected con onSelect para una lista de planes; las tarjetas exponen aria-pressed cuando son seleccionables.",
  "A compact card for browsing plan versions. It supports semantic statuses, relative time, clickable metrics, controlled expansion, density, and an expandable panel for detailed deltas.":
    "Tarjeta compacta para explorar versiones de planes. Admite estados semánticos, tiempo relativo, métricas interactivas, expansión controlada, densidad y un panel expandible con cambios detallados.",
  "Accordion expansion, clickable metrics, compact density, and empty details.":
    "Expansión tipo acordeón, métricas interactivas, densidad compacta y detalles vacíos.",
  "Accordion plan list": "Lista de planes en acordeón",
  "Clickable metrics via per-metric href or onClick.":
    "Métricas interactivas mediante href u onClick por métrica.",
  "Compact density via size=\"sm\" and relative time via startedAt.":
    "Densidad compacta mediante size=\"sm\" y tiempo relativo mediante startedAt.",
  "Control expanded and onExpandedChange so only one plan remains open.":
    "Controla expanded y onExpandedChange para mantener abierto un solo plan.",
  "Controlled accordion lists via expanded and onExpandedChange.":
    "Listas de acordeón controladas mediante expanded y onExpandedChange.",
  "Density and empty state": "Densidad y estado vacío",
  "Draft, running, warning, and cancelled plans with relative time where applicable.":
    "Planes en borrador, en curso, con advertencias y cancelados, con tiempo relativo cuando corresponde.",
  "Localized plan timestamp text when startedAt is omitted.":
    "Texto localizado de fecha y hora cuando se omite startedAt.",
  "Optional metric link or action; activation does not trigger card selection.":
    "Enlace o acción opcional por métrica; su activación no selecciona la tarjeta.",
  "Optional semantic color matching PlanCardStatus.":
    "Color semántico opcional correspondiente a PlanCardStatus.",
  "Related runs": "Ejecuciones relacionadas",
  "Renders relative time instead of timestamp.":
    "Muestra tiempo relativo en lugar de timestamp.",
  "Select a plan and show its related Run Cards beside the plan list.":
    "Selecciona un plan y muestra sus Run Cards junto a la lista de planes.",
  "Success, error, draft, running, warning, and cancelled semantic statuses.":
    "Estados semánticos success, error, draft, running, warning y cancelled.",
  "Use href or onClick on Changes, Impacts, and Error summary metrics.":
    "Usa href u onClick en las métricas resumen Changes, Impacts y Error.",
  "Use size=\"sm\" for compact histories; empty details show a localized message.":
    "Usa size=\"sm\" para historiales compactos; los detalles vacíos muestran un mensaje localizado.",

  "One card with cream hover (cream-bg-3). Move the pointer over the card to preview.":
    "Una tarjeta con hover cream (cream-bg-3). Pasa el cursor para previsualizar.",
  "Cream hover surface on one card.":
    "Superficie cream al hover en una tarjeta.",
  "Cream hover surface (cream-bg-3); selected uses teal surface and dark teal border.":
    "Superficie cream al hover (cream-bg-3); el seleccionado usa superficie teal y borde dark teal.",
  "Pins the teal surface and dark teal border for an active/selected card.":
    "Fija la superficie teal y el borde dark teal para una tarjeta activa/seleccionada.",
  "Hover the card to see the cream surface (cream-bg-3).":
    "Pasa el cursor para ver la superficie cream (cream-bg-3).",
  "Click a card to select it. Selected cards use the teal surface and border.":
    "Haz clic para seleccionar. Las tarjetas seleccionadas usan superficie y borde teal.",
  "Active / selected": "Activo / seleccionado",
  "Selected cards keep the teal surface and dark teal border.":
    "Las tarjetas seleccionadas mantienen la superficie teal y el borde dark teal.",
  "Selected plan card with a teal surface and dark teal border.":
    "Tarjeta de plan seleccionada con superficie teal y borde dark teal.",
  "Selected plan card with persistent teal styling.":
    "Tarjeta de plan seleccionada con estilo teal persistente.",
  "Selected run card with a teal surface and dark teal border.":
    "Tarjeta de ejecución seleccionada con superficie teal y borde dark teal.",
  "Selected run card with persistent teal styling.":
    "Tarjeta de ejecución seleccionada con estilo teal persistente.",

  // ── Plan Status Card page ──────────────────────────────────
  "Plan Status Card": "Tarjeta de estado del plan",
  "Expandable plan feature status card for SQL diffs, impacts, errors, and environment changes.":
    "Tarjeta expandible de estado para diferencias SQL, impactos, errores y cambios de entorno.",
  "Use Plan Status Card inside plan details to summarize model changes. It supports collapsed and expanded states, semantic badges, error borders, SQL diff lines, and impacted resources.":
    "Usa Plan Status Card en los detalles del plan para resumir cambios de modelos. Admite estados colapsado y expandido, badges semánticos, bordes de error, diferencias SQL y recursos afectados.",
  "Breaking change": "Cambio incompatible",
  "Breaking": "Incompatible",
  "Breaking and backfill status with SQL diff and impacts.":
    "Estado incompatible y backfill con diferencias SQL e impactos.",
  "Compact model row with Breaking and Backfill badges.":
    "Fila compacta de modelo con badges Breaking y Backfill.",
  "Expanded SQL diff with added/removed lines and impacted resources.":
    "Diferencia SQL expandida con líneas añadidas/eliminadas y recursos afectados.",
  "Undefined table": "Tabla no definida",
  "Error state with a red border and diagnostic stack trace.":
    "Estado de error con borde rojo y traza de diagnóstico.",
  "Collapsed error": "Error colapsado",
  "Compact undefined-table error state.":
    "Estado compacto de error de tabla no definida.",
  "Expanded error": "Error expandido",
  "Expanded diagnostic message and stack trace.":
    "Mensaje de diagnóstico y traza expandidos.",
  "Environment changes": "Cambios de entorno",
  "Environment-level SQL changes without model badges.":
    "Cambios SQL de entorno sin badges de modelo.",
  "Collapsed environment": "Entorno colapsado",
  "Compact environment changes row.":
    "Fila compacta de cambios de entorno.",
  "Expanded environment": "Entorno expandido",
  "Expanded environment SQL diff.":
    "Diferencia SQL de entorno expandida.",
  "Collapsed breaking-change status.":
    "Estado colapsado de cambio incompatible.",
  "Collapsed undefined-table error.":
    "Error colapsado de tabla no definida.",
  "Controlled or uncontrolled collapsed and expanded states.":
    "Estados colapsado y expandido controlados o no controlados.",
  "Default and error card borders.":
    "Bordes de tarjeta predeterminado y de error.",
  "Breaking, Backfill, Undefined table, and custom semantic badges.":
    "Badges semánticos Breaking, Backfill, Undefined table y personalizados.",
  "SQL diff panel with context, info, added, and removed line colors.":
    "Panel de diferencias SQL con colores para contexto, información, líneas añadidas y eliminadas.",
  "Impacted metric and semantic resource list.":
    "Lista de métricas y recursos semánticos afectados.",
  "Diagnostic error panel for query and planning failures.":
    "Panel de diagnóstico para errores de consulta y planificación.",
  "Accessible header button with aria-expanded and aria-controls.":
    "Botón de cabecera accesible con aria-expanded y aria-controls.",
  "PlanStatusCard Props": "Props de PlanStatusCard",
  "Model, feature, or environment label.":
    "Etiqueta de modelo, característica o entorno.",
  "Optional model type label, such as \"FULL\".":
    "Etiqueta opcional del tipo de modelo, como \"FULL\".",
  "Status badges shown on the right side of the header.":
    "Badges de estado mostrados a la derecha de la cabecera.",
  "Controls the card border treatment.":
    "Controla el estilo del borde de la tarjeta.",
  "Controlled expanded state.": "Estado expandido controlado.",
  "Called when the header toggles expansion.":
    "Se llama cuando la cabecera alterna la expansión.",
  "Expanded content, usually diff, error, and impact panels.":
    "Contenido expandido, normalmente paneles de diferencias, errores e impactos.",
  "Also exported: PlanStatusDiff, PlanStatusError, PlanStatusImpacts, PlanStatusBadge, PlanStatusDiffLine, and PlanStatusImpact.":
    "También exportados: PlanStatusDiff, PlanStatusError, PlanStatusImpacts, PlanStatusBadge, PlanStatusDiffLine y PlanStatusImpact.",
  "PlanStatusBadge": "PlanStatusBadge",
  "Badge treatment: \"default\", \"muted\", or \"error\".":
    "Estilo del badge: \"default\", \"muted\" o \"error\".",
  "PlanStatusDiffLine": "PlanStatusDiffLine",
  "\"context\", \"info\", \"add\", or \"remove\".":
    "\"context\", \"info\", \"add\" o \"remove\".",

  "Use Plan Status Card inside plan details to summarize model changes. It supports collapsed and expanded states, cream hover, teal selection, semantic badges, copyable SQL diffs, empty panels, density, and nested composition inside Plan Card.":
    "Usa Plan Status Card en los detalles del plan para resumir cambios de modelos. Admite estados colapsado y expandido, hover cream, selección teal, badges semánticos, diferencias SQL copiables, paneles vacíos, densidad y composición anidada dentro de Plan Card.",
  "Selected status card with teal surface and dark teal border.":
    "Tarjeta de estado seleccionada con superficie teal y borde dark teal.",
  "Selected status card with teal styling.":
    "Tarjeta de estado seleccionada con estilo teal.",
  "Expanded SQL diff with file path, line numbers, copy/download, and impacts.":
    "Diferencia SQL expandida con ruta de archivo, números de línea, copiar/descargar e impactos.",
  "Expanded diagnostic message with copy and download actions.":
    "Mensaje de diagnóstico expandido con acciones de copiar y descargar.",
  "Interaction and density": "Interacción y densidad",
  "Badge tones, empty panels, compact size, and loading.":
    "Tonos de badge, paneles vacíos, tamaño compacto y carga.",
  "More badges": "Más badges",
  "Non-breaking, Schema, Config, and other semantic badge tones.":
    "Tonos semánticos Non-breaking, Schema, Config y otros.",
  "Empty panels": "Paneles vacíos",
  "Localized empty states for missing diffs and impacts.":
    "Estados vacíos localizados para diferencias e impactos ausentes.",
  "Compact rows with size=\"sm\".": "Filas compactas con size=\"sm\".",
  "PlanStatusCardSkeleton placeholders while features load.":
    "Marcadores PlanStatusCardSkeleton mientras cargan las características.",
  "Accordion lists, filters, and composition inside Plan Card.":
    "Listas de acordeón, filtros y composición dentro de Plan Card.",
  "Accordion list": "Lista de acordeón",
  "Control expanded and selected so only one status card stays open.":
    "Controla expanded y selected para mantener abierta una sola tarjeta de estado.",
  "Filter chips": "Chips de filtro",
  "URL-driven filter": "Filtro impulsado por URL",
  "Mirror the selected chip into ?status= so Back/Forward restores the filter.":
    "Refleja el chip seleccionado en ?status= para que Atrás/Adelante restaure el filtro.",
  "Filter a stack by Breaking, Errors, or Environment.":
    "Filtra una pila por Breaking, Errors o Environment.",
  "Inside Plan Card": "Dentro de Plan Card",
  "Nest Plan Status Cards under an expanded Plan Card children slot.":
    "Anida Plan Status Cards bajo el slot children de un Plan Card expandido.",
  "Cream hover (cream-bg-3) and teal selected surface with dark teal border.":
    "Hover cream (cream-bg-3) y superficie seleccionada teal con borde dark teal.",
  "Breaking, Non-breaking, Backfill, Schema, Config, Undefined table, and custom badges.":
    "Badges Breaking, Non-breaking, Backfill, Schema, Config, Undefined table y personalizados.",
  "SQL diff panel with file path, line numbers, copy, and download.":
    "Panel de diferencias SQL con ruta, números de línea, copiar y descargar.",
  "Diagnostic error panel with copy and download.":
    "Panel de error de diagnóstico con copiar y descargar.",
  "Compact density via size=\"sm\".": "Densidad compacta mediante size=\"sm\".",
  "PlanStatusCardSkeleton loading placeholder.":
    "Marcador de carga PlanStatusCardSkeleton.",
  "Built-in en/es message catalog for panel labels and actions.":
    "Catálogo en/es integrado para etiquetas y acciones del panel.",
  "Accessible header button with aria-expanded, aria-controls, and keyboard activation.":
    "Botón de cabecera accesible con aria-expanded, aria-controls y activación por teclado.",
  "Header and badge density.": "Densidad de cabecera y badges.",
  "Pins teal surface and dark teal border when tone is default.":
    "Fija superficie teal y borde dark teal cuando tone es default.",
  "Called when the header is activated; sets aria-pressed.":
    "Se llama cuando se activa la cabecera; establece aria-pressed.",
  "Also exported: PlanStatusCardSkeleton, PlanStatusDiff, PlanStatusError, PlanStatusImpacts, planStatusCardMessages, and related types. Wrap the tree in LanguageProvider for message catalogs.":
    "También exportados: PlanStatusCardSkeleton, PlanStatusDiff, PlanStatusError, PlanStatusImpacts, planStatusCardMessages y tipos relacionados. Envuelve el árbol en LanguageProvider para los catálogos.",
  "\"default\", \"muted\", \"error\", \"success\", \"warning\", or \"info\".":
    "\"default\", \"muted\", \"error\", \"success\", \"warning\" o \"info\".",
  "PlanStatusDiff": "PlanStatusDiff",
  "Optional path shown above the diff lines.":
    "Ruta opcional mostrada encima de las líneas de diferencia.",
  "Renders old/new line number gutters when true.":
    "Renderiza gutters de números de línea old/new cuando es true.",
  "Line kind: \"context\", \"info\", \"add\", or \"remove\".":
    "Tipo de línea: \"context\", \"info\", \"add\" o \"remove\".",
  "Optional content under expanded detail rows (for example Plan Status Cards).":
    "Contenido opcional bajo las filas de detalle expandidas (por ejemplo Plan Status Cards).",
  "Selected uses teal surface and dark teal border.":
    "La selección usa superficie teal y borde dark teal.",
  "Only one status card stays expanded.":
    "Solo una tarjeta de estado permanece expandida.",
  "Status cards nested inside an expanded Plan Card.":
    "Tarjetas de estado anidadas dentro de un Plan Card expandido.",

  // ── Run Card page ──────────────────────────────────────────
  "Run Card": "Tarjeta de ejecución",
  "Pipeline run summary card with success, selected hover, and error states.":
    "Tarjeta de resumen de ejecución con estados success, hover seleccionado y error.",
  "A compact card for browsing pipeline runs. It shows run id, plan, timestamp, duration, and summary metrics with semantic success/error styling.":
    "Tarjeta compacta para explorar ejecuciones. Muestra id, plan, fecha, duración y métricas con estilos success/error.",
  "States": "Estados",
  "Success, selected hover, and error cards.":
    "Tarjetas success, hover seleccionado y error.",
  "Success": "Success",
  "Successful run card with model and DQ metrics.":
    "Tarjeta de ejecución correcta con métricas de modelos y DQ.",
  "Successful run card.": "Tarjeta de ejecución correcta.",
  "Hover": "Hover",
  "One card with built-in teal hover. Move the pointer over the card to preview.":
    "Una tarjeta con hover teal integrado. Pasa el cursor para previsualizar.",
  "Built-in teal hover on one card.":
    "Hover teal integrado en una tarjeta.",
  "Built-in teal hover surface and dark teal border on every card.":
    "Superficie teal y borde dark teal al hover en cada tarjeta.",
  "Optional selected prop to pin the hover look for active cards.":
    "Prop selected opcional para fijar el aspecto hover en tarjetas activas.",
  "Pins the teal hover surface and dark teal border for an active/selected card.":
    "Fija la superficie teal y el borde dark teal para una tarjeta activa/seleccionada.",
  "Also exported: RunCardMetric and RunCardStatus. Metric status supports \"success\", \"error\", or \"default\". Hover styles are always applied via CSS.":
    "También exportados: RunCardMetric y RunCardStatus. El status de métrica admite \"success\", \"error\" o \"default\". El hover se aplica siempre con CSS.",
  "Error": "Error",
  "Failed run card with error, model, and DQ metrics.":
    "Tarjeta de ejecución fallida con métricas de error, modelos y DQ.",
  "Failed run card.": "Tarjeta de ejecución fallida.",
  "Render cards as a vertical run history.":
    "Renderiza las tarjetas como un historial vertical de ejecuciones.",
  "Run list": "Lista de ejecuciones",
  "Stack success, selected, and error cards.":
    "Apila tarjetas success, seleccionada y error.",
  "Success and error status icons with DataOS semantic colors.":
    "Iconos de estado success y error con colores semánticos DataOS.",
  "Run id, plan, timestamp, and duration header layout.":
    "Cabecera con id de ejecución, plan, fecha y duración.",
  "Metric row with per-metric semantic coloring, including error count.":
    "Fila de métricas con color semántico por métrica, incluido el conteo de errores.",
  "Optional href or onClick for clickable run navigation.":
    "href u onClick opcionales para navegar a la ejecución.",
  "RunCard Props": "Props de RunCard",
  "Run identifier shown as the primary label (for example \"#10010\").":
    "Identificador de ejecución como etiqueta principal (por ejemplo \"#10010\").",
  "Plan label shown in the top-right corner (for example \"Plan #01\").":
    "Etiqueta del plan en la esquina superior derecha (por ejemplo \"Plan #01\").",
  "Localized run timestamp text.": "Texto de fecha/hora de la ejecución.",
  "Run duration text (for example \"4.1s\").":
    "Texto de duración (por ejemplo \"4.1s\").",
  "Controls the status icon and run id color.":
    "Controla el icono de estado y el color del id de ejecución.",
  "Footer metrics rendered as \"Label (value)\" segments. Defaults to Models (7) and DQ (12/16).":
    "Métricas del pie como segmentos \"Label (value)\". Por defecto Models (7) y DQ (12/16).",
  "RunCardMetric": "RunCardMetric",
  "Metric label, such as \"Error\", \"Models\", or \"DQ\".":
    "Etiqueta de métrica, como \"Error\", \"Models\" o \"DQ\".",
  "Metric value rendered inside parentheses, such as \"3\" or \"12/16\".":
    "Valor de métrica entre paréntesis, como \"3\" o \"12/16\".",
  "Optional semantic color override: \"success\", \"error\", or \"default\".":
    "Color semántico opcional: \"success\", \"error\" o \"default\".",

  // ── i18n foundation page ───────────────────────────────────
  "Full consumer guide (install, provider wiring, which blocks use messages vs props, next-intl bridge): docs/I18N.md in the repository.":
    "Guía completa del consumidor (instalación, LanguageProvider, bloques con mensajes vs props, puente next-intl): docs/I18N.md en el repositorio.",
  "useTranslation returns { t, dir, language, locale, setLanguage }. t is the active values record. Consumer guide: docs/I18N.md.":
    "useTranslation devuelve { t, dir, language, locale, setLanguage }. t es el record de values activo. Guía: docs/I18N.md.",
}

export function docsCopy(text: string | undefined, language: string) {
  if (!text) return text
  if (language === "es" || language.startsWith("es")) {
    return docsCopyEs[text] ?? docsCopyEsGenerated[text] ?? text
  }
  return text
}
