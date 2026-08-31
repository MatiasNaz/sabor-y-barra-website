import "./Footer.css";
import logoImage from "../../assets/images/sabor-y-barra-logo-transparent-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <a
              className="footer__logo-link"
              href="/"
              aria-label={t("footer.homeLabel")}
            >
              <img
                className="footer__logo"
                src={logoImage}
                alt={t("common.brandLogoAlt")}
              />
            </a>
          </div>

          <nav
            className="footer__navigation"
            aria-label={t("footer.navigationLabel")}
          >
            <h2 className="footer__heading">{t("footer.explore")}</h2>
            <ul className="footer__link-list">
              <li>
                <a href="#home">{t("nav.home")}</a>
              </li>
              <li>
                <a href="#services-intro">{t("nav.services")}</a>
              </li>
              <li>
                <a href="/signature-menu">{t("nav.signatureMenu")}</a>
              </li>
              <li>
                <a href="/about">{t("nav.about")}</a>
              </li>
              <li>
                <a href="#reviews">{t("nav.reviews")}</a>
              </li>
              <li>
                <a href="#contact">{t("nav.contact")}</a>
              </li>
            </ul>
          </nav>

          <div className="footer__business">
            <h2 className="footer__heading">{t("footer.follow")}</h2>

            <div className="footer__socials-icon-content">
              {/* instagram logo */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.instagramLabel")}
                href="https://www.instagram.com/saborybarra/"
              >
                <FontAwesomeIcon
                  className="footer__socials-icon--instagram"
                  icon={faInstagram}
                />
              </a>

              {/* facebook logo */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.facebookLabel")}
                href="https://www.facebook.com/profile.php?id=61584786937316"
              >
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
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
