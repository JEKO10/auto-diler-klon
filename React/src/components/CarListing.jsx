import { Link } from "react-router-dom";
import CarCard from "./CarCard";
import SkeletonCard from "./SkeletonCard";
import { useEffect, useState } from "react";
import { getAllCars } from "../services/carService";

const CarListing = ({ title }) => {
  const [carData, setCarData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCarData = async () => {
    setIsLoading(true);

    try {
      const response = await getAllCars();
      setCarData(response.data);
    } catch (err) {
      console.log("Error: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCarData();
  }, []);

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
      {carData.length === 0 && (
        <p className="text-red-500">Greška pri učitavanju vozila.</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading
          ? [...Array(4)].map((_, index) => <SkeletonCard key={index} />)
          : carData.map((car) => <CarCard key={car.id} car={car} />)}
      </div>
    </section>
  );
};

export default CarListing;
