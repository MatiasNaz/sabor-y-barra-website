import "./ServicesPreview.css";
import bartenderServingImg from "../../assets/images/bartender-serving-drink.jpg";
import bartenderCorporateImg from "../../assets/images/bartender-social-event.jpg";
import cocktailOmakaseIntroImg from "../../assets/images/green-drinks.jpg";

function ServicesPreview() {
  return (
    <section id="services-intro" className="services-preview__section">
      <div className="services-preview__bg-container">
        <div className="services-preview__services-intro-heading">
          <h2 className="services-preview__services-intro-text">
            our services
          </h2>
        </div>

        {/* start of services intro card 1 */}
        <div className="services-preview__services-intro-card">
          <div className="services-preview__services-card-container">
            <div className="services-preview__card-img-container">
              <img
                className="services-preview__card-img"
                src={bartenderServingImg}
                alt="bartender serving drink"
              />
            </div>
            <div className="services-preview__card-description-container card-1-container">
              <div className="services-preview__card-description">
                <h3 className="services-preview__card-description-title">
                  private events
                </h3>
                <div className="services-preview-card__divider"></div>
                <h4 className="services-preview__card-description-sub-title">
                  Elevated cocktails crafted for your occasion. Unforgettable
                  gatherings.
                </h4>
                <p className="services-preview__card-description-body-text">
                  Bring the bar experience to your celebration with handcrafted
                  cocktails, fresh ingredients, and personalized service
                  designed around your event.
                </p>
                <a className="services-preview__booking-cta" href="/booking">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* end of services intro card 1 */}

        {/* start of services intro card 2 */}
        <div className="services-preview__services-intro-card">
          <div className="services-preview__services-card-container">
            <div className="services-preview__card-description-container card-2-container">
              <div className="services-preview__card-description">
                <h3 className="services-preview__card-description-title">
                  corporate events
                </h3>
                <div className="services-preview-card__divider"></div>
                <h4 className="services-preview__card-description-sub-title">
                  Impress your guests. Elevate your brand.
                  <span className="corporate-events-card__line-break">
                    We'll handle the bar.
                  </span>
                </h4>
                <p className="services-preview__card-description-body-text">
                  From client receptions to company celebrations, deliver an
                  experience worth remembering with polished bar service and
                  handcrafted cocktails tailored to your event.
                </p>
                <a className="services-preview__booking-cta" href="/booking">
                  Book Now
                </a>
              </div>
            </div>
            <div className="services-preview__card-img-container">
              <img
                className="services-preview__card-img"
                src={bartenderCorporateImg}
                alt="bartender talking with event guests"
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
                className="services-preview__card-img"
                src={cocktailOmakaseIntroImg}
                alt="bartender serving drink"
              />
            </div>
            <div className="services-preview__card-description-container card-3-container">
              <div className="services-preview__card-description">
                <h3 className="services-preview__card-description-title">
                  cocktail omakase
                </h3>
                <div className="services-preview-card__divider"></div>
                <h4 className="services-preview__card-description-sub-title">
                  Your taste. Our creativity. A cocktail experience unlike any
                  other.
                </h4>
                <p className="services-preview__card-description-body-text">
                  A guided cocktail experience shaped around your preferences,
                  where each pour is thoughtfully crafted to surprise, delight,
                  and tell a story. <strong>Coming soon.</strong>
                </p>
                <a className="services-preview__booking-cta" href="/booking">
                  Book Now
                </a>
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
