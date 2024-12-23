import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export const PublicRoute = ({ element }) => {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) return <Navigate to="/" />;

  return element;
};
