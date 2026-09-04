import "./ServicesPreview.css";
import bartenderServingImg from "../../assets/images/bartender-serving-drink.jpg";
import bartenderCorporateImg from "../../assets/images/bartender-social-event.jpg";
import cocktailOmakaseIntroImg from "../../assets/images/green-drinks.jpg";
import packagesFaqsPdf from "../../assets/syb-packages-faqs.pdf";
import { useTranslation } from "react-i18next";

function ServicesPreview() {
  const { t } = useTranslation();

  return (
    <section id="services-intro" className="services-preview__section">
      <div className="services-preview__bg-container">
        <div className="services-preview__services-intro-heading">
          <h2 className="services-preview__services-intro-text">
            {t("services.title")}
          </h2>
        </div>

        {/* start of services intro card 1 */}
        <div className="services-preview__services-intro-card">
          <div className="services-preview__services-card-container">
            <div className="services-preview__card-img-container">
              <img
                className="services-preview__card-img bartender-serving"
                src={bartenderServingImg}
                alt={t("services.private.imageAlt")}
              />
            </div>
            <div className="services-preview__card-description-container card-1-container">
              <div className="services-preview__card-description">
                <h3 className="services-preview__card-description-title">
                  {t("services.private.title")}
                </h3>
                <div className="services-preview-card__divider"></div>
                <h4 className="services-preview__card-description-sub-title">
                  {t("services.private.subtitle")}
                </h4>
                <p className="services-preview__card-description-body-text">
                  {t("services.private.description")}
                </p>
                <a
                  href={packagesFaqsPdf}
                  className="services-preview__booking-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("common.bookNow")}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* end of services intro card 1 */}

        {/* start of services intro card 2 */}
        <div className="services-preview__services-intro-card services-preview__services-intro-card--corporate">
          <div className="services-preview__services-card-container">
            <div className="services-preview__card-description-container card-2-container">
              <div className="services-preview__card-description">
                <h3 className="services-preview__card-description-title">
                  {t("services.corporate.title")}
                </h3>
                <div className="services-preview-card__divider"></div>
                <h4 className="services-preview__card-description-sub-title">
                  {t("services.corporate.subtitleLead")}
                  <span className="corporate-events-card__line-break">
                    {t("services.corporate.subtitleEnd")}
                  </span>
                </h4>
                <p className="services-preview__card-description-body-text">
                  {t("services.corporate.description")}
                </p>
                <a
                  href={packagesFaqsPdf}
                  className="services-preview__booking-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("common.bookNow")}
                </a>
              </div>
            </div>
            <div className="services-preview__card-img-container">
              <img
                className="services-preview__card-img bartender-corporate"
                src={bartenderCorporateImg}
                alt={t("services.corporate.imageAlt")}
              />
            </div>
          </div>
        </div>
        {/* end of services intro card 2 */}

        {/* start of services intro card 3 */}
        <div className="services-preview__services-intro-card">
          <div className="services-preview__services-card-container">
            <div className="services-preview__card-img-container">
              <img
                className="services-preview__card-img green-cocktails"
                src={cocktailOmakaseIntroImg}
                alt={t("services.omakase.imageAlt")}
              />
            </div>
            <div className="services-preview__card-description-container card-3-container">
              <div className="services-preview__card-description">
                <h3 className="services-preview__card-description-title">
                  {t("services.omakase.title")}
                </h3>
                <div className="services-preview-card__divider"></div>
                <h4 className="services-preview__card-description-sub-title">
                  {t("services.omakase.subtitle")}
                </h4>
                <p className="services-preview__card-description-body-text">
                  {t("services.omakase.description")}{" "}
                  <strong>{t("services.omakase.comingSoon")}</strong>
                </p>

                {/* temporarily remove link to button for omakase */}
                {/* <a
                  href="https://www.canva.com/design/DAG2FH0FYRo/B-YpeGK0dSOlFRMO3k2K9A/edit"
                  className="services-preview__booking-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("common.bookNow")}
                </a> */}
              </div>
            </div>
          </div>
        </div>
        {/* end of services intro card 3 */}
      </div>
    </section>
  );
}

export default ServicesPreview;
