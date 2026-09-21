import "@fontsource/ibm-plex-sans-kr/300.css";
import "@fontsource/ibm-plex-sans-kr/400.css";
import "@fontsource/ibm-plex-sans-kr/500.css";
import "@fontsource/nanum-myeongjo/400.css";
import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);
const pathname = window.location.pathname.replace(/\/$/, "") || "/";
if (root.hasChildNodes() && root.dataset.prerenderRoute === pathname)
  hydrateRoot(root, app);
else createRoot(root).render(app);
