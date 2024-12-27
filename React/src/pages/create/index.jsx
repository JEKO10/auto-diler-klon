import { useEffect, useState } from "react";
import FormInput from "./components/FormInput";
import { createCar } from "../../services/carService";

import useVehicleOptions from "../../utils/useVehicleOptions";
import { getUserProfile } from "../../services/authService";

const Create = () => {
  const {
    vehicleOptions,
    allEquipments,
    filterModelsAndBodies,
    filteredModels,
    filteredBodyTypes,
    uniqueCountries,
    uniqueCities,
  } = useVehicleOptions();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    year: "",
    mileage: "",
    engine_displacement: "",
    kilowatts: "",
    horsepowers: "",
    color: "",
    doors_number: "",
    payload_capacity: "",
    axle_count: "",
    user_id: "",
    fuel_id: "",
    model_id: "",
    brand_id: "",
    location_id: "",
    city_id: "",
    emission_standard_id: "",
    drivetrain_id: "",
    transmission_id: "",
    vehicle_type_id: "",
    body_type_id: "",
    equipment_ids: "",
    images: [],
  });
  const [imageFiles, setImageFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "number" ? Number(value) || "" : value,
    });

    if (name === "brand_id" || name === "vehicle_type_id") {
      filterModelsAndBodies(
        name === "brand_id" ? value : formData.brand_id,
        name === "vehicle_type_id" ? value : formData.vehicle_type_id
      );
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImageFiles(files);

    setFormData((prev) => ({
      ...prev,
      images: files.map((file) => file.name),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formattedData = {
      ...formData,
      body_type_id: parseInt(formData.body_type_id) || null,
      brand_id: parseInt(formData.brand_id) || null,
      city_id: parseInt(formData.city_id) || null,
      drivetrain_id: parseInt(formData.drivetrain_id) || null,
      emission_standard_id: parseInt(formData.emission_standard_id) || null,
      fuel_id: parseInt(formData.fuel_id) || null,
      location_id: parseInt(formData.location_id) || null,
      model_id: parseInt(formData.model_id) || null,
      transmission_id: parseInt(formData.transmission_id) || null,
      vehicle_type_id: parseInt(formData.vehicle_type_id) || null,
      equipment_ids: formData.equipment_ids
        .split(",")
        .map((id) => parseInt(id)),
    };

    const queryParams = new URLSearchParams(formattedData).toString();

    const payload = new FormData();
    imageFiles.forEach((file) => {
      payload.append("images", file);
    });

    try {
      await createCar(queryParams, payload);
      console.log("Car listing created successfully!");
    } catch (error) {
      console.error("Error creating car:", error);
      console.log("Failed to create listing.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const setUserId = async () => {
      try {
        const response = await getUserProfile();
        setFormData({ ...formData, user_id: response.data.id });
      } catch (err) {
        const errorMessage =
          err.response?.data?.detail ||
          "Preuzimanje informacija o korisniku nije uspjelo.";
        console.log(errorMessage);
      }
    };

    setUserId();
  }, []);

  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-14 text-center">Dodajte oglas</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14"
      >
        <FormInput
          label="Naslov"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
        />
        <FormInput
          label="Opis"
          name="description"
          type="text"
          value={formData.description}
          onChange={handleChange}
        />
        <FormInput
          label="Cijena (€)"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
        />
        <FormInput
          label="Godište"
          name="year"
          type="number"
          value={formData.year}
          onChange={handleChange}
        />
        <FormInput
          label="Kilometraža (km)"
          name="mileage"
          type="number"
          value={formData.mileage}
          onChange={handleChange}
        />
        <FormInput
          label="Motor (L)"
          name="engine_displacement"
          type="number"
          value={formData.engine_displacement}
          onChange={handleChange}
        />
        <FormInput
          label="Kilovati (kW)"
          name="kilowatts"
          type="number"
          value={formData.kilowatts}
          onChange={handleChange}
        />
        <FormInput
          label="Konjska snaga (KS)"
          name="horsepowers"
          type="number"
          value={formData.horsepowers}
          onChange={handleChange}
        />
        <FormInput
          label="Boja"
          name="color"
          type="text"
          value={formData.color}
          onChange={handleChange}
        />
        <FormInput
          label="Broj vrata"
          name="doors_number"
          type="text"
          value={formData.doors_number}
          onChange={handleChange}
        />
        <FormInput
          label="Kapacitet nosivosti"
          name="payload_capacity"
          type="text"
          value={formData.payload_capacity}
          onChange={handleChange}
        />
        <FormInput
          label="Axle Count"
          name="axle_count"
          type="text"
          value={formData.axle_count}
          onChange={handleChange}
        />
        <FormInput
          label="Gorivo"
          name="fuel_id"
          type="select"
          value={formData.fuel_id}
          onChange={handleChange}
          options={vehicleOptions.fuels}
        />
        <FormInput
          label="Marka"
          name="brand_id"
          type="select"
          value={formData.brand_id}
          onChange={handleChange}
          options={vehicleOptions.brandsWithModels}
        />
        <FormInput
          label="Model"
          name="model_id"
          type="select"
          value={formData.model_id}
          onChange={handleChange}
          options={filteredModels}
          disabled={!formData.brand_id}
        />
        <FormInput
          label="Zemlja"
          name="location_id"
          type="select"
          value={formData.location_id}
          onChange={handleChange}
          options={uniqueCountries}
        />
        <FormInput
          label="Grad"
          name="city_id"
          type="select"
          value={formData.city_id}
          onChange={handleChange}
          options={uniqueCities}
        />
        <FormInput
          label="Emisiona klasa motora"
          name="emission_standard_id"
          type="select"
          value={formData.emission_standard_id}
          onChange={handleChange}
          options={vehicleOptions.emissions}
        />
        <FormInput
          label="Pogon"
          name="drivetrain_id"
          type="select"
          value={formData.drivetrain_id}
          onChange={handleChange}
          options={vehicleOptions.drivetrains}
        />
        <FormInput
          label="Menjač"
          name="transmission_id"
          type="select"
          value={formData.transmission_id}
          onChange={handleChange}
          options={vehicleOptions.transmissions}
        />
        <FormInput
          label="Tip vozila"
          name="vehicle_type_id"
          type="select"
          value={formData.vehicle_type_id}
          onChange={handleChange}
          options={vehicleOptions.vehicleTypesWithBodies}
        />
        <FormInput
          label="Karoserija"
          name="body_type_id"
          type="select"
          value={formData.body_type_id}
          onChange={handleChange}
          options={filteredBodyTypes}
          disabled={!formData.vehicle_type_id}
        />
        <FormInput
          label="Oprema"
          name="equipment_ids"
          type="select"
          value={formData.equipment_ids}
          onChange={handleChange}
          options={allEquipments}
        />
        <div className="col-span-1 sm:col-span-2">
          <label className="text-sm font-medium">Upload Images</label>
          <input
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="bg-body text-text border rounded-md p-2 w-full"
          />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <button
            type="submit"
            className="bg-red-500 text-white w-full py-3 rounded-md"
            disabled={loading}
          >
            {loading ? "Dodavanje..." : "Dodaj"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Create;
