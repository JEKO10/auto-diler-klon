import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? "" : <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
};
