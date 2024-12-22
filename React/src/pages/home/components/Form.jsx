import FilterField from "./FilterField";
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
} from "../../../services/vehicleService";
import { useEffect, useState } from "react";

const Form = () => {
  const [filters, setFilters] = useState({
    vehicleType: "",
    brand: "",
    model: "",
    location: "",
    fuel: "",
    bodyType: "",
    equipment: "",
    emission: "",
    drivetrain: "",
    transmission: "",
    equipmentCategory: "",
    // range
    price: "",
    year: "",
  });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        console.error("Error: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col flex-wrap md:flex-row items-center gap-4 [&>div]:border-primary [&_input]:bg-body [&_input]:text-text"
    >
      <FilterField
        name="vehicleType"
        placeholder="Vrsta vozila"
        vehicleOptions={vehicleOptions.vehicleTypes}
        value={filters.vehicleType}
        onChange={handleChange}
      />
      <FilterField
        name="brand"
        placeholder="Marka"
        vehicleOptions={vehicleOptions.brands}
        value={filters.brand}
        onChange={handleChange}
      />
      <FilterField
        name="model"
        placeholder="Model"
        vehicleOptions={vehicleOptions.models}
        value={filters.model}
        onChange={handleChange}
      />
      <FilterField
        name="fuel"
        placeholder="Gorivo"
        vehicleOptions={vehicleOptions.fuels}
        value={filters.fuel}
        onChange={handleChange}
      />
      <FilterField
        name="bodyType"
        placeholder="Karoserija"
        vehicleOptions={vehicleOptions.bodyTypes}
        value={filters.bodyType}
        onChange={handleChange}
      />
      <FilterField
        name="equipmentCategories"
        placeholder="Kategorija opreme"
        vehicleOptions={vehicleOptions.equipmentCategories}
        value={filters.equipmentCategories}
        onChange={handleChange}
      />
      <FilterField
        name="equipment"
        placeholder="Oprema"
        vehicleOptions={vehicleOptions.equipments}
        value={filters.equipment}
        onChange={handleChange}
      />
      <FilterField
        name="transmissions"
        placeholder="Menjač"
        vehicleOptions={vehicleOptions.transmissions}
        value={filters.transmission}
        onChange={handleChange}
      />
      <FilterField
        name="drivetrains"
        placeholder="Pogoni"
        vehicleOptions={vehicleOptions.drivetrains}
        value={filters.drivetrain}
        onChange={handleChange}
      />
      <FilterField
        name="emissions"
        placeholder="Emisije"
        vehicleOptions={vehicleOptions.emissions}
        value={filters.emission}
        onChange={handleChange}
      />
      <FilterField
        name="country"
        placeholder="Zemlja"
        vehicleOptions={vehicleOptions.locations}
        value={filters.location}
        onChange={handleChange}
      />
      <FilterField
        name="region"
        placeholder="Region"
        vehicleOptions={vehicleOptions.locations}
        value={filters.location}
        onChange={handleChange}
      />
      <FilterField
        name="city"
        placeholder="Grad"
        vehicleOptions={vehicleOptions.locations}
        value={filters.location}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-red-500 text-white w-full md:w-auto px-6 py-2 rounded-md font-medium"
      >
        Traži
      </button>
    </form>
  );
};

export default Form;
