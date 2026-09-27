# Seguridad de la demo AULA

26 de septiembre de 2026. Preparación local; no implica publicación realizada.

Se conserva la aplicación y sus datos ficticios. Añadidos noindex en HTML y cabeceras, robots válido, CSP sin conexiones de datos ni envíos de formularios, protección de marcos, nosniff y políticas de referer/permisos. Los estilos inline siguen permitidos para conservar las interfaces dinámicas; los scripts inline no se permiten.

Vercel compila con `node build-static.mjs` a `public-build`, copiando solo recursos públicos explícitos. Pruebas, documentación, servidor de desarrollo y archivos privados quedan fuera. Las rutas con fragmento mantienen su navegación; no se añadió una redirección universal que convierta archivos inexistentes en portada. Noindex no restringe acceso a la demo.

No se añadieron recursos externos.

Comprobar con `npm run build` y las pruebas existentes, además de revisar la interfaz y CSP con las cabeceras de Vercel. El informe conjunto registra los resultados reales. Las licencias del contenido existente y el alojamiento compatible siguen pendientes de validación.
