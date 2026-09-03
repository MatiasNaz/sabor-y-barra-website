import "./Booking.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import bookingImage from "../../assets/images/drink-prep.jpg";
import {
  CalendarDays,
  MapPin,
  Clock3,
  UsersRound,
  Shirt,
  Martini,
  Palette,
  BriefcaseBusiness,
  CircleCheck,
  UserRound,
  Phone,
  Mail,
} from "lucide-react";
import { useEffect, useRef, useState, type SubmitEvent } from "react";
import { useTranslation } from "react-i18next";
import { InlineWidget } from "react-calendly";

const CALENDLY_URL =
  "https://calendly.com/saborybarra/30min?https://calendly.com/saborybarra/30min=1&month=2026-08";

const eventTimes = [
  { value: "10:00", time: "10:00", period: "am" },
  { value: "10:30", time: "10:30", period: "am" },
  { value: "11:00", time: "11:00", period: "am" },
  { value: "11:30", time: "11:30", period: "am" },
  { value: "12:00", time: "12:00", period: "pm" },
  { value: "12:30", time: "12:30", period: "pm" },
  { value: "13:00", time: "1:00", period: "pm" },
  { value: "13:30", time: "1:30", period: "pm" },
  { value: "14:00", time: "2:00", period: "pm" },
  { value: "14:30", time: "2:30", period: "pm" },
  { value: "15:00", time: "3:00", period: "pm" },
  { value: "15:30", time: "3:30", period: "pm" },
  { value: "16:00", time: "4:00", period: "pm" },
  { value: "16:30", time: "4:30", period: "pm" },
  { value: "17:00", time: "5:00", period: "pm" },
  { value: "17:30", time: "5:30", period: "pm" },
  { value: "18:00", time: "6:00", period: "pm" },
  { value: "18:30", time: "6:30", period: "pm" },
  { value: "19:00", time: "7:00", period: "pm" },
  { value: "19:30", time: "7:30", period: "pm" },
  { value: "20:00", time: "8:00", period: "pm" },
  { value: "20:30", time: "8:30", period: "pm" },
  { value: "21:00", time: "9:00", period: "pm" },
  { value: "21:30", time: "9:30", period: "pm" },
  { value: "22:00", time: "10:00", period: "pm" },
] as const;

