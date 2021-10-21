import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TagProvider } from "./contexts/tag";

ReactDOM.render(
  <React.StrictMode>
    <TagProvider>
      <App />
    </TagProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
