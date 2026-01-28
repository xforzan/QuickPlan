import "./EventCard.css";

import { Link } from "react-router-dom";
import FavoriteButton from "../FavoriteButton.jsx";

// Componente que muestra una tarjeta individual
function EventCard({ event, isFavorite, addFavorite, removeFavorite }) {
  return (
    <div className="event-card">
      {/* Imagen del evento con botón de favoritos encima*/}
      <div className="image-wrapper">
        <img
          src={event.imagen}
          alt={event.titulo}
          loading="lazy"
        />

        <FavoriteButton
          eventId={event.id}
          isFavorite={isFavorite}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
        />
      </div>

      {/* Título del evento */}
      <h3>{event.titulo}</h3>

      {/* Metadatos del evento */}
      <section className="event-meta-group">
        <p className="event-meta">
          <i className="fa-solid fa-tag"></i>
          <strong>Categoría:</strong> {event.categoria}
        </p>

        <p className="event-meta">
          <i className="fa-solid fa-calendar"></i>
          <strong>Fecha:</strong> {event.fecha}
        </p>

        <p className="event-meta">
          <i className="fa-solid fa-location-dot"></i>
          <strong>Lugar:</strong> {event.lugar}
        </p>
      </section>

      {/* Enlace a la página de detalle del evento */}
      <Link to={`/evento/${event.id}`} className="info-btn">
        Ver detalle
      </Link>
    </div>
  );
}

export default EventCard;
