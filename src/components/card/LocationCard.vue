<script lang="ts" setup>
import moment from "moment";

interface Props {
  path: string;
  title: string;
  date: string;
  type?: string;
  dimension?: string;
}

withDefaults(defineProps<Props>(), {
  path: "/",
  title: "no-title",
  date: "no-date",
  type: "",
});
</script>

<template>
  <article class="border m-2 rounded-2xl shadow-sm text-zinc-700">
    <div class="grid grid-cols-1 sm:grid-cols-10 gap-1">
      <div class="sm:col-span-10 p-5">
        <RouterLink
          :to="path.split('/api/')[1]"
          class="text-xl font-semibold text-black pb-1 hover:text-sky-400"
        >
          {{ title }}
        </RouterLink>
        <span class="text-ellipsis line-clamp-2">
          {{ type }}
        </span>
        <div class="flex justify-between">
          <span class="font-semibold"> {{ dimension }}</span>
          <span class="text-gray-500">{{
            moment(date).format("YYYY.MM.DD HH:mm")
          }}</span>
        </div>
      </div>
    </div>
  </article>
</template>
