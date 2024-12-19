import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
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
        url: "https://ce1d-79-140-150-179.ngrok-free.app/me",
        headers: {
          Authorization: `Bearer ${authToken}`,
          Accept: "application/json",
        },
      };

      console.log("Axios Request Config:", config);

      const response = await axios(config);
      console.log("Response Data:", response.data);
      setUser(response.data);
    } catch (err) {
      setError(err.response?.data || "Failed to fetch user information.");
      console.error("Error fetching user:", err.response || err.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Navbar />
      Profile
    </>
  );
};

export default Profile;
