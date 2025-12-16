import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import { axiosInstance } from "../config/axiosInstance";
import { useDispatch } from "react-redux";
import { setUser } from "../features/AuthSlice";
import HomeLayout from "../layout/HomeLayout";
import PublicRoute from "../components/PublicRoute";
import ProtectedRoute from "../components/ProtectedRoute";
import Women from "../pages/Women";
import Mens from "../pages/Mens";
import Kids from "../pages/Kids";

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        let res = await axiosInstance.get("auth/current-user", {
          withCredentials: true,
        });
        if (res) {
          dispatch(setUser(res.data.user));
          console.log(res);
        }
      } catch (error) {
        console.log("error in cu api", error);
      }
    })();
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
        },
      ],
    },
    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <HomeLayout />,
          children: [
            {
              path: "",
              element: <Women />,
            },
            {
              path: "mens",
              element: <Mens />,
            },
            {
              path: "kids",
              element: <Kids />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
