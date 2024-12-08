import Logo from "../assets/logo-sin-fondo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section">
      <Link to="/">
        <button id="footer-logo">
          <img src={Logo} alt="AF Logo" />
        </button>
      </Link>
      <div className="text-container">
        <p>
          Desarrollado con pasión por el equipo de <strong>Aptoflow</strong>.
          Construyendo soluciones digitales para la administración de
          alquileres. <br></br>{" "}
          <span id="reserved-rights-text">
            &copy; 2024 Aptoflow. Todos los derechos reservados.
          </span>
        </p>
      </div>
      <div>
        <a
          href="https://github.com/HelixGuardi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Victor Hugo{" "}
        </a>{" "}
        <span id="gitHub-footer-hr"> | </span>
        <a
          href="https://github.com/MMARTID"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Miguel
        </a>
      </div>
    </footer>
  );
}

export default Footer;
