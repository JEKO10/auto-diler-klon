import { useEffect, useState } from "react";
import { getCarById } from "../../services/carService";
import { useParams } from "react-router-dom";

const SingleCar = () => {
  const [carData, setCarData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const mainImage =
    carData.images && carData.images.length > 0
      ? `${BASE_URL}${carData.images[0].image_url}`
      : "/placeholder.jpg";

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
  if (carData.length === 0) {
    return (
      <p className="text-center text-red-500 h-screen">
        Greška pri učitavanju podataka o vozilu
      </p>
    );
  }
  return (
    <div className="max-w-7xl mx-auto p-6 mb-14">
      {error && <p className="text-center text-red-500 h-screen">{error}</p>}
      <h1 className="text-3xl font-bold mb-4">
        {carData.brand} {carData.model} {carData.year}
      </h1>
      <p className="text-2xl font-semibold text-gray-600 mb-6">
        €{carData.price}
      </p>
      <div className="relative">
        <img
          src={mainImage}
          alt={`${carData.brand} ${carData.model}`}
          className="w-full h-96 object-cover rounded-md"
        />
        <div className="flex mt-4 space-x-4 overflow-x-auto">
          {carData.images.map((img, index) => (
            <img
              key={index}
              src={`${BASE_URL}${img.image_url}`}
              alt={`Car image ${index + 1}`}
              className="w-32 h-24 object-cover rounded-md"
            />
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Opis</h2>
        <p className="text-gray-700 mt-2">{carData.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="border p-4 rounded-md">
          <h3 className="text-xl font-semibold mb-4">Opšte informacije</h3>
          <ul className="space-y-2">
            <li>
              <strong>Marka:</strong> {carData.brand}
            </li>
            <li>
              <strong>Model:</strong> {carData.model}
            </li>
            <li>
              <strong>Godište:</strong> {carData.year}
            </li>
            <li>
              <strong>Karoserija:</strong> {carData.body_type}
            </li>
            <li>
              <strong>Gorivo:</strong> {carData.fuel}
            </li>
            <li>
              <strong>Kilometraža:</strong> {carData.mileage} km
            </li>
          </ul>
        </div>
        <div className="border p-4 rounded-md">
          <h3 className="text-xl font-semibold mb-4">Dodatne informacije</h3>
          <ul className="space-y-2">
            <li>
              <strong>Pogon:</strong> {carData.drivetrain}
            </li>
            <li>
              <strong>Menjač:</strong> {carData.transmission}
            </li>
            <li>
              <strong>Snaga:</strong> {carData.horsepowers} KS
            </li>
            <li>
              <strong>Emisiona klasa:</strong> {carData.emission_standard}
            </li>
            <li>
              <strong>Boja:</strong> {carData.color}
            </li>
            <li>
              <strong>Broj vrata:</strong> {carData.doors_number}
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 p-4 border rounded-md">
        <h3 className="text-xl font-semibold mb-2">Lokacija</h3>
        <p>
          {carData.location.city}, {carData.location.country}
        </p>
        <h3 className="text-xl font-semibold mt-4">Korisnik</h3>
        <p>
          {carData.user.first_name} {carData.user.last_name}
        </p>
        <p>Email: {carData.user.email}</p>
        <p>Telefon: {carData.user.phone_number}</p>
      </div>
    </div>
  );
};

export default SingleCar;
