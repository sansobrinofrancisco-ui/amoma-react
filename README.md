# Amoma - Repostería casera (React)

Trabajo Práctico Final del Curso Inicial Front-End (UTN) - **Opción A: migración a React**.

Es la página de **Amoma**, una repostería de Villa Pueyrredón (CABA), que en el TP Intermedio hice con HTML y CSS y que ahora pasé a React manteniendo el mismo diseño, pero armada con componentes.

## Cómo ejecutar el proyecto

Requisito: tener instalado [Node.js](https://nodejs.org/) (trae npm).

```bash
# 1. clonar el repositorio
git clone https://github.com/sansobrinofrancisco-ui/amoma-react.git

# 2. entrar a la carpeta
cd amoma-react

# 3. instalar las dependencias (crea la carpeta node_modules)
npm install

# 4. levantar el servidor de desarrollo
npm run dev
```

Después abrir en el navegador la dirección que muestra la terminal (normalmente `http://localhost:5173`).

Para generar la versión de producción: `npm run build` (crea la carpeta `dist/`).

## Tecnologías

- React + Vite
- React Router (navegación entre páginas)
- CSS propio (un archivo por componente)
- Google Fonts y Font Awesome

## Estructura

```
src/
├── assets/img/    imágenes de la página
├── components/    piezas reutilizables (Navbar, Hero, Cards, Card, Gallery, Contact, Footer)
├── pages/         páginas de cada ruta (Layout, Inicio, Galeria, Contacto, Error404)
├── styles/        un CSS por componente, con el mismo nombre
├── App.jsx        mapa de rutas
├── main.jsx       punto de entrada
└── index.css      estilos generales (reset, colores, fuentes)
```

## Rutas

| Ruta | Página |
| :--- | :--- |
| `/` | Inicio: portada y especialidades |
| `/galeria` | Galería de tortas |
| `/contacto` | Formulario de contacto |
| cualquier otra | Página 404 |

## Qué se usó de React

- **Componentes y props:** `Card` es un solo molde que se usa 3 veces con datos distintos.
- **Listas con `.map()` y `key`:** la galería se arma a partir de un array de fotos.
- **`useState`:**
  - en la galería, para abrir una foto en grande al hacer clic;
  - en el formulario, para guardar los datos de todos los campos en un solo objeto (formulario controlado).
- **Eventos del formulario:** cada cambio de los inputs se muestra en la consola; el envío usa `preventDefault()`, muestra los datos en consola y un mensaje de agradecimiento; el botón Limpiar resetea el formulario. El botón Enviar queda deshabilitado hasta completar nombre y email.
- **React Router:** `Layout` con `<Outlet />` (navbar y footer compartidos), navegación con `<Link>` y ruta comodín `*` para el 404.

## Mejoras respecto del TP Intermedio

A partir de la devolución del TP anterior:

- Estados `:hover` y `:focus` más claros en botones, links y campos del formulario.
- Menú más prolijo en pantallas chicas (los links bajan a varias filas).
- Comentarios más breves y técnicos.
