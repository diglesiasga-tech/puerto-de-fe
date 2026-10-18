# Almería, puerto de fe

Web de una propuesta de peregrinación, patrimonio y encuentro cristiano en torno a la tradición de los Siete Varones Apostólicos.

**Sitio publicado:** https://almeria-puerto-de-la-fe.diglesiasga.chatgpt.site/

## Contenido

- Sitio completo en español (`dist/index.html`) e inglés (`dist/en.html`).
- Recorrido interactivo, oración y dossier imprimible (`dist/dossier.html`).
- Imágenes, identidad gráfica y metadatos para compartir.
- Diseño adaptable, navegación por teclado y respeto a las preferencias de movimiento reducido.

## Vista local

Se necesita Python 3. No requiere instalar dependencias ni compilar.

```sh
python3 -m http.server 8080 --directory dist
```

Abre http://localhost:8080.

## Editar

- `build_pages.py`: textos, traducciones y plantillas de las páginas.
- `route-map.svg`: esquema conceptual de los lugares propuestos.
- `dist/world.css`: diseño y estilos adaptables.
- `dist/world.js`: navegación móvil, recorrido interactivo y enlace para compartir.

Después de editar los textos o las plantillas, regenera las páginas:

```sh
python3 build_pages.py
```

Los estilos y el JavaScript se editan directamente en `dist/`. Las tipografías se cargan desde Google Fonts, con alternativas de sistema.

## Publicación

Publica la carpeta `dist/` en un alojamiento de archivos estáticos. Los metadatos canónicos, los enlaces de idiomas, la imagen social, `robots.txt` y `sitemap.xml` apuntan al dominio actual; actualízalos si cambia el dominio. La configuración privada de Sites no está incluida en este repositorio.

## Criterio editorial

Iniciativa independiente en fase de propuesta, sin aprobación diocesana ni condición de ruta oficial. Se distingue la tradición religiosa de la evidencia histórica. El recorrido es conceptual y no sirve para navegación. Las imágenes se identifican como evocaciones generadas con IA.
