# Auditoría de contenido — 23 noviembre 2026

## Fuentes y nivel de comprobación

CVs locales: texto extraído de las cuatro versiones. Fechas, formación, contacto y funciones principales coinciden. Se conserva el PDF profesional enlazado, sin cambiarlo. Fuente primaria para experiencia: CV aportado por el usuario y encargo. No se verifican contratos laborales ni se atribuyen métricas.

Ibersoft: desde marzo de 2026. Hiberus: septiembre de 2024 a noviembre de 2025. Se describe trabajo en soporte, sistemas, APIs y aplicaciones según CV. Hiberus usa Angular, Java y Node.js según CV; NestJS se presenta en los proyectos y capacidades. No se publican nombres de clientes, abonados ni información interna. Formación: DAW en Océano Atlántico y SMR en Salesianos. AZ-900, AZ-104, SC-900 y Security+ son objetivos de aprendizaje, no credenciales obtenidas.

## Revisión GitHub

Comprobación con conexión GitHub del propietario, incluidos metadatos de visibilidad. Acceso autenticado no se interpreta como acceso público.

| Proyecto               | Evidencia                                                              | Decisión                                                                                 |
| ---------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| IBERSOFT-IT-DIAGNOSTIC | Privado, vacío según API                                               | No presentar funciones implementadas ni enlace público                                   |
| Backup-Manager         | Privado; README y código accesibles al propietario                     | Retirar enlace público. No reproducir implementación privada en la web                   |
| CertifyHub             | 404 con la conexión actual, ausente de los resultados disponibles      | No inferir inexistencia o privacidad; excluir hasta aportar evidencia                    |
| Ido-Manager            | Público, README, esquema Prisma, servicio de eventos y árbol revisados | Caso principal de producto propio en desarrollo                                          |
| GestionDeEstadios      | Público, README y árbol revisados; declarado TFG                       | Caso académico separado del empleo; sin pantallas ni datos corporativos                  |
| FitMenu                | Público, README, árbol y servicios locales de menú y sesión revisados  | Caso acotado al prototipo HTML/JS, sin afirmar IA generativa ni autenticación productiva |

### Evidencias públicas reproducibles

- [I Do Manager, servicio de eventos](https://github.com/ViorelGilRuiz/Ido-Manager/blob/main/apps/api/src/events/events.service.ts): consultas por businessId y comprobación de pertenencia previa a cambios. [Esquema](https://github.com/ViorelGilRuiz/Ido-Manager/blob/main/apps/api/prisma/schema.prisma): SQLite en el archivo inspeccionado; README menciona PostgreSQL. No se acredita aislamiento integral con esta lectura parcial.
- [Gestión de Estadios](https://github.com/ViorelGilRuiz/GestionDeEstadios): árbol con componentes Angular, controladores, servicios, DTOs y entidades. Las capacidades de estadísticas y exportación se atribuyen al README; no se validan ejecutando el software.
- [FitMenu, menuService](https://github.com/ViorelGilRuiz/FitMenu/blob/main/frontend/js/services/menuService.js): cálculo local, rotación de recetas, siete días e hidratación por ID. [authService](https://github.com/ViorelGilRuiz/FitMenu/blob/main/frontend/js/services/authService.js): persistencia y token simulado, sin seguridad de producción. El repositorio también incluye una evolución Angular/NestJS no evaluada para este caso.

Revisiones observadas: I Do Manager b90ef2319e77ffe215d9411354018a23d9546cda; FitMenu 05f3e2ee2fc70fca14235a4f58fe8f9313b82653; Gestión de Estadios f6f0ca11942b9dd4462fe7bf53497d3c3030e06c.

## Selección y recursos pendientes

I Do Manager aporta dominio y separación de datos; el TFG aporta integración frontend/backend; FitMenu permite explicar un flujo y sus limitaciones con código concreto. Backup Manager no sustituye estas evidencias públicas, aunque su temática sea muy relevante para el perfil. Se reducen cuatro tarjetas superficiales a tres casos extensibles.

No se localizaron capturas de aplicación en los árboles revisados de I Do Manager y FitMenu. Pendiente: ejecutar entornos de demostración sin datos reales, capturar vistas auténticas y revisar información visible. Para el TFG hace falta además asegurar autorización y sanitización del entorno. Los gráficos actuales están identificados como diagramas conceptuales y no reproducen dashboards ficticios.

Hay referencias a módulos corporativos en el TFG. No se ha realizado auditoría exhaustiva de secretos del proyecto externo; se recomienda revisar su contenido antes de ampliar su exposición. No se modificó ningún repositorio externo ni su visibilidad.

## Privacidad

Build mediante lista explícita: solo sitio y CV profesional. Los dos PDF que ya estaban sin seguimiento se conservan y no se versionan en esta entrega. No se copian archivos .env, datos de clientes ni código privado. El email publicado coincide con el CV. No se añade analítica ni formulario con almacenamiento de datos.
