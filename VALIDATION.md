# Validación ejecutada — 23 noviembre 2026

Entorno local Windows, Node 26.13.1, npm 11.20.0 y Microsoft Edge en modo headless. CI y Netlify se configuran para Node 22; no se ha ejecutado una segunda instalación con Node 22.

| Comprobación | Resultado |
| --- | --- |
| Instalación npm | Completada, lockfile creado |
| ESLint + HTML Validate | Correctos (convenciones HTML alineadas con Prettier) |
| Typecheck de JavaScript | Correcto mediante TypeScript checkJs |
| Build de producción | Correcto, publicación explícita en dist |
| node:test | 3 pruebas correctas: anclas/recursos, exclusiones de publicación y límites editoriales |
| Navegador | Correcto en 320, 375, 390, 768, 1024, 1440 y 1920px |
| Desbordamientos | Ninguno en los siete anchos, con casos abiertos y cerrados |
| Accesibilidad automática | 0 infracciones axe con reglas WCAG 2 A/AA, 2.1 AA y 2.2 AA en los siete anchos |
| Interacciones | Menú, Escape, devolución de foco, enlaces internos y details correctos |
| Sin JavaScript | Navegación visible, contenido disponible y detalles operables |
| Movimiento reducido | Animaciones desactivadas |
| Imágenes y consola | Sin imágenes rotas ni errores de consola en las pruebas |
| CV | Descarga correcta, firma PDF válida; texto contrastado y página renderizada e inspeccionada |
| Revisión visual | Hero y página completa revisados en escritorio y móvil |
| Lighthouse móvil local | Performance 99 / Accessibility 100 / Best Practices 100 / SEO 100 |

Lighthouse es una medición de laboratorio local con emulación móvil y throttling simulado, no una garantía de métricas de producción ni datos de usuarios reales. El informe HTML y el resumen JSON están en tmp/qa. No se afirma conformidad WCAG completa: falta revisión manual con tecnologías de asistencia.

Los repositorios, ficheros de evidencia y perfil GitHub enlazados devuelven HTTP 200 sin autenticación. El canonical existente también devuelve 200. LinkedIn devuelve 999 a la solicitud automatizada: su disponibilidad no queda verificada; se conserva la dirección aportada por el usuario y consistente con el CV. Email validado como enlace mailto; no se envió correo.

No se han arrancado ni probado las aplicaciones de los proyectos enlazados; la evidencia de sus casos es código y documentación, con los límites visibles en cada caso. No se ha auditado exhaustivamente el contenido de los repositorios externos.

La web nueva no se considera desplegada únicamente por tener un build correcto. Consultar [DEPLOYMENT.md](DEPLOYMENT.md) para el estado y los pasos de publicación.
