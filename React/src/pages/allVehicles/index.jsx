import FilterForm from "../../components/FilterForm";
import CarListing from "../home/components/CarListing";

const AllVehicles = () => {
  return (
    <section>
      <FilterForm isHome={false} />
      <CarListing isHome={false} />
    </section>
  );
};

export default AllVehicles;
