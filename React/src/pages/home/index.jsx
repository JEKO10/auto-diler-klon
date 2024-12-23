import FilterForm from "./components/FilterForm";
import HeroSection from "./components/HeroSection";
import AutoShop from "./components/AutoShop";
import PlatformNumbers from "./components/PlatformNumbers";
import CarListing from "./components/CarListing";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <FilterForm />
      <CarListing />
      <PlatformNumbers />
      <AutoShop />
    </div>
  );
};

export default Home;
