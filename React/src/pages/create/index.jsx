import { useState } from "react";
import { createCar } from "../../services/carService";

const Create = () => {
  const [formData, setFormData] = useState({
    title: "Mazda 25122024",
    description: "Nova Mazda",
    price: 15200,
    year: 2024,
    mileage: 1,
    engine_displacement: 132,
    kilowatts: 125,
    horsepowers: 150,
    color: "blue",
    doors_number: "3",
    payload_capacity: "1200",
    axle_count: "1",
    user_id: 10,
    images: ["test.jpg"],
    fuel: "Dizel",
    brand: "Mercedes",
    model: "Clio",
    location: 1,
    emission_standard: "Eco",
    drivetrain: "front",
    transmission: "manual",
    vehicle_type: "small",
    body_type: "SUV",
    equipment_ids: 8,
  });

  const sendData = async () => {
    try {
      await createCar(formData);
      console.log("Car listing created successfully!");
    } catch (error) {
      console.error("Error creating car:", error);
      console.log("Failed to create listing.");
    }
  };

  return (
    <div>
      <button onClick={() => sendData(formData)}>Posaljki</button>
    </div>
  );
};

export default Create;
