import "./AdditionalServices.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import leftArtwork from "../../assets/images/additional-services-left-image.png";
import rightArtwork from "../../assets/images/additional-services-right-image.png";
import { useTranslation } from "react-i18next";
// import { useState, type SubmitEvent } from react;

function AdditionalServices() {
  const { t } = useTranslation();

  // form state open/close
  // const []

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
                  {" — "}
                  {t("additionalServices.omakase.tastingDescription")}
                </li>
                <li>
                  <em>{t("additionalServices.omakase.localTitle")}</em>
                  {" — "}
                  {t("additionalServices.omakase.localDescription")}
                </li>
                <li>
                  <em>{t("additionalServices.omakase.merryTitle")}</em>
                  {" — "}
                  {t("additionalServices.omakase.merryDescription")}
                </li>
                <li>
                  <em>{t("additionalServices.omakase.sonicTitle")}</em>
                  {" — "}
                  {t("additionalServices.omakase.sonicDescription")}
                </li>
              </ul>
              <p className="additional-services__omakase-timeline">
                {t("additionalServices.omakase.timeline")}
              </p>
              <p className="additional-services__coming-soon">
                {t("additionalServices.omakase.comingSoon")}
              </p>

              {/* omakase button */}
              {/* <button
                className="additional-services__omakase-cta"
                type="button"
              >
                {t("additionalServices.omakase.cta")}
              </button> */}

              {/* cocktail omakase interest form */}
              {/* <form className="additional-services__interest-form">
                <label htmlFor="omakase-full-name">Name</label>
                <input
                  id="omakase-full-name"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                />

                <label htmlFor="omakase-full-name">Email</label>
                <input
                  id="omakase-full-name"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                />

                <label htmlFor="omakase-phone">Phone number</label>
                <input
                  id="omakase-phone"
                  name="phoneNumber"
                  type="tel"
                  autoComplete="tel"
                  required
                />
                <button type="submit">Submit</button>
              </form> */}
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
                    <span className="additional-services__bundle-price-label">{t("additionalServices.bundles.vision.selection")}</span>
                    <p className="additional-services__bundle-price">{t("additionalServices.bundles.vision.price")}</p>
                  </div>
                </header>
                <ul className="additional-services__bundle-list">
                  <li>{t("additionalServices.bundles.vision.hours")}</li>
                  <li>{t("additionalServices.bundles.vision.photos")}</li>
                  <li>{t("additionalServices.bundles.vision.edits")}</li>
                  <li className="additional-services__bundle-row"><span>{t("additionalServices.bundles.vision.recap")}</span><strong>{t("additionalServices.bundles.vision.recapPrice")}</strong></li>
                  <li className="additional-services__bundle-row"><span>{t("additionalServices.bundles.vision.video")}</span><strong>{t("additionalServices.bundles.vision.videoPrice")}</strong></li>
                </ul>
              </article>
              <article className="additional-services__bundle-card">
                <header className="additional-services__bundle-header">
                  <h3>{t("additionalServices.bundles.flow.name")}</h3>
                  <div className="additional-services__bundle-price-group">
                    <span className="additional-services__bundle-price-label">{t("additionalServices.bundles.flow.selection")}</span>
                    <p className="additional-services__bundle-price">{t("additionalServices.bundles.flow.price")}</p>
                  </div>
                </header>
                <ul className="additional-services__bundle-list">
                  <li>{t("additionalServices.bundles.flow.hours")}</li>
                  <li>{t("additionalServices.bundles.flow.deck")}</li>
                  <li>{t("additionalServices.bundles.flow.music")}</li>
                  <li className="additional-services__bundle-row"><span>{t("additionalServices.bundles.flow.decoration")}</span><strong>{t("additionalServices.bundles.flow.decorationPrice")}</strong></li>
                  <li className="additional-services__bundle-row"><span>{t("additionalServices.bundles.flow.lighting")}</span><strong>{t("additionalServices.bundles.flow.lightingPrice")}</strong></li>
                </ul>
              </article>
              <article className="additional-services__bundle-card">
                <header className="additional-services__bundle-header">
                  <h3>{t("additionalServices.bundles.puro.name")}</h3>
                  <div className="additional-services__bundle-price-group">
                    <span className="additional-services__bundle-price-label">{t("additionalServices.bundles.puro.selection")}</span>
                    <p className="additional-services__bundle-price">{t("additionalServices.bundles.puro.price")}</p>
                  </div>
                </header>
                <ul className="additional-services__bundle-list">
                  <li>{t("additionalServices.bundles.puro.vision")}</li>
                  <li>{t("additionalServices.bundles.puro.flow")}</li>
                  <li className="additional-services__bundle-row"><span>{t("additionalServices.bundles.puro.grading")}</span><strong>{t("additionalServices.bundles.puro.gradingPrice")}</strong></li>
                  <li className="additional-services__bundle-row"><span>{t("additionalServices.bundles.puro.revisions")}</span><strong>{t("additionalServices.bundles.puro.revisionsPrice")}</strong></li>
                  <li className="additional-services__bundle-row"><span>{t("additionalServices.bundles.puro.photos")}</span><strong>{t("additionalServices.bundles.puro.photosPrice")}</strong></li>
                  <li className="additional-services__bundle-row"><span>{t("additionalServices.bundles.puro.recap")}</span><strong>{t("additionalServices.bundles.puro.recapPrice")}</strong></li>
                </ul>
              </article>
            </div>
          </section>

          {/* <section className="additional-services__collaborators" aria-labelledby="collaborators-title">
            <header className="additional-services__section-heading">
              <p className="additional-services__eyebrow">{t("additionalServices.collaborators.eyebrow")}</p>
              <h2 id="collaborators-title">{t("additionalServices.collaborators.title")}</h2>
              <p>{t("additionalServices.collaborators.description")}</p>
            </header>
            <div className="additional-services__card-grid">
              <article className="additional-services__collaborator-card">
                <div className="additional-services__collaborator-image" aria-label={t("additionalServices.collaborators.imagePlaceholder")} role="img">
                  <span>{t("additionalServices.collaborators.imagePlaceholder")}</span>
                </div>
                <div className="additional-services__collaborator-copy">
                  <h3>{t("additionalServices.collaborators.first.name")}</h3>
                  <p className="additional-services__collaborator-category">{t("additionalServices.collaborators.first.category")}</p>
                  <p>{t("additionalServices.collaborators.first.description")}</p>
                  <Link to="/booking">{t("additionalServices.collaborators.inquire")}</Link>
                </div>
              </article>
              <article className="additional-services__collaborator-card">
                <div className="additional-services__collaborator-image" aria-label={t("additionalServices.collaborators.imagePlaceholder")} role="img">
                  <span>{t("additionalServices.collaborators.imagePlaceholder")}</span>
                </div>
                <div className="additional-services__collaborator-copy">
                  <h3>{t("additionalServices.collaborators.second.name")}</h3>
                  <p className="additional-services__collaborator-category">{t("additionalServices.collaborators.second.category")}</p>
                  <p>{t("additionalServices.collaborators.second.description")}</p>
                  <Link to="/booking">{t("additionalServices.collaborators.inquire")}</Link>
                </div>
              </article>
              <article className="additional-services__collaborator-card">
                <div className="additional-services__collaborator-image" aria-label={t("additionalServices.collaborators.imagePlaceholder")} role="img">
                  <span>{t("additionalServices.collaborators.imagePlaceholder")}</span>
                </div>
                <div className="additional-services__collaborator-copy">
                  <h3>{t("additionalServices.collaborators.third.name")}</h3>
                  <p className="additional-services__collaborator-category">{t("additionalServices.collaborators.third.category")}</p>
                  <p>{t("additionalServices.collaborators.third.description")}</p>
                  <Link to="/booking">{t("additionalServices.collaborators.inquire")}</Link>
                </div>
              </article>
            </div>
          </section> */}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AdditionalServices;
