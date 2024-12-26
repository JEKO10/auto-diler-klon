import { createContext, useContext, useEffect, useState } from "react";
import { getAllCars } from "../services/carService";

const vehicleContext = createContext({});

const { Provider } = vehicleContext;

export const VehicleProvider = ({ children }) => {
  const [allCars, setAllCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCarData = async () => {
    setIsLoading(true);
    try {
      const response = await getAllCars();

      setAllCars(response.data);
      //   setFilteredCars(response.data);
    } catch (err) {
      console.log("Error: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCarData();
  }, []);

  return (
    <Provider value={{ allCars, isLoading, getCarData }}>{children}</Provider>
  );
};

export const useVehicleContext = () => useContext(vehicleContext);
