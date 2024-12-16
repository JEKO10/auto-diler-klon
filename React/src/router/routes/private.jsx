import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ element }) => {
  const access_token = localStorage.getItem("access_token");

  if (!access_token) return <Navigate to="/login" />;

  return element;
};
