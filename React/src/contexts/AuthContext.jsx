import { createContext, useState, useContext } from "react";
import { registerUser } from "../sevices/authService";

const authContext = createContext({});

const { Provider } = authContext;

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("access_token")
  );
  const [isAuthenticated, setIsAuthenticated] = useState(!!authToken);

  const login = (token) => {
    localStorage.setItem("access_token", token);
    setAuthToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setAuthToken(null);
    setIsAuthenticated(false);
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

    try {
      const response = await registerUser(formData);
      const { access_token } = response.data;

      if (access_token) {
        login(access_token);
        setMessage("Korisnik je uspješno kreiran!");
        setIsError(false);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setMessage("E-mail već postoji.");
        } else if (error.response.status === 500) {
          setMessage("Greška na serveru. Pokušajte kasnije.");
        } else {
          setMessage("Nešto je pošlo po zlu. Pokušajte ponovo.");
        }
      } else {
        setMessage("Nema odgovora sa servera. Provjerite vezu.");
      }
      setIsError(true);
    }
  };

  return (
    <Provider value={{ authToken, isAuthenticated, login, logout, register }}>
      {children}
    </Provider>
  );
};

export const useAuthContext = () => useContext(authContext);
