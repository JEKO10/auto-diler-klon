import { apiRequest } from "../api/authApi";

export const getAllCars = () => {
  return apiRequest("get", "/posts/get_all_posts");
};

export const getCarById = (id) => {
  return apiRequest("get", `/posts/get_post/${id}`);
};

export const createCar = async (queryParams, formData) => {
  try {
    const response = await apiRequest(
      "post",
      `/posts/create_post?${queryParams}`,
      formData,
      "multipart/form-data"
    );

    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error creating car:", error);
    throw error;
  }
};
