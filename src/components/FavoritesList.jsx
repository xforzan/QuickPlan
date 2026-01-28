//Componente tarjeta individual
import EventCard from "./EventCard/EventCard";

// Componente que muestra los eventos marcados como favoritos
function FavoritesList({ events, favorites, addFavorite, removeFavorite }) {
  // Filtra los eventos marcados como favoritos
  const favEvents = events.filter((e) => favorites.includes(e.id));

  // Si no hay eventos favoritos, muestra un mensaje
  if (favEvents.length === 0) {
    return <p className="empty-list">No hay favoritos aún.</p>;
  }

  return (
    <div className="event-list">
      {/* Renderiza una tarjeta por cada evento favorito */}
      {favEvents.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          isFavorite={true}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
        />
      ))}
    </div>
  );
}

export default FavoritesList;
