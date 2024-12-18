import CarCard from "./CarCard";

const carData = [
  {
    id: 1,
    name: "Koenigsegg",
    category: "Sedan",
    fuel: "Diesel",
    transmission: "Manual",
    seats: 2,
    price: 96.0,
    oldPrice: null,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Nissan GT – R",
    category: "Sedan",
    fuel: "Electric",
    transmission: "Manual",
    seats: 2,
    price: 96.0,
    oldPrice: 100.0,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Rolls-Royce",
    category: "Sedan",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 4,
    price: 96.0,
    oldPrice: null,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "CR – V",
    category: "SUV",
    fuel: "Electric",
    transmission: "Manual",
    seats: 4,
    price: 96.0,
    oldPrice: null,
    image: "https://via.placeholder.com/150",
  },
];

const CarListing = () => {
  return (
    <section className="my-10 p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Najnoviji automobili</h2>
        <button className="text-red-500 font-medium hover:underline">
          Vidi sve →
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {carData.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default CarListing;
