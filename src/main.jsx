import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Contact } from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/russell_portfolio/",
    element: <App />,
    children: [
      {
        path: "/russell_portfolio/",
        element: <Home />,
      },
      {
        path: "/russell_portfolio/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
