import { useState } from "react";

// Componentes
import EventList from "../../components/EventList/EventList.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import CategoryFilter from "../../components/CategoryFilter.jsx";
import Loading from "../../components/Loading/Loading.jsx";

import "./Home.css";

function Home({
  events,
  loading,
  error,
  favorites,
  addFavorite,
  removeFavorite,
}) {
  // Estado para el texto de búsqueda
  const [searchText, setSearchText] = useState("");

  // Estado para la categoría seleccionada
  const [category, setCategory] = useState("Todos");

  // Filtrado de eventos según el texto de búsqueda y la categoría
  const filteredEvents = events.filter((event) => {
    const matchesText =
      event.titulo.toLowerCase().includes(searchText.toLowerCase()) ||
      event.lugar.toLowerCase().includes(searchText.toLowerCase());

    const matchesCategory =
      category === "Todos" || event.categoria === category;

    return matchesText && matchesCategory;
  });

  // Muestra un spinner mientras se cargan los datos
  if (loading) return <Loading />;

  // Muestra un mensaje de error si ocurre algún problema
  if (error) return <p className="error-msg">Error cargando eventos.</p>;

  return (
    <div className="container">
      <h2>Agenda de Eventos</h2>

      {/* Barra de búsqueda y filtro por categoría */}
      <div className="filters-bar">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />

        <CategoryFilter category={category} setCategory={setCategory} />
      </div>

      {/* Número de eventos mostrados sobre un total de eventos */}
      <p>
        Mostrando {filteredEvents.length} de {events.length} eventos
      </p>

      {/* Listado de eventos filtrados */}
      <EventList
        events={filteredEvents}
        favorites={favorites}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
      />
    </div>
  );
}

export default Home;
