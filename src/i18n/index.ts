import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

export default createI18n({
  locale: "ru",
  legacy: false,
  globalInjection: true,
  messages: { en, ru },
});
