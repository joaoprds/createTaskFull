import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ToastContainer position="top-center" autoClose={4000} />
  </StrictMode>
);
