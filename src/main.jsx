import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import App39 from "./practice/App39.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App39 />
    </Provider>
  </StrictMode>,
);
