import "./ServicesPage.css";
import Header from "../../components/Header/Header";
import Contact from "../Contact/Contact";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import leftHandImg from "../../assets/images/left-hand-drink-pic.png";
import rightHandImg from "../../assets/images/right-hand-drink-pic.png";
import { useState } from "react";

const CALENDLY_URL =
  "https://calendly.com/saborybarra/30min?https://calendly.com/saborybarra/30min=1&month=2026-08";

function Services() {
  const { t } = useTranslation();

  // create state for corporate cards packages with default value of null when cards are closed
  const [packageOpen, setPackageOpen] = useState<string | null>(null);

  return (
    <>
      <Header />

      <main className="services__section">
        <div className="services__bg-container">
          <section
            className="services__intro-container"
            aria-labelledby="services-page-title"
          >
            <p className="services__eyebrow">
              {t("servicesPage.intro.eyebrow")}
            </p>
            <h1 id="services-page-title" className="services__intro-title">
              {t("servicesPage.intro.title")}
            </h1>
            <p className="services__intro-description">
              {t("servicesPage.intro.description")}
            </p>

            <div className="services__intro-cta-container">
              <a className="services__intro-cta" href="#packages">
                {t("servicesPage.intro.cta")}
              </a>
            </div>
          </section>

          <section
            id="packages"
            className="services__packages"
            aria-labelledby="services-packages-title"
          >
            <div className="services__packages-heading">
              <p className="services__eyebrow">
                {t("servicesPage.packages.eyebrow")}
              </p>
              <h2 id="services-packages-title">
                {t("servicesPage.packages.title")}
              </h2>
            </div>

            <div className="services__packages-grid">
              {/* start of el basico card */}
              <article className="services__package-card">
                <header className="services__package-header">
                  <h3>{t("servicesPage.packages.basico.name")}</h3>
                  <p className="services__package-price">
                    {t("servicesPage.packages.basico.price")}
                  </p>
                </header>

                <ul className="services__package-list services__package-list--private">
                  <li className="services__package-service-hours">
                    {t("servicesPage.packages.basico.hours")}
                  </li>
                  <li>
                    {t("servicesPage.packages.privateDetails.consultation")}
                  </li>
                  <li>
                    {t("servicesPage.packages.privateDetails.equipment")}
                    <br />
                    {t("servicesPage.packages.privateDetails.equipmentDetail")}
                  </li>
                  <li className="services__package-row">
                    <span>
                      {t("servicesPage.packages.customMenu")}
                      <br />
                      {t("servicesPage.packages.customMenuDetail")}
                    </span>
                    <strong>+ $50</strong>
                  </li>
                  <li className="services__package-row">
                    <span>{t("servicesPage.packages.portableBar")}</span>
                    <strong>+ $75</strong>
                  </li>
                  <li className="services__package-row">
                    <span>{t("servicesPage.packages.iceGarnishes")}</span>
                    <strong>+ $50</strong>
                  </li>
                  <li className="services__package-row">
                    <span>{t("servicesPage.packages.extension")}</span>
                    <strong>{t("servicesPage.packages.extensionPrice")}</strong>
                  </li>
                </ul>
              </article>
              {/* end of el basico card */}

              {/* start of el clasico card */}
              <article className="services__package-card services__package-card--featured">
                <p className="services__package-tag">
                  {t("servicesPage.packages.mostRequested")}
                </p>
                <header className="services__package-header">
                  <h3>{t("servicesPage.packages.clasico.name")}</h3>
                  <p className="services__package-price">
                    {t("servicesPage.packages.clasico.price")}
                  </p>
                </header>

                <ul className="services__package-list services__package-list--private">
                  <li className="services__package-service-hours">
                    {t("servicesPage.packages.clasico.hours")}
                  </li>
                  <li>
                    {t("servicesPage.packages.privateDetails.consultation")}
                  </li>
                  <li>
                    {t("servicesPage.packages.privateDetails.equipment")}
                    <br />
                    {t("servicesPage.packages.privateDetails.equipmentDetail")}
                  </li>
                  <li>{t("servicesPage.packages.clasico.essentials")}</li>
                  <li className="services__package-row">
                    <span>
                      {t("servicesPage.packages.customMenu")}
                      <br />
                      {t("servicesPage.packages.customMenuDetail")}
                    </span>
                    <strong>{t("servicesPage.packages.included")}</strong>
                  </li>

                  <li className="services__package-row">
                    <span>{t("servicesPage.packages.portableBar")}</span>
                    <strong>{t("servicesPage.packages.included")}</strong>
                  </li>
                  <li className="services__package-row">
                    <span>{t("servicesPage.packages.extension")}</span>
                    <strong>{t("servicesPage.packages.extensionPrice")}</strong>
                  </li>
                </ul>
              </article>
              {/* end of el clasico card */}

              {/* start of signature sabor card */}
              <article className="services__package-card">
                <header className="services__package-header">
                  <h3>{t("servicesPage.packages.signature.name")}</h3>
                  <p className="services__package-price">
                    {t("servicesPage.packages.signature.price")}
                  </p>
                </header>

                <ul className="services__package-list services__package-list--private">
                  <li className="services__package-service-hours">
                    {t("servicesPage.packages.signature.hours")}
                  </li>
                  <li>
                    {t("servicesPage.packages.privateDetails.consultation")}
                  </li>
                  <li>
                    {t("servicesPage.packages.privateDetails.equipment")}
                    <br />
                    {t("servicesPage.packages.privateDetails.equipmentDetail")}
                  </li>
                  <li>{t("servicesPage.packages.signature.essentials")}</li>
                  <li>{t("servicesPage.packages.signature.premium")}</li>
                  <li className="services__package-row">
                    <span>
                      {t("servicesPage.packages.customMenu")}
                      <br />
                      {t("servicesPage.packages.customMenuDetail")}
                    </span>
                    <strong>{t("servicesPage.packages.included")}</strong>
                  </li>
                  <li className="services__package-row">
                    <span>{t("servicesPage.packages.portableBar")}</span>
                    <strong>{t("servicesPage.packages.included")}</strong>
                  </li>
                  <li className="services__package-row">
                    <span>{t("servicesPage.packages.extension")}</span>
                    <strong>{t("servicesPage.packages.extensionPrice")}</strong>
                  </li>
                </ul>
              </article>
              {/* end of signature sabor card */}
            </div>
          </section>

          {/* Start of corporate packages cards */}
          <section
            id="corporate-packages"
            className="services__packages services__packages--corporate"
            aria-labelledby="services-corporate-packages-title"
          >
            <div className="services__packages-heading">
              <h2 id="services-corporate-packages-title">
                {t("servicesPage.packages.corporateTitle")}
              </h2>
              <p className="services__corporate-note">
                {t("servicesPage.packages.corporate.licensedInsured")}
              </p>
            </div>

            <div className="services__packages-grid">
              {/* start of boardroom card */}
              <article className="services__package-card">
                <header className="services__package-header">
                  <h3>{t("servicesPage.packages.corporate.boardroom.name")}</h3>
                  <a
                    className="services__package-quote-cta"
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("servicesPage.packages.getQuote")}
                  </a>
                </header>

                <ul className="services__package-list">
                  <li>
                    <span>
                      {t("servicesPage.packages.corporate.boardroom.summary")}
                    </span>
                    <span className="services__package-guest-count">
                      {t("servicesPage.packages.corporate.boardroom.guests")}
                    </span>
                  </li>

                  <li>
                    <button
                      type="button"
                      className="services__package-details-btn"
                      aria-expanded={packageOpen === "boardroom"}
                      aria-controls="boardroom-package-details"
                      // if user clicks button, call setPackageOpen and open the list
                      onClick={() =>
                        /* if boardroom package button is already open,
                        set to null if closing button, else open boardroom package */
                        setPackageOpen(
                          packageOpen === "boardroom" ? null : "boardroom",
                        )
                      }
                    >
                      {t("servicesPage.packages.corporate.viewDetails")}
                      <span
                        className={`services__packages-dropdown-arrow ${
                          packageOpen === "boardroom"
                            ? "services__packages-dropdown-arrow--open"
                            : ""
                        }`}
                      ></span>
                    </button>
                  </li>

                  <li
                    className={`services__package-details-item ${
                      packageOpen === "boardroom"
                        ? "services__package-details-item--open"
                        : ""
                    }`}
                  >
                    <ul
                      id="boardroom-package-details"
                      className={`services__package-details ${
                        packageOpen === "boardroom"
                          ? "services__package-details--open"
                          : ""
                      }`}
                    >
                      <li>
                        {t(
                          "servicesPage.packages.corporate.boardroom.consultation",
                        )}
                      </li>
                      <li>
                        {t("servicesPage.packages.corporate.boardroom.hours")}
                      </li>
                      <li>
                        {t("servicesPage.packages.corporate.boardroom.attire")}
                      </li>
                      <li>
                        {t(
                          "servicesPage.packages.corporate.boardroom.setupEquipment",
                        )}
                      </li>
                      <li>
                        {t(
                          "servicesPage.packages.corporate.boardroom.serviceItems",
                        )}
                      </li>
                      <li className="services__package-row">
                        <span>
                          {t(
                            "servicesPage.packages.corporate.boardroom.menuLabel",
                          )}
                        </span>
                        <strong>+ $50</strong>
                      </li>
                      <li className="services__package-row">
                        <span>
                          {t(
                            "servicesPage.packages.corporate.boardroom.iceLabel",
                          )}
                        </span>
                        <strong>+ $50</strong>
                      </li>
                      <li className="services__package-row">
                        <span>{t("servicesPage.packages.portableBar")}</span>
                        <strong>+ $100</strong>
                      </li>
                      <li className="services__package-row">
                        <span>
                          {t("servicesPage.packages.corporate.extensionLabel")}
                        </span>
                        <strong>
                          {t("servicesPage.packages.extensionPrice")}
                        </strong>
                      </li>
                      <li className="services__package-row">
                        <span>
                          {t("servicesPage.packages.corporate.staffLabel")}
                        </span>
                        <strong>{t("servicesPage.packages.staffPrice")}</strong>
                      </li>
                    </ul>
                  </li>
                </ul>
              </article>
              {/* end of boardroom card */}

              {/* start of executive card */}
              <article className="services__package-card services__package-card--featured">
                <p className="services__package-tag">
                  {t("servicesPage.packages.mostRequested")}
                </p>
                <header className="services__package-header">
                  <h3>{t("servicesPage.packages.corporate.executive.name")}</h3>
                  <a
                    className="services__package-quote-cta"
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("servicesPage.packages.getQuote")}
                  </a>
                </header>

                <ul className="services__package-list">
                  <li>
                    <span>
                      {t("servicesPage.packages.corporate.executive.summary")}
                    </span>
                    <span className="services__package-guest-count">
                      {t("servicesPage.packages.corporate.executive.guests")}
                    </span>
                  </li>

                  <li>
                    <button
                      type="button"
                      className="services__package-details-btn"
                      aria-expanded={packageOpen === "executive"}
                      aria-controls="executive-package-details"
                      onClick={() =>
                        setPackageOpen(
                          packageOpen === "executive" ? null : "executive",
                        )
                      }
                    >
                      {t("servicesPage.packages.corporate.viewDetails")}
                      <span
                        className={`services__packages-dropdown-arrow ${
                          packageOpen === "executive"
                            ? "services__packages-dropdown-arrow--open"
                            : ""
                        }`}
                      ></span>
                    </button>
                  </li>

                  <li
                    className={`services__package-details-item ${
                      packageOpen === "executive"
                        ? "services__package-details-item--open"
                        : ""
                    }`}
                  >
                    <ul
                      id="executive-package-details"
                      className={`services__package-details ${
                        packageOpen === "executive"
                          ? "services__package-details--open"
                          : ""
                      }`}
                    >
                      <li>
                        {t(
                          "servicesPage.packages.corporate.executive.boardroomFeatures",
                        )}
                      </li>
                      <li>
                        {t("servicesPage.packages.corporate.executive.hours")}
                      </li>
                      <li>
                        {t(
                          "servicesPage.packages.corporate.executive.bartenders",
                        )}
                      </li>
                      <li>
                        {t(
                          "servicesPage.packages.corporate.executive.cocktails",
                        )}
                      </li>
                      <li>
                        {t(
                          "servicesPage.packages.corporate.executive.includedItems",
                        )}
                      </li>
                      <li className="services__package-row">
                        <span>
                          {t(
                            "servicesPage.packages.corporate.extensionPerStaffLabel",
                          )}
                        </span>
                        <strong>
                          {t("servicesPage.packages.extensionPrice")}
                        </strong>
                      </li>
                      <li className="services__package-row">
                        <span>
                          {t("servicesPage.packages.corporate.staffLabel")}
                        </span>
                        <strong>{t("servicesPage.packages.staffPrice")}</strong>
                      </li>
                    </ul>
                  </li>
                </ul>
              </article>
              {/* end of executive card */}

              {/* start of c-suite card */}
              <article className="services__package-card">
                <header className="services__package-header">
                  <h3>{t("servicesPage.packages.corporate.cSuite.name")}</h3>
                  <a
                    className="services__package-quote-cta"
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("servicesPage.packages.getQuote")}
                  </a>
                </header>

                <ul className="services__package-list">
                  <li>
                    <span>
                      {t("servicesPage.packages.corporate.cSuite.summary")}
                    </span>
                    <span className="services__package-guest-count">
                      {t("servicesPage.packages.corporate.cSuite.guests")}
                    </span>
                  </li>

                  <li>
                    <button
                      type="button"
                      className="services__package-details-btn"
                      aria-expanded={packageOpen === "c-suite"}
                      aria-controls="c-suite-package-details"
                      onClick={() =>
                        setPackageOpen(
                          packageOpen === "c-suite" ? null : "c-suite",
                        )
                      }
                    >
                      {t("servicesPage.packages.corporate.viewDetails")}
                      <span
                        className={`services__packages-dropdown-arrow ${
                          packageOpen === "c-suite"
                            ? "services__packages-dropdown-arrow--open"
                            : ""
                        }`}
                      ></span>
                    </button>
                  </li>

                  <li
                    className={`services__package-details-item ${
                      packageOpen === "c-suite"
                        ? "services__package-details-item--open"
                        : ""
                    }`}
                  >
                    <ul
                      id="c-suite-package-details"
                      className={`services__package-details ${
                        packageOpen === "c-suite"
                          ? "services__package-details--open"
                          : ""
                      }`}
                    >
                      <li>
                        {t(
                          "servicesPage.packages.corporate.cSuite.executiveFeatures",
                        )}
                      </li>
                      <li>
                        {t("servicesPage.packages.corporate.cSuite.hours")}
                      </li>
                      <li>
                        {t("servicesPage.packages.corporate.cSuite.staffing")}
                      </li>
                      <li>
                        {t("servicesPage.packages.corporate.cSuite.premium")}
                      </li>
                      <li>
                        {t("servicesPage.packages.corporate.cSuite.cocktails")}
                      </li>
                      <li className="services__package-row">
                        <span>
                          {t(
                            "servicesPage.packages.corporate.extensionPerStaffLabel",
                          )}
                        </span>
                        <strong>
                          {t("servicesPage.packages.extensionPrice")}
                        </strong>
                      </li>
                      <li className="services__package-row">
                        <span>
                          {t("servicesPage.packages.corporate.staffLabel")}
                        </span>
                        <strong>{t("servicesPage.packages.staffPrice")}</strong>
                      </li>
                    </ul>
                  </li>
                </ul>
              </article>
              {/* end of c-suite card */}
            </div>
          </section>
          {/* end of corporate packages cards */}
        </div>

        <section className="services__chapter-break-container">
          <div className="services__chapter-content">
            <div className="services__img-container">
              <img
                className="chapter-break-img left-hand-img"
                src={leftHandImg}
                alt=""
              />
            </div>
            <div className="chapter-break__center-column">
              <h3>
                {t("servicesPage.chapter.lineOne")} <br />
                {t("servicesPage.chapter.lineTwo")}
              </h3>

              <a className="chapter-break__button" href="/additional-services">
                {t("servicesPage.chapter.cta")}
              </a>
            </div>

            <div className="services__img-container">
              <img
                className="chapter-break-img right-hand-img"
                src={rightHandImg}
                alt=""
              />
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Services;
