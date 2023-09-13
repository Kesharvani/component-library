import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ComponentContextProvider } from "./componentContext/ComponentContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ComponentContextProvider>
        <App />
      </ComponentContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
