<script setup lang="ts">
import { fetchEpisodes, episodes, query } from "@/store/episode";
import EpisodeCard from "@/components/card/EpisodeCard.vue";
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { LocationQueryValue } from "vue-router";
import { ElPagination, ElButton, ElInput } from "element-plus";

onBeforeMount(fetchEpisodes);
const route = useRoute();
const router = useRouter();

const page = ref<LocationQueryValue | LocationQueryValue[]>(
  route.query.page || "1",
);
query.page = Number(page.value);

const currentPage = (page: number) => {
  query.page = page;
  router.push({ name: "episode", query: { page } });

  fetchEpisodes();
};
</script>

<template>
  <main class="container max-w-7xl mx-auto text-zinc-600">
    <!-- Filter -->
    <div class="grid sm:grid-cols-4 gap-5 py-8 px-2 m-4 border rounded-xl">
      <ElInput
        placeholder="Name"
        v-model="query.name"
        @keydown.enter="fetchEpisodes"
        clearable
      />
      <ElInput
        placeholder="Episode"
        v-model="query.episode"
        @keydown.enter="fetchEpisodes"
        clearable
      />
      <ElButton type="primary" @click="fetchEpisodes"> Search </ElButton>
    </div>
    <!-- Episode card -->
    <div class="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
      <template v-for="post in episodes" :key="post.id">
        <EpisodeCard
          :path="post.url"
          :title="post.name"
          :date="post.air_date"
          :episode="post.episode"
        />
      </template>
    </div>
    <!-- Pagination -->
    <el-pagination
      v-model:current-page="query.page"
      :page-size="20"
      size="large"
      :pager-count="7"
      background
      layout="prev, pager, next"
      class="flex justify-center mt-4"
      :total="query.count"
      @update:current-page="currentPage"
    />
  </main>
</template>
