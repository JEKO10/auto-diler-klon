import { apiRequest } from "../api/authApi";

export const getVehicleTypes = () =>
  apiRequest("get", "/vehicles/vehicle-types");
export const getBodyTypes = () => apiRequest("get", "/vehicles/body-types");
export const getBrands = () => apiRequest("get", "/vehicles/brands");
export const getModels = () => apiRequest("get", "/vehicles/models");
export const getTransmissions = () =>
  apiRequest("get", "/vehicles/transmissions");
export const getFuels = () => apiRequest("get", "/vehicles/fuels");
export const getDrivetrains = () => apiRequest("get", "/vehicles/drivetrains");
export const getEmissionStandards = () =>
  apiRequest("get", "/vehicles/emission-standards");
export const getEquipmentsCategory = () =>
  apiRequest("get", "/vehicles/equipment-categories");
export const getEquipments = () => apiRequest("get", "/vehicles/equipments");
export const getLocations = () => apiRequest("get", "/vehicles/locations");
