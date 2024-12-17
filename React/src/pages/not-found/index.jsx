import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <Link to="/">Nazad na pocetnu stranicu</Link>
    </>
  );
};

export default NotFound;
