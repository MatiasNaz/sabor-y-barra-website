import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";

// create App function for UI structure
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
}

export default App;
