import { useEffect, useState } from "react";
import { getUserPosts, getUserProfile } from "../../services/authService";
import CarListing from "../../components/car/CarListing";
import UpdateUserForm from "./components/UpdateUserForm";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUserData = async () => {
    setIsLoading(true);

    try {
      const response = await getUserProfile();
      setUser(response.data);

      const postsResponse = await getUserPosts(response.data.id);
      setUserPosts(postsResponse);
      setIsLoading(false);
    } catch (err) {
      const errorMessage =
        err.response?.data?.detail ||
        "Preuzimanje informacija o korisniku nije uspjelo.";
      console.log(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (isLoading) {
    return <div className="loading" />;
  }
  return (
    <div className="p-6">
      <h2 className="text-text text-2xl font-bold mb-4">
        Zdravo, {user?.first_name}
      </h2>
      {user ? (
        <div className="text-text">
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
          <CarListing
            carData={Array.isArray(userPosts) ? userPosts : []}
            title={`Oglasi korisnika ${user.first_name}`}
          />
        </div>
      ) : (
        <div className="h-screen" />
      )}
      {user && (
        <UpdateUserForm
          userId={user.id}
          initialData={{
            first_name: user.first_name,
            last_name: user.last_name,
            phone_number: user.phone_number,
          }}
        />
      )}
    </div>
  );
};

export default Profile;
