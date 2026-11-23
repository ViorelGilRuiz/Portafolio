# Viorel Gil — Sistemas × Software

Portfolio profesional estático en español. HTML semántico, CSS responsive y JavaScript progresivo; sin framework ni dependencias de producción. Publicación prevista en Netlify, conservando el dominio existente.

## Desarrollo

Node 22.13+ y npm. Instalar con `npm ci`, ejecutar `npm run build` y después `npm run dev`. Abrir http://127.0.0.1:4173. El servidor publica únicamente `dist/`; tras editar, reconstruir y recargar.

`npm run lint`, `npm run typecheck`, `npm test` (después de build) y `npm run test:browser`. El último usa Microsoft Edge instalado y Playwright: comprueba siete anchos, axe AA, detalles, menú, Escape, foco, CV, movimiento reducido y navegación sin JavaScript. CI ejecuta las comprobaciones estáticas, tipos, build y pruebas de recursos; el navegador se valida localmente.

## Estructura y mantenimiento

- [index.html](index.html): contenido y casos con detalles nativos.
- [style.css](style.css): tokens, retícula, componentes y breakpoints.
- [script.js](script.js): menú y sección activa. Todo el contenido sigue disponible sin JS.
- [assets/](assets/): retrato WebP, imagen social, monograma y fuente local con licencia SIL OFL.
- [scripts/build.mjs](scripts/build.mjs): lista explícita de publicación. Excluye fuentes de herramientas, documentación y variantes del CV.
- [tests/](tests/): validación de integridad y navegador.

Para cambiar el contenido, actualizar también [CONTENT_AUDIT.md](CONTENT_AUDIT.md). Antes de añadir un enlace de proyecto, comprobar su acceso sin sesión. No añadir material empresarial o capturas con información de clientes. El retrato conserva la identidad y procede del archivo original existente. El CV profesional se mantiene sin modificación.

Las imágenes ya están generadas y versionadas; `node scripts/assets.mjs` permite regenerarlas. `--font` descarga Inter y su licencia (requiere red). [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) recoge el criterio visual y [DEPLOYMENT.md](DEPLOYMENT.md) la publicación. [AUDIT.md](AUDIT.md) documenta el diagnóstico previo.

## Pendientes editoriales

Capturas auténticas sanitizadas de los proyectos, validación de funcionamiento de sus aplicaciones y revisión manual con lector de pantalla. No hay testimonios, métricas de impacto ni certificaciones inventadas. Los diagramas se identifican como representaciones explicativas.
