<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const path = computed(() => route.fullPath.replace("/", ""));
</script>

<template>
  <div class="flex justify-center w-full uppercase m-5">
    <RouterLink
      to="/episode"
      class="mx-2 hover:text-sky-400"
      :class="{ 'text-sky-400': path.includes('episode') }"
    >
      Episode
    </RouterLink>
    <RouterLink
      to="/location"
      class="mx-2 hover:text-sky-400"
      :class="{ 'text-sky-400': path.includes('location') }"
    >
      Location
    </RouterLink>
    <a
      href="https://status.rickandmortyapi.com/"
      target="_blank"
      class="mx-2 hover:text-sky-400"
    >
      Server status
    </a>
  </div>
</template>
