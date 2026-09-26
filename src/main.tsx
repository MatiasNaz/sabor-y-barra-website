import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import "./i18n/i18n";
import ScrollToTop from "./components/ScrollToTop.tsx";
import ScrollToHash from "./components/ScrollToHash.tsx";

// Application initialization
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
