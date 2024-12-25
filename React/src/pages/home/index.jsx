import FilterForm from "../../components/filter/FilterForm";
import HeroSection from "./components/HeroSection";
import AutoShop from "./components/AutoShop";
import PlatformNumbers from "./components/PlatformNumbers";
import CarListing from "../../components/car/CarListing";
import Navbar from "../../components/Navbar";
import { useCarContext } from "../../contexts/CarContext";

const Home = () => {
  const { allCars } = useCarContext();

  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      {/* <FilterForm isHome={true} /> */}
      <CarListing carData={allCars} title={"Najnoviji oglasi"} />
      <PlatformNumbers />
      <AutoShop />
    </div>
  );
};

export default Home;
