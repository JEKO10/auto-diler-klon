import { useState } from "react";
import { updateUser } from "../../../services/authService";
import PropTypes from "prop-types";

const UpdateUserForm = ({ userId, initialData }) => {
  const [formData, setFormData] = useState({
    first_name: initialData.first_name || "",
    last_name: initialData.last_name || "",
    phone_number: initialData.phone_number || "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await updateUser(userId, formData);
      setSuccessMessage("Podaci uspješno ažurirani!");
    } catch (error) {
      const errorMsg =
        error.response?.data?.detail || "Pokušajte ponovo kasnije.";
      setErrorMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-lg mx-auto my-14 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Ažurirajte Vaše podatke</h2>
      {successMessage && (
        <p className="bg-green-100 text-green-800 p-3 rounded">
          {successMessage}
        </p>
      )}
      {errorMessage && (
        <p className="bg-red-100 text-red-800 p-3 rounded">{errorMessage}</p>
      )}
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Ime</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="border rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Prezime</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="border rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Broj telefona
          </label>
          <input
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="border rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Lozinka</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border rounded-md p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          disabled={loading}
        >
          {loading ? "Ažuriranje..." : "Potvrdi"}
        </button>
      </form>
    </section>
  );
};

UpdateUserForm.propTypes = {
  userId: PropTypes.number.isRequired,
  initialData: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    phone_number: PropTypes.string,
  }).isRequired,
};

export default UpdateUserForm;
