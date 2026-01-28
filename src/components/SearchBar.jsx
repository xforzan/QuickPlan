// Componente de búsqueda que permite filtrar eventos por texto
function SearchBar({ searchText, setSearchText }) {
  return (
    <input
      type="text"
      placeholder="Buscar por título o lugar..."
      value={searchText}
      // Actualiza el estado con el texto introducido por el usuario
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
}

export default SearchBar;
