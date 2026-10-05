import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo Amoma" />
        </Link>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/galeria">Galería</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
