import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
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
], {basename: "/russell_portfolio"});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
