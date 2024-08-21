import request from "@/utils/request";

export const getCharactersApi = (params: object) => {
  return request({
    url: "character",
    method: "GET",
    params,
  });
};

export const getCharacterByIdApi = (id: number) => {
  return request({
    url: `character/${id}`,
    method: "GET",
  });
};
