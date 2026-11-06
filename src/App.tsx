import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Services from "./sections/Services/ServicesPage";
import AdditionalServices from "./sections/Services/AdditionalServices";
import Booking from "./pages/Booking/Booking";
import About from "./pages/About/About";
import SignatureMenu from "./sections/SignatureMenu/SignatureMenu";
import { useState } from "react";

// create App function for UI structure
function App() {
  // track state to show home video modal
  const [showVideoModal, setVideoModal] = useState(
    () => window.location.pathname === "/",
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            showVideoModal={showVideoModal}
            onCloseModal={() => setVideoModal(false)}
          />
        }
      />
      <Route path="/services" element={<Services />} />
      <Route path="/additional-services" element={<AdditionalServices />} />
      <Route path="/signature-menu" element={<SignatureMenu />} />
      <Route path="/about" element={<About />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
}

export default App;
