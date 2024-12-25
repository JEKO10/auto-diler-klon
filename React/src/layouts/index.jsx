import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useLocation } from "react-router-dom";

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      {location.pathname === "/" ? "" : <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
};
