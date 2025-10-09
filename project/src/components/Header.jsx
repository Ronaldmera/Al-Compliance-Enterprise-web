import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={logo}
            alt="Logo AL COMPLIANCE ENTERPRISE S.A.S "
            className="logo"
          />
          <span className="nameInterprise">AL COMPLIANCE ENTERPRISE S.A.S</span>
        </a>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú colapsable */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link text-light "
                aria-current="page"
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/nosotros"
                className="nav-link text-light "
                aria-current="page"
              >
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/servicios"
                className="nav-link text-light "
                aria-current="page"
              >
                Servicios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/equipo"
                className="nav-link text-light "
                aria-current="page"
              >
                Equipo
              </NavLink>
            </li>
            <NavLink
              to="/contacto"
              className="nav-link text-light "
              aria-current="page"
            >
              Contacto
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
