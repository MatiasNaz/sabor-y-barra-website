import "./Contact.css";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="contact__section"
      aria-labelledby="contact-title"
    >
      <div className="contact__container">
        <p className="contact__eyebrow">{t("contact.eyebrow")}</p>

        <h2 id="contact-title" className="contact__title">
          {t("contact.title")}
        </h2>

        <p className="contact__description">
          {t("contact.description")}
        </p>

        <Link to="/booking" className="contact__booking-cta">
          {t("common.bookEvent")}
        </Link>

        <address className="contact__details">
          <div className="contact__detail">
            <span className="contact__detail-label">{t("contact.email")}</span>
            <a href="mailto:saborybarraprny@gmail.com">
              saborybarraprny@gmail.com
            </a>
          </div>
        </address>
      </div>
    </section>
  );
}

export default Contact;
