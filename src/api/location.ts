import request from "@/utils/request";

export const getAllLocationsApi = (params: object) => {
  return request({
    url: "location",
    method: "GET",
    params,
  });
};

export const getLocationById = (id: number) => {
  return request({
    url: `location/${id}`,
    method: "GET",
  });
};
