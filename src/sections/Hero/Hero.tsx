import "./Hero.css";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero__section">
      <div className="hero-bg-container">
        <div className="hero__welcome-container">
          <div className="hero__title-1">{t("hero.welcome")}</div>
          <div className="hero__title-2">sabor y barra</div>
          <div className="hero__title-desc">
            {t("hero.description")}
          </div>
          <div className="hero__get-started-container">
            <a className="hero__get-started-btn" href="#services-intro">
              {t("hero.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
