import "./Header.css";
import AnnouncementBar from "./AnnouncementBar";
import logoImage from "../../assets/images/sabor-y-barra-logo-transparent-bg.png";
import unitedStatesFlag from "../../assets/icons/flag-us.svg";
import puertoRicoFlag from "../../assets/icons/flag-pr.svg";
import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

// define props for Header to accept
type HeaderProps = {
  showBookingButton?: boolean;
};

function Header({ showBookingButton = true }: HeaderProps) {
  const { t, i18n } = useTranslation();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const languageTriggerRef = useRef<HTMLButtonElement>(null);
  const activeLanguage = i18n.resolvedLanguage === "es" ? "es" : "en";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isLanguageMenuOpen) return;

    function handleOutsideClick(event: MouseEvent) {
      if (!languageMenuRef.current?.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isLanguageMenuOpen]);

  function selectLanguage(language: "en" | "es") {
    void i18n.changeLanguage(language);
    setIsLanguageMenuOpen(false);
    languageTriggerRef.current?.focus();
  }

  return (
    <header id="home" className="header__section">
      {/* announcement marquee bar */}
      <AnnouncementBar />

      {/* navbar section */}
      <nav className="header__navbar-section" aria-label={t("nav.label")}>
        {/* brand logo container & image */}
        <div className="header__logo-container">
          <Link to="/" aria-label={t("footer.homeLabel")}>
            <img
              className="header__logo-img"
              src={logoImage}
              alt={t("common.brandLogoAlt")}
            />
          </Link>
        </div>

        {/* navigation bar & links */}
        <div className="navbar__list-container">
          <ul
            id="mobile-navigation"
            className={`navbar__list ${
              menuOpen ? "navbar__list--open" : ""
            }`}
          >
            <li>
              <Link to="/" className="navbar__links">
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <a className="navbar__links" href="/#services-intro">
                {t("nav.services")}
              </a>
            </li>
            <li>
              <a className="navbar__links" href="/signature-menu">
                {t("nav.signatureMenu")}
              </a>
            </li>
            <li>
              <Link className="navbar__links" to="/about">
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <a className="navbar__links" href="/#reviews">
                {t("nav.reviews")}
              </a>
            </li>
            <li>
              <a className="navbar__links" href="#contact">
                {t("nav.contact")}
              </a>
            </li>
            <li>
              <div
                className="navbar__language"
                ref={languageMenuRef}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setIsLanguageMenuOpen(false);
                    languageTriggerRef.current?.focus();
                  }
                }}
              >
                <button
                  className="navbar__language-trigger"
                  ref={languageTriggerRef}
                  type="button"
                  aria-label={t("language.selectorLabel")}
                  aria-expanded={isLanguageMenuOpen}
                  aria-haspopup="menu"
                  aria-controls="language-menu"
                  onClick={() => setIsLanguageMenuOpen((isOpen) => !isOpen)}
                >
                  <img
                    className="navbar__language-flag"
                    src={
                      activeLanguage === "en"
                        ? unitedStatesFlag
                        : puertoRicoFlag
                    }
                    alt=""
                    aria-hidden="true"
                  />
                  <span>{activeLanguage.toUpperCase()}</span>
                  <span aria-hidden="true">▾</span>
                </button>

                {isLanguageMenuOpen && (
                  <div
                    id="language-menu"
                    className="navbar__language-menu"
                    role="menu"
                    aria-label={t("language.menuLabel")}
                  >
                    <button
                      type="button"
                      role="menuitemradio"
                      aria-checked={activeLanguage === "en"}
                      onClick={() => selectLanguage("en")}
                    >
                      <img
                        className="navbar__language-flag"
                        src={unitedStatesFlag}
                        alt=""
                        aria-hidden="true"
                      />
                      {t("language.english")}
                    </button>
                    <button
                      type="button"
                      role="menuitemradio"
                      aria-checked={activeLanguage === "es"}
                      onClick={() => selectLanguage("es")}
                    >
                      <img
                        className="navbar__language-flag"
                        src={puertoRicoFlag}
                        alt=""
                        aria-hidden="true"
                      />
                      {t("language.spanish")}
                    </button>
                  </div>
                )}
              </div>
            </li>
            {showBookingButton && (
              <li>
                <Link
                  to="/booking"
                  className="booking-cta navbar__links booking-text"
                >
                  {t("common.bookEvent")}
                </Link>
              </li>
            )}
          </ul>

          {/* start of hamburger button */}
          <button
            className="navbar__hamburger"
            type="button"
            aria-label={t("nav.menu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span className="navbar__bar"></span>
            <span className="navbar__bar"></span>
            <span className="navbar__bar"></span>
          </button>
          {/* end of hamburger button */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
