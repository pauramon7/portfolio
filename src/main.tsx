import React from "react";
import ReactDOM from "react-dom/client";
import CV from "./CV";
import { ThemeProvider } from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CV />
    </ThemeProvider>
  </React.StrictMode>
);
