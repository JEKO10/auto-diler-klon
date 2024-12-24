import { useEffect, useState } from "react";
import { getCarById } from "../../services/carService";
import { useParams } from "react-router-dom";

const SingleCar = () => {
  const [carData, setCarData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const fetchCarData = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await getCarById(id);
      setCarData(response.data);
      setIsLoading(false);
    } catch (err) {
      const errorMessage =
        err.response?.data?.detail ||
        "Greška pri učitavanju podataka o vozilu.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCarData();
  }, [id]);

  if (isLoading) {
    return <div className="loading" />;
  }
  return (
    <div>
      {error && <p className="text-center text-red-500 h-screen">{error}</p>}
    </div>
  );
};

export default SingleCar;
