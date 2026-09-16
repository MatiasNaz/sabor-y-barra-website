import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Services from "./sections/Services/ServicesPage";
import AdditionalServices from "./sections/Services/AdditionalServices";
import Booking from "./pages/Booking/Booking";
import About from "./pages/About/About";
import SignatureMenu from "./sections/SignatureMenu/SignatureMenu";

// create App function for UI structure
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/additional-services" element={<AdditionalServices />} />
      <Route path="/signature-menu" element={<SignatureMenu />} />
      <Route path="/about" element={<About />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
}

export default App;
