import "./Footer.css";

/* Componente que muestra un footer */
function Footer() {
  return (
    <footer className="footer">
      {/* Texto legal con el año actual */}
      <p>
        © {new Date().getFullYear()} QuickPlan · Todos los derechos reservados
      </p>
    </footer>
  );
}

export default Footer;
