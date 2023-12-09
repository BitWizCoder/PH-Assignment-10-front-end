import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Apple from "./pages/Apple";
import Motorola from "./pages/Motorola";
import Hp from "./pages/Hp";
import OnePlus from "./pages/OnePlus";
import Samsung from "./pages/Samsung";
import Xiomi from "./pages/Xiomi";
import Layout from "./pages/Layout";
import AddProduct from "./pages/AddProduct";
import MyCart from "./pages/MyCart";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import UpdateProduct from "./pages/UpdateProduct";
import { FirebaseProvider } from "./context/FirebaseContext";
import Signup from "./pages/Signup";
import GoogleSignIn from "./pages/GoogleSignIn";
import PrivateRoute from "./components/PrivateRoute";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // Card Items
      {
        path: "/apple",
        element: <Apple />,
      },
      {
        path: "/motorola",
        element: <Motorola />,
      },
      {
        path: "/hp",
        element: <Hp />,
      },
      {
        path: "/one-plus",
        element: <OnePlus />,
      },
      {
        path: "/samsung",
        element: <Samsung />,
      },
      {
        path: "/xiomi",
        element: <Xiomi />,
      },
      // Nav items
      {
        path: "/add-prduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/googlesignin",
        element: <GoogleSignIn />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
);
