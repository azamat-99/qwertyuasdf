<script lang="ts" setup>
interface Props {
  path?: string;
  title?: string;
  date?: string;
  episode?: string;
}

withDefaults(defineProps<Props>(), {
  path: "/",
  title: "no-title",
  date: "no-date",
  episode: "no-episode",
});
</script>

<template>
  <article class="border m-2 rounded-2xl shadow-sm text-zinc-700">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-1">
      <div class="sm:col-span-7 p-5">
        <RouterLink
          :to="path.split('/api/')[1]"
          class="text-xl font-semibold text-black pb-1 hover:text-sky-400"
        >
          {{ title }}
        </RouterLink>
        <span class="flex justify-between text-ellipsis line-clamp-1">
          <span>{{ episode }}</span>
          {{ date }}
        </span>
      </div>
    </div>
  </article>
</template>
