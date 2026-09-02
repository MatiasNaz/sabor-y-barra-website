import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";
import About from "./pages/About/About";
import SignatureMenu from "./sections/SignatureMenu/SignatureMenu";

// create App function for UI structure
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/about" element={<About />} />
      <Route path="/signature-menu" element={<SignatureMenu />} />
    </Routes>
  );
}

export default App;
