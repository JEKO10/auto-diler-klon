import axios from "axios";

export const registerUser = async (formData) => {
  return await axios.post(
    "https://5ca4-79-140-150-98.ngrok-free.app/register",
    formData,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};

export const loginUser = async (formData) => {
  return await axios.post(
    "https://5ca4-79-140-150-98.ngrok-free.app/login",
    formData,
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }
  );
};
