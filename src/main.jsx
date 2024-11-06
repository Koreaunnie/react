import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import MyApp18 from "./apps/MyApp18.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <MyApp18/>
    </StrictMode>,
);
