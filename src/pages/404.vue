<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800"
  >
    <el-result icon="error" title="404" sub-title="Oops! Page not found.">
      <template #extra>
        <el-button
          type="primary"
          size="large"
          @click="goHome()"
          class="transition-all duration-300 transform hover:scale-105"
        >
          Go to Home
        </el-button>
      </template>
    </el-result>
    <div class="mt-10 text-center text-gray-600">
      <p class="text-lg">Sorry, the page you are looking for doesn't exist.</p>
      <p class="text-sm mt-2">
        You might have the wrong address, or the page may have moved.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElResult, ElButton } from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = () => {
  router.push({ name: "home" });
};
</script>
