import { getCharacterByIdApi, getCharactersApi } from "@/api";
import { ref, reactive } from "vue";
import type { ICharacters, ICharacterById, IQuery } from "../types";

export const characters = ref<ICharacters[]>();
export const character = ref<ICharacterById>();

export const query = reactive<IQuery>({
  page: 1,
});

export const fetchCharacters = async () => {
  const { data } = await getCharactersApi(query);
  characters.value = data.results;
};

export const fetchCharacterById = async (id: number) => {
  const { data } = await getCharacterByIdApi(id);
  character.value = data;
};
