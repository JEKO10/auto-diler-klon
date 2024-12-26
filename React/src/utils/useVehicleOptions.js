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
  const [filteredModels, setFilteredModels] = useState([]);
  const [filteredBodyTypes, setFilteredBodyTypes] = useState([]);

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

  const allEquipments =
    vehicleOptions.equipmentCategoriesWithEquipments?.flatMap(
      (category) => category.equipments
    ) || [];

  const uniqueCountries = Array.from(
    new Map(
      vehicleOptions.locations.map((item) => [
        item.country,
        { id: item.id, name: item.country },
      ])
    ).values()
  );

  const uniqueCities = Array.from(
    new Map(
      vehicleOptions.locations.map((item) => [
        item.city,
        { id: item.id, name: item.city },
      ])
    ).values()
  );

  const filterModelsAndBodies = (brandId, vehicleTypeId) => {
    const selectedBrand = vehicleOptions.brandsWithModels.find(
      (brand) => brand.id == brandId
    );
    setFilteredModels(selectedBrand ? selectedBrand.models : []);

    const selectedVehicle = vehicleOptions.vehicleTypesWithBodies.find(
      (type) => type.id == vehicleTypeId
    );
    setFilteredBodyTypes(selectedVehicle ? selectedVehicle.body_types : []);
  };

  return {
    vehicleOptions,
    loading,
    allEquipments,
    filterModelsAndBodies,
    filteredModels,
    filteredBodyTypes,
    uniqueCountries,
    uniqueCities,
  };
};

export default useVehicleOptions;
