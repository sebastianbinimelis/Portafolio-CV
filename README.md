# CV + Portafolio

Proyecto base para construir un curriculum vitae interactivo y un portafolio profesional con React, JavaScript, HTML y CSS.

## Estructura

- `frontend`: app React con Vite lista para GitHub Pages.
- `backend`: espacio futuro para utilidades o API local con Node.js.

## Scripts

- `npm run dev`: inicia el frontend.
- `npm run build`: compila el frontend.
- `npm run preview`: previsualiza la build.
- `npm run deploy`: publica el frontend en GitHub Pages.
- `npm run server:dev`: inicia el backend base.

## Nota

GitHub Pages solo sirve contenido estatico. El backend Node.js queda preparado para desarrollo local o para moverlo despues a otro hosting.

## Publicar en GitHub Pages

Este repositorio ya tiene un workflow en `.github/workflows/deploy.yml` para publicar el `frontend` automaticamente en GitHub Pages cuando haces push a `main`.

Pasos:

1. Haz commit de tus cambios.
2. Sube el repositorio con `git push origin main`.
3. En GitHub, entra a `Settings > Pages`.
4. En `Source`, deja seleccionado `GitHub Actions`.
5. Espera a que termine el workflow `Deploy Frontend to GitHub Pages` en la pestaña `Actions`.

La URL final de este proyecto sera:

`https://sebastianbinimelis.github.io/Portafolio-CV/`

## Importante

- El frontend si puede vivir en GitHub Pages.
- El backend Node.js no se publica en GitHub Pages porque Pages solo sirve archivos estaticos.
- Si despues quieres conectar tu frontend publicado con un backend real, habra que subir el backend a otro servicio como Render, Railway o similar.
