# demo-subagents

Repositorio de estudio para seguir el video **"Codex Can Manage Itself"** de Owain Lewis y probar, en pequeño, la idea de un hilo coordinador que organiza otros hilos de trabajo dentro de Codex.

## Objetivo

Este repo sirve como base para entender cómo Codex puede:

1. coordinar varias tareas en paralelo,
2. abrir hilos independientes para cada trabajo,
3. mantener esos hilos disponibles incluso después de que termine el coordinador,
4. combinar resultados sin perder el contexto de cada tarea.

## Qué explica el video

El video muestra una forma más potente de usar Codex: en lugar de abrir varios chats manualmente, se puede crear un hilo principal que reparta tareas y gestione otros hilos de forma autónoma.

Los puntos clave que me interesan para este repositorio son:

1. un hilo coordinador puede repartir trabajo entre varios hilos paralelos,
2. cada hilo puede trabajar sobre una rama o contexto distinto,
3. los subprocesos de conversación son duraderos y se pueden revisar más tarde,
4. el enfoque también sirve para otras tareas, como generar imágenes o revisar contenido por bloques.

## Ideas principales del video

- El coordinador actúa como administrador del trabajo.
- Cada hilo secundario puede encargarse de una tarea concreta.
- La salida final se puede consolidar después de revisar cada hilo por separado.
- El coste de esta estrategia es el uso intensivo de tokens y la posible saturación si se paraleliza demasiado.

## Para qué usaré este repo

Voy a usarlo como cuaderno práctico para:

- resumir aprendizajes del video,
- anotar pruebas sobre gestión de hilos,
- guardar ejemplos de cómo organizar tareas con Codex,
- comparar cuándo conviene usar hilos coordinados y cuándo no.

## Estado actual

Por ahora el repositorio solo contiene este README. A partir de aquí se puede ir añadiendo documentación, ejemplos y notas de experimentos.

## Referencia

Video base: **"Codex Can Manage Itself"** de **Owain Lewis**.
