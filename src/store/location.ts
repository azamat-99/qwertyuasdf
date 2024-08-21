import { getAllLocationsApi, getLocationById } from "@/api";
import { ref, reactive } from "vue";
import type { IAllLocations, IQuery, ILocation } from "../types";

export const locations = ref<IAllLocations[]>();
export const location = ref<ILocation>();
export const query = reactive<IQuery>({
  page: 1,
  count: 0,
});

export const fetchLocations = async () => {
  const { data } = await getAllLocationsApi(query);
  locations.value = data.results;
  query.count = data.info.count;
};

export const fetchLocationById = async (id: number) => {
  const { data } = await getLocationById(id);
  location.value = data;
};
