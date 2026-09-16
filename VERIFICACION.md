# Verificación de AULA

## Pruebas automatizadas de reglas

**8 pruebas aprobadas** con el ejecutor nativo de Node.js:

1. Inscripción única que conserva avances y respuestas.
2. Visitar no completa; marcar varias veces no duplica; desmarcar resta.
3. Última lección bloqueada sin aprobación; mínimo dos aciertos, reintento, finalización y retirada de la marca tras un nuevo resultado insuficiente.
4. Continuación desde la última pendiente o la siguiente pendiente.
5. Independencia del progreso entre cursos.
6. Perfil de muestra al 25 % y reinicio completo.
7. Rechazo de cursos, índices y respuestas inválidos.
8. Doce explicaciones de 200–350 palabras, campos completos y tres evaluaciones de tres preguntas.

Reproducir desde la raíz: `node --test tests/state.test.js`.

## Recorridos comprobados en navegador

Automatización con Playwright y Microsoft Edge sobre el servidor HTTP local:

| Recorrido | Resultado |
| --- | --- |
| Buscar por título y descripción, filtrar, ordenar, limpiar y ver vacío | Correcto |
| Abrir detalle y primera lección pública | Correcto |
| Validar formulario, usar datos ficticios, revisar y confirmar | Correcto |
| Encontrar la inscripción en Mi aprendizaje | Correcto |
| Guardar actividad y cancelar salida con borrador | Correcto |
| Marcar, desmarcar y actualizar progreso | Correcto |
| Continuar desde última lección pendiente | Correcto |
| Exigir evaluación para completar última lección | Correcto |
| Validar respuestas faltantes, mostrar error, reintentar y aprobar | Correcto |
| Completar curso al 100 % y repasar | Correcto |
| Evitar inscripciones duplicadas | Correcto |
| Descargar y leer las tres plantillas | Correcto |
| Cancelar sustitución de avances y cargar perfil ficticio con confirmación | Correcto |
| Reiniciar y comprobar estado vacío | Correcto |
| Abrir enlaces directos, recargar y mostrar ruta inexistente | Correcto |
| Catálogo, inscripción y aula a 390 px; controles con teclado | Correcto |
| Recarga elimina inscripciones; localStorage permanece vacío | Correcto |

También se verificaron el enlace de salto con teclado, el descarte confirmado de borradores, la conservación de respuestas de evaluación al actualizar una lección y 32 combinaciones de página y ancho (320, 390, 768 y 1280 px), sin desbordamiento horizontal.

No se observaron errores JavaScript durante estos recorridos. Se inspeccionaron capturas completas de la portada en escritorio y móvil y del aula móvil.

## Límites de la verificación

Las comprobaciones se realizaron localmente. No se publicó ni comprobó un despliegue real en Vercel o GitHub Pages. No se ejecutó una auditoría formal WCAG ni pruebas con lector de pantalla, Safari o Firefox.

La integración opcional WebMCP se detecta por capacidad. No se dispuso de un navegador con su API nativa para verificarla; la funcionalidad principal no depende de ella.
