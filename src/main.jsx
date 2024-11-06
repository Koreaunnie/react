import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyApp12 from "./apps/MyApp12.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyApp12 />
  </StrictMode>,
);
