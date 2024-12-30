import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import Register from "../pages/register";
import Login from "../pages/login";
import { PrivateRoute } from "./routes/private";
import { PublicRoute } from "./routes/public";
import Create from "../pages/create";
import { Layout } from "../layouts";
import AllVehicles from "../pages/allVehicles";
import SingleCar from "../pages/singleCar";
import ProfilePage from "../pages/profile";

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
          element: <PrivateRoute element={<ProfilePage />} />,
        },
        {
          path: "create",
          element: <PrivateRoute element={<Create />} />,
        },
        {
          path: "all",
          element: <AllVehicles />,
        },
        {
          path: "posts/:id",
          element: <SingleCar />,
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
