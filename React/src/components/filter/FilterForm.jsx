import FilterField from "./FilterField";
import useVehicleOptions from "../../utils/useVehicleOptions";
import { useNavigate } from "react-router-dom";

const FilterForm = ({ isHome, filters, setFilters, onSubmitFilters }) => {
  const {
    vehicleOptions,
    filteredModels,
    filteredBodyTypes,
    filterModelsAndBodies,
    uniqueCountries,
    allEquipments,
  } = useVehicleOptions();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));

    if (name === "brand" || name === "vehicleType") {
      filterModelsAndBodies(
        name === "brand_id" ? value : filters.brand,
        name === "vehicle_type_id" ? value : filters.vehicleType
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isHome) {
      const queryString = new URLSearchParams(filters).toString();
      navigate(`/all?${queryString}`);
    } else {
      onSubmitFilters(filters);
    }
  };

  return (
    <section
      className={`border bg-body font-inter ${
        isHome ? "-mt-44 sm:-mt-72 md:-mt-16 lg:-mt-32 xl:-mt-44 " : "mt-14"
      } shadow-[0_1px_18px_8px_rgba(0,0,0,0.1)] rounded-md rounded-tl-none p-4 w-[90%] max-w-6xl mx-auto z-10 relative`}
    >
      <article className="bg-red-500 flex justify-start absolute -top-10 left-0 rounded-md rounded-bl-none rounded-br-none ">
        <p className="text-white px-6 py-2 rounded-md font-medium">
          Filtriraj pretragu
        </p>
      </article>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-wrap md:flex-row items-center gap-4"
      >
        {/* {!isHome && (
          <>
            <FilterField
              name="vehicleType"
              placeholder="Vrsta vozila"
              vehicleOptions={vehicleOptions.vehicleTypesWithBodies}
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
              vehicleOptions={vehicleOptions.brandsWithModels}
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
          vehicleOptions={vehicleOptions.equipmentCategoriesWithEquipments}
          value={filters.equipmentCategory}
          handleChange={handleChange}
          />
            <FilterField
              name="equipment"
              placeholder="Oprema"
              vehicleOptions={allEquipments}
              value={filters.equipment}
              handleChange={handleChange}
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
          </>
        )} */}
        <div>
          <input
            type="number"
            name="fromYear"
            value={filters.fromYear}
            onChange={handleChange}
            placeholder="Godište od"
            className="w-36 mr-4 px-4 py-2 outline-none bg-body text-text border border-primary rounded-md"
          />
          <input
            type="number"
            name="toYear"
            value={filters.toYear}
            onChange={handleChange}
            placeholder="do"
            className="w-24 px-4 py-2 outline-none bg-body text-text border border-primary rounded-md"
          />
        </div>
        <input
          type="number"
          value={filters.price}
          name="price"
          placeholder="Cijena do €"
          className="px-4 py-2 outline-none bg-body text-text border border-primary rounded-md"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-red-500 text-white w-full md:w-auto px-6 py-2 rounded-md font-medium"
        >
          Traži
        </button>
      </form>
    </section>
  );
};

export default FilterForm;
