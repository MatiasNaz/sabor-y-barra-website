import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import CraftSection from "./sections/CraftSection/CraftSection";
import ServicesPreview from "./sections/Services/ServicesPreview";
import Testimonials from "./sections/Reviews/Testimonials";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";

// create App function for UI structure
function App() {
  return (
    <>
      <Header />
      <Hero />
      <ServicesPreview />
      <CraftSection />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
