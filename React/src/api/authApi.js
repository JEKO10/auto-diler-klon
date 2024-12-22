import axios from "axios";

const authApi = axios.create({
  baseURL: "https://074a-79-140-150-241.ngrok-free.app/",
  timeout: 3000,
  headers: { "Content-Type": "application/json" },
});

authApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

authApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Neovlašćeno!");
    }
    return Promise.reject(error);
  }
);

export default authApi;
