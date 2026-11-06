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
  return (
    <>
      <Header />
      <VideoModal showVideoModal={showVideoModal} onCloseModal={onCloseModal} />
      <Hero />
      <ServicesPreview />
      <CraftSection />
      <Testimonials />
      <Contact />
      <Footer />
      {/* <VideoModal /> */}
    </>
  );
}

export default Home;
