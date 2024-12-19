import Navbar from "../../components/Navbar";
import ErrorImg from "../../assets/error.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <section className="text-center">
        <h3 className="text-2xl mt-5 lg:mt-0">404</h3>
        <div className="bg-red-500 w-14 h-0.5 mb-5 sm:mb-10 mx-auto" />
        <p className="text-3xl md:text-5xl font-poppins tracking-wider mb-5 sm:mb-10 px-10">
          Stranica nije pronađena!
        </p>
        <Link to="/" className="text-xl text-red-500">
          Nazad na bezbjedno →
        </Link>
        <img
          src={ErrorImg}
          alt="Error"
          className="w-full sm:w-1/2 absolute right-0 bottom-0"
        />
      </section>
    </>
  );
};

export default NotFound;
