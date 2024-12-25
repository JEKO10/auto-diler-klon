import FilterForm from "../../components/filter/FilterForm";
import CarListing from "../../components/car/CarListing";
import { useEffect, useState } from "react";
import { getAllCars } from "../../services/carService";

const AllVehicles = () => {
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
  const [filteredModels, setFilteredModels] = useState([]);
  const [filteredBodyTypes, setFilteredBodyTypes] = useState([]);
  const [filteredEquipments, setFilteredEquipments] = useState([]);
  const [carData, setCarData] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCarData = async () => {
    try {
      const response = await getAllCars();
      setCarData(response.data);
      setFilteredCars(response.data);
    } catch (err) {
      console.log("Error: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCarData();
  }, []);

  const handleFilterSubmit = (appliedFilters) => {
    const result = carData.filter((car) => {
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

  return (
    <section>
      <FilterForm
        filteredModels={filteredModels}
        filteredBodyTypes={filteredBodyTypes}
        filteredEquipments={filteredEquipments}
        setFilteredModels={setFilteredModels}
        setFilteredBodyTypes={setFilteredBodyTypes}
        setFilteredEquipments={setFilteredEquipments}
        isHome={false}
        filters={filters}
        setFilters={setFilters}
        onSubmitFilters={handleFilterSubmit}
      />
      <CarListing carData={filteredCars} title={"Svi oglasi"} />
    </section>
  );
};

export default AllVehicles;
