# Publicación y verificación

Destino existente: https://viorelgilruiz.netlify.app/ · remoto: https://github.com/ViorelGilRuiz/Portafolio.git · rama de trabajo: feat/editorial-systems-software.

## Configuración

No había netlify.toml local al comenzar. Se añade configuración para ejecutar `npm run build`, Node 22 y publicar **dist**, evitando publicar fuentes, documentación y variantes del CV. La configuración del panel no se ha inspeccionado: antes de integrar, comprobar que el sitio está conectado al remoto y a la rama main. No se cambia el dominio ni se sustituye un sitio por otro proveedor.

Cabeceras: CSP con recursos propios, protección contra framing, nosniff, referrer policy y permisos de cámara/micrófono/geolocalización desactivados. El JSON-LD es un bloque de datos inerte. Revisar estas cabeceras si se añade alguna integración externa. No hay reescritura SPA: los enlaces usan anclas reales y los recursos ausentes deben dar 404.

## Procedimiento reproducible

1. `npm ci`
2. `npm run lint`
3. `npm run typecheck`
4. `npm run build`
5. `npm test`
6. `npm run test:browser` (Edge instalado; puerto 4173 libre).
7. Revisar diff y confirmar ausencia de archivos sensibles.
8. Publicar rama y revisar PR antes de integrarla en main.
9. Si Netlify está conectado a main, la integración debe iniciar la compilación. Verificar estado del deploy y contenido de la URL; una PR o un push no demuestran despliegue.
10. Verificar retrato, fuente, imagen social, CV, anclas y móvil en producción; comprobar 404 y cabeceras. Si falla, volver al deploy anterior desde Netlify conservando historial.

## Estado de esta sesión

La URL existente carga, pero ese hecho solo verifica la versión anterior. No se encontraron credenciales NETLIFY ni herramienta de Netlify. No se afirma un nuevo despliegue hasta disponer de evidencia de publicación y carga del nuevo contenido.

Rama publicada y [PR #1](https://github.com/ViorelGilRuiz/Portafolio/pull/1) abierta. GitHub Actions pasó en Node 22 (push y pull_request). El panel de Netlify y el acceso mediante GitHub solicitan inicio de sesión; se necesita una sesión autenticada para comprobar la conexión del sitio o cargar dist manualmente. La publicación fue solicitada expresamente por el usuario; no falta autorización, falta acceso al panel.

Las pruebas ejecutadas se registran en [VALIDATION.md](VALIDATION.md). Capturas locales y resultados intermedios quedan en tmp/qa, excluido de Git. No confundir pruebas del portfolio con pruebas de las aplicaciones enlazadas.
