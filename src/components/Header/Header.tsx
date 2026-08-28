import "./Header.css";
import AnnouncementBar from "./AnnouncementBar";
import logoImage from "../../assets/images/sabor-y-barra-logo-transparent-bg.png";
import { Link } from "react-router";

function Header() {
  return (
    <header id="home" className="header__section">
      {/* announcement marquee bar */}
      <AnnouncementBar />

      {/* navbar section */}
      <nav className="header__navbar-section">
        {/* brand logo container & image */}
        <div className="header__logo-container">
          <Link to="/">
            <img
              className="header__logo-img"
              src={logoImage}
              alt="sabor y barra logo"
            />
          </Link>
        </div>

        {/* navigation bar & links */}
        <div className="navbar__list-container">
          <ul className="navbar__list">
            <li>
              <Link to="/" className="navbar__links">
                Home
              </Link>
            </li>
            <li>
              <a className="navbar__links" href="#services-intro">
                Services
              </a>
            </li>
            <li>
              <a className="navbar__links" href="/signature-menu">
                Signature Menu
              </a>
            </li>
            <li>
              <a className="navbar__links" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="navbar__links" href="#reviews">
                Reviews
              </a>
            </li>
            <li>
              <a className="navbar__links" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <Link
                to="/booking"
                className="booking-cta navbar__links booking-text"
              >
                Book Your Event
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
