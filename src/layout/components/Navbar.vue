<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import logo from "@/assets/rm512.png";
import LangSwitcher from "@/components/LangSwitcher.vue";
import Trans from "@/i18n/translation";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const route = useRoute();

const path = computed(() => route.fullPath.replace("/", ""));
</script>

<template>
  <div class="py-5 border-b dark:border-gray-800 font-semibold">
    <div
      class="flex px-6 container max-w-7xl justify-between mx-auto items-center"
    >
      <RouterLink :to="Trans.i18nRoute({ name: 'home' })">
        <img :src="logo" class="w-full h-10" />
      </RouterLink>
      <ul
        class="hidden sm:flex items-center space-x-3 sm:space-x-6 text-sm sm:text-lg"
      >
        <li>
          <RouterLink
            :to="Trans.i18nRoute({ name: 'episode' })"
            :class="{ 'text-sky-400': path.includes('episode') }"
          >
            {{ t("episode") }}
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="Trans.i18nRoute({ name: 'location' })"
            :class="{ 'text-sky-400 ': path.includes('location') }"
          >
            {{ t("location") }}
          </RouterLink>
        </li>
        <LangSwitcher />
      </ul>
    </div>
  </div>
</template>
