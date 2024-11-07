import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import MyApp28 from "./apps/MyApp28.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <MyApp28 />
    </Provider>
  </StrictMode>,
);
