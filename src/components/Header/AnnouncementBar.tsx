import "./Header.css";
import { useTranslation } from "react-i18next";

// create and return announcement bar
function AnnouncementBar() {
  const { t } = useTranslation();

  const announcements = [
    t("announcement.privateCorporate"),
    t("announcement.elevatedExperiences"),
    t("announcement.localDestination"),
  ];

  return (
    <section className="announcement-bar__container">
      <div className="announcement-bar__track">
        {Array.from({ length: 4 }, (_, groupIndex) => (
          <div
            className="announcement-bar__track--group"
            aria-hidden={groupIndex > 0}
            key={groupIndex}
          >
            {announcements.map((announcement) => (
              <span className="announcement-bar__text" key={announcement}>
                {announcement}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default AnnouncementBar;
