# Diagnóstico previo — 23 noviembre 2026

Base revisada: ca954ac. Web estática HTML, CSS y JavaScript, sin framework, gestor, dependencias, pruebas ni proceso de compilación. Remoto: ViorelGilRuiz/Portafolio. No existe netlify.toml local; la configuración del panel de Netlify no está disponible. La URL pública carga y coincide con la estructura local.

El hero está en index.html; incluye el retrato auténtico viorel-gil.jpg. CSS acumula varias capas de overrides móviles, layouts de tarjetas y fondos con degradados. El script oculta elementos mediante reveals, mantiene un menú móvil y una barra de lectura. La arquitectura estática es apropiada: se conserva, con estilos reorganizados y mejoras progresivas.

Problemas: cuatro proyectos superficiales, simulaciones de interfaces, falta de casos detallados y sección de método; tres familias tipográficas remotas; ausencia de build reproducible, CI y validación automatizada. Los títulos usan overflow-wrap:anywhere para resolver síntomas de tamaño en móvil. CV profesional enlazado; hay otros tres PDF que deben contrastarse. Dos PDF sin seguimiento ya existían y no se incluirán en los commits.

Investigación inicial: Backup-Manager tiene README accesible y documentación explícita de límites del piloto; Ido-Manager y FitMenu contienen código y README. IBERSOFT-IT-DIAGNOSTIC devuelve repositorio vacío. CertifyHub devuelve 404, lo que no permite distinguir privado de inexistente. Gestión de Estadios se identifica como TFG y contiene referencias a integración corporativa: no se reutilizarán código, datos ni pantallas de ese entorno.

Decisión: reconstrucción editorial sobre HTML/CSS/JS; tres casos con fuentes y límites; gráficos de arquitectura identificados como tales cuando no haya capturas verificadas. Build con lista de publicación explícita para excluir fuentes, documentación y PDF ajenos. Preservar fotos originales y PDFs. No cambiar visibilidad de repositorios.
