import LogoOnly from "../assets/logo-no-name-sin-fondo.png";
import LogoText from "../assets/logo-no-draw-sin-fondo.png";
import MagnifyingGlass from "../assets/magnifying-glass-icon-removebg.png"

function Navbar() {
  return (
    <header className="header-container">
      <div className="logo-section">
        <button id="af-logo-btn">
          <img id="af-logo" src={LogoOnly} alt="AF Logo" />
        </button>
        <img id="af-text-logo" src={LogoText} alt="AF Logo" />
        <nav id="navbar-section">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Favorites</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Join Us!</a>
            </li>
            <li>
              <a href="#">Log In</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="search-bar-container">
        <form className="form" action="/search">
          <img id="magnifying-glass" src={MagnifyingGlass} alt="magnifying-glass" />
          <input id="input-text-bar" type="text" placeholder="   Tu alquiler, en un clic" />
          <button id="search-button">Search</button>
        </form>
      </div>
    </header>
  );
}

export default Navbar;
