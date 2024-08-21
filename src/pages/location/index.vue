<script setup lang="ts">
import { fetchLocations, locations, query } from "@/store/location";
import LocationCard from "@/components/card/LocationCard.vue";
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { LocationQueryValue } from "vue-router";
import { ElPagination, ElInput, ElButton } from "element-plus";

onBeforeMount(fetchLocations);
const route = useRoute();
const router = useRouter();

const page = ref<LocationQueryValue | LocationQueryValue[]>(
  route.query.page || "1",
);
query.page = Number(page.value);

const currentPage = (page: number) => {
  query.page = page;
  router.push({ name: "location", query: { page } });

  fetchLocations();
};
</script>

<template>
  <main class="container max-w-7xl mx-auto text-zinc-600">
    <!-- Filter -->
    <div class="grid sm:grid-cols-4 gap-5 py-8 px-2 m-4 border rounded-xl">
      <ElInput
        placeholder="Name"
        v-model="query.name"
        @keydown.enter="fetchLocations"
        clearable
      />
      <ElInput
        placeholder="Type"
        v-model="query.type"
        @keydown.enter="fetchLocations"
        clearable
      />
      <ElInput
        placeholder="Dimension"
        v-model="query.dimension"
        @keydown="fetchLocations"
        clearable
      />
      <ElButton type="primary" @click="fetchLocations"> Search </ElButton>
    </div>
    <!-- Location card -->
    <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
      <template v-for="post in locations" :key="post.url">
        <LocationCard
          :path="post.url"
          :title="post.name"
          :date="post.created"
          :type="post.type"
          :dimension="post.dimension"
        />
      </template>
    </div>
    <!-- Pagination -->
    <el-pagination
      :page-size="20"
      :pager-count="7"
      v-model:current-page="query.page"
      size="large"
      background
      layout="prev, pager, next"
      class="flex justify-center mt-4"
      :total="query.count"
      @update:current-page="currentPage"
    />
  </main>
</template>
