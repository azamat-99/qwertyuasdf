<script setup lang="ts">
import Trans from "@/i18n/translation";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
const { t } = useI18n();

const route = useRoute();

const path = computed(() => route.fullPath.replace("/", ""));
</script>

<template>
  <div class="flex justify-center w-full uppercase m-5">
    <RouterLink
      :to="Trans.i18nRoute({ name: 'episode' })"
      class="mx-2 hover:text-sky-400"
      :class="{ 'text-sky-400': path.includes('episode') }"
    >
      {{ t("episode") }}
    </RouterLink>
    <RouterLink
      :to="Trans.i18nRoute({ name: 'location' })"
      class="mx-2 hover:text-sky-400"
      :class="{ 'text-sky-400': path.includes('location') }"
    >
      {{ t("location") }}
    </RouterLink>
    <a
      href="https://status.rickandmortyapi.com/"
      target="_blank"
      class="mx-2 hover:text-sky-400"
    >
      {{ t("server_status") }}
    </a>
  </div>
</template>
