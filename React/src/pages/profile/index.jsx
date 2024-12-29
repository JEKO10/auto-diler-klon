import { useEffect, useState } from "react";
import { getUserPosts } from "../../services/authService";
import { useAuthContext } from "../../contexts/AuthContext";
import Sidebar from "./components/Sidebar";
import ProfileForm from "./components/ProfileForm";

const Profile = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState("profile");
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
      <Sidebar page={page} setPage={setPage} />
      {page === "edit" ? (
        <ProfileForm
          userId={user.id}
          initialData={{
            first_name: user.first_name,
            last_name: user.last_name,
            phone_number: user.phone_number,
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Profile;
