import request from "@/utils/request";

export const getEpisodesApi = (params: object) => {
  return request({
    url: "episode",
    method: "GET",
    params,
  });
};

export const getEpisodeById = (id: number) => {
  return request({
    url: `episode/${id}`,
    method: "GET",
  });
};
