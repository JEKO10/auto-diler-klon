import { useEffect, useState } from "react";
import { getUserPosts, getUserProfile } from "../../services/authService";
import CarListing from "../../components/CarListing";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  const getUserData = async () => {
    try {
      const response = await getUserProfile();
      setUser(response.data);

      const postsResponse = await getUserPosts(response.data.id);
      setUserPosts(postsResponse);
    } catch (err) {
      const errorMessage =
        err.response?.data?.detail ||
        "Preuzimanje informacija o korisniku nije uspjelo.";
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Zdravo, {user?.first_name}</h2>
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
          {userPosts.length
            ? userPosts.map(({ post }) => <p key={post.id}>{post.title}</p>)
            : "Nema postova"}
          <CarListing title={`Oglasi korisnika ${user.first_name}`} />
        </div>
      ) : (
        <div className="h-screen" />
      )}
    </div>
  );
};

export default Profile;
