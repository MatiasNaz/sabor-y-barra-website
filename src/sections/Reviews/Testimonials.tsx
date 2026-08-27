import { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "- Tara",
    message:
      "I can't say enough great things about Lou! We recently hired him for a holiday party and our guests were blown away by him. His drinks were incredible (better than any private bartender we've experienced), he was charming, incredibly respectful, and so easy to work with. He made our bar feel like you were walking into a chic NYC bar with the most impressive drink garnishes (including some that were hand torched!). Our guests were raving about him all night and for days after the event. He was also very communicative leading up to our event and helped us curate a drink menu with his impressive cocktail suggestions. We would absolutely work with Lou again!",
  },
  {
    name: "- Sasha",
    message:
      "Hired Sabor y Barra for a corporate party in Philly. Lou was fantastic to work with, extremely professional, and outstanding customer service. Our clients and employees were impressed by the extensive menu selections and quality drinks. Lou went the extra mile and added an elevated flavor aesthetic. Looking forward to working with him again on future events.",
  },
  {
    name: "- João",
    message:
      "We hired Louis for my sister's engagement party and it was simply perfect! He arrived well in advance, super organized, brought everything we agreed upon (and even some surprises that elevated the party). The service was impeccable: attentive, smiling, quick without being intrusive, and with a contagious energy that cheered everyone up. The drinks were always perfectly chilled — the signature cocktails he created especially for the couple were incredible and were the talk of the night! Several people asked for his business card afterwards.",
  },
  {
    name: "- Stephanie",
    message:
      "We found Lou through the Bark website, and from our very first interaction, we knew we were in great hands. He was professional, personable, and incredibly flexible when it came to drink selections. He really took the time to understand the vibe we were going for and, leading up to our event, helped us thoughtfully curate a cocktail menu that perfectly complemented our Valentine’s Day party theme. His creativity and attention to detail truly set him apart.",
  },
  {
    name: "- Cena",
    message:
      "I hired Lou to bartend my disco birthday party and let me just say, he was absolutely amazing! As a former hospitality industry professional, Lou is the best as they come! The menu planning process was very collaborative and he was accommodating to our guest needs. He even made new drinks on the fly, which my guests all enjoyed. I’m looking forward to hiring him for another event in the near future!",
  },
];

function Testimonials() {
  // initialize useState index counter at 0
  const [currentIndex, setCurrentIndex] = useState(0);

  // create derived value and store current index - start from 0
  const currentTestimonial = testimonials[currentIndex];

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
          <h2>what our clients are saying</h2>
          <div className="divider"></div>
        </div>
        {/* end of carousel title */}

        {/* start of carousel testimonials */}
        <div className="testimonials__carousel">
          <blockquote className="testimonials__message">
            <p>{currentTestimonial.message}</p>
            <cite>{currentTestimonial.name}</cite>
          </blockquote>
          {/* start of carousel buttons */}
          <div className="testimonials__button-container">
            <button
              className="testimonials__button"
              type="button"
              onClick={() => dotHandler(0)}
            ></button>
            <button
              className="testimonials__button"
              type="button"
              onClick={() => dotHandler(1)}
            ></button>
            <button
              className="testimonials__button"
              type="button"
              onClick={() => dotHandler(2)}
            ></button>
            <button
              className="testimonials__button"
              type="button"
              onClick={() => dotHandler(3)}
            ></button>
            <button
              className="testimonials__button"
              type="button"
              onClick={() => dotHandler(4)}
            ></button>
          </div>
          {/* end of carousel buttons */}
        </div>
        {/* end of carousel testimonials */}
      </div>
    </section>
  );
}
export default Testimonials;
