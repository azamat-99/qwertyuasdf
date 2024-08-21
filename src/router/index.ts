import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/episode",
      name: "episode",
      component: () => import("../pages/episode/index.vue"),
    },
    {
      path: "/location",
      name: "location",
      component: () => import("../pages/location/index.vue"),
    },
    {
      path: "/episode/:id",
      component: () => import("../pages/episode/[id].vue"),
    },
    {
      path: "/location/:id",
      component: () => import("../pages/location/[id].vue"),
    },
    {
      path: "/character/:id",
      component: () => import("../pages/character/[id].vue"),
    },
  ],
});

export default router;
