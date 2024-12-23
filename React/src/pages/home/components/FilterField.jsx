import PropTypes from "prop-types";

const FilterField = ({
  placeholder,
  vehicleOptions,
  value,
  name,
  handleChange,
}) => {
  return (
    <div className="flex items-center border rounded-md px-4 py-2 w-full md:w-auto">
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className="w-full outline-none bg-body text-text"
      >
        <option value="">{placeholder}</option>
        {vehicleOptions.map((element) => (
          <option key={element.id} value={element.id}>
            {name === "country"
              ? element.country
              : name === "region"
              ? element.region
              : name === "city"
              ? element.city
              : element.name}
          </option>
        ))}
      </select>
    </div>
  );
};

FilterField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  vehicleOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      country: PropTypes.string,
      region: PropTypes.string,
      city: PropTypes.string,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FilterField;
