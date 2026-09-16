import "./CraftSection.css";
import servingDrinkImg from "../../assets/images/bartender-serving-drink.jpg";
import pinkShirtImg from "../../assets/images/lou-pink-shirt.jpg";
import rougeSoleilBarImg from "../../assets/images/drinks/rouge-soleil-bar-img.jpg";
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
              src={servingDrinkImg}
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
              src={rougeSoleilBarImg}
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
              src={pinkShirtImg}
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
            {t("craft.descriptionLead")}{" "}
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
