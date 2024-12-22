import { callAuthUser } from "../api/authApi";

export const registerUser = (formData) => {
  return callAuthUser("/register", formData);
};

export const loginUser = (formData) => {
  return callAuthUser("/login", formData, "application/x-www-form-urlencoded");
};
