// Componente que gestiona el botón de favoritos
function FavoriteButton({ eventId, isFavorite, addFavorite, removeFavorite }) {
  return (
    <>
      {/* Si el evento está en favoritos, muestra el icono activo */}
      {isFavorite ? (
        <i
          className="fa-solid fa-heart favorite-btn active"
          onClick={() => removeFavorite(eventId)}
        ></i>
      ) : (
        /* Si no está en favoritos, muestra el icono desactivado */
        <i
          className="fa-regular fa-heart favorite-btn"
          onClick={() => addFavorite(eventId)}
        ></i>
      )}
    </>
  );
}

export default FavoriteButton;
