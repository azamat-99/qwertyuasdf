<script setup lang="ts">
import { fetchCharacterById, character } from "@/store/character";
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
import moment from "moment";

const id = computed(() => {
  return Number(route.params.id) || 0;
});

onBeforeMount(() => {
  if (id.value !== 0) fetchCharacterById(id.value);
});

const formattedData = computed(() => {
  return {
    Name: character.value?.name,
    ["Created date"]: moment(character.value?.created).format(
      "YYYY.MM.DD HH:mm",
    ),
    Gender: character.value?.gender,
    Species: character.value?.species,
    Status: character.value?.status,
    Type: character.value?.type,
    ["Origin name"]: character.value?.origin.name,
    Episode: character.value?.episode,
  };
});
</script>

<template>
  <main class="container max-w-7xl mx-auto text-zinc-600 my-4">
    <div class="grid">
      <div class="flex justify-center my-6" v-viewer>
        <img :src="character?.image" class="rounded-xl object-contain" />
      </div>
      <template v-for="(item, key, index) in formattedData" :key="index">
        <div class="p-3 border flex justify-between">
          <span class="text-xl font-semibold">{{ key }}</span>
          <span class="text-lg max-w-44 line-clamp-1 sm:max-w-none">
            <template v-if="!Array.isArray(item)">
              {{ item }}
            </template>
            <template v-else>
              <ul v-if="Array.isArray(item)">
                <li v-for="episode in item" class="flex" :key="episode">
                  <a :href="episode" target="_blank">{{ episode }}</a>
                </li>
              </ul>
              /
            </template>
          </span>
        </div>
      </template>
    </div>
  </main>
</template>
