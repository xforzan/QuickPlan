# 📅 QuickPlan – Agenda de Eventos del Centro

QuickPlan es una aplicación web desarrollada con React y Vite para consultar y buscar los eventos del centro educativo: charlas, torneos, talleres y excursiones.

La aplicación no utiliza backend. Los datos se cargan desde un archivo JSON local.

---

## 🚀 Instalación y ejecución

### Requisitos previos
- Node.js (v14 o superior)
- npm (v6 o superior)

### Pasos para ejecutar el proyecto

1. Instalar las dependencias:
```bash
npm install
```

2. Ejecutar el proyecto en modo desarrollo:
```bash
npm run dev
```

3. Abrir en el navegador:
http://localhost:5173


## ✨ Funcionalidades principales

- 📋 Listado de eventos en tarjetas
- 🔍 Buscador por texto que permite filtrar por título o lugar
- 🏷️ Filtro por categoría (Charla, Taller, Torneo, Excursión)
- 🔢 Contador de eventos ("Mostrando X de Y eventos")
- 📄 Página de detalle para cada evento
- ⭐ Sistema de favoritos
- 💾 Persistencia de favoritos mediante localStorage
- ⏳ Estado de carga simulado
- ❌ Gestión de errores
- 📱 Diseño responsive
- 🌙 Tema oscuro

## 🛠️ Tecnologías utilizadas

- React 18
- Vite
- React Router DOM
- CSS3 (Flexbox y Grid)
- Font Awesome
- LocalStorage

## 📁 Estructura del proyecto

```
quickplan/
├── screenshots/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── EventCard/
│   │   ├── EventList/
│   │   ├── Loading/
│   │   ├── FavoritesList.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryFilter.jsx
│   │   └── FavoriteButton.jsx
│   ├── pages/
│   │   ├── Home/
│   │   ├── EventPage/
│   │   └── Favorites.jsx
│   ├── hooks/
│   │   └── useFavorites.js
│   ├── data/
│   │   └── eventos.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md

```

📸 Las capturas del funcionamiento de la aplicación se encuentran en la carpeta `/screenshots`.


## 📖 Uso de la aplicación

### Pantalla principal
- Muestra la lista de eventos
- Permite buscar por título o lugar
- Filtra por categoría
- Indica cuántos eventos se están mostrando
- Permite marcar eventos como favoritos
- Permite ver los detalles del evento

### Detalle del evento
- Información completa del evento
- Botón para añadir o quitar de favoritos
- Enlace para volver a la página de inicio

### Favoritos
- Página para ver los eventos marcados como favoritos
- Botón para eliminar eventos de favoritos

## 📦 Datos de los eventos

Los eventos se cargan desde un archivo JSON local al iniciar la aplicación desde:
src/data/eventos.json

Cada evento tiene la siguiente estructura:
```json
{
  "id": 1,
  "titulo": "Título del evento",
  "categoria": "Charla",
  "fecha": "YYYY-MM-DD",
  "lugar": "Ubicación",
  "descripcion": "Descripción del evento",
  "imagen": "/images/pic1.webp"
}
```

## ⏳ Estados y errores

- Se muestra un spinner mientras se leen los datos
- Si el archivo JSON está vacío o falla la carga, se muestra un mensaje de error
- Si se accede a un evento que no existe, se informa al usuario

## 📄 Licencia

Proyecto de uso educativo.

Desarrollado con ❤️ por Achraf · GitHub: @xforzan

