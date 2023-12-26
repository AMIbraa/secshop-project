import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./distStyle/css/main.css";
import "./distStyle/css/Navbar.css";
import "./distStyle/css/Carousel.css";
import "./distStyle/css/Card.css";

// buat off canvas buat menu store

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
