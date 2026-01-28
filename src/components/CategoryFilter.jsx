// Componente que permite filtrar los eventos por categoría
function CategoryFilter({ category, setCategory }) {
  return (
    <select
      value={category}
      // Actualiza la categoría seleccionada
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="Todos">Todos</option>
      <option value="Charla">Charla</option>
      <option value="Taller">Taller</option>
      <option value="Torneo">Torneo</option>
      <option value="Excursión">Excursión</option>
    </select>
  );
}

export default CategoryFilter;
