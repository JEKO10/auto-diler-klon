import FilterForm from "./components/FilterForm";
import Navbar from "../../components/Navbar";
import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <FilterForm />
    </div>
  );
};

export default Home;
