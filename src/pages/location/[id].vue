<script setup lang="ts">
import { fetchLocationById, location } from "@/store/location";
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
import moment from "moment";
import { ElSpace } from "element-plus";

const id = computed(() => {
  return Number(route.params.id) || 0;
});

onBeforeMount(() => {
  if (id.value !== 0) fetchLocationById(id.value);
});

const formattedData = computed(() => {
  return {
    Name: location.value?.name,
    ["Created date"]: moment(location.value?.created).format(
      "YYYY.MM.DD HH:mm",
    ),
    Dimension: location.value?.dimension,
    Type: location.value?.type,
    Residents: location.value?.residents,
  };
});
</script>

<template>
  <main class="container max-w-7xl mx-auto text-zinc-600 my-4">
    <div class="row-span-2">
      <template v-for="(item, key, index) in formattedData" :key="index">
        <div class="p-3 border flex justify-between">
          <span class="text-xl font-semibold">{{ key }}</span>
          <span class="text-lg max-w-44 line-clamp-1 sm:max-w-none">
            <template v-if="!Array.isArray(item)">
              {{ item }}
            </template>
            <template v-else>
              <ul v-if="Array.isArray(item)">
                <li v-for="residents in item" class="flex" :key="residents">
                  <a :href="residents" target="_blank">{{ residents }}</a>
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
