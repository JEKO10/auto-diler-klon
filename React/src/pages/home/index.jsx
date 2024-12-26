import HeroSection from "./components/HeroSection";
import AutoShop from "./components/AutoShop";
import PlatformNumbers from "./components/PlatformNumbers";
import CarListing from "../../components/car/CarListing";
import Navbar from "../../components/Navbar";
import { useVehicleContext } from "../../contexts/VehicleContext";
import FilterForm from "../../components/filter/FilterForm";
import { useState } from "react";

const Home = () => {
  const { allCars, isLoading } = useVehicleContext();
  const [filters, setFilters] = useState({
    price: "",
    fromYear: "",
    toYear: "",
  });
  const latestCars = allCars
    .slice()
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <FilterForm isHome={true} filters={filters} setFilters={setFilters} />
      <CarListing
        carData={latestCars}
        isLoading={isLoading}
        title={"Najnoviji oglasi"}
      />
      <PlatformNumbers />
      <AutoShop />
    </div>
  );
};

export default Home;
