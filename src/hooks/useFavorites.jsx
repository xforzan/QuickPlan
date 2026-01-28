import { useEffect, useState } from "react";

// Clave
const FAVORITES_KEY = "favorites";

// Hook para gestionar eventos favoritos
export const useFavorites = () => {
  // Estado inicial cargado desde localStorage
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  // Actualiza los favoritos en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  // Añade un evento a favoritos evitando duplicados
  const addFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
  };

  // Elimina un evento de favoritos
  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((fav) => fav !== id));
  };

  // Comprueba si un evento está marcado como favorito
  const isFavorite = (id) => favorites.includes(id);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
};
