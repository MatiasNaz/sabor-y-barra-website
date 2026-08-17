import "./Header.css";
import AnnouncementBar from "./AnnouncementBar";
import logoImage from "../../assets/images/sabor-y-barra-logo-transparent-bg.png";

function Header() {
  return (
    <header className="header">
      {/* announcement marquee bar */}
      <AnnouncementBar />

      {/* navbar section */}
      <nav className="header__navbar-section">
        {/* brand logo container & image */}
        <div className="header__logo-container">
          <a href="http://localhost:5173/">
            <img
              className="header__logo-img"
              src={logoImage}
              alt="sabor y barra logo"
            />
          </a>
        </div>

        {/* navigation bar & links */}
        <div className="navbar__list-container">
          <ul className="navbar__list">
            <li>
              <a className="navbar__links" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="navbar__links" href="/services">
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
              <a className="navbar__links" href="/reviews">
                Reviews
              </a>
            </li>
            <li>
              <a className="navbar__links" href="/contact">
                Contact
              </a>
            </li>
            <li className="booking-cta">
              <a className="navbar__links booking-text" href="/booking">
                Book Your Event
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
