import "./Footer.css";
import logoImage from "../../assets/images/sabor-y-barra-logo-transparent-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <a
              className="footer__logo-link"
              href="/"
              aria-label="Sabor Y Barra home"
            >
              <img
                className="footer__logo"
                src={logoImage}
                alt="Sabor Y Barra"
              />
            </a>
          </div>

          <nav className="footer__navigation" aria-label="Footer navigation">
            <h2 className="footer__heading">Explore</h2>
            <ul className="footer__link-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services-intro">Services</a>
              </li>
              <li>
                <a href="/signature-menu">Signature Menu</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="footer__business">
            <h2 className="footer__heading">follow us</h2>

            <div className="footer__socials-icon-content">
              {/* instagram logo */}
              <a href="https://www.instagram.com/saborybarra/">
                <FontAwesomeIcon
                  className="footer__socials-icon--instagram"
                  icon={faInstagram}
                />
              </a>

              {/* facebook logo */}
              <a href="https://www.facebook.com/profile.php?id=61584786937316">
                <FontAwesomeIcon
                  className="footer__socials-icon--facebook"
                  icon={faFacebook}
                />
              </a>
              {/* <a href="https://www.bark.com/en/us/b/sabor-y-barra/ldBbL9/">
                <img
                  className="footer__socials-icon--bark"
                  src="https://d18jakcjgoan9.cloudfront.net/s/img/images/barklogo-dark.png!d=KY4fXZ"
                  alt="Bark Logo"
                />
              </a> */}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2026 Sabor Y Barra</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
