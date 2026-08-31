import "./CraftSection.css";
import citrusCordialImage from "../../assets/images/citrus-cordial-pic.png";
import drinkPrepImage from "../../assets/images/yellow-drink-prep.jpg";
import mixingGlassImage from "../../assets/images/mixing-glass-pour.png";
import { useTranslation } from "react-i18next";

function CraftSection() {
  const { t } = useTranslation();

  return (
    <section className="craft-section">
      <div className="craft-section__container">
        {/* start of photograph collage */}
        <div className="collage">
          {/* start of left photo frame */}
          <figure className="photo-frame photo-frame--left">
            <img
              className="photo-left"
              src={citrusCordialImage}
              alt={t("craft.leftImageAlt")}
            />
            <div className="photo-label-container">
              <div className="photo-label">sabor</div>
            </div>
          </figure>
          {/* start of left photo frame */}

          {/* start of center photo frame */}
          <figure className="photo-frame photo-frame--center">
            <img
              className="photo-center"
              src={drinkPrepImage}
              alt={t("craft.centerImageAlt")}
            />
            <div className="photo-label-container">
              <div className="photo-label">
                <i>y</i>
              </div>
            </div>
          </figure>

          {/* end of center photo frame */}

          {/* start of right photo frame */}
          <figure className="photo-frame photo-frame--right">
            <img
              className="photo-right"
              src={mixingGlassImage}
              alt={t("craft.rightImageAlt")}
            />
            <div className="photo-label-container">
              <div className="photo-label">barra</div>
            </div>
          </figure>
          {/* end of right photo frame */}
        </div>
        {/* end of photograph collage */}

        <div className="craft__description">
          <h3>{t("craft.eyebrow")}</h3>
          <h2>{t("craft.title")}</h2>
          <p>
            {t("craft.descriptionLead")} {" "}
            <span className="craft__description--line-break">
              {t("craft.descriptionEnd")}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default CraftSection;
