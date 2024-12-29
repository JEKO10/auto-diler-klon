import { useEffect, useState } from "react";
import { getUserPosts } from "../../services/authService";
import { useAuthContext } from "../../contexts/AuthContext";
import Sidebar from "./components/Sidebar";

const Profile = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuthContext();

  const getUserData = async () => {
    setIsLoading(true);

    try {
      const postsResponse = await getUserPosts(user.id);
      setUserPosts(postsResponse.data);
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
    <div>
      <Sidebar />
    </div>
  );
};

export default Profile;
