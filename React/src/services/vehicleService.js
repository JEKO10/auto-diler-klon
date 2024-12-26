import { apiRequest } from "../api/authApi";

export const getVehicleTypesWithBodies = () =>
  apiRequest("get", "/vehicles/vehicle-types-with-bodies");

export const getBrandsWithModels = () =>
  apiRequest("get", "/vehicles/brands-with-models");

export const getEquipmentCategoryWithEquipments = () =>
  apiRequest("get", "/vehicles/equipment-category-with-equipments");

export const getTransmissions = () =>
  apiRequest("get", "/vehicles/transmissions");

export const getFuels = () => apiRequest("get", "/vehicles/fuels");

export const getDrivetrains = () => apiRequest("get", "/vehicles/drivetrains");

export const getEmissionStandards = () =>
  apiRequest("get", "/vehicles/emission-standards");

export const getLocations = () => apiRequest("get", "/vehicles/locations");
