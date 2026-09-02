import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import founderImage from "../../assets/images/bartender-shaking-drink.jpg";
import "./About.css";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <Header />

      <main className="about">
        <section className="about__story" aria-labelledby="about-story-title">
          <div className="about__container about__story-layout">
            <div className="about__story-copy">
              <p className="about__eyebrow">{t("about.story.eyebrow")}</p>
              <h1 id="about-story-title" className="about__section-title">
                {t("about.story.title")}
              </h1>
              <p>{t("about.story.intro")}</p>
              <p className="about__placeholder-copy">
                {t("about.story.placeholderCopy")}
              </p>
            </div>

            <div className="about__story-image">
              <img
                src={founderImage}
                alt={t("about.story.imageAlt")}
              />
            </div>
          </div>
        </section>

        <section
          className="about__philosophy"
          aria-labelledby="about-philosophy-title"
        >
          <div className="about__container">
            <div className="about__philosophy-heading">
              <p className="about__eyebrow about__eyebrow--light">
                {t("about.philosophy.eyebrow")}
              </p>
              <h2 id="about-philosophy-title" className="about__section-title">
                {t("about.philosophy.title")}
              </h2>
            </div>

            <div className="about__values">
              <article className="about__value">
                <h3>{t("about.philosophy.welcome.title")}</h3>
                <p>{t("about.philosophy.welcome.description")}</p>
              </article>
              <article className="about__value">
                <h3>{t("about.philosophy.details.title")}</h3>
                <p>{t("about.philosophy.details.description")}</p>
              </article>
              <article className="about__value">
                <h3>{t("about.philosophy.connection.title")}</h3>
                <p>{t("about.philosophy.connection.description")}</p>
              </article>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default About;
