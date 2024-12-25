import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car }) => {
  const navigate = useNavigate();
  const imageUrl = car.images.length
    ? `${import.meta.env.VITE_BASE_URL}${car.images[0].image_url}`
    : "/placeholder.jpg";

  const handleClick = () => {
    navigate(`/posts/${car.id}`);
  };

  return (
    <div className="border rounded-md p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={car.title || "Vozilo"}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-3">
        <h3 className="text-xl font-bold">
          {car.brand} {car.model}
        </h3>
        <p className="text-sm text-gray-500">{car.body_type}</p>
        <p className="text-sm text-blue-400">
          {car.location.city}, {car.location.country}
        </p>
      </div>
      <div className="flex justify-between text-gray-500 text-sm my-3">
        <span>🛢 {car.fuel}</span>
        <span>⚙️ {car.transmission}</span>
        <span>📅 {car.year}</span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-xl font-bold">€{car.price}</p>
        </div>
        <button
          onClick={handleClick}
          className="bg-red-500 text-white px-6 py-2 rounded-md"
        >
          Kupi
        </button>
      </div>
    </div>
  );
};

CarCard.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    body_type: PropTypes.string,
    fuel: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    horsepowers: PropTypes.number,
    kilowatts: PropTypes.number,
    mileage: PropTypes.number,
    emission_standard: PropTypes.string,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        image_url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default CarCard;
