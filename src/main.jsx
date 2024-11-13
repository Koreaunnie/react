import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import App76 from "./practice/App76.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App76 />
      <Toaster />
    </Provider>
  </StrictMode>,
);
