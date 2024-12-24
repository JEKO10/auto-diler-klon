import { useEffect, useState } from "react";
import { getUserProfile } from "../../services/authService";
import CarListing from "../../components/CarListing";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const getUserData = async () => {
    try {
      const response = await getUserProfile();
      setUser(response.data);
    } catch (err) {
      const errorMessage =
        err.response?.data?.detail ||
        "Preuzimanje informacija o korisniku nije uspjelo.";
      setError(errorMessage);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Zdravo, {user?.first_name}</h2>
      {error && <p className="text-red-500">{error}</p>}
      {user ? (
        <div>
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
          <CarListing title={`Oglasi korisnika ${user.first_name}`} />
        </div>
      ) : (
        <div className="h-screen" />
      )}
    </div>
  );
};

export default Profile;
