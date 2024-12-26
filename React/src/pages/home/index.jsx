import HeroSection from "./components/HeroSection";
import AutoShop from "./components/AutoShop";
import PlatformNumbers from "./components/PlatformNumbers";
import CarListing from "../../components/car/CarListing";
import Navbar from "../../components/Navbar";
import { useVehicleContext } from "../../contexts/VehicleContext";

const Home = () => {
  const { allCars, isLoading } = useVehicleContext();

  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      {/* <FilterForm isHome={true} /> */}
      <CarListing
        carData={allCars}
        isLoading={isLoading}
        title={"Najnoviji oglasi"}
      />
      <PlatformNumbers />
      <AutoShop />
    </div>
  );
};

export default Home;
