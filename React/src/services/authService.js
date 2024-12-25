import { apiRequest } from "../api/authApi";

export const registerUser = (formData) =>
  apiRequest("post", "/register", formData);

export const loginUser = (formData) =>
  apiRequest("post", "/login", formData, "application/x-www-form-urlencoded");

export const getUserProfile = () => apiRequest("get", "/me");

export const getUserPosts = (user_id) =>
  apiRequest("get", `/me/get_user_posts/${user_id}`);
