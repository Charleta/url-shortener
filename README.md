# LinkShort — Acortador de URL (Next.js + Tailwind)

App simple y moderna para acortar enlaces con UI oscura estilo glass, lista con acciones rápidas y toasts de feedback.

> Demo: *(agregá una captura en `public/cover.png` y linkeala acá)*

---

## ✨ Características

- UI/UX moderna (modo oscuro + glassmorphism)
- Campo de entrada con validación
- Listado de URLs acortadas con acciones:
  - **Copiar** URL corta
  - **Abrir** en nueva pestaña
  - **QR** (generado con servicio público)
  - **Borrar**
- Toast accesible mediante live-region
- Scroll **solo** en la lista (sin scroll global)
- Componentes desacoplados (`UrlShortener`, `UrlList`, `Container`, `Header`)
- Partículas de fondo sin interferir con el input/scroll

---

## 🧰 Stack

- **Next.js** (App Router, TypeScript)
- **React**
- **Tailwind CSS**
- `react-tsparticles` (fondo animado)
- API propia con rutas:
  - `GET /api/urls`
  - `POST /api/shorten`
  - `GET /api/shorten/:slug` (redirección 302)
  - `DELETE /api/deleteUrls/:id`

> Si usás DB/Prisma, ajustá las secciones de entorno y API según tu esquema.

---

## 🚀 Inicio rápido

```bash
# Instalar deps
npm install

# Desarrollo
npm run dev

# Producción
npm run build && npm run start
