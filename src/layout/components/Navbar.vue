<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import logo from "@/assets/rm512.png";

const route = useRoute();

const path = computed(() => route.fullPath.replace("/", ""));
</script>

<template>
  <div class="py-5 border-b dark:border-gray-800 font-semibold">
    <div
      class="flex px-6 container max-w-7xl justify-between mx-auto items-center"
    >
      <RouterLink to="/">
        <img :src="logo" class="w-full h-10" />
      </RouterLink>
      <ul
        class="hidden sm:flex items-center space-x-3 sm:space-x-6 text-sm sm:text-lg"
      >
        <li>
          <RouterLink
            to="/episode"
            :class="{ 'text-sky-400': path.includes('episode') }"
          >
            Episode
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/location"
            :class="{ 'text-sky-400 ': path.includes('location') }"
          >
            Location
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
