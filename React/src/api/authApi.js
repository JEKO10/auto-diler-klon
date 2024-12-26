import axios from "axios";

const authApi = axios.create({
  baseURL: "http://13.48.136.19/",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
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

export const apiRequest = (
  method,
  endpoint,
  data = null,
  contentType = "application/json"
) => {
  const config = {
    headers: {
      "Content-Type": contentType,
    },
  };

  const payload =
    contentType === "application/x-www-form-urlencoded"
      ? new URLSearchParams(data)
      : data;

  return authApi({
    method,
    url: endpoint,
    data: payload,
    ...config,
  });
};
export default authApi;
