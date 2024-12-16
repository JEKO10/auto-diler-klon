import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import Register from "../pages/register";
import Login from "../pages/login";
import Profile from "../pages/profile";
import { PrivateRoute } from "./routes/private";
import { PublicRoute } from "./routes/public";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "register",
          element: <PublicRoute element={<Register />} />,
        },
        {
          path: "login",
          element: <PublicRoute element={<Login />} />,
        },
        {
          path: "profile",
          element: <PrivateRoute element={<Profile />} />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};
