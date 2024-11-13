import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import App69 from "./practice/App69.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App69 />
      <Toaster />
    </Provider>
  </StrictMode>,
);
