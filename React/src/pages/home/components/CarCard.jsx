const CarCard = ({ car }) => {
  return (
    <div className="border rounded-md p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold">{car.name}</h3>
          <p className="text-sm text-blue-400">{car.category}</p>
        </div>
      </div>
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-auto my-3 object-contain"
      />
      <div className="flex justify-between text-gray-500 text-sm my-2">
        <span>🛢 {car.fuel}</span>
        <span>⚙️ {car.transmission}</span>
        <span>👥 {car.seats} People</span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-lg font-bold">€{car.price}</p>
          {car.oldPrice && (
            <p className="text-sm line-through text-gray-400">
              €{car.oldPrice}
            </p>
          )}
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          Buy
        </button>
      </div>
    </div>
  );
};

export default CarCard;
