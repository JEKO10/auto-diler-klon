import PropTypes from "prop-types";

const FilterField = ({
  placeholder,
  vehicleOptions,
  value = "",
  name,
  disabled,
  handleChange,
}) => {
  return (
    <div className="flex items-center border border-primary rounded-md w-full md:w-auto">
      <select
        name={name}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        className="px-4 py-2 w-full outline-none bg-body text-text appearance-none"
      >
        <option value="">{placeholder}</option>
        {vehicleOptions.map((element) => (
          <option key={element.id} value={element.id}>
            {/* {name === "country"
              ? element.country
              : name === "region"
              ? element.region
              : name === "city"
              ? element.city
              : element.name} */}
            {element.name}
          </option>
        ))}
      </select>
    </div>
  );
};

FilterField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  vehicleOptions: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};

export default FilterField;
