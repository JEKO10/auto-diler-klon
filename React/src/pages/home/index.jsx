import FilterForm from "./components/FilterForm";
import Navbar from "../../components/Navbar";
import HeroSection from "./components/HeroSection";
import AutoShop from "./components/AutoShop";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <FilterForm />
      <AutoShop />
    </div>
  );
};

export default Home;
