import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

// Routes
import Home from "../www/Modules/Home/Home.jsx";
import About from "../www/Modules/About/About.jsx";
import Contact from "../www/Modules/Contact/Contact.jsx";
import Work from "../www/Modules/Work/Work.jsx";
import Echo from "../www/Modules/Case Studies/Echo.jsx";
import StartingOverInc from "../www/Modules/Case Studies/StartingOverInc.jsx";
import Envision from "../www/Modules/Case Studies/Envision.jsx";
import Hatch from "../www/Modules/Case Studies/Hatch.jsx";
import FDA from "../www/Modules/Case Studies/FDA.jsx";
import Recreation from "../www/Modules/Recreation/Recreation.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/russell_portfolio/",
    element: <Home />,
    children: [
      {
        path: "/russell_portfolio/contact",
        element: <Contact />, //about, no children
      },
      {
        path: "/russell_portfolio/contact",
        element: <Contact />, //contact, no children
      },
      {
        path: "/russell_portfolio/contact",
        element: <Contact />, //recreation no children
      },
      {
        path: "/russell_portfolio/contact",
        element: <Contact />, //work has children
        children: [
          {
            path: "/russell_portfolio/contact",
            element: <Contact />, //echo
          },
          {
            path: "/russell_portfolio/contact",
            element: <Contact />, //soi
          },
          {
            path: "/russell_portfolio/contact",
            element: <Contact />, //envision
          },
          {
            path: "/russell_portfolio/contact",
            element: <Contact />, //hatch
          },
          {
            path: "/russell_portfolio/contact",
            element: <Contact />, //fda
          },
        ],
      },
    ],
  },
]);

function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);

    const body = document.body;
    if (!showOverlay) {
      body.style.overflow = "hidden"; // Restore normal scrolling
    } else {
      body.style.overflow = "auto"; // Prevent scrolling
    }
  };

  return (
    <div className={`main-content ${showOverlay ? "overlay-open" : ""}`}>
      <RouterProvider router={router} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
