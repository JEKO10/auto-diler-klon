import FilterForm from "../../components/filter/FilterForm";
import CarListing from "../../components/car/CarListing";

const AllVehicles = () => {
  return (
    <section>
      <FilterForm isHome={false} />
      <CarListing title={"Svi oglasi"} />
    </section>
  );
};

export default AllVehicles;
