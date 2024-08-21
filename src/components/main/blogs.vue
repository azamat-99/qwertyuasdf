<script lang="ts" setup>
import ArchiveCard from "@/components/card/card.vue";
import { characters, fetchCharacters, query } from "@/store/character";
import { onBeforeMount, computed } from "vue";

onBeforeMount(fetchCharacters);
</script>

<template>
  <div class="px-4">
    <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
      <h2 class="text-4xl font-semibold text-black dark:text-zinc-300">
        Characters
      </h2>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <template v-for="post in characters" :key="post.id">
        <ArchiveCard
          :path="post.url"
          :title="post.name"
          :date="post.created"
          :location="post.location"
          :image="post.image"
          :alt="post.name"
          :status="post.status"
          :gender="post.gender"
          :species="post.species"
        />
      </template>
    </div>
  </div>
</template>
