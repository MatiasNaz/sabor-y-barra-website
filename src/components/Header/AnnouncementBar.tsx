import "./Header.css";

// create and return announcement bar
function AnnouncementBar() {
  return (
    <section className="announcement-bar__container">
      <div className="announcement-bar__track">
        {/* start of first group */}
        <div className="announcement-bar__track--group">
          <span className="announcement-bar__text">
            Private & Corporate Events
          </span>
          <span className="announcement-bar__text">
            Elevated Bar Experiences
          </span>
          <span className="announcement-bar__text">
            Local & Destination Events
          </span>
        </div>
        {/* end of first group */}

        {/* start of second group */}
        <div className="announcement-bar__track--group">
          <span className="announcement-bar__text">
            Private & Corporate Events
          </span>
          <span className="announcement-bar__text">
            Elevated Bar Experiences
          </span>
          <span className="announcement-bar__text">
            Local & Destination Events
          </span>
        </div>
        {/* end of second group */}

        {/* start of third group */}
        <div className="announcement-bar__track--group">
          <span className="announcement-bar__text">
            Private & Corporate Events
          </span>
          <span className="announcement-bar__text">
            Elevated Bar Experiences
          </span>
          <span className="announcement-bar__text">
            Local & Destination Events
          </span>
        </div>
        {/* end of third group */}

        {/* start of fourth group */}
        <div className="announcement-bar__track--group">
          <span className="announcement-bar__text">
            Private & Corporate Events
          </span>
          <span className="announcement-bar__text">
            Elevated Bar Experiences
          </span>
          <span className="announcement-bar__text">
            Local & Destination Events
          </span>
        </div>
        {/* end of fourth group */}
      </div>
    </section>
  );
}

export default AnnouncementBar;
