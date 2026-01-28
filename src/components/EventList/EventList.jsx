import "./EventList.css";

// Componente tarjeta individual
import EventCard from "../EventCard/EventCard.jsx";

// Componente que muestra un listado de eventos
function EventList({ events, favorites, addFavorite, removeFavorite }) {
  return (
    <div className="event-list">
      {/* Recorre la lista de eventos y genera una tarjeta por cada uno */}
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          // Indica si el evento está marcado como favorito
          isFavorite={favorites.includes(event.id)}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
        />
      ))}
    </div>
  );
}

export default EventList;
