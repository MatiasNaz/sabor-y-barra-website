import "./AdditionalServices.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import leftArtwork from "../../assets/images/additional-services-left-image.png";
import rightArtwork from "../../assets/images/additional-services-right-image.png";
import sidneyImage from "../../assets/images/collaborator-photographer-image.jpeg";
import fionnaImage from "../../assets/images/fionna-collaborator-image.png";
import matiasImage from "../../assets/images/collaborator-dev-image.jpeg";
import sybGroupedPackagesPdf from "../../assets/images/SYB-GROUPED-PACKAGES.pdf";
import djPackagesPdf from "../../assets/images/DJ-PACAKGES.pdf";
import { useTranslation } from "react-i18next";
import { Mail, Phone, UserRound } from "lucide-react";
import { useState, type SubmitEvent } from "react";
// import { Link } from "react-router";

function AdditionalServices() {
  const { t } = useTranslation();

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  // form state open/close
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);

  // Submit Cocktail Omakase interest details to Web3Forms.
  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("submission_type", "Cocktail Omakase Interest List");

    setIsSubmitting(true);
    setSubmissionError(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (response.ok && result.success) {
        form.reset();
        setSubmitted(true);
      } else {
        setSubmissionError(true);
      }
    } catch {
      setSubmissionError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="additional-services">
        <div className="additional-services__container">
          <section
            className="additional-services__intro"
            aria-labelledby="additional-services-title"
          >
            <p className="additional-services__eyebrow">
              {t("additionalServices.intro.eyebrow")}
            </p>
            <h1 id="additional-services-title">
              {t("additionalServices.intro.title")}
            </h1>
            <p>{t("additionalServices.intro.description")}</p>
          </section>

          <section
            className="additional-services__omakase"
            aria-labelledby="omakase-title"
          >
            <div className="additional-services__omakase-card">
              <p className="additional-services__eyebrow">
                {t("additionalServices.omakase.eyebrow")}
              </p>
              <h2 id="omakase-title">
                {t("additionalServices.omakase.title")}
              </h2>
              <p className="additional-services__omakase-lead">
                <span>{t("additionalServices.omakase.leadTitle")}</span>
                <span>{t("additionalServices.omakase.leadDescription")}</span>
              </p>
              <ul className="additional-services__omakase-list">
                <li>
                  <em>{t("additionalServices.omakase.tastingTitle")}</em>
                  {" \u2014 "}
                  {t("additionalServices.omakase.tastingDescription")}
                </li>
                <li>
                  <em>{t("additionalServices.omakase.localTitle")}</em>
                  {" \u2014 "}
                  {t("additionalServices.omakase.localDescription")}
                </li>
                <li>
                  <em>{t("additionalServices.omakase.merryTitle")}</em>
                  {" \u2014 "}
                  {t("additionalServices.omakase.merryDescription")}
                </li>
                <li>
                  <em>{t("additionalServices.omakase.sonicTitle")}</em>
                  {" \u2014 "}
                  {t("additionalServices.omakase.sonicDescription")}
                </li>
              </ul>
              <p className="additional-services__omakase-timeline">
                {t("additionalServices.omakase.timeline")}
              </p>

              {/* <p className="additional-services__coming-soon">
                {t("additionalServices.omakase.comingSoon")}
              </p> */}

              {/* Show the CTA until the interest form is opened. */}
              {!formIsVisible ? (
                <button
                  className="additional-services__omakase-cta"
                  type="button"
                  onClick={() => setFormIsVisible(true)}
                >
                  {t("additionalServices.omakase.cta")}
                </button>
              ) : submitted ? (
                <div
                  className="additional-services__omakase-success"
                  role="status"
                  aria-live="polite"
                >
                  <h3>{t("additionalServices.omakase.form.successTitle")}</h3>
                  <p>{t("additionalServices.omakase.form.successMessage")}</p>
                </div>
              ) : (
                <form
                  className="additional-services__interest-form"
                  onSubmit={handleSubmit}
                >
                  <h3 className="additional-services__interest-form-eyebrow">
                    {t("additionalServices.omakase.form.eyebrow")}
                  </h3>
                  <div className="additional-services__omakase-form-container">
                    <div className="additional-services__omakase-form-input">
                      <label htmlFor="omakase-name">
                        <UserRound size={21} strokeWidth={1.7} />
                        <span>{t("additionalServices.omakase.form.name")}</span>
                        <input
                          id="omakase-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          placeholder={t(
                            "additionalServices.omakase.form.namePlaceholder",
                          )}
                        />
                      </label>
                    </div>

                    <div className="additional-services__omakase-form-input">
                      <label htmlFor="omakase-email">
                        <Mail size={21} strokeWidth={1.7} />
                        <span>
                          {t("additionalServices.omakase.form.email")}
                        </span>
                        <input
                          id="omakase-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          placeholder={t("booking.fields.emailPlaceholder")}
                        />
                      </label>
                    </div>

                    <div className="additional-services__omakase-form-input">
                      <label htmlFor="omakase-phone">
                        <Phone size={21} strokeWidth={1.7} />
                        <span>
                          {t("additionalServices.omakase.form.phone")}
                        </span>
                        <input
                          id="omakase-phone"
                          name="phoneNumber"
                          type="tel"
                          autoComplete="tel"
                          required
                          placeholder={t(
                            "booking.fields.phoneNumberPlaceholder",
                          )}
                        />
                      </label>
                    </div>

                    <div className="additional-services__omakase-form--submit-btn">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        aria-describedby={
                          submissionError
                            ? "omakase-submission-error"
                            : undefined
                        }
                      >
                        {isSubmitting
                          ? t("additionalServices.omakase.form.submitting")
                          : t("additionalServices.omakase.form.submit")}
                        <span aria-hidden="true">&#8594;</span>
                      </button>
                    </div>
                    {submissionError && (
                      <p
                        id="omakase-submission-error"
                        className="additional-services__omakase-form-error"
                        role="alert"
                      >
                        {t("additionalServices.omakase.form.error")}
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </section>
        </div>

        <section
          className="additional-services__chapter"
          aria-labelledby="additional-services-chapter-title"
        >
          <div className="additional-services__chapter-content">
            <img
              className="additional-services__chapter-art additional-services__chapter-art--left"
              src={leftArtwork}
              alt=""
            />
            <h2 id="additional-services-chapter-title">
              {t("additionalServices.chapter.title")}
            </h2>
            <img
              className="additional-services__chapter-art additional-services__chapter-art--right"
              src={rightArtwork}
              alt=""
            />
          </div>
        </section>

        <div className="additional-services__container additional-services__container--lower">
          <section
            className="additional-services__bundles"
            aria-labelledby="bundles-title"
          >
            <header className="additional-services__section-heading">
              <p className="additional-services__eyebrow">
                {t("additionalServices.bundles.eyebrow")}
              </p>
              <h2 id="bundles-title">
                {t("additionalServices.bundles.title")}
              </h2>
              <p>{t("additionalServices.bundles.description")}</p>
              <p className="additional-services__bundles-note">
                {t("additionalServices.bundles.note")}
              </p>
            </header>
            <div className="additional-services__card-grid">
              <article className="additional-services__bundle-card">
                <header className="additional-services__bundle-header">
                  <h3>{t("additionalServices.bundles.vision.name")}</h3>
                  <div className="additional-services__bundle-price-group">
                    <span className="additional-services__bundle-price-label">
                      {t("additionalServices.bundles.vision.selection")}
                    </span>
                    <p className="additional-services__bundle-price">
                      {t("additionalServices.bundles.vision.price")}
                    </p>
                  </div>
                </header>
                <ul className="additional-services__bundle-list">
                  <li>{t("additionalServices.bundles.vision.hours")}</li>
                  <li>{t("additionalServices.bundles.vision.photos")}</li>
                  <li>{t("additionalServices.bundles.vision.edits")}</li>
                  <li className="additional-services__bundle-row">
                    <span>{t("additionalServices.bundles.vision.recap")}</span>
                    <strong>
                      {t("additionalServices.bundles.vision.recapPrice")}
                    </strong>
                  </li>
                  <li className="additional-services__bundle-row">
                    <span>{t("additionalServices.bundles.vision.video")}</span>
                    <strong>
                      {t("additionalServices.bundles.vision.videoPrice")}
                    </strong>
                  </li>
                </ul>
              </article>
              <article className="additional-services__bundle-card">
                <header className="additional-services__bundle-header">
                  <h3>{t("additionalServices.bundles.flow.name")}</h3>
                  <div className="additional-services__bundle-price-group">
                    <span className="additional-services__bundle-price-label">
                      {t("additionalServices.bundles.flow.selection")}
                    </span>
                    <p className="additional-services__bundle-price">
                      {t("additionalServices.bundles.flow.price")}
                    </p>
                  </div>
                </header>
                <ul className="additional-services__bundle-list">
                  <li>{t("additionalServices.bundles.flow.hours")}</li>
                  <li>{t("additionalServices.bundles.flow.deck")}</li>
                  <li>{t("additionalServices.bundles.flow.music")}</li>
                  <li className="additional-services__bundle-row">
                    <span>
                      {t("additionalServices.bundles.flow.decoration")}
                    </span>
                    <strong>
                      {t("additionalServices.bundles.flow.decorationPrice")}
                    </strong>
                  </li>
                  <li className="additional-services__bundle-row">
                    <span>{t("additionalServices.bundles.flow.lighting")}</span>
                    <strong>
                      {t("additionalServices.bundles.flow.lightingPrice")}
                    </strong>
                  </li>
                </ul>
              </article>
              <article className="additional-services__bundle-card">
                <header className="additional-services__bundle-header">
                  <h3>{t("additionalServices.bundles.puro.name")}</h3>
                  <div className="additional-services__bundle-price-group">
                    <span className="additional-services__bundle-price-label">
                      {t("additionalServices.bundles.puro.selection")}
                    </span>
                    <p className="additional-services__bundle-price">
                      {t("additionalServices.bundles.puro.price")}
                    </p>
                  </div>
                </header>
                <ul className="additional-services__bundle-list">
                  <li>{t("additionalServices.bundles.puro.vision")}</li>
                  <li>{t("additionalServices.bundles.puro.flow")}</li>
                  <li className="additional-services__bundle-row">
                    <span>{t("additionalServices.bundles.puro.grading")}</span>
                    <strong>
                      {t("additionalServices.bundles.puro.gradingPrice")}
                    </strong>
                  </li>
                  <li className="additional-services__bundle-row">
                    <span>
                      {t("additionalServices.bundles.puro.revisions")}
                    </span>
                    <strong>
                      {t("additionalServices.bundles.puro.revisionsPrice")}
                    </strong>
                  </li>
                  <li className="additional-services__bundle-row">
                    <span>{t("additionalServices.bundles.puro.photos")}</span>
                    <strong>
                      {t("additionalServices.bundles.puro.photosPrice")}
                    </strong>
                  </li>
                  <li className="additional-services__bundle-row">
                    <span>{t("additionalServices.bundles.puro.recap")}</span>
                    <strong>
                      {t("additionalServices.bundles.puro.recapPrice")}
                    </strong>
                  </li>
                </ul>
              </article>
            </div>
          </section>

          {/* Collaborators Section */}

          <section
            className="additional-services__collaborators"
            aria-labelledby="collaborators-title"
          >
            <header className="additional-services__section-heading">
              <p className="additional-services__eyebrow">
                {t("additionalServices.collaborators.eyebrow")}
              </p>
              <h2 id="collaborators-title">
                {t("additionalServices.collaborators.title")}
              </h2>
              <p>{t("additionalServices.collaborators.description")}</p>
            </header>

            <div className="additional-services__card-grid">
              <article className="additional-services__collaborator-card">
                <div className="additional-services__collaborator-image additional-services__collaborator-image--photo">
                  <img
                    className="additional-services__collaborator-photo additional-services__collaborator-photo--sidney"
                    src={sidneyImage}
                    alt={t(
                      "additionalServices.collaborators.first.imageAlt",
                    )}
                  />
                </div>
                <div className="additional-services__collaborator-copy">
                  <h3>{t("additionalServices.collaborators.first.name")}</h3>
                  <p className="additional-services__collaborator-category">
                    {t("additionalServices.collaborators.first.category")}
                  </p>
                  <p>{t("additionalServices.collaborators.first.description")}</p>
                  <a
                    href={sybGroupedPackagesPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("additionalServices.collaborators.first.link")}
                  </a>
                </div>
              </article>

              <article className="additional-services__collaborator-card">
                <div className="additional-services__collaborator-image additional-services__collaborator-image--photo additional-services__collaborator-image--fiona">
                  <img
                    className="additional-services__collaborator-photo additional-services__collaborator-photo--fiona"
                    src={fionnaImage}
                    alt={t(
                      "additionalServices.collaborators.second.imageAlt",
                    )}
                  />
                </div>
                <div className="additional-services__collaborator-copy">
                  <h3>{t("additionalServices.collaborators.second.name")}</h3>
                  <p className="additional-services__collaborator-category">
                    {t("additionalServices.collaborators.second.category")}
                  </p>
                  <p>{t("additionalServices.collaborators.second.description")}</p>
                  <a
                    href={djPackagesPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("additionalServices.collaborators.second.link")}
                  </a>
                </div>
              </article>

              <article className="additional-services__collaborator-card">
                <div className="additional-services__collaborator-image additional-services__collaborator-image--photo">
                  <img
                    className="additional-services__collaborator-photo additional-services__collaborator-photo--matias"
                    src={matiasImage}
                    alt={t(
                      "additionalServices.collaborators.third.imageAlt",
                    )}
                  />
                </div>
                <div className="additional-services__collaborator-copy">
                  <h3>{t("additionalServices.collaborators.third.name")}</h3>
                  <p className="additional-services__collaborator-category">
                    {t("additionalServices.collaborators.third.category")}
                  </p>
                  <p>{t("additionalServices.collaborators.third.description")}</p>
                  {/* <Link to="/booking">Explore Matias's Services</Link> */}
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AdditionalServices;
