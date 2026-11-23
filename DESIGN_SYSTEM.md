# Sistema visual — Sistemas × Software

## Idea

Una identidad editorial que conecta ingeniería de software e infraestructura. El contraste entre tipografía funcional y serif en cursiva expresa dos perspectivas de un mismo perfil. Retícula asimétrica, reglas finas, espacios amplios y secciones con ritmo propio. Sin carruseles, fondos animados, degradados ni scroll interceptado.

## Tokens

| Token               | Valor / uso                            |
| ------------------- | -------------------------------------- |
| `--paper`           | #F4F0E8, fondo principal               |
| `--ink`             | #101820, texto y secciones oscuras     |
| `--muted`           | #58616A, texto secundario sobre claro  |
| `--lime`            | #C5EB72, acento y CTA de contacto      |
| `--line`            | #CECFC7, divisores claros              |
| `--body`            | Inter variable local, SIL OFL          |
| `--display`         | Georgia del sistema, cursiva editorial |
| `--space`           | clamp(1.25rem, 4.5vw, 5rem)            |
| `--section`         | clamp(4.5rem, 8vw, 8.5rem)             |
| `--max`             | 1392px                                 |
| `--radius`          | 3px                                    |
| `--fast` / `--slow` | 180ms / 600ms                          |
| `--ease`            | cubic-bezier(.2,.65,.3,1)              |
| `--shadow`          | sombra discreta de nodos del diagrama  |

Títulos y espaciados fluidos con clamp. Inter se sirve localmente en WOFF2 variable; Georgia no requiere descarga. Cuerpo de 16px con variaciones para resúmenes y metadatos. No hay terceros en tiempo de ejecución.

## Composición

Hero en dos columnas, texto y retrato original integrado; móvil apila el retrato tras la propuesta y CTA. Introducción y trayectoria tienen columna lateral de contexto. Proyectos alternan composición, tono de fondo y representación: dominio para I Do Manager, módulos y aforo conceptual para el TFG, flujo para FitMenu. No se presentan como pantallas reales.

Los casos usan details/summary nativos para ampliar sin abandonar el recorrido, compatibles con teclado y sin JS. Capacidades se agrupan por problemas. Método en cuatro etapas; certificaciones separadas de los títulos obtenidos.

## Interacción y accesibilidad

Entrada única de opacidad/desplazamiento corto en el hero, solo bajo prefers-reduced-motion:no-preference. Hover y foco visibles. Menú móvil sin bloquear scroll, Escape devuelve el foco al botón y los enlaces lo cierran. Sin JS la navegación permanece visible. Desplazamiento nativo y scroll-padding para el encabezado. Contrastes comprobados con axe; el resultado no sustituye una auditoría WCAG manual completa.

Breakpoints en 520, 760, 1024 y 1600px; verificación a 320, 375, 390, 768, 1024, 1440 y 1920px, con casos abiertos y cerrados.
