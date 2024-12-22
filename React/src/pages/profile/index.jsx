import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../contexts/AuthContext";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { authToken } = useAuthContext();

  const getUser = async () => {
    try {
      const config = {
        method: "get",
        url: "https://074a-79-140-150-241.ngrok-free.app/me",
        headers: {
          Authorization: `Bearer ${authToken}`,
          Accept: "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
      };
      const response = await axios(config);
      setUser(response.data);
    } catch (err) {
      setError(
        err.response?.data ||
          "Preuzimanje informacija o korisniku nije uspjelo."
      );
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : user ? (
        <div className="space-y-2">
          <p>
            <strong>Ime:</strong> {user.first_name}
          </p>
          <p>
            <strong>Prezime:</strong> {user.last_name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Broj telefona:</strong> {user.phone_number}
          </p>
        </div>
      ) : (
        <p>Preuzimanje informacija o korisniku...</p>
      )}
    </div>
  );
};

export default Profile;
