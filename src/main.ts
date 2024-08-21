import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueViewer from "v-viewer";

// Styles
import "./index.css";
import "vue3-toastify/dist/index.css";
import "element-plus/dist/index.css";
import "viewerjs/dist/viewer.css";

const app = createApp(App);

app.use(router);
app.use(VueViewer);

app.mount("#app");
