// Componente que muestra la lista de eventos marcados como favoritos
import FavoritesList from "../components/FavoritesList.jsx";
import Loading from "../components/Loading/Loading.jsx";

export function Favorites({
  events,
  error,
  loading,
  favorites,
  removeFavorite,
}) {
  // Muestra un spinner mientras se cargan los datos
  if (loading) return <Loading />;

  // Muestra un mensaje de error si ocurre algún problema
  if (error) return <p className="error-msg">Error cargando favoritos.</p>;

  return (
    <div className="container">
      <h2>Favoritos</h2>

      {/* Listado de eventos favoritos */}
      <FavoritesList
        events={events}
        favorites={favorites}
        removeFavorite={removeFavorite}
      />
    </div>
  );
}
