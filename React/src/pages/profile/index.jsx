import { useEffect, useState } from "react";
import { getUserPosts } from "../../services/authService";
import CarListing from "../../components/car/CarListing";
import UpdateUserForm from "./components/UpdateUserForm";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import { useAuthContext } from "../../contexts/AuthContext";

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
    <div className="p-6">
      {user ? (
        <div className="text-text text-center w-full max-w-3xl mx-auto p-8 shadow-lg rounded-lg">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Zdravo, {user.first_name}
            </h1>
            <p className="text-lg">
              {user.first_name} {user.last_name}
            </p>
            <p className="text-lg">{user.email}</p>
            <p className="text-lg">{user.phone_number}</p>
          </div>
        </div>
      ) : (
        <p className="h-screen text-red-500">
          Preuzimanje informacija o korisniku nije uspjelo
        </p>
      )}
      <CarListing
        isLoading={isLoading}
        carData={Array.isArray(userPosts) ? userPosts : []}
        title={`Vaši Oglasi`}
        errorMessage={`Još uvijek nemate oglase.`}
      />
      <Link
        to="/create"
        className="flex items-center w-fit bg-red-500 text-white text-md py-2 px-7 border border-transparent rounded-lg transition hover:bg-white hover:text-red-500 hover:border-red-500"
      >
        <span className="mr-2">Dodajte oglas</span>
        <GrLinkNext />
      </Link>
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
