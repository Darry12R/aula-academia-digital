# AULA — Academia Digital

Demostración estática, responsive y en español para el portafolio de NUVEXA. AULA es una marca ficticia.

## Abrir en local

Sirve **esta carpeta, la que contiene `index.html`**, con cualquier servidor HTTP estático. Los módulos JavaScript necesitan HTTP; no abras el archivo con doble clic (`file://`).

Con Python instalado:

```sh
python -m http.server 4173
```

Abre http://localhost:4173. No hay compilación ni dependencias de producción. Python se usa únicamente para la revisión local. El alojamiento final no necesita Python ni un servidor Node.

## Recorrido recomendado

1. Explora el catálogo: busca por título o descripción, filtra y ordena.
2. Abre un curso y explora su primera lección.
3. Pulsa **Inscribirme en la demo**, usa los datos de ejemplo, revisa y confirma.
4. En **Mi aprendizaje**, continúa el curso, guarda una actividad y marca la lección.
5. Completa las otras lecciones y responde la evaluación final. Dos aciertos de tres habilitan la última lección.
6. Consulta el 100 % de avance o repasa el contenido.

**Probar campus** carga a Alex Ejemplo con el primer curso al 25 %. Pide confirmación si hay inscripciones o respuestas sin guardar. **Mi aprendizaje** accede al estado actual sin sustituirlo.

## Lo que incluye

- Inicio, catálogo, tres detalles de curso, cómo funciona, academia, inscripción, campus y aula.
- Doce lecciones originales: cada explicación contiene entre 200 y 350 palabras, más objetivo, ejemplo, actividad e idea principal.
- Tres evaluaciones de tres preguntas con retroalimentación y reintentos.
- Un recurso `.txt` descargable y original por curso.
- Formulario con validación junto a cada campo, revisión previa y confirmación.
- Inscripción única, progreso idempotente, desmarcado y continuación desde una lección pendiente.
- Temario plegable en móvil, foco visible, etiquetas, grupos de opciones y avisos accesibles.
- Confirmaciones para reiniciar, sustituir el perfil y descartar respuestas sin guardar.
- Estado en memoria; sin llamadas de aplicación a servicios externos, cookies ni localStorage.

## GitHub y Vercel

Repositorio: https://github.com/Darry12R/aula-academia-digital. Los archivos están en la raíz, incluyendo `.gitignore` y `vercel.json`. Conecta este repositorio a Vercel con los siguientes ajustes.

Al importar el repositorio en Vercel:

| Ajuste | Valor |
| --- | --- |
| Root Directory | La carpeta que contiene `index.html` |
| Framework Preset | **Other** |
| Build Command | Vacío, sin comando de compilación |
| Install Command | Vacío; no requiere paquetes |
| Output Directory | `.` |

Si subes `aula/` como subcarpeta, selecciona `aula` como Root Directory. Si subes sus archivos directamente a la raíz del repositorio, selecciona la raíz. No selecciones `js/`, `styles/` ni una carpeta superior sin `index.html`.

`vercel.json` fija `framework: null` (Other), comandos vacíos y salida `.`. Las rutas usan hash; por ejemplo `/#/curso/organizacion`. No se necesitan reglas especiales de reescritura. Configuración contrastada con la [documentación de compilación de Vercel](https://vercel.com/docs/builds/configure-a-build) y la [referencia de vercel.json](https://vercel.com/docs/project-configuration/vercel-json).

## Estructura

```text
index.html           Documento, cabecera, pie y diálogo
styles/main.css      Identidad visual y diseño responsive
js/app.js            Vistas, navegación e interacciones
js/state.js          Reglas de inscripción, evaluación y progreso
js/data.js           Cursos, lecciones y preguntas
assets/favicon.svg   Marca original de AULA
recursos/            Tres plantillas de texto
tests/state.test.js   Pruebas de reglas y contenido
vercel.json          Configuración estática
VERIFICACION.md       Alcance y resultados de comprobación
FUENTES.md           Procedencia de los recursos visuales
```

## Pruebas

Con Node.js 20 o posterior, sin instalar paquetes:

```sh
npm test
```

O bien `node --test tests/state.test.js`. Las pruebas cubren inscripción única, independencia de cursos, progreso sin duplicados, desmarcado, evaluación, reintentos, continuación, reinicio, datos inválidos y extensión de las doce explicaciones. Consulta `VERIFICACION.md` para los recorridos de navegador comprobados.

## Datos y límites

La sesión se reinicia al recargar, cerrar la pestaña o abrir otra pestaña. No existe autenticación: los bloqueos de lecciones son parte del recorrido demostrativo, no protección del contenido. El código y las respuestas de evaluación son públicos. Solo la primera lección de cada curso se explora sin inscripción.

Abrir una lección nunca la completa. Guardar una actividad y completar una lección son acciones independientes. La actividad de texto no se corrige automáticamente. El avance depende de las cuatro marcas de completado; la cuarta requiere aprobar. Si se vuelve a evaluar y no se aprueba, se retira la marca de la cuarta lección hasta aprobar nuevamente.

Precios y duraciones son datos ficticios de muestra. No hay cobros, correos enviados, cuenta protegida, certificados, profesores, videollamadas ni panel de administración.

Incluye una lectura opcional del progreso mediante WebMCP cuando el navegador ofrece esa API. Su ausencia no afecta a los recorridos. No es una dependencia del proyecto.

## Para una academia real

Se necesitarían cuentas protegidas y autorización en servidor, almacenamiento persistente, gestión y revisión de contenidos, recuperación de acceso y operación del servicio. Según el modelo de negocio, se incorporarían pagos y correos reales. También habría que revisar accesibilidad con tecnologías de asistencia y probar los navegadores y dispositivos objetivo.

