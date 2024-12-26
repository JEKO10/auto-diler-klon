import FilterForm from "../../components/filter/FilterForm";
import CarListing from "../../components/car/CarListing";
import { useEffect, useState } from "react";
import { useVehicleContext } from "../../contexts/VehicleContext";

const AllVehicles = () => {
  const { allCars, isLoading } = useVehicleContext();
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
    price: "",
    fromYear: "",
    toYear: "",
  });
  const [filteredCars, setFilteredCars] = useState([]);

  const handleFilterSubmit = (appliedFilters) => {
    const result = allCars.filter((car) => {
      return (
        (!appliedFilters.vehicleType ||
          car.vehicle_type_id == appliedFilters.vehicleType) &&
        (!appliedFilters.brand || car.brand_id == appliedFilters.brand) &&
        (!appliedFilters.model || car.model_id == appliedFilters.model) &&
        (!appliedFilters.location ||
          car.location_id == appliedFilters.location) &&
        (!appliedFilters.fuel || car.fuel_id == appliedFilters.fuel) &&
        (!appliedFilters.bodyType ||
          car.body_type_id == appliedFilters.bodyType) &&
        (!appliedFilters.equipment ||
          car.equipment_ids.includes(parseInt(appliedFilters.equipment))) &&
        (!appliedFilters.emission ||
          car.emission_standard_id == appliedFilters.emission) &&
        (!appliedFilters.drivetrain ||
          car.drivetrain_id == appliedFilters.drivetrain) &&
        (!appliedFilters.transmission ||
          car.transmission_id == appliedFilters.transmission) &&
        (!appliedFilters.price || car.price <= appliedFilters.price) &&
        (!appliedFilters.fromYear || car.year >= appliedFilters.fromYear) &&
        (!appliedFilters.toYear || car.year <= appliedFilters.toYear)
      );
    });
    setFilteredCars(result);
  };

  useEffect(() => {
    setFilteredCars(allCars);
  }, [allCars]);

  return (
    <section>
      <FilterForm
        isHome={false}
        filters={filters}
        setFilters={setFilters}
        onSubmitFilters={handleFilterSubmit}
      />
      <CarListing
        carData={filteredCars}
        isLoading={isLoading}
        title={"Svi oglasi"}
      />
    </section>
  );
};

export default AllVehicles;
