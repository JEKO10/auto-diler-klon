import authApi from "../api/authApi";

export const authUser = async (
  endpoint,
  formData,
  contentType = "application/json"
) => {
  const config = {
    headers: {
      "Content-Type": contentType,
    },
  };

  const data =
    contentType === "application/x-www-form-urlencoded"
      ? new URLSearchParams(formData)
      : formData;

  return await authApi.post(endpoint, data, config);
};

export const registerUser = (formData) => {
  return authUser("/register", formData);
};

export const loginUser = (formData) => {
  return authUser("/login", formData, "application/x-www-form-urlencoded");
};
