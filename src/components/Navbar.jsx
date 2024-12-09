import LogoOnly from "../assets/logo-no-name-sin-fondo.png";
import LogoText from "../assets/logo-no-draw-sin-fondo.png";
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="header-container">
      <div className="logo-section">
        <Link to="/">
          <button id="af-logo-btn">
            <img id="af-logo" src={LogoOnly} alt="AF Logo" />
          </button>
        </Link>
        <img id="af-text-logo" src={LogoText} alt="AF Logo" />
        <nav id="navbar-section">
          <ul>
            <li>
              <Link to="/Favorites">Favoritos</Link>
            </li>
            <li>
            <Link to="/AboutUs">Sobre Nosotros</Link>
            </li>
            <li>
            <Link to="/Profile">Perfil</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
