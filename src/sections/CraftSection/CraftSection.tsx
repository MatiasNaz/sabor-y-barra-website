import "./CraftSection.css";
import citrusCordialImage from "../../assets/images/citrus-cordial-pic.png";
import drinkPrepImage from "../../assets/images/yellow-drink-prep.jpg";
import mixingGlassImage from "../../assets/images/mixing-glass-pour.png";

function CraftSection() {
  return (
    <section className="craft-section">
      <div className="craft-section__bg">
        {/* start of photograph collage */}
        <div className="collage">
          {/* start of left photo frame */}
          <figure className="photo-frame photo-frame--left">
            <img
              className="photo-left"
              src={citrusCordialImage}
              alt="image of citru cordial bottle with ingredients"
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
              alt="image of citru cordial bottle with ingredients"
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
              alt="image of citru cordial bottle with ingredients"
            />
            <div className="photo-label-container">
              <div className="photo-label">barra</div>
            </div>
          </figure>
          {/* end of right photo frame */}
        </div>
        {/* end of photograph collage */}

        <div className="craft__description">
          <h3>our craft</h3>
          <h2>crafted from the first pour</h2>
          <p>
            From house-made syrups and fresh ingredients to thoughtfully
            <span className="craft__description--line-break">
              selected spirits, every cocktail is crafted with depth, balance,
              and intention.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default CraftSection;
