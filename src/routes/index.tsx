import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const MainPage = lazy(() => import("../pages/MainPage"));

const Basic1Page = lazy(() => import("../pages/Basic1Page"));
const Basic2Page = lazy(() => import("../pages/Basic2Page"));
const Principle1Page = lazy(() => import("../pages/Principle1Page"));
const Principle2Page = lazy(() => import("../pages/Principle2Page"));
const Principle3Page = lazy(() => import("../pages/Principle3Page"));
const Myth1Page = lazy(() => import("../pages/Myth1Page"));
const Myth2Page = lazy(() => import("../pages/Myth2Page"));

export function RouteContent() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
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
      </Suspense>
    </>
  );
}

export default function Root() {
  return (
    <BrowserRouter>
      <RouteContent />
    </BrowserRouter>
  );
}
