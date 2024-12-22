import authApi from "../api/authApi";

export const getUserProfile = async () => {
  const config = {
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "69420",
    },
  };
  return await authApi.get("/me", config);
};
