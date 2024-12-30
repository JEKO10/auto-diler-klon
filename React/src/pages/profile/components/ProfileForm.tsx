import React, { useState } from "react";
import { updateUser } from "../../../services/authService";

const ProfileForm = ({ userId, initialData }) => {
  const [formData, setFormData] = useState({
    firstName: initialData.first_name || "",
    lastName: initialData.last_name || "",
    contact: initialData.phone_number || "",
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
      setErrorMessage("Pokušajte ponovo kasnije.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white my-14 p-5 lg:p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Ažurirajte podatke
      </h2>
      {successMessage && (
        <p className="bg-green-100 text-green-800 my-3 p-3 rounded">
          {successMessage}
        </p>
      )}
      {errorMessage && (
        <p className="bg-red-100 text-red-800 my-4 p-3 rounded">
          {errorMessage}
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="col-span-2 lg:col-span-1">
          <label className="text-sm font-medium">Ime</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`border p-2 w-full rounded-md`}
          />
        </div>
        <div>
          <label className="text-sm font-medium">Prezime</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`border p-2 w-full rounded-md`}
          />
        </div>
        <div className="col-span-2">
          <label className="text-sm font-medium">Broj telefona</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="border p-2 w-full rounded-md"
          />
        </div>
        <div className="col-span-2">
          <label className="text-sm font-medium">Lozinka</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`border p-2 w-full rounded-md`}
          />
        </div>
        <div className="col-span-2 flex justify-between mt-6">
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
            disabled={loading}
          >
            {loading ? "Ažuriranje..." : "Potvrdi"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
