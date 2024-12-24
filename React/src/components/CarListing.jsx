import { Link } from "react-router-dom";
import CarCard from "./CarCard";
import { useEffect, useState } from "react";
import { getAllCars } from "../services/carService";

const CarListing = ({ title }) => {
  const [carData, setCarData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchCarData = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await getAllCars();
      setCarData(response.data);

      setIsLoading(false);
    } catch (err) {
      const errorMessage =
        err.response?.data?.detail || "Greška pri učitavanju vozila.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCarData();
  }, []);

  if (isLoading) {
    return <div className="loading" />;
  }
  return (
    <section className="my-10 p-8 text-text">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        {title === "Najnoviji oglasi" && (
          <Link to="/all" className="text-red-500 font-medium hover:underline">
            Vidi sve →
          </Link>
        )}
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {carData.map((car) => (
          <CarCard key={car.id} car={car} isLoading={isLoading} />
        ))}
      </div>
    </section>
  );
};

export default CarListing;
