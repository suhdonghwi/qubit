import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import MainPage from "../pages/MainPage";

import Basic1Page from "../pages/Basic1Page";
import Basic2Page from "../pages/Basic2Page";
import Principle1Page from "../pages/Principle1Page";
import Principle2Page from "../pages/Principle2Page";
import Principle3Page from "../pages/Principle3Page";
import Myth1Page from "../pages/Myth1Page";
import Myth2Page from "../pages/Myth2Page";

export default function Root() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/basic/1" element={<Basic1Page />} />
        <Route path="/basic/2" element={<Basic2Page />} />
        <Route path="/principle/1" element={<Principle1Page />} />
        <Route path="/principle/2" element={<Principle2Page />} />
        <Route path="/principle/3" element={<Principle3Page />} />
        <Route path="/myth/1" element={<Myth1Page />} />
        <Route path="/myth/2" element={<Myth2Page />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
