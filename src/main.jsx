import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./router/Routes.jsx";
import "@fontsource/fira-code";
import "@fontsource/noto-sans-jp";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParallaxProvider>
      <LanguageProvider>
        <RouterProvider router={Routes} />
      </LanguageProvider>
    </ParallaxProvider>
  </React.StrictMode>
);