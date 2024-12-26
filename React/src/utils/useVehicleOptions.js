import { useEffect, useState } from "react";
import {
  getBrandsWithModels,
  getVehicleTypesWithBodies,
  getEquipmentCategoryWithEquipments,
  getTransmissions,
  getFuels,
  getDrivetrains,
  getEmissionStandards,
  getLocations,
} from "../services/vehicleService";

const useVehicleOptions = () => {
  const [vehicleOptions, setVehicleOptions] = useState({
    vehicleTypesWithBodies: [],
    brandsWithModels: [],
    equipmentCategoriesWithEquipments: [],
    fuels: [],
    emissions: [],
    drivetrains: [],
    transmissions: [],
    locations: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          brandsWithModels,
          vehicleTypesWithBodies,
          equipmentCategoriesWithEquipments,
          fuels,
          emissions,
          drivetrains,
          transmissions,
          locations,
        ] = await Promise.all([
          getBrandsWithModels(),
          getVehicleTypesWithBodies(),
          getEquipmentCategoryWithEquipments(),
          getFuels(),
          getEmissionStandards(),
          getDrivetrains(),
          getTransmissions(),
          getLocations(),
        ]);

        setVehicleOptions({
          brandsWithModels: brandsWithModels.data,
          vehicleTypesWithBodies: vehicleTypesWithBodies.data,
          equipmentCategoriesWithEquipments:
            equipmentCategoriesWithEquipments.data,
          fuels: fuels.data,
          emissions: emissions.data,
          drivetrains: drivetrains.data,
          transmissions: transmissions.data,
          locations: locations.data,
        });
      } catch (error) {
        console.error("Error: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { vehicleOptions, loading };
};

export default useVehicleOptions;
