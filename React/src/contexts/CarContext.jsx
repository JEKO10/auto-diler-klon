import { createContext, useContext, useEffect, useState } from "react";
import { getAllCars } from "../services/carService";

const carContext = createContext({});

const { Provider } = carContext;

export const CarProvider = ({ children }) => {
  const [allCars, setAllCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCarsData = async () => {
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
    getCarsData();
  }, []);

  return <Provider value={{ allCars, isLoading }}>{children}</Provider>;
};

export const useCarContext = () => useContext(carContext);
