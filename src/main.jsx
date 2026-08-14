import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./index.css";
import RemoteComponentProvider from "./RemoteComponentContext/RemoteComponentProvider.jsx";
import App from "./App.jsx";

const getRandomId = () => Math.random().toString(36).substring(2, 11);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RemoteComponentProvider
      url={`http://localhost:4173/remote.cjs?v=${getRandomId()}`}
    >
      <App />
    </RemoteComponentProvider>
  </StrictMode>,
);
