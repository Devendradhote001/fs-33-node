import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";

const AppRouter = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
