import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import App51 from "./practice/App51.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App51 />
    </Provider>
  </StrictMode>,
);
