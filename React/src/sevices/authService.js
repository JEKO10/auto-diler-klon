import axios from "axios";

export const registerUser = async (formData) => {
  return await axios.post(
    "https://ce1d-79-140-150-179.ngrok-free.app/register",
    formData,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};

export const loginUser = async (formData) => {
  return await axios.post(
    "https://ce1d-79-140-150-179.ngrok-free.app/login",
    formData,
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }
  );
};
