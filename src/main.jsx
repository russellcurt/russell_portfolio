import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/russell_portfolio/",
//     element: <App />,
//     children: [
//       {
//         path: "/russell_portfolio/",
//         element: <Home />,
//       },
//       {
//         path: "/russell_portfolio/contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const routeElements = (
  <Route path="/">
    <Route index element={<Home />}/>
    <Route path="/contact" element = {<Contact />}/>
  </Route>
)

const router = createBrowserRouter(createRoutesFromElements(routeElements));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
