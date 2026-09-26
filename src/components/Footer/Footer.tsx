import "./Footer.css";
import logoImage from "../../assets/images/sabor-y-barra-logo-transparent-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <Link
              className="footer__logo-link"
              to="/"
              aria-label={t("footer.homeLabel")}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                className="footer__logo"
                src={logoImage}
                alt={t("common.brandLogoAlt")}
              />
            </Link>
          </div>

          <nav
            className="footer__navigation"
            aria-label={t("footer.navigationLabel")}
          >
            <h2 className="footer__heading">{t("footer.explore")}</h2>
            <ul className="footer__link-list">
              <li>
                <Link
                  to="/"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/services">{t("nav.services")}</Link>
              </li>
              <li>
                <Link to="/signature-menu">{t("nav.signatureMenu")}</Link>
              </li>
              <li>
                <Link to="/about">{t("nav.about")}</Link>
              </li>
              <li>
                <Link to="/#reviews">{t("nav.reviews")}</Link>
              </li>
              <li>
                <Link to="/#contact">{t("nav.contact")}</Link>
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
