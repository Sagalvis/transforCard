import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import IndexRoutes from "./Components";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <IndexRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
