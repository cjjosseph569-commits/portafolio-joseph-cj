# Fase 2 · Guía para armar el archivo de Figma

El código adjunto establece una propuesta visual concreta. Hay que **crear el archivo de Figma** y sus enlaces de visualización y prototipo en tu cuenta; este paquete no incluye un archivo Figma ni una revisión de compañero.

## Organización del archivo

Crear páginas: `Wireframes`, `Guía de estilo`, `Componentes`, `Escritorio`, `Móvil`. Incluir en Wireframes seis páginas (las cinco principales y 404) en baja fidelidad y en cada una señalar encabezado, contenido, acciones y pie. Usar solo rectángulos grises y etiquetas de texto; sin fotos ni colores finales.

## Guía de estilo

| Rol | Valor CSS / Figma |
| --- | --- |
| Principal | `#153C45` |
| Secundario | `#E2EEE9` |
| Fondo | `#FAFAF6` |
| Texto | `#19383B` |
| Acento | `#E2EE83` |
| Títulos | Space Grotesk, 700; H1 escritorio 92 px / móvil 45 px, H2 escritorio 50 px / móvil 32 px |
| Texto y navegación | DM Sans, 400–700; cuerpo 18 px / móvil 16 px; etiquetas 12 px |
| Espaciado | 4, 8, 16, 24, 32, 48, 72 px |
| Contenido | ancho máximo 1160 px en escritorio; margen lateral móvil 18 px |

El verde intermedio de títulos y etiquetas (`#498974`) es una variación tonal del principal; si se exige literalmente una paleta de cinco colores sin variaciones, úsalo solo como un matiz documentado del principal.

## Componentes reutilizables

Crear como componentes: navegación escritorio y móvil (variantes menú cerrado/abierto), pie, botón normal/hover, tarjeta de proyecto, campo del formulario (normal/error). Crear instancias de estos componentes en cada marco correspondiente; conservar el mismo espaciado y los estados.

## Marcos de alta fidelidad

Crear seis marcos a **1440 px** y seis marcos a **390 px**, uno por página, con alto según su contenido. Los títulos, subtítulos, fichas y etiquetas deben coincidir con `docs/inventario.md` tras personalizarlo. Inicio: hero en dos columnas en escritorio y apilado en móvil; Sobre mí: imagen a la izquierda y biografía a la derecha; Habilidades: tres tarjetas; Proyectos: filtros y tres tarjetas; Contacto: texto lateral y formulario; 404: mensaje centrado. Usar Auto Layout donde sea útil. Comparar luego cada marco contra una captura del sitio a esos anchos.

## Prototipo y revisión

En modo Prototype conectar cada elemento de la navegación a los marcos correspondientes; enlazar los CTA de Inicio, Sobre mí y Habilidades, el pie y el regreso del 404. En móvil, enlazar también el botón del menú a la variante abierta. Probar cada destino. Compartir enlace al archivo con permiso de visualización y enlace al prototipo. Pedir a un compañero que comente dentro del archivo y atender sus observaciones antes de desarrollar.

## Wireframes rápidos para reproducir

| Página | Bloques en orden |
| --- | --- |
| Inicio | Navegación → titular y avatar → dos acciones → tres tarjetas → CTA → pie |
| Sobre mí | Navegación → título → foto/avatar + biografía/formación/intereses → pie |
| Habilidades | Navegación → título → tres categorías con niveles → CTA → pie |
| Proyectos | Navegación → título → filtros → tres tarjetas con captura/tecnologías/repositorio → pie |
| Contacto | Navegación → título → redes + formulario → pie |
| 404 | Navegación → 404 + mensaje + volver al inicio → pie |
