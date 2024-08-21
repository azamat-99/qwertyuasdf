<script lang="ts" setup>
interface Props {
  path?: string;
  title?: string;
  date?: string;
  image?: string;
  alt?: string;
  gender?: string;
  status?: string;
  species?: string;
  location: Ilocatioin;
}
interface Ilocatioin {
  name: string;
  url: string;
}

withDefaults(defineProps<Props>(), {
  path: "/",
  title: "no-title",
  date: "no-date",
  alt: "no-alt",
});
</script>

<template>
  <article
    class="group border bg-white m-2 rounded-2xl shadow-md text-zinc-700"
  >
    <div class="grid grid-cols-1 sm:grid-cols-10 gap-1">
      <div class="sm:col-span-3" v-viewer>
        <img
          class="h-full w-full object-cover object-center rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none shadow-lg group-hover:scale-[1.02] transition-all duration-500"
          width="300"
          :src="image"
          :alt="alt"
        />
      </div>
      <div class="sm:col-span-7 p-5">
        <RouterLink
          :to="path.split('/api/')[1]"
          class="text-xl font-semibold text-black pb-1 hover:text-sky-400"
        >
          {{ title }}
        </RouterLink>
        <span class="text-ellipsis line-clamp-2">
          <span
            :class="
              gender == 'Male' ? 'status__icon_success' : 'status__icon_error'
            "
          ></span>
          {{ status + " -" + species }}
        </span>
        <div
          class="text-black dark:text-zinc-300 text-sm mt-2 mb-1 md:flex md:space-x-6"
        >
          <div class="flex flex-col">
            <span class="text-gray-500"> Last known location:</span>
            <RouterLink
              v-if="location.url"
              :to="location?.url?.split('/api/')[1]"
              class="hover:text-sky-400 py-1 text-lg font-semibold"
              >{{ location.name }}</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.status__icon_error {
  display: inline-block;
  height: 10px;
  width: 10px;
  margin-right: 0.375rem;
  background: rgb(214, 61, 46);
  border-radius: 50%;
}
.status__icon_success {
  display: inline-block;
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(85, 204, 68);
  border-radius: 50%;
}
</style>