function Booking() {
  const { t } = useTranslation();
  // import Web3Forms access key from vite environment variables and store in a local variable
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  // check form submission and update states
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);
  const stepTwoRef = useRef<HTMLDivElement>(null);

  // if user submitted form, scroll into view of second step
  useEffect(() => {
    if (submitted) {
      stepTwoRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [submitted]);

  // create an asynchronous function that prevents default behavior for form submit button
  // specify event form submission type
  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(false);

    /* create a variable formData that creates a new FormData object to grab data inputted 
    from the form that was just submitted
    */
    const formData = new FormData(event.currentTarget);

    // // test print the key-value entries from the formData object
    // console.log(Object.fromEntries(formData));

    // add one more field called access_key containing the Web3Forms accessKey to formData
    formData.append("access_key", accessKey);

    try {
      /* send a POST server request to Web3Forms to process my form's data, wait for a response,
      and then store the response info */
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      // take the response body, and parse it as JSON, store it in result
      const result = await response.json();

      // test and print fetch POST request for form submission
      // console.log(result);

      // if the API response says the submission succeeded, update React state.
      if (result.success) {
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
      <Header showBookingButton={false} />
      <main>
        <section id="booking" className="booking-section">
          <div className="booking-section__container">
            {/* Booking Intro */}
            {!submitted && (
              <div className="booking__heading-container">
                <h4 className="booking__eyebrow">{t("booking.eyebrow")}</h4>

                <h1 className="booking__header">{t("booking.title")}</h1>

                <p className="booking__supportive-text">
                  {t("booking.introLead")} <br />
                  {t("booking.introEnd")}
                </p>
              </div>
            )}

            {/* If step one is incomplete, show the booking form. */}
            {!submitted ? (
              <div className="booking__form-container">
                {/* Booking Card */}
                {/* start of left image */}
                <div className="booking__visual">
                  <img
                    className="booking__visual-image"
                    src={bookingImage}
                    alt={t("booking.imageAlt")}
                  />

                  <div className="booking__visual-content">
                    <div className="booking__step">
                      <span>01</span>
                      <span className="booking__step-line"></span>
                    </div>

                    <h2>{t("booking.panelTitle")}</h2>

                    <span className="booking__visual-line"></span>

                    <p>
                      {t("booking.panelDescriptionLead")} <br />
                      {t("booking.panelDescriptionMiddle")} <br />
                      {t("booking.panelDescriptionEnd")}
                    </p>
                  </div>
                </div>
                {/* end of left image */}

                {/* start of right form */}
                <form className="booking__form" onSubmit={handleSubmit}>
                  <p className="form-note">
                    {t("booking.requiredNote")}{" "}
                    <span className="asterisk">*</span>
                  </p>

                  <label>
                    <UserRound size={21} strokeWidth={1.7} />
                    <span>{t("booking.fields.fullName")}</span>
                    <input
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder={t("booking.fields.fullNamePlaceholder")}
                    />
                  </label>

                  <label>
                    <Phone size={21} strokeWidth={1.7} />
                    <span>{t("booking.fields.phoneNumber")}</span>
                    <input
                      name="phoneNumber"
                      type="tel"
                      autoComplete="tel"
                      inputMode="numeric"
                      pattern="[0-9]+"
                      required
                      placeholder={t("booking.fields.phoneNumberPlaceholder")}
                    />
                  </label>

                  <label>
                    <Mail size={21} strokeWidth={1.7} />
                    <span>{t("booking.fields.email")}</span>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder={t("booking.fields.emailPlaceholder")}
                    />
                  </label>

                  <label>
                    <CalendarDays size={21} strokeWidth={1.7} />
                    <span>{t("booking.fields.eventDate")}</span>
                    <input name="eventDate" type="date" required />
                  </label>

                  <label>
                    <MapPin size={21} strokeWidth={1.7} />
                    <span>{t("booking.fields.eventLocation")}</span>
                    <input
                      name="eventLocation"
                      type="text"
                      required
                      placeholder={t("booking.fields.eventLocationPlaceholder")}
                    />
                  </label>

                  <label>
                    <Clock3 size={21} strokeWidth={1.7} />

                    <span>{t("booking.fields.eventTime")}</span>

                    <div className="booking__field-input">
                      <select name="eventTime" defaultValue="" required>
                        <option value="" disabled>
                          {t("booking.fields.eventTimePlaceholder")}
                        </option>

                        {eventTimes.map(({ value, time, period }) => (
                          <option value={value} key={value}>
                            {t(`booking.time.${period}`, { time })}
                          </option>
                        ))}
                      </select>
                      <small>{t("booking.fields.setupNote")}</small>
                    </div>
                  </label>

                  <label>
                    <UsersRound size={21} strokeWidth={1.7} />
                    <span>{t("booking.fields.guestCount")}</span>
                    <input
                      name="guestCount"
                      type="number"
                      min="0"
                      max="5000"
                      step="1"
                      required
                      placeholder={t("booking.fields.guestCountPlaceholder")}
                    />
                  </label>

                  <label>
                    <Shirt size={21} strokeWidth={1.7} />
                    <span>{t("booking.fields.dressCode")}</span>
                    <select name="dressCode" defaultValue="" required>
                      <option value="" disabled>
                        {t("booking.dressCode.placeholder")}
                      </option>
                      <option value="casual">
                        {t("booking.dressCode.casual")}
                      </option>
                      <option value="cocktail">
                        {t("booking.dressCode.cocktail")}
                      </option>
                      <option value="semi-formal">
                        {t("booking.dressCode.semiFormal")}
                      </option>
                      <option value="formal">
                        {t("booking.dressCode.formal")}
                      </option>
                      <option value="black-tie">
                        {t("booking.dressCode.blackTie")}
                      </option>
                      <option value="no-preference">
                        {t("booking.dressCode.noPreference")}
                      </option>
                    </select>
                  </label>

                  <label>
                    <Martini size={21} strokeWidth={1.7} />
                    <span>{t("booking.fields.drinkPreferences")}</span>
                    <textarea
                      name="drinkPreferences"
                      required
                      placeholder={t(
                        "booking.fields.drinkPreferencesPlaceholder",
                      )}
                    />
                  </label>

                  <label>
                    <Palette size={21} strokeWidth={1.7} />
                    <span>{t("booking.fields.menuDesign")}</span>
                    <textarea
                      name="menuDesign"
                      required
                      placeholder={t("booking.fields.menuDesignPlaceholder")}
                    />
                  </label>

                  <label>
                    <BriefcaseBusiness size={21} strokeWidth={1.7} />
                    <span>{t("booking.fields.packageSelection")}</span>
                    <select name="packageSelection" defaultValue="" required>
                      <option value="" disabled>
                        {t("booking.packages.placeholder")}
                      </option>

                      <option value="el-basico">
                        {t("booking.packages.elBasico")}
                      </option>

                      <option value="el-clasico">
                        {t("booking.packages.elClasico")}
                      </option>

                      <option value="signature-sabor">
                        {t("booking.packages.signatureSabor")}
                      </option>

                      <option value="bartending-dj">
                        {t("booking.packages.bartendingDj")}
                      </option>

                      <option value="bartending-content">
                        {t("booking.packages.bartendingContent")}
                      </option>

                      {/* <option value="bartending-catering">
                        {t("booking.packages.bartendingCatering")}
                      </option>

                      <option value="bartending-dj-content">
                        {t("booking.packages.bartendingDjContent")}
                      </option> */}

                      <option value="complete">
                        {t("booking.packages.complete")}
                      </option>
                    </select>
                  </label>

                  <button
                    type="submit"
                    className="booking__submit"
                    disabled={isSubmitting}
                    aria-describedby={
                      submissionError ? "booking-submission-error" : undefined
                    }
                  >
                    {isSubmitting
                      ? t("booking.submitting")
                      : t("booking.submit")}
                    <span aria-hidden="true">→</span>
                  </button>

                  {submissionError && (
                    <p
                      id="booking-submission-error"
                      className="booking__error"
                      role="alert"
                    >
                      {t("booking.submissionError")}
                    </p>
                  )}

                  <p className="booking__privacy">{t("booking.privacy")}</p>
                </form>
                {/* end of right form */}
              </div>
            ) : (
              // otherwise, run step 2:
              <div ref={stepTwoRef} className="booking__step-two">
                <div
                  className="booking__confirmation"
                  role="status"
                  aria-live="polite"
                >
                  <CircleCheck
                    className="booking__confirmation-icon"
                    size={42}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <p className="booking__confirmation-eyebrow">
                    {t("booking.successEyebrow")}
                  </p>
                  <h2 className="booking__confirmation-title">
                    {t("booking.successTitle")}
                  </h2>
                  <p className="booking__confirmation-text">
                    {t("booking.successDescription")}
                  </p>
                </div>

                <div className="booking__consultation-header">
                  <div className="booking__step">
                    <span>02</span>
                    <span className="booking__step-line"></span>
                  </div>
                  <p className="booking__consultation-eyebrow">
                    {t("booking.consultationEyebrow")}
                  </p>
                  <h2 className="booking__consultation-title">
                    {t("booking.consultationTitle")}
                  </h2>
                  <p className="booking__consultation-description">
                    {t("booking.consultationDescription")}
                  </p>
                </div>

                <div className="booking__calendly-card">
                  <InlineWidget url={CALENDLY_URL} />
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Booking;
