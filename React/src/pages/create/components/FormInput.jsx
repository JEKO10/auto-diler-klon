import PropTypes from "prop-types";

const FormInput = ({
  label,
  name,
  type,
  value,
  onChange,
  options,
  disabled = false,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="border rounded-md p-2 w-full"
          disabled={disabled}
        >
          <option value="">{`Select ${label}`}</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="border rounded-md p-2 w-full"
        />
      )}
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
};

FormInput.defaultProps = {
  options: [],
  multiple: false,
  disabled: false,
};

export default FormInput;
