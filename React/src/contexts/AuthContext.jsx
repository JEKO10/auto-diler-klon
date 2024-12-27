import { createContext, useState, useContext } from "react";
import { loginUser, registerUser } from "../services/authService";

const authContext = createContext({});

const { Provider } = authContext;

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("access_token")
  );
  const [isAuthenticated, setIsAuthenticated] = useState(!!authToken);

  const login = async (formData) => {
    const response = await loginUser(formData);
    const { access_token } = response.data;

    if (access_token) {
      localStorage.setItem("access_token", access_token);
      setAuthToken(access_token);
      setIsAuthenticated(true);
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
    setAuthToken(null);
    setIsAuthenticated(false);
    window.location.reload();
  };

  return (
    <Provider value={{ authToken, isAuthenticated, login, logout, register }}>
      {children}
    </Provider>
  );
};

export const useAuthContext = () => useContext(authContext);
