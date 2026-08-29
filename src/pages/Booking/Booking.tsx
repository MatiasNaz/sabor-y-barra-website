import "./Booking.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import bookingImage from "../../assets/images/bookingImage.png";
import {
  CalendarDays,
  MapPin,
  Clock3,
  UsersRound,
  Shirt,
  Martini,
  Palette,
  BriefcaseBusiness,
} from "lucide-react";

function Booking() {
  return (
    <>
      <Header showBookingButton={false} />
      <main>
        <section id="booking" className="booking-section">
          <div className="booking-section__container">
            {/* Booking Intro */}
            <div className="booking__heading-container">
              <h4 className="booking__eyebrow">book your event</h4>

              <h1 className="booking__header">
                let's create something unforgettable.
              </h1>

              <p className="booking__supportive-text">
                Fill out the form below and let us craft the perfect <br />
                bar experience for you and your guests.
              </p>
            </div>

            {/* Booking Card */}
            <div className="booking__form-container">
              {/* start of left image */}
              <div className="booking__visual">
                <img
                  className="booking__visual-image"
                  src={bookingImage}
                  alt="Craft cocktail prepared by Sabor Y Barra"
                />

                <div className="booking__visual-content">
                  <div className="booking__step">
                    <span>01</span>
                    <span className="booking__step-line"></span>
                  </div>

                  <h2>Tell Us About Your Event</h2>

                  <span className="booking__visual-line"></span>

                  <p>
                    The details make the experience. <br />
                    Tell us what you&apos;re envisioning for <br />
                    your celebration.
                  </p>
                </div>
              </div>
              {/* end of left image */}

              {/* start of right form */}
              <form className="booking__form">
                <p className="form-note">
                  All fields are required. <span className="asterisk"> *</span>
                </p>
                <label>
                  <CalendarDays size={21} strokeWidth={1.7} />
                  <span>1. Event date?</span>
                  <input type="date" required />
                </label>

                <label>
                  <MapPin size={21} strokeWidth={1.7} />
                  <span>2. Event location?</span>
                  <input
                    type="text"
                    required
                    placeholder="Street address, city, state, zip code"
                  />
                </label>

                <label>
                  <Clock3 size={21} strokeWidth={1.7} />

                  <span>3. Event time?</span>

                  <div className="booking__field-input">
                    <select name="eventTime" defaultValue="" required>
                      <option value="" disabled>
                        Select bar service start time
                      </option>

                      <option value="10:00">10:00 AM</option>
                      <option value="10:30">10:30 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="11:30">11:30 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="14:30">2:30 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="15:30">3:30 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="16:30">4:30 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="21:30">9:30 PM</option>
                      <option value="22:00">10:00 PM</option>
                    </select>
                    <small>Setup begins 90 minutes prior.</small>
                  </div>
                </label>

                <label>
                  <UsersRound size={21} strokeWidth={1.7} />
                  <span>4. Anticipated headcount?</span>
                  <input
                    type="number"
                    min="0"
                    max="400"
                    step="1"
                    required
                    placeholder="Enter approx. number of guests (1-400)"
                  />
                </label>

                <label>
                  <Shirt size={21} strokeWidth={1.7} />
                  <span>5. Dress Code</span>
                  <select defaultValue="" required>
                    <option value="" disabled>
                      Select dress code
                    </option>
                    <option value="casual">Casual</option>
                    <option value="cocktail">Cocktail Attire</option>
                    <option value="semi-formal">Semi-Formal</option>
                    <option value="formal">Formal</option>
                    <option value="black-tie">Black Tie</option>
                    <option value="no-preference">No Preference</option>
                  </select>
                </label>

                <label>
                  <Martini size={21} strokeWidth={1.7} />
                  <span>6. Drink Preferences</span>
                  <textarea
                    required
                    placeholder="Share any preferences, spirits, or must-haves..."
                  />
                </label>

                <label>
                  <Palette size={21} strokeWidth={1.7} />
                  <span>7. Menu Design</span>
                  <textarea
                    required
                    placeholder="Share your theme, colors, or design ideas..."
                  />
                </label>

                <label>
                  <BriefcaseBusiness size={21} strokeWidth={1.7} />
                  <span>8. Package Selection</span>
                  <select defaultValue="" required>
                    <option value="" disabled>
                      Select a package
                    </option>

                    <option value="bartending">Bartending Service</option>

                    <option value="bartending-catering">
                      Bartending + Catering
                    </option>

                    <option value="bartending-dj">Bartending + DJ</option>

                    <option value="bartending-dj-content">
                      Bartending + DJ + Photography / Content Team
                    </option>

                    <option value="complete">
                      Complete Package — All Services Included
                    </option>
                  </select>
                </label>

                <button type="submit" className="booking__submit">
                  SUBMIT EVENT DETAILS
                  <span>→</span>
                </button>

                <p className="booking__privacy">
                  Your information is private and will only be used to respond
                  to your inquiry.
                </p>
              </form>
              {/* end of right form */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Booking;
