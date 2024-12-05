import Logo from "../assets/logo-sin-fondo.png"

function Footer() {

    
  return (
    <footer className="footer-section">
      <button id="footer-logo">
          <img src={Logo} alt="AF Logo" />
        </button>
      <div className="text-container">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          optio sed eaque? Cumque excepturi id, accusantium earum debitis esse
          minus quos eum perferendis rem facere similique molestias placeat cum
          ducimus.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
