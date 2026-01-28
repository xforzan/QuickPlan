import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/Home/Home.jsx";
import EventPage from "./pages/EventPage/EventPage.jsx";
import { Favorites } from "./pages/Favorites.jsx";

// Datos
import eventosData from "./data/eventos.json";

// Componentes
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

// Hook para gestionar eventos favoritos
import { useFavorites } from "./hooks/useFavorites";

function App() {
  // Estado de eventos
  const [events, setEvents] = useState([]);

  // Estado y funciones del hook favoritos
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  // Estados de carga y error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Simulación de carga de datos
  useEffect(() => {
    setTimeout(() => {
      if (eventosData?.length) {
        setEvents(eventosData);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    }, 1000);
  }, []);

  return (
    <>
      {/* Header en toda la página */}
      <Header />

      <main className="main-content">
        <Routes>
          {/* Página de inicio con listado de eventos */}
          <Route
            path="/"
            element={
              <Home
                events={events}
                loading={loading}
                error={error}
                favorites={favorites}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
              />
            }
          />

          {/* Página de detalle de un evento en concreto */}
          <Route
            path="/evento/:id"
            element={
              <EventPage
                events={events}
                loading={loading}
                error={error}
                favorites={favorites}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
              />
            }
          />

          {/* Página con listado de eventos favoritos */}
          <Route
            path="/favorites"
            element={
              <Favorites
                events={events}
                loading={loading}
                error={error}
                favorites={favorites}
                removeFavorite={removeFavorite}
              />
            }
          />
        </Routes>
      </main>

      {/* Footer en toda la pagina*/}
      <Footer />
    </>
  );
}

export default App;
