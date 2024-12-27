import { createContext, useState, useContext, useEffect } from "react";
import {
  getUserProfile,
  loginUser,
  registerUser,
} from "../services/authService";

const authContext = createContext({});

const { Provider } = authContext;

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("access_token")
  );
  const [isAuthenticated, setIsAuthenticated] = useState(!!authToken);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const fetchUser = async () => {
    try {
      const response = await getUserProfile();
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error fetching user:", error);
      logout();
    }
  };

  const login = async (formData) => {
    const response = await loginUser(formData);
    const { access_token } = response.data;

    if (access_token) {
      localStorage.setItem("access_token", access_token);
      setAuthToken(access_token);
      setIsAuthenticated(true);
      await fetchUser();
      window.location.reload();
    }
  };

  const register = async (formData, setMessage, setIsError) => {
    if (formData.password.length < 6) {
      setMessage("Lozinka mora imati najmanje 6 karaktera.");
      setIsError(true);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Lozinke se ne podudaraju!");
      setIsError(true);
      return;
    }

    const response = await registerUser(formData);
    const { access_token } = response.data;

    if (access_token) {
      login({ username: formData.email, password: formData.password });
      setMessage("Korisnik je uspješno kreiran!");
      setIsError(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    setAuthToken(null);
    setIsAuthenticated(false);
    setUser(null);
    window.location.reload();
  };

  useEffect(() => {
    if (authToken && !user) {
      fetchUser();
    }
  }, [authToken]);

  return (
    <Provider
      value={{ user, authToken, isAuthenticated, login, logout, register }}
    >
      {children}
    </Provider>
  );
};

export const useAuthContext = () => useContext(authContext);
