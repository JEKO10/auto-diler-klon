import { apiRequest } from "../api/authApi";

export const getAllCars = () => {
  return apiRequest("get", "/posts/get_all_posts");
};

export const getCarById = (id) => {
  return apiRequest("get", `/posts/get_post/${id}`);
};
