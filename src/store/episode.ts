import { getEpisodeById, getEpisodesApi } from "@/api";
import { ref, reactive } from "vue";
import type { IEpisodes, IEpisode, IQuery } from "../types";

export const episodes = ref<IEpisodes[]>();
export const episode = ref<IEpisode>();
export const query = reactive<IQuery>({
  page: 1,
  count: 0,
});

export const fetchEpisodes = async () => {
  const { data } = await getEpisodesApi(query);
  episodes.value = data.results;
  query.count = data.info.count;
};

export const fetchEpisodeById = async (id: number) => {
  const { data } = await getEpisodeById(id);
  episode.value = data;
};
