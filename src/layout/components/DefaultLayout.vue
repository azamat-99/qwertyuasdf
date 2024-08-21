<script setup lang="ts">
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
</script>

<template>
  <Navbar />
  <slot />
  <Footer />
</template>
