import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { useState } from "react";
const router = createBrowserRouter([
  {
    path: "/russell_portfolio/",
    element: <Home />,
    children: [
      {
        path: "/russell_portfolio/contact",
        element: <Contact />,
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
