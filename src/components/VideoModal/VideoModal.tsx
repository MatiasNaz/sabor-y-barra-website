import "./VideoModal.css";
import omakaseVideo from "../../assets/SYB-Omakase-Nov.mp4";
import omakasePoster from "../../assets/images/syb-omakase-card-background.png";

/*
Video modal:
1. visitor loads on full load homepage -> video modal appears
2. close button should be visible on right top edge of card
3. visitor clicks close button, video modal disappears
4. modal stays closed while visitor remains on homepage visit
5. visitor reloads full homepage, modal appears again
*/

type VideoModalProps = {
  showVideoModal: boolean;
  onCloseModal: () => void;
};

function VideoModal({ showVideoModal, onCloseModal }: VideoModalProps) {
  return (
    showVideoModal && (
      <section id="video-modal-card">
        {/* Start: Video modal container */}
        <div className="video-modal__container">
          {/* video container */}
          <div className="video-modal__video-container">
            <video
              className="video-modal__video"
              src={omakaseVideo}
              poster={omakasePoster}
              controls
              playsInline
              preload="metadata"
            />
          </div>

          <div className="video-modal__details">
            <button className="video-modal__close" onClick={onCloseModal}>
              ×
            </button>
            <h3 className="video-modal__heading">
              Sabor y Barra Presents — <br />
              Cocktail Omakase
            </h3>

            <div className="video-modal__content">
              <p className="video-modal__eyebrow">
                A seasonal cocktail tasting, paired with good food and good
                music,
              </p>
              <p className="video-modal__eyebrow eyebrow--subtext">
                <strong>
                  <i>la esencia del Sabor — November 7th</i>
                </strong>
              </p>
            </div>

            <div className="additional-services__omakase-cta-container">
              <a
                className="additional-services__omakase-cta"
                href="/additional-services#omakase-title"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        {/* End: Video modal container */}
      </section>
    )
  );
}

export default VideoModal;
