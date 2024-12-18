import FilterForm from "./components/FilterForm";
import Navbar from "../../components/Navbar";
import HeroSection from "./components/HeroSection";
import AutoShop from "./components/AutoShop";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <FilterForm />
      <AutoShop />
      <Footer />
    </div>
  );
};

export default Home;
