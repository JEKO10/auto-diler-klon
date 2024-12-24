import FilterForm from "../../components/FilterForm";
import CarListing from "../../components/CarListing";

const AllVehicles = () => {
  return (
    <section>
      <FilterForm isHome={false} />
      <CarListing title={"Svi oglasi"} />
    </section>
  );
};

export default AllVehicles;
