import { apiRequest } from "../api/authApi";

export const getAllCars = () => {
  return apiRequest("get", "/posts/get_all_posts");
};
