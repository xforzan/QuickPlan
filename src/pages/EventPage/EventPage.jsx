import "./EventPage.css";

import { useParams, Link } from "react-router-dom";
import FavoriteButton from "../../components/FavoriteButton";
import Loading from "../../components/Loading/Loading.jsx";

// Página de detalle de un evento
function EventPage({
  events,
  error,
  loading,
  favorites,
  addFavorite,
  removeFavorite,
}) {
  // Obtiene el id del evento desde la URL
  const { id } = useParams();

  // Muestra un spinner mientras se cargan los datos
  if (loading) return <Loading />;

  // Muestra un mensaje de error si ocurre algún problema
  if (error) return <p className="error-msg">Error cargando eventos.</p>;

  // Busca el evento con la id en la lista de eventos
  const event = events.find((e) => e.id === parseInt(id));

  // Si no existe el evento, muestra un mensaje de error
  if (!event) return <p className="error-msg">Evento no encontrado</p>;

  // Comprueba si el evento está marcado como favorito
  const isFavorite = favorites.includes(event.id);

  return (
    <div className="container">
      <h1>{event.titulo}</h1>

      {/* Imagen del evento con botón de favoritos */}
      <div className="image-wrapper">
        <img src={event.imagen} alt={event.titulo} />

        <FavoriteButton
          eventId={event.id}
          isFavorite={isFavorite}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
        />
      </div>

      {/* Metadatos del evento */}
      <p>
        <strong>Categoría:</strong> {event.categoria}
      </p>
      <p>
        <strong>Fecha:</strong> {event.fecha}
      </p>
      <p>
        <strong>Lugar:</strong> {event.lugar}
      </p>
      <p>{event.descripcion}</p>

      {/* Enlace para volver a la página principal */}
      <Link className="back-btn" to="/">
        Volver a la lista
      </Link>
    </div>
  );
}

export default EventPage;
