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
