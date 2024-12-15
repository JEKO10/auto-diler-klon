import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import Register from "../pages/register";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    { path: "/register", element: <Register /> },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};
