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
} from "../services/vehicleService";
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
  const [filteredModels, setFilteredModels] = useState([]);
  const [filteredBodyTypes, setFilteredBodyTypes] = useState([]);
  const [filteredEquipments, setFilteredEquipments] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });

    if (name === "brand") {
      const modelsByBrand = vehicleOptions.models.filter(
        (model) => model.brand_id === parseInt(value)
      );
      setFilteredModels(modelsByBrand);
      setFilters((prev) => ({ ...prev, model: "" }));
    }

    if (name === "vehicleType") {
      const filteredTypes = vehicleOptions.bodyTypes.filter(
        (type) => type.vehicle_type_id === parseInt(value)
      );
      setFilteredBodyTypes(filteredTypes);
    }

    if (name === "equipmentCategory") {
      const filteredEquipments = vehicleOptions.equipments.filter(
        (equipment) => equipment.category_id === parseInt(value)
      );
      setFilteredEquipments(filteredEquipments);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Filters: ", filters);
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

  const uniqueCountries = Array.from(
    new Map(
      vehicleOptions.locations.map((item) => [
        item.country,
        { id: item.id, name: item.country },
      ])
    ).values()
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col flex-wrap md:flex-row items-center gap-4 [&_input]:bg-body [&_input]:text-text"
    >
      <FilterField
        name="vehicleType"
        placeholder="Vrsta vozila"
        vehicleOptions={vehicleOptions.vehicleTypes}
        value={filters.vehicleType}
        handleChange={handleChange}
      />
      <FilterField
        name="bodyType"
        placeholder="Karoserija"
        vehicleOptions={filteredBodyTypes}
        value={filters.bodyType}
        handleChange={handleChange}
        disabled={!filters.vehicleType}
      />
      <FilterField
        name="brand"
        placeholder="Marka"
        vehicleOptions={vehicleOptions.brands}
        value={filters.brand}
        handleChange={handleChange}
      />
      <FilterField
        name="model"
        placeholder="Model"
        vehicleOptions={filteredModels}
        value={filters.model}
        handleChange={handleChange}
        disabled={!filters.brand}
      />
      <FilterField
        name="fuel"
        placeholder="Gorivo"
        vehicleOptions={vehicleOptions.fuels}
        value={filters.fuel}
        handleChange={handleChange}
      />
      <FilterField
        name="equipmentCategory"
        placeholder="Kategorija opreme"
        vehicleOptions={vehicleOptions.equipmentCategories}
        value={filters.equipmentCategory}
        handleChange={handleChange}
      />
      <FilterField
        name="equipment"
        placeholder="Oprema"
        vehicleOptions={filteredEquipments}
        value={filters.equipment}
        handleChange={handleChange}
        disabled={!filters.equipmentCategory}
      />
      <FilterField
        name="transmission"
        placeholder="Menjač"
        vehicleOptions={vehicleOptions.transmissions}
        value={filters.transmission}
        handleChange={handleChange}
      />
      <FilterField
        name="drivetrain"
        placeholder="Pogoni"
        vehicleOptions={vehicleOptions.drivetrains}
        value={filters.drivetrain}
        handleChange={handleChange}
      />
      <FilterField
        name="emission"
        placeholder="Emisije"
        vehicleOptions={vehicleOptions.emissions}
        value={filters.emission}
        handleChange={handleChange}
      />
      <FilterField
        name="location"
        placeholder="Zemlja"
        vehicleOptions={uniqueCountries}
        value={filters.location}
        handleChange={handleChange}
      />
      <div>
        <input
          type="number"
          placeholder="Godište od"
          className="w-36 mr-4 px-4 py-2 outline-none bg-body text-text border border-primary rounded-md"
        />
        <input
          type="number"
          placeholder="do"
          className="w-24 px-4 py-2 outline-none bg-body text-text border border-primary rounded-md"
        />
      </div>
      <input
        type="number"
        name="price"
        placeholder="Cijena do €"
        className="px-4 py-2 outline-none bg-body text-text border border-primary rounded-md"
        onChange={handleChange}
      />
      {/* <FilterField
        name="city"
        placeholder="Grad"
        vehicleOptions={vehicleOptions.locations}
        value={filters.location}
        handleChange={handleChange}
      /> */}
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
