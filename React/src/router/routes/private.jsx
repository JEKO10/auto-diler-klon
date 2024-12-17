import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) return <Navigate to="/login" />;

  return element;
};
