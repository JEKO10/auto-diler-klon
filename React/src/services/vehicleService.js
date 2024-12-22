import authApi from "../api/authApi";

export const getVehicleTypes = () => authApi.get("/vehicles/vehicle-types");
export const getBodyTypes = () => authApi.get("/vehicles/body-types");
export const getBrands = () => authApi.get("/vehicles/brands");
export const getModels = () => authApi.get("/vehicles/models");
export const getTransmissions = () => authApi.get("/vehicles/transmissions");
export const getFuels = () => authApi.get("/vehicles/fuels");
export const getDrivetrains = () => authApi.get("/vehicles/drivetrains");
export const getEmissionStandards = () =>
  authApi.get("/vehicles/emission-standards");
export const getEquipmentsCategory = () =>
  authApi.get("/vehicles/equipment-categories");
export const getEquipments = () => authApi.get("/vehicles/equipments");
export const getLocations = () => authApi.get("/vehicles/locations");
