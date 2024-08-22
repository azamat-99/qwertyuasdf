import Trans from "@/i18n/translation";
import { createRouter, createWebHistory } from "vue-router";

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
    { path: "/", redirect: "/home" },
    {
      path: "/:locale?",
      component: () => import("../layout/default.vue"),
      name: "layout",
      beforeEnter: [Trans.routeMiddleware],
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("../pages/index.vue"),
        },
        {
          path: "episode",
          name: "episode",
          component: () => import("../pages/episode/index.vue"),
        },
        {
          path: "location",
          name: "location",
          component: () => import("../pages/location/index.vue"),
        },
        {
          path: "episode/:id",
          component: () => import("../pages/episode/[id].vue"),
        },
        {
          path: "location/:id",
          component: () => import("../pages/location/[id].vue"),
        },
        {
          path: "character/:id",
          component: () => import("../pages/character/[id].vue"),
        },
      ],
    },
    {
      path: "/:catchAll(.*)",
      component: () => import("../pages/404.vue"),
    },
  ],
});

export default router;
