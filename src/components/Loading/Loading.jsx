import "./Loading.css";

// Componente que muestra un spinner
const Loading = () => {
  return (
    <div className="spinner-container">
      {/* Spinner visual */}
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;
