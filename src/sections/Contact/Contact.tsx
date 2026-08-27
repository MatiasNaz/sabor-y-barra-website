import "./Contact.css";

function Contact() {
  return (
    <section
      id="contact"
      className="contact__section"
      aria-labelledby="contact-title"
    >
      <div className="contact__container">
        <p className="contact__eyebrow">Contact Us</p>

        <h2 id="contact-title" className="contact__title">
          Let&apos;s raise the bar for your next event.
        </h2>

        <p className="contact__description">
          Tell us what you&apos;re celebrating, where you&apos;re gathering, and
          how you want the experience to feel. We&apos;ll help shape a bar
          service made for the occasion.
        </p>

        <a className="contact__booking-cta" href="/booking">
          Book Your Event
        </a>

        <address className="contact__details">
          <div className="contact__detail">
            <span className="contact__detail-label">Email</span>
            <a href="mailto:saborybarraprny@gmail.com">
              saborybarraprny@gmail.com
            </a>
          </div>
          <div className="contact__detail">
            <span className="contact__detail-label">Phone</span>
            <a href="tel:+19172244078">(917) 224-4078</a>
          </div>
        </address>
      </div>
    </section>
  );
}

export default Contact;
