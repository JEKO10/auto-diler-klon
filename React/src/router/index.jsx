import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import Register from "../pages/register";
import Login from "../pages/login";
import Profile from "../pages/profile";
import { PrivateRoute } from "./routes/private";
import { PublicRoute } from "./routes/public";
import Create from "../pages/create";
import { Layout } from "../layouts";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "profile",
          element: <PrivateRoute element={<Profile />} />,
        },
        {
          path: "create",
          element: <PrivateRoute element={<Create />} />,
        },
      ],
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
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};
