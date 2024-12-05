import Logo from "../assets/logo-sin-fondo.png";

function Navbar() {
  return (
    <header>
      <div className="logo-section">
        <img src={Logo} alt="" />
        <nav className="navbar-section">
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
          </ul>
        </nav>
      </div>
      <div className="search-bar">
        <form className="form" action="/search">
          <img className="magnifying-glass" src="" alt="magnifying-glass" />
          <input type="text" placeholder="Search packages" />
          <button className="search-button">Search</button>
        </form>
        <div className="auth-links">
            <span className="join"><a href="#">Join Us!</a></span>
            <span className="log-in"><a href="#">Log In</a></span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
