import { useEffect, useState } from "react";
import { getCarById, deleteCar } from "../../services/carService";
import { useParams } from "react-router-dom";
import ImageModal from "./components/ImageModal";
import CarInfo from "./components/CarInfo";
import ControlBtns from "./components/ControlBtns";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SingleCar = () => {
  const [carData, setCarData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const { user } = useAuthContext();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

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

  const handleDelete = async (postId) => {
    try {
      await deleteCar(postId);
      setError("Ogral uspješno obrisan!");
      navigate("/profile");
    } catch (error) {
      setError("Neuspješno brisanje oglasa!");
    }
  };

  useEffect(() => {
    fetchCarData();
  }, [id]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  if (isLoading) {
    return <div className="loading" />;
  }
  if (carData.length === 0) {
    return (
      <p className="text-center text-red-500 h-screen">
        Greška pri učitavanju podataka o vozilu.
      </p>
    );
  }
  return (
    <div className="text-text max-w-7xl mx-auto p-6 mb-14">
      {error && <p className="text-center text-red-500 h-screen">{error}</p>}
      <h1 className="text-3xl font-bold mb-4">
        {carData.brand} {carData.model}
      </h1>
      <p className="text-primary text-2xl font-semibold mb-6">
        €{carData.price}
      </p>
      {user && user.id === carData.user.id && (
        <div className="mb-8 text-right">
          <button
            onClick={() => handleDelete(carData.id)}
            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-white hover:text-red-500 border border-red-500"
          >
            Obriši oglas
          </button>
        </div>
      )}
      <div className="relative">
        <ControlBtns
          setImageIndex={setImageIndex}
          imageIndex={imageIndex}
          totalImages={carData.images.length}
        />
        <img
          src={`${BASE_URL}${carData.images[imageIndex].image_url}`}
          alt={`${carData.brand} ${carData.model}`}
          className="w-full h-[300px] lg:h-[500px] object-cover rounded-md cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        />
        <div className="flex mt-4 space-x-4 overflow-x-auto">
          {carData.images.map((img, index) => (
            <img
              key={index}
              src={`${BASE_URL}${img.image_url}`}
              alt={`Car image ${index + 1}`}
              className={`w-32 h-24 object-cover rounded-md cursor-pointer ${
                selectedImage === img.image_url || index === imageIndex
                  ? "border-4 border-red-500"
                  : ""
              }`}
              onClick={() => {
                setSelectedImage(img.image_url);
                setImageIndex(index);
              }}
            />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <ImageModal
          setIsModalOpen={setIsModalOpen}
          selectedImage={carData.images[imageIndex].image_url}
          setImageIndex={setImageIndex}
          imageIndex={imageIndex}
          totalImages={carData.images.length}
        />
      )}
      <CarInfo carData={carData} />
    </div>
  );
};

export default SingleCar;
