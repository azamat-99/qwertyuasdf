<script setup lang="ts">
import Tr from "@/i18n/translation";
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElButton } from "element-plus";
import { useI18n } from "vue-i18n";
const { locale, setLocaleMessage } = useI18n();

const router = useRouter();
type Locale = "en" | "ru";

const locales = ref<Locale[]>(["en", "ru"]);
const currentLocale = computed(() => Tr.currentLocale);

const switchLanguage = async (value: Locale) => {
  const newLocale = value;
  await Tr.switchLanguage(newLocale);

  try {
    await router.replace({ params: { locale: newLocale } });
  } catch (e) {
    console.error(e);
    router.push("/");
  }
};
</script>

<template>
  <div class="language-switcher">
    <ElButton
      v-for="locale in locales"
      :key="locale"
      @click="switchLanguage(locale)"
      :type="locale === currentLocale ? 'primary' : 'default'"
    >
      {{ locale.toUpperCase() }}
    </ElButton>
  </div>
</template>
