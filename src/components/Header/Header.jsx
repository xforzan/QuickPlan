import "./Header.css";
import { Link, NavLink } from "react-router-dom";

// Componente que muestra un header
function Header() {
  return (
    <header>
      {/* Logo  */}
      <h1>
        <Link to="/">QuickPlan</Link>
      </h1>

      {/* Navegación */}
      <nav>
        <ul>
          <li>
            {/* Enlace a la página de favoritos */}
            <NavLink to="/favorites">
              <i className="fa-regular fa-heart"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
