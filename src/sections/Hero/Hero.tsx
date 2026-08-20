import "./Hero.css";

function Hero() {
  return (
    <section className="hero__section">
      <div className="hero-bg-container">
        <div className="hero__welcome-container">
          <div className="hero__title-1">welcome to</div>
          <div className="hero__title-2">sabor y barra</div>
          <div className="hero__title-desc">
            elevated bar experiences for every occasion
          </div>
          <div className="hero__get-started-container">
            <a className="hero__get-started-btn" href="#services-intro">
              get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
