import Header from "../../components/Header/Header";
import Hero from "../../sections/Hero/Hero";
import CraftSection from "../../sections/CraftSection/CraftSection";
import ServicesPreview from "../../sections/Services/ServicesPreview";
import Testimonials from "../../sections/Reviews/Testimonials";
import Contact from "../../sections/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import VideoModal from "../../components/VideoModal/VideoModal";

type HomeProps = {
  showVideoModal: boolean;
  onCloseModal: () => void;
};

// create App function for UI structure
function Home({ showVideoModal, onCloseModal }: HomeProps) {
  /* 
  feature flag for video Modal:
  false = no video modal visible
  true = video modal IS visible on site
  */
  const videoModalEnabled = false;

  return (
    <>
      <Header />
      {/* check if both conditions true for modal to render */}
      {videoModalEnabled && showVideoModal && (
        <VideoModal
          showVideoModal={showVideoModal}
          onCloseModal={onCloseModal}
        />
      )}

      <Hero />
      <ServicesPreview />
      <CraftSection />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;

/*

Note: 
- Best practice to change state of feature to true/false for visibility instead of
commenting or deleting code.

- JSX braces switch into JavaScript; whatever is inside determines the value’s type.
*/
