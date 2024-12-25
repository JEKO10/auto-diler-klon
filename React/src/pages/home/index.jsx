import FilterForm from "../../components/filter/FilterForm";
import HeroSection from "./components/HeroSection";
import AutoShop from "./components/AutoShop";
import PlatformNumbers from "./components/PlatformNumbers";
import CarListing from "../../components/car/CarListing";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <FilterForm isHome={true} />
      <CarListing title={"Najnoviji oglasi"} />
      <PlatformNumbers />
      <AutoShop />
    </div>
  );
};

export default Home;
