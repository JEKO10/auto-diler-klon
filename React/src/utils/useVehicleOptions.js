import { useEffect, useState } from "react";
import {
  getVehicleTypes,
  getBodyTypes,
  getBrands,
  getModels,
  getTransmissions,
  getFuels,
  getDrivetrains,
  getEmissionStandards,
  getEquipmentsCategory,
  getEquipments,
  getLocations,
} from "../services/vehicleService";

const useVehicleOptions = () => {
  const [vehicleOptions, setVehicleOptions] = useState({
    vehicleTypes: [],
    brands: [],
    models: [],
    fuels: [],
    bodyTypes: [],
    emissions: [],
    drivetrains: [],
    transmissions: [],
    locations: [],
    equipmentCategories: [],
    equipments: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          brands,
          models,
          fuels,
          bodyTypes,
          emissions,
          drivetrains,
          transmissions,
          vehicleTypes,
          locations,
          equipmentCategories,
          equipments,
        ] = await Promise.all([
          getBrands(),
          getModels(),
          getFuels(),
          getBodyTypes(),
          getEmissionStandards(),
          getDrivetrains(),
          getTransmissions(),
          getVehicleTypes(),
          getLocations(),
          getEquipmentsCategory(),
          getEquipments(),
        ]);

        setVehicleOptions({
          brands: brands.data,
          models: models.data,
          fuels: fuels.data,
          bodyTypes: bodyTypes.data,
          emissions: emissions.data,
          drivetrains: drivetrains.data,
          transmissions: transmissions.data,
          vehicleTypes: vehicleTypes.data,
          locations: locations.data,
          equipmentCategories: equipmentCategories.data,
          equipments: equipments.data,
        });
      } catch (error) {
        console.error("Error fetching options:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { vehicleOptions, loading };
};

export default useVehicleOptions;
