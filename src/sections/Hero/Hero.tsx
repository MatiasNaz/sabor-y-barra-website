import "./Hero.css";

function Hero() {
  return (
    <div className="hero__bg-container">
      <div className="inner-bg-container">
        <div className="hero__welcome-container">
          <div className="hero__title-1">welcome to</div>
          <div className="hero__title-2">sabor y barra</div>
          <div className="hero__title-desc">
            elevated bar experiences for every occasion
          </div>
          <div className="hero__get-started-container">
            <a className="hero__get-started-btn" href="/">
              get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
