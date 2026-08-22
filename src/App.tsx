import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import CraftSection from "./sections/CraftSection/CraftSection";
import ServicesPreview from "./sections/Services/ServicesPreview";
import Testimonials from "./sections/Reviews/Testimonials";

// create App function for UI structure
function App() {
  return (
    <>
      <Header />
      <Hero />
      <ServicesPreview />
      <CraftSection />
      <Testimonials />
    </>
  );
}

export default App;
