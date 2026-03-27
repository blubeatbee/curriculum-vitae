import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import routing from "./routes/routing.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routing} />
  </StrictMode>,
);
