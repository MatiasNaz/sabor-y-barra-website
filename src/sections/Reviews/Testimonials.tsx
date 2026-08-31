import { useState } from "react";
import "./Testimonials.css";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import barkLogo from "../../assets/images/barkLogo.png";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    name: "- Tara",
    messageKey: "testimonials.messages.tara",
  },
  {
    name: "- Sasha",
    messageKey: "testimonials.messages.sasha",
  },
  {
    name: "- João",
    messageKey: "testimonials.messages.joao",
  },
  {
    name: "- Stephanie",
    messageKey: "testimonials.messages.stephanie",
  },
  {
    name: "- Cena",
    messageKey: "testimonials.messages.cena",
  },
];

function Testimonials() {
  const { t } = useTranslation();
  // initialize useState index counter at 0
  const [currentIndex, setCurrentIndex] = useState(0);

  // manually update index handling for automatic sequencing
  // function handleNext() {
  //   // if the current position is last, reset to index 0, the first item in the list
  //   if (currentIndex === testimonials.length - 1) {
  //     setCurrentIndex(0);
  //   }
  //   // otherwise, move from the current index to the following one
  //   else {
  //     setCurrentIndex(currentIndex + 1);
  //   }
  // }

  /*
  
    When a testimonial dot is clicked:

    1. determine which testimonial index that dot represents
    2. receive that index
    3. update currentIndex to that exact index
  
  */

  // create function to handle dot button functionality and select type of parameter
  function dotHandler(indexSelected: number) {
    // set the current index to the one selected by user
    setCurrentIndex(indexSelected);
  }

  return (
    <section id="reviews" className="testimonials__section">
      <div className="testimonials__container">
        {/* start of carousel title */}
        <div className="testimonials__carousel-title">
          <div className="divider"></div>
          <h2>{t("testimonials.title")}</h2>
          <div className="divider"></div>
        </div>
        {/* end of carousel title */}

        {/* start of carousel testimonials */}
        <div className="testimonials__carousel">
          <div className="testimonials__message-viewport">
            {testimonials.map((testimonial, index) => (
              <blockquote
                className={`testimonials__message ${
                  index === currentIndex ? "testimonials__message--active" : ""
                }`}
                aria-hidden={index !== currentIndex}
                key={`${testimonial.name}-${index}`}
              >
                <p>{t(testimonial.messageKey)}</p>
                <cite>{testimonial.name}</cite>
              </blockquote>
            ))}
          </div>
          {/* start of carousel buttons */}
          <div className="testimonials__button-container">
            <button
              className="testimonials__button"
              type="button"
              aria-label={t("testimonials.dotLabel", { number: 1 })}
              aria-pressed={currentIndex === 0}
              onClick={() => dotHandler(0)}
            ></button>
            <button
              className="testimonials__button"
              type="button"
              aria-label={t("testimonials.dotLabel", { number: 2 })}
              aria-pressed={currentIndex === 1}
              onClick={() => dotHandler(1)}
            ></button>
            <button
              className="testimonials__button"
              type="button"
              aria-label={t("testimonials.dotLabel", { number: 3 })}
              aria-pressed={currentIndex === 2}
              onClick={() => dotHandler(2)}
            ></button>
            <button
              className="testimonials__button"
              type="button"
              aria-label={t("testimonials.dotLabel", { number: 4 })}
              aria-pressed={currentIndex === 3}
              onClick={() => dotHandler(3)}
            ></button>
            <button
              className="testimonials__button"
              type="button"
              aria-label={t("testimonials.dotLabel", { number: 5 })}
              aria-pressed={currentIndex === 4}
              onClick={() => dotHandler(4)}
            ></button>
          </div>
          {/* end of carousel buttons */}

          {/* start of additional reviews */}
          <div className="testimonials__additional-reviews-container">
            <div className="testimonials__additional-reviews-header-container">
              <h4 className="testimonials__additional-reviews-header">
                {t("testimonials.additionalReviews")}
              </h4>
            </div>

            <div className="testimonials__additional-reviews">
              <div className="testimonials__additional-reviews-btns">
                <a
                  href="https://www.bark.com/en/us/b/sabor-y-barra/ldBbL9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("testimonials.barkLabel")}
                >
                  {/* create CSS mask for bark logo styling as a workaround to png file */}
                  <span
                    className="testimonials__bark-logo"
                    style={{
                      WebkitMaskImage: `url(${barkLogo})`,
                      maskImage: `url(${barkLogo})`,
                    }}
                  />
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("testimonials.googleLabel")}
                  href="https://www.google.com/search?sca_esv=74ed7c7b1c9c0609&hl=en&authuser=0&sxsrf=APpeQnv0XJGyYh-BwYEXhoU0P10YTCIjkw:1787587472158&kgmid=/g/11xzpplwmp&q=Sabor+y+Barra&shem=dlvs1,epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=e51121bdfcef82d5"
                >
                  <FontAwesomeIcon
                    className="testimonials__google-logo"
                    icon={faGoogle}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* end of additional reviews */}
        </div>
        {/* end of carousel testimonials */}
      </div>
    </section>
  );
}
export default Testimonials;
