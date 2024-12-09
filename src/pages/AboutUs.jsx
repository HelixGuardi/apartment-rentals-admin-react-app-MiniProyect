import Logo from "../assets/logo-sin-fondo.png";
import GitHublogo from "../assets/github-original-wordmark.512x508.png"

function AboutUs() {
  return (
    <div id="about-us-container" className="main-container">
      <img id="aboutUs-logo" src={Logo} alt="Logo" />

      <article>
        <p>
          AptoFlow nació en 2015 cuando Victor Hugo Guardiola, programador
          apasionado por el mundo de la tecnología, y Miguel Martin, un
          programador especializado en web development, decidieron unir fuerzas.
          Ambos compartían una frustración común: el caos y la ineficiencia en
          la gestión de alquileres de apartamentos. Desde pagos atrasados hasta
          problemas de mantenimiento que tardaban semanas en resolverse, vieron
          una gran oportunidad de mejorar el proceso. El objetivo principal de
          AptoFlow siempre ha sido simplificar la vida de los propietarios y los
          inquilinos a través de tecnología. La empresa comenzó en un pequeño
          coworking en Valencia, España, con solo tres empleados. Hoy, AptoFlow
          es una de las plataformas más populares para la gestión de alquileres
          en Europa, ayudando a miles de administradores y propietarios a
          ahorrar tiempo y reducir problemas en la gestión de sus propiedades.
          La filosofía de AptoFlow se basa en tres pilares:
        </p>
        <ol>
          <li>
            <span>Simplicidad:</span>Interfaces fáciles de usar para cualquier
            usuario.
          </li>
          <li>
            <span>Transparencia:</span>Comunicación clara entre propietarios e
            inquilinos.
          </li>
          <li>
            <span>Innovación:</span> Implementación de herramientas como
            recordatorios automáticos de pagos, reportes de mantenimiento en
            tiempo real y analíticas avanzadas.
          </li>
        </ol>
        <p>
          La empresa está en constante evolución y recientemente lanzó una nueva
          función que utiliza inteligencia artificial para predecir períodos de
          vacantes y sugerir estrategias para maximizar la ocupación.
        </p>
      </article>

      <aside className="quote">
        "Donde la tecnología fluye, los apartamentos prosperan."
      </aside>

      <div className="links-container">
      <div className="github-link-container">
      <a href="https://github.com/HelixGuardi"><img src={GitHublogo} /></a>
      <span>Victor Hugo</span>
      </div>

      <div className="github-link-container">
      <a href="https://github.com/MMARTID"><img src={GitHublogo}/></a>
      <span>Miguel Marti</span>
        </div>
        
        
      </div>
    </div>
  );
}

export default AboutUs;
