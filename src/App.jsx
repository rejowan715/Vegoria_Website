import React from "react";
import Home from "./Components/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./Components/Pages/Fruits";
import Dairy from "./Components/Pages/Dairy.jsx";
import Seafood from "./Components/Pages/Seafood.jsx";
import ProductView from "./Components/Pages/ProductView.jsx";
import Layouts from "./Components/Layouts/Layouts.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/fruits",
          element: <Fruits />,
        },
        {
          path: "/dairy",
          element: <Dairy />,
        },
        {
          path: "/seafood",
          element: <Seafood />,
        },
        {
          path: "/productview",
          element: <ProductView />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
